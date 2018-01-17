const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');
const scopes = 'read_products, write_products';

const tunnelAddress = 'https://36acbfe8.ngrok.io';
const productionWebAddress = 'https://shopify-crypto-pay.herokuapp.com';
const isDevelopment = process.env.NODE_ENV !== "production";
const appUri = isDevelopment ? tunnelAddress : productionWebAddress;
const forwardingAddress = appUri + '/auth/shopify/callback';
const subdomain = "headphonesdotcom";

const apiKey = process.env.SHOPIFY_APP_KEY;
const apiSecret = process.env.SHOPIFY_APP_SECRET;

exports.landingPage = (req, res) => {
  res.render('index');
};

exports.install = (req, res) => {
  const shop = req.query.shop;
  const state = nonce();

  if (!shop) {
    return res.status(400).send('Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request');
  }

  const installUrl = 'https://' + shop +
    '/admin/oauth/authorize?client_id=' + apiKey +
    '&scope=' + scopes +
    '&state=' + state +
    '&redirect_uri=' + forwardingAddress;

  res.cookie('state', state);
  res.redirect(installUrl);
};

exports.authorize = (req, res) => {
  const { shop, hmac, code, state } = req.query;
  const stateCookie = cookie.parse(req.headers.cookie).state;

  if (state !== stateCookie) {
    return res.status(403).send('Request origin cannot be verified');
  }

  if (shop && hmac && code) {
    const map = Object.assign({}, req.query);
    delete map['signature'];
    delete map['hmac'];

    const message = querystring.stringify(map);

    const generatedHash = crypto
      .createHmac('sha256', apiSecret)
      .update(message)
      .digest('hex');

    if (generatedHash !== hmac) {
      return res.status(400).send('HMAC validation failed');
    }

    const accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';

    const accessTokenPayload = {
      client_id: apiKey,
      client_secret: apiSecret,
      code,
    };

    request.post(accessTokenRequestUrl, { json: accessTokenPayload })
      .then((accessTokenResponse) => {
        const accessToken = accessTokenResponse.access_token;

        const shopRequestUrl = 'https://' + shop + '/admin/shop.json';
        const shopRequestHeaders = { 'X-Shopify-Access-Token': accessToken };

        request.get(shopRequestUrl, { headers: shopRequestHeaders })
          .then((shopResponse) => {
            res.end(shopResponse);
          })
          .catch((error) => {
            res.status(error.statusCode).send(error.error.error_description);
          });
      })
      .catch((error) => {
        res.status(error.statusCode).send(error.error.error_description);
      });
  } else {
    res.status(400).send('Required parameters missing');
  }
};

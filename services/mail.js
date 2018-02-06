const keys = require('../config/keys');
const constants = require('../constants');
const template = require('./emailTemplate');

const transport = require('mailgun-js')({
  apiKey: keys.MG_API_SECRET,
  // domain: 'mg.premiumsound.com'
  domain: 'sandbox2dfbe3a4b772492dab3d705cc07dd57c.mailgun.org'
});

const _getWalletAddress = symbol => {
  switch (symbol) {
    case 'ETH':
      return constants.ETHEREUM_WALLET;
      break;
    case 'LTC':
      return constants.LITECOIN_WALLET;
      break;
    case 'REQ':
      return constants.REQUEST_WALLET;
      break;
    case 'XRP':
      return constants.RIPPLE_WALLET;
      break;
    case 'XRB':
      return constants.NANO_WALLET;
      break;
    case 'ZRX':
      return constants.ZRX_WALLET;
      break;
    default:
      return 'No wallet address found for this currency';
  }
};

const _generateOptions = ({
  variantTitle,
  variantPriceUSD,
  email,
  firstName,
  lastName,
  productTitle,
  coinName,
  coinSymbol,
  _id,
  date,
  priceInCrypto
}) => {
  // Get coin wallet addresss from constants file based on symbol.
  const walletAddress = _getWalletAddress(coinSymbol);

  // Context is an object used by Handlebars to interpolate values inside of the e-mail body.
  const context = {
    _id,
    firstName,
    productTitle,
    variantTitle,
    variantPriceUSD,
    coinName,
    coinSymbol,
    date,
    priceInCrypto,
    walletAddress,
    companyName: constants.COMPANY_NAME,
    companyEmail: constants.COMPANY_EMAIL,
    companyPhone: constants.COMPANY_PHONE
  };

  // Use Handlebars to interpolate variables into the e-mail body
  const confirmation = template(context);

  const options = {
    from: `${constants.COMPANY_NAME} <info@headphones.com>`,
    to: email,
    bcc: 'jordan@headphones.com',
    subject: `${constants.COMPANY_NAME} - Crypto Pay`,
    html: confirmation
  };

  return options;
};

exports.sendEmail = async args => {
  if (args.variantTitle === 'Default Title') {
    args.variantTitle = '';
  }

  const options = _generateOptions(args);

  try {
    const message = await transport.messages().send(options);
  } catch (err) {
    return console.log(err);
  }
};

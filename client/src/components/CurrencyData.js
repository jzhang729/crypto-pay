import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Spinner } from '@shopify/polaris';
import { unixTimeConverter } from '../utils/unixTimeConverter';

const CurrencyData = ({
  loading,
  coinPriceUSD,
  coinName,
  coinSymbol,
  coinLastUpdated,
  fetchCurrency,
  currency
}) => {
  return (
    <div className="currency__data">
      {loading ? (
        <div className="currency__data--loading">
          <Spinner />
        </div>
      ) : (
        <div>
          <Card>
            <Card.Section subdued>
              <List>
                <List.Item>
                  <strong>Name: </strong>
                  <br />
                  {coinName} ({coinSymbol})
                </List.Item>
                <List.Item>
                  <strong>{coinSymbol} / USD: </strong>
                  <br />
                  {coinPriceUSD} USD
                </List.Item>
                <List.Item>
                  <strong>Data Last Fetched: </strong>
                  <br />
                  {unixTimeConverter(coinLastUpdated)}
                </List.Item>
              </List>
            </Card.Section>
          </Card>
          <sub>
            Data provided by:
            <a
              href="http://www.coinmarketcap.com"
              target="_blank"
              rel="noopener noreferrer">
              {' '}
              Coin Market Cap
            </a>
          </sub>
        </div>
      )}
    </div>
  );
};

CurrencyData.propTypes = {
  loading: PropTypes.bool,
  coinPriceUSD: PropTypes.string,
  coinName: PropTypes.string,
  coinSymbol: PropTypes.string,
  coinLastUpdated: PropTypes.string,
  fetchCurrency: PropTypes.func,
  currency: PropTypes.string
};

export default CurrencyData;

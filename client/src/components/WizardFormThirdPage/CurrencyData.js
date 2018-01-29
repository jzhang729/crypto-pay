import React from 'react';
import { Card, List, Spinner } from '@shopify/polaris';
import { unixTimeConverter } from '../../utils/unixTimeConverter';

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
                  <strong>XRB / USD: </strong>
                  {coinPriceUSD} USD
                </List.Item>
                <List.Item>
                  <strong>Name: </strong>
                  {coinName}
                </List.Item>
                <List.Item>
                  <strong>Symbol: </strong>
                  {coinSymbol}
                </List.Item>
                <List.Item>
                  <strong>Last Updated: </strong>
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

export default CurrencyData;

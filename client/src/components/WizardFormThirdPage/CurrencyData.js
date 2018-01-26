import React from 'react';
import { Button, Card, List, Spinner } from '@shopify/polaris';
import { unixTimeConverter } from '../../utils/unixTimeConverter';

const CurrencyData = ({
  loading,
  currencyData: {
    price_usd: priceUSD,
    name,
    symbol,
    last_updated: lastUpdated
  },
  fetchCurrency,
  currency
}) => {
  return (
    <div className="currency__data">
      {loading ? (
        <div className="currency__data--loading">
          <p>Please wait while we fetch the latest currency data:</p>
          <Spinner />
        </div>
      ) : (
        <div>
          <Card>
            <Card.Section subdued>
              <List>
                <List.Item>
                  <strong>XRB / USD: </strong>
                  {priceUSD}
                </List.Item>
                <List.Item>
                  <strong>Name: </strong>
                  {name}
                </List.Item>
                <List.Item>
                  <strong>Symbol: </strong>
                  {symbol}
                </List.Item>
                <List.Item>
                  <strong>Last Updated: </strong>
                  {unixTimeConverter(lastUpdated)}
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
              Coin Market Cap
            </a>
          </sub>
        </div>
      )}

      <div style={{ margin: '1rem 0' }}>
        <Button outline onClick={() => fetchCurrency(currency)}>
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default CurrencyData;

// 24h_volume_usd:
// "20180400.0"
// available_supply:
// "133248289.0"
// id:
// "raiblocks"
// last_updated:
// "1516859353"
// market_cap_usd:
// "1857827597.0"
// max_supply:
// "133248290.0"
// name:
// "RaiBlocks"
// percent_change_1h:
// "0.29"
// percent_change_24h:
// "-0.57"
// percent_change_7d:
// "-19.22"
// price_btc:
// "0.00120426"
// price_usd:
// "13.9426"
// rank:
// "23"
// symbol:
// "XRB"
// total_supply:
// "133248289.0"

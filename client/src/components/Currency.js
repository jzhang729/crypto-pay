import React from 'react';
import { Button } from '@shopify/polaris';
import CurrencySelector from './CurrencySelector';
import CurrencyData from './CurrencyData';

const Currency = ({
  currency,
  onChange,
  loading,
  coinPriceUSD,
  coinName,
  coinSymbol,
  coinLastUpdated,
  fetchCurrency
}) => {
  return (
    <div className="currency">
      <CurrencySelector currency={currency} onChange={onChange} />
      <sub>
        Don't see a currency listed that you think we should add?{' '}
        <a href="mailto:info@headphones.com">Let us know</a>!
      </sub>
      {!currency ? null : (
        <div style={{ margin: '2rem 0' }}>
          <CurrencyData
            loading={loading}
            currency={currency}
            coinPriceUSD={coinPriceUSD}
            coinName={coinName}
            coinSymbol={coinSymbol}
            coinLastUpdated={coinLastUpdated}
          />

          <div style={{ margin: '1rem 0' }}>
            <Button outline onClick={() => fetchCurrency(currency)}>
              Refresh
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;

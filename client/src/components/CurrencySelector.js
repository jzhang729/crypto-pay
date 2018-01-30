import React from 'react';
import { Select } from '@shopify/polaris';

const CurrencySelector = ({ onChange, currency }) => {
  return (
    <div>
      <Select
        onChange={onChange}
        value={currency}
        placeholder="Select from the list"
        options={[
          {
            label: 'Bitcoin',
            value: 'bitcoin'
          },
          {
            label: 'Dogecoin',
            value: 'dogecoin'
          },
          {
            label: 'Ethereum',
            value: 'ethereum'
          },
          {
            label: 'Ripple',
            value: 'ripple'
          },
          {
            label: 'Raiblocks',
            value: 'raiblocks'
          }
        ]}
      />
    </div>
  );
};

export default CurrencySelector;

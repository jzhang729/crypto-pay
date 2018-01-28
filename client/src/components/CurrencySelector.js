import React from 'react';
import { Select } from '@shopify/polaris';

const CurrencySelector = ({ onChange, currency }) => {
  return (
    <div>
      <Select
        onChange={onChange}
        value={currency}
        options={[
          {
            label: 'Select from the list',
            value: ''
          },
          {
            label: 'Raiblocks',
            value: 'raiblocks'
          },
          {
            label: 'Dogecoin',
            value: 'dogecoin'
          },
          {
            label: 'Ripple',
            value: 'ripple'
          }
        ]}
      />
    </div>
  );
};

export default CurrencySelector;

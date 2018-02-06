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
            label: '0x',
            value: '0x'
          },
          {
            label: 'Ethereum',
            value: 'ethereum'
          },
          {
            label: 'Litecoin',
            value: 'litecoin'
          },
          {
            label: 'Nano',
            value: 'raiblocks'
          },
          {
            label: 'Request Network',
            value: 'request-network'
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

// Stellar and Ripple are not in the list for now because they have deposit tag logic that needs to be accounted for.

import React from 'react';
import { Select } from '@shopify/polaris';

const CurrencySelector = ({ onChange, currency }) => {
  return (
    <div>
      <Select
        onChange={onChange}
        value={currency}
        placeholder="Choose your currency"
        options={[
          {
            label: '0x',
            value: '0x'
          },
          {
            label: 'Bitcoin',
            value: 'bitcoin'
          },
          {
            label: 'Ethereum',
            value: 'ethereum'
          },
          {
            label: 'Ethereum Classic',
            value: 'ethereum-classic'
          },
          {
            label: 'EOS',
            value: 'eos'
          },
          {
            label: 'Cardano',
            value: 'cardano'
          },
          {
            label: 'Gifto',
            value: 'gifto'
          },
          {
            label: 'Icon',
            value: 'icon'
          },
          {
            label: 'INS',
            value: 'ins-ecosystem'
          },
          {
            label: 'Litecoin',
            value: 'litecoin'
          },
          {
            label: 'Lisk',
            value: 'lisk'
          },
          {
            label: 'Nano',
            value: 'raiblocks'
          },
          {
            label: 'Neo',
            value: 'neo'
          },
          {
            label: 'Request Network',
            value: 'request-network'
          },
          {
            label: 'Tron',
            value: 'tron'
          },
          {
            label: 'VeChain',
            value: 'vechain'
          }
        ]}
      />
    </div>
  );
};

export default CurrencySelector;

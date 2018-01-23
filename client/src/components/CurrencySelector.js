import React, { Component } from 'react';
import { Select } from '@shopify/polaris';

class CurrencySelector extends Component {
  render() {
    return (
      <div>
        <Select
          onChange={this.props.onSwitchCurrency}
          value={this.props.currency}
          options={[
            {
              label: 'Select from the list',
              value: 'select'
            },
            {
              label: 'Raiblocks',
              value: 'raiblocks'
            }
          ]}
        />
      </div>
    );
  }
}

export default CurrencySelector;

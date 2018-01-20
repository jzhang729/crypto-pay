import React, { Component } from 'react';
import { Select } from '@shopify/polaris';

class CurrencySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'select'
    };
  }
  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Select
          onChange={this.onChange.bind(this)}
          value={this.state.value}
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
          selected={['']}
        />
      </div>
    );
  }
}

export default CurrencySelector;

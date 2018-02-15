// CountryDropdown contains logic to render a single label and select dropdown
import React, { Component } from 'react';
import { Select } from '@shopify/polaris';
import classNames from 'classnames';

class CountryDropdown extends Component {
  render() {
    const {
      input,
      label,
      meta: { error, touched },
      onCountryChange
    } = this.props;

    const failedValidation = touched && error;

    const inputClasses = classNames({
      'form__error--input': failedValidation
    });

    const options = [
      { label: 'Select from the list', value: '' },
      { label: 'Canada', value: 'Canada' },
      { label: 'United States', value: 'USA' }
    ];

    return (
      <div className="form__field">
        <div style={{ display: 'block' }}>
          <label>{label}</label>
          {failedValidation ? (
            <span className="form__error--label">{error}</span>
          ) : null}
        </div>
        <div className={inputClasses}>
          <Select
            {...input}
            options={options}
            onChange={value => {
              onCountryChange(value);
              this.props.input.onChange(value);
            }}
          />
        </div>
      </div>
    );
  }
}

export default CountryDropdown;

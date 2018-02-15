import React, { Component } from 'react';
import { Field } from 'redux-form';
import CountryDropdown from './CountryDropdown';

class CountrySelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCanada: false
    };

    this._handleOtherCountry = this._handleOtherCountry.bind(this);
  }

  _handleOtherCountry(value) {
    this.setState({
      isCanada: value === 'Canada' ? true : false
    });
  }

  render() {
    return (
      <div style={{ flex: '1 1 auto' }}>
        <Field
          name="country"
          label="Country"
          onCountryChange={this._handleOtherCountry}
          component={CountryDropdown}
        />

        {this.state.isCanada ? (
          <p style={{ marginLeft: '1rem' }}>
            <em>{this.props.disclaimer}</em>
          </p>
        ) : null}
      </div>
    );
  }
}
export default CountrySelect;

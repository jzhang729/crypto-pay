import React, { Component } from 'react';
import { Field } from 'redux-form';
import FormTextField from './FormTextField';
import CountryDropdown from './CountryDropdown';

class CountrySelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otherCountry: false
    };

    this.renderComponent = this.renderComponent.bind(this);
    this._handleOtherCountry = this._handleOtherCountry.bind(this);
  }

  _handleOtherCountry(value) {
    if (value === 'Other') {
      this.setState({
        otherCountry: true
      });
    }
  }

  renderComponent() {
    if (this.state.otherCountry) {
      return (
        <div style={{ flex: '1 1 auto' }}>
          <Field
            name="country"
            label="Please specify country:"
            component={FormTextField}
          />
          <p style={{ marginLeft: '1rem' }}>
            <em>{this.props.disclaimer}</em>
            <a
              onClick={e => {
                e.preventDefault();

                this.setState({
                  otherCountry: false
                });
              }}
              style={{ marginLeft: '1rem', cursor: 'pointer' }}>
              Cancel
            </a>
          </p>
        </div>
      );
    }

    return (
      <Field
        name="country"
        label="Country"
        onCountryChange={this._handleOtherCountry}
        component={CountryDropdown}
      />
    );
  }

  render() {
    return this.renderComponent();
  }
}

export default CountrySelect;

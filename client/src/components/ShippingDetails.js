import React, { Component } from 'react';
import { Field } from 'redux-form';
import FormTextField from './FormTextField';
import FormSelectDropdown from './FormSelectDropdown';

class ShippingDetails extends Component {
  render() {
    return (
      <div>
        <div className="form__section">
          <Field
            name="firstName"
            label="First Name"
            component={FormTextField}
            type="text"
          />
          <Field
            name="lastName"
            label="Last Name"
            component={FormTextField}
            type="text"
          />
        </div>

        <div className="form__section">
          <Field
            name="email"
            label="E-mail"
            component={FormTextField}
            type="email"
          />
        </div>

        <div className="form__section">
          <Field
            name="address1"
            label="Address (Line 1)"
            component={FormTextField}
            type="text"
          />
        </div>

        <div className="form__section">
          <Field
            name="address2"
            label="Address (Line 2)"
            component={FormTextField}
            type="text"
          />
        </div>

        <div className="form__section">
          <Field
            name="city"
            label="City"
            component={FormTextField}
            type="text"
          />
          <Field
            name="stateProv"
            label="State / Province"
            component={FormTextField}
            type="text"
            small={true}
          />
        </div>

        <div className="form__section">
          <Field
            name="country"
            label="Country"
            component={FormSelectDropdown}
          />
        </div>
      </div>
    );
  }
}

export default ShippingDetails;

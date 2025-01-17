import React, { Component } from 'react';
import { Field } from 'redux-form';
import FormTextField from './FormTextField';
import CountrySelect from './CountrySelect';

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
            maxLength={50}
          />
          <Field
            name="lastName"
            label="Last Name"
            component={FormTextField}
            type="text"
            maxLength={50}
          />
        </div>

        <div className="form__section">
          <Field
            name="email"
            label="E-mail"
            component={FormTextField}
            type="email"
            maxLength={100}
          />
        </div>

        <div className="form__section">
          <Field
            name="address1"
            label="Address (Line 1)"
            component={FormTextField}
            type="text"
            maxLength={255}
          />
        </div>

        <div className="form__section">
          <Field
            name="address2"
            label="Address (Line 2)"
            component={FormTextField}
            type="text"
            maxLength={255}
          />
        </div>

        <div className="form__section">
          <Field
            name="city"
            label="City"
            component={FormTextField}
            type="text"
            maxLength={255}
          />
          <Field
            name="stateProv"
            label="State / Province"
            component={FormTextField}
            type="text"
            maxLength={2}
            small={true}
          />
        </div>

        <div className="form__section">
          <CountrySelect disclaimer="For countries outside of the US, an extra shipping charge may
          apply." />
        </div>

        <div className="form__section">
          <Field
            name="postalZip"
            label="Zip / Postal Code"
            component={FormTextField}
            type="text"
            maxLength={7}
          />
        </div>
      </div>
    );
  }
}

export default ShippingDetails;

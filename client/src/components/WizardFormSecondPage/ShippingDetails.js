import React, { Component } from 'react';
import { Field } from 'redux-form';
import FormTextField from './FormTextField';
import FormSelectDropdown from './FormSelectDropdown';

class ShippingDetails extends Component {
  render() {
    return (
      <div>
        {/* <Field
          name="customerId"
          component="input"
          type="hidden"
          value={this.props.customerId}
        /> */}
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
            maxLength={2}
            small={true}
          />
        </div>

        <div className="form__section">
          <Field
            name="country"
            label="Country"
            component={FormSelectDropdown}
          />
          <Field
            name="postalZip"
            label="Zip Code / Province"
            component={FormTextField}
            type="text"
            small={true}
            maxLength={7}
          />
        </div>
      </div>
    );
  }
}

export default ShippingDetails;

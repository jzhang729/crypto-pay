import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from './FormField';

class ShippingDetails extends Component {
  onSubmit(values) {
    console.log('Submitted');
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <label />
        <Field
          name="firstName"
          label="First Name"
          component={FormField}
          type="text"
        />
        <Field
          name="lastName"
          label="Last Name"
          component={FormField}
          type="text"
        />
        <Field
          name="address1"
          label="Address (Line 1)"
          component={FormField}
          type="text"
        />
        <Field
          name="address2"
          label="Address (Line 2)"
          component={FormField}
          type="text"
        />

        <Field name="city" label="City" component={FormField} type="text" />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ShippingDetails);

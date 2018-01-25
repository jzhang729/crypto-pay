import React, { Component } from 'react';
import { Card, Layout } from '@shopify/polaris';
import { reduxForm } from 'redux-form';
import Step from './Step';
// import { validate } from '../utils/validate';
import ShippingDetails from './ShippingDetails';
import NavButtons from './NavButtons';

class WizardFormSecondPage extends Component {
  componentDidMount() {
    this.props.updateProgress(33);
  }

  render() {
    const { pageTitle, subTitle, onBack, handleSubmit, onSubmit } = this.props;

    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}
        <Step order="3" title="Enter your shipping details">
          <ShippingDetails />
        </Step>
        <NavButtons onBack={onBack} onSubmit={handleSubmit(onSubmit)} />
      </Layout.Section>
    );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
  // validate
})(WizardFormSecondPage);

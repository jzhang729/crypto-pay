import React, { Component } from 'react';
import { Card, Layout } from '@shopify/polaris';
import { reduxForm, Form } from 'redux-form';
import Step from '../Step';
import { validate } from '../../utils/validate';
import ShippingDetails from './ShippingDetails';
import NavButtons from '../NavButtons';

class WizardFormSecondPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.updateProgress(33);
  }

  render() {
    const {
      pageTitle,
      subTitle,
      onBack,
      handleSubmit,
      onSubmit,
      customer: { _id }
    } = this.props;

    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}
        <Step order="3" title="Enter your shipping details">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <ShippingDetails customerId={_id} />
          </Form>
        </Step>
        <NavButtons onBack={onBack} onSubmit={handleSubmit(onSubmit)} />
      </Layout.Section>
    );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormSecondPage);

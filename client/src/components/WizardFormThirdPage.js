import React, { Component } from 'react';
import { Card, Layout } from '@shopify/polaris';
import Step from './Step';
import NavButtons from './NavButtons';
import CurrencyData from './CurrencyData';

class WizardFormThirdPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { updateProgress, fetchCurrency, currency } = this.props;
    updateProgress(66);
    fetchCurrency(currency);
  }

  render() {
    const {
      pageTitle,
      subTitle,
      onSubmit,
      onBack,
      loading,
      currency,
      currencyData,
      fetchCurrency
    } = this.props;
    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}
        <Step order="4" title="Converting to selected currency">
          <CurrencyData
            currency={currency}
            loading={loading}
            currencyData={currencyData}
            fetchCurrency={fetchCurrency}
          />
        </Step>
        <NavButtons onBack={onBack} onSubmit={onSubmit} />
      </Layout.Section>
    );
  }
}

export default WizardFormThirdPage;

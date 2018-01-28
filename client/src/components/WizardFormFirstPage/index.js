import _ from 'underscore';
import React, { Component } from 'react';
import { Card, Layout } from '@shopify/polaris';
import Step from '../Step';
import CurrencySelector from '../CurrencySelector';
import NavButtons from '../NavButtons';
import Product from './Product';

class WizardFormFirstPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { updateProgress, fetchProduct, productId } = this.props;

    fetchProduct(productId);
    updateProgress(0);
  }

  render() {
    const {
      currency,
      onSubmit,
      pageTitle,
      product: { info: { title, image, variants } },
      selectedVariant,
      subTitle,
      switchCurrency,
      switchVariant
    } = this.props;

    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}

        <Step order="1" title="Choose your cryptocurrency">
          <CurrencySelector currency={currency} onChange={switchCurrency} />
          <sub>
            Don't see a currency listed that you think we should add?{' '}
            <a href="mailto:info@headphones.com">Let us know</a>!
          </sub>
        </Step>

        <Step order="2" title="Confirm your product choice">
          <Product
            title={title}
            image={image}
            variants={variants}
            selectedVariant={selectedVariant}
            onChange={switchVariant}
          />
        </Step>
        <NavButtons
          nextHidden={!currency || _.isEmpty(selectedVariant)}
          onSubmit={onSubmit}
        />
      </Layout.Section>
    );
  }
}

export default WizardFormFirstPage;

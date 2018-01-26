import _ from 'underscore';
import React, { Component } from 'react';
import { Button, Card, Layout } from '@shopify/polaris';
import Step from './Step';
import CurrencySelector from './CurrencySelector';
import Product from './Product';

class WizardFormFirstPage extends Component {
  constructor(props) {
    super(props);
    this.renderNextButton = this.renderNextButton.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { updateProgress, fetchProduct, productId } = this.props;

    fetchProduct(productId);
    updateProgress(0);
  }

  renderNextButton() {
    // This function carries special logic to not render the Next button if currency or variant are not selected.
    // Cannot use the shared NavButtons in this case.
    const { currency, product: { selectedVariant } } = this.props;

    if (!currency || _.isEmpty(selectedVariant)) {
      return null;
    }

    return (
      <div style={{ float: 'right', margin: '1rem 0' }}>
        <Button primary onClick={this.props.onSubmit}>
          Next
        </Button>
      </div>
    );
  }

  render() {
    const {
      currency,
      product: { info: { title, image, variants }, selectedVariant },
      switchCurrency,
      switchVariant,
      pageTitle,
      subTitle
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
        {this.renderNextButton()}
      </Layout.Section>
    );
  }
}

export default WizardFormFirstPage;

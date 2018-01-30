import _ from 'underscore';
import React, { Component } from 'react';
import { Button, Card, Layout, Spinner } from '@shopify/polaris';
import Step from '../Step';
import CurrencySelector from '../CurrencySelector';
import CurrencyData from '../CurrencyData';
import NavButtons from '../NavButtons';
import Product from './Product';

class WizardFormFirstPage extends Component {
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { updateProgress, fetchProduct, productId } = this.props;

    fetchProduct(productId);
    updateProgress(0);
  }

  _handleChange(value) {
    const { fetchCurrency, switchCurrency } = this.props;

    switchCurrency(value);
    fetchCurrency(value);
  }

  render() {
    const {
      currency,
      currencyData: {
        price_usd: coinPriceUSD,
        name: coinName,
        symbol: coinSymbol,
        last_updated: coinLastUpdated
      },
      fetchCurrency,
      loading,
      onSubmit,
      pageTitle,
      product: { info: { title, image, variants } },
      selectedVariant,
      subTitle,
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
          <CurrencySelector currency={currency} onChange={this._handleChange} />
          <sub>
            Don't see a currency listed that you think we should add?{' '}
            <a href="mailto:info@headphones.com">Let us know</a>!
          </sub>

          {!currency ? null : (
            <div style={{ margin: '1rem 0' }}>
              <CurrencyData
                loading={loading}
                currency={currency}
                coinPriceUSD={coinPriceUSD}
                coinName={coinName}
                coinSymbol={coinSymbol}
                coinLastUpdated={coinLastUpdated}
              />
              <div style={{ margin: '1rem 0' }}>
                <Button outline onClick={() => fetchCurrency(currency)}>
                  Refresh
                </Button>
              </div>
            </div>
          )}
        </Step>

        <Step order="2" title="Confirm your product choice">
          {!title || !image.src || variants.length === 0 ? (
            <Spinner />
          ) : (
            <Product
              title={title}
              image={image}
              variants={variants}
              selectedVariant={selectedVariant}
              switchVariant={switchVariant}
            />
          )}
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

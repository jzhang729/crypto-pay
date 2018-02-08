import _ from 'underscore';
import React, { Component } from 'react';
import { Card, Layout, Spinner } from '@shopify/polaris';
import Step from '../Step';
import Currency from '../Currency';
import NavButtons from '../NavButtons';
import Product from './Product';
import calculatePriceInCrypto from '../../utils/convert';

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

  componentWillReceiveProps(nextProps) {
    const { setTransaction } = this.props;
    const {
      selectedVariant: { price: variantPrice },
      currencyData,
      currencyData: { price_usd: coinPriceUSD }
    } = nextProps;

    if (currencyData !== this.props.currencyData) {
      const priceInCrypto = calculatePriceInCrypto(variantPrice, coinPriceUSD);

      const obj = {};
      obj.priceInCrypto = priceInCrypto;

      setTransaction(obj);
    }
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
      switchVariant,
      transaction
    } = this.props;

    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}

        <Step order="1" title="Choose your cryptocurrency and product">
          {!title || !image.src || variants.length === 0 ? (
            <Spinner />
          ) : (
            <Product
              title={title}
              image={image}
              variants={variants}
              selectedVariant={selectedVariant}
              switchVariant={switchVariant}
              transaction={transaction}
              coinSymbol={coinSymbol}
              currencyContainer={
                <Currency
                  loading={loading}
                  currency={currency}
                  onChange={this._handleChange}
                  coinPriceUSD={coinPriceUSD}
                  coinName={coinName}
                  coinSymbol={coinSymbol}
                  coinLastUpdated={coinLastUpdated}
                  fetchCurrency={fetchCurrency}
                />
              }
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

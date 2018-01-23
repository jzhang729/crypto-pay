import _ from 'underscore';
import React, { Component } from 'react';
import { Button, Card, DisplayText, Layout } from '@shopify/polaris';
import CurrencySelector from './CurrencySelector';
import Product from './Product';

class WizardFormFirstPage extends Component {
  constructor(props) {
    super(props);
    this._renderNextButton = this._renderNextButton.bind(this);
  }

  componentDidMount() {
    this.props.updateProgress(0);
  }

  _renderNextButton() {
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
      loading,
      product: { info: { title, image, variants }, selectedVariant },
      switchCurrency,
      switchVariant
    } = this.props;

    return (
      <div>
        <Layout.Section>
          <DisplayText size="large" element="h1">
            Step 1
          </DisplayText>
          <Card>
            <Card.Section title="Choose your cryptocurrency">
              <CurrencySelector currency={currency} onChange={switchCurrency} />
            </Card.Section>
            {!loading ? (
              <Card.Section title="Confirm your product choice">
                <Product
                  title={title}
                  image={image}
                  variants={variants}
                  selectedVariant={selectedVariant}
                  onChange={switchVariant}
                />
              </Card.Section>
            ) : null}
          </Card>
          {this._renderNextButton()}
        </Layout.Section>
      </div>
    );
  }
}

export default WizardFormFirstPage;

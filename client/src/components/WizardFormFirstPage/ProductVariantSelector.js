import React, { Component } from 'react';
import { ChoiceList } from '@shopify/polaris';

class ProductVariantSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ['']
    };

    this._renderProductVariantSelector = this._renderProductVariantSelector.bind(
      this
    );
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(selectedVariantId) {
    this.setState({ selected: selectedVariantId });

    const variant = this.props.variants.find(variant => {
      return variant.id === selectedVariantId[0];
    });
    this.props.switchVariant(variant);
    // this.props.switchVariant(selectedVariantId[0]);
  }

  _renderProductVariantSelector() {
    const { variants, selectedVariant } = this.props;

    const choices = variants.map(({ title, id }) => {
      return { label: title, value: id };
    });

    const selected = [selectedVariant.id] || this.state.selected;

    return (
      <ChoiceList
        choices={choices}
        selected={selected}
        onChange={this._handleChange}
      />
    );
  }

  render() {
    const {
      coinSymbol,
      selectedVariant: { title: variantTitle, price: variantPrice },
      transaction: { priceInCrypto },
      variants
    } = this.props;

    return (
      <div className="product__variant-selector">
        {variants.length > 1 ? (
          <div>{this._renderProductVariantSelector()}</div>
        ) : null}

        <div className="product__variant-info">
          {variantTitle === 'Default Title' || !variantTitle ? null : (
            <strong>
              <em>{variantTitle}</em>
            </strong>
          )}

          <div>
            {!variantPrice ? null : (
              <p>
                <strong>USD Price: </strong>
                {variantPrice}
              </p>
            )}{' '}
            {!priceInCrypto ? null : (
              <p>
                <strong>{coinSymbol} Price: </strong>
                {priceInCrypto}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductVariantSelector;

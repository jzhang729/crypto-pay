import _ from 'underscore';
import React, { Component } from 'react';
import { Card, ChoiceList } from '@shopify/polaris';

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
    this.props.switchVariant(selectedVariantId[0]);
  }

  _renderProductVariantSelector() {
    const { variants, switchVariant } = this.props;

    const choices = variants.map(({ title, id }) => {
      return { label: title, value: id };
    });

    if (variants.length === 1) {
      switchVariant(variants[0].id);
    }

    const selected = this.state.selected;

    return (
      <Card.Section>
        <ChoiceList
          choices={choices}
          selected={selected}
          onChange={this._handleChange}
        />
      </Card.Section>
    );
  }

  render() {
    const {
      selectedVariant: { title: variantTitle, price: variantPrice },
      variants
    } = this.props;
    return (
      <div className="product__variant-selector">
        <div>{this._renderProductVariantSelector()}</div>

        <div className="product__variant-info">
          {variantTitle === 'Default Title' || !variantTitle ? null : (
            <strong>
              <em>{variantTitle}</em>
            </strong>
          )}

          {variantPrice ? <p>Price: ${variantPrice} USD</p> : null}
        </div>
      </div>
    );
  }
}

export default ProductVariantSelector;

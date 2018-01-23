import React, { Component } from 'react';
import { Card, ChoiceList } from '@shopify/polaris';

class ProductVariantSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ['']
    };
  }

  _onChange(selectedVariantId) {
    this.setState({ selected: selectedVariantId });

    this.props.switchVariant(selectedVariantId[0]);
  }

  _renderProductVariantSelector() {
    const choices = this.props.variants.map(({ title, id }) => {
      return { label: title, value: id };
    });

    return (
      <Card.Section>
        <ChoiceList
          choices={choices}
          selected={this.state.selected}
          onChange={this._onChange.bind(this)}
        />
      </Card.Section>
    );
  }

  render() {
    return (
      <div className="product__variant-selector">
        <div>{this._renderProductVariantSelector()}</div>
        {/* <div>{this._renderProductInfo()}</div> */}
      </div>
    );
  }
}

export default ProductVariantSelector;

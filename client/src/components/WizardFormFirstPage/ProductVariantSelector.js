import _ from 'underscore';
import React, { Component } from 'react';
import { Card, ChoiceList } from '@shopify/polaris';

class ProductVariantSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ['']
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(selectedVariantId) {
    this.setState({ selected: selectedVariantId });
    this.props.onChange(selectedVariantId[0]);
  }

  _renderProductVariantSelector() {
    const { selectedVariant, variants } = this.props;

    if (variants.length === 1) {
      this.props.onChange(variants[0].id);
      return null;
    }

    const choices = variants.map(({ title, id }) => {
      return { label: title, value: id };
    });

    const selected = _.isEmpty(selectedVariant)
      ? this.state.selected
      : [selectedVariant.id];

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
    return (
      <div className="product__variant-selector">
        <div>{this._renderProductVariantSelector()}</div>
      </div>
    );
  }
}

export default ProductVariantSelector;

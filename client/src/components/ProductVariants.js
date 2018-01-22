import React, { Component } from 'react';
import ProductVariantSelector from './ProductVariantSelector';

class ProductVariants extends Component {
  render() {
    return (
      <div>
        <p>Please choose from the following variants:</p>
        <ProductVariantSelector variants={this.props.variants} />
      </div>
    );
  }
}

export default ProductVariants;

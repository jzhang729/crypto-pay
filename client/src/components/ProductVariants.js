import React, { Component } from 'react';
import VariantSelector from './VariantSelector';

class ProductVariants extends Component {
  render() {
    return (
      <div>
        <p>Please choose from the following variants:</p>
        <VariantSelector variants={this.props.variants} />
      </div>
    );
  }
}

export default ProductVariants;

import React, { Component } from 'react';
import ProductVariantSelector from './ProductVariantSelector';

class Product extends Component {
  constructor(props) {
    super(props);
    this._getVariantImage = this._getVariantImage.bind(this);
  }

  _getVariantImage(selectedVariant) {
    const { images, image } = this.props;

    try {
      return images.find(img => {
        return img.id === selectedVariant.image_id;
      }).src;
    } catch (e) {
      return image.src;
    }
  }

  render() {
    const { title, selectedVariant, currencyContainer } = this.props;

    return (
      <div className="product">
        <h1>{title}</h1>
        <div className="product__info">
          <div className="product--left-container">
            <img
              src={this._getVariantImage(selectedVariant)}
              alt={title}
              className="product__thumbnail"
            />
            <ProductVariantSelector {...this.props} />
          </div>

          <div className="product--right-container">{currencyContainer}</div>
        </div>
      </div>
    );
  }
}

export default Product;

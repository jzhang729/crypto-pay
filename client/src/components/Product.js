import React, { Component } from 'react';
import { Spinner, Thumbnail } from '@shopify/polaris';
import { connect } from 'react-redux';
import { fetchProduct, switchVariant } from '../actions';
import ProductVariantSelector from './ProductVariantSelector';
import '../styles/Product.css';

class Product extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.productId);
  }

  render() {
    const {
      info: { image, title, variants },
      loading,
      selectedVariant
    } = this.props.product;

    return (
      <div className="product">
        {!loading ? (
          <div className="product__info">
            <strong>{title}</strong>
            {selectedVariant.title && selectedVariant.price ? (
              <p>
                <span className="product__variant-info">
                  {selectedVariant.title} | {selectedVariant.price}
                </span>
              </p>
            ) : null}

            <div className="product__thumbnail">
              <Thumbnail size="large" source={image.src} alt={title} />
            </div>

            <ProductVariantSelector
              variants={variants}
              switchVariant={this.props.switchVariant}
              selectedVariant={selectedVariant}
            />
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, {
  fetchProduct,
  switchVariant
})(Product);

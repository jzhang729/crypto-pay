import React from 'react';
import { Spinner } from '@shopify/polaris';
import ProductVariantSelector from './ProductVariantSelector';
import '../styles/Product.css';

const Product = ({
  title,
  image,
  variants,
  selectedVariant,
  loading,
  onChange
}) => {
  return (
    <div className="product">
      {!loading ? (
        <div className="product__info">
          <h1>{title}</h1>
          <img src={image.src} alt={title} className="product__thumbnail" />

          <ProductVariantSelector
            variants={variants}
            selectedVariant={selectedVariant}
            onChange={onChange}
          />

          {selectedVariant.title && selectedVariant.price ? (
            <div className="product__variant-info">
              <strong>
                <i>{selectedVariant.title}</i>
              </strong>
              <p>Price: ${selectedVariant.price} USD</p>
            </div>
          ) : null}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Product;

import React from 'react';
import { Spinner, Thumbnail } from '@shopify/polaris';
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
          {selectedVariant.title && selectedVariant.price ? (
            <div className="product__variant-info">
              <i>{selectedVariant.title}</i>
              <p>Price: ${selectedVariant.price} USD</p>
            </div>
          ) : null}

          <div className="product__thumbnail">
            <Thumbnail size="large" source={image.src} alt={title} />
          </div>

          <ProductVariantSelector
            variants={variants}
            selectedVariant={selectedVariant}
            onChange={onChange}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Product;

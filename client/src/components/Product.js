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

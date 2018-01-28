import React from 'react';
import ProductVariantSelector from './ProductVariantSelector';

const Product = ({ title, image, variants, selectedVariant, onChange }) => {
  return (
    <div className="product">
      <div className="product__info">
        <h1>{title}</h1>
        <img src={image.src} alt={title} className="product__thumbnail" />

        <ProductVariantSelector
          variants={variants}
          selectedVariant={selectedVariant}
          onChange={onChange}
        />

        {selectedVariant ? (
          <div className="product__variant-info">
            <strong>
              <i>
                {selectedVariant.title === 'Default Title'
                  ? null
                  : selectedVariant.title}
              </i>
            </strong>
            <p>Price: ${selectedVariant.price} USD</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Product;

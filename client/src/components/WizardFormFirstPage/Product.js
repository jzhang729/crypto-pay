import React from 'react';
import ProductVariantSelector from './ProductVariantSelector';

const Product = ({
  title,
  image,
  variants,
  selectedVariant,
  switchVariant
}) => {
  return (
    <div className="product">
      <div className="product__info">
        <h1>{title}</h1>
        <img src={image.src} alt={title} className="product__thumbnail" />

        {variants.length > 1 ? (
          <ProductVariantSelector
            variants={variants}
            selectedVariant={selectedVariant}
            switchVariant={switchVariant}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Product;

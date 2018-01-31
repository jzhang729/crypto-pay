import React from 'react';
import ProductVariantSelector from './ProductVariantSelector';

const Product = ({ title, image, ...props }) => {
  return (
    <div className="product">
      <div className="product__info">
        <h1>{title}</h1>
        <img src={image.src} alt={title} className="product__thumbnail" />

        <ProductVariantSelector {...props} />
      </div>
    </div>
  );
};

export default Product;

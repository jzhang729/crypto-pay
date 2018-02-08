import React from 'react';
import ProductVariantSelector from './ProductVariantSelector';

const Product = ({ title, image, currencyContainer, ...props }) => {
  return (
    <div className="product">
      <h1>{title}</h1>
      <div className="product__info">
        <div className="product--left-container">
          <img src={image.src} alt={title} className="product__thumbnail" />
          <ProductVariantSelector {...props} />
        </div>

        <div className="product--right-container">{currencyContainer}</div>
      </div>
    </div>
  );
};

export default Product;

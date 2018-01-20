import React from 'react';
import { Card, Thumbnail, TextContainer } from '@shopify/polaris';
import ProductVariants from './ProductVariants';

const ProductInfo = ({ product }) => {
  const { image, title, variants } = product;
  return (
    <div className="product__info">
      <Card title={title} sectioned={true}>
        <TextContainer>
          <Thumbnail size="large" source={image.src} alt={title} />
        </TextContainer>
        <TextContainer>
          {variants.length > 1 ? <ProductVariants /> : null}
        </TextContainer>
      </Card>
    </div>
  );
};

export default ProductInfo;

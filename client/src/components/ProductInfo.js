import React from 'react';
import { Card, Thumbnail, TextContainer } from '@shopify/polaris';
import ProductVariantSelector from './ProductVariantSelector';

const ProductInfo = ({ info }) => {
  const { image, title, variants } = info;
  return (
    <div className="product__info">
      <Card title={title} sectioned={true}>
        <TextContainer spacing="loose">
          <p>
            <Thumbnail size="large" source={image.src} alt={title} />
          </p>
          {variants.length > 1 ? <ProductVariantSelector variants={variants} /> : null}
        </TextContainer>
      </Card>
    </div>
  );
};

export default ProductInfo;

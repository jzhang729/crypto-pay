import React from 'react';
import { Card, DisplayText, Layout } from '@shopify/polaris';
import Product from '../Product';

const Step2 = ({
  loading,
  title,
  image,
  variants,
  selectedVariant,
  switchVariant
}) => {
  return (
    <Layout.Section>
      <DisplayText size="large" element="h1">
        Step 2
      </DisplayText>
      <Card>
        {!loading ? (
          <Card.Section title="Confirm your product choice">
            <Product
              title={title}
              image={image}
              variants={variants}
              selectedVariant={selectedVariant}
              onChange={switchVariant}
            />
          </Card.Section>
        ) : null}
      </Card>
    </Layout.Section>
  );
};

export default Step2;

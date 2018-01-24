import React from 'react';
import { Card, DisplayText, Layout } from '@shopify/polaris';
import ShippingDetails from '../ShippingDetails';

const Step3 = ({
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
        Step 3
      </DisplayText>
      <Card>
        {!loading ? (
          <Card.Section title="Confirm your product choice">
            <ShippingDetails />
          </Card.Section>
        ) : null}
      </Card>
    </Layout.Section>
  );
};

export default Step3;

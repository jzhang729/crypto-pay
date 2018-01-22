import React from 'react';
import { Card, DisplayText, Layout } from '@shopify/polaris';
import CurrencySelector from './CurrencySelector';

const Currency = () => {
  return (
    <Layout.Section>
      <DisplayText size="large" element="h1">
        Step 1
      </DisplayText>

      <Card title="Choose your cryptocurrency">
        <Card.Section>
          <CurrencySelector />
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Currency;

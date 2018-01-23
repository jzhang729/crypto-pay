import React from 'react';
import { Card, DisplayText, Layout } from '@shopify/polaris';
import CurrencySelector from '../CurrencySelector';

const Step1 = ({ currency, switchCurrency }) => {
  return (
    <Layout.Section>
      <DisplayText size="large" element="h1">
        Step 1
      </DisplayText>
      <Card>
        <Card.Section title="Choose your cryptocurrency">
          <CurrencySelector currency={currency} onChange={switchCurrency} />
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Step1;

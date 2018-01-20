import React from 'react';
import { Card, TextContainer } from '@shopify/polaris';
import CurrencySelector from './CurrencySelector';

const Header = () => {
  return (
    <Card title="Welcome to Cryto Pay" sectioned={true}>
      <TextContainer>
        <p>
          We will guide you through using cryptocurrency to purchase your
          product from <strong>Headphones.com</strong>.
        </p>
      </TextContainer>

      <Card.Section title="Let's start by selecting your choice of cryptocurrency:">
        <CurrencySelector />
      </Card.Section>
    </Card>
  );
};

export default Header;

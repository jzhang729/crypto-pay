import React from 'react';
import { Card, DisplayText, Layout, TextContainer } from '@shopify/polaris';

const Header = () => {
  return (
    <div>
      <Layout.Section title="Crypto Pay">
        <Card title="Welcome to Cryto Pay" sectioned={true}>
          <TextContainer>
            <p>
              We will guide you through using cryptocurrency to purchase your
              product from <strong>Headphones.com</strong>.
            </p>
          </TextContainer>
        </Card>
      </Layout.Section>
    </div>
  );
};

export default Header;

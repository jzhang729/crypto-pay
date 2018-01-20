import React from 'react';
import { Card } from '@shopify/polaris';

const Header = () => {
  return (
    <Card title="Welcome to Cryto Pay" sectioned={true}>
      <p>
        We will guide you through using cryptocurrency to purchase your product
        from <strong>Headphones.com</strong>
      </p>
    </Card>
  );
};

export default Header;

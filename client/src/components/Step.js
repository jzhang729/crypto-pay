import React from 'react';
import { Card } from '@shopify/polaris';

const Step = props => {
  const { children, order, title } = props;
  return (
    <div className="step">
      <h1>Step {order}</h1>
      <Card>
        <Card.Section title={title}>{children}</Card.Section>
      </Card>
    </div>
  );
};

export default Step;

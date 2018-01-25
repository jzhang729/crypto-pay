import React from 'react';
import { Button, ButtonGroup } from '@shopify/polaris';

const NavButtons = ({ onBack, onSubmit }) => {
  return (
    <div style={{ float: 'right', margin: '1rem 0' }}>
      <ButtonGroup>
        {onBack ? (
          <Button secondary onClick={onBack} accessibilityLabel="Back">
            Back
          </Button>
        ) : null}
        <Button primary onClick={onSubmit} accessibilityLabel="Next">
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default NavButtons;

import React from 'react';
import { Button, ButtonGroup } from '@shopify/polaris';

const NavButtons = ({
  onBack,
  onSubmit,
  backHidden,
  nextHidden,
  nextDisabled
}) => {
  return (
    <div style={{ float: 'right', margin: '1rem 0' }}>
      <ButtonGroup>
        {onBack && !backHidden ? (
          <Button secondary onClick={onBack} accessibilityLabel="Back">
            Back
          </Button>
        ) : null}

        {!nextHidden ? (
          <Button
            primary
            disabled={nextDisabled}
            onClick={onSubmit}
            accessibilityLabel="Next">
            Next
          </Button>
        ) : null}
      </ButtonGroup>
    </div>
  );
};

NavButtons.defaultProps = {
  backHidden: false,
  nextDisabled: false,
  nextHidden: false
};

export default NavButtons;

import React from 'react';
import { Button, ButtonGroup } from '@shopify/polaris';

const NavButtons = ({
  onBack,
  onSubmit,
  backHidden,
  backButtonText,
  nextButtonText,
  nextHidden,
  nextDisabled
}) => {
  return (
    <div className="nav-buttons">
      <ButtonGroup>
        {onBack && !backHidden ? (
          <Button secondary onClick={onBack} accessibilityLabel="Back">
            {backButtonText}
          </Button>
        ) : null}

        {!nextHidden ? (
          <Button
            primary
            disabled={nextDisabled}
            onClick={onSubmit}
            accessibilityLabel="Next">
            {nextButtonText}
          </Button>
        ) : null}
      </ButtonGroup>
    </div>
  );
};

NavButtons.defaultProps = {
  backHidden: false,
  nextDisabled: false,
  nextHidden: false,
  backButtonText: 'Back',
  nextButtonText: 'Next'
};

export default NavButtons;

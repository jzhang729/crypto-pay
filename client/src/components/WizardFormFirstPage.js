import _ from 'underscore';
import React, { Component } from 'react';
import { Button } from '@shopify/polaris';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

class WizardFormFirstPage extends Component {
  constructor(props) {
    super(props);
    this._renderNextButton = this._renderNextButton.bind(this);
  }

  componentDidMount() {
    this.props.updateProgress(0);
  }

  _renderNextButton() {
    const { currency, product: { selectedVariant } } = this.props;

    if (!currency || _.isEmpty(selectedVariant)) {
      return null;
    }

    return (
      <div style={{ float: 'right', margin: '1rem 0' }}>
        <Button primary onClick={this.props.onSubmit}>
          Next
        </Button>
      </div>
    );
  }

  render() {
    const {
      currency,
      loading,
      product: { info: { title, image, variants }, selectedVariant },
      switchCurrency,
      switchVariant
    } = this.props;

    return (
      <div>
        <Step1 currency={currency} switchCurrency={switchCurrency} />

        <Step2
          loading={loading}
          title={title}
          image={image}
          variants={variants}
          selectedVariant={selectedVariant}
          switchVariant={switchVariant}
        />

        {this._renderNextButton()}
      </div>
    );
  }
}

export default WizardFormFirstPage;

import _ from 'underscore';
import React, { Component } from 'react';
import { ReduxForm, Field } from 'redux-form';
import { Button, Card, DisplayText, Layout } from '@shopify/polaris';
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

        <Layout.Section>
          <DisplayText size="large" element="h1">
            Step 3
          </DisplayText>
          <Card title="Enter your shipping details">
            <Card.Section>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Card.Section>
          </Card>
          {/* {this._renderButtons()} */}
        </Layout.Section>
      </div>
    );
  }
}

export default WizardFormFirstPage;

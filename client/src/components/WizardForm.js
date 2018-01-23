import React, { Component } from 'react';
import { Card, DisplayText, Layout } from '@shopify/polaris';
import Currency from './Currency';
import Product from './Product';

class WizardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    };
  }
  render() {
    return (
      <div>
        <Layout.Section>
          <DisplayText size="large" element="h1">
            Step {this.state.step}
          </DisplayText>
          <Card>
            <Card.Section title="Choose your cryptocurrency">
              <Currency />
            </Card.Section>
            <Card.Section title="Confirm your product choice">
              <Product productId={this.props.match.params.productId} />
            </Card.Section>
          </Card>
        </Layout.Section>
      </div>
    );
  }
}

export default WizardForm;

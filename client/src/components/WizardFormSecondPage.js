import React, { Component } from 'react';
import { Button, Card, DisplayText, Layout } from '@shopify/polaris';

class WizardFormSecondPage extends Component {
  constructor(props) {
    super(props);

    this._renderButtons = this._renderButtons.bind(this);
  }

  componentDidMount() {
    this.props.updateProgress(20);
  }

  _renderButtons() {
    return (
      <div style={{ float: 'right', margin: '1rem 0' }}>
        <Button secondary onClick={this.props.onBack}>
          Back
        </Button>
        <Button primary onClick={this.props.onSubmit}>
          Next
        </Button>
      </div>
    );
  }

  render() {
    return (
      <Layout.Section>
        <DisplayText size="large" element="h1">
          Step 2
        </DisplayText>
        <Card title="Enter your shipping details">
          <Card.Section>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Card.Section>
        </Card>
        {this._renderButtons()}
      </Layout.Section>
    );
  }
}

export default WizardFormSecondPage;

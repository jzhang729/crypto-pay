import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
// import { Button, Card, DisplayText, Layout } from '@shopify/polaris';

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
        {/* <Button secondary onClick={this.props.onBack}>
          Back
        </Button>
        <Button primary onClick={this.props.onSubmit}>
          Next
        </Button> */}
      </div>
    );
  }

  render() {
    return <div />;
  }
}

export default WizardFormSecondPage;

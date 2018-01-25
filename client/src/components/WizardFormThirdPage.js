import React, { Component } from 'react';
import { Card, Layout } from '@shopify/polaris';
import Step from './Step';
import NavButtons from './NavButtons';

class WizardFormThirdPage extends Component {
  componentDidMount() {
    this.props.updateProgress(66);
  }

  render() {
    const { pageTitle, subTitle, onSubmit, onBack } = this.props;
    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}
        <Step order="4" title="Converting to selected currency">
          <div>
            We have sent the wallet address to your e-mail entered in the last
            step.
          </div>
        </Step>
        <NavButtons onBack={onBack} onSubmit={onSubmit} />
      </Layout.Section>
    );
  }
}

export default WizardFormThirdPage;

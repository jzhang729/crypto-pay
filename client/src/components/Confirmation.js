import React, { Component } from 'react';
import { Button, Card, Layout, TextContainer } from '@shopify/polaris';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this._returnToMainPage = this._returnToMainPage.bind(this);
  }

  componentDidMount() {
    this.props.updateProgress(100);
  }

  _returnToMainPage() {
    window.location.href = 'https://www.headphones.com';
  }

  render() {
    const {
      pageTitle,
      subTitle,
      customer: { firstName, email },
      transaction: {
        productTitle,
        variantTitle,
        currency: { coinName, coinSymbol }
      }
    } = this.props;
    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}
        <Card>
          <div className="confirmation">
            <TextContainer spacing="loose">
              <p>{firstName},</p>
              <p>Thanks for your interest in purchasing the:</p>
              <p>
                <strong>
                  {productTitle}{' '}
                  {variantTitle !== 'Default Title'
                    ? `- ${variantTitle}`
                    : null}
                </strong>
              </p>
              <p>We have sent a confirmation e-mail to:</p>
              <p>
                <strong>{email}</strong>
              </p>
              <p>
                This e-mail will contain the wallet address of our
                <strong>
                  {' '}
                  {coinName} ({coinSymbol}){' '}
                </strong>
                account to send payment to. Upon receipt, we will send out
                another e-mail to confirm.
              </p>
              <p>
                <em>
                  Please note that the transaction must be received within 30
                  minutes of the timestamp indicated in the e-mail in order to
                  be valid.
                </em>
              </p>
              <p>Thanks for supporting Headphones.com!</p>
            </TextContainer>
          </div>
        </Card>
        <div className="nav-buttons">
          <Button
            primary
            onClick={() => {
              window.location = 'https://www.headphones.com';
            }}>
            Back to Headphones.com
          </Button>
        </div>
      </Layout.Section>
    );
  }
}

export default Confirmation;

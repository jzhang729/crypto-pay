import React, { Component } from 'react';
import { Card, Layout } from '@shopify/polaris';
import NavButtons from '../NavButtons';
import Step from '../Step';
import ReviewDetails from './ReviewDetails';

class WizardFormLastPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { updateProgress } = this.props;
    updateProgress(95);
  }

  render() {
    const {
      pageTitle,
      subTitle,
      customer: {
        firstName,
        lastName,
        email,
        address1,
        address2,
        city,
        stateProv,
        country,
        postalZip
      },
      product: { info: { title: productTitle } },
      selectedVariant: { title: variantTitle },
      transaction: {
        variantPriceUSD,
        priceInCrypto,
        currency: { coinPriceUSD, coinName, coinSymbol, coinLastUpdated }
      }
    } = this.props;
    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}

        <Step order="5" title="Confirm details">
          <Card>
            <Card.Section subdued>
              <ReviewDetails
                firstName={firstName}
                lastName={lastName}
                email={email}
                address1={address1}
                address2={address2}
                city={city}
                stateProv={stateProv}
                country={country}
                postalZip={postalZip}
                productTitle={productTitle}
                variantTitle={variantTitle}
                variantPriceUSD={variantPriceUSD}
                priceInCrypto={priceInCrypto}
                coinPriceUSD={coinPriceUSD}
                coinName={coinName}
                coinSymbol={coinSymbol}
                coinLastUpdated={coinLastUpdated}
              />
            </Card.Section>
          </Card>
        </Step>

        <NavButtons nextButtonText="Submit" />
      </Layout.Section>
    );
  }
}

export default WizardFormLastPage;

import React, { Component } from 'react';
import _ from 'underscore';
import {
  Button,
  ButtonGroup,
  Card,
  Layout,
  TextContainer,
  TextStyle
} from '@shopify/polaris';
import Step from '../Step';
import NavButtons from '../NavButtons';
import CurrencyData from './CurrencyData';
import CurrencySelector from '../CurrencySelector';

class WizardFormThirdPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingCurrencyDropdown: false,
      lockedIn: false
    };

    this._changeCurrency = this._changeCurrency.bind(this);
    this._onCurrencySelect = this._onCurrencySelect.bind(this);
    this._calculatePriceInCrypto = this._calculatePriceInCrypto.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { updateProgress, fetchCurrency, currency } = this.props;
    updateProgress(66);
    fetchCurrency(currency);
  }

  _calculatePriceInCrypto(variantPriceUSD, coinPriceUSD) {
    return (parseFloat(variantPriceUSD) / parseFloat(coinPriceUSD)).toFixed(4);
  }

  _changeCurrency() {
    this.setState({
      showingCurrencyDropdown: !this.state.showingCurrencyDropdown
    });
  }

  _onCurrencySelect(currency) {
    const { switchCurrency, fetchCurrency } = this.props;
    switchCurrency(currency);
    this.setState({ showingCurrencyDropdown: false });
    fetchCurrency(currency);
  }

  render() {
    const {
      customer,
      pageTitle,
      subTitle,
      onSubmit,
      onBack,
      loading,
      currency,
      currencyData,
      fetchCurrency,
      setTransaction,
      selectedVariant: { price: variantPriceUSD }
    } = this.props;

    const {
      price_usd: coinPriceUSD,
      name: coinName,
      symbol: coinSymbol,
      last_updated: coinLastUpdated
    } = currencyData;

    const priceInCrypto = this._calculatePriceInCrypto(
      variantPriceUSD,
      coinPriceUSD
    );

    return (
      <Layout.Section>
        {pageTitle && subTitle ? (
          <Card title={pageTitle} sectioned={true}>
            <p>{subTitle}</p>
          </Card>
        ) : null}
        <Step order="4" title="Converting to selected currency">
          {this.state.showingCurrencyDropdown ? (
            <CurrencySelector
              onChange={this._onCurrencySelect}
              currency={currency}
            />
          ) : (
            <CurrencyData
              loading={loading}
              currency={currency}
              currencyData={currencyData}
              coinPriceUSD={coinPriceUSD}
              coinName={coinName}
              coinSymbol={coinSymbol}
              coinLastUpdated={coinLastUpdated}
            />
          )}

          <div style={{ margin: '1rem 0' }}>
            <ButtonGroup>
              {!this.state.lockedIn ? (
                <ButtonGroup>
                  {!this.state.showingCurrencyDropdown ? (
                    <Button outline onClick={() => fetchCurrency(currency)}>
                      Refresh
                    </Button>
                  ) : null}
                  <Button outline onClick={this._changeCurrency}>
                    {this.state.showingCurrencyDropdown ? 'Cancel' : 'Change'}
                  </Button>
                </ButtonGroup>
              ) : null}
            </ButtonGroup>
          </div>

          {!_.isEmpty(currencyData) ? (
            <div style={{ margin: '1rem 0' }}>
              <TextContainer spacing="loose">
                <dl>
                  <div>
                    <dt>
                      <TextStyle variation="strong">Price in USD</TextStyle>
                    </dt>
                    <dd>${variantPriceUSD}</dd>
                  </div>
                  <div>
                    <dt>
                      <TextStyle variation="strong">
                        Price in {coinName}
                      </TextStyle>
                    </dt>
                    <dd>
                      {priceInCrypto} {coinSymbol}
                    </dd>
                  </div>
                </dl>
              </TextContainer>
              {!this.state.lockedIn ? (
                <Button
                  primary
                  onClick={() => {
                    this.setState({ lockedIn: true });
                    setTransaction({
                      variantPriceUSD, // the price of the item in USD
                      currency: {
                        coinName,
                        coinSymbol,
                        coinPriceUSD,
                        coinLastUpdated
                      },
                      priceInCrypto,
                      _customer: customer._id
                    });
                  }}>
                  Lock In!
                </Button>
              ) : null}
            </div>
          ) : null}
        </Step>
        <NavButtons
          onBack={onBack}
          onSubmit={onSubmit}
          backHidden={this.state.lockedIn}
          nextDisabled={!this.state.lockedIn}
        />
      </Layout.Section>
    );
  }
}

export default WizardFormThirdPage;

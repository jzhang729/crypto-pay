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
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { updateProgress, fetchCurrency, currency } = this.props;
    updateProgress(66);
    fetchCurrency(currency);
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
      pageTitle,
      subTitle,
      onSubmit,
      onBack,
      loading,
      currency,
      currencyData,
      fetchCurrency,
      selectedVariant: { price: variantPrice }
    } = this.props;

    const {
      price_usd: priceUSD,
      name,
      symbol,
      last_updated: lastUpdated
    } = currencyData;

    const priceInCrypto = (
      parseFloat(variantPrice) / parseFloat(priceUSD)
    ).toFixed(4);

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
              priceUSD={priceUSD}
              name={name}
              symbol={symbol}
              lastUpdated={lastUpdated}
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
                    <dd>${variantPrice}</dd>
                  </div>
                  <div>
                    <dt>
                      <TextStyle variation="strong">Price in {name}</TextStyle>
                    </dt>
                    <dd>{priceInCrypto}</dd>
                  </div>
                </dl>
              </TextContainer>
              {!this.state.lockedIn ? (
                <Button
                  primary
                  onClick={() => {
                    this.setState({ lockedIn: true });
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

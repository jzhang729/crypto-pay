import React, { Component } from 'react';
import { Button, TextContainer } from '@shopify/polaris';
import { unixTimeConverter } from '../../utils/unixTimeConverter';

class ReviewDetails extends Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange() {
    const { goToPage } = this.props;
    goToPage(2);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      address1,
      address2,
      city,
      stateProv,
      country,
      postalZip,
      productTitle,
      variantTitle,
      variantPriceUSD,
      priceInCrypto,
      coinPriceUSD,
      coinName,
      coinSymbol,
      coinLastUpdated
    } = this.props;

    return (
      <div className="review">
        <div className="review__section">
          <TextContainer spacing="loose">
            <p>
              <strong>Name: </strong>
              <br />
              {firstName} {lastName}
            </p>
            <p>
              <strong>Email: </strong>
              <br />
              {email}
            </p>
            <p>
              <strong>Shipping Address: </strong>
              <br />
              {address1}
              <br />
              {address2}
              <br />
              {city}, {stateProv}
              <br />
              {country} {postalZip}
            </p>
            <Button onClick={this._handleChange}>Change</Button>
          </TextContainer>
        </div>
        <div className="review__section">
          <TextContainer>
            <p>
              <strong>Product: </strong>
              <br />
              {productTitle}
            </p>
            {variantTitle !== 'Default Title' ? (
              <p>
                <strong>Variant: </strong>
                <br />
                {variantTitle}
              </p>
            ) : null}
            <p>
              <strong>Price in USD: </strong>
              <br />
              ${variantPriceUSD}
            </p>
            <p>
              <strong>Selected Coin: </strong>
              <br />
              {coinName} ({coinSymbol})<br />
              <em>
                1 {coinSymbol} = ${coinPriceUSD} USD<br />
                @ {unixTimeConverter(coinLastUpdated)}
              </em>
            </p>

            <p>
              <strong>
                Price in {coinName} ({coinSymbol}):{' '}
              </strong>
              <br />
              ${priceInCrypto}
            </p>
          </TextContainer>
        </div>
      </div>
    );
  }
}

export default ReviewDetails;

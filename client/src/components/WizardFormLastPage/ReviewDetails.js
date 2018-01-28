import React from 'react';
import { Button, TextContainer } from '@shopify/polaris';
import { unixTimeConverter } from '../../utils/unixTimeConverter';

const ReviewDetails = ({
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
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 1 50%' }}>
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
          <Button>Change</Button>
        </TextContainer>
      </div>
      <div style={{ flex: '0 1 50%' }}>
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
            <strong>Price (USD): </strong>
            <br />
            {variantPriceUSD}
          </p>
          <p>
            <strong>Selected Coin: </strong>
            <br />
            {coinName} ({coinSymbol})<br />
            ${coinPriceUSD} USD - {unixTimeConverter(coinLastUpdated)}
          </p>

          <p>
            <strong>Total in {coinName}: </strong>
            <br />
            ${priceInCrypto} {coinSymbol}
          </p>
        </TextContainer>
      </div>
    </div>
  );
};

export default ReviewDetails;

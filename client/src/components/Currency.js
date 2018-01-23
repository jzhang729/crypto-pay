import React, { Component } from 'react';
// import { Card } from '@shopify/polaris';
import CurrencySelector from './CurrencySelector';
import { switchCurrency } from '../actions';
import { connect } from 'react-redux';

class Currency extends Component {
  render() {
    const { currency, switchCurrency } = this.props;

    return (
      <div>
        <CurrencySelector
          currency={currency}
          onSwitchCurrency={switchCurrency}
        />
      </div>
    );
  }
}

function mapStateToProps({ app: { currency } }) {
  return { currency };
}

export default connect(mapStateToProps, { switchCurrency })(Currency);

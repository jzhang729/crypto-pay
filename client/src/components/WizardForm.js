import React, { Component } from 'react';
import { connect } from 'react-redux';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import WizardFormLastPage from './WizardFormLastPage';
import Confirmation from './Confirmation';
import { CSSTransitionGroup } from 'react-transition-group';
import * as actions from '../actions';

class WizardForm extends Component {
  render() {
    const {
      currency,
      currencyData,
      customer,
      fetchProduct,
      fetchCurrency,
      loading,
      page,
      product,
      selectedVariant,
      setTransaction,
      submitForm,
      switchCurrency,
      switchVariant,
      transaction,
      updateProgress,
      incrementPage,
      decrementPage,
      goToPage,
      match: { params: { productId } }
    } = this.props;

    return (
      <CSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionAppear={false}>
        {page === 1 && (
          <WizardFormFirstPage
            loading={loading}
            pageTitle="Welcome to Cryto Pay"
            subTitle="We will guide you through using cryptocurrency to purchase your
            product from Headphones.com."
            product={product}
            productId={productId}
            currency={currency}
            currencyData={currencyData}
            setTransaction={setTransaction}
            switchCurrency={switchCurrency}
            switchVariant={switchVariant}
            selectedVariant={selectedVariant}
            onSubmit={incrementPage}
            transaction={transaction}
            updateProgress={updateProgress}
            fetchCurrency={fetchCurrency}
            fetchProduct={fetchProduct}
          />
        )}
        {page === 2 && (
          <WizardFormSecondPage
            customer={customer}
            updateProgress={updateProgress}
            onBack={decrementPage}
            onSubmit={values => {
              this.props.setCustomer(values);
              incrementPage();
            }}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            pageTitle="Almost there!"
            subTitle="The value of crytocurrency changes often, so we need you to confirm the exchange rate by clicking the &quot;Lock In&quot; button."
            updateProgress={updateProgress}
            onBack={decrementPage}
            onSubmit={incrementPage}
            currency={currency}
            customer={customer}
            product={product}
            switchCurrency={switchCurrency}
            currencyData={currencyData}
            fetchCurrency={fetchCurrency}
            loading={loading}
            selectedVariant={selectedVariant}
            setTransaction={setTransaction}
          />
        )}

        {page === 4 && (
          <WizardFormLastPage
            pageTitle="Last but Important Step!"
            subTitle="Please make sure that all of this information is correct. An e-mail will be sent to you with the wallet address to make payment to."
            updateProgress={updateProgress}
            onBack={decrementPage}
            onSubmit={incrementPage}
            selectedVariant={selectedVariant}
            product={product}
            customer={customer}
            currencyData={currencyData}
            transaction={transaction}
            submitForm={submitForm}
            goToPage={goToPage}
          />
        )}

        {page === 5 && (
          <Confirmation
            updateProgress={updateProgress}
            transaction={transaction}
            customer={customer}
          />
        )}
      </CSSTransitionGroup>
    );
  }
}

function mapStateToProps({
  app: {
    currency,
    currencyData,
    loading,
    selectedVariant,
    customer,
    transaction,
    page
  },
  product
}) {
  return {
    currency,
    currencyData,
    customer,
    loading,
    page,
    product,
    selectedVariant,
    transaction
  };
}

export default connect(mapStateToProps, actions)(WizardForm);

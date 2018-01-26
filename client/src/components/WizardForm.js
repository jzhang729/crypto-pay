import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import { CSSTransitionGroup } from 'react-transition-group';
import * as actions from '../actions';

class WizardForm extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    // this.submitPageTwo = this.submitPageTwo.bind(this);

    this.state = {
      page: 2
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page } = this.state;

    const {
      currency,
      currencyData,
      customer,
      fetchProduct,
      fetchCurrency,
      loading,
      product,
      selectedVariant,
      switchCurrency,
      switchVariant,
      updateProgress,
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
            pageTitle="Welcome to Cryto Pay"
            subTitle="We will guide you through using cryptocurrency to purchase your
            product from Headphones.com."
            product={product}
            productId={productId}
            currency={currency}
            switchCurrency={switchCurrency}
            switchVariant={switchVariant}
            selectedVariant={selectedVariant}
            onSubmit={this.nextPage}
            updateProgress={updateProgress}
            fetchProduct={fetchProduct}
          />
        )}
        {page === 2 && (
          <WizardFormSecondPage
            customer={customer}
            updateProgress={updateProgress}
            onBack={this.previousPage}
            onSubmit={values => {
              const valuesWithId = _.extend(values, { _id: customer._id });
              this.props.setCustomer(valuesWithId);
              console.log('submitting the form', valuesWithId);
              this.nextPage();
            }}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            title="Almost there!"
            subTitle="Ajdslfjsdlfjldsfjjsdfsf"
            updateProgress={updateProgress}
            onBack={this.previousPage}
            onSubmit={() => {
              console.log('trying to go to next page');
            }}
            currency={currency}
            currencyData={currencyData}
            fetchCurrency={fetchCurrency}
            loading={loading}
          />
        )}
      </CSSTransitionGroup>
    );
  }
}

function mapStateToProps({
  app: { currency, currencyData, loading, selectedVariant, customer },
  product
}) {
  return {
    currency,
    currencyData,
    customer,
    loading,
    product,
    selectedVariant
  };
}

export default connect(mapStateToProps, actions)(WizardForm);

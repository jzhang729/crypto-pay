import React, { Component } from 'react';
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
    this.submitPageTwo = this.submitPageTwo.bind(this);

    this.state = {
      page: 3
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  submitPageTwo(values) {
    console.log('submitting the form', values);
  }

  render() {
    const { page } = this.state;

    const {
      currency,
      currencyData,
      fetchProduct,
      fetchCurrency,
      loading,
      product,
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
            onSubmit={this.nextPage}
            updateProgress={updateProgress}
            fetchProduct={fetchProduct}
          />
        )}
        {page === 2 && (
          <WizardFormSecondPage
            updateProgress={updateProgress}
            onBack={this.previousPage}
            onSubmit={values => {
              this.submitPageTwo(values);
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
  app: { currency, currencyData, loading },
  product
}) {
  return { currency, currencyData, loading, product };
}

export default connect(mapStateToProps, actions)(WizardForm);

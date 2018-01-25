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
      page: 1
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
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
      product,
      currency,
      switchCurrency,
      switchVariant,
      updateProgress
    } = this.props;

    return (
      <CSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppear={false}>
        {page === 1 && (
          <WizardFormFirstPage
            pageTitle="Welcome to Cryto Pay"
            subTitle="We will guide you through using cryptocurrency to purchase your
            product from Headphones.com."
            product={product}
            currency={currency}
            switchCurrency={switchCurrency}
            switchVariant={switchVariant}
            onSubmit={this.nextPage}
            updateProgress={updateProgress}
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
          />
        )}
      </CSSTransitionGroup>
    );
  }
}

function mapStateToProps({ app: { currency }, product }) {
  return { currency, product };
}

export default connect(mapStateToProps, actions)(WizardForm);

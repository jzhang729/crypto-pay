import React, { Component } from 'react';
import { connect } from 'react-redux';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import * as actions from '../actions';

class WizardForm extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

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
      <div>
        {page === 1 && (
          <WizardFormFirstPage
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
            onSubmit={this.nextPage}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps({ app: { currency }, product }) {
  return { currency, product };
}

export default connect(mapStateToProps, actions)(WizardForm);

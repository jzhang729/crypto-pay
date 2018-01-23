import React, { Component } from 'react';
import { connect } from 'react-redux';
import WizardFormFirstPage from './WizardFormFirstPage';
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

    const { product, currency, switchCurrency, switchVariant } = this.props;

    return (
      <div>
        {page === 1 && (
          <WizardFormFirstPage
            product={product}
            currency={currency}
            onSubmit={this.nextPage}
            switchCurrency={switchCurrency}
            switchVariant={switchVariant}
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

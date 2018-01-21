import React, { Component } from 'react';
import { Card, DisplayText } from '@shopify/polaris';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from './Loading';
import ProductInfo from './ProductInfo';
import '../styles/Product.css';

class Product extends Component {
  componentWillMount() {
    const productId = this.props.match.params.productId;
    this.props.fetchProduct(productId);
  }

  onClick() {}

  render() {
    return (
      <div className="product">
        <DisplayText size="large" element="h1">
          Step 1
        </DisplayText>
        <Card
          title="Confirm Your Product"
          primaryFooterAction={{ content: 'Next', url: '/test' }}>
          <Card.Section>
            {this.props.product ? (
              <ProductInfo product={this.props.product} />
            ) : (
              <Loading />
            )}
          </Card.Section>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => {
  return { product };
};

export default connect(mapStateToProps, actions)(Product);

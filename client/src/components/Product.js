import React, { Component } from 'react';
import { Card } from '@shopify/polaris';
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

  render() {
    return (
      <Card>
        {this.props.product ? (
          <ProductInfo product={this.props.product} />
        ) : (
          <Loading />
        )}
      </Card>
    );
  }
}

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, actions)(Product);

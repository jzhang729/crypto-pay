import React, { Component } from 'react';
import { Card } from '@shopify/polaris';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Product extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.fetchProduct(productId);
  }

  render() {
    return <Card title="Product" />;
  }
}

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, actions)(Product);

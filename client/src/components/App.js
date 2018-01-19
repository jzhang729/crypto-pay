import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route } from 'react-router-dom';
// import Landing from './Landing';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/product/:productId" component={Product} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);

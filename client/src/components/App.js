import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Page } from '@shopify/polaris';
import Header from './Header';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <Page title="Crypto Pay">
        <Layout>
          <BrowserRouter>
            <div style={{ width: '100%', display: 'block' }}>
              <Layout.Section title="Crypto Pay">
                <Route path="/" component={Header} />
              </Layout.Section>
              <Layout.Section title="Crypto Pay">
                <Route path="/product/:productId" component={Product} />
              </Layout.Section>
            </div>
          </BrowserRouter>
        </Layout>
      </Page>
    );
  }
}

export default App;

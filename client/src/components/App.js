import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Page } from '@shopify/polaris';
import Header from './Header';
import Product from './Product';
import Currency from './Currency';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Page title="Crypto Pay">
          <Layout>
            <BrowserRouter>
              <div style={{ width: '100%', display: 'block' }}>
                <Route path="/" component={Header} />
                <Route path="/" component={Currency} />
                <Layout.Section>
                  <Route path="/product/:productId" component={Product} />
                </Layout.Section>
              </div>
            </BrowserRouter>
          </Layout>
        </Page>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Page } from '@shopify/polaris';
import TopHeader from './TopHeader';
import WizardForm from './WizardForm';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <a className="redirect" href="https://headphones.com">&#8592; Back to Headphones.com</a>
        <Page title="Crypto Pay">
          <Layout>
            <BrowserRouter>
              <div style={{ width: '100%', display: 'block' }}>
                <Route path="/" component={TopHeader} />
                <Route path="/product/:productId" component={WizardForm} />
              </div>
            </BrowserRouter>
          </Layout>
        </Page>
      </div>
    );
  }
}

export default App;

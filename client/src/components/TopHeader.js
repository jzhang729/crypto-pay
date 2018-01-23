import React, { Component } from 'react';
import { Card, Layout, ProgressBar, TextContainer } from '@shopify/polaris';
import { connect } from 'react-redux';
import { updateProgress } from '../actions';

class TopHeader extends Component {
  render() {
    return (
      <div>
        <Layout.Section title="Crypto Pay">
          <Card title="Welcome to Cryto Pay" sectioned={true}>
            <TextContainer spacing="loose">
              <p>
                We will guide you through using cryptocurrency to purchase your
                product from <strong>Headphones.com</strong>.
              </p>
              <div>
                <TextContainer>
                  <strong>Progress</strong>
                  <ProgressBar progress={this.props.progress} />
                </TextContainer>
              </div>
            </TextContainer>
          </Card>
        </Layout.Section>
      </div>
    );
  }
}

function mapStateToProps({ app: { progress } }) {
  return { progress };
}

export default connect(mapStateToProps, { updateProgress })(TopHeader);

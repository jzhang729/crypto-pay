import React, { Component } from 'react';
import { Card, Layout, ProgressBar, TextContainer } from '@shopify/polaris';
import { connect } from 'react-redux';
import { updateProgress } from '../actions';

class TopHeader extends Component {
  render() {
    return (
      <div className="topHeader">
        <Layout.Section title="Crypto Pay">
          <Card>
            <Card.Section>
              <TextContainer>
                <strong>Progress</strong>
                <ProgressBar progress={this.props.progress} />
              </TextContainer>
            </Card.Section>
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

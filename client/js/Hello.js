import React, {Component, PropTypes} from 'react';
import List from './CandidatesList';

export default class Hello extends Component {
  render() {
    return (
        <div>
          <h1>Hello man..</h1>
          <List candidates={this.props.docs} />
        </div>
    );
  }
}

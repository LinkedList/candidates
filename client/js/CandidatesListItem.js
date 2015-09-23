import React, {Component, PropTypes} from 'react';
import Item from './CandidatesListItem'

export default class CandidatesList extends Component {
  render() {
    return (
        <li key={this.props.key}>
          <pre>{JSON.stringify(this.props.item)}</pre>
        </li>
    );
  }
}

import React, {Component, PropTypes} from 'react';
import Item from './CandidatesListItem'

export default class CandidatesList extends Component {
  render() {
    return (
        <ul>
          {this.props.candidates.map((can) => {return <Item key={can._id} item={can} />})}
        </ul>
    );
  }
}

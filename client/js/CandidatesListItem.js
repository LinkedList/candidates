import React, {Component, PropTypes} from 'react';
import Item from './CandidatesListItem'
import {Link} from 'react-router';

export default class CandidatesList extends Component {
  render() {
    return (
        <li key={this.props.item._id}>
          <Link to={'/candidate/' + this.props.item._id}>{this.props.item.basics.name}</Link>
        </li>
    );
  }
}

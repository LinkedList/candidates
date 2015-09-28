'use strict';
import React from 'react';
import Hello from './js/Hello';
import Detail from './js/Detail';
import {Router, Route, Link} from 'react-router';
import './css/bootstrap.css';

let content = document.getElementById('content');
let candidates = JSON.parse(content.dataset.docs);

class HelloWrapper extends React.Component {
  render() {
    return (
     <Hello docs={candidates} />
    )
  }
}

React.render(
    (<Router>
      <Route path="/" component={HelloWrapper} />
      <Route path="/candidate/:id" component={Detail} />
    </Router>)
, document.body);

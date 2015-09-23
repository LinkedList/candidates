import React from 'react';
import Hello from './js/Hello';

let content = document.getElementById('content');
let candidates = JSON.parse(content.dataset.docs);

React.render(<Hello docs={candidates} />, content);

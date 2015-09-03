'use strict';

require("./css/bootstrap.css");
require("./css/sb-admin.css");
require("./css/font-awesome.css");
require("./sass/style.scss");

var React = require('react');
var Hello = require('./js/Hello');

React.render(React.createElement(Hello, {}), document.getElementById('content'));

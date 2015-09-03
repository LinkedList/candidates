var React = require('react');

module.exports = React.createClass({
	displayName: "HelloReact",
  	render: function() {
		var text = JSON.parse(document.getElementById('content').dataset.docs)[0].text;
    		return React.createElement("div", null, text, null);
  	}
});


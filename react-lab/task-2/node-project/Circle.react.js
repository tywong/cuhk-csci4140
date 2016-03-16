var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Circle = React.createClass({
	render: function() {
		return (
			<div className="circle white">
			</div>
		);
	}
});


ReactDOM.render(
	<Circle />,
	document.getElementById('display')
);

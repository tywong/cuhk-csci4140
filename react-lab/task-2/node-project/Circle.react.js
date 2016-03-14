var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Circle = React.createClass({
	render: function() {
		var circleClass = classNames('circle', 'black');
		return (
			<div className={circleClass}>
			</div>
		);
	}
});


ReactDOM.render(
	<Circle />,
	document.getElementById('display')
);

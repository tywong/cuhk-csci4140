var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Circle = React.createClass({
	render: function() {
		var color = this.props.content == 'O' ? 'white' : 'black';
		circleClassName = classNames("circle", color);

		return (
			<div className={circleClassName}>
			</div>
		);
	}
});


module.exports = Circle;

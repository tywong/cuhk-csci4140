var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var Circle = require('./Circle.react');

var Cell = React.createClass({
	render: function() {
		var content = this.props.content;
		var handler = this.props.clickHandler;


		if(this.props.content == ' ') {
			return (
				<div className="cell" onClick={handler}>
				</div>
			);
		}
		else {
			return (
				<div className="cell" onClick={handler}>
					<Circle content={content} />
				</div>
			);
		}
	}
});

module.exports = Cell;

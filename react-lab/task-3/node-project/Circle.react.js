var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Circle = React.createClass({
	getInitialState: function() {
		return {'color': 'black'};
	},
	render: function() {
		var circleClassName = "circle";
		if(this.state.color == 'black' || this.state.color == 'white')
			circleClassName = classNames("circle", this.state.color);

		return (
			<div className={circleClassName}>
			</div>
		);
	}
});


ReactDOM.render(
	<Circle />,
	document.getElementById('display')
);

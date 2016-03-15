# Manipulating a Component's State

A state is associated with a component.

## Creating the state

To create a state for the component,

- add a method called `getInitialState`;
- return an object representing the state of the component.

## Accessing the state

To access the state: `this.state`.

---

Let us take a look at the following example:

- Set the color to white?
- Set the color to black?

```
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
```

## Updating the setState

To update the state, call: `this.setState`.

Let us run the following example:

- We want implement a feature that after you have clicked on the circle, the color changes;
- However, this code has a problem. Do you know what it is?


```
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Circle = React.createClass({
	getInitialState: function() {
		return {'color': 'white'};
	},
	render: function() {
		var circleClassName = "circle";
		if(this.state.color == 'black' || this.state.color == 'white')
			circleClassName = classNames("circle", this.state.color);

		var clickHandler = (function() {
			if(this.state.color == 'black')
				this.setState({'color': 'white'});
			else
				this.setState({'color': 'black'});
		});

		return (
			<div className={circleClassName} onClick={clickHandler}>
			</div>
		);
	}
});


ReactDOM.render(
	<Circle />,
	document.getElementById('display')
);
```

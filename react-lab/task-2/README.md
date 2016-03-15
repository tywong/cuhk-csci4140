# Writing the Circle Component

To write a React component, we have to prepare two files:

1. A HTML file that allows the React component to hook onto.
2. A JavaScript file that tells React what to render.

## HTML for React

The following is a partial snippet of the HTML for the React component. For the complete code, please refer to the file [index.html](index.html).

```html
<html lang="en">
	<head>
		<title>First React Component</title>
		<style>
		no shown here
		</style>
	</head>

	<body>
		<div id="display"></div>
		<script type="text/javascript" src="node-project/bundle.js"></script>
	</body>
</html>
```

- The line `<div id="display"></div>` is the location that the React component will be placed.
- The next line with the `script` tag refers to the JavaScript file compiled by React compiler.

## Writing JSX file

The following code is called JSX:

```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Circle = React.createClass({
	render: function() {
		return (
			<div className="circle">
			</div>
		);
	}
});

ReactDOM.render(
	<Circle />,
	document.getElementById('display')
);
```

If it is not clear to you, please note that the above code is a JavaScript running in the Node JS environment. (Can you see those `require` statements?)

However, the above code does not really look like a Node JS file. Can you see the **raw HTML tags** inside the JavaScript code?  Also, how about the `<Circle />` tag?  This file is called a JSX file. We need to translate / compile  such a JSX file into a JavaScript file.

### Compiling JSX files

First, go to the `node-project` directory. Then, install the libraries for the project directory.

```
cd task-2/node-project
npm install --save react react-dom babelify babel-preset-react
```

Also, install `browserify` as a globally-available command.

```
npm install -g browserify
```

Last, we compile the Node, JSX file into the JS file called `bundle.js`.

```
browserify -t [ babelify --presets [ react ] ] Circle.react.js -o bundle.js
```

## Running the Example

```
task-2/
   +
   |
   |--> index.html
   |
   |--> node-project/
             +
             |
             |--> Circle.react.js
             |
             |--> bundle.js
```

Referring back to the `index.html`, we will include the `bundle.js` and run the example.

## Changing the class of Circle's div

You know, we can modify the class of the Circle's div to `circle white` and `circle black` in order to display a white circle and a black circle respectively.

To add multiple class names, please refer to the Node JS library [classnames](https://github.com/JedWatson/classnames).

```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Circle = React.createClass({
	render: function() {
    var circleClassName = classnames("circle", "white");
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

After the modification, please compile the new JSX code again by the following command:

```
browserify -t [ babelify --presets [ react ] ] Circle.react.js -o bundle.js
```

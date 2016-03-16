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
        }).bind(this);

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
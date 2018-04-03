'use strict';

console.log('Visibility Togle Running');

var visibility = false;

var toggleState = function toggleState() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleState },
            visibility ? 'Not Visible' : 'Make it Visible'
        ),
        visibility && React.createElement(
            'p',
            null,
            'This is the text'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();

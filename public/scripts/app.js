'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitile: 'My first React.JS App',
    options: ['one', 'two']
};

var user = {
    name: 'Hassan',
    age: 19,
    location: 'Lahore, PK'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitile && React.createElement(
        'p',
        null,
        app.subtitile
    ),
    app.options.length > 0 ? 'Here are your options' : 'You have no options'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);

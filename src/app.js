console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title:'Indecision App',
    subtitile: 'My first React.JS App',
    options: ['one', 'two']
};

var user = {
    name: 'Hassan',
    age: 19,
    location: 'Lahore, PK'
}
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
var template = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var template2 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitile && <p>{app.subtitile}</p>}
        {app.options.length>0 ? 'Here are your options': 'You have no options'}

    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);

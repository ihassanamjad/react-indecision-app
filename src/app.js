console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title:'Indecision App',
    subtitile: 'My first React.JS App',
    options: ['one', 'two']
};

const user = {
    name: 'Hassan',
    age: 19,
    location: 'Lahore, PK'
}
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
const template = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const template2 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitile && <p>{app.subtitile}</p>}
        {app.options.length>0 ? 'Here are your options': 'You have no options'}

    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);

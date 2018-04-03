console.log('Visibility Togle Running');

let visibility = false;

const toggleState = () => {
    visibility = !visibility;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleState}>
                {visibility ? 'Not Visible' : 'Make it Visible'}
            </button>
            {visibility && (
                <p>This is the text</p>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
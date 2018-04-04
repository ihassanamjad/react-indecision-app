class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        
        this.setState((prevState) => { return { visibility: !prevState.visibility  }});
        // console.log(visibility);
    }
    render(){
        return (
            <div>
                <h1>Visbility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <p>Show Me</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));






// console.log('Visibility Togle Running');

// let visibility = false;

// const toggleState = () => {
//     visibility = !visibility;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleState}>
//                 {visibility ? 'Not Visible' : 'Make it Visible'}
//             </button>
//             {visibility && (
//                 <p>This is the text</p>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();
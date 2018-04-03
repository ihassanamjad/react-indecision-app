class Header extends React.Component{
  render(){
      return (
          <div>
            <h1>Indecision App</h1>
            <h3>Put the decision in the hands of computer</h3>
          </div>
      );
  }
}

class Action extends React.Component{
    render(){
        return <button>What should I do?</button>
    }
}

class Options extends React.Component {
    render() {
      return (
        <div>
          <ol>
            <li>Option 1</li>
            <li>Option 2</li>
          </ol>
        </div>
      )
    }
}

class AddOption extends React.Component{
    render(){
        return <button>Add Option</button>
    }
}
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
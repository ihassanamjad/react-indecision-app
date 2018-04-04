class IndecisionApp extends React.Component{
    render(){
        const title='Indecision App';
        const subtitle='Put your life in the hands of a computer';
        const options = ['Option 1', 'Option 2', 'Option 3', '112', '444'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
  render(){
      return (
          <div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
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
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render() {
      return (
        <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <p>{this.props.options.length}</p>
            {this.props.options.map(
                (option) => <Option key={option} optionText={option}/>
            )}
        
        </div>
      );
    }
}
class Option extends React.Component{
    render(){
        return (<p>{this.props.optionText}</p>);
    }
}

class AddOption extends React.Component{
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }
    render(){
        return (<div>
            <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
            </div>);
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
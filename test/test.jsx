const React = require('react');
const ReactDOM = require('react-dom');
const ReactXEditable = require('../index');


const Demo = React.createClass({
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
    console.log(this);
  },
  handleClick(event) {
    console.log(event.target.value); // React Component instance
  },
  render() {
    return (
      <ReactXEditable.EditableTextField name='hello' value='hello' onChange={this.handleChange} onClick={this.handleClick} placeholder='Please input your name'/>
    );
  }
});

ReactDOM.render(
  <Demo/>,
  document.getElementById('demo')
);

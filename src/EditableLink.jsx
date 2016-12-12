const React = require('react');
const ReactDOM = require('react-dom');
const EditableTextArea = require('./EditableTextArea.jsx');

const EditableLink = React.createClass({
  handleClick(event) {
    this.setState({ isEditing: true });
    console.log('click');
  },
  render() {
    return (
      <a href='javascript:;' className='editable editable-click' onClick={this.props.handler} >{this.props.text}</a>
    );
  }
});
module.exports = EditableLink;

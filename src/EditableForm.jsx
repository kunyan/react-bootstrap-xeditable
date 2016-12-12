const React = require('react');
const ReactDOM = require('react-dom');

const EditableForm = React.createClass({
  render() {
    return (
      <form className='form-inline editableform'>
        {this.props.children}
      </form>
    );
  }
});
module.exports = EditableForm;

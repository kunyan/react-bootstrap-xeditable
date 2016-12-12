const React = require('react');
const ReactDOM = require('react-dom');

const EditableButtons = React.createClass({
  render() {
    return (
      <div className='editable-buttons'>
        <button type='submit' className='btn btn-primary btn-sm editable-submit' onClick={this.props.save}>
          <i className='glyphicon glyphicon-ok'></i>
        </button>
        <button type='button' className='btn btn-default btn-sm editable-cancel' onClick={this.props.cancel}>
          <i className='glyphicon glyphicon-remove'></i>
        </button>
      </div>
    );
  }
});
module.exports = EditableButtons;

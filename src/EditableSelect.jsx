const React = require('react');
const ReactDOM = require('react-dom');

const EditableSelect = React.createClass({
  render() {
    return (
      <select name={this.props.name} value={this.props.value}>
        {this.props.options && this.props.options.map(function(option, i) {
          return (
            <option value={option.value}>{option.text}</option>
          );
        })}
      </select>
    );
  }
});
module.exports = EditableSelect;

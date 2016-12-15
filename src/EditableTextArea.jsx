const React = require('react');

const EditableTextArea = React.createClass({
  render() {
    return (
      <textarea className={this.props.className} name={this.props.name} cols={this.props.cols} rows={this.props.rows}>{this.props.value}</textarea>
    );
  }
});

module.exports = EditableTextArea;

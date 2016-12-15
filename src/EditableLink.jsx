import React from 'react';

export default class EditableLink extends React.Component {
  handleClick() {
    this.setState({ isEditing: true });
  }
  render() {
    return (
      <a href='javascript:;' className='editable editable-click' onClick={this.props.handler} >{this.props.text}</a>
    );
  }
}

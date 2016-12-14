import React from 'react';

export default class EditableForm extends React.Component {
  static propTypes = {
    submit: React.PropTypes.func.isRequired,
    children: React.PropTypes.element.isRequired,
  };
  constructor(props) {
     super(props);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(1231);
  };
  render() {
    return (
      <form className='form-inline editableform' onSubmit={this.props.submit}>
        {this.props.children}
      </form>
    );
  };
}

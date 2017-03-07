import React from 'react';
import XEditable from './XEditable';

export default class EditableTextField extends React.Component {
  static defaultProps = {
    name: null,
    value: '',
    placeholder: ''
  };
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onUpdate: React.PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.setState = this.setState.bind(this);
  }
  save = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.props.name, this.refs.el.value);
    this.setState({isEditing: false});
  }
  cancel = () => {
    this.setState({isEditing: false});
  }
  clear = () => {
    this.refs.el.value = '';
  }
  handleLinkClick = () => {
    this.setState({isEditing: true});
  }
  render() {
    if (this.state.isEditing) {
      return (
        <XEditable isLoading={false} save={this.save} cancel={this.cancel}>
          <input ref='el' type='text' className='form-control input-sm' name={this.props.name} defaultValue={this.props.value} placeholder={this.props.placeholder} autoFocus/>
          <span className='editable-clear-x' onClick={this.clear}></span>
        </XEditable>
      );
    } else {
      return <a href='javascript:;' className='editable editable-click' onClick={this.handleLinkClick}>{this.props.value}</a>;
    }
  }
}

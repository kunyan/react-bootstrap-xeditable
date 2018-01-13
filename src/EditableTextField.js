import React from 'react';
import PropTypes from 'prop-types';
import XEditable from './XEditable';

export default class EditableTextField extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.node,
    placeholder: PropTypes.string,
    onUpdate: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    defaultText: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.value,
      defaultText: this.props.defaultText || 'Empty',
    };
    this.setState = this.setState.bind(this);
  }

  save = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.props.name, this.refs.el.value);
    this.setState({isEditing: false, value: this.refs.el.value});
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

  handleInputBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    } else {
      this.cancel();
    }
  }

  render() {
    if (this.state.isEditing) {
      const inputClassName = `form-control input-sm ${this.props.className}`;
      return (
        <XEditable isLoading={false} save={this.save} cancel={this.cancel}>
          <input
            ref='el'
            id={this.props.id}
            type='text'
            className={inputClassName}
            name={this.props.name}
            defaultValue={this.props.value}
            placeholder={this.props.placeholder}
            onBlur={this.handleInputBlur}
            autoFocus
          />
          <span className='editable-clear-x' onClick={this.clear}></span>
        </XEditable>
      );
    } else {
      let aClassName = 'editable editable-click';
      if (!this.props.value) {
        aClassName += ' editable-empty';
      }
      return (
        <a href='javascript:;'
          className={aClassName}
          style={this.state.textStyle}
          onClick={this.handleLinkClick}
        >
          {this.props.value || this.state.defaultText}
        </a>
      );
    }
  }
}

import React from 'react';
import XEditable from './XEditable';

export default class EditableSelect extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    value: React.PropTypes.node,
    onUpdate: React.PropTypes.func.isRequired,
    options: React.PropTypes.array,
    defaultText: React.PropTypes.node,
  }

  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);

    this.state = {
      isEditing: false,
      value: this.props.value,
      defaultText: this.props.defaultText || 'not selected',
    };

    this.state.options = this.convertOptions(this.props.options);

    const selected = this.state.options && this.state.options.find((opt) => {
      if (opt.value === this.props.value) {
        return opt;
      }
    });
    this.setLinkText(selected && selected.text);

  }

  save = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.refs.el.name, this.refs.el.value);
    const text = this.refs.el.options && this.refs.el.options[this.refs.el.selectedIndex] && this.refs.el.options[this.refs.el.selectedIndex].text;
    this.setState({
      isEditing: false,
    });
    this.setLinkText(text);
  }
  cancel = () => {
    this.setState({isEditing: false});
  }
  handleLinkClick = () => {
    this.setState({isEditing: true});
  }
  setLinkText(text) {
    this.state.text = text;
    this.state.textStyle = {
      color: !text && !this.props.defaultText
        ? 'gray'
        : null
    };
  }
  convertOptions = (options) => {
    if (!options) {
      return null;
    }
    return options.map((opt) => {
      if (typeof opt === 'string' || typeof opt === 'number' || typeof opt === 'boolean') {
        return {text: opt, value: opt};
      }
      return {text: opt.text, value: opt.value};
    });
  }

  render() {
    if (this.state.isEditing) {
      const options = this.state.options && this.state.options.map((opt, i) => {
        return <option key={i} value={opt.value}>{opt.text}</option>;
      });
      const selectClassName = `form-control input-sm ${this.props.className}`;
      return (
        <XEditable isLoading={false} save={this.save} cancel={this.cancel}>
          <select ref='el' className={selectClassName} id={this.props.id} name={this.props.name} defaultValue={this.state.value}>
            {options}
          </select>
        </XEditable>
      );
    } else {
      return <a href='javascript:;' className='editable editable-click' style={this.state.textStyle} onClick={this.handleLinkClick}>{this.state.text || this.state.defaultText }</a>;
    }
  }
}

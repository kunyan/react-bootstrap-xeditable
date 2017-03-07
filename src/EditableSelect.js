import React from 'react';
import XEditable from './XEditable';

export default class EditableSelect extends React.Component {
  static defaultProps = {
    name: null
  }
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    options: React.PropTypes.array.isRequired,
    defaultOptionText: React.PropTypes.string
  }
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);

    const options = this.convertOptions(this.props.options);
    if (this.props.defaultOptionText) {
      options.unshift({text: this.props.defaultOptionText, value: null});
    }
    const selected = options.find((opt) => {
      if (opt.value === this.props.value) {
        return opt;
      }
    });

    let text = 'Invalid value';

    if (selected) {
      text = selected.text;
    } else if (this.props.defaultOptionText) {
      text = this.props.defaultOptionText;
    }
    this.state = {
      isEditing: false,
      options: options,
      text: text,
      value: this.props.value
    };

  }

  save = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.props.name, this.refs.el.value);
    this.setState({
      isEditing: false,
      text: this.refs.el.options[this.refs.el.selectedIndex].text,
      value: this.refs.el.value
    });
  }
  cancel = () => {
    this.setState({isEditing: false});
  }
  handleLinkClick = () => {
    this.setState({isEditing: true});
  }

  convertOptions = (options) => {
    return options.map((opt) => {
      if (typeof opt === 'string' || typeof opt === 'number' || typeof opt === 'boolean') {
        return {text: opt, value: opt};
      }
      return {text: opt.text, value: opt.value};
    });
  }
  render() {
    if (this.state.isEditing) {
      const options = this.state.options.map((opt, index) => {
        return <option key={index} value={opt.value}>{opt.text}</option>;
      });
      return (
        <XEditable isLoading={false} save={this.save} cancel={this.cancel}>
          <select ref='el' className='form-control input-sm' name={this.props.name} defaultValue={this.state.value}>
            {options}
          </select>
        </XEditable>
      );
    } else {
      return <a href='javascript:;' className='editable editable-click' onClick={this.handleLinkClick}>{this.state.text}</a>;
    }
  }
}

import React from 'react';
import XEditable from './XEditable';

export default class EditableSelect extends React.Component {
  static defaultProps = {
    name: null,
  }
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    options: React.PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props);
    const text = this.props.options.map((option) => {
      return option.value === this.props.value ? option.text : '';
    });
    this.state = {
      isEditing: false,
      text: text,
    };
    this.setState = this.setState.bind(this);
  }
  save = (event) => {
    event.preventDefault();
    const obj = this.refs.select;
    this.props.onUpdate(this.props.name, obj.value);
    this.setState({
      isEditing: false,
      text: obj.options[obj.selectedIndex].text,
    });
  }
  cancel = () => {
    this.setState({isEditing: false});
  }
  handleLinkClick = () => {
    this.setState({isEditing: true});
  }
  render() {
    if (this.state.isEditing) {
      const options = this.props.options.map((option, index) => {
        return <option key={index} value={option.value}>{option.text}</option>;
      });
      return (
        <XEditable isLoading={false} save={this.save} cancel={this.cancel}>
          <select ref='select' className='form-control input-sm' name={this.props.name} defaultValue={this.props.value} >
            {options}
          </select>
        </XEditable>
      );
    } else {
      return <a href='javascript:;' className='editable editable-click' onClick={this.handleLinkClick} >{this.state.text}</a>;
    }
  }
}

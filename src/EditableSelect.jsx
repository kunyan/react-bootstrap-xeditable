import React from 'react';
import EditableLink from './EditableLink.jsx';
import EditableLoading from './EditableLoading.jsx';
import EditableButtons from './EditableButtons.jsx';
import EditableForm from './EditableForm.jsx';

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
    const options = this.props.options.map((option, index) => {
      return <option key={index} value={option.value}>{option.text}</option>;
    });
    if (this.state.isEditing) {
      return (
        <span className='editable-container editable-inline'>
          <div>
            {this.state.isLoading && (<EditableLoading/>)}
            <EditableForm submit={this.save}>
              <div className='control-group form-group'>
                <div>
                  <div className='editable-input' style={{
                    position: 'relative'
                  }}>
                    <select ref='select' className='form-control input-sm' name={this.props.name} defaultValue={this.props.value} >
                      {options}
                    </select>
                  </div>
                  <EditableButtons save={this.save} cancel={this.cancel}/>
                </div>
                <div className='editable-error-block help-block'></div>
              </div>
            </EditableForm>
          </div>
        </span>
      );
    } else {
      return <EditableLink handler={this.handleLinkClick} text={this.state.text}/>;
    }
  }
}

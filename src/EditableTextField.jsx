import React from 'react';
import EditableLink from './EditableLink.jsx';
import EditableLoading from './EditableLoading.jsx';
import EditableButtons from './EditableButtons.jsx';
import EditableForm from './EditableForm.jsx';

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
      isEditing: false,
    };
    this.setState = this.setState.bind(this);
  };
  save = (event) => {
    event.preventDefault();
    this.props.onUpdate(this.props.name, this.refs.input.value);
    this.setState({isEditing: false});
  };
  cancel = () => {
    this.setState({isEditing: false});
  };
  clear = () => {
    this.refs.input.value = '';
  };
  handleLinkClick = (event) => {
    this.setState({isEditing: true});
  };
  render() {
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
                    <input ref='input' type='text' className='form-control input-sm' name={this.props.name} defaultValue={this.props.value} placeholder={this.props.placeholder}/>
                    <span className='editable-clear-x' onClick={this.clear}></span>
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
      return <EditableLink handler={this.handleLinkClick} text={this.props.value}/>
    }
  };
};

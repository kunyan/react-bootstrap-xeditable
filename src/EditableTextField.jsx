const React = require('react');
const ReactDOM = require('react-dom');
const EditableLink = require('./EditableLink.jsx');
const EditableLoading = require('./EditableLoading.jsx');
const EditableButtons = require('./EditableButtons.jsx');
const EditableForm = require('./EditableForm.jsx');
const EditableTextField = React.createClass({
  getInitialState() {
    return {};
  },
  save() {
    this.props.onUpdate(this.props.name, this.refs.input.value);
    this.setState({isEditing: false});
  },
  cancel() {
    this.setState({isEditing: false});
  },
  clear() {
    this.refs.input.value = '';
    console.log(123);
  },
  handleClick(event) {
    this.setState({isEditing: true});
  },
  render() {
    if (this.state.isEditing) {
      return (
        <span className='editable-container editable-inline'>
          <div>
            {this.state.isLoading && (<EditableLoading/>)}
            <EditableForm>
              <div className='control-group form-group'>
                <div>
                  <div className='editable-input' style={{position: 'relative'}}>
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
      return <EditableLink handler={this.handleClick} text={this.props.value}/>
    }
  }
});

module.exports = EditableTextField;

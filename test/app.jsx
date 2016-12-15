import React from 'react';
import ReactDOM from 'react-dom';
import {EditableTextField, EditableSelect} from '../index';

const XTextField = class XTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'superuser'
    };
    this.setState = this.setState.bind(this);
  }
  handleUpdate = (name, value) => {
    this.setState({value: value});
  }
  render() {
    return (<EditableTextField name='test' value={this.state.value} onUpdate={this.handleUpdate} placeholder='Please input your name'/>);
  }
};

const XSelect = class XSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'UK'
    };
    this.setState = this.setState.bind(this);
  }
  handleUpdate = (name, value) => {
    this.setState({value: value});
  }
  render() {
    const options = [
      {
        text: 'China',
        value: 'CN'
      }, {
        text: 'India',
        value: 'IN'
      }, {
        text: 'United Kingdom (UK)',
        value: 'UK'
      }, {
        text: 'United States of America (USA)',
        value: 'USA'
      }
    ];
    return (<EditableSelect name='country' onUpdate={this.handleUpdate} value={this.state.value} options={options}/>);
  }
};
ReactDOM.render(<XTextField/>, document.getElementById('demo-textfield'));
ReactDOM.render(<XSelect/>, document.getElementById('demo-select'));

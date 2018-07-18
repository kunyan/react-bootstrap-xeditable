import React from 'react';
import { render } from 'react-dom';
import EditableSelect from '../src/EditableSelect';
import EditableTextArea from '../src/EditableTextArea';
import EditableTextField from '../src/EditableTextField';

interface IState {
  value: string;
}
class XTextField extends React.Component<{}, IState> {
  state: IState = {
    value: 'superuser'
  };

  onSave = (value: any) => {
    this.setState({
      value
    });
    alert('Value Changed:' + value);
  };
  render() {
    return <EditableTextField onSave={this.onSave} value={this.state.value} />;
  }
};

class XSelect extends React.Component<{}, IState> {
  state: IState = {
    value: ''
  };

  onSave = (value: any) => {
    this.setState({
      value
    });
    alert('Value Changed:' + value);
  };
  render() {
    const options = ['Hello', 'World', 'Sky', 'Air'];
    return <EditableSelect onSave={this.onSave} value={this.state.value} options={options}/>;
  }
};

class XSelect2 extends React.Component<{}, IState> {
  state: IState = {
    value: ''
  };

  onSave = (value: any) => {
    this.setState({
      value
    });
    alert('Value Changed:' + value);
  };
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
    return <EditableSelect onSave={this.onSave} value={this.state.value} options={options}/>;
  }
};

class XTextArea extends React.Component<{}, IState> {
  state: IState = {
    value: 'Act as if you are and you will draw it to you.\nWhat you act as if you are, you become.\nIn other words, FAKE it till you MAKE IT, but not actually faking, doing it sincerely.'
  };

  onSave = (value: any) => {
    this.setState({
      value
    });
    alert('Value Changed:' + value);
  };
  render() {
    return <EditableTextArea onSave={this.onSave} value={this.state.value} placeholder='Please input your name' />;
  }
};

render(<XTextField />, document.getElementById('demo-textfield'));
render(<XSelect />, document.getElementById('demo-select'));
render(<XSelect2 />, document.getElementById('demo-select-custom'));
render(<XTextArea />, document.getElementById('demo-textarea'));
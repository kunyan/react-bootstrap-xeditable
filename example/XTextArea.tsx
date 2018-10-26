import React from 'react';
import EditableTextArea from '../src/EditableTextArea';

interface IState {
  value: string;
}
export default class XTextArea extends React.Component<{}, IState> {
  state: IState = {
    value:
      'Act as if you are and you will draw it to you.\nWhat you act as if you are, you become.\nIn other words, FAKE it till you MAKE IT, but not actually faking, doing it sincerely.'
  };

  onSave = (value: any) => {
    this.setState({
      value
    });
    alert('Value Changed:' + value);
  };
  render() {
    return <EditableTextArea onSave={this.onSave} value={this.state.value} placeholder="Please input your name" />;
  }
}

import React from 'react';
import EditableTextField from '../src/EditableTextField';

interface IState {
  value: string;
}
export default class XTextField extends React.Component<{}, IState> {
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
}

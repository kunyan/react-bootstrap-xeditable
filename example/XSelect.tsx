import React from 'react';
import EditableSelect from '../src/EditableSelect';

interface IState {
  value: string;
}

export default class XSelect extends React.Component<{}, IState> {
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
    return <EditableSelect onSave={this.onSave} value={this.state.value} options={options} />;
  }
}

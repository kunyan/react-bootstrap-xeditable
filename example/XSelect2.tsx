import React from 'react';
import EditableSelect from '../src/EditableSelect';

interface IState {
  value: string;
}

export default class XSelect2 extends React.Component<{}, IState> {
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
      },
      {
        text: 'India',
        value: 'IN'
      },
      {
        text: 'United Kingdom (UK)',
        value: 'UK'
      },
      {
        text: 'United States of America (USA)',
        value: 'USA'
      }
    ];
    return <EditableSelect onSave={this.onSave} value={this.state.value} options={options} />;
  }
}

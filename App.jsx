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
    alert('Value Changed:' + value);
  }
  render() {
    return (<EditableTextField name='test' value={this.state.value} onUpdate={this.handleUpdate} placeholder='Please input your name'/>);
  }
};

const XSelect = class XSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.setState = this.setState.bind(this);
  }
  handleUpdate = (name, value) => {
    this.setState({value: value});
    alert('Value Changed:' + value);
  }
  render() {
    const options2 = [
      'Hello', 'World', 'Sky', 'Air',
      // 'UK',
    ];
    return (<EditableSelect name='country' onUpdate={this.handleUpdate} value={this.state.value} options={options2}/>);
  }
};

const XSelect2 = class XSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.setState = this.setState.bind(this);
  }
  handleUpdate = (name, value) => {
    this.setState({value: value});
    alert('Value Changed:' + value);
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
    const defaultText = <span className="glyphicon glyphicon-pencil"/>;
    return (<EditableSelect name='country' onUpdate={this.handleUpdate} value={this.state.value} options={options} defaultText={defaultText}/>);
  }
};

const XTextArea = class XTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Act as if you are and you will draw it to you.\nWhat you act as if you are, you become.\nIn other words, FAKE it till you MAKE IT, but not actually faking, doing it sincerely.'
    };
    this.setState = this.setState.bind(this);
  }
  handleUpdate = (name, value) => {
    this.setState({value: value});
  }
  render() {
    return (<EditableTextArea name='test' value={this.state.value} onUpdate={this.handleUpdate} placeholder='Please input your name'/>);
  }
};
ReactDOM.render(
  <XTextField/>, document.getElementById('demo-textfield'));
ReactDOM.render(
  <XSelect/>, document.getElementById('demo-select'));
ReactDOM.render(
  <XSelect2/>, document.getElementById('demo-select-custom'));
ReactDOM.render(
  <XTextArea/>, document.getElementById('demo-textarea'));

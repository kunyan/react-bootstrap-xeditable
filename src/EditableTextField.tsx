import React, { ChangeEvent } from 'react';
import XEditable from './XEditable';

export interface IEditableTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isEditing?: boolean;
  isEditable?: boolean;
  linkClassName?: string;
  nonValueText?: string;
  onSaving?: boolean;
  value: string;
  onSave: (value: string | number | string[]) => void;
  onCancel?: () => void;
}

interface IState {
  isEditing: boolean;
  value: string | number | string[];
}

export default class EditableTextField extends React.Component<IEditableTextFieldProps, IState> {
  static defaultProps: Partial<IEditableTextFieldProps> = {
    isEditable: true,
  }

  state: IState = {
    isEditing: !!this.props.isEditing,
    value: this.props.value || ''
  };

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({
      value: event.currentTarget.value
    });
    this.props.onChange && this.props.onChange(event);
  };

  onSave = () => {
    this.setState({
      isEditing: false
    });
    this.props.onSave(this.state.value);
  };

  onCancel = () => {
    this.setState({
      isEditing: false,
      value: this.props.value || ''
    }),
      this.props.onCancel && this.props.onCancel();
  };

  onClear = () => {
    this.setState({
      value: ''
    });
  };

  onLinkClick = () => {
    if (this.props.isEditable) {
      this.setState({
        isEditing: true
      });
    }
  };

  renderEditing() {
    const { isEditing, isEditable, onSave, onCancel, ...otherProps } = this.props;
    return (
      <XEditable onSave={this.onSave} onCancel={this.onCancel}>
        <input {...otherProps} onChange={this.onChange} value={this.state.value} />
        <span className="editable-clear-x" onClick={this.onClear} />
      </XEditable>
    );
  }

  renderIcon() {
    if (!this.state.value || this.state.value === '') {
      return <span className="glyphicon glyphicon-pencil"/>
    }
    return;
  }

  render() {
    if (!this.props.isEditable) {
      return <div>{this.state.value || this.props.nonValueText}</div>;
    }
    const classNames = ['editable', 'editable-click'];

    if (!this.state.value) {
      classNames.push('editable-empty');
    }

    if (this.props.linkClassName) {
      classNames.concat(this.props.linkClassName.split(' '))
    }

    if (this.state.isEditing) {
      return this.renderEditing();
    } else {
      return (
        <a href="javascript:;" className={classNames.join(' ')} onClick={this.onLinkClick}>
          {this.props.value || this.props.nonValueText}
          {this.renderIcon()}
        </a>
      );
    }
  }
}

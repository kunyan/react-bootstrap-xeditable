import React, { ChangeEvent } from 'react';
import XEditable from './XEditable';

export interface IEditableTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  value: string;
}

export default class EditableTextArea extends React.Component<IEditableTextAreaProps, IState> {
  static defaultProps: Partial<IEditableTextAreaProps> = {
    isEditable: true
  };

  state: IState = {
    isEditing: !!this.props.isEditing,
    value: this.props.value || ''
  };

  onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
        <textarea {...otherProps} onChange={this.onChange} value={this.state.value} />
      </XEditable>
    );
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
      classNames.concat(this.props.linkClassName.split(' '));
    }

    if (this.state.isEditing) {
      return this.renderEditing();
    } else {
      return (
        <a href="javascript:;" className={classNames.join(' ')} onClick={this.onLinkClick}>
          <pre>{this.props.value || this.props.nonValueText}} </pre>

        </a>
      );
    }
  }
}

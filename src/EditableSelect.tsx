import React, { ChangeEvent } from 'react';
import XEditable from './XEditable';

export interface IOption {
  text: string;
  value: string | boolean | number;
}

export interface IEditableSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isEditing?: boolean;
  isEditable?: boolean;
  linkClassName?: string;
  nonValueText?: string;
  onSaving?: boolean;
  value: string;
  onSave: (value: string | number | string[]) => void;
  onCancel?: () => void;
  options: string[] | IOption[];
}

interface IState {
  isEditing: boolean;
  value: string;
}

export default class EditableTextArea extends React.Component<IEditableSelectProps, IState> {
  static defaultProps: Partial<IEditableSelectProps> = {
    isEditable: true
  };

  state: IState = {
    isEditing: !!this.props.isEditing,
    value: this.props.value || ''
  };

  onChange = (event: ChangeEvent<HTMLSelectElement>) => {
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

  renderStringOptions() {
    return (this.props.options as string[]).map((opt: string, index: number) => (
      <option key={`opt-${index}`} value={opt}>
        {opt}
      </option>
    ));
  }

  renderObjectOptions() {
    return (this.props.options as IOption[]).map((opt: IOption, index: number) => (
      <option key={`opt-${index}`} value={String(opt.value)}>
        {opt.text}
      </option>
    ));
  }

  renderOptions() {
    if (this.props.options) {
      for (let index = 0; index < this.props.options.length; index++) {
        const option = this.props.options[index];

        if (typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean') {
          return this.renderStringOptions();
        }
        return this.renderObjectOptions();
      }
    }
    return;
  }

  renderEditing() {
    const { isEditing, isEditable, onSave, onCancel, ...otherProps } = this.props;
    return (
      <XEditable onSave={this.onSave} onCancel={this.onCancel}>
        <select {...otherProps} onChange={this.onChange} value={this.state.value}>
          {this.renderOptions()}
        </select>
      </XEditable>
    );
  }

  renderIcon() {
    if (!this.state.value || this.state.value === '') {
      return <span className="glyphicon glyphicon-pencil" />;
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
      classNames.concat(this.props.linkClassName.split(' '));
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

import React, { ChangeEvent } from 'react';
import XEditable from './XEditable';

export interface IOption {
  label?: string;
  text: string;
  value: string | number;
  disabled?: boolean;
}

export interface IEditableSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isEditing?: boolean;
  isEditable?: boolean;
  linkClassName?: string;
  nonValueText?: string;
  value: string | string[];
  onSave: (value: string | string[] | number) => void;
  onCancel?: () => void;
  options: string[] | IOption[];
}

interface IState {
  isEditing: boolean;
  options: IOption[];
  selectedOptions: IOption[];
}

export default class EditableTextArea extends React.Component<IEditableSelectProps, IState> {
  static defaultProps: Partial<IEditableSelectProps> = {
    isEditable: true,
    multiple: false
  };

  state: IState = {
    isEditing: !!this.props.isEditing,
    options: this.getOptions(),
    selectedOptions: this.findSelectedOptions(this.props.value) || []
  };

  getOptions(): IOption[] {
    return this.props.options && this.props.options[0] && (this.props.options[0] as IOption).text
      ? (this.props.options as IOption[])
      : (this.props.options as string[]).map((opt: string) => ({
          text: opt,
          value: opt
        }));
  }

  findSelectedOptions(value: string | string[] | number) {
    const options = this.getOptions();
    if (this.props.multiple) {
      const values = value as string[];
      const matchedOptions: IOption[] = [];
      for (const opt of options) {
        for (const val of values) {
          if (opt.value === val) {
            matchedOptions.push(opt);
          }
        }
      }

      return matchedOptions;
    }
    const filtered = options.filter((opt) => opt.value.toString() === value.toString());
    return filtered;
  }

  onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const selectedOptions = this.findSelectedOptions(event.currentTarget.value);
    this.setState({
      selectedOptions
    });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  onSave = () => {
    this.setState({
      isEditing: false
    });
    if (this.props.multiple) {
      this.props.onSave(this.state.selectedOptions.map((opt: IOption) => opt.value.toString()));
    } else {
      this.props.onSave(this.state.selectedOptions[0].value);
    }
  };

  onCancel = () => {
    this.setState({
      isEditing: false,
      selectedOptions: this.findSelectedOptions(this.props.value)
    });
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };

  onLinkClick = () => {
    if (this.props.isEditable) {
      this.setState({
        isEditing: true
      });
    }
  };

  renderOptions() {
    return this.state.options.map((opt: IOption, index: number) => (
      <option key={`opt-${index}`} value={String(opt.value)} label={opt.label} disabled={opt.disabled}>
        {opt.text}
      </option>
    ));
  }

  renderEditing() {
    const { isEditing, isEditable, onSave, onCancel, ...otherProps } = this.props;
    const value =
      (this.state.selectedOptions.length > 0 &&
        (this.props.multiple
          ? this.state.selectedOptions.map((opt) => opt.value.toString())
          : this.state.selectedOptions[0].value)) ||
      '';
    return (
      <XEditable onSave={this.onSave} onCancel={this.onCancel}>
        <select {...otherProps} onChange={this.onChange} value={value}>
          {this.renderOptions()}
        </select>
      </XEditable>
    );
  }

  renderIcon() {
    if (!this.state.selectedOptions || this.state.selectedOptions.length === 0) {
      return <span className="glyphicon glyphicon-pencil" />;
    }
    return;
  }

  renderText() {
    if (this.state.selectedOptions.length !== 0) {
      if (this.props.multiple) {
        return this.state.selectedOptions.map((opt) => opt.text).join(',');
      }
      return this.state.selectedOptions[0].text;
    }
    return this.props.nonValueText;
  }

  render() {
    if (!this.props.isEditable) {
      return <div>{this.renderText()}</div>;
    }
    const classNames = ['editable', 'editable-click'];

    if (!this.state.selectedOptions || this.state.selectedOptions.length === 0) {
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
          {this.renderText()}
          {this.renderIcon()}
        </a>
      );
    }
  }
}

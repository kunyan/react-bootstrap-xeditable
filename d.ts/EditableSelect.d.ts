// Import React
import * as React from 'react';

// <EditableSelect />
// ----------------------------------------
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

export interface EditableSelect extends React.ReactElement<IEditableSelectProps> {}
export interface EditableSelectClass extends React.ComponentClass<IEditableSelectProps> {}
export const EditableSelect: EditableSelectClass;

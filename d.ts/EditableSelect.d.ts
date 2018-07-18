// Import React
import * as React from 'react';

// <EditableSelect />
// ----------------------------------------
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

export interface EditableSelect extends React.ReactElement<IEditableSelectProps> {}
export interface EditableSelectClass extends React.ComponentClass<IEditableSelectProps> {}
export const EditableSelect: EditableSelectClass;

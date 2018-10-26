// Import React
import * as React from 'react';

// <EditableTextField />
// ----------------------------------------
export interface IEditableTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isEditing?: boolean;
  isEditable?: boolean;
  linkClassName?: string;
  nonValueText?: string;
  value: string;
  onSave: (value: string | number | string[]) => void;
  onCancel?: () => void;
}

export interface EditableTextField extends React.ReactElement<IEditableTextFieldProps> { }
export interface EditableTextFieldClass extends React.ComponentClass<IEditableTextFieldProps> { }
export const EditableTextField: EditableTextFieldClass;

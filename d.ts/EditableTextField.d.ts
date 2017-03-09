// Import React
import React from 'react';

// <EditableTextField />
// ----------------------------------------
export interface EditableTextFieldProps extends React.Props<EditableTextFieldClass> {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onUpdate: Function;
  defaultText?: any;
}
export interface EditableTextField extends React.ReactElement<EditableTextFieldProps> { }
export interface EditableTextFieldClass extends React.ComponentClass<EditableTextFieldProps> { }
export const EditableTextField: EditableTextFieldClass;

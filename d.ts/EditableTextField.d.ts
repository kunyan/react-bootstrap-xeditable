// Import React
import React from 'react';

// <EditableTextField />
// ----------------------------------------
export interface EditableTextFieldProps extends React.Props<EditableTextFieldClass> {
  name: string;
  value?: string;
  placeholder?: string;
  onUpdate: Function;
}
export interface EditableTextField extends React.ReactElement<EditableTextFieldProps> { }
export interface EditableTextFieldClass extends  React.ComponentClass<EditableTextFieldProps> { }
export const EditableTextField: EditableTextFieldClass;
export default EditableTextField;

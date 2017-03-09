// Import React
import React from 'react';

// <EditableTextArea />
// ----------------------------------------
export interface EditableTextAreaProps extends React.Props<EditableTextAreaClass> {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  rows: number,
  cols: number,
  placeholder?: string;
  onUpdate: Function;
  defaultText?: any;
}
export interface EditableTextArea extends React.ReactElement<EditableTextAreaProps> { }
export interface EditableTextAreaClass extends React.ComponentClass<EditableTextAreaProps> { }
export const EditableTextField: EditableTextAreaClass;

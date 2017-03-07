// Import React
import React from 'react';

// <EditableTextArea />
// ----------------------------------------
export interface EditableTextAreaProps extends React.Props<EditableTextAreaClass> {
  name: string;
  value?: string;
  placeholder?: string;
  onUpdate: Function;
}
export interface EditableTextArea extends React.ReactElement<EditableTextAreaProps> { }
export interface EditableTextAreaClass extends React.ComponentClass<EditableTextAreaProps> { }
export const EditableTextField: EditableTextAreaClass;

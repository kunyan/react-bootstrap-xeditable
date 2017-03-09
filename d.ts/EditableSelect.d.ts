// Import React
import React from 'react';

// <EditableSelect />
// ----------------------------------------
export interface EditableSelectProps extends React.Props<EditableSelectClass> {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  options?: Array<any>;
  onUpdate: Function;
  defaultText?: any;
}
export interface EditableSelect extends React.ReactElement<EditableSelectProps> { }
export interface EditableSelectClass extends React.ComponentClass<EditableSelectProps> { }
export const EditableSelect: EditableSelectClass;

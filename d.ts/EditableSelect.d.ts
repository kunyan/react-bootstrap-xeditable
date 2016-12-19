// Import React
import React from 'react';

// <EditableSelect />
// ----------------------------------------
export interface EditableSelectProps extends React.Props<EditableTextFieldClass> {
  name: string;
  value?: string;
  options: Array<any>;
  onUpdate: Function;
}
export interface EditableSelect extends React.ReactElement<EditableSelectProps> { }
export interface EditableSelectClass extends  React.ComponentClass<EditableSelectProps> { }
export const EditableSelect: EditableSelectClass;
export default EditableSelect;

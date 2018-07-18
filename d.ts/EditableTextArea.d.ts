// Import React
import * as React from 'react';

// <EditableTextArea />
// ----------------------------------------
export interface IEditableTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isEditing?: boolean;
  isEditable?: boolean;
  linkClassName?: string;
  nonValueText?: string;
  onSaving?: boolean;
  value: string;
  onSave: (value: string | number | string[]) => void;
  onCancel?: () => void;
}

export interface EditableTextArea extends React.ReactElement<IEditableTextAreaProps> { }
export interface EditableTextAreaClass extends React.ComponentClass<IEditableTextAreaProps> { }
export const EditableTextField: EditableTextAreaClass;

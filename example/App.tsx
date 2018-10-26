import React from 'react';
import { render } from 'react-dom';
import XSelect from './XSelect';
import XSelect2 from './XSelect2';
import XTextArea from './XTextArea';
import XTextField from './XTextField';

render(<XTextField />, document.getElementById('demo-textfield'));
render(<XSelect />, document.getElementById('demo-select'));
render(<XSelect2 />, document.getElementById('demo-select-custom'));
render(<XTextArea />, document.getElementById('demo-textarea'));

# react-bootstrap-xeditable

X-Editable for React with Bootstrap.  [Demo](https://yankun.org/react-bootstrap-xeditable/)

[![Build Status](https://travis-ci.org/kunyan/react-bootstrap-xeditable.svg?branch=master)](https://travis-ci.org/kunyan/react-bootstrap-xeditable)
[![npm version](https://badge.fury.io/js/react-bootstrap-xeditable.svg)](https://badge.fury.io/js/react-bootstrap-xeditable)
[![devDependencies Status](https://david-dm.org/kunyan/react-bootstrap-xeditable/dev-status.svg)](https://david-dm.org/kunyan/react-bootstrap-xeditable?type=dev)

## Install

```bash
# npm
npm install react-bootstrap-xeditable

# yarn
yarn add react-bootstrap-xeditable
```

import bootstrap css and xeditable css
```

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<link rel="stylesheet" href="https://vitalets.github.io/x-editable/assets/x-editable/bootstrap3-editable/css/bootstrap-editable.css">
```

## Usage:

### TextField
```html
import {EditableTextField} from 'react-bootstrap-xeditable';

<EditableTextField name='username' value={this.state.value} onSave={this.onSave} placeholder='Please input your username'/>
```
#### Options
| Option | Type | Required | Description |
| ------| ------ | ------ |------ |
| isEditing| boolean | optional | Set editing status |
| isEditable| boolean | optional | You can make it readonly |
| linkClassName| string | optional | Defined the css class for the link text |
| nonValueText| string | optional | the default text if no value |
| value| string | required | The value of input text |
| onSave| function | required | the callback when click save button |
| onCancel| function | optional | the callback when click cancel button |
| placeholder | string | optional| |


### Select
```javascript
const options = [
  {
    text: 'China',
    value: 'CN'
  }, {
    text: 'India',
    value: 'IN'
  }, {
    text: 'United Kingdom (UK)',
    value: 'UK'
  }, {
    text: 'United States of America (USA)',
    value: 'USA'
  }
];
```
```html
import {EditableSelect} from 'react-bootstrap-xeditable';

<EditableSelect name='country' onSave={this.onSave} value={this.state.value} options={options}/>
```

#### Options
| Option | Type | Required | Description |
| ------| ------ | ------ |------ |
| isEditing| boolean | optional | Set editing status |
| isEditable| boolean | optional | You can make it readonly |
| linkClassName| string | optional | Defined the css class for the link text |
| nonValueText| string | optional | the default text if no value |
| value| string | string[] | required | The value of input text |
| multiple| boolean | optional | If the select support multiple |
| options| IOption[] | string[] | required | The options |
| onSave| function | required | the callback when click save button |
| onCancel| function | optional | the callback when click cancel button |


### TextArea
```html
import {EditableTextArea} from 'react-bootstrap-xeditable';

<EditableTextArea name='username' value={this.state.value} onSave={this.onSave} placeholder='Please input your username'/>
```

#### Options
| Option | Type | Required | Description |
| ------| ------ | ------ |------ |
| isEditing| boolean | optional | Set editing status |
| isEditable| boolean | optional | You can make it readonly |
| linkClassName| string | optional | Defined the css class for the link text |
| nonValueText| string | optional | the default text if no value |
| value| string | required | The value of input text |
| onSave| function | required | the callback when click save button |
| onCancel| function | optional | the callback when click cancel button |

## Progress:
* :white_check_mark: : Supported
* :runner: : In Progress
* :thought_balloon: : Planning

| Element | Support | ReactXElement |
| ------| ------ | ------ |
| textfield| :white_check_mark: | EditableTextField |
| select| :white_check_mark: | EditableSelect |
| textarea| :white_check_mark: | EditableTextArea |
| date| :thought_balloon: |  &nbsp; |
| datetime| :thought_balloon: | &nbsp; |
| select2| :thought_balloon: | &nbsp; |

## TypeScript:
d.ts already intergrated. just import it.

## Known Issues:

1. Only support inline mode
2. onBlur not support yet


## License
Licensed under the GPL-3.0 license.
Copyright (C) 2018 Kun Yan

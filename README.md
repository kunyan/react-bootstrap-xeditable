# react-bootstrap-xeditable

X-Editable for React with Bootstrap.  [Demo](http://codepen.io/kyan/full/mWmPzp/)

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

<EditableTextField
  name='username'
  value={this.state.value}
  onUpdate={this.handleUpdate}  # Required
  onBlur={this.handleBlur}
  placeholder='Please input your username'
/>
```

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

<EditableSelect
  name='country'
  onUpdate={this.handleUpdate}  # Required
  onBlur={this.handleBlur}
  value={this.state.value}
  options={options}
/>
```

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


## License
Licensed under the GPL-3.0 license.
Copyright (C) 2016 Kun Yan

# react-bootstrap-xeditable

X-Editable for React with Bootstrap

[![Build Status](https://travis-ci.org/kunyan/react-bootstrap-xeditable.svg?branch=master)](https://travis-ci.org/kunyan/react-bootstrap-xeditable)
[![npm version](https://badge.fury.io/js/react-bootstrap-xeditable.svg)](https://badge.fury.io/js/react-bootstrap-xeditable)
[![devDependencies Status](https://david-dm.org/kunyan/react-bootstrap-xeditable/dev-status.svg)](https://david-dm.org/kunyan/react-bootstrap-xeditable?type=dev)

## [Demo](demo.html)

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
<EditableTextField name='username' value={this.state.value} onUpdate={this.handleUpdate} placeholder='Please input your username'/>
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
<EditableSelect name='country' onUpdate={this.handleUpdate} value={this.state.value} options={options}/>
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
2. onBlur not support yet


## License
Licensed under the GPL-3.0 license.
Copyright (C) 2016 Kun Yan

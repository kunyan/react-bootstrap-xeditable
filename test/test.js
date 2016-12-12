/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:9000/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	const ReactXEditable = __webpack_require__(3);
	
	const Demo = React.createClass({
	  displayName: 'Demo',
	
	  handleChange(event) {
	    this.setState({ value: event.target.value });
	    console.log(event.target.value);
	    console.log(this);
	  },
	  handleClick(event) {
	    console.log(event.target.value); // React Component instance
	  },
	  render() {
	    return React.createElement(ReactXEditable.EditableTextField, { name: 'hello', value: 'hello', onChange: this.handleChange, onClick: this.handleClick, placeholder: 'Please input your name' });
	  }
	});
	
	ReactDOM.render(React.createElement(Demo, null), document.getElementById('demo'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  EditableTextField: __webpack_require__(5),
	  EditableTextArea: __webpack_require__(7),
	  EditableSelect: __webpack_require__(11),
	  EditableLink: __webpack_require__(6)
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	const EditableLink = __webpack_require__(6);
	const EditableLoading = __webpack_require__(8);
	const EditableButtons = __webpack_require__(9);
	const EditableForm = __webpack_require__(10);
	const EditableTextField = React.createClass({
	  displayName: 'EditableTextField',
	
	  getInitialState() {
	    return {};
	  },
	  save() {
	    this.props.onUpdate(this.props.name, this.refs.input.value);
	    this.setState({ isEditing: false });
	  },
	  cancel() {
	    this.setState({ isEditing: false });
	  },
	  clear() {
	    this.refs.input.value = '';
	    console.log(123);
	  },
	  handleClick(event) {
	    this.setState({ isEditing: true });
	  },
	  render() {
	    if (this.state.isEditing) {
	      return React.createElement(
	        'span',
	        { className: 'editable-container editable-inline' },
	        React.createElement(
	          'div',
	          null,
	          this.state.isLoading && React.createElement(EditableLoading, null),
	          React.createElement(
	            EditableForm,
	            null,
	            React.createElement(
	              'div',
	              { className: 'control-group form-group' },
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'div',
	                  { className: 'editable-input', style: { position: 'relative' } },
	                  React.createElement('input', { ref: 'input', type: 'text', className: 'form-control input-sm', name: this.props.name, defaultValue: this.props.value, placeholder: this.props.placeholder }),
	                  React.createElement('span', { className: 'editable-clear-x', onClick: this.clear })
	                ),
	                React.createElement(EditableButtons, { save: this.save, cancel: this.cancel })
	              ),
	              React.createElement('div', { className: 'editable-error-block help-block' })
	            )
	          )
	        )
	      );
	    } else {
	      return React.createElement(EditableLink, { handler: this.handleClick, text: this.props.value });
	    }
	  }
	});
	
	module.exports = EditableTextField;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	const EditableTextArea = __webpack_require__(7);
	
	const EditableLink = React.createClass({
	  displayName: 'EditableLink',
	
	  handleClick(event) {
	    this.setState({ isEditing: true });
	    console.log('click');
	  },
	  render() {
	    return React.createElement(
	      'a',
	      { href: 'javascript:;', className: 'editable editable-click', onClick: this.props.handler },
	      this.props.text
	    );
	  }
	});
	module.exports = EditableLink;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	
	const EditableTextArea = React.createClass({
	  displayName: 'EditableTextArea',
	
	  render() {
	    return React.createElement(
	      'textarea',
	      { className: this.props.className, name: this.props.name, cols: this.props.cols, rows: this.props.rows },
	      this.props.value
	    );
	  }
	});
	
	module.exports = EditableTextArea;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	
	const EditableLoading = React.createClass({
	  displayName: 'EditableLoading',
	
	  render() {
	    return React.createElement('div', { className: 'editableform-loading' });
	  }
	});
	module.exports = EditableLoading;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	
	const EditableButtons = React.createClass({
	  displayName: 'EditableButtons',
	
	  render() {
	    return React.createElement(
	      'div',
	      { className: 'editable-buttons' },
	      React.createElement(
	        'button',
	        { type: 'submit', className: 'btn btn-primary btn-sm editable-submit', onClick: this.props.save },
	        React.createElement('i', { className: 'glyphicon glyphicon-ok' })
	      ),
	      React.createElement(
	        'button',
	        { type: 'button', className: 'btn btn-default btn-sm editable-cancel', onClick: this.props.cancel },
	        React.createElement('i', { className: 'glyphicon glyphicon-remove' })
	      )
	    );
	  }
	});
	module.exports = EditableButtons;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	
	const EditableForm = React.createClass({
	  displayName: 'EditableForm',
	
	  render() {
	    return React.createElement(
	      'form',
	      { className: 'form-inline editableform' },
	      this.props.children
	    );
	  }
	});
	module.exports = EditableForm;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	
	const EditableSelect = React.createClass({
	  displayName: 'EditableSelect',
	
	  render() {
	    return React.createElement(
	      'select',
	      { name: this.props.name, value: this.props.value },
	      this.props.options && this.props.options.map(function (option, i) {
	        return React.createElement(
	          'option',
	          { value: option.value },
	          option.text
	        );
	      })
	    );
	  }
	});
	module.exports = EditableSelect;

/***/ }
/******/ ]);
//# sourceMappingURL=test.js.map
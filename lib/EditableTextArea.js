'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _XEditable = require('./XEditable');

var _XEditable2 = _interopRequireDefault(_XEditable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditableTextArea = function (_React$Component) {
  (0, _inherits3.default)(EditableTextArea, _React$Component);

  function EditableTextArea(props) {
    (0, _classCallCheck3.default)(this, EditableTextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditableTextArea.__proto__ || (0, _getPrototypeOf2.default)(EditableTextArea)).call(this, props));

    _this.save = function (event) {
      event.preventDefault();
      _this.props.onUpdate(_this.props.name, _this.refs.el.value);
      _this.setState({ isEditing: false, value: _this.refs.el.value });
    };

    _this.cancel = function () {
      _this.setState({ isEditing: false });
    };

    _this.clear = function () {
      _this.refs.el.value = '';
    };

    _this.handleLinkClick = function () {
      _this.setState({ isEditing: true });
    };

    _this.handleInputBlur = function () {
      if (_this.props.onBlur) {
        _this.props.onBlur();
      } else {
        _this.cancel();
      }
    };

    _this.state = {
      isEditing: false,
      value: _this.props.value,
      defaultText: _this.props.defaultText || 'Empty'
    };
    _this.setState = _this.setState.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EditableTextArea, [{
    key: 'render',
    value: function render() {
      if (this.state.isEditing) {
        var textareaClassName = 'form-control ' + this.props.className;
        return _react2.default.createElement(
          _XEditable2.default,
          { isLoading: false, save: this.save, cancel: this.cancel },
          _react2.default.createElement('textarea', {
            ref: 'el',
            id: this.props.id,
            className: textareaClassName,
            rows: this.props.rows,
            cols: this.props.cols,
            name: this.props.name,
            defaultValue: this.props.value,
            placeholder: this.props.placeholder,
            onBlur: this.handleInputBlur,
            autoFocus: true
          })
        );
      } else {
        var aClassName = 'editable editable-click';
        var content = _react2.default.createElement(
          'pre',
          null,
          this.state.value
        );
        if (!this.state.value) {
          aClassName += ' editable-empty';
          content = this.state.value || this.state.defaultText;
        }
        return _react2.default.createElement(
          'a',
          { href: 'javascript:;',
            className: aClassName,
            style: this.state.textStyle,
            onClick: this.handleLinkClick
          },
          content
        );
      }
    }
  }]);
  return EditableTextArea;
}(_react2.default.Component);

EditableTextArea.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  className: _propTypes2.default.string,
  value: _propTypes2.default.node,
  rows: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  onUpdate: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func,
  defaultText: _propTypes2.default.node
};
exports.default = EditableTextArea;
module.exports = exports['default'];
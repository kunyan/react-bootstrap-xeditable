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

var EditableSelect = function (_React$Component) {
  (0, _inherits3.default)(EditableSelect, _React$Component);

  function EditableSelect(props) {
    (0, _classCallCheck3.default)(this, EditableSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditableSelect.__proto__ || (0, _getPrototypeOf2.default)(EditableSelect)).call(this, props));

    _this.save = function (event) {
      event.preventDefault();
      _this.props.onUpdate(_this.refs.el.name, _this.refs.el.value);
      var text = _this.refs.el.options && _this.refs.el.options[_this.refs.el.selectedIndex] && _this.refs.el.options[_this.refs.el.selectedIndex].text;
      _this.setState({
        isEditing: false
      });
      _this.setLinkText(text);
    };

    _this.cancel = function () {
      _this.setState({ isEditing: false });
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

    _this.convertOptions = function (options) {
      if (!options) {
        return null;
      }
      return options.map(function (opt) {
        if (typeof opt === 'string' || typeof opt === 'number' || typeof opt === 'boolean') {
          return { text: opt, value: opt };
        }
        return { text: opt.text, value: opt.value };
      });
    };

    _this.setState = _this.setState.bind(_this);

    _this.state = {
      isEditing: false,
      value: _this.props.value,
      defaultText: _this.props.defaultText || 'not selected'
    };

    _this.state.options = _this.convertOptions(_this.props.options);

    var selected = _this.state.options && _this.state.options.find(function (opt) {
      if (opt.value === _this.props.value) {
        return opt;
      }
    });
    _this.setLinkText(selected && selected.text);

    return _this;
  }

  (0, _createClass3.default)(EditableSelect, [{
    key: 'setLinkText',
    value: function setLinkText(text) {
      this.state.text = text;
      this.state.textStyle = {
        color: !text && !this.props.defaultText ? 'gray' : null
      };
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isEditing) {
        var options = this.state.options && this.state.options.map(function (opt, i) {
          return _react2.default.createElement(
            'option',
            { key: i, value: opt.value },
            opt.text
          );
        });
        var selectClassName = 'form-control input-sm ' + this.props.className;
        return _react2.default.createElement(
          _XEditable2.default,
          { isLoading: false, save: this.save, cancel: this.cancel },
          _react2.default.createElement(
            'select',
            {
              ref: 'el',
              className: selectClassName,
              id: this.props.id,
              name: this.props.name,
              defaultValue: this.state.value,
              onBlur: this.handleInputBlur,
              autoFocus: true
            },
            options
          )
        );
      } else {
        return _react2.default.createElement(
          'a',
          { href: 'javascript:;',
            className: 'editable editable-click',
            style: this.state.textStyle,
            onClick: this.handleLinkClick
          },
          this.state.text || this.state.defaultText
        );
      }
    }
  }]);
  return EditableSelect;
}(_react2.default.Component);

EditableSelect.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  className: _propTypes2.default.string,
  value: _propTypes2.default.node,
  onUpdate: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func,
  options: _propTypes2.default.array,
  defaultText: _propTypes2.default.node
};
exports.default = EditableSelect;
module.exports = exports['default'];
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XEditable = function (_React$Component) {
  (0, _inherits3.default)(XEditable, _React$Component);

  function XEditable(props) {
    (0, _classCallCheck3.default)(this, XEditable);
    return (0, _possibleConstructorReturn3.default)(this, (XEditable.__proto__ || (0, _getPrototypeOf2.default)(XEditable)).call(this, props));
  }

  (0, _createClass3.default)(XEditable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: 'editable-container editable-inline' },
        _react2.default.createElement(
          'div',
          null,
          this.props.isLoading ? _react2.default.createElement('div', { className: 'editableform-loading' }) : _react2.default.createElement(
            'form',
            { className: 'form-inline editableform', onSubmit: this.props.save },
            _react2.default.createElement(
              'div',
              { className: 'control-group form-group' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'editable-input', style: {
                      position: 'relative'
                    } },
                  this.props.children
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'editable-buttons' },
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary btn-sm editable-submit', onClick: this.props.save },
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' })
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'btn btn-default btn-sm editable-cancel', onClick: this.props.cancel },
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-remove' })
                  )
                )
              ),
              _react2.default.createElement('div', { className: 'editable-error-block help-block' })
            )
          )
        )
      );
    }
  }]);
  return XEditable;
}(_react2.default.Component);

XEditable.defaultProps = {
  isLoading: false
};
XEditable.propTypes = {
  isLoading: _propTypes2.default.bool
};
exports.default = XEditable;
module.exports = exports['default'];
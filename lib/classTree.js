'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
};

var factory = function factory(_ref) {
  var _ref$propName = _ref.propName;
  var propName = _ref$propName === undefined ? 'classTree' : _ref$propName;
  var _ref$separator = _ref.separator;
  var separator = _ref$separator === undefined ? '__' : _ref$separator;

  return function (WrappedComponent) {
    var convertToClassName = function convertToClassName(element) {
      var prefix = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      if (typeof element.type === 'string' && element.props) {
        var props = {};

        if (element.props[propName]) {
          props.className = [prefix + element.props[propName], element.props.className].filter(function (className) {
            return !!className;
          }).join(' ');
          prefix = '' + prefix + element.props[propName] + separator;
        }

        if (element.props.children) {
          props.children = Array.isArray(element.props.children) ? element.props.children.map(function (child) {
            return convertToClassName(child, prefix);
          }) : convertToClassName(element.props.children, prefix);
        }

        return _react2['default'].cloneElement(element, props);
      } else {
        return element;
      }
    };

    var displayName = propName + '(' + getDisplayName(WrappedComponent) + ')';

    return (function (_WrappedComponent) {
      _inherits(classTree, _WrappedComponent);

      function classTree() {
        _classCallCheck(this, classTree);

        _get(Object.getPrototypeOf(classTree.prototype), 'constructor', this).apply(this, arguments);
      }

      _createClass(classTree, [{
        key: 'render',
        value: function render() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return convertToClassName(_get(Object.getPrototypeOf(classTree.prototype), 'render', this).apply(this, args), true);
        }
      }], [{
        key: 'displayName',
        value: displayName,
        enumerable: true
      }]);

      return classTree;
    })(WrappedComponent);
  };
};

exports['default'] = factory({});
exports.factory = factory;
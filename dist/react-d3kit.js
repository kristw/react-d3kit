(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactD3Kit"] = factory(require("react"));
	else
		root["ReactD3Kit"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.createComponent = createComponent;\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction capitalize(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\nfunction listenerName(eventName) {\n  return 'on' + capitalize(eventName);\n}\n\nfunction createComponent(Chart) {\n  var propTypes = {\n    className: _react.PropTypes.string,\n    data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),\n    options: _react.PropTypes.object,\n    onInit: _react.PropTypes.func\n  };\n\n  Chart.getCustomEvents().map(function (name) {\n    return listenerName(name);\n  }).forEach(function (name) {\n    propTypes[name] = _react.PropTypes.func;\n  });\n\n  var Component = function (_React$Component) {\n    _inherits(Component, _React$Component);\n\n    function Component() {\n      _classCallCheck(this, Component);\n\n      return _possibleConstructorReturn(this, Object.getPrototypeOf(Component).apply(this, arguments));\n    }\n\n    _createClass(Component, [{\n      key: 'componentDidMount',\n      value: function componentDidMount() {\n        var _this2 = this;\n\n        var chart = new Chart(this.container, this.props.options);\n\n        Chart.getCustomEvents().forEach(function (eventName) {\n          chart.on(eventName + '.react', function () {\n            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n              args[_key] = arguments[_key];\n            }\n\n            var listener = _this2.props[listenerName(eventName)];\n            if (listener) {\n              listener.apply(_this2, args);\n            }\n          });\n        });\n\n        if (this.props.data) {\n          chart.data(this.props.data);\n        }\n\n        if (this.props.onInit) {\n          this.props.onInit(chart);\n        }\n\n        this.chart = chart;\n      }\n    }, {\n      key: 'shouldComponentUpdate',\n      value: function shouldComponentUpdate(nextProps) {\n        return this.props.className !== nextProps.className || this.props.data !== nextProps.data || this.props.options !== nextProps.options;\n      }\n    }, {\n      key: 'componentDidUpdate',\n      value: function componentDidUpdate() {\n        this.chart.options(this.props.options).data(this.props.data);\n      }\n    }, {\n      key: 'componentWillUnmount',\n      value: function componentWillUnmount() {\n        this.chart.autoResize(false);\n        this.chart.on('.react', null);\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        var _this3 = this;\n\n        return _react2.default.createElement('div', {\n          className: this.props.className,\n          ref: function ref(c) {\n            _this3.container = c;\n          }\n        });\n      }\n    }]);\n\n    return Component;\n  }(_react2.default.Component);\n\n  Component.propTypes = propTypes;\n\n  return Component;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }
/******/ ])
});
;
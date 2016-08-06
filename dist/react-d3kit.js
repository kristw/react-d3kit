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

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createComponent = createComponent;\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction createComponent(name, Chart) {\n  var className = dashify(name);\n\n  var propTypes = {\n    data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),\n    options: _react.PropTypes.object\n  };\n  Chart.getCustomEvents().forEach(function (eventName) {\n    propTypes[listenerName(eventName)] = _react.PropTypes.func;\n  });\n\n  return _react2.default.createClass({\n    displayName: name,\n    propTypes: propTypes,\n    componentDidMount: function componentDidMount() {\n      var self = this;\n      var chart = new Chart(this.refs.container, this.props.options);\n\n      Chart.getCustomEvents().forEach(function (eventName) {\n        chart.on(eventName + '.react', function () {\n          var listener = self.props[listenerName(eventName)];\n          if (listener) {\n            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n              args[_key] = arguments[_key];\n            }\n\n            listener.apply(self, args);\n          }\n        });\n      });\n\n      if (this.props.data) {\n        chart.data(this.props.data);\n      }\n\n      if (this.props.onInit) {\n        this.props.onInit(chart);\n      }\n\n      this.chart = chart;\n    },\n    componentDidUpdate: function componentDidUpdate() {\n      this.chart.options(this.props.options).data(this.props.data);\n    },\n    componentWillUnmount: function componentWillUnmount() {\n      this.chart.autoResize(false);\n      this.chart.on('.react', null);\n    },\n    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {\n      return this.props.data !== nextProps.data || this.props.options !== nextProps.options;\n    },\n    render: function render() {\n      return _react2.default.createElement('div', {\n        ref: 'container',\n        className: className\n      });\n    }\n  });\n};\n\nfunction dashify(str) {\n  if (typeof str !== 'string') {\n    throw new TypeError('dashify expects a string.');\n  }\n  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');\n  str = str.replace(/[ \\t\\W]/g, '-');\n  str = str.replace(/^\\W+/, '');\n  return str.toLowerCase();\n}\n\nfunction capitalize(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\nfunction listenerName(eventName) {\n  return 'on' + capitalize(eventName);\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }
/******/ ])
});
;
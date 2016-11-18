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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.createComponent = createComponent;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function capitalize(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function listenerName(eventName) {
	  return 'on' + capitalize(eventName);
	}

	function createComponent(Chart) {
	  var propTypes = {
	    className: _react.PropTypes.string,
	    width: _react.PropTypes.number,
	    height: _react.PropTypes.number,
	    data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
	    options: _react.PropTypes.object,
	    fitOptions: _react.PropTypes.object,
	    watch: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	    onInit: _react.PropTypes.func
	  };

	  Chart.getCustomEventNames().map(function (name) {
	    return listenerName(name);
	  }).forEach(function (name) {
	    propTypes[name] = _react.PropTypes.func;
	  });

	  var Component = function (_React$Component) {
	    _inherits(Component, _React$Component);

	    function Component() {
	      _classCallCheck(this, Component);

	      return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
	    }

	    _createClass(Component, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        var _this2 = this;

	        var _props = this.props,
	            width = _props.width,
	            height = _props.height,
	            data = _props.data,
	            fitOptions = _props.fitOptions,
	            watch = _props.watch,
	            onInit = _props.onInit;


	        var options = this.props.options || {};

	        if (width !== null && width !== undefined) {
	          options.initialWidth = width;
	        }
	        if (height !== null && height !== undefined) {
	          options.initialHeight = height;
	        }

	        var chart = new Chart(this.container, options);

	        Chart.getCustomEventNames().forEach(function (eventName) {
	          chart.on(eventName + '.react', function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	              args[_key] = arguments[_key];
	            }

	            var listener = _this2.props[listenerName(eventName)];
	            if (listener) {
	              listener.apply(_this2, args);
	            }
	          });
	        });

	        if (data) {
	          chart.data(data);
	        }

	        if (fitOptions) {
	          if (watch) {
	            chart.fit(fitOptions, watch);
	          } else {
	            chart.fit(fitOptions, false);
	          }
	        }

	        if (onInit) {
	          onInit(chart);
	        }

	        this.chart = chart;
	      }
	    }, {
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps) {
	        return this.props.className !== nextProps.className || this.props.width !== nextProps.width || this.props.height !== nextProps.height || this.props.data !== nextProps.data || this.props.options !== nextProps.options || this.props.fitOptions !== nextProps.fitOptions || this.props.watch !== nextProps.watch;
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate(prevProps) {
	        var _props2 = this.props,
	            width = _props2.width,
	            height = _props2.height,
	            data = _props2.data,
	            options = _props2.options,
	            fitOptions = _props2.fitOptions,
	            watch = _props2.watch;


	        if (width !== null && width !== undefined && width !== prevProps.width) {
	          this.chart.width(width);
	        }
	        if (height !== null && height !== undefined && height !== prevProps.height) {
	          this.chart.height(height);
	        }
	        if (options && options !== prevProps.options) {
	          this.chart.options(options);
	        }
	        if (data && data !== prevProps.data) {
	          this.chart.data(data);
	        }
	        if (fitOptions) {
	          if (watch) {
	            this.chart.fit(fitOptions, watch);
	          } else {
	            this.chart.fit(fitOptions, false);
	          }
	        }
	        if (!watch) {
	          this.chart.stopFitWatcher();
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.chart.destroy();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this3 = this;

	        return _react2.default.createElement('div', {
	          className: this.props.className,
	          ref: function ref(c) {
	            _this3.container = c;
	          }
	        });
	      }
	    }]);

	    return Component;
	  }(_react2.default.Component);

	  Component.propTypes = propTypes;

	  return Component;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
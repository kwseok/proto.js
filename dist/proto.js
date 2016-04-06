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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(7);
	
	__webpack_require__(5);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(2);
	
	__webpack_require__(6);
	
	__webpack_require__(12);
	
	__webpack_require__(13);
	
	__webpack_require__(14);
	
	__webpack_require__(15);
	
	__webpack_require__(17);
	
	__webpack_require__(18);
	
	__webpack_require__(16);
	
	__webpack_require__(19);
	
	__webpack_require__(20);
	
	__webpack_require__(21);
	
	__webpack_require__(31);
	
	__webpack_require__(32);
	
	__webpack_require__(34);
	
	__webpack_require__(35);
	
	__webpack_require__(36);
	
	__webpack_require__(65);
	
	__webpack_require__(66);
	
	__webpack_require__(67);
	
	__webpack_require__(64);
	
	__webpack_require__(68);
	
	__webpack_require__(69);
	
	__webpack_require__(70);
	
	__webpack_require__(72);
	
	__webpack_require__(74);
	
	__webpack_require__(75);
	
	__webpack_require__(71);
	
	__webpack_require__(76);
	
	__webpack_require__(77);
	
	__webpack_require__(78);
	
	__webpack_require__(73);
	
	__webpack_require__(33);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(2);
	
	if (!Array.prototype.contains) {
	    /**
	     * @param {*} a
	     * @return {boolean}
	     */
	    Array.prototype.contains = function (a) {
	        return this.indexOf(a) >= 0;
	    };
	}
	
	exports.default = Array.prototype.contains;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.indexOf) {
	    /**
	     * @param {*} item
	     * @return {number}
	     */
	    Array.prototype.indexOf = function (item) {
	        for (var i = 0; i < this.length; i++) {
	            if (i in this && this[i] === item) return i;
	        }
	        return -1;
	    };
	}
	
	exports.default = Array.prototype.indexOf;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.every) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {boolean}
	     */
	    Array.prototype.every = function (callback, context) {
	        for (var i = 0; i < this.length; i++) {
	            if (!callback.call(context || this, this[i], i, this)) return false;
	        }
	        return true;
	    };
	}
	
	exports.default = Array.prototype.every;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(5);
	
	if (!Array.prototype.filter) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {Array}
	     */
	    Array.prototype.filter = function (callback, context) {
	        var _this = this;
	
	        return this.flatMap(function (a, i) {
	            if (callback.call(context || _this, a, i, _this)) return a;
	        });
	    };
	}
	
	exports.default = Array.prototype.filter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(6);
	
	if (!Array.prototype.flatMap) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return Array
	     */
	    Array.prototype.flatMap = function (callback, context) {
	        var results = [];
	        for (var i = 0; i < this.length; i++) {
	            var result = callback.call(context || this, this[i], i, this);
	            if (Array.isArray(result)) results.push.apply(results, result);else if (result) results.push(result);
	        }
	        return results;
	    };
	}
	
	exports.default = Array.prototype.flatMap;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.isArray) {
	    /**
	     * @param {*} obj
	     * @static
	     * @return {boolean}
	     */
	    Array.isArray = function (obj) {
	        return Object.prototype.toString.call(obj) === '[object Array]';
	    };
	}
	
	exports.default = Array.isArray;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.first) {
	    Array.prototype.first = function () {
	        return this[0];
	    };
	}
	
	exports.default = Array.prototype.first;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.groupBy) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {{}}
	     */
	    Array.prototype.groupBy = function (callback, context) {
	        if (typeof callback !== 'function') {
	            throw new Error(callback + " is not a function");
	        }
	        var result = {};
	        for (var i = 0; i < this.length; i++) {
	            var value = this[i];
	            var key = callback.call(context || this, value, i, this);
	            if (key != null) {
	                if (key in result) result[key].push(value);else result[key] = [value];
	            }
	        }
	        return result;
	    };
	}
	
	exports.default = Array.prototype.groupBy;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.grouped) {
	    /**
	     * @param {number} size
	     * @return {Array<Array>}
	     */
	    Array.prototype.grouped = function (size) {
	        var results = [];
	        for (var i = 0; i < this.length; i += size) {
	            results.push(this.slice(i, i + size));
	        }
	        return results;
	    };
	}
	
	exports.default = Array.prototype.grouped;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.groupedRight) {
	    /**
	     * @param {number} size
	     * @return {Array<Array>}
	     */
	    Array.prototype.groupedRight = function (size) {
	        var results = [];
	        for (var i = this.length; i > 0; i -= size) {
	            results.push(this.slice(Math.max(0, i - size), i));
	        }
	        return results.reverse();
	    };
	}
	
	exports.default = Array.prototype.groupedRight;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(2);
	
	if (!Array.prototype.include) {
	    Array.prototype.include = function (a) {
	        var i = this.indexOf(a);
	        if (i > -1) this[i] = a;else this.push(a);
	        return this;
	    };
	}
	
	exports.default = Array.prototype.include;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.joinPaths) {
	    Array.prototype.joinPaths = function () {
	        var path = '';
	        for (var i = 0; i < this.length; i++) {
	            if (this[i]) {
	                if (path.length > 0 && path.charAt(path.length - 1) !== '/') path += '/';
	
	                path += this[i].toString();
	            }
	        }
	        return path;
	    };
	}
	
	exports.default = Array.prototype.joinPaths;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.last) {
	    Array.prototype.last = function () {
	        return this[this.length - 1];
	    };
	}
	
	exports.default = Array.prototype.last;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.map) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     */
	    Array.prototype.map = function (callback, context) {
	        var result = [];
	        for (var i = 1; i <= this.length; i++) {
	            result.push(callback.call(context || this, this[i], i, this));
	        }
	        return result;
	    };
	}
	
	exports.default = Array.prototype.map;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(16);
	
	if (!Array.prototype.max) {
	    Array.prototype.max = function () {
	        return this.reduce(function (a, b) {
	            return a > b ? a : b;
	        });
	    };
	}
	
	exports.default = Array.prototype.max;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.reduce) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {*}
	     */
	    Array.prototype.reduce = function (callback, context) {
	        if (!(this.length > 0)) {
	            throw new TypeError("Reduce of empty array with no initial value");
	        }
	        var result = this[0];
	        for (var i = 1; i <= this.length; i++) {
	            result = callback.call(context || this, result, this[i], i, this);
	        }
	        return result;
	    };
	}
	
	exports.default = Array.prototype.reduce;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(16);
	
	if (!Array.prototype.min) {
	    Array.prototype.min = function () {
	        return this.reduce(function (a, b) {
	            return a < b ? a : b;
	        });
	    };
	}
	
	exports.default = Array.prototype.min;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.range) {
	    /**
	     * @param {number|string} from
	     * @param {number|string} to
	     * @param {number} step
	     * @static
	     * @return {Array}
	     */
	    Array.range = function (from, to) {
	        var step = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	        var range = [];
	        var isNumber = typeof from === 'number' && typeof to === 'number';
	        var begin = isNumber ? from : from.toString().charCodeAt(0);
	        var end = isNumber ? to : to.toString().charCodeAt(0);
	        step = Math.abs(step) || 1;
	        if (begin > end) step = -step;
	        for (var i = begin; step > 0 ? i <= end : i >= end; i += step) {
	            range.push(isNumber ? i : String.fromCharCode(i));
	        }
	        return range;
	    };
	}
	
	exports.default = Array.range;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.remove) {
	    Array.prototype.remove = function (a) {
	        for (var i = this.length - 1; i >= 0; --i) {
	            if (this[i] === a) {
	                this.splice(i, 1);
	            }
	        }
	        return this;
	    };
	}
	
	exports.default = Array.prototype.remove;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.some) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {boolean}
	     */
	    Array.prototype.some = function (callback, context) {
	        if (typeof callback !== 'function') {
	            throw new Error(callback + " is not a function");
	        }
	        for (var i = 0; i < this.length; i++) {
	            if (callback.call(context || this, this[i], i, this)) return true;
	        }
	        return false;
	    };
	}
	
	exports.default = Array.prototype.some;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _escape = __webpack_require__(22);
	
	var _escape2 = _interopRequireDefault(_escape);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!_escape2.default) {
	    /**
	     * @param {String} text
	     * @static
	     * @return {String}
	     */
	    RegExp.escape = function (text) {
	        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	    };
	}
	
	exports.default = _escape2.default;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(27).RegExp.escape;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(25)
	  , $re     = __webpack_require__(30)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(26)
	  , core      = __webpack_require__(27)
	  , ctx       = __webpack_require__(28)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 26 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(29);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.antStylePathToRegex) {
	    /**
	     * @return {RegExp}
	     */
	    String.prototype.antStylePathToRegex = function () {
	        if (this.length === 0) {
	            throw new RangeError("Path must not be empty.");
	        }
	        var path = this.replace(/\/{2,}/g, '/').replace(/[-[\]{}()+.,\\^$|#\s]/g, '\\$&');
	        var pattern = path.replace(/((\/?\*\*)|(\/?\*)|(\?)|(\/))/g, function ($0) {
	            switch ($0) {
	                case '/**':
	                    return '(?:/{1,}.*)?';
	                case '**':
	                    return '.*';
	                case '/*':
	                    return '(?:/{1,}[^/]*)?';
	                case '*':
	                    return '[^/]*';
	                case '?':
	                    return '[^/]';
	                case '/':
	                    return '/{1,}';
	            }
	        });
	        return new RegExp('^(' + pattern + ')$');
	    };
	}
	if (!String.prototype.a) {
	    String.prototype.a = String.prototype.antStylePathToRegex;
	}
	
	exports.default = String.prototype.antStylePathToRegex;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(33);
	
	if (!String.prototype.br2nl) {
	    /**
	     * @param {boolean} xmlUnescape
	     * @return {String}
	     */
	    String.prototype.br2nl = function (xmlUnescape) {
	        var result = this.replace(/(<br>|<br\/>)/g, '\n');
	        if (xmlUnescape) return result.xmlUnescape();
	        return result;
	    };
	}
	
	exports.default = String.prototype.br2nl;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.xmlUnescape) {
	    String.prototype.xmlUnescape = function () {
	        return this.replace(/(&lt;|&gt;|&#34;|&#39;|&amp;)/g, function ($1) {
	            switch ($1) {
	                case '&lt;':
	                    return '<';
	                case '&gt;':
	                    return '>';
	                case '&#34;':
	                    return '"';
	                case '&#39;':
	                    return "'";
	                case '&amp;':
	                    return '&';
	                default:
	                    return $1;
	            }
	        });
	    };
	}
	
	exports.default = String.prototype.xmlUnescape;

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.compareTo) {
	    String.prototype.compareTo = function (str) {
	        if (str == null || this > str) return 1;
	        if (this < str) return -1;
	        return 0;
	    };
	}
	
	exports.default = String.prototype.compareTo;

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	if (!String.prototype.contains) {
	  /**
	   * @param {string} str
	   */
	  String.prototype.contains = function (str) {
	    return this.indexOf(str) > -1;
	  };
	}
	
	exports.default = String.prototype.contains;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(37);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	__webpack_require__(1);
	
	__webpack_require__(64);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!String.prototype.cutstring) {
	    /**
	     * @param {boolean|number} [checkbyte] check byte length if true. (default is false)
	     * @param {number} maxLength the max length.
	     * @param {string} [suffix] the suffix.
	     * @return {string}
	     */
	    String.prototype.cutstring = function (checkbyte, maxLength, suffix) {
	        var _arguments = arguments;
	
	        var argIndex = 0;
	        var argCurr = function argCurr() {
	            return _arguments[argIndex];
	        };
	        var argShift = function argShift() {
	            return _arguments[argIndex++];
	        };
	
	        checkbyte = ['boolean', 'number'].contains((0, _typeof3.default)(argCurr())) ? argShift() : false;
	
	        if (typeof argCurr() !== 'number') {
	            throw new TypeError(argCurr() + " is not a number");
	        }
	        maxLength = argShift();
	
	        suffix = typeof argCurr() === 'string' ? argShift() : '';
	
	        var length = this.getLength(checkbyte);
	        if (!(length > maxLength)) return this;
	
	        var suffixLength = suffix.getLength(checkbyte);
	        if (suffixLength > maxLength) {
	            throw new RangeError("Max length must be more than suffix length");
	        }
	        var resultString = '';
	        var checkedLength = 0;
	        for (var i = 0; i < this.length; i++) {
	            var c = this.charAt(i);
	            var l = c.getLength(checkbyte);
	            if (checkedLength + l > maxLength - suffixLength) break;
	            checkedLength += l;
	            resultString += c;
	        }
	        return resultString + suffix;
	    };
	}
	
	exports.default = String.prototype.cutstring;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(38)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	__webpack_require__(63);
	module.exports = __webpack_require__(27).Symbol;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(41)
	  , global         = __webpack_require__(26)
	  , has            = __webpack_require__(42)
	  , DESCRIPTORS    = __webpack_require__(43)
	  , $export        = __webpack_require__(25)
	  , redefine       = __webpack_require__(45)
	  , $fails         = __webpack_require__(44)
	  , shared         = __webpack_require__(48)
	  , setToStringTag = __webpack_require__(49)
	  , uid            = __webpack_require__(51)
	  , wks            = __webpack_require__(50)
	  , keyOf          = __webpack_require__(52)
	  , $names         = __webpack_require__(57)
	  , enumKeys       = __webpack_require__(58)
	  , isArray        = __webpack_require__(59)
	  , anObject       = __webpack_require__(60)
	  , toIObject      = __webpack_require__(53)
	  , createDesc     = __webpack_require__(47)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(62)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 41 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(44)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(46);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(41)
	  , createDesc = __webpack_require__(47);
	module.exports = __webpack_require__(43) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(26)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(41).setDesc
	  , has = __webpack_require__(42)
	  , TAG = __webpack_require__(50)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(48)('wks')
	  , uid    = __webpack_require__(51)
	  , Symbol = __webpack_require__(26).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(41)
	  , toIObject = __webpack_require__(53);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(54)
	  , defined = __webpack_require__(56);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(55);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(53)
	  , getNames  = __webpack_require__(41).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(41);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(55);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(61);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 63 */
/***/ function(module, exports) {



/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(37);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	__webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!String.prototype.getLength) {
	    /**
	     * @param {boolean|number} [checkbyte] check byte length if true. (default is false)
	     * @return {number}
	     */
	    String.prototype.getLength = function (checkbyte) {
	        var _arguments = arguments;
	
	        var argIndex = 0;
	        var argCurr = function argCurr() {
	            return _arguments[argIndex];
	        };
	        var argShift = function argShift() {
	            return _arguments[argIndex++];
	        };
	
	        checkbyte = ['boolean', 'number'].contains((0, _typeof3.default)(argCurr())) ? argShift() : false;
	        if (checkbyte === false) return this.length;
	
	        var length = 0;
	        for (var i = 0; i < this.length; i++) {
	            var c = this.charCodeAt(i);
	            switch (false) {
	                case !(c <= 0x00007F):
	                    length += 1;
	                    break;
	                case !(typeof checkbyte === 'number' && checkbyte > 0):
	                    length += checkbyte;
	                    break;
	                case !(c <= 0x0007FF):
	                    length += 2;
	                    break;
	                case !(c <= 0x00FFFF):
	                    length += 3;
	                    break;
	                default:
	                    length += 4;
	            }
	        }
	        return length;
	    };
	}
	
	exports.default = String.prototype.getLength;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.endsWith) {
	    /**
	     * @param {String} str
	     * @returns {boolean}
	     */
	    String.prototype.endsWith = function (str) {
	        var i = this.lastIndexOf(str);
	        return i > -1 && i === this.length - str.toString().length;
	    };
	}
	
	exports.default = String.prototype.endsWith;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(6);
	
	if (!String.prototype.format) {
	    String.prototype.format = function () {
	        var _arguments = arguments;
	
	        return this.replace(/(''|'\{|}'|\{(\w+)})/g, function ($0, $1, $2) {
	            switch ($1) {
	                case "''":
	                    return "'";
	                case "'{":
	                    return '{';
	                case "}'":
	                    return '}';
	                default:
	                    return (!/^\d+$/g.test($2) ? _arguments[0] || {} : Array.isArray(_arguments[0]) ? _arguments[0] : _arguments)[$2];
	            }
	        });
	    };
	}
	
	exports.default = String.prototype.format;

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.formatVariables) {
	    /**
	     * @param {*} arguments
	     * @returns {Array<string>}
	     */
	    String.prototype.formatVariables = function () {
	        var regex = /(''|'\{|\}'|\{(\w+)\})/g;
	        var variables = [];
	        var matches = void 0;
	        while (matches = regex.exec(this)) {
	            var match = matches[0];
	            if (match !== "''" && match !== "'{" && match !== "}'") {
	                variables.push(matches[2]);
	            }
	        }
	        return variables;
	    };
	}
	
	exports.default = String.prototype.formatVariables;

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.grouped) {
	    /**
	     * @param {number} size
	     * @return {Array<string>}
	     */
	    String.prototype.grouped = function (size) {
	        if (!(size > 1)) {
	            throw new RangeError('Invalid size value');
	        }
	        if (typeof size !== 'number') size = parseInt(size);
	        var results = [];
	        for (var i = 0; i < this.length; i += size) {
	            results.push(this.slice(i, i + size));
	        }
	        return results;
	    };
	}
	
	exports.default = String.prototype.grouped;

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.groupedRight) {
	    /**
	     * @param {number} size
	     * @return {Array<string>}
	     */
	    String.prototype.groupedRight = function (size) {
	        if (!(size > 1)) {
	            throw new RangeError('Invalid size value');
	        }
	        if (typeof size !== 'number') size = parseInt(size);
	        var results = [];
	        for (var i = this.length; i > 0; i -= size) {
	            results.push(this.slice(Math.max(0, i - size), i));
	        }
	        return results.reverse();
	    };
	}
	
	exports.default = String.prototype.groupedRight;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(71);
	
	if (!String.prototype.leftPad) {
	    /**
	     * @param {number} length
	     * @param {string} fillChar
	     * @returns {string}
	     */
	    String.prototype.leftPad = function (length, fillChar) {
	        if (typeof length !== 'number') {
	            throw new TypeError(length + ' is not a number');
	        }
	        if (!fillChar) fillChar = ' ';
	        if (this.length >= length) return this.toString();
	        return fillChar.repeat(length - this.length) + this.toString();
	    };
	}
	if (!String.prototype.lpad) {
	    String.prototype.lpad = String.prototype.leftPad;
	}
	
	exports.default = String.prototype.leftPad;

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.repeat) {
	    /**
	     * @param {number} count
	     * @return {string}
	     */
	    String.prototype.repeat = function (count) {
	        if (!(count >= 0)) {
	            throw new RangeError('Invalid count value');
	        }
	        var result = '';
	        for (var i = 0; i < count; i++) {
	            result += this.toString();
	        }
	        return result;
	    };
	}
	
	exports.default = String.prototype.repeat;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(73);
	
	if (!String.prototype.nl2br) {
	    /**
	     * @param {boolean} xmlEscape
	     * @returns {string}
	     */
	    String.prototype.nl2br = function (xmlEscape) {
	        return (xmlEscape ? this.xmlEscape() : this).replace(/(\r\n|\n\r|\r|\n)/g, '<br/>');
	    };
	}
	
	exports.default = String.prototype.nl2br;

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.xmlEscape) {
	    String.prototype.xmlEscape = function () {
	        return this.replace(/(<|>|"|'|&)/g, function ($1) {
	            switch ($1) {
	                case '<':
	                    return '&lt;';
	                case '>':
	                    return '&gt;';
	                case '"':
	                    return '&#34;';
	                case "'":
	                    return '&#39;';
	                case '&':
	                    return '&amp;';
	                default:
	                    return $1;
	            }
	        });
	    };
	}
	
	exports.default = String.prototype.xmlEscape;

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.quote) {
	    /**
	     * @param {boolean} overlapable
	     * @return {string}
	     */
	    String.prototype.quote = function (overlapable) {
	        if (typeof overlapable !== 'boolean') overlapable = true;
	        if (!overlapable && this.length >= 2) {
	            if (this.charAt(0) === '"' && this.charAt(this.length - 1) === '"') return this.toString();
	            if (this.charAt(0) === "'" && this.charAt(this.length - 1) === "'") return this.toString();
	        }
	        return '"' + this + '"';
	    };
	}
	
	exports.default = String.prototype.quote;

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.regex) {
	    /**
	     * @param {string} flags
	     * @returns {RegExp}
	     */
	    String.prototype.regex = function (flags) {
	        return new RegExp(this, flags);
	    };
	}
	if (!String.prototype.r) {
	    String.prototype.r = String.prototype.regex;
	}
	
	exports.default = String.prototype.regex;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(71);
	
	if (!String.prototype.rightPad) {
	    /**
	     * @param {number} length
	     * @param {string} fillChar
	     * @returns {string}
	     */
	    String.prototype.rightPad = function (length, fillChar) {
	        if (typeof length !== 'number') {
	            throw new TypeError(length + ' is not a number');
	        }
	        if (!fillChar) fillChar = ' ';
	        if (this.length >= length) return this.toString();
	        return this.toString() + fillChar.repeat(length - this.length);
	    };
	}
	if (!String.prototype.rpad) {
	    String.prototype.rpad = String.prototype.rightPad;
	}
	
	exports.default = String.prototype.rightPad;

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	if (!String.prototype.startsWith) {
	  /**
	   * @param {string} str
	   */
	  String.prototype.startsWith = function (str) {
	    return this.indexOf(str) === 0;
	  };
	}
	
	exports.default = String.prototype.startsWith;

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.unquote) {
	    String.prototype.unquote = function () {
	        if (this.length >= 2 && (this.charAt(0) === '"' && this.charAt(this.length - 1) === '"' || this.charAt(0) === "'" && this.charAt(this.length - 1) === "'")) {
	            return this.slice(1, -1);
	        }
	        return this.toString();
	    };
	}
	
	exports.default = String.prototype.unquote;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTFiMWZjZWI3ZTEyOTMwNjg5YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9pbmRleE9mLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9mbGF0TWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2ZpcnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9ncm91cGVkUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvam9pblBhdGhzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnZXhwcy9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcmVnZXhwL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvYnIybmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MveG1sVW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvY29tcGFyZVRvLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2N1dHN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5rZXlvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nZXQtbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2dldExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9lbmRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZm9ybWF0VmFyaWFibGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2xlZnRQYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcmVwZWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL25sMmJyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3htbEVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9xdW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9yaWdodFBhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9zdGFydHNXaXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3VucXVvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6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OztBQ3ZCZjs7Ozs7QUFFQSxLQUFJLENBQUMsT0FBTyxTQUFQLENBQWlCLFVBQWpCLEVBQTZCOzs7O0FBSTlCLFVBQU8sU0FBUCxDQUFpQixVQUFqQixHQUE4QixVQUFTLEdBQVQsRUFBYztBQUFFLFlBQU8sS0FBSyxPQUFMLENBQWEsR0FBYixNQUFzQixDQUF0QixDQUFUO0lBQWQsQ0FKQTtFQUFsQzs7bUJBT2UsT0FBTyxTQUFQLENBQWlCLFVBQWpCLEM7Ozs7OztBQ1RmOzs7OztBQUVBLEtBQUksQ0FBQyxPQUFPLFNBQVAsQ0FBaUIsT0FBakIsRUFBMEI7QUFDM0IsWUFBTyxTQUFQLENBQWlCLE9BQWpCLEdBQTJCLFlBQVc7QUFDbEMsYUFBSSxLQUFLLE1BQUwsSUFBZSxDQUFmLEtBQ0MsSUFBQyxDQUFLLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQW5CLElBQTBCLEtBQUssTUFBTCxDQUFZLEtBQUssTUFBTCxHQUFjLENBQWQsQ0FBWixLQUFpQyxHQUFqQyxJQUMzQixLQUFLLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQW5CLElBQTBCLEtBQUssTUFBTCxDQUFZLEtBQUssTUFBTCxHQUFjLENBQWQsQ0FBWixLQUFpQyxHQUFqQyxDQUYzQixFQUVtRTtBQUNuRSxvQkFBTyxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFELENBQXJCLENBRG1FO1VBRnZFO0FBS0EsZ0JBQU8sS0FBSyxRQUFMLEVBQVAsQ0FOa0M7TUFBWCxDQURBO0VBQS9COzttQkFXZSxPQUFPLFNBQVAsQ0FBaUIsT0FBakIsQyIsImZpbGUiOiJwcm90by5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTFiMWZjZWI3ZTEyOTMwNjg5YWZcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9hcnJheXMvY29udGFpbnMnXG5pbXBvcnQgJy4vYXJyYXlzL2V2ZXJ5J1xuaW1wb3J0ICcuL2FycmF5cy9maWx0ZXInXG5pbXBvcnQgJy4vYXJyYXlzL2ZpcnN0J1xuaW1wb3J0ICcuL2FycmF5cy9mbGF0TWFwJ1xuaW1wb3J0ICcuL2FycmF5cy9ncm91cEJ5J1xuaW1wb3J0ICcuL2FycmF5cy9ncm91cGVkJ1xuaW1wb3J0ICcuL2FycmF5cy9ncm91cGVkUmlnaHQnXG5pbXBvcnQgJy4vYXJyYXlzL2luY2x1ZGUnXG5pbXBvcnQgJy4vYXJyYXlzL2luZGV4T2YnXG5pbXBvcnQgJy4vYXJyYXlzL2lzQXJyYXknXG5pbXBvcnQgJy4vYXJyYXlzL2pvaW5QYXRocydcbmltcG9ydCAnLi9hcnJheXMvbGFzdCdcbmltcG9ydCAnLi9hcnJheXMvbWFwJ1xuaW1wb3J0ICcuL2FycmF5cy9tYXgnXG5pbXBvcnQgJy4vYXJyYXlzL21pbidcbmltcG9ydCAnLi9hcnJheXMvcmFuZ2UnXG5pbXBvcnQgJy4vYXJyYXlzL3JlZHVjZSdcbmltcG9ydCAnLi9hcnJheXMvcmVtb3ZlJ1xuaW1wb3J0ICcuL2FycmF5cy9zb21lJ1xuXG5pbXBvcnQgJy4vcmVnZXhwcy9lc2NhcGUnXG5cbmltcG9ydCAnLi9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXgnXG5pbXBvcnQgJy4vc3RyaW5ncy9icjJubCdcbmltcG9ydCAnLi9zdHJpbmdzL2NvbXBhcmVUbydcbmltcG9ydCAnLi9zdHJpbmdzL2NvbnRhaW5zJ1xuaW1wb3J0ICcuL3N0cmluZ3MvY3V0c3RyaW5nJ1xuaW1wb3J0ICcuL3N0cmluZ3MvZW5kc1dpdGgnXG5pbXBvcnQgJy4vc3RyaW5ncy9mb3JtYXQnXG5pbXBvcnQgJy4vc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMnXG5pbXBvcnQgJy4vc3RyaW5ncy9nZXRMZW5ndGgnXG5pbXBvcnQgJy4vc3RyaW5ncy9ncm91cGVkJ1xuaW1wb3J0ICcuL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0J1xuaW1wb3J0ICcuL3N0cmluZ3MvbGVmdFBhZCdcbmltcG9ydCAnLi9zdHJpbmdzL25sMmJyJ1xuaW1wb3J0ICcuL3N0cmluZ3MvcXVvdGUnXG5pbXBvcnQgJy4vc3RyaW5ncy9yZWdleCdcbmltcG9ydCAnLi9zdHJpbmdzL3JlcGVhdCdcbmltcG9ydCAnLi9zdHJpbmdzL3JpZ2h0UGFkJ1xuaW1wb3J0ICcuL3N0cmluZ3Mvc3RhcnRzV2l0aCdcbmltcG9ydCAnLi9zdHJpbmdzL3VucXVvdGUnXG5pbXBvcnQgJy4vc3RyaW5ncy94bWxFc2NhcGUnXG5pbXBvcnQgJy4vc3RyaW5ncy94bWxVbmVzY2FwZSdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXhPZidcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihhKSA+PSAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2NvbnRhaW5zLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2luZGV4T2YuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmV2ZXJ5KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmV2ZXJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ldmVyeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ldmVyeS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2ZsYXRNYXAnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmZpbHRlcikge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhdE1hcCgoYSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCBhLCBpLCB0aGlzKSkgcmV0dXJuIGE7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvZmlsdGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vaXNBcnJheSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmxhdE1hcCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIEFycmF5XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmZsYXRNYXAgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSByZXN1bHRzLnB1c2guYXBwbHkocmVzdWx0cywgcmVzdWx0KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZmxhdE1hcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9mbGF0TWFwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IG9ialxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LmlzQXJyYXk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvaXNBcnJheS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmlyc3QpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbMF07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9maXJzdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHt7fX1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2ldO1xuICAgICAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB2YWx1ZSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ncm91cEJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ncm91cGVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2dyb3VwZWRSaWdodC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2luZGV4T2YnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmluY2x1ZGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmluZGV4T2YoYSk7XG4gICAgICAgIGlmIChpID4gLTEpXG4gICAgICAgICAgICB0aGlzW2ldID0gYTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wdXNoKGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuaW5jbHVkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9pbmNsdWRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0pIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgIT09ICcvJylcbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSAnLyc7XG5cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRoaXNbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2pvaW5QYXRocy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5sYXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2xhc3QuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLm1hcCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWFwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL21hcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3JlZHVjZSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWF4KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoKGEsIGIpID0+IChhID4gYikgPyBhIDogYik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWF4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL21heC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUucmVkdWNlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghKHRoaXMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgcmVzdWx0LCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5yZWR1Y2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvcmVkdWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vcmVkdWNlJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5taW4pIHtcbiAgICBBcnJheS5wcm90b3R5cGUubWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoYSwgYikgPT4gKGEgPCBiKSA/IGEgOiBiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5taW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvbWluLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnJhbmdlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBmcm9tXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0b1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIEFycmF5LnJhbmdlID0gZnVuY3Rpb24oZnJvbSwgdG8sIHN0ZXAgPSAxKSB7XG4gICAgICAgIGxldCByYW5nZSA9IFtdO1xuICAgICAgICBsZXQgaXNOdW1iZXIgPSB0eXBlb2YgZnJvbSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvID09PSAnbnVtYmVyJztcbiAgICAgICAgbGV0IGJlZ2luID0gaXNOdW1iZXIgPyBmcm9tIDogZnJvbS50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGxldCBlbmQgPSBpc051bWJlciA/IHRvIDogdG8udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICBzdGVwID0gTWF0aC5hYnMoc3RlcCkgfHwgMTtcbiAgICAgICAgaWYgKGJlZ2luID4gZW5kKSBzdGVwID0gLXN0ZXA7XG4gICAgICAgIGZvciAobGV0IGkgPSBiZWdpbjsgc3RlcCA+IDAgPyBpIDw9IGVuZCA6IGkgPj0gZW5kOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2goaXNOdW1iZXIgPyBpIDogU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnJhbmdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3JhbmdlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5yZW1vdmUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUucmVtb3ZlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3JlbW92ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvc29tZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFSZWdFeHAuZXNjYXBlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIFJlZ0V4cC5lc2NhcGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnRXhwLmVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZ2V4cHMvZXNjYXBlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcmVnZXhwL2VzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuUmVnRXhwLmVzY2FwZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcmVnZXhwL2VzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5nci9SZXhFeHAuZXNjYXBlXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRyZSAgICAgPSByZXF1aXJlKCcuLyQucmVwbGFjZXInKSgvW1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpeyByZXR1cm4gJHJlKGl0KTsgfX0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlKXtcbiAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XG4gICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XG4gIH0gOiByZXBsYWNlO1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBTdHJpbmcoaXQpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVwbGFjZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCkge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlBhdGggbXVzdCBub3QgYmUgZW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5yZXBsYWNlKC9cXC97Mix9L2csICcvJykucmVwbGFjZSgvWy1bXFxde30oKSsuLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gcGF0aC5yZXBsYWNlKC8oKFxcLz9cXCpcXCopfChcXC8/XFwqKXwoXFw/KXwoXFwvKSkvZywgKCQwKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKCQwKSB7XG4gICAgICAgICAgICBjYXNlICcvKionOiByZXR1cm4gJyg/Oi97MSx9LiopPyc7XG4gICAgICAgICAgICBjYXNlICcqKic6IHJldHVybiAnLionO1xuICAgICAgICAgICAgY2FzZSAnLyonOiByZXR1cm4gJyg/Oi97MSx9W14vXSopPyc7XG4gICAgICAgICAgICBjYXNlICcqJzogcmV0dXJuICdbXi9dKic7XG4gICAgICAgICAgICBjYXNlICc/JzogcmV0dXJuICdbXi9dJztcbiAgICAgICAgICAgIGNhc2UgJy8nOiByZXR1cm4gJy97MSx9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeKCcgKyBwYXR0ZXJuICsgJykkJyk7XG4gICAgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5hKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5hID0gU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi94bWxVbmVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmJyMm5sKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxVbmVzY2FwZVxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmJyMm5sID0gZnVuY3Rpb24oeG1sVW5lc2NhcGUpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucmVwbGFjZSgvKDxicj58PGJyXFwvPikvZywgJ1xcbicpO1xuICAgICAgICBpZiAoeG1sVW5lc2NhcGUpIHJldHVybiByZXN1bHQueG1sVW5lc2NhcGUoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmJyMm5sO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9icjJubC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oJmx0O3wmZ3Q7fCYjMzQ7fCYjMzk7fCZhbXA7KS9nLCAoJDEpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJyZsdDsnOiByZXR1cm4gJzwnO1xuICAgICAgICAgICAgY2FzZSAnJmd0Oyc6IHJldHVybiAnPic7XG4gICAgICAgICAgICBjYXNlICcmIzM0Oyc6IHJldHVybiAnXCInO1xuICAgICAgICAgICAgY2FzZSAnJiMzOTsnOiByZXR1cm4gXCInXCI7XG4gICAgICAgICAgICBjYXNlICcmYW1wOyc6IHJldHVybiAnJic7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MveG1sVW5lc2NhcGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8pIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbyA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICBpZiAoc3RyID09IG51bGwgfHwgdGhpcyA+IHN0cikgcmV0dXJuIDE7XG4gICAgICAgIGlmICh0aGlzIDwgc3RyKSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9jb21wYXJlVG8uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5jb250YWlucykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oc3RyKSB7IHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA+IC0xOyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9jb250YWlucy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuLi9hcnJheXMvY29udGFpbnMnXG5pbXBvcnQgJy4vZ2V0TGVuZ3RoJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCB0aGUgbWF4IGxlbmd0aC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N1ZmZpeF0gdGhlIHN1ZmZpeC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmcgPSBmdW5jdGlvbihjaGVja2J5dGUsIG1heExlbmd0aCwgc3VmZml4KSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ0N1cnIoKSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYXJnQ3VycigpICsgXCIgaXMgbm90IGEgbnVtYmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIG1heExlbmd0aCA9IGFyZ1NoaWZ0KCk7XG5cbiAgICAgICAgc3VmZml4ID0gdHlwZW9mIGFyZ0N1cnIoKSA9PT0gJ3N0cmluZycgPyBhcmdTaGlmdCgpIDogJyc7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmICghKGxlbmd0aCA+IG1heExlbmd0aCkpIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGxldCBzdWZmaXhMZW5ndGggPSBzdWZmaXguZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmIChzdWZmaXhMZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4IGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiBzdWZmaXggbGVuZ3RoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IGNoZWNrZWRMZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBsZXQgbCA9IGMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZExlbmd0aCArIGwgPiBtYXhMZW5ndGggLSBzdWZmaXhMZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgY2hlY2tlZExlbmd0aCArPSBsO1xuICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IGM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN0cmluZyArIHN1ZmZpeDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvY3V0c3RyaW5nLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfU3ltYm9sID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2xcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9TeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5TeW1ib2w7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5rZXlvZicpXG4gICwgJG5hbWVzICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIGdldERlc2MgICAgICAgID0gJC5nZXREZXNjXG4gICwgc2V0RGVzYyAgICAgICAgPSAkLnNldERlc2NcbiAgLCBfY3JlYXRlICAgICAgICA9ICQuY3JlYXRlXG4gICwgZ2V0TmFtZXMgICAgICAgPSAkbmFtZXMuZ2V0XG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgc2V0dGVyICAgICAgICAgPSBmYWxzZVxuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBpc0VudW0gICAgICAgICA9ICQuaXNFbnVtXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIHVzZU5hdGl2ZSAgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShzZXREZXNjKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBzZXREZXNjKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdldERlc2MoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgc2V0RGVzYyhpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylzZXREZXNjKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogc2V0RGVzYztcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sLnByb3RvdHlwZSk7XG4gIHN5bS5fayA9IHRhZztcbiAgREVTQ1JJUFRPUlMgJiYgc2V0dGVyICYmIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKXNldERlc2MoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIHNldERlc2MoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSk7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV1cbiAgICA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICB2YXIgRCA9IGdldERlc2MoaXQgPSB0b0lPYmplY3QoaXQpLCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4pcmVzdWx0LnB1c2goa2V5KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICB2YXIgYXJncyA9IFtpdF1cbiAgICAsIGkgICAgPSAxXG4gICAgLCAkJCAgID0gYXJndW1lbnRzXG4gICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICB3aGlsZSgkJC5sZW5ndGggPiBpKWFyZ3MucHVzaCgkJFtpKytdKTtcbiAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICB9O1xuICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbn07XG52YXIgYnVnZ3lKU09OID0gJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pO1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCF1c2VOYXRpdmUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYoaXNTeW1ib2wodGhpcykpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbiAgICByZXR1cm4gd3JhcCh1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG4gIH07XG5cbiAgJC5jcmVhdGUgICAgID0gJGNyZWF0ZTtcbiAgJC5pc0VudW0gICAgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkLmdldERlc2MgICAgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkLnNldERlc2MgICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gICQuc2V0RGVzY3MgICA9ICRkZWZpbmVQcm9wZXJ0aWVzO1xuICAkLmdldE5hbWVzICAgPSAkbmFtZXMuZ2V0ID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gICQuZ2V0U3ltYm9scyA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vJC5saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG59XG5cbnZhciBzeW1ib2xTdGF0aWNzID0ge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIHJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59O1xuLy8gMTkuNC4yLjIgU3ltYm9sLmhhc0luc3RhbmNlXG4vLyAxOS40LjIuMyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlXG4vLyAxOS40LjIuNCBTeW1ib2wuaXRlcmF0b3Jcbi8vIDE5LjQuMi42IFN5bWJvbC5tYXRjaFxuLy8gMTkuNC4yLjggU3ltYm9sLnJlcGxhY2Vcbi8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcbi8vIDE5LjQuMi4xMCBTeW1ib2wuc3BlY2llc1xuLy8gMTkuNC4yLjExIFN5bWJvbC5zcGxpdFxuLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxuLy8gMTkuNC4yLjEzIFN5bWJvbC50b1N0cmluZ1RhZ1xuLy8gMTkuNC4yLjE0IFN5bWJvbC51bnNjb3BhYmxlc1xuJC5lYWNoLmNhbGwoKFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLCcgK1xuICAnc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgZnVuY3Rpb24oaXQpe1xuICB2YXIgc3ltID0gd2tzKGl0KTtcbiAgc3ltYm9sU3RhdGljc1tpdF0gPSB1c2VOYXRpdmUgPyBzeW0gOiB3cmFwKHN5bSk7XG59KTtcblxuc2V0dGVyID0gdHJ1ZTtcblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTeW1ib2wnLCBzeW1ib2xTdGF0aWNzKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhdXNlTmF0aXZlLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghdXNlTmF0aXZlIHx8IGJ1Z2d5SlNPTiksICdKU09OJywge3N0cmluZ2lmeTogJHN0cmluZ2lmeX0pO1xuXG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudWlkLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5rZXlvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgZ2V0TmFtZXMgID0gcmVxdWlyZSgnLi8kJykuZ2V0TmFtZXNcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnZXROYW1lcyhpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xuICByZXR1cm4gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gJC5pc0VudW1cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtYXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuLi9hcnJheXMvY29udGFpbnMnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58bnVtYmVyfSBbY2hlY2tieXRlXSBjaGVjayBieXRlIGxlbmd0aCBpZiB0cnVlLiAoZGVmYXVsdCBpcyBmYWxzZSlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbihjaGVja2J5dGUpIHtcbiAgICAgICAgbGV0IGFyZ0luZGV4ID0gMDtcbiAgICAgICAgbGV0IGFyZ0N1cnIgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXhdO1xuICAgICAgICBsZXQgYXJnU2hpZnQgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXgrK107XG5cbiAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBpZiAoY2hlY2tieXRlID09PSBmYWxzZSkgcmV0dXJuIHRoaXMubGVuZ3RoO1xuXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDAwN0YpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKHR5cGVvZiBjaGVja2J5dGUgPT09ICdudW1iZXInICYmIGNoZWNrYnl0ZSA+IDApOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSBjaGVja2J5dGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDdGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwRkZGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2dldExlbmd0aC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmxhc3RJbmRleE9mKHN0cik7XG4gICAgICAgIHJldHVybiBpID4gLTEgJiYgaSA9PT0gdGhpcy5sZW5ndGggLSBzdHIudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZW5kc1dpdGguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi4vYXJyYXlzL2lzQXJyYXknXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oJyd8J1xce3x9J3xcXHsoXFx3Kyl9KS9nLCAoJDAsICQxLCAkMikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuICAgICAgICAgICAgY2FzZSBcIicnXCI6IHJldHVybiBcIidcIjtcbiAgICAgICAgICAgIGNhc2UgXCIne1wiOiByZXR1cm4gJ3snO1xuICAgICAgICAgICAgY2FzZSBcIn0nXCI6IHJldHVybiAnfSc7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gKCEvXlxcZCskL2cudGVzdCgkMikgPyBhcmd1bWVudHNbMF0gfHwge30gOiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHMpWyQyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmZvcm1hdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZm9ybWF0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBhcmd1bWVudHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcmVnZXggPSAvKCcnfCdcXHt8XFx9J3xcXHsoXFx3KylcXH0pL2c7XG4gICAgICAgIGxldCB2YXJpYWJsZXMgPSBbXTtcbiAgICAgICAgbGV0IG1hdGNoZXM7XG4gICAgICAgIHdoaWxlIChtYXRjaGVzID0gcmVnZXguZXhlYyh0aGlzKSkge1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gbWF0Y2hlc1swXTtcbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gXCInJ1wiICYmIG1hdGNoICE9PSBcIid7XCIgJiYgbWF0Y2ggIT09IFwifSdcIikge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wdXNoKG1hdGNoZXNbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YXJpYWJsZXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBpZiAoIShzaXplID4gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNpemUgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSBzaXplID0gcGFyc2VJbnQoc2l6ZSlcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShpLCBpICsgc2l6ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZ3JvdXBlZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgaWYgKCEoc2l6ZSA+IDEpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzaXplIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykgc2l6ZSA9IHBhcnNlSW50KHNpemUpXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIHNpemUpLCBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9ncm91cGVkUmlnaHQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9yZXBlYXQnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxsQ2hhclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkID0gZnVuY3Rpb24obGVuZ3RoLCBmaWxsQ2hhcikge1xuICAgICAgICBpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobGVuZ3RoICsgJyBpcyBub3QgYSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZpbGxDaGFyKSBmaWxsQ2hhciA9ICcgJztcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IGxlbmd0aCkgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCkgKyB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5scGFkKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5scGFkID0gU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2xlZnRQYWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgPSBmdW5jdGlvbihjb3VudCkge1xuICAgICAgICBpZiAoIShjb3VudCA+PSAwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgY291bnQgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucmVwZWF0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9yZXBlYXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi94bWxFc2NhcGUnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5ubDJicikge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0geG1sRXNjYXBlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLm5sMmJyID0gZnVuY3Rpb24oeG1sRXNjYXBlKSB7XG4gICAgICAgIHJldHVybiAoeG1sRXNjYXBlID8gdGhpcy54bWxFc2NhcGUoKSA6IHRoaXMpLnJlcGxhY2UoLyhcXHJcXG58XFxuXFxyfFxccnxcXG4pL2csICc8YnIvPicpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ubDJicjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvbmwyYnIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGUpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oPHw+fFwifCd8JikvZywgKCQxKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG4gICAgICAgICAgICBjYXNlICc8JzogcmV0dXJuICcmbHQ7JztcbiAgICAgICAgICAgIGNhc2UgJz4nOiByZXR1cm4gJyZndDsnO1xuICAgICAgICAgICAgY2FzZSAnXCInOiByZXR1cm4gJyYjMzQ7JztcbiAgICAgICAgICAgIGNhc2UgXCInXCI6IHJldHVybiAnJiMzOTsnO1xuICAgICAgICAgICAgY2FzZSAnJic6IHJldHVybiAnJmFtcDsnO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICQxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy94bWxFc2NhcGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5xdW90ZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3ZlcmxhcGFibGVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5xdW90ZSA9IGZ1bmN0aW9uKG92ZXJsYXBhYmxlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3ZlcmxhcGFibGUgIT09ICdib29sZWFuJykgb3ZlcmxhcGFibGUgPSB0cnVlO1xuICAgICAgICBpZiAoIW92ZXJsYXBhYmxlICYmIHRoaXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJBdCgwKSA9PT0gJ1wiJyAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSAnXCInKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1wiJyArIHRoaXMgKyAnXCInO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucXVvdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3F1b3RlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUucmVnZXgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmxhZ3NcbiAgICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmVnZXggPSBmdW5jdGlvbihmbGFncykgeyByZXR1cm4gbmV3IFJlZ0V4cCh0aGlzLCBmbGFncyk7IH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUucikge1xuICAgIFN0cmluZy5wcm90b3R5cGUuciA9IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3JlZ2V4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vcmVwZWF0J1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkID0gZnVuY3Rpb24obGVuZ3RoLCBmaWxsQ2hhcikge1xuICAgICAgICBpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobGVuZ3RoICsgJyBpcyBub3QgYSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZpbGxDaGFyKSBmaWxsQ2hhciA9ICcgJztcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IGxlbmd0aCkgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKSArIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCk7XG4gICAgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5ycGFkKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5ycGFkID0gU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvcmlnaHRQYWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKHN0cikgeyByZXR1cm4gdGhpcy5pbmRleE9mKHN0cikgPT09IDA7IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3Mvc3RhcnRzV2l0aC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnVucXVvdGUpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnVucXVvdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IDIgJiZcbiAgICAgICAgICAgICgodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJykgfHxcbiAgICAgICAgICAgICh0aGlzLmNoYXJBdCgwKSA9PT0gXCInXCIgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gXCInXCIpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMSwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy91bnF1b3RlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
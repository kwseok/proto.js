(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
	
	__webpack_require__(29);
	
	__webpack_require__(30);
	
	__webpack_require__(32);
	
	__webpack_require__(33);
	
	__webpack_require__(34);
	
	__webpack_require__(36);
	
	__webpack_require__(37);
	
	__webpack_require__(38);
	
	__webpack_require__(35);
	
	__webpack_require__(39);
	
	__webpack_require__(40);
	
	__webpack_require__(41);
	
	__webpack_require__(43);
	
	__webpack_require__(45);
	
	__webpack_require__(46);
	
	__webpack_require__(42);
	
	__webpack_require__(47);
	
	__webpack_require__(48);
	
	__webpack_require__(49);
	
	__webpack_require__(44);
	
	__webpack_require__(31);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.contains;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.indexOf;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.every;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.filter;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.flatMap;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.isArray;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!Array.prototype.first) {
	    Array.prototype.first = function () {
	        return this[0];
	    };
	}
	
	exports['default'] = Array.prototype.first;
	module.exports = exports['default'];

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
	        if (!$.isFunction(callback)) {
	            throw new Error(callback + " is not a function");
	        }
	        var result = {};
	        for (var i = 0; i < this.length; i++) {
	            var value = this[i];
	            var key = callback.call(context || this, value, i, this);
	            if (key) {
	                if (key in result) result[key].push(value);else result[key] = [value];
	            }
	        }
	        return result;
	    };
	}
	
	exports["default"] = Array.prototype.groupBy;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.grouped;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.groupedRight;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.include;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.joinPaths;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!Array.prototype.last) {
	    Array.prototype.last = function () {
	        return this[this.length - 1];
	    };
	}
	
	exports['default'] = Array.prototype.last;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.map;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.max;
	module.exports = exports['default'];

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
	
	exports["default"] = Array.prototype.reduce;
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.min;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.range;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = Array.prototype.remove;
	module.exports = exports['default'];

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
	        if (!$.isFunction(callback)) {
	            throw new Error(callback + " is not a function");
	        }
	        for (var i = 0; i < this.length; i++) {
	            if (callback.call(context || this, this[i], i, this)) return true;
	        }
	        return false;
	    };
	}
	
	exports["default"] = Array.prototype.some;
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _RegExp$escape = __webpack_require__(22)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!_RegExp$escape) {
	    /**
	     * @param {String} text
	     * @static
	     * @return {String}
	     */
	    RegExp.escape = function (text) {
	        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	    };
	}
	
	exports['default'] = _RegExp$escape;
	module.exports = exports['default'];

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
	var $def = __webpack_require__(25)
	  , $re  = __webpack_require__(28)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	$def($def.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(26)
	  , core      = __webpack_require__(27)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

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

	var core = module.exports = {version: '1.2.5'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.antStylePathToRegex;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(31);
	
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
	
	exports['default'] = String.prototype.br2nl;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.xmlUnescape;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.compareTo) {
	    String.prototype.compareTo = function (str) {
	        if (str == null || this > str) return 1;
	        if (this < str) return -1;
	        return 0;
	    };
	}
	
	exports['default'] = String.prototype.compareTo;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.contains;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(1);
	
	__webpack_require__(35);
	
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
	
	        checkbyte = ['boolean', 'number'].contains(typeof argCurr()) ? argShift() : false;
	
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
	
	exports['default'] = String.prototype.cutstring;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(1);
	
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
	
	        checkbyte = ['boolean', 'number'].contains(typeof argCurr()) ? argShift() : false;
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
	
	exports['default'] = String.prototype.getLength;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.endsWith;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(6);
	
	if (!String.prototype.format) {
	    String.prototype.format = function () {
	        var _arguments = arguments;
	
	        return this.replace(/(''|'\{|\}'|\{(\w+)\})/g, function ($0, $1, $2) {
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
	
	exports['default'] = String.prototype.format;
	module.exports = exports['default'];

/***/ },
/* 38 */
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
	        var matches = undefined;
	        while (matches = regex.exec(this)) {
	            var match = matches[0];
	            if (match !== "''" && match !== "'{" && match !== "}'") {
	                variables.push(matches[2]);
	            }
	        }
	        return variables;
	    };
	}
	
	exports["default"] = String.prototype.formatVariables;
	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.grouped;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.groupedRight;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(42);
	
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
	
	exports['default'] = String.prototype.leftPad;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.repeat;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(44);
	
	if (!String.prototype.nl2br) {
	    /**
	     * @param {boolean} xmlEscape
	     * @returns {string}
	     */
	    String.prototype.nl2br = function (xmlEscape) {
	        return (xmlEscape ? this.xmlEscape() : this).replace(/(\r\n|\n\r|\r|\n)/g, '<br/>');
	    };
	}
	
	exports['default'] = String.prototype.nl2br;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.xmlEscape;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.quote;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.regex;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(42);
	
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
	
	exports['default'] = String.prototype.rightPad;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.startsWith;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
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
	
	exports['default'] = String.prototype.unquote;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YzU1ZjUzZWYwNGUyNmFhMjYwNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9ldmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2ZsYXRNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9ncm91cEJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZ3JvdXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2dyb3VwZWRSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9qb2luUGF0aHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9sYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbWF4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvcmVkdWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9zb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleHBzL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9yZWdleHAvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvYnIybmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MveG1sVW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvY29tcGFyZVRvLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2N1dHN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9nZXRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZW5kc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9ncm91cGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2dyb3VwZWRSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9sZWZ0UGFkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9ubDJici5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy94bWxFc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcmlnaHRQYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3Mvc3RhcnRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy91bnF1b3RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxhQUFZLENBQUM7O3FCQUVOLENBQW1COztxQkFDbkIsQ0FBZ0I7O3FCQUNoQixDQUFpQjs7cUJBQ2pCLENBQWdCOztxQkFDaEIsQ0FBa0I7O3FCQUNsQixDQUFrQjs7cUJBQ2xCLENBQWtCOztxQkFDbEIsRUFBdUI7O3FCQUN2QixFQUFrQjs7cUJBQ2xCLENBQWtCOztxQkFDbEIsQ0FBa0I7O3FCQUNsQixFQUFvQjs7cUJBQ3BCLEVBQWU7O3FCQUNmLEVBQWM7O3FCQUNkLEVBQWM7O3FCQUNkLEVBQWM7O3FCQUNkLEVBQWdCOztxQkFDaEIsRUFBaUI7O3FCQUNqQixFQUFpQjs7cUJBQ2pCLEVBQWU7O3FCQUVmLEVBQWtCOztxQkFFbEIsRUFBK0I7O3FCQUMvQixFQUFpQjs7cUJB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QyxDQUFDLENBQUM7VUFDNUI7QUFDRCxnQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7TUFDMUIsQ0FBQztFQUNMOztzQkFFYyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8iLCJmaWxlIjoicHJvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1YzU1ZjUzZWYwNGUyNmFhMjYwNVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2FycmF5cy9jb250YWlucydcbmltcG9ydCAnLi9hcnJheXMvZXZlcnknXG5pbXBvcnQgJy4vYXJyYXlzL2ZpbHRlcidcbmltcG9ydCAnLi9hcnJheXMvZmlyc3QnXG5pbXBvcnQgJy4vYXJyYXlzL2ZsYXRNYXAnXG5pbXBvcnQgJy4vYXJyYXlzL2dyb3VwQnknXG5pbXBvcnQgJy4vYXJyYXlzL2dyb3VwZWQnXG5pbXBvcnQgJy4vYXJyYXlzL2dyb3VwZWRSaWdodCdcbmltcG9ydCAnLi9hcnJheXMvaW5jbHVkZSdcbmltcG9ydCAnLi9hcnJheXMvaW5kZXhPZidcbmltcG9ydCAnLi9hcnJheXMvaXNBcnJheSdcbmltcG9ydCAnLi9hcnJheXMvam9pblBhdGhzJ1xuaW1wb3J0ICcuL2FycmF5cy9sYXN0J1xuaW1wb3J0ICcuL2FycmF5cy9tYXAnXG5pbXBvcnQgJy4vYXJyYXlzL21heCdcbmltcG9ydCAnLi9hcnJheXMvbWluJ1xuaW1wb3J0ICcuL2FycmF5cy9yYW5nZSdcbmltcG9ydCAnLi9hcnJheXMvcmVkdWNlJ1xuaW1wb3J0ICcuL2FycmF5cy9yZW1vdmUnXG5pbXBvcnQgJy4vYXJyYXlzL3NvbWUnXG5cbmltcG9ydCAnLi9yZWdleHBzL2VzY2FwZSdcblxuaW1wb3J0ICcuL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleCdcbmltcG9ydCAnLi9zdHJpbmdzL2JyMm5sJ1xuaW1wb3J0ICcuL3N0cmluZ3MvY29tcGFyZVRvJ1xuaW1wb3J0ICcuL3N0cmluZ3MvY29udGFpbnMnXG5pbXBvcnQgJy4vc3RyaW5ncy9jdXRzdHJpbmcnXG5pbXBvcnQgJy4vc3RyaW5ncy9lbmRzV2l0aCdcbmltcG9ydCAnLi9zdHJpbmdzL2Zvcm1hdCdcbmltcG9ydCAnLi9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcydcbmltcG9ydCAnLi9zdHJpbmdzL2dldExlbmd0aCdcbmltcG9ydCAnLi9zdHJpbmdzL2dyb3VwZWQnXG5pbXBvcnQgJy4vc3RyaW5ncy9ncm91cGVkUmlnaHQnXG5pbXBvcnQgJy4vc3RyaW5ncy9sZWZ0UGFkJ1xuaW1wb3J0ICcuL3N0cmluZ3MvbmwyYnInXG5pbXBvcnQgJy4vc3RyaW5ncy9xdW90ZSdcbmltcG9ydCAnLi9zdHJpbmdzL3JlZ2V4J1xuaW1wb3J0ICcuL3N0cmluZ3MvcmVwZWF0J1xuaW1wb3J0ICcuL3N0cmluZ3MvcmlnaHRQYWQnXG5pbXBvcnQgJy4vc3RyaW5ncy9zdGFydHNXaXRoJ1xuaW1wb3J0ICcuL3N0cmluZ3MvdW5xdW90ZSdcbmltcG9ydCAnLi9zdHJpbmdzL3htbEVzY2FwZSdcbmltcG9ydCAnLi9zdHJpbmdzL3htbFVuZXNjYXBlJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9pbmRleE9mJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5jb250YWlucykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGEpID49IDA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuY29udGFpbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvY29udGFpbnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvaW5kZXhPZi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZXZlcnkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZXZlcnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmV2ZXJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2V2ZXJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vZmxhdE1hcCdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmlsdGVyKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0TWFwKChhLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIGEsIGksIHRoaXMpKSByZXR1cm4gYTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9maWx0ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9pc0FycmF5J1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5mbGF0TWFwKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4gQXJyYXlcbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZmxhdE1hcCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIHJlc3VsdCk7XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZmxhdE1hcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9mbGF0TWFwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IG9ialxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LmlzQXJyYXk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvaXNBcnJheS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmlyc3QpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbMF07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9maXJzdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHt7fX1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXNbaV07XG4gICAgICAgICAgICBsZXQga2V5ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHZhbHVlLCBpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ncm91cEJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ncm91cGVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2dyb3VwZWRSaWdodC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2luZGV4T2YnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmluY2x1ZGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmluZGV4T2YoYSk7XG4gICAgICAgIGlmIChpID4gLTEpXG4gICAgICAgICAgICB0aGlzW2ldID0gYTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wdXNoKGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuaW5jbHVkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9pbmNsdWRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0pIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgIT09ICcvJylcbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSAnLyc7XG5cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRoaXNbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2pvaW5QYXRocy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5sYXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2xhc3QuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLm1hcCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWFwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL21hcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3JlZHVjZSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWF4KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoKGEsIGIpID0+IChhID4gYikgPyBhIDogYik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWF4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL21heC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUucmVkdWNlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghKHRoaXMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgcmVzdWx0LCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5yZWR1Y2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvcmVkdWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vcmVkdWNlJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5taW4pIHtcbiAgICBBcnJheS5wcm90b3R5cGUubWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoYSwgYikgPT4gKGEgPCBiKSA/IGEgOiBiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5taW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvbWluLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnJhbmdlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBmcm9tXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0b1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIEFycmF5LnJhbmdlID0gZnVuY3Rpb24oZnJvbSwgdG8sIHN0ZXAgPSAxKSB7XG4gICAgICAgIGxldCByYW5nZSA9IFtdO1xuICAgICAgICBsZXQgaXNOdW1iZXIgPSB0eXBlb2YgZnJvbSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvID09PSAnbnVtYmVyJztcbiAgICAgICAgbGV0IGJlZ2luID0gaXNOdW1iZXIgPyBmcm9tIDogZnJvbS50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGxldCBlbmQgPSBpc051bWJlciA/IHRvIDogdG8udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICBzdGVwID0gTWF0aC5hYnMoc3RlcCkgfHwgMTtcbiAgICAgICAgaWYgKGJlZ2luID4gZW5kKSBzdGVwID0gLXN0ZXA7XG4gICAgICAgIGZvciAobGV0IGkgPSBiZWdpbjsgc3RlcCA+IDAgPyBpIDw9IGVuZCA6IGkgPj0gZW5kOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2goaXNOdW1iZXIgPyBpIDogU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnJhbmdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3JhbmdlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5yZW1vdmUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUucmVtb3ZlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3JlbW92ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuc29tZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9zb21lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVJlZ0V4cC5lc2NhcGUpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgUmVnRXhwLmVzY2FwZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdFeHAuZXNjYXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVnZXhwcy9lc2NhcGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcmVnZXhwL2VzY2FwZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9yZWdleHAvZXNjYXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5SZWdFeHAuZXNjYXBlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgJHJlICA9IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuJGRlZigkZGVmLlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpeyByZXR1cm4gJHJlKGl0KTsgfX0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBjdHggPSBmdW5jdGlvbihmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbnZhciAkZGVmID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG4gICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nKWV4cCA9IHNvdXJjZVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIGV4cFtQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgIH0ob3V0KTtcbiAgICBlbHNlIGV4cCA9IGlzUHJvdG8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0XG4gICAgZXhwb3J0c1trZXldID0gZXhwO1xuICAgIGlmKGlzUHJvdG8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi41J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2Upe1xuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcbiAgfSA6IHJlcGxhY2U7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZXBsYWNlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4KSB7XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7UmVnRXhwfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiUGF0aCBtdXN0IG5vdCBiZSBlbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLnJlcGxhY2UoL1xcL3syLH0vZywgJy8nKS5yZXBsYWNlKC9bLVtcXF17fSgpKy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBwYXRoLnJlcGxhY2UoLygoXFwvP1xcKlxcKil8KFxcLz9cXCopfChcXD8pfChcXC8pKS9nLCAoJDApID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDApIHtcbiAgICAgICAgICAgIGNhc2UgJy8qKic6IHJldHVybiAnKD86L3sxLH0uKik/JztcbiAgICAgICAgICAgIGNhc2UgJyoqJzogcmV0dXJuICcuKic7XG4gICAgICAgICAgICBjYXNlICcvKic6IHJldHVybiAnKD86L3sxLH1bXi9dKik/JztcbiAgICAgICAgICAgIGNhc2UgJyonOiByZXR1cm4gJ1teL10qJztcbiAgICAgICAgICAgIGNhc2UgJz8nOiByZXR1cm4gJ1teL10nO1xuICAgICAgICAgICAgY2FzZSAnLyc6IHJldHVybiAnL3sxLH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oJyArIHBhdHRlcm4gKyAnKSQnKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmEpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmEgPSBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3htbFVuZXNjYXBlJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYnIybmwpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbFVuZXNjYXBlXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuYnIybmwgPSBmdW5jdGlvbih4bWxVbmVzY2FwZSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5yZXBsYWNlKC8oPGJyPnw8YnJcXC8+KS9nLCAnXFxuJyk7XG4gICAgICAgIGlmICh4bWxVbmVzY2FwZSkgcmV0dXJuIHJlc3VsdC54bWxVbmVzY2FwZSgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuYnIybmw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2JyMm5sLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygmbHQ7fCZndDt8JiMzNDt8JiMzOTt8JmFtcDspL2csICgkMSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuICAgICAgICAgICAgY2FzZSAnJmx0Oyc6IHJldHVybiAnPCc7XG4gICAgICAgICAgICBjYXNlICcmZ3Q7JzogcmV0dXJuICc+JztcbiAgICAgICAgICAgIGNhc2UgJyYjMzQ7JzogcmV0dXJuICdcIic7XG4gICAgICAgICAgICBjYXNlICcmIzM5Oyc6IHJldHVybiBcIidcIjtcbiAgICAgICAgICAgIGNhc2UgJyZhbXA7JzogcmV0dXJuICcmJztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAkMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy94bWxVbmVzY2FwZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbykge1xuICAgIFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGlmIChzdHIgPT0gbnVsbCB8fCB0aGlzID4gc3RyKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKHRoaXMgPCBzdHIpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG87XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2NvbXBhcmVUby5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihzdHIpIHsgcmV0dXJuIHRoaXMuaW5kZXhPZihzdHIpID4gLTE7IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY29udGFpbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2NvbnRhaW5zLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4uL2FycmF5cy9jb250YWlucydcbmltcG9ydCAnLi9nZXRMZW5ndGgnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmcpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58bnVtYmVyfSBbY2hlY2tieXRlXSBjaGVjayBieXRlIGxlbmd0aCBpZiB0cnVlLiAoZGVmYXVsdCBpcyBmYWxzZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4TGVuZ3RoIHRoZSBtYXggbGVuZ3RoLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3VmZml4XSB0aGUgc3VmZml4LlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZyA9IGZ1bmN0aW9uKGNoZWNrYnl0ZSwgbWF4TGVuZ3RoLCBzdWZmaXgpIHtcbiAgICAgICAgbGV0IGFyZ0luZGV4ID0gMDtcbiAgICAgICAgbGV0IGFyZ0N1cnIgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXhdO1xuICAgICAgICBsZXQgYXJnU2hpZnQgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXgrK107XG5cbiAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnQ3VycigpICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihhcmdDdXJyKCkgKyBcIiBpcyBub3QgYSBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgbWF4TGVuZ3RoID0gYXJnU2hpZnQoKTtcblxuICAgICAgICBzdWZmaXggPSB0eXBlb2YgYXJnQ3VycigpID09PSAnc3RyaW5nJyA/IGFyZ1NoaWZ0KCkgOiAnJztcblxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoY2hlY2tieXRlKTtcbiAgICAgICAgaWYgKCEobGVuZ3RoID4gbWF4TGVuZ3RoKSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgbGV0IHN1ZmZpeExlbmd0aCA9IHN1ZmZpeC5nZXRMZW5ndGgoY2hlY2tieXRlKTtcbiAgICAgICAgaWYgKHN1ZmZpeExlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJNYXggbGVuZ3RoIG11c3QgYmUgbW9yZSB0aGFuIHN1ZmZpeCBsZW5ndGhcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdFN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgY2hlY2tlZExlbmd0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGxldCBsID0gYy5nZXRMZW5ndGgoY2hlY2tieXRlKTtcbiAgICAgICAgICAgIGlmIChjaGVja2VkTGVuZ3RoICsgbCA+IG1heExlbmd0aCAtIHN1ZmZpeExlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICBjaGVja2VkTGVuZ3RoICs9IGw7XG4gICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0U3RyaW5nICsgc3VmZml4O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9jdXRzdHJpbmcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi4vYXJyYXlzL2NvbnRhaW5zJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oY2hlY2tieXRlKSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgaWYgKGNoZWNrYnl0ZSA9PT0gZmFsc2UpIHJldHVybiB0aGlzLmxlbmd0aDtcblxuICAgICAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZmFsc2UpIHtcbiAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDAwMDdGKTpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgISh0eXBlb2YgY2hlY2tieXRlID09PSAnbnVtYmVyJyAmJiBjaGVja2J5dGUgPiAwKTpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gY2hlY2tieXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDA3RkYpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMEZGRkYpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9nZXRMZW5ndGguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5sYXN0SW5kZXhPZihzdHIpO1xuICAgICAgICByZXR1cm4gaSA+IC0xICYmIGkgPT09IHRoaXMubGVuZ3RoIC0gc3RyLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2VuZHNXaXRoLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4uL2FycmF5cy9pc0FycmF5J1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0KSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCcnfCdcXHt8XFx9J3xcXHsoXFx3KylcXH0pL2csICgkMCwgJDEsICQyKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG4gICAgICAgICAgICBjYXNlIFwiJydcIjogcmV0dXJuIFwiJ1wiO1xuICAgICAgICAgICAgY2FzZSBcIid7XCI6IHJldHVybiAneyc7XG4gICAgICAgICAgICBjYXNlIFwifSdcIjogcmV0dXJuICd9JztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAoIS9eXFxkKyQvZy50ZXN0KCQyKSA/IGFyZ3VtZW50c1swXSB8fCB7fSA6IEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cylbJDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9mb3JtYXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGFyZ3VtZW50c1xuICAgICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCByZWdleCA9IC8oJyd8J1xce3xcXH0nfFxceyhcXHcrKVxcfSkvZztcbiAgICAgICAgbGV0IHZhcmlhYmxlcyA9IFtdO1xuICAgICAgICBsZXQgbWF0Y2hlcztcbiAgICAgICAgd2hpbGUgKG1hdGNoZXMgPSByZWdleC5leGVjKHRoaXMpKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBcIicnXCIgJiYgbWF0Y2ggIT09IFwiJ3tcIiAmJiBtYXRjaCAhPT0gXCJ9J1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnB1c2gobWF0Y2hlc1syXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZm9ybWF0VmFyaWFibGVzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKVxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKGksIGkgKyBzaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9ncm91cGVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBpZiAoIShzaXplID4gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNpemUgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSBzaXplID0gcGFyc2VJbnQoc2l6ZSlcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoOyBpID4gMDsgaSAtPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cy5yZXZlcnNlKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2dyb3VwZWRSaWdodC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3JlcGVhdCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKSArIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxwYWQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmxwYWQgPSBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvbGVmdFBhZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJlcGVhdCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgIGlmICghKGNvdW50ID49IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBjb3VudCB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3JlcGVhdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3htbEVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLm5sMmJyKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxFc2NhcGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUubmwyYnIgPSBmdW5jdGlvbih4bWxFc2NhcGUpIHtcbiAgICAgICAgcmV0dXJuICh4bWxFc2NhcGUgPyB0aGlzLnhtbEVzY2FwZSgpIDogdGhpcykucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLm5sMmJyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9ubDJici5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLyg8fD58XCJ8J3wmKS9nLCAoJDEpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJzwnOiByZXR1cm4gJyZsdDsnO1xuICAgICAgICAgICAgY2FzZSAnPic6IHJldHVybiAnJmd0Oyc7XG4gICAgICAgICAgICBjYXNlICdcIic6IHJldHVybiAnJiMzNDsnO1xuICAgICAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuICcmIzM5Oyc7XG4gICAgICAgICAgICBjYXNlICcmJzogcmV0dXJuICcmYW1wOyc7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3htbEVzY2FwZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnF1b3RlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvdmVybGFwYWJsZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnF1b3RlID0gZnVuY3Rpb24ob3ZlcmxhcGFibGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvdmVybGFwYWJsZSAhPT0gJ2Jvb2xlYW4nKSBvdmVybGFwYWJsZSA9IHRydWU7XG4gICAgICAgIGlmICghb3ZlcmxhcGFibGUgJiYgdGhpcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09IFwiJ1wiICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09IFwiJ1wiKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXCInICsgdGhpcyArICdcIic7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5xdW90ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvcXVvdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yZWdleCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbGFnc1xuICAgICAqIEByZXR1cm5zIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZWdleCA9IGZ1bmN0aW9uKGZsYWdzKSB7IHJldHVybiBuZXcgUmVnRXhwKHRoaXMsIGZsYWdzKTsgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5yID0gU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvcmVnZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9yZXBlYXQnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpICsgZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJwYWQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnJwYWQgPSBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9yaWdodFBhZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7IHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA9PT0gMDsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9zdGFydHNXaXRoLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUudW5xdW90ZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUudW5xdW90ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gMiAmJlxuICAgICAgICAgICAgKCh0aGlzLmNoYXJBdCgwKSA9PT0gJ1wiJyAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSAnXCInKSB8fFxuICAgICAgICAgICAgKHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgxLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnVucXVvdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3VucXVvdGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
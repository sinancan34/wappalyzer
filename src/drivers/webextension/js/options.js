/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wappalyzer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_webextension_polyfill__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_webextension_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_webextension_polyfill__);



function getOption(name, defaultValue, callback) {
  __WEBPACK_IMPORTED_MODULE_1_webextension_polyfill___default.a.storage.local.get(name).then(item => {
    callback(item.hasOwnProperty(name) ? item[name] : defaultValue);
  });
}

function setOption(name, value) {
  var option = {};

  option[name] = value;

  __WEBPACK_IMPORTED_MODULE_1_webextension_polyfill___default.a.storage.local.set(option);
}

document.addEventListener('DOMContentLoaded', () => {
  var nodes = document.querySelectorAll('[data-i18n]');

  Array.prototype.forEach.call(nodes, node => {
    node.childNodes[0].nodeValue = __WEBPACK_IMPORTED_MODULE_1_webextension_polyfill___default.a.i18n.getMessage(node.dataset.i18n);
  });

  document.querySelector('#github').addEventListener('click', () => {
    open(__WEBPACK_IMPORTED_MODULE_0__wappalyzer__["a" /* default */].config.githubURL);
  });

  document.querySelector('#twitter').addEventListener('click', () => {
    open(__WEBPACK_IMPORTED_MODULE_0__wappalyzer__["a" /* default */].config.twitterURL);
  });

  document.querySelector('#wappalyzer').addEventListener('click', () => {
    open(__WEBPACK_IMPORTED_MODULE_0__wappalyzer__["a" /* default */].config.websiteURL);
  });

  getOption('upgradeMessage', true, value => {
    const el = d.querySelector('#option-upgrade-message');

    el.checked = value;

    el.addEventListener('change', () => {
      setOption('upgradeMessage', el.checked);
    });
  });

  getOption('dynamicIcon', true, value => {
    const el = d.querySelector('#option-dynamic-icon');

    el.checked = value;

    el.addEventListener('change', () => {
      setOption('dynamicIcon', el.checked);
    });
  });

  getOption('tracking', true, value => {
    const el = d.querySelector('#option-tracking');

    el.checked = value;

    el.addEventListener('change', function () {
      setOption('tracking', el.checked);
    });
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global window, global*/
var util = __webpack_require__(3)
var assert = __webpack_require__(10)
var now = __webpack_require__(11)

var slice = Array.prototype.slice
var console
var times = {}

if (typeof global !== "undefined" && global.console) {
    console = global.console
} else if (typeof window !== "undefined" && window.console) {
    console = window.console
} else {
    console = {}
}

var functions = [
    [log, "log"],
    [info, "info"],
    [warn, "warn"],
    [error, "error"],
    [time, "time"],
    [timeEnd, "timeEnd"],
    [trace, "trace"],
    [dir, "dir"],
    [consoleAssert, "assert"]
]

for (var i = 0; i < functions.length; i++) {
    var tuple = functions[i]
    var f = tuple[0]
    var name = tuple[1]

    if (!console[name]) {
        console[name] = f
    }
}

module.exports = console

function log() {}

function info() {
    console.log.apply(console, arguments)
}

function warn() {
    console.log.apply(console, arguments)
}

function error() {
    console.warn.apply(console, arguments)
}

function time(label) {
    times[label] = now()
}

function timeEnd(label) {
    var time = times[label]
    if (!time) {
        throw new Error("No such label: " + label)
    }

    var duration = now() - time
    console.log(label + ": " + duration + "ms")
}

function trace() {
    var err = new Error()
    err.name = "Trace"
    err.message = util.format.apply(null, arguments)
    console.error(err.stack)
}

function dir(object) {
    console.log(util.inspect(object) + "\n")
}

function consoleAssert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1)
        assert.ok(false, util.format.apply(null, arr))
    }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process, console) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(8);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(9);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(7), __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apps_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apps_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__apps_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_application_js__ = __webpack_require__(12);
/**
 * Wappalyzer v5
 *
 * Created by Elbert Alias <elbert@alias.io>
 *
 * License: GPLv3 http://www.gnu.org/licenses/gpl-3.0.txt
 */






const validation = {
  hostname: /(www.)?((.+?)\.(([a-z]{2,3}\.)?[a-z]{2,6}))$/,
  hostnameBlacklist: /((local|dev(elopment)?|stag(e|ing)?|test(ing)?|demo(shop)?|admin|google|cache)\.|\/admin|\.local)/
};

var wappalyzer = {
  apps: __WEBPACK_IMPORTED_MODULE_0__apps_json___default.a.apps,
  categories: __WEBPACK_IMPORTED_MODULE_0__apps_json___default.a.categories,
  driver: {}
};

var detected = {};
var hostnameCache = {};
var adCache = [];

wappalyzer.config = {
  websiteURL: 'https://wappalyzer.com/',
  twitterURL: 'https://twitter.com/Wappalyzer',
  githubURL: 'https://github.com/AliasIO/Wappalyzer'
};

/**
 * Log messages to console
 */
wappalyzer.log = (message, source, type) => {
  wappalyzer.driver.log(message, source || '', type || 'debug');
};

wappalyzer.analyze = (hostname, url, data, context) => {
  wappalyzer.log('Function call: analyze()', 'core');

  var apps = {};

  // Remove hash from URL
  data.url = url = url.split('#')[0];

  if (typeof data.html !== 'string') {
    data.html = '';
  }

  if (detected[url] === undefined) {
    detected[url] = {};
  }

  Object.keys(wappalyzer.apps).forEach(appName => {
    apps[appName] = detected[url] && detected[url][appName] ? detected[url][appName] : new __WEBPACK_IMPORTED_MODULE_1__modules_application_js__["a" /* default */](appName, wappalyzer.apps[appName]);

    var app = apps[appName];

    if (url) {
      analyzeUrl(app, url);
    }

    if (data.html) {
      analyzeHtml(app, data.html);
      analyzeScript(app, data.html);
      analyzeMeta(app, data.html);
    }

    if (data.headers) {
      analyzeHeaders(app, data.headers);
    }

    if (data.env) {
      analyzeEnv(app, data.env);
    }
  });

  Object.keys(apps).forEach(app => {
    if (!app.detected) {
      delete apps[app.name];
    }
  });

  resolveExcludes(apps);
  resolveImplies(apps, url);

  cacheDetectedApps(apps, url);
  trackDetectedApps(apps, url, hostname, data.html);

  if (Object.keys(apps).length) {
    wappalyzer.log(Object.keys(apps).length + ' apps detected: ' + Object.keys(apps).join(', ') + ' on ' + url, 'core');
  }

  wappalyzer.driver.displayApps(detected[url], context);
};

/**
 * Enclose string in array
 */
function asArray(value) {
  return typeof value === 'string' ? [value] : value;
}

/**
 * Parse apps.json patterns
 */
function parsePatterns(patterns) {
  var parsed = {};

  // Convert string to object containing array containing string
  if (typeof patterns === 'string' || patterns instanceof Array) {
    patterns = {
      main: asArray(patterns)
    };
  }

  for (var key in patterns) {
    parsed[key] = [];

    asArray(patterns[key]).forEach(pattern => {
      var attrs = {};

      pattern.split('\\;').forEach((attr, i) => {
        if (i) {
          // Key value pairs
          attr = attr.split(':');

          if (attr.length > 1) {
            attrs[attr.shift()] = attr.join(':');
          }
        } else {
          attrs.string = attr;

          try {
            attrs.regex = new RegExp(attr.replace('/', '\/'), 'i'); // Escape slashes in regular expression
          } catch (e) {
            attrs.regex = new RegExp();

            wappalyzer.log(e + ': ' + attr, 'error', 'core');
          }
        }
      });

      parsed[key].push(attrs);
    });
  }

  // Convert back to array if the original pattern list was an array (or string)
  if (parsed.hasOwnProperty('main')) {
    parsed = parsed.main;
  }

  return parsed;
}

function resolveExcludes(apps) {
  var excludes = [];

  // Exclude app in detected apps only
  Object.keys(apps).forEach(appName => {
    var app = apps[appName];

    if (app.props.excludes) {
      asArray(app.props.excludes).forEach(excluded => {
        excludes.push(excluded);
      });
    }
  });

  // Remove excluded applications
  Object.keys(apps).forEach(appName => {
    if (excludes.indexOf(appName) !== -1) {
      delete apps[appName];
    }
  });
}

function resolveImplies(apps, url) {
  var checkImplies = true;

  // Implied applications
  // Run several passes as implied apps may imply other apps
  while (checkImplies) {
    checkImplies = false;

    Object.keys(apps).forEach(appName => {
      var app = apps[appName];

      if (app && app.implies) {
        asArray(app.props.implies).forEach(implied => {
          implied = parsePatterns(implied)[0];

          if (!wappalyzer.apps[implied.string]) {
            wappalyzer.log('Implied application ' + implied.string + ' does not exist', 'core', 'warn');

            return;
          }

          if (!apps.hasOwnProperty(implied.string)) {
            apps[implied.string] = detected[url] && detected[url][implied.string] ? detected[url][implied.string] : new __WEBPACK_IMPORTED_MODULE_1__modules_application_js__["a" /* default */](implied.string, true);

            checkImplies = true;
          }

          // Apply app confidence to implied app
          Object.keys(app.confidence).forEach(id => {
            apps[implied.string].confidence[id + ' implied by ' + appName] = app.confidence[id] * (implied.confidence ? implied.confidence / 100 : 1);
          });
        });
      }
    });
  }
}

/**
 * Cache detected applications
 */
function cacheDetectedApps(apps, url) {
  wappalyzer.log('Function call: cacheDetectedApps()', 'core');

  Object.keys(apps).forEach(appName => {
    var app = apps[appName];

    // Per URL
    detected[url][appName] = app;

    Object.keys(app.confidence).forEach(id => {
      detected[url][appName].confidence[id] = app.confidence[id];
    });
  });
}

/**
 * Cache detected ads
 */
function cacheDetectedAds(ad) {
  adCache.push(ad);
}

/**
 * Track detected applications
 */
function trackDetectedApps(apps, url, hostname, html) {
  wappalyzer.log('Function call: trackDetectedApps()', 'core');

  Object.keys(apps).forEach(appName => {
    var app = apps[appName];

    if (detected[url][appName].getConfidence() >= 100 && validation.hostname.test(hostname) && !validation.hostnameBlacklist.test(url)) {
      if (!hostnameCache.hasOwnProperty(hostname)) {
        hostnameCache[hostname] = {
          applications: {},
          meta: {}
        };
      }

      if (!hostnameCache[hostname].applications.hasOwnProperty(appName)) {
        hostnameCache[hostname].applications[appName] = {
          hits: 0
        };
      }

      hostnameCache[hostname].applications[appName].hits++;

      if (apps[appName].version) {
        hostnameCache[hostname].applications[appName].version = app.version;
      }
    }
  });

  // Additional information
  if (hostnameCache.hasOwnProperty(hostname)) {
    var match = html.match(/<html[^>]*[: ]lang="([a-z]{2}((-|_)[A-Z]{2})?)"/i);

    if (match && match.length) {
      hostnameCache[hostname].meta['language'] = match[1];
    }
  }

  if (Object.keys(hostnameCache).length >= 50 || adCache.length >= 50) {
    wappalyzer.driver.ping(hostnameCache, adCache);

    hostnameCache = {};
    adCache = [];
  }
}

/**
 * Analyze URL
 */
function analyzeUrl(app, url) {
  var patterns = parsePatterns(app.props.url);

  if (patterns.length) {
    patterns.forEach(pattern => {
      if (pattern.regex.test(url)) {
        app.setDetected(pattern, 'url', url);
      }
    });
  }
}

/**
 * Analyze HTML
 */
function analyzeHtml(app, html) {
  var patterns = parsePatterns(app.props.html);

  if (patterns.length) {
    patterns.forEach(pattern => {
      if (pattern.regex.test(html)) {
        app.setDetected(pattern, 'html', html);
      }
    });
  }
}

/**
 * Analyze script tag
 */
function analyzeScript(app, html) {
  var regex = new RegExp('<script[^>]+src=("|\')([^"\']+)', 'ig');
  var patterns = parsePatterns(app.props.script);

  if (patterns.length) {
    patterns.forEach(pattern => {
      var match;

      while (match = regex.exec(html)) {
        if (pattern.regex.test(match[2])) {
          app.setDetected(pattern, 'script', match[2]);
        }
      }
    });
  }
}

/**
 * Analyze meta tag
 */
function analyzeMeta(app, html) {
  var regex = /<meta[^>]+>/ig;
  var patterns = parsePatterns(app.props.meta);
  var content;
  var match;

  while (patterns && (match = regex.exec(html))) {
    for (var meta in patterns) {
      if (new RegExp('(name|property)=["\']' + meta + '["\']', 'i').test(match)) {
        content = match.toString().match(/content=("|')([^"']+)("|')/i);

        patterns[meta].forEach(pattern => {
          if (content && content.length === 4 && pattern.regex.test(content[2])) {
            app.setDetected(pattern, 'meta', content[2], meta);
          }
        });
      }
    }
  }
}

/**
 * analyze response headers
 */
function analyzeHeaders(app, headers) {
  var patterns = parsePatterns(app.props.headers);

  if (headers) {
    Object.keys(patterns).forEach(header => {
      patterns[header].forEach(pattern => {
        header = header.toLowerCase();

        if (headers.hasOwnProperty(header) && pattern.regex.test(headers[header])) {
          app.setDetected(pattern, 'headers', headers[header], header);
        }
      });
    });
  }
}

/**
 * Analyze environment variables
 */
function analyzeEnv(app, envs) {
  var patterns = parsePatterns(app.props.env);

  if (patterns.length) {
    patterns.forEach(pattern => {
      Object.keys(envs).forEach(env => {
        if (pattern.regex.test(envs[env])) {
          app.setDetected(pattern, 'env', envs[env]);
        }
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (wappalyzer);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"apps": {
		"1&1": {
			"cats": [
				"6"
			],
			"icon": "1and1.svg",
			"implies": "PHP",
			"url": "/shop/catalog/browse\\?sessid=",
			"website": "http://1and1.com"
		},
		"1C-Bitrix": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "BITRIX_",
				"X-Powered-CMS": "Bitrix Site Manager"
			},
			"html": "(?:<link[^>]+components/bitrix|(?:src|href)=\"/bitrix/(?:js|templates))",
			"icon": "1C-Bitrix.png",
			"implies": "PHP",
			"script": "1c-bitrix",
			"website": "http://www.1c-bitrix.ru"
		},
		"2z Project": {
			"cats": [
				"1"
			],
			"icon": "2z Project.png",
			"meta": {
				"generator": "2z project ([\\d.]+)\\;version:\\1"
			},
			"website": "http://2zproject-cms.ru"
		},
		"3DM": {
			"cats": [
				"19"
			],
			"html": "<title>3ware 3DM([\\d\\.]+)?\\;version:\\1",
			"icon": "3DM.png",
			"implies": "3ware",
			"website": "http://www.3ware.com"
		},
		"3dCart": {
			"cats": [
				"1",
				"6"
			],
			"headers": {
				"Set-Cookie": "3dvisit",
				"X-Powered-By": "3DCART"
			},
			"icon": "3dCart.png",
			"script": "(?:twlh(?:track)?\\.asp|3d_upsell\\.js)",
			"website": "http://www.3dcart.com"
		},
		"3ware": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "3ware\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "3ware.png",
			"website": "http://www.3ware.com"
		},
		"AD EBiS": {
			"cats": [
				"10"
			],
			"html": [
				"<!-- EBiS contents tag",
				"<!--EBiS tag",
				"<!-- Tag EBiS",
				"<!-- EBiS common tag"
			],
			"icon": "ebis.png",
			"website": "http://www.ebis.ne.jp"
		},
		"AMPcms": {
			"cats": [
				"1"
			],
			"env": "^amp_js_init$",
			"headers": {
				"Set-Cookie": "^AMP=",
				"X-AMP-Version": "([\\d.]+)\\;version:\\1"
			},
			"icon": "AMPcms.png",
			"implies": "PHP",
			"website": "http://www.ampcms.org"
		},
		"AOLserver": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "AOLserver/?([\\d.]+)?\\;version:\\1"
			},
			"icon": "AOLserver.png",
			"website": "http://aolserver.com"
		},
		"AT Internet Analyzer": {
			"cats": [
				"10"
			],
			"env": [
				"^xtsite$",
				"^ATInternet$"
			],
			"icon": "AT Internet.png",
			"website": "http://atinternet.com/en"
		},
		"AT Internet XiTi": {
			"cats": [
				"10"
			],
			"env": "^Xt_",
			"icon": "AT Internet.png",
			"script": "xiti\\.com/hit\\.xiti",
			"website": "http://atinternet.com/en"
		},
		"ATEN": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "ATEN HTTP Server(?:\\(?V?([\\d\\.]+)\\)?)?\\;version:\\1"
			},
			"icon": "ATEN.png",
			"website": "http://www.aten.com"
		},
		"AWStats": {
			"cats": [
				"10"
			],
			"icon": "AWStats.png",
			"implies": "Perl",
			"meta": {
				"generator": "AWStats ([\\d.]+(?: \\(build [\\d.]+\\))?)\\;version:\\1"
			},
			"website": "http://awstats.sourceforge.net"
		},
		"Accessible Portal": {
			"cats": [
				"1"
			],
			"icon": "Accessible Portal.png",
			"implies": "PHP",
			"meta": {
				"generator": "Accessible Portal"
			},
			"website": "http://www.accessibleportal.com"
		},
		"Act-On": {
			"cats": [
				"32"
			],
			"env": "^ActOn$",
			"icon": "ActOn.png",
			"website": "http://act-on.com"
		},
		"Prebid": {
			"cats": [
				"36"
			],
			"icon": "Prebid.png",
			"env": [
				"pbjs",
				"PREBID_TIMEOUT"
			],
			"script": [
				"/prebid\\.js",
				"adnxs\\.com/[^\"]*(?:prebid|/pb\\.js)"
			],
			"website": "http://prebid.org"
		},
		"AdInfinity": {
			"cats": [
				"36"
			],
			"icon": "AdInfinity.png",
			"script": "adinfinity\\.com\\.au",
			"website": "http://adinfinity.com.au"
		},
		"AdRiver": {
			"cats": [
				"36"
			],
			"env": "^adriver$",
			"html": "(?:<embed[^>]+(?:src=\"https?://mh\\d?\\.adriver\\.ru/|flashvars=\"[^\"]*(?:http:%3A//(?:ad|mh\\d?)\\.adriver\\.ru/|adriver_banner))|<(?:(?:iframe|img)[^>]+src|a[^>]+href)=\"https?://ad\\.adriver\\.ru/)",
			"icon": "AdRiver.png",
			"script": "(?:adriver\\.core\\.\\d\\.js|https?://(?:content|ad|masterh\\d)\\.adriver\\.ru/)",
			"website": "http://adriver.ru"
		},
		"AdRoll": {
			"cats": [
				"36"
			],
			"env": "^adroll_",
			"icon": "AdRoll.svg",
			"script": "(?:a|s)\\.adroll\\.com",
			"website": "http://adroll.com"
		},
		"Adcash": {
			"cats": [
				"36"
			],
			"env": "^(?:ac_bgclick_URL|ct_(?:siteunder|tag|n(?:SuUrl(?:Opp)?)|Su(?:Loaded|Url)))$",
			"icon": "Adcash.svg",
			"script": "^[^\\/]*//(?:[^\\/]+\\.)?adcash\\.com/(?:script|ad)/",
			"url": "^https?://(?:[^\\/]+\\.)?adcash\\.com/script/pop_",
			"website": "http://adcash.com"
		},
		"AddShoppers": {
			"cats": [
				"5"
			],
			"icon": "AddShoppers.png",
			"script": "cdn\\.shop\\.pe/widget/",
			"website": "http://www.addshoppers.com"
		},
		"AddThis": {
			"cats": [
				"5"
			],
			"env": "^addthis",
			"icon": "AddThis.svg",
			"script": "addthis\\.com/js/",
			"website": "http://www.addthis.com"
		},
		"AddToAny": {
			"cats": [
				"5"
			],
			"env": "^a2apage_init$",
			"icon": "AddToAny.png",
			"script": "addtoany\\.com/menu/page\\.js",
			"website": "http://www.addtoany.com"
		},
		"Adminer": {
			"cats": [
				"3"
			],
			"html": [
				"Adminer</a> <span class=\"version\">([\\d.]+)</span>\\;version:\\1",
				"onclick=\"bodyClick\\(event\\);\" onload=\"verifyVersion\\('([\\d.]+)'\\);\">\\;version:\\1"
			],
			"icon": "adminer.png",
			"implies": "PHP",
			"website": "http://www.adminer.org"
		},
		"Adnegah": {
			"cats": [
				"36"
			],
			"headers": {
				"X-Advertising-By": "adnegah.net"
			},
			"html": "<iframe [^>]*src=\"[^\"]+adnegah\\.net",
			"icon": "adnegah.png",
			"script": "[^a-z]adnegah.*\\.js$",
			"website": "https://Adnegah.net"
		},
		"Adobe ColdFusion": {
			"cats": [
				"18"
			],
			"env": "^_cfEmails$",
			"headers": {
				"Cookie": "CFTOKEN="
			},
			"html": "<!-- START headerTags\\.cfm",
			"icon": "Adobe ColdFusion.svg",
			"implies": "CFML",
			"script": "/cfajax/",
			"url": "\\.cfm(?:$|\\?)",
			"website": "http://adobe.com/products/coldfusion-family.html"
		},
		"Adobe Experience Manager": {
			"cats": [
				"1"
			],
			"html": [
				"<div class=\"[^\"]*parbase",
				"<div[^>]+data-component-path=\"[^\"+]jcr:"
			],
			"icon": "Adobe Experience Manager.svg",
			"implies": "Java",
			"script": "/etc/designs/",
			"website": "http://www.adobe.com/au/marketing-cloud/enterprise-content-management.html"
		},
		"Adobe GoLive": {
			"cats": [
				"20"
			],
			"icon": "Adobe GoLive.png",
			"meta": {
				"generator": "Adobe GoLive(?:\\s([\\d.]+))?\\;version:\\1"
			},
			"website": "http://www.adobe.com/products/golive"
		},
		"Adobe Muse": {
			"cats": [
				"20"
			],
			"icon": "Adobe Muse.svg",
			"meta": {
				"generator": "^Muse(?:$| ?/?(\\d[\\d.]+))\\;version:\\1"
			},
			"website": "http://muse.adobe.com"
		},
		"Adobe RoboHelp": {
			"cats": [
				"4"
			],
			"env": "^gbWh(?:Ver|Lang|Msg|Util|Proxy)$",
			"icon": "Adobe RoboHelp.svg",
			"meta": {
				"generator": "^Adobe RoboHelp(?: ([\\d]+))?\\;version:\\1"
			},
			"script": "(?:wh(?:utils|ver|proxy|lang|topic|msg)|ehlpdhtm)\\.js",
			"website": "http://adobe.com/products/robohelp.html"
		},
		"Advanced Web Stats": {
			"cats": [
				"10"
			],
			"html": "aws\\.src = [^<]+caphyon-analytics",
			"icon": "Advanced Web Stats.png",
			"implies": "Java",
			"website": "http://www.advancedwebstats.com"
		},
		"Advert Stream": {
			"cats": [
				"36"
			],
			"env": "^advst_is_above_the_fold$",
			"icon": "Advert Stream.png",
			"script": "(?:ad\\.advertstream\\.com|adxcore\\.com)",
			"website": "http://www.advertstream.com"
		},
		"Adzerk": {
			"cats": [
				"36"
			],
			"env": "^ados(?:Results)?$",
			"html": "<iframe [^>]*src=\"[^\"]+adzerk\\.net",
			"icon": "Adzerk.png",
			"script": "adzerk\\.net/ados\\.js",
			"website": "http://adzerk.com"
		},
		"Aegea": {
			"cats": [
				"11"
			],
			"headers": {
				"X-Powered-By": "^E2 Aegea v(\\d+)$\\;version:\\1"
			},
			"icon": "Aegea.png",
			"implies": [
				"PHP",
				"jQuery"
			],
			"website": "http://blogengine.ru"
		},
		"AfterBuy": {
			"cats": [
				"6"
			],
			"html": [
				"<dd>This OnlineStore is brought to you by ViA-Online GmbH Afterbuy. Information and contribution at https://www.afterbuy.de</dd>"
			],
			"icon": "after-buy.png",
			"script": "shop-static\\.afterbuy\\.de",
			"website": "http://www.afterbuy.de"
		},
		"Aircall": {
			"cats": [
				"52"
			],
			"icon": "aircall.png",
			"script": "^https?://cdn\\.aircall\\.io/",
			"website": "http://aircall.io"
		},
		"Airee": {
			"cats": [
				"31"
			],
			"headers": {
				"Server": "Airee"
			},
			"icon": "Airee.png",
			"website": "http://xn--80aqc2a.xn--p1ai"
		},
		"Akamai": {
			"cats": [
				"31"
			],
			"headers": {
				"X-Akamai-Transformed": ""
			},
			"icon": "Akamai.png",
			"website": "http://akamai.com"
		},
		"Akka HTTP": {
			"cats": [
				"18",
				"22"
			],
			"headers": {
				"Server": "akka-http(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "akka-http.png",
			"website": "http://akka.io"
		},
		"Algolia Realtime Search": {
			"cats": [
				"29"
			],
			"env": "^AlgoliaSearch$",
			"icon": "Algolia Realtime Search.svg",
			"website": "http://www.algolia.com"
		},
		"Allegro RomPager": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Allegro-Software-RomPager(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Allegro RomPager.png",
			"website": "http://allegrosoft.com/embedded-web-server-s2"
		},
		"AlloyUI": {
			"cats": [
				"12"
			],
			"env": "^AUI$",
			"icon": "AlloyUI.png",
			"implies": [
				"Twitter Bootstrap",
				"YUI"
			],
			"script": "^https?://cdn\\.alloyui\\.com/",
			"website": "http://www.alloyui.com"
		},
		"Amaya": {
			"cats": [
				"20"
			],
			"icon": "Amaya.png",
			"meta": {
				"generator": "Amaya(?: V?([\\d.]+[a-z]))?\\;version:\\1"
			},
			"website": "http://www.w3.org/Amaya"
		},
		"Amazon Cloudfront": {
			"cats": [
				"31"
			],
			"headers": {
				"X-Amz-Cf-Id": ""
			},
			"icon": "Amazon-Cloudfront.svg",
			"website": "http://aws.amazon.com/cloudfront/"
		},
		"Amazon EC2": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "\\(Amazon\\)"
			},
			"icon": "aws-ec2.svg",
			"website": "http://aws.amazon.com/ec2/"
		},
		"Amazon S3": {
			"cats": [
				"19"
			],
			"headers": {
				"Server": "AmazonS3"
			},
			"icon": "aws-s3.svg",
			"website": "http://aws.amazon.com/s3/"
		},
		"Ametys": {
			"cats": [
				"1"
			],
			"icon": "Ametys.png",
			"implies": "Java",
			"meta": {
				"generator": "(?:Ametys|Anyware Technologies)"
			},
			"script": "ametys\\.js",
			"website": "http://ametys.org"
		},
		"Amiro.CMS": {
			"cats": [
				"1"
			],
			"icon": "Amiro.CMS.png",
			"implies": "PHP",
			"meta": {
				"generator": "Amiro"
			},
			"website": "http://amirocms.com"
		},
		"Angular Material": {
			"cats": [
				"18"
			],
			"env": "^ngMaterial$",
			"icon": "Angular.svg",
			"implies": "AngularJS",
			"script": [
				"/([\\d.]+(?:\\-?rc[.\\d]*)*)/angular-material(?:\\.min)?\\.js\\;version:\\1",
				"angular-material.*\\.js"
			],
			"website": "http://material.angularjs.org"
		},
		"AngularJS": {
			"cats": [
				"12"
			],
			"env": "^angular$",
			"icon": "AngularJS.svg",
			"script": [
				"angular(?:\\-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"/([\\d.]+(?:\\-?rc[.\\d]*)*)/angular(?:\\.min)?\\.js\\;version:\\1",
				"angular.*\\.js"
			],
			"website": "http://angularjs.org"
		},
		"Apache": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "(?:Apache(?:$|/([\\d.]+)|[^/-])|(?:^|\b)HTTPD)\\;version:\\1"
			},
			"icon": "Apache.svg",
			"website": "http://apache.org"
		},
		"Apache HBase": {
			"cats": [
				"34"
			],
			"html": "<style[^>]+static/hbase",
			"icon": "Apache HBase.png",
			"implies": "Java",
			"website": "http://hbase.apache.org"
		},
		"Apache Hadoop": {
			"cats": [
				"34"
			],
			"html": "<style[^>]+static/hadoop",
			"icon": "Apache Hadoop.svg",
			"website": "http://hadoop.apache.org"
		},
		"Apache JSPWiki": {
			"cats": [
				"8"
			],
			"html": "<html[^>]* xmlns:jspwiki=",
			"icon": "Apache JSPWiki.png",
			"implies": "Apache Tomcat",
			"script": "jspwiki",
			"url": "wiki\\.jsp",
			"website": "http://jspwiki.org"
		},
		"Apache Tomcat": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Apache-Coyote(/1\\.1)?\\;version:\\1?4.1+:",
				"X-Powered-By": "\bTomcat\b(?:-([\\d.]+))?\\;version:\\1"
			},
			"icon": "Apache Tomcat.svg",
			"implies": "Java",
			"website": "http://tomcat.apache.org"
		},
		"Apache Traffic Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "ATS/?([\\d.]+)?\\;version:\\1"
			},
			"icon": "Apache Traffic Server.png",
			"website": "http://trafficserver.apache.org/"
		},
		"Apache Wicket": {
			"cats": [
				"18"
			],
			"env": "^Wicket",
			"icon": "Apache Wicket.svg",
			"implies": "Java",
			"website": "http://wicket.apache.org"
		},
		"ApexPages": {
			"cats": [
				"51"
			],
			"headers": {
				"X-Powered-By": "Salesforce.com ApexPages"
			},
			"icon": "ApexPages.png",
			"implies": "Salesforce",
			"website": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro.htm"
		},
		"Apostrophe CMS": {
			"cats": [
				"1"
			],
			"html": "<[^>]+data-apos-refreshable[^>]",
			"icon": "apostrophecms.svg",
			"implies": "Node.js",
			"website": "http://apostrophecms.org"
		},
		"AppNexus": {
			"cats": [
				"36"
			],
			"html": "<(?:iframe|img)[^>]+adnxs\\.(?:net|com)",
			"icon": "AppNexus.svg",
			"script": "adnxs\\.(?:net|com)",
			"website": "http://appnexus.com"
		},
		"Arastta": {
			"cats": [
				"6"
			],
			"excludes": "OpenCart",
			"headers": {
				"Arastta": "(.*)\\;version:\\1",
				"X-Arastta": ""
			},
			"html": "Powered by <a [^>]*href=\"https?://(?:www\\.)?arastta\\.org[^>]+>Arastta",
			"icon": "Arastta.svg",
			"implies": "PHP",
			"script": "arastta\\.js",
			"website": "http://arastta.org"
		},
		"Arc Forum": {
			"cats": [
				"2"
			],
			"html": "ping\\.src = node\\.href;\\s+[^>]+\\s+}\\s+</script>",
			"icon": "Arc Forum.png",
			"website": "http://arclanguage.org"
		},
		"ArcGIS API for JavaScript": {
			"cats": [
				"35"
			],
			"script": [
				"js.arcgis.com",
				"basemaps.arcgis.com"
			],
			"icon": "arcgis_icon.png",
			"website": "https://developers.arcgis.com/javascript/"
		},
		"Artifactory": {
			"cats": [
				"47"
			],
			"env": "^ArtifactoryUpdates$",
			"html": [
				"<span class=\"version\">Artifactory(?: Pro)?(?: Power Pack)?(?: ([\\d.]+))?\\;version:\\1"
			],
			"icon": "Artifactory.svg",
			"script": [
				"wicket/resource/org\\.artifactory\\."
			],
			"website": "http://jfrog.com/open-source/#os-arti"
		},
		"Artifactory Web Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Artifactory(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Artifactory.svg",
			"implies": [
				"Artifactory"
			],
			"website": "http://jfrog.com/open-source/#os-arti"
		},
		"ArvanCloud": {
			"cats": [
				"31"
			],
			"env": "^ArvanCloud$",
			"headers": {
				"AR-PoweredBy": "Arvan Cloud \\(arvancloud.com\\)"
			},
			"icon": "ArvanCloud.png",
			"website": "http://www.ArvanCloud.com"
		},
		"AsciiDoc": {
			"cats": [
				"1",
				"20",
				"27"
			],
			"env": "^asciidoc$",
			"icon": "AsciiDoc.png",
			"meta": {
				"generator": "^AsciiDoc ([\\d.]+)\\;version:\\1"
			},
			"website": "http://www.methods.co.nz/asciidoc"
		},
		"Asymptix PHP Framework": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "Asymptix PHP Framework(?:.*)"
			},
			"html": [
				"Powered by <a href=\"http://www.asymptix.com/\" rel=\"external\">Asymptix PHP Framework</a>"
			],
			"icon": "Asymptix PHP Framework.png",
			"implies": "PHP",
			"website": "http://github.com/Asymptix/Framework"
		},
		"Atlassian Bitbucket": {
			"cats": [
				"47"
			],
			"env": "^bitbucket$",
			"icon": "Atlassian Bitbucket.svg",
			"implies": "Python",
			"meta": {
				"application-name": "Bitbucket"
			},
			"website": "http://www.atlassian.com/software/bitbucket/overview/"
		},
		"Atlassian Confluence": {
			"cats": [
				"8"
			],
			"headers": {
				"X-Confluence-Request-Time": ""
			},
			"html": "Powered by <a href=[^>]+atlassian\\.com/software/confluence(?:[^>]+>Atlassian Confluence</a> ([\\d.]+))?\\;version:\\1",
			"icon": "Atlassian Confluence.svg",
			"implies": "Java",
			"meta": {
				"confluence-request-time": ""
			},
			"website": "http://www.atlassian.com/software/confluence/overview/team-collaboration-software"
		},
		"Atlassian FishEye": {
			"cats": [
				"47"
			],
			"headers": {
				"Set-cookie": "FESESSIONID"
			},
			"html": "<title>(?:Log in to )?FishEye (?:and Crucible )?([\\d.]+)?</title>\\;version:\\1",
			"icon": "Atlassian FishEye.svg",
			"website": "http://www.atlassian.com/software/fisheye/overview/"
		},
		"Atlassian Jira": {
			"cats": [
				"13"
			],
			"env": "^jira$",
			"html": "Powered by\\s+<a href=[^>]+atlassian\\.com/(?:software/jira|jira-bug-tracking/)[^>]+>Atlassian\\s+JIRA(?:[^v]*v(?:ersion: )?(\\d+\\.\\d+(?:\\.\\d+)?))?\\;version:\\1",
			"icon": "Atlassian Jira.svg",
			"implies": "Java",
			"meta": {
				"ajs-version-number": "([\\d\\.]+)\\;version:\\1",
				"application-name": "JIRA"
			},
			"website": "http://www.atlassian.com/software/jira/overview/"
		},
		"Atlassian Jira Issue Collector": {
			"cats": [
				"13",
				"47"
			],
			"icon": "Atlassian Jira.svg",
			"script": [
				"jira-issue-collector-plugin",
				"atlassian\\.jira\\.collector\\.plugin"
			],
			"website": "http://www.atlassian.com/software/jira/overview/"
		},
		"Aurelia": {
			"cats": [
				"12"
			],
			"html": [
				"<[^>]+aurelia-app=[^>]",
				"<[^>]+data-main=[^>]aurelia-bootstrapper",
				"<[^>]+au-target-id=[^>]\\d"
			],
			"icon": "Aurelia.svg",
			"script": [
				"aurelia(?:\\.min)?\\.js"
			],
			"website": "http://aurelia.io"
		},
		"Avangate": {
			"cats": [
				"6"
			],
			"env": "^(?:__)?avng8_",
			"html": "<link[^>]* href=\"^https?://edge\\.avangate\\.net/",
			"icon": "Avangate.svg",
			"script": "^https?://edge\\.avangate\\.net/",
			"website": "http://avangate.com"
		},
		"BEM": {
			"cats": [
				"12"
			],
			"html": "<[^>]+data-bem",
			"icon": "BEM.png",
			"website": "http://en.bem.info"
		},
		"BIGACE": {
			"cats": [
				"1"
			],
			"html": "(?:Powered by <a href=\"[^>]+BIGACE|<!--\\s+Site is running BIGACE)",
			"icon": "BIGACE.png",
			"implies": "PHP",
			"meta": {
				"generator": "BIGACE ([\\d.]+)\\;version:\\1"
			},
			"website": "http://bigace.de"
		},
		"Bablic": {
			"cats": [
				"3",
				"9"
			],
			"website": "https://www.bablic.com/",
			"env": "^bablic$",
			"icon": "bablic.png"
		},
		"Backbone.js": {
			"cats": [
				"12"
			],
			"env": "^Backbone$",
			"icon": "Backbone.js.png",
			"implies": "Underscore.js",
			"script": "backbone.*\\.js",
			"website": "http://backbonejs.org"
		},
		"Backdrop": {
			"cats": [
				"1"
			],
			"env": "^Backdrop$",
			"excludes": "Drupal",
			"icon": "Backdrop.png",
			"implies": "PHP",
			"meta": {
				"generator": "Backdrop CMS(?: (\\d))?\\;version:\\1"
			},
			"website": "http://backdropcms.org"
		},
		"Banshee": {
			"cats": [
				"1",
				"18"
			],
			"html": "Built upon the <a href=\"[^>]+banshee-php\\.org/\">[a-z]+</a>(?:v([\\d.]+))?\\;version:\\1",
			"icon": "Banshee.png",
			"implies": "PHP",
			"meta": {
				"generator": "Banshee PHP"
			},
			"website": "http://www.banshee-php.org"
		},
		"BaseHTTP": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "BaseHTTP\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "BaseHTTP.png",
			"implies": "Python",
			"website": "http://docs.python.org/2/library/basehttpserver.html"
		},
		"BigDump": {
			"cats": [
				"3"
			],
			"html": "<!-- <h1>BigDump: Staggered MySQL Dump Importer ver\\. ([\\d.b]+)\\;version:\\1",
			"implies": [
				"MySQL",
				"PHP"
			],
			"website": "http://www.ozerov.de/bigdump.php"
		},
		"Bigcommerce": {
			"cats": [
				"6"
			],
			"html": "<link href=[^>]+cdn\\d+\\.bigcommerce\\.com/",
			"icon": "Bigcommerce.png",
			"script": "cdn\\d+\\.bigcommerce\\.com/",
			"url": "mybigcommerce\\.com",
			"website": "http://www.bigcommerce.com"
		},
		"Bigware": {
			"cats": [
				"6"
			],
			"headers": {
				"Set-Cookie": "(?:bigwareCsid|bigWAdminID)"
			},
			"html": "(?:Diese <a href=[^>]+bigware\\.de|<a href=[^>]+/main_bigware_\\d+\\.php)",
			"icon": "Bigware.png",
			"implies": "PHP",
			"url": "(?:\\?|&)bigWAdminID=",
			"website": "http://bigware.de"
		},
		"BittAds": {
			"cats": [
				"36"
			],
			"env": "^bitt$",
			"icon": "BittAds.png",
			"script": "bittads\\.com/js/bitt\\.js$",
			"website": "http://bittads.com"
		},
		"Blesta": {
			"cats": [
				"6"
			],
			"headers": {
				"Set-Cookie": "blesta_sid"
			},
			"icon": "Blesta.png",
			"website": "http://www.blesta.com"
		},
		"Blip.tv": {
			"cats": [
				"14"
			],
			"html": "<(?:param|embed|iframe)[^>]+blip\\.tv/play",
			"icon": "Blip.tv.png",
			"website": "http://blip.tv"
		},
		"Blogger": {
			"cats": [
				"11"
			],
			"icon": "Blogger.png",
			"meta": {
				"generator": "^Blogger$"
			},
			"url": "\\.blogspot\\.com",
			"website": "http://www.blogger.com"
		},
		"Bluefish": {
			"cats": [
				"20"
			],
			"icon": "Bluefish.png",
			"meta": {
				"generator": "Bluefish(?:\\s([\\d.]+))?\\;version:\\1"
			},
			"website": "http://sourceforge.net/projects/bluefish"
		},
		"Boa": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Boa\\/?([\\d\\.a-z]+)?\\;version:\\1"
			},
			"website": "http://www.boa.org"
		},
		"Boba.js": {
			"cats": [
				"12"
			],
			"implies": "Google Analytics",
			"script": "boba(?:\\.min)?\\.js",
			"website": "http://boba.space150.com"
		},
		"Bold Chat": {
			"cats": [
				"52"
			],
			"icon": "BoldChat.png",
			"script": "^https?://vmss\\.boldchat\\.com/aid/\\d{18}/bc\\.vms4/vms\\.js",
			"website": "https://www.boldchat.com/"
		},
		"Bolt": {
			"cats": [
				"1"
			],
			"icon": "Bolt.png",
			"implies": "PHP",
			"meta": {
				"generator": "Bolt"
			},
			"website": "http://bolt.cm"
		},
		"Bonfire": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "bf_session="
			},
			"html": "Powered by <a[^>]+href=\"https?://(?:www\\.)?cibonfire\\.com[^>]*>Bonfire v([^<]+)\\;version:\\1",
			"icon": "Bonfire.png",
			"implies": "CodeIgniter",
			"website": "http://cibonfire.com"
		},
		"Bootstrap Table": {
			"cats": [
				"12"
			],
			"html": "<link[^>]+href=\"[^>]*bootstrap-table(?:\\.min)?\\.css",
			"icon": "Bootstrap Table.svg",
			"implies": [
				"Bootstrap",
				"jQuery"
			],
			"script": "bootstrap-table(?:\\.min)?\\.js",
			"website": "http://bootstrap-table.wenzhixin.net.cn/"
		},
		"Bounce Exchange": {
			"cats": [
				"32"
			],
			"env": "^bouncex$",
			"html": "<script[^>]*>[^>]+\\.src\\s*=\\s*['\"](?:https?:)?//tag\\.bounceexchange\\.com/",
			"icon": "Bounce Exchange.svg",
			"script": "^https?://tag\\.bounceexchange\\.com/",
			"website": "http://www.bounceexchange.com"
		},
		"Brother": {
			"cats": [
				"40"
			],
			"html": [
				"(?:<!--|<BR>)Copyright\\(C\\) [\\d-]+ Brother Industries",
				"<TITLE>\n\\s*BROTHER "
			],
			"icon": "Brother.png",
			"website": "http://www.brother.com"
		},
		"BrowserCMS": {
			"cats": [
				"1"
			],
			"icon": "BrowserCMS.png",
			"implies": "Ruby",
			"meta": {
				"generator": "BrowserCMS ([\\d.]+)\\;version:\\1"
			},
			"website": "http://browsercms.org"
		},
		"Bubble": {
			"cats": [
				"1",
				"3",
				"18",
				"22"
			],
			"env": "^appquery$",
			"icon": "bubble.png",
			"implies": "Node.js",
			"website": "http://bubble.is"
		},
		"BugSense": {
			"cats": [
				"10"
			],
			"env": "^BugSense$",
			"icon": "BugSense.png",
			"script": "bugsense\\.js",
			"website": "http://bugsense.com"
		},
		"BugSnag": {
			"cats": [
				"10"
			],
			"env": "^BugSnag$",
			"icon": "BugSnag.png",
			"script": "bugsnag.*\\.js",
			"website": "http://bugsnag.com"
		},
		"Bugzilla": {
			"cats": [
				"13"
			],
			"html": "href=\"enter_bug\\.cgi\">",
			"icon": "Bugzilla.png",
			"implies": "Perl",
			"website": "http://www.bugzilla.org"
		},
		"Burning Board": {
			"cats": [
				"2"
			],
			"html": "<a href=\"[^>]+woltlab\\.com[^<]+<strong>Burning Board",
			"icon": "Burning Board.png",
			"implies": [
				"PHP",
				"Woltlab Community Framework"
			],
			"website": "http://www.woltlab.com"
		},
		"Business Catalyst": {
			"cats": [
				"1"
			],
			"html": "<!-- BC_OBNW -->",
			"icon": "Business Catalyst.png",
			"script": "CatalystScripts",
			"website": "http://businesscatalyst.com"
		},
		"BuySellAds": {
			"cats": [
				"36"
			],
			"env": "^_bsa",
			"html": "<script[^>]*>[^<]+?bsa.src\\s*=\\s*['\"](?:https?:)?\\/{2}\\w\\d\\.buysellads\\.com\\/[\\w\\d\\/]+?bsa\\.js['\"]",
			"icon": "BuySellAds.png",
			"script": "^https?://s\\d\\.buysellads\\.com/",
			"website": "http://buysellads.com"
		},
		"C++": {
			"cats": [
				"27"
			],
			"icon": "C++.png",
			"website": "http://isocpp.org"
		},
		"CFML": {
			"cats": [
				"27"
			],
			"icon": "CFML.png",
			"website": "http://adobe.com/products/coldfusion-family.html"
		},
		"CKEditor": {
			"cats": [
				"24"
			],
			"env": "^CKEDITOR$",
			"icon": "CKEditor.png",
			"website": "http://ckeditor.com"
		},
		"CMS Made Simple": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "^CMSSESSID"
			},
			"icon": "CMS Made Simple.png",
			"implies": "PHP",
			"meta": {
				"generator": "CMS Made Simple"
			},
			"website": "http://cmsmadesimple.org"
		},
		"CMSimple": {
			"cats": [
				"1"
			],
			"implies": "PHP",
			"meta": {
				"generator": "CMSimple( [\\d.]+)?\\;version:\\1"
			},
			"website": "http://www.cmsimple.org/en"
		},
		"CO2Stats": {
			"cats": [
				"10"
			],
			"html": "src=[^>]+co2stats\\.com/propres\\.php",
			"icon": "CO2Stats.png",
			"website": "http://co2stats.com"
		},
		"CPG Dragonfly": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "Dragonfly CMS"
			},
			"icon": "CPG Dragonfly.png",
			"implies": "PHP",
			"meta": {
				"generator": "CPG Dragonfly"
			},
			"website": "http://dragonflycms.org"
		},
		"CS Cart": {
			"cats": [
				"6"
			],
			"env": "^fn_compare_strings$",
			"html": [
				"&nbsp;Powered by (?:<a href=[^>]+cs-cart\\.com|CS-Cart)",
				".cm-noscript[^>]+</style>"
			],
			"icon": "CS Cart.png",
			"implies": "PHP",
			"website": "http://www.cs-cart.com"
		},
		"CacheFly": {
			"cats": [
				"31"
			],
			"headers": {
				"Server": "^CFS ",
				"X-CF1": "",
				"X-CF2": ""
			},
			"icon": "CacheFly.png",
			"website": "http://www.cachefly.com"
		},
		"Caddy": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "^Caddy$"
			},
			"icon": "caddy.svg",
			"implies": "Go",
			"website": "http://caddyserver.com"
		},
		"CakePHP": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "cakephp="
			},
			"icon": "CakePHP.png",
			"implies": "PHP",
			"meta": {
				"application-name": "CakePHP"
			},
			"website": "http://cakephp.org"
		},
		"Canon": {
			"cats": [
				"40"
			],
			"icon": "Canon.png",
			"website": "http://www.canon.com"
		},
		"Canon HTTP Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "CANON HTTP Server(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Canon.png",
			"implies": "Canon",
			"website": "http://www.canon.com"
		},
		"Captch Me": {
			"cats": [
				"16",
				"36"
			],
			"env": "^Captchme",
			"icon": "Captch Me.svg",
			"script": "^https?://api\\.captchme\\.net/",
			"website": "http://captchme.com"
		},
		"Carbon Ads": {
			"cats": [
				"36"
			],
			"env": "^_carbonads",
			"html": "<[a-z]+ [^>]*id=\"carbonads-container\"",
			"icon": "Carbon Ads.png",
			"script": "[^\\/]*\\/\\/(?:engine|srv)\\.carbonads\\.com\\/",
			"website": "http://carbonads.net"
		},
		"Cargo": {
			"cats": [
				"1"
			],
			"html": "<link [^>]+Cargo feed",
			"icon": "Cargo.png",
			"implies": "PHP",
			"meta": {
				"cargo_title": ""
			},
			"script": "/cargo\\.",
			"website": "http://cargocollective.com"
		},
		"Catberry.js": {
			"cats": [
				"12",
				"18"
			],
			"env": "^catberry$",
			"headers": {
				"X-Powered-By": "Catberry"
			},
			"icon": "Catberry.js.png",
			"implies": "Node.js",
			"website": "http://catberry.org"
		},
		"Catwalk": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Catwalk\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "Catwalk.png",
			"implies": "Canon",
			"website": "http://www.canon.com"
		},
		"CentOS": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "CentOS",
				"X-Powered-By": "CentOS"
			},
			"icon": "CentOS.png",
			"website": "http://centos.org"
		},
		"CenteHTTPd": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "CenteHTTPd(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "CenteHTTPd.png",
			"website": "http://cente.jp/cente/app/HTTPdc.html"
		},
		"Chameleon": {
			"cats": [
				"1"
			],
			"icon": "Chameleon.png",
			"implies": [
				"Apache",
				"PHP"
			],
			"meta": {
				"generator": "chameleon-cms"
			},
			"website": "http://chameleon-system.de"
		},
		"Chamilo": {
			"cats": [
				"21"
			],
			"headers": {
				"X-Powered-By": "Chamilo ([\\d.]+)\\;version:\\1"
			},
			"html": "\">Chamilo ([\\d.]+)</a>\\;version:\\1",
			"icon": "Chamilo.png",
			"implies": "PHP",
			"meta": {
				"generator": "Chamilo ([\\d.]+)\\;version:\\1"
			},
			"website": "http://www.chamilo.org"
		},
		"Chartbeat": {
			"cats": [
				"10"
			],
			"env": "^_sf_(?:endpt|async_config)$",
			"icon": "Chartbeat.png",
			"script": "chartbeat\\.js",
			"website": "http://chartbeat.com"
		},
		"Cherokee": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Cherokee/([\\d.]+)\\;version:\\1"
			},
			"icon": "Cherokee.png",
			"website": "http://www.cherokee-project.com"
		},
		"CherryPy": {
			"cats": [
				"18",
				"22"
			],
			"headers": {
				"Server": "CherryPy\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "CherryPy.png",
			"implies": "Python",
			"website": "http://www.cherrypy.org"
		},
		"Chitika": {
			"cats": [
				"36"
			],
			"env": "ch_c(?:lient|olor_site_link)",
			"icon": "Chitika.png",
			"script": "scripts\\.chitika\\.net/",
			"website": "http://chitika.com"
		},
		"Ckan": {
			"cats": [
				"1"
			],
			"headers": {
				"Access-Control-Allow-Headers": "X-CKAN-API-KEY",
				"Link": "<http://ckan.org/>; rel=shortlink"
			},
			"icon": "Ckan.png",
			"implies": [
				"Python",
				"Solr",
				"Java",
				"PostgreSQL"
			],
			"meta": {
				"generator": ".*ckan.*"
			},
			"website": "http://ckan.org/"
		},
		"ClickHeat": {
			"cats": [
				"10"
			],
			"env": "^clickHeat",
			"icon": "ClickHeat.png",
			"implies": "PHP",
			"script": "clickheat.*\\.js",
			"website": "http://www.labsmedia.com/clickheat/index.html"
		},
		"ClickTale": {
			"cats": [
				"10"
			],
			"env": "^ClickTale",
			"icon": "ClickTale.png",
			"website": "http://www.clicktale.com"
		},
		"Clicky": {
			"cats": [
				"10"
			],
			"env": "^clicky$",
			"icon": "Clicky.png",
			"script": "static\\.getclicky\\.com",
			"website": "http://getclicky.com"
		},
		"Clientexec": {
			"cats": [
				"6"
			],
			"html": "clientexec\\.[^>]*\\s?=\\s?[^>]*;",
			"icon": "Clientexec.png",
			"website": "http://www.clientexec.com"
		},
		"Clipboard.js": {
			"cats": [
				"19"
			],
			"env": "^Clipboard$",
			"icon": "Clipboard.js.svg",
			"script": "clipboard(?:\\.min)?\\.js",
			"website": "https://clipboardjs.com/"
		},
		"CloudCart": {
			"cats": [
				"6"
			],
			"icon": "cloudcart.svg",
			"meta": {
				"author": "^CloudCart LLC$"
			},
			"script": "/cloudcart-(?:assets|storage)/",
			"website": "http://cloudcart.com"
		},
		"CloudFlare": {
			"cats": [
				"31"
			],
			"env": "^CloudFlare$",
			"headers": {
				"Server": "cloudflare"
			},
			"icon": "CloudFlare.svg",
			"website": "http://www.cloudflare.com"
		},
		"Cloudera": {
			"cats": [
				"34"
			],
			"headers": {
				"Server": "cloudera"
			},
			"icon": "Cloudera.png",
			"website": "http://www.cloudera.com"
		},
		"CodeIgniter": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "(?:exp_last_activity|exp_tracker|ci_(?:session|(csrf_token)))\\;version:\\1?2+:"
			},
			"html": "<input[^>]+name=\"ci_csrf_token\"\\;version:2+",
			"icon": "CodeIgniter.png",
			"implies": "PHP",
			"website": "http://codeigniter.com"
		},
		"CodeMirror": {
			"cats": [
				"19"
			],
			"env": "^CodeMirror$",
			"icon": "CodeMirror.png",
			"website": "http://codemirror.net"
		},
		"Comandia": {
			"cats": [
				"6"
			],
			"env": "^Comandia$",
			"html": "<link[^>]+=['\"]//cdn\\.mycomandia\\.com",
			"icon": "Comandia.svg",
			"website": "http://comandia.com"
		},
		"Commerce Server": {
			"cats": [
				"6"
			],
			"headers": {
				"COMMERCE-SERVER-SOFTWARE": ""
			},
			"icon": "Commerce Server.png",
			"implies": "Microsoft ASP.NET",
			"website": "http://commerceserver.net"
		},
		"CompaqHTTPServer": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "CompaqHTTPServer\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "HP.svg",
			"website": "http://www.hp.com"
		},
		"Concrete5": {
			"cats": [
				"1"
			],
			"env": "^CCM_IMAGE_PATH$",
			"icon": "Concrete5.png",
			"implies": "PHP",
			"meta": {
				"generator": "concrete5 - ([\\d.ab]+)\\;version:\\1"
			},
			"script": "concrete/js/",
			"website": "http://concrete5.org"
		},
		"Connect": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "^Connect$"
			},
			"icon": "Connect.png",
			"implies": "Node.js",
			"website": "http://www.senchalabs.org/connect"
		},
		"Contao": {
			"cats": [
				"1"
			],
			"html": [
				"<!--[^>]+powered by (?:TYPOlight|Contao)[^>]*-->",
				"<link[^>]+(?:typolight|contao)\\.css"
			],
			"icon": "Contao.png",
			"implies": "PHP",
			"meta": {
				"generator": "^Contao Open Source CMS$"
			},
			"website": "http://contao.org"
		},
		"Contenido": {
			"cats": [
				"1"
			],
			"icon": "Contenido.png",
			"implies": "PHP",
			"meta": {
				"generator": "Contenido ([\\d.]+)\\;version:\\1"
			},
			"website": "http://contenido.org/en"
		},
		"Contens": {
			"cats": [
				"1"
			],
			"icon": "Contens.png",
			"implies": [
				"Java",
				"CFML"
			],
			"meta": {
				"generator": "Contensis CMS Version ([\\d.]+)\\;version:\\1"
			},
			"website": "http://www.contens.com/en/pub/index.cfm"
		},
		"ContentBox": {
			"cats": [
				"1",
				"11"
			],
			"icon": "ContentBox.png",
			"implies": "Adobe ColdFusion",
			"meta": {
				"generator": "ContentBox powered by ColdBox"
			},
			"website": "http://www.gocontentbox.org"
		},
		"ConversionLab": {
			"cats": [
				"10"
			],
			"icon": "ConversionLab.png",
			"script": "conversionlab\\.trackset\\.com/track/tsend\\.js",
			"website": "http://www.trackset.it/conversionlab"
		},
		"Coppermine": {
			"cats": [
				"7"
			],
			"html": "<!--Coppermine Photo Gallery ([\\d.]+)\\;version:\\1",
			"icon": "Coppermine.png",
			"implies": "PHP",
			"website": "http://coppermine-gallery.net"
		},
		"Cosmoshop": {
			"cats": [
				"6"
			],
			"icon": "Cosmoshop.png",
			"script": "cosmoshop_functions\\.js",
			"website": "http://cosmoshop.de"
		},
		"Cotonti": {
			"cats": [
				"1"
			],
			"icon": "Cotonti.png",
			"implies": "PHP",
			"meta": {
				"generator": "Cotonti"
			},
			"website": "http://www.cotonti.com"
		},
		"CouchDB": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "CouchDB/([\\d.]+)\\;version:\\1"
			},
			"icon": "CouchDB.png",
			"website": "http://couchdb.apache.org"
		},
		"Cowboy": {
			"cats": [
				"18",
				"22"
			],
			"headers": {
				"Server": "Cowboy"
			},
			"icon": "Cowboy.png",
			"implies": "Erlang",
			"website": "http://ninenines.eu"
		},
		"CppCMS": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "CppCMS/([\\d.]+)\\;version:\\1"
			},
			"icon": "CppCMS.png",
			"implies": "C\\+\\+",
			"website": "http://cppcms.com"
		},
		"Craft CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "CraftSessionId=",
				"X-Powered-By": "Craft CMS"
			},
			"icon": "Craft CMS.png",
			"implies": "Yii",
			"website": "https://craftcms.com"
		},
		"Crazy Egg": {
			"cats": [
				"10"
			],
			"env": "^CE2$",
			"icon": "Crazy Egg.png",
			"script": "cetrk\\.com/pages/scripts/\\d+/\\d+\\.js",
			"website": "http://crazyegg.com"
		},
		"Criteo": {
			"cats": [
				"36"
			],
			"env": "^criteo",
			"icon": "Criteo.svg",
			"script": "[^/]*//(?:cas\\.criteo\\.com|(?:[^/]\\.)?criteo\\.net)/",
			"website": "http://criteo.com"
		},
		"Cross Pixel": {
			"cats": [
				"10"
			],
			"env": "^crsspxl$",
			"icon": "Cross Pixel.png",
			"script": "tag\\.crsspxl\\.com/s1\\.js",
			"website": "http://datadesk.crsspxl.com"
		},
		"CubeCart": {
			"cats": [
				"6"
			],
			"html": "(?:Powered by <a href=[^>]+cubecart\\.com|<p[^>]+>Powered by CubeCart)",
			"icon": "CubeCart.png",
			"implies": "PHP",
			"meta": {
				"generator": "cubecart"
			},
			"website": "http://www.cubecart.com"
		},
		"Cufon": {
			"cats": [
				"17"
			],
			"env": "^Cufon$",
			"icon": "Cufon.png",
			"script": "cufon-yui\\.js",
			"website": "http://cufon.shoqolate.com"
		},
		"D3": {
			"cats": [
				"25"
			],
			"env": "^d3$",
			"icon": "D3.png",
			"script": "/d3(?:\\. v\\d+)?(?:\\.min)?\\.js",
			"website": "http://d3js.org"
		},
		"DHTMLX": {
			"cats": [
				"12"
			],
			"icon": "DHTMLX.png",
			"script": "dhtmlxcommon\\.js",
			"website": "http://dhtmlx.com"
		},
		"DM Polopoly": {
			"cats": [
				"1"
			],
			"html": "<(?:link [^>]*href|img [^>]*src)=\"/polopoly_fs/",
			"icon": "DM Polopoly.png",
			"implies": "Java",
			"website": "http://www.atex.com/products/dm-polopoly"
		},
		"DNN": {
			"cats": [
				"1"
			],
			"env": "^DotNetNuke$",
			"headers": {
				"Cookie": "dnn_IsMobile=",
				"DNNOutputCache": "",
				"Set-Cookie": "DotNetNukeAnonymous=",
				"X-Compressed-By": "DotNetNuke"
			},
			"html": [
				"<!-- by DotNetNuke Corporation",
				"<!-- DNN Platform"
			],
			"icon": "DNN.png",
			"implies": "Microsoft ASP.NET",
			"meta": {
				"generator": "DotNetNuke"
			},
			"script": [
				"/js/dnncore\\.js",
				"/js/dnn\\.js"
			],
			"website": "http://dnnsoftware.com"
		},
		"DTG": {
			"cats": [
				"1"
			],
			"html": [
				"<a[^>]+Site Powered by DTG"
			],
			"icon": "DTG.png",
			"implies": "Mono.net",
			"website": "http://www.dtg.nl"
		},
		"Dancer": {
			"cats": [
				"18"
			],
			"headers": {
				"Server": "Perl Dancer ([\\d.]+)\\;version:\\1",
				"X-Powered-By": "Perl Dancer ([\\d.]+)\\;version:\\1"
			},
			"icon": "Dancer.png",
			"implies": "Perl",
			"website": "http://perldancer.org"
		},
		"Danneo CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "CMS Danneo ([\\d.]+)\\;version:\\1"
			},
			"icon": "Danneo CMS.png",
			"implies": [
				"Apache",
				"PHP"
			],
			"meta": {
				"generator": "Danneo CMS ([\\d.]+)\\;version:\\1"
			},
			"website": "http://danneo.com"
		},
		"Darwin": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Darwin",
				"X-Powered-By": "Darwin"
			},
			"icon": "Darwin.png",
			"website": "http://opensource.apple.com"
		},
		"DataLife Engine": {
			"cats": [
				"1"
			],
			"env": "^dle_root$",
			"icon": "DataLife Engine.png",
			"implies": [
				"PHP",
				"Apache"
			],
			"meta": {
				"generator": "DataLife Engine"
			},
			"website": "http://dle-news.ru"
		},
		"DataTables": {
			"cats": [
				"12"
			],
			"icon": "DataTables.png",
			"implies": "jQuery",
			"script": "dataTables.*\\.js",
			"website": "http://datatables.net"
		},
		"David Webbox": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "David-WebBox/([\\d.a]+ \\(\\d+\\))\\;version:\\1"
			},
			"icon": "David Webbox.png",
			"website": "http://www.tobit.com"
		},
		"Debian": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Debian",
				"X-Powered-By": "(?:Debian|dotdeb|(potato|woody|sarge|etch|lenny|squeeze|wheezy|jessie|stretch|sid))\\;version:\\1"
			},
			"icon": "Debian.png",
			"website": "http://debian.org"
		},
		"Decorum": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "DECORUM(?:/([\\d.]+))?\\;version:\\1"
			},
			"website": "http://example.com"
		},
		"DedeCMS": {
			"cats": [
				"1"
			],
			"env": "^DedeContainer",
			"icon": "DedeCMS.png",
			"implies": "PHP",
			"script": "dedeajax",
			"website": "http://dedecms.com"
		},
		"Dell": {
			"cats": [
				"40"
			],
			"icon": "Dell.png",
			"website": "http://dell.com"
		},
		"Deployd": {
			"cats": [
				"12"
			],
			"env": "^dpd$",
			"icon": "Deployd.png",
			"script": "dpd\\.js",
			"website": "http://deployd.com"
		},
		"DirectAdmin": {
			"cats": [
				"9"
			],
			"headers": {
				"Server": "DirectAdmin Daemon v([\\d.]+)\\;version:\\1"
			},
			"html": "<a[^>]+>DirectAdmin</a> Web Control Panel",
			"icon": "DirectAdmin.png",
			"implies": [
				"PHP",
				"Apache"
			],
			"website": "http://www.directadmin.com"
		},
		"Discourse": {
			"cats": [
				"2"
			],
			"env": "Discourse",
			"icon": "Discourse.png",
			"implies": "Ruby on Rails",
			"meta": {
				"generator": "Discourse(?: ?/?([\\d.]+\\d))?\\;version:\\1"
			},
			"website": "http://discourse.org"
		},
		"Discuz! X": {
			"cats": [
				"2"
			],
			"env": [
				"^discuz_uid$",
				"^DISCUZCODE$"
			],
			"icon": "Discuz X.png",
			"implies": "PHP",
			"meta": {
				"generator": "Discuz! X([\\d\\.]+)?\\;version:\\1"
			},
			"website": "http://discuz.com"
		},
		"Disqus": {
			"cats": [
				"15"
			],
			"env": "^DISQUS",
			"html": "<div[^>]+id=\"disqus_thread\"",
			"icon": "Disqus.svg",
			"script": "disqus_url",
			"website": "http://disqus.com"
		},
		"Django": {
			"cats": [
				"18"
			],
			"env": "^__admin_media_prefix__",
			"html": "(?:powered by <a[^>]+>Django ?([\\d.]+)?|<input[^>]*name=[\"']csrfmiddlewaretoken[\"'][^>]*>)\\;version:\\1",
			"icon": "Django.png",
			"implies": "Python",
			"website": "http://djangoproject.com"
		},
		"Django CMS": {
			"cats": [
				"1"
			],
			"icon": "Django CMS.png",
			"implies": "Django",
			"website": "http://django-cms.org"
		},
		"Dojo": {
			"cats": [
				"12"
			],
			"env": "^dojo$",
			"icon": "Dojo.png",
			"script": "([\\d.]+)/dojo/dojo(?:\\.xd)?\\.js\\;version:\\1",
			"website": "http://dojotoolkit.org"
		},
		"Dokeos": {
			"cats": [
				"21"
			],
			"headers": {
				"X-Powered-By": "Dokeos"
			},
			"html": "(?:Portal <a[^>]+>Dokeos|@import \"[^\"]+dokeos_blue)",
			"icon": "Dokeos.png",
			"implies": [
				"PHP",
				"Xajax",
				"jQuery",
				"CKEditor"
			],
			"meta": {
				"generator": "Dokeos"
			},
			"website": "http://dokeos.com"
		},
		"DokuWiki": {
			"cats": [
				"8"
			],
			"headers": {
				"Set-Cookie": "DokuWiki="
			},
			"icon": "DokuWiki.png",
			"implies": "PHP",
			"meta": {
				"generator": "DokuWiki( Release [\\-\\d]+)?\\;version:\\1"
			},
			"website": "http://www.dokuwiki.org"
		},
		"Dotclear": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Dotclear-Static-Cache": ""
			},
			"icon": "Dotclear.png",
			"implies": "PHP",
			"website": "http://dotclear.org"
		},
		"DoubleClick Ad Exchange (AdX)": {
			"cats": [
				"36"
			],
			"icon": "DoubleClick.svg",
			"script": [
				"googlesyndication\\.com/pagead/show_ads\\.js",
				"tpc\\.googlesyndication\\.com/safeframe",
				"googlesyndication\\.com.*abg\\.js"
			],
			"website": "http://www.doubleclickbygoogle.com/solutions/digital-marketing/ad-exchange/"
		},
		"DoubleClick Campaign Manager (DCM)": {
			"cats": [
				"36"
			],
			"icon": "DoubleClick.svg",
			"script": "2mdn\\.net",
			"website": "http://www.doubleclickbygoogle.com/solutions/digital-marketing/campaign-manager/"
		},
		"DoubleClick Floodlight": {
			"cats": [
				"36"
			],
			"icon": "DoubleClick.svg",
			"script": "https?://fls.doubleclick.net",
			"website": "http://support.google.com/ds/answer/6029713?hl=en"
		},
		"DoubleClick for Publishers (DFP)": {
			"cats": [
				"36"
			],
			"icon": "DoubleClick.svg",
			"script": "googletagservices\\.com/tag/js/gpt(?:_mobile)?\\.js",
			"website": "http://www.google.com/dfp"
		},
		"DovetailWRP": {
			"cats": [
				"1"
			],
			"html": "<link[^>]* href=\"\\/DovetailWRP\\/",
			"icon": "DovetailWRP.png",
			"implies": "Microsoft ASP.NET",
			"script": "\\/DovetailWRP\\/",
			"website": "http://www.dovetailinternet.com"
		},
		"Doxygen": {
			"cats": [
				"4"
			],
			"html": "(?:<!-- Generated by Doxygen ([\\d.]+)|<link[^>]+doxygen\\.css)\\;version:\\1",
			"icon": "Doxygen.png",
			"meta": {
				"generator": "Doxygen ([\\d.]+)\\;version:\\1"
			},
			"website": "http://www.stack.nl/~dimitri/doxygen/"
		},
		"DreamWeaver": {
			"cats": [
				"20"
			],
			"html": "(?:<!--[^>]*(?:InstanceBeginEditable|Dreamweaver([^>]+)target|DWLayoutDefaultTable)|function MM_preloadImages\\(\\) \\{)\\;version:\\1",
			"icon": "DreamWeaver.png",
			"website": "http://www.adobe.com/products/dreamweaver"
		},
		"Drupal": {
			"cats": [
				"1"
			],
			"env": "^Drupal$",
			"headers": {
				"Expires": "19 Nov 1978",
				"X-Drupal-Cache": "",
				"X-Generator": "Drupal(?:\\s([\\d.]+))?\\;version:\\1"
			},
			"html": "<(?:link|style)[^>]+sites/(?:default|all)/(?:themes|modules)/",
			"icon": "Drupal.png",
			"implies": "PHP",
			"meta": {
				"generator": "Drupal(?:\\s([\\d.]+))?\\;version:\\1"
			},
			"script": "drupal\\.js",
			"website": "http://drupal.org"
		},
		"Drupal Commerce": {
			"cats": [
				"6"
			],
			"html": "<[^>]+(?:id=\"block[_-]commerce[_-]cart[_-]cart|class=\"commerce[_-]product[_-]field)",
			"icon": "Drupal Commerce.png",
			"implies": "Drupal",
			"website": "http://drupalcommerce.org"
		},
		"Dynamicweb": {
			"cats": [
				"1",
				"6",
				"10"
			],
			"headers": {
				"Set-Cookie": "Dynamicweb="
			},
			"icon": "Dynamicweb.png",
			"implies": "Microsoft ASP.NET",
			"meta": {
				"generator": "Dynamicweb ([\\d.]+)\\;version:\\1"
			},
			"website": "http://www.dynamicweb.dk"
		},
		"Dynatrace": {
			"cats": [
				"10"
			],
			"icon": "Dynatrace.png",
			"script": "dtagent.*\\.js",
			"website": "http://dynatrace.com"
		},
		"E-Commerce Paraguay": {
			"cats": [
				"6"
			],
			"icon": "eCommercePy.png",
			"script": "cdn\\.e-commerceparaguay\\.com",
			"website": "http://e-commerceparaguay.com"
		},
		"E-Merchant": {
			"cats": [
				"6"
			],
			"icon": "E-Merchant.png",
			"script": "cdn\\.e-merchant\\.com",
			"website": "http://e-merchant.com"
		},
		"EC-CUBE": {
			"cats": [
				"6"
			],
			"icon": "ec-cube.png",
			"implies": "PHP",
			"script": [
				"eccube\\.js",
				"win_op\\.js"
			],
			"website": "http://www.ec-cube.net"
		},
		"ELOG": {
			"cats": [
				"19"
			],
			"html": "<title>ELOG Logbook Selection</title>",
			"icon": "ELOG.png",
			"website": "http://midas.psi.ch/elog"
		},
		"ELOG HTTP": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "ELOG HTTP( \\d[\\-\\d\\.]+)?\\;version:\\1"
			},
			"icon": "ELOG.png",
			"implies": "ELOG",
			"website": "http://midas.psi.ch/elog"
		},
		"EPages": {
			"cats": [
				"6"
			],
			"headers": {
				"X-Powered-By": "epages 6"
			},
			"html": "<div class=\"BoxContainer\">",
			"icon": "epages.png",
			"website": "http://www.epages.com/"
		},
		"EPiServer": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "EPi(?:Trace|Server)[^;]*="
			},
			"icon": "EPiServer.png",
			"implies": "Microsoft ASP.NET",
			"meta": {
				"generator": "EPiServer"
			},
			"website": "http://episerver.com"
		},
		"EPrints": {
			"cats": [
				"19"
			],
			"env": "^EPJS_menu_template$",
			"icon": "EPrints.png",
			"implies": "Perl",
			"meta": {
				"generator": "EPrints ([\\d.]+)\\;version:\\1"
			},
			"website": "http://www.eprints.org"
		},
		"ESERV-10": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "ESERV-10(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "ESERV-10.png",
			"website": "http://www.violasystems.com"
		},
		"EWS-NIC4": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "EWS-NIC4(?:\\/([\\d\\.a-z]+))?\\;version:\\1"
			},
			"icon": "EWS-NIC4.png",
			"implies": "Dell",
			"website": "http://dell.com"
		},
		"EdgeCast": {
			"cats": [
				"31"
			],
			"headers": {
				"Server": "^ECD\\s\\(\\S+\\)"
			},
			"icon": "EdgeCast.png",
			"url": "https?://(?:[^/]+\\.)?edgecastcdn\\.net/",
			"website": "http://www.edgecast.com"
		},
		"Elcodi": {
			"cats": [
				"6"
			],
			"headers": {
				"X-Elcodi": ""
			},
			"icon": "Elcodi.png",
			"implies": [
				"PHP",
				"Symfony"
			],
			"website": "http://elcodi.io"
		},
		"Eleanor CMS": {
			"cats": [
				"1"
			],
			"icon": "Eleanor CMS.png",
			"implies": "PHP",
			"meta": {
				"generator": "Eleanor"
			},
			"website": "http://eleanor-cms.ru"
		},
		"Eloqua": {
			"cats": [
				"32"
			],
			"env": "^elq(?:SiteID|Load|CurESite)$",
			"icon": "Oracle.png",
			"script": "elqCfg\\.js",
			"website": "http://eloqua.com"
		},
		"EmbedThis Appweb": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Mbedthis-Appweb(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Embedthis.png",
			"website": "http://embedthis.com/appweb"
		},
		"Embedthis-http": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Embedthis-http(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Embedthis.png",
			"website": "http://github.com/embedthis/http"
		},
		"Ember.js": {
			"cats": [
				"12"
			],
			"env": "^Ember$",
			"icon": "Ember.js.png",
			"implies": "Handlebars",
			"website": "http://emberjs.com"
		},
		"Enyo": {
			"cats": [
				"12",
				"26"
			],
			"env": "^enyo$",
			"icon": "Enyo.png",
			"script": "enyo\\.js",
			"website": "http://enyojs.com"
		},
		"Epoch": {
			"cats": [
				"25"
			],
			"html": "<link[^>]+?href=\"[^\"]+epoch(?:\\.min)?\\.css",
			"implies": "D3",
			"script": "epoch(?:\\.min)?\\.js",
			"website": "http://fastly.github.io/epoch"
		},
		"Epom": {
			"cats": [
				"36"
			],
			"env": "^Epom",
			"icon": "Epom.png",
			"url": "^https?://(?:[^/]+\\.)?ad(?:op)?shost1\\.com/",
			"website": "http://epom.com"
		},
		"Erlang": {
			"cats": [
				"27"
			],
			"headers": {
				"Server": "Erlang( OTP/(?:[\\-\\d\\.ABR]+))?\\;version:\\1"
			},
			"icon": "Erlang.png",
			"website": "http://www.erlang.org"
		},
		"Etherpad": {
			"cats": [
				"24"
			],
			"env": [
				"^pad(?:editbar|impexp)$"
			],
			"headers": {
				"Server": "^Etherpad"
			},
			"icon": "etherpad.png",
			"implies": "Node.js",
			"script": [
				"/ep_etherpad-lite/"
			],
			"website": "https://etherpad.org"
		},
		"Exagon Concept": {
			"cats": [
				"1"
			],
			"headers": {
				"Server": "Exagon Server"
			},
			"icon": "ExagonConcept.svg",
			"website": "http://www.exagon-concept.com"
		},
		"Exhibit": {
			"cats": [
				"25"
			],
			"env": "^Exhibit$",
			"icon": "Exhibit.png",
			"script": "exhibit.*\\.js",
			"website": "http://simile-widgets.org/exhibit/"
		},
		"Express": {
			"cats": [
				"18",
				"22"
			],
			"headers": {
				"X-Powered-By": "^Express$"
			},
			"icon": "Express.png",
			"implies": "Node.js",
			"website": "http://expressjs.com"
		},
		"ExpressionEngine": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "(?:exp_last_activity|exp_tracker)"
			},
			"icon": "ExpressionEngine.png",
			"implies": "PHP",
			"website": "http://expressionengine.com"
		},
		"ExtJS": {
			"cats": [
				"12"
			],
			"env": "^Ext$",
			"icon": "ExtJS.png",
			"script": "ext-base\\.js",
			"website": "http://www.extjs.com"
		},
		"FAST ESP": {
			"cats": [
				"29"
			],
			"html": "<form[^>]+id=\"fastsearch\"",
			"icon": "FAST ESP.png",
			"website": "http://microsoft.com/enterprisesearch"
		},
		"FAST Search for SharePoint": {
			"cats": [
				"29"
			],
			"html": "<input[^>]+ name=\"ParametricSearch",
			"icon": "FAST Search for SharePoint.png",
			"implies": [
				"Microsoft SharePoint",
				"Microsoft ASP.NET"
			],
			"url": "Pages/SearchResults\\.aspx\\?k=",
			"website": "http://sharepoint.microsoft.com/en-us/product/capabilities/search/Pages/Fast-Search.aspx"
		},
		"FWP": {
			"cats": [
				"6"
			],
			"html": "<!--\\s+FwP Systems",
			"icon": "FWP.png",
			"meta": {
				"generator": "FWP Shop"
			},
			"website": "http://fwpshop.org"
		},
		"Facebook": {
			"cats": [
				"5"
			],
			"icon": "Facebook.svg",
			"script": "//connect\\.facebook\\.net/[^/]*/[a-z]*\\.js",
			"website": "http://facebook.com"
		},
		"Fact Finder": {
			"cats": [
				"29"
			],
			"html": "<!-- Factfinder",
			"icon": "Fact Finder.png",
			"script": "Suggest\\.ff",
			"url": "(?:/ViewParametricSearch|ffsuggest\\.[a-z]htm)",
			"website": "http://fact-finder.com"
		},
		"FancyBox": {
			"cats": [
				"12"
			],
			"icon": "FancyBox.png",
			"implies": "jQuery",
			"script": "jquery\\.fancybox\\.pack\\.js(?:\\?v=([\\d.]+))?$\\;version:\\1",
			"website": "http://fancyapps.com/fancybox"
		},
		"Fastly": {
			"cats": [
				"31"
			],
			"headers": {
				"Fastly-Debug-Digest": ""
			},
			"icon": "Fastly.svg",
			"website": "https://www.fastly.com"
		},
		"Fat-Free Framework": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "Fat-Free Framework"
			},
			"icon": "Fat-Free Framework.png",
			"implies": "PHP",
			"website": "http://fatfreeframework.com"
		},
		"Fedora": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Fedora"
			},
			"icon": "Fedora.png",
			"website": "http://fedoraproject.org"
		},
		"Firebase": {
			"cats": [
				"34"
			],
			"icon": "Firebase.png",
			"script": "firebase.*\\.js",
			"website": "http://firebase.com"
		},
		"Fireblade": {
			"cats": [
				"31"
			],
			"headers": {
				"Server": "fbs"
			},
			"icon": "Fireblade.png",
			"website": "http://fireblade.com"
		},
		"FlashCom": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "FlashCom/?([\\d\\.]+)?\\;version:\\1"
			},
			"website": "http://example.com"
		},
		"Flask": {
			"cats": [
				"18",
				"22"
			],
			"headers": {
				"Server": "Werkzeug/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "Flask.png",
			"implies": "Python",
			"website": "http://flask.pocoo.org"
		},
		"FlexCMP": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Flex-Lang": "",
				"X-Powered-By": "FlexCMP.+\\[v\\. ([\\d.]+)\\;version:\\1"
			},
			"html": "<!--[^>]+FlexCMP[^>v]+v\\. ([\\d.]+)\\;version:\\1",
			"icon": "FlexCMP.png",
			"meta": {
				"generator": "FlexCMP"
			},
			"website": "http://www.flexcmp.com/cms/home"
		},
		"FlexSlider": {
			"cats": [
				"5"
			],
			"icon": "FlexSlider.png",
			"implies": "jQuery",
			"script": [
				"jquery\\.flexslider(?:\\.min)?\\.js$"
			],
			"website": "https://woocommerce.com/flexslider/"
		},
		"FluxBB": {
			"cats": [
				"2"
			],
			"html": "Powered by (?:<strong>)?<a href=\"[^>]+fluxbb",
			"icon": "FluxBB.png",
			"implies": "PHP",
			"website": "http://fluxbb.org"
		},
		"Flyspray": {
			"cats": [
				"13"
			],
			"headers": {
				"Set-Cookie": "flyspray_project="
			},
			"html": "(?:<a[^>]+>Powered by Flyspray|<map id=\"projectsearchform)",
			"icon": "Flyspray.png",
			"implies": "PHP",
			"website": "http://flyspray.org"
		},
		"Font Awesome": {
			"cats": [
				"17"
			],
			"html": [
				"<link[^>]* href=[^>]+font-awesome(?:\\.min)?\\.css",
				"<script[^>]* src=[^>]+fontawesome(?:\\.js)?"
			],
			"icon": "Font Awesome.png",
			"website": "http://fontawesome.io"
		},
		"Fork CMS": {
			"cats": [
				"1"
			],
			"icon": "ForkCMS.png",
			"implies": "Symfony",
			"meta": {
				"generator": "^Fork CMS$"
			},
			"website": "http://www.fork-cms.com/"
		},
		"Fortune3": {
			"cats": [
				"6"
			],
			"html": "(?:<link [^>]*href=\"[^\\/]*\\/\\/www\\.fortune3\\.com\\/[^\"]*siterate\\/rate\\.css|Powered by <a [^>]*href=\"[^\"]+fortune3\\.com)",
			"icon": "Fortune3.png",
			"script": "cartjs\\.php\\?(?:.*&)?s=[^&]*myfortune3cart\\.com",
			"website": "http://fortune3.com"
		},
		"Foswiki": {
			"cats": [
				"8"
			],
			"env": "^foswiki$",
			"headers": {
				"Set-Cookie": "^(?:FOSWIKISTRIKEONE|SFOSWIKISID)",
				"X-Foswikiaction": "",
				"X-Foswikiuri": ""
			},
			"html": [
				"<div class=\"foswiki(?:Copyright|Page|Main)\">"
			],
			"icon": "foswiki.png",
			"implies": "Perl",
			"meta": {
				"foswiki.SERVERTIME": "",
				"foswiki.WIKINAME": ""
			},
			"website": "http://foswiki.org"
		},
		"FreeBSD": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "FreeBSD(?: ([\\d.]+))?\\;version:\\1"
			},
			"icon": "FreeBSD.png",
			"website": "http://freebsd.org"
		},
		"FreeTextBox": {
			"cats": [
				"24"
			],
			"env": "^FTB_",
			"html": "/<!--\\s*\\*\\s*FreeTextBox v\\d+ \\(([.\\d]+)(?:(?:.|\n)+?<!--\\s*\\*\\s*License Type: (Distribution|Professional)License)?/i\\;version:\\1 \\2",
			"icon": "FreeTextBox.png",
			"implies": "Microsoft ASP.NET",
			"website": "http://freetextbox.com"
		},
		"Froala Editor": {
			"cats": [
				"24"
			],
			"html": "<[^>]+class=\"[^\"]*(?:fr-view|fr-box)",
			"icon": "Froala.svg",
			"implies": [
				"jQuery",
				"Font Awesome"
			],
			"website": "http://froala.com/wysiwyg-editor"
		},
		"FrontPage": {
			"cats": [
				"20"
			],
			"html": "<html[^>]+urn:schemas-microsoft-com:office:office",
			"icon": "FrontPage.png",
			"meta": {
				"generator": "Microsoft FrontPage(?:\\s((?:Express )?[\\d.]+))?\\;version:\\1"
			},
			"website": "http://office.microsoft.com/frontpage"
		},
		"Fusion Ads": {
			"cats": [
				"36"
			],
			"env": "^_fusion",
			"icon": "Fusion Ads.png",
			"script": "^[^\\/]*//[ac]dn\\.fusionads\\.net/(?:api/([\\d.]+)/)?\\;version:\\1",
			"website": "http://fusionads.net"
		},
		"G-WAN": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "G-WAN"
			},
			"icon": "G-WAN.png",
			"website": "http://gwan.com"
		},
		"GX WebManager": {
			"cats": [
				"1"
			],
			"html": "<!--\\s+Powered by GX",
			"icon": "GX WebManager.png",
			"meta": {
				"generator": "GX WebManager(?: ([\\d.]+))?\\;version:\\1"
			},
			"website": "http://www.gxsoftware.com/en/products/web-content-management.htm"
		},
		"Gallery": {
			"cats": [
				"7"
			],
			"env": "^galleryAuthToken$",
			"html": "<div id=\"gsNavBar\" class=\"gcBorder1\">",
			"icon": "Gallery.png",
			"website": "http://gallery.menalto.com"
		},
		"Gambio": {
			"cats": [
				"6"
			],
			"env": "^gm_session_id$",
			"html": "(?:<link[^>]* href=\"templates/gambio/|<a[^>]content\\.php\\?coID=\\d|<!-- gambio eof -->|<!--[\\s=]+Shopsoftware by Gambio GmbH \\(c\\))",
			"icon": "Gambio.png",
			"implies": "PHP",
			"script": "gm_javascript\\.js\\.php",
			"website": "http://gambio.de"
		},
		"Gauges": {
			"cats": [
				"10"
			],
			"env": "^_gauges$",
			"headers": {
				"Set-Cookie": "_gauges_[^;]+="
			},
			"icon": "Gauges.png",
			"website": "http://get.gaug.es"
		},
		"Gentoo": {
			"cats": [
				"28"
			],
			"headers": {
				"X-Powered-By": "gentoo"
			},
			"icon": "Gentoo.png",
			"website": "http://www.gentoo.org"
		},
		"Gerrit": {
			"cats": [
				"47"
			],
			"env": "^gerrit_",
			"html": [
				">Gerrit Code Review</a>\\s*\"\\s*\\(([0-9.]+)\\)\\;version:\\1",
				"<(?:div|style) id=\"gerrit_"
			],
			"icon": "gerrit.svg",
			"implies": [
				"Java",
				"git"
			],
			"meta": {
				"title": "^Gerrit Code Review$"
			},
			"script": "^gerrit_ui/gerrit_ui",
			"website": "http://www.gerritcodereview.com"
		},
		"Get Satisfaction": {
			"cats": [
				"13"
			],
			"env": "^GSFN",
			"icon": "Get Satisfaction.png",
			"website": "http://getsatisfaction.com"
		},
		"GetSimple CMS": {
			"cats": [
				"1"
			],
			"icon": "GetSimple CMS.png",
			"implies": "PHP",
			"meta": {
				"generator": "GetSimple"
			},
			"website": "http://get-simple.info"
		},
		"Ghost": {
			"cats": [
				"11"
			],
			"headers": {
				"X-Ghost-Cache-Status": ""
			},
			"icon": "Ghost.png",
			"implies": "Node.js",
			"meta": {
				"generator": "Ghost(?:\\s([\\d.]+))?\\;version:\\1"
			},
			"website": "http://ghost.org"
		},
		"GitBook": {
			"cats": [
				"4"
			],
			"icon": "GitBook.png",
			"meta": {
				"generator": "GitBook(?:.([\\d.]+))?\\;version:\\1"
			},
			"website": "http://gitbook.io"
		},
		"GitLab": {
			"cats": [
				"13",
				"47"
			],
			"env": "^GitLab$",
			"headers": {
				"Set-cookie": "_gitlab_session"
			},
			"html": [
				"<meta content=\"https?://[^/]+/assets/gitlab_logo-",
				"<header class=\"navbar navbar-fixed-top navbar-gitlab with-horizontal-nav\">"
			],
			"icon": "GitLab.svg",
			"implies": "Ruby on Rails",
			"meta": {
				"description": "^GitLab",
				"og:site_name": "^GitLab$"
			},
			"website": "http://about.gitlab.com"
		},
		"GitLab CI": {
			"cats": [
				"44",
				"47"
			],
			"icon": "GitLab CI.png",
			"implies": "Ruby on Rails",
			"meta": {
				"description": "GitLab Continuous Integration"
			},
			"website": "http://about.gitlab.com/gitlab-ci"
		},
		"GitPHP": {
			"cats": [
				"47"
			],
			"html": [
				"<!-- gitphp web interface ([\\d.]+)\\;version:\\1",
				"<a href=\"http://www.gitphp.org/\" target=\"_blank\">GitPHP by Chris Han"
			],
			"implies": "PHP",
			"website": "http://gitphp.org"
		},
		"Gitiles": {
			"cats": [
				"47"
			],
			"html": "Powered by <a href=\"https://gerrit.googlesource.com/gitiles/\">Gitiles<",
			"implies": [
				"Java",
				"git"
			],
			"website": "http://gerrit.googlesource.com/gitiles/"
		},
		"GlassFish": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "GlassFish(?: Server)?(?: Open Source Edition)?(?: ?/?([\\d.]+))?\\;version:\\1"
			},
			"icon": "GlassFish.png",
			"implies": [
				"Java"
			],
			"website": "http://glassfish.java.net"
		},
		"Glyphicons": {
			"cats": [
				"17"
			],
			"html": "(?:<link[^>]* href=[^>]+glyphicons(?:\\.min)?\\.css|<img[^>]* src=[^>]+glyphicons)",
			"icon": "Glyphicons.png",
			"website": "http://glyphicons.com"
		},
		"Go": {
			"cats": [
				"27"
			],
			"icon": "Go.svg",
			"website": "https://golang.org"
		},
		"GoAhead": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "GoAhead"
			},
			"icon": "GoAhead.png",
			"website": "http://embedthis.com/products/goahead/index.html"
		},
		"GoStats": {
			"cats": [
				"10"
			],
			"env": "^_go(?:stats|_track)",
			"icon": "GoStats.png",
			"website": "http://gostats.com"
		},
		"Gogs": {
			"cats": [
				"47"
			],
			"headers": {
				"Set-Cookie": "i_like_gogits="
			},
			"html": [
				"<div class=\"ui left\">\n\\s+© \\d{4} Gogs Version: ([\\d.]+) Page:\\;version:\\1",
				"<button class=\"ui basic clone button\" id=\"repo-clone-ssh\" data-link=\"gogs@"
			],
			"icon": "gogs.png",
			"meta": {
				"keywords": "go, git, self-hosted, gogs"
			},
			"script": "js/gogs\\.js",
			"website": "http://gogs.io"
		},
		"Google AdSense": {
			"cats": [
				"36"
			],
			"env": [
				"^google_ad_",
				"^__google_ad_",
				"^Goog_AdSense_"
			],
			"icon": "Google AdSense.svg",
			"script": [
				"googlesyndication\\.com/",
				"ad\\.ca\\.doubleclick\\.net",
				"2mdn\\.net",
				"ad\\.ca\\.doubleclick\\.net"
			],
			"website": "http://google.com/adsense"
		},
		"Google Analytics": {
			"cats": [
				"10"
			],
			"env": "^gaGlobal$",
			"headers": {
				"Set-Cookie": "__utma"
			},
			"icon": "Google Analytics.svg",
			"script": "google-analytics\\.com\\/(?:ga|urchin|(analytics))\\.js\\;version:\\1?UA:",
			"website": "http://google.com/analytics"
		},
		"Google App Engine": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Google Frontend"
			},
			"icon": "Google App Engine.png",
			"website": "http://code.google.com/appengine"
		},
		"Google Charts": {
			"cats": [
				"25"
			],
			"env": "^__g(?:oogleVisualizationAbstractRendererElementsCount|vizguard)__$",
			"icon": "Google Charts.png",
			"website": "http://developers.google.com/chart/"
		},
		"Google Code Prettify": {
			"cats": [
				"19"
			],
			"env": "^prettyPrint$",
			"icon": "Google Code Prettify.png",
			"website": "http://code.google.com/p/google-code-prettify"
		},
		"Google Font API": {
			"cats": [
				"17"
			],
			"env": "^WebFonts$",
			"html": "<link[^>]* href=[^>]+fonts\\.(?:googleapis|google)\\.com",
			"icon": "Google Font API.png",
			"script": "googleapis\\.com/.+webfont",
			"website": "http://google.com/fonts"
		},
		"Google Maps": {
			"cats": [
				"35"
			],
			"icon": "Google Maps.png",
			"script": [
				"(?:maps\\.google\\.com/maps\\?file=api(?:&v=([\\d.]+))?|maps\\.google\\.com/maps/api/staticmap)\\;version:API v\\1",
				"//maps.googleapis.com/maps/api/js"
			],
			"website": "http://maps.google.com"
		},
		"Google PageSpeed": {
			"cats": [
				"23",
				"33"
			],
			"headers": {
				"X-Mod-Pagespeed": "([\\d.]+)\\;version:\\1",
				"X-Page-Speed": "(.+)\\;version:\\1"
			},
			"icon": "Google PageSpeed.png",
			"website": "http://developers.google.com/speed/pagespeed/mod"
		},
		"Google Plus": {
			"cats": [
				"5"
			],
			"icon": "Google Plus.svg",
			"script": "apis\\.google\\.com/js/[a-z]*\\.js",
			"website": "http://plus.google.com"
		},
		"Google Search Appliance": {
			"cats": [
				"22",
				"29"
			],
			"headers": {
				"Server": "^Google\\sSearch\\sAppliance$"
			},
			"icon": "Google Search Appliance.png",
			"website": "https://enterprise.google.com/search"
		},
		"Google Sites": {
			"cats": [
				"1"
			],
			"icon": "Google Sites.png",
			"url": "sites\\.google\\.com",
			"website": "http://sites.google.com"
		},
		"Google Tag Manager": {
			"cats": [
				"42"
			],
			"env": [
				"^googletag$",
				"^google_tag_manager$"
			],
			"html": "googletagmanager\\.com/ns\\.html[^>]+></iframe>",
			"icon": "Google Tag Manager.png",
			"website": "http://www.google.com/tagmanager"
		},
		"Google Wallet": {
			"cats": [
				"41"
			],
			"icon": "Google Wallet.png",
			"script": [
				"checkout\\.google\\.com",
				"wallet\\.google\\.com"
			],
			"website": "http://wallet.google.com"
		},
		"Google Web Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "gws"
			},
			"icon": "Google Web Server.png",
			"website": "http://en.wikipedia.org/wiki/Google_Web_Server"
		},
		"Google Web Toolkit": {
			"cats": [
				"18"
			],
			"env": "^__gwt_",
			"icon": "Google Web Toolkit.png",
			"implies": "Java",
			"meta": {
				"gwt:property": ""
			},
			"website": "http://developers.google.com/web-toolkit"
		},
		"Graffiti CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "graffitibot[^;]="
			},
			"icon": "Graffiti CMS.png",
			"implies": "Microsoft ASP.NET",
			"meta": {
				"generator": "Graffiti CMS ([^\"]+)\\;version:\\1"
			},
			"script": "/graffiti\\.js",
			"website": "http://graffiticms.codeplex.com"
		},
		"Grandstream": {
			"cats": [
				"22",
				"39"
			],
			"headers": {
				"Server": "Grandstream\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "Grandstream.png",
			"website": "http://www.grandstream.com"
		},
		"Grav": {
			"cats": [
				"1"
			],
			"icon": "Grav.png",
			"implies": "PHP",
			"meta": {
				"generator": "GravCMS(?:\\s([\\d.]+))?\\;version:\\1"
			},
			"website": "http://getgrav.org"
		},
		"Gravatar": {
			"cats": [
				"19"
			],
			"env": "^Gravatar$",
			"html": "<[^>]+gravatar\\.com/avatar/",
			"icon": "Gravatar.png",
			"website": "http://gravatar.com"
		},
		"Gravity Forms": {
			"cats": [
				"19"
			],
			"html": [
				"<div class=(?:\"|')[^>]*gform_wrapper",
				"<div class=(?:\"|')[^>]*gform_body",
				"<ul [^>]*class=(?:\"|')[^>]*gform_fields",
				"<link [^>]*href=(?:\"|')[^>]*wp-content/plugins/gravityforms/css/"
			],
			"icon": "gravityforms.svg",
			"implies": "WordPress",
			"website": "http://gravityforms.com"
		},
		"Gravity Insights": {
			"cats": [
				"10"
			],
			"env": "^GravityInsights$",
			"icon": "Gravity Insights.png",
			"website": "http://insights.gravity.com"
		},
		"Green Valley CMS": {
			"cats": [
				"1"
			],
			"html": "<img[^>]+/dsresource\\?objectid=",
			"icon": "Green Valley CMS.png",
			"implies": "Apache Tomcat",
			"meta": {
				"DC.identifier": "/content\\.jsp\\?objectid="
			},
			"website": "http://www.greenvalley.nl/Public/Producten/Content_Management/CMS"
		},
		"HERE": {
			"cats": [
				"35"
			],
			"icon": "HERE.png",
			"script": "https?://js\\.cit\\.api\\.here\\.com/se/([\\d.]+)\\/\\;version:\\1",
			"website": "http://developer.here.com"
		},
		"HHVM": {
			"cats": [
				"22"
			],
			"headers": {
				"X-Powered-By": "HHVM/?([\\d.]+)?\\;version:\\1"
			},
			"icon": "HHVM.png",
			"implies": "PHP\\;confidence:50",
			"website": "http://hhvm.com"
		},
		"HP": {
			"cats": [
				"40"
			],
			"icon": "HP.svg",
			"website": "http://hp.com"
		},
		"HP ChaiServer": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "HP-Chai(?:Server|SOE)(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "HP.svg",
			"implies": "HP",
			"website": "http://hp.com"
		},
		"HP Compact Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "HP_Compact_Server(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "HP.svg",
			"website": "http://hp.com"
		},
		"HP ProCurve": {
			"cats": [
				"37"
			],
			"icon": "HP.svg",
			"website": "http://hp.com/networking"
		},
		"HP System Management": {
			"cats": [
				"46"
			],
			"headers": {
				"Server": "HP System Management"
			},
			"icon": "HP.svg",
			"website": "http://hp.com"
		},
		"HP iLO": {
			"cats": [
				"22",
				"46"
			],
			"headers": {
				"Server": "HP-iLO-Server(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "HP.svg",
			"website": "http://hp.com"
		},
		"HTTP Kit": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "^http-kit"
			},
			"implies": "Java",
			"website": "http://http-kit.org"
		},
		"HTTP-Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "(?:^|[^-])\bHTTP-Server(?: ?/?V?([\\d.]+))?\\;version:\\1"
			},
			"website": "http://example.com"
		},
		"HTTP/2": {
			"cats": [
				"19"
			],
			"excludes": "SPDY",
			"headers": {
				"X-Firefox-Spdy": "h2"
			},
			"icon": "http2.png",
			"website": "http://http2.github.io"
		},
		"Haddock": {
			"cats": [
				"4"
			],
			"html": "<p>Produced by <a href=\"http://www.haskell.org/haddock/\">Haddock</a> version ([0-9.]+)</p>\\;version:\\1",
			"script": "haddock-util\\.js",
			"website": "http://www.haskell.org/haddock/"
		},
		"Hammer.js": {
			"cats": [
				"12"
			],
			"env": "^Hammer$",
			"icon": "Hammer.js.png",
			"script": "hammer(?:\\.min)?\\.js",
			"website": "http://hammerjs.github.io"
		},
		"Handlebars": {
			"cats": [
				"12"
			],
			"env": "^Handlebars$",
			"html": "<[^>]*type=[^>]text\\/x-handlebars-template",
			"icon": "Handlebars.png",
			"script": "handlebars(?:\\.runtime)?(?:-v([\\d.]+?))?(?:\\.min)?\\.js\\;version:\\1",
			"website": "http://handlebarsjs.com"
		},
		"Happy ICS Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Happy ICS Server(?:/([\\d.]+))?\\;version:\\1"
			},
			"implies": "OmniTouch 8660 My Teamwork",
			"website": "http://example.com"
		},
		"Haravan": {
			"cats": [
				"6"
			],
			"env": "^Haravan$",
			"icon": "Haravan.png",
			"script": "haravan.*\\.js",
			"website": "https://www.haravan.com"
		},
		"Haskell": {
			"cats": [
				"27"
			],
			"icon": "Haskell.png",
			"website": "http://wiki.haskell.org/Haskell"
		},
		"HeadJS": {
			"cats": [
				"12"
			],
			"env": "^head$\\;confidence:50",
			"html": "<[^>]*data-headjs-load",
			"icon": "HeadJS.png",
			"script": "head\\.(?:core|load)(?:\\.min)?\\.js",
			"website": "http://headjs.com"
		},
		"Heap": {
			"cats": [
				"10"
			],
			"env": "^heap$",
			"icon": "Heap.png",
			"script": "heap-\\d+.js",
			"website": "http://heapanalytics.com"
		},
		"Hello Bar": {
			"cats": [
				"5"
			],
			"env": "^HelloBar$",
			"icon": "Hello Bar.png",
			"script": "hellobar\\.js",
			"website": "http://hellobar.com"
		},
		"Hiawatha": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Hiawatha v([\\d.]+)\\;version:\\1"
			},
			"icon": "Hiawatha.png",
			"website": "http://hiawatha-webserver.org"
		},
		"Highcharts": {
			"cats": [
				"25"
			],
			"env": "^Highcharts$",
			"html": "<svg[^>]*><desc>Created with Highcharts ([\\d.]*)\\;version:\\1",
			"icon": "Highcharts.png",
			"script": "highcharts.*\\.js",
			"website": "http://highcharts.com"
		},
		"Highlight.js": {
			"cats": [
				"19"
			],
			"icon": "Highlight.js.png",
			"script": "/highlight\\.js/[\\d.]+?/highlight\\.min\\.js",
			"website": "https://highlightjs.org/"
		},
		"Highstock": {
			"cats": [
				"25"
			],
			"html": "<svg[^>]*><desc>Created with Highstock ([\\d.]*)\\;version:\\1",
			"icon": "Highcharts.png",
			"script": "highstock(?:\\-|\\.)?([\\d\\.]*\\d).*\\.js\\;version:\\1",
			"website": "http://highcharts.com/products/highstock"
		},
		"Hippo": {
			"cats": [
				"1"
			],
			"html": "<[^>]+/binaries/(?:[^/]+/)*content/gallery/",
			"icon": "Hippo.png",
			"website": "http://onehippo.org"
		},
		"Hogan.js": {
			"cats": [
				"12"
			],
			"env": "^Hogan$",
			"icon": "Hogan.js.png",
			"script": [
				"hogan-(?:-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"([\\d.]+)/hogan(?:\\.min)?\\.js\\;version:\\1"
			],
			"website": "http://twitter.github.com/hogan.js"
		},
		"Homeland": {
			"cats": [
				"1",
				"2"
			],
			"headers": {
				"Set-Cookie:": "_homeland_"
			},
			"icon": "Homeland.png",
			"implies": "Ruby on Rails",
			"website": "https://gethomeland.com"
		},
		"Hotaru CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "hotaru_mobile="
			},
			"icon": "Hotaru CMS.png",
			"implies": "PHP",
			"meta": {
				"generator": "Hotaru CMS"
			},
			"website": "http://hotarucms.org"
		},
		"Hotjar": {
			"cats": [
				"10"
			],
			"env": [
				"^HotLeadfactory$",
				"^HotleadController$"
			],
			"icon": "Hotjar.png",
			"script": "^//static\\.hotjar\\.com/c/hotjar-",
			"website": "https://www.hotjar.com"
		},
		"HubSpot": {
			"cats": [
				"32"
			],
			"env": "^(?:_hsq|hubspot)$",
			"html": "<!-- Start of Async HubSpot",
			"icon": "HubSpot.png",
			"website": "http://hubspot.com"
		},
		"Hugo": {
			"cats": [
				"1",
				"11"
			],
			"icon": "Hugo.png",
			"meta": {
				"generator": "Hugo ([\\d.]+)?\\;version:\\1"
			},
			"website": "http://gohugo.io"
		},
		"Hybris": {
			"cats": [
				"6"
			],
			"headers": {
				"Set-Cookie": "_hybris"
			},
			"html": "<[^>]+(?:/sys_master/|/hybr/|/_ui/desktop/)",
			"icon": "Hybris.png",
			"implies": "Java",
			"website": "http://hybris.com"
		},
		"IBM Coremetrics": {
			"cats": [
				"10"
			],
			"icon": "IBM.svg",
			"script": "cmdatatagutils\\.js",
			"website": "http://ibm.com/software/marketing-solutions/coremetrics"
		},
		"IBM HTTP Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "IBM_HTTP_Server(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "IBM.svg",
			"website": "http://ibm.com/software/webservers/httpservers"
		},
		"IBM Tivoli Storage Manager": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "TSM_HTTP(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "IBM.svg",
			"website": "http://ibm.com"
		},
		"IBM WebSphere Commerce": {
			"cats": [
				"6"
			],
			"html": "href=\"(?:\\/|[^>]+)webapp\\/wcs\\/",
			"icon": "IBM.svg",
			"implies": "Java",
			"url": "/wcs/",
			"website": "http://ibm.com/software/genservers/commerceproductline"
		},
		"IBM WebSphere Portal": {
			"cats": [
				"1"
			],
			"headers": {
				"IBM-Web2-Location": "",
				"Itx-Generated-Timestamp": ""
			},
			"icon": "IBM.svg",
			"implies": "Java",
			"url": "/wps/",
			"website": "http://ibm.com/software/websphere/portal"
		},
		"IIS": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "IIS(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "IIS.png",
			"implies": "Windows Server",
			"website": "http://www.iis.net"
		},
		"INFOnline": {
			"cats": [
				"10"
			],
			"env": [
				"^szmvars$",
				"^iam_data$"
			],
			"icon": "INFOnline.png",
			"script": "^https?://(?:[^/]+\\.)?i(?:oam|v)wbox\\.de/",
			"website": "http://infonline.de"
		},
		"IPB": {
			"cats": [
				"2"
			],
			"env": "^(?:IPBoard$|ipb_var|ipsSettings)",
			"html": "<link[^>]+ipb_[^>]+\\.css",
			"icon": "IPB.png",
			"implies": [
				"PHP",
				"MySQL"
			],
			"script": "jscripts/ips_",
			"website": "http://www.invisionpower.com"
		},
		"Immutable.js": {
			"cats": [
				"12"
			],
			"env": "^Immutable$",
			"icon": "Immutable.js.png",
			"script": "^immutable\\.(?:min\\.)?js$",
			"website": "http://facebook.github.io/immutable-js/"
		},
		"imperia CMS": {
			"cats": [
				"1"
			],
			"meta": {
				"X-Imperia-Live-Info": "",
				"GENERATOR": "^IMPERIA ([0-9.]{2,})+$\\;version:\\1"
			},
			"icon": "imperiaCMS.svg",
			"implies": "Perl",
			"url": "imperia/md/",
			"website": "https://www.pirobase-imperia.com/de/produkte/produktuebersicht/imperia-cms"
		},
		"ImpressCMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "ICMSession[^;]+=",
				"X-Powered-By": "ImpressCMS"
			},
			"icon": "ImpressCMS.png",
			"implies": "PHP",
			"meta": {
				"generator": "ImpressCMS"
			},
			"script": "include/linkexternal\\.js",
			"website": "http://www.impresscms.org"
		},
		"ImpressPages": {
			"cats": [
				"1"
			],
			"icon": "ImpressPages.png",
			"implies": "PHP",
			"meta": {
				"generator": "ImpressPages(?: CMS)?( [\\d.]*)\\;version:\\1"
			},
			"website": "http://impresspages.org"
		},
		"InProces": {
			"cats": [
				"1"
			],
			"html": "<!-- CSS InProces Portaal default -->",
			"icon": "InProces.png",
			"script": "brein/inproces/website/websitefuncties\\.js",
			"website": "http://www.brein.nl/oplossing/product/website"
		},
		"Incapsula": {
			"cats": [
				"31"
			],
			"headers": {
				"X-CDN": "Incapsula"
			},
			"icon": "Incapsula.png",
			"website": "http://www.incapsula.com"
		},
		"Indexhibit": {
			"cats": [
				"1"
			],
			"html": "<(?:link|a href) [^>]+ndxz-studio",
			"implies": [
				"PHP",
				"Apache",
				"Exhibit"
			],
			"meta": {
				"generator": "Indexhibit"
			},
			"website": "http://www.indexhibit.org"
		},
		"Indico": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-cookie": "MAKACSESSION"
			},
			"html": "Powered by\\s+(?:CERN )?<a href=\"http://(?:cdsware\\.cern\\.ch/indico/|indico-software\\.org|cern\\.ch/indico)\">(?:CDS )?Indico( [\\d\\.]+)?\\;version:\\1",
			"icon": "Indico.png",
			"website": "http://indico-software.org"
		},
		"Indy": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Indy(?:/([\\d.]+))?\\;version:\\1"
			},
			"website": "http://indyproject.org"
		},
		"InfernoJS": {
			"cats": [
				"12"
			],
			"env": "^Inferno$",
			"icon": "InfernoJS.png",
			"website": "https://infernojs.org/"
		},
		"Infusionsoft": {
			"cats": [
				"32"
			],
			"html": [
				"<input [^>]*name=\"infusionsoft_version\" [^>]*value=\"([^>]*)\" [^>]*\\/>\\;version:\\1",
				"<input [^>]*value=\"([^>]*)\" [^>]*name=\"infusionsoft_version\" [^>]*\\/>\\;version:\\1"
			],
			"icon": "infusionsoft.svg",
			"website": "http://infusionsoft.com"
		},
		"InstantCMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "InstantCMS\\[logdate\\]="
			},
			"icon": "InstantCMS.png",
			"implies": "PHP",
			"meta": {
				"generator": "InstantCMS"
			},
			"website": "http://www.instantcms.ru"
		},
		"Intel Active Management Technology": {
			"cats": [
				"22",
				"46"
			],
			"headers": {
				"Server": "Intel\\(R\\) Active Management Technology(?: ([\\d.]+))?\\;version:\\1"
			},
			"icon": "Intel Active Management Technology.png",
			"website": "http://intel.com"
		},
		"IntenseDebate": {
			"cats": [
				"15"
			],
			"icon": "IntenseDebate.png",
			"script": "intensedebate\\.com",
			"website": "http://intensedebate.com"
		},
		"Intercom": {
			"cats": [
				"10"
			],
			"env": "^Intercom$",
			"icon": "Intercom.png",
			"script": "(?:api\\.intercom\\.io/api|static\\.intercomcdn\\.com/intercom\\.v1)",
			"website": "http://intercom.io"
		},
		"Intershop": {
			"cats": [
				"6"
			],
			"icon": "Intershop.png",
			"script": "(?:is-bin|INTERSHOP)",
			"website": "http://intershop.com"
		},
		"Invenio": {
			"cats": [
				"50"
			],
			"headers": {
				"Set-cookie": "INVENIOSESSION"
			},
			"html": "(?:Powered by|System)\\s+(?:CERN )?<a (?:class=\"footer\" )?href=\"http://(?:cdsware\\.cern\\.ch(?:/invenio)?|invenio-software\\.org|cern\\.ch/invenio)(?:/)?\">(?:CDS )?Invenio</a>\\s*v?([\\d\\.]+)?\\;version:\\1",
			"icon": "Invenio.png",
			"website": "http://invenio-software.org"
		},
		"Ionicons": {
			"cats": [
				"17"
			],
			"html": "<link[^>]* href=[^>]+ionicons(?:\\.min)?\\.css",
			"icon": "Ionicons.png",
			"website": "http://ionicons.com"
		},
		"JAlbum": {
			"cats": [
				"7"
			],
			"icon": "JAlbum.png",
			"implies": "Java",
			"meta": {
				"generator": "JAlbum( [\\d.]+)?\\;version:\\1"
			},
			"website": "http://jalbum.net/en"
		},
		"JBoss Application Server": {
			"cats": [
				"22"
			],
			"headers": {
				"X-Powered-By": "JBoss(?:-([\\d.]+))?\\;version:\\1"
			},
			"icon": "JBoss Application Server.png",
			"website": "http://jboss.org/jbossas.html"
		},
		"JBoss Web": {
			"cats": [
				"22"
			],
			"excludes": "Apache Tomcat",
			"headers": {
				"X-Powered-By": "JBossWeb(?:-([\\d.]+))?\\;version:\\1"
			},
			"icon": "JBoss Web.png",
			"implies": "JBoss Application Server",
			"website": "http://jboss.org/jbossweb"
		},
		"JC-HTTPD": {
			"cats": [
				"22"
			],
			"excludes": "Apache",
			"headers": {
				"Server": "JC-HTTPD(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "JC-HTTPD.png",
			"implies": "Canon",
			"website": "http://canon.com"
		},
		"JS Charts": {
			"cats": [
				"25"
			],
			"env": "^JSChart$",
			"icon": "JS Charts.png",
			"script": "jscharts.*\\.js",
			"website": "http://www.jscharts.com"
		},
		"JTL Shop": {
			"cats": [
				"6"
			],
			"headers": {
				"Set-Cookie": "JTLSHOP="
			},
			"html": "(?:<input[^>]+name=\"JTLSHOP|<a href=\"jtl\\.php)",
			"icon": "JTL Shop.png",
			"website": "http://www.jtl-software.de/produkte/jtl-shop3"
		},
		"Jalios": {
			"cats": [
				"1"
			],
			"icon": "Jalios.png",
			"meta": {
				"generator": "Jalios"
			},
			"website": "http://www.jalios.com"
		},
		"Java": {
			"cats": [
				"27"
			],
			"headers": {
				"Set-Cookie": "JSESSIONID"
			},
			"icon": "Java.png",
			"website": "http://java.com"
		},
		"Java Servlet": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "Servlet(?:.([\\d.]+))?\\;version:\\1"
			},
			"icon": "Java.png",
			"implies": "Java",
			"website": "http://www.oracle.com/technetwork/java/index-jsp-135475.html"
		},
		"JavaScript Infovis Toolkit": {
			"cats": [
				"25"
			],
			"env": "^\\$jit$",
			"icon": "JavaScript Infovis Toolkit.png",
			"script": "jit.*\\.js",
			"website": "http://thejit.org"
		},
		"JavaServer Faces": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "JSF(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "JavaServer Faces.png",
			"implies": "Java",
			"website": "http://javaserverfaces.java.net"
		},
		"JavaServer Pages": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "JSP(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Java.png",
			"implies": "Java",
			"website": "http://www.oracle.com/technetwork/java/javaee/jsp/index.html"
		},
		"Jekyll": {
			"cats": [
				"1",
				"11"
			],
			"icon": "Jekyll.png",
			"meta": {
				"generator": "Jekyll (v[\\d.]+)?\\;version:\\1"
			},
			"website": "http://jekyllrb.com"
		},
		"Jenkins": {
			"cats": [
				"44"
			],
			"headers": {
				"X-Jenkins": "([\\d\\.]+)\\;version:\\1"
			},
			"icon": "Jenkins.png",
			"implies": "Java",
			"website": "http://jenkins-ci.org"
		},
		"Jetty": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Jetty(?:\\(([\\d\\.]*\\d+))?\\;version:\\1"
			},
			"icon": "Jetty.png",
			"implies": "Java",
			"website": "http://www.eclipse.org/jetty"
		},
		"Jimdo": {
			"cats": [
				"1"
			],
			"env": "^jimdo_(?:Data|Gen\\d+)$",
			"headers": {
				"X-Jimdo-Instance": "",
				"X-Jimdo-Wid": ""
			},
			"icon": "jimdo.png",
			"website": "http://www.jimdo.com/"
		},
		"Jirafe": {
			"cats": [
				"10",
				"32"
			],
			"env": "^jirafe$",
			"icon": "Jirafe.png",
			"script": "/jirafe\\.js",
			"website": "http://jirafe.com"
		},
		"Jive": {
			"cats": [
				"19"
			],
			"headers": {
				"X-JIVE-USER-ID": "",
				"X-JSL": "",
				"X-Jive-Flow-Id": "",
				"X-Jive-Request-Id": "",
				"x-jive-chrome-wrapped": ""
			},
			"icon": "Jive.png",
			"website": "http://www.jivesoftware.com"
		},
		"Jo": {
			"cats": [
				"26",
				"12"
			],
			"env": "^jo(?:Cache|DOM|Event)$",
			"icon": "Jo.png",
			"website": "http://joapp.com"
		},
		"JobberBase": {
			"cats": [
				"19"
			],
			"env": "^Jobber$",
			"icon": "JobberBase.png",
			"implies": "PHP",
			"meta": {
				"generator": "Jobberbase"
			},
			"website": "http://jobberbase.com"
		},
		"Joomla": {
			"cats": [
				"1"
			],
			"env": "^(?:jcomments|Joomla)$",
			"headers": {
				"X-Content-Encoded-By": "Joomla! ([\\d.]+)\\;version:\\1"
			},
			"html": "(?:<div[^>]+id=\"wrapper_r\"|<[^>]+(?:feed|components)/com_|<table[^>]+class=\"pill)\\;confidence:50",
			"icon": "Joomla.png",
			"implies": "PHP",
			"meta": {
				"generator": "Joomla!(?: ([\\d.]+))?\\;version:\\1"
			},
			"url": "option=com_",
			"website": "http://joomla.org"
		},
		"K2": {
			"cats": [
				"19"
			],
			"env": "^K2RatingURL$",
			"html": "<!--(?: JoomlaWorks \"K2\"| Start K2)",
			"icon": "K2.png",
			"implies": "Joomla",
			"website": "http://getk2.org"
		},
		"KISSmetrics": {
			"cats": [
				"10"
			],
			"env": "^KM_COOKIE_DOMAIN$",
			"icon": "KISSmetrics.png",
			"website": "http://www.kissmetrics.com"
		},
		"KS_HTTP": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "KS_HTTP\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "KS_HTTP.png",
			"implies": "Canon",
			"website": "http://www.canon.com"
		},
		"Kampyle": {
			"cats": [
				"10",
				"13"
			],
			"env": "^k_track$",
			"headers": {
				"Set-Cookie": "k_visit"
			},
			"icon": "Kampyle.png",
			"script": "cf\\.kampyle\\.com/k_button\\.js",
			"website": "http://www.kampyle.com"
		},
		"Kamva": {
			"cats": [
				"6"
			],
			"env": "^Kamva$",
			"icon": "Kamva.svg",
			"meta": {
				"generator": "[CK]amva"
			},
			"script": "cdn\\.mykamva\\.ir",
			"website": "http://kamva.ir"
		},
		"Kendo UI": {
			"cats": [
				"18"
			],
			"env": "^kendo$",
			"html": "<link[^>]*\\s+href=[^>]*styles/kendo\\.common(?:\\.min)?\\.css[^>]*/>",
			"icon": "Kendo UI.png",
			"implies": "jQuery",
			"website": "http://www.kendoui.com"
		},
		"Kentico CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "CMSPreferredCulture="
			},
			"icon": "Kentico CMS.png",
			"meta": {
				"generator": "Kentico CMS ([\\d.R]+ \\(build [\\d.]+\\))\\;version:\\1"
			},
			"website": "http://www.kentico.com"
		},
		"KeyCDN": {
			"cats": [
				"31"
			],
			"headers": {
				"Server": "^keycdn-engine$"
			},
			"icon": "KeyCDN.png",
			"website": "http://www.keycdn.com"
		},
		"Kibana": {
			"cats": [
				"29",
				"25"
			],
			"headers": {
				"kbn-name": "kibana",
				"kbn-version": "^([\\d.]+)$\\;version:\\1"
			},
			"html": "<title>Kibana</title>",
			"icon": "kibana.svg",
			"implies": "Node.js",
			"url": "kibana#/dashboard/",
			"website": "http://www.elastic.co/products/kibana"
		},
		"KineticJS": {
			"cats": [
				"25"
			],
			"env": "^Kinetic$",
			"icon": "KineticJS.png",
			"script": "kinetic(?:-v?([\\d.]+))?(?:\\.min)?\\.js\\;version:\\1",
			"website": "http://kineticjs.com"
		},
		"Klarna Checkout": {
			"cats": [
				"41",
				"6",
				"5"
			],
			"env": "^_klarnaCheckout$",
			"icon": "Klarna.svg",
			"website": "http://klarna.com"
		},
		"Knockout.js": {
			"cats": [
				"12"
			],
			"env": "^ko$",
			"icon": "Knockout.js.png",
			"website": "http://knockoutjs.com"
		},
		"Koa": {
			"cats": [
				"18",
				"22"
			],
			"headers": {
				"X-Powered-By": "^koa$"
			},
			"icon": "Koa.png",
			"implies": "Node.js",
			"website": "http://koajs.com"
		},
		"Koala Framework": {
			"cats": [
				"1",
				"18"
			],
			"html": "<!--[^>]+This website is powered by Koala Web Framework CMS",
			"icon": "Koala Framework.png",
			"implies": "PHP",
			"meta": {
				"generator": "^Koala Web Framework CMS"
			},
			"website": "http://koala-framework.org"
		},
		"Koego": {
			"cats": [
				"10"
			],
			"env": "^ego_domains$",
			"icon": "Koego.png",
			"script": "tracking\\.koego\\.com/end/ego\\.js",
			"website": "http://www.koego.com/en"
		},
		"Kohana": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "kohanasession",
				"X-Powered-By": "Kohana Framework ([\\d.]+)\\;version:\\1"
			},
			"icon": "Kohana.png",
			"implies": "PHP",
			"website": "http://kohanaframework.org"
		},
		"Koken": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "koken_referrer="
			},
			"html": [
				"<html lang=\"en\" class=\"k-source-essays k-lens-essays\">",
				"<!--\\s+KOKEN DEBUGGING"
			],
			"icon": "Koken.png",
			"implies": [
				"PHP",
				"MySQL"
			],
			"meta": {
				"generator": "Koken ([\\d.]+)\\;version:\\1"
			},
			"script": "koken(?:\\.js\\?([\\d.]+)|/storage)\\;version:\\1",
			"website": "http://koken.me"
		},
		"Kolibri CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "Kolibri"
			},
			"meta": {
				"generator": "Kolibri"
			},
			"website": "http://alias.io"
		},
		"Komodo CMS": {
			"cats": [
				"1"
			],
			"icon": "Komodo CMS.png",
			"implies": "PHP",
			"meta": {
				"generator": "^Komodo CMS"
			},
			"website": "http://www.komodocms.com"
		},
		"Kontaktify": {
			"cats": [
				"5"
			],
			"icon": "Kontaktify.png",
			"script": "//(?:www\\.)?kontaktify\\.com/embed.js",
			"website": "https://www.kontaktify.com"
		},
		"Koobi": {
			"cats": [
				"1"
			],
			"html": "<!--[^K>-]+Koobi ([a-z\\d.]+)\\;version:\\1",
			"icon": "Koobi.png",
			"meta": {
				"generator": "Koobi"
			},
			"website": "http://dream4.de/cms"
		},
		"Kooboo CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"X-KoobooCMS-Version": "(.*)\\;version:\\1"
			},
			"icon": "Kooboo CMS.png",
			"implies": "Microsoft ASP.NET",
			"script": "/Kooboo",
			"website": "http://kooboo.com"
		},
		"Kotisivukone": {
			"cats": [
				"1"
			],
			"icon": "Kotisivukone.png",
			"script": "kotisivukone(?:\\.min)?\\.js",
			"website": "http://www.kotisivukone.fi"
		},
		"LEPTON": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "lep\\d+sessionid="
			},
			"icon": "LEPTON.png",
			"implies": "PHP",
			"meta": {
				"generator": "LEPTON"
			},
			"website": "http://www.lepton-cms.org"
		},
		"LabVIEW": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "LabVIEW(?:/([\\d\\.]+))?\\;version:\\1"
			},
			"icon": "LabVIEW.png",
			"website": "http://ni.com/labview"
		},
		"Laravel": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "laravel_session"
			},
			"icon": "Laravel.png",
			"implies": "PHP",
			"website": "http://laravel.com"
		},
		"Lazy.js": {
			"cats": [
				"12"
			],
			"script": "lazy(?:\\.browser)?(?:\\.min)?\\.js",
			"website": "http://danieltao.com/lazy.js"
		},
		"Leaflet": {
			"cats": [
				"35"
			],
			"icon": "Leaflet.png",
			"script": "leaflet.*\\.js",
			"website": "http://leafletjs.com"
		},
		"Less": {
			"cats": [
				"19"
			],
			"html": "<link[^>]+ rel=\"stylesheet/less\"",
			"icon": "Less.png",
			"website": "http://lesscss.org"
		},
		"Liferay": {
			"cats": [
				"1"
			],
			"env": "^Liferay$",
			"headers": {
				"Liferay-Portal": "[a-z\\s]+([\\d.]+)\\;version:\\1"
			},
			"icon": "Liferay.png",
			"website": "http://www.liferay.com"
		},
		"Lift": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Lift-Version": "(.+)\\;version:\\1"
			},
			"icon": "Lift.png",
			"implies": "Scala",
			"website": "http://liftweb.net"
		},
		"LightMon Engine": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "lm_online"
			},
			"html": "<!-- Lightmon Engine Copyright Lightmon",
			"icon": "LightMon Engine.png",
			"implies": "PHP",
			"meta": {
				"generator": "LightMon Engine"
			},
			"website": "http://lightmon.ru"
		},
		"Lightbox": {
			"cats": [
				"12"
			],
			"html": "<link [^>]*href=\"[^\"]+lightbox(?:\\.min)?\\.css",
			"icon": "Lightbox.png",
			"script": "lightbox.*\\.js",
			"website": "http://lokeshdhakar.com/projects/lightbox2/"
		},
		"Lightspeed eCom": {
			"cats": [
				"6"
			],
			"html": "<!-- \\[START\\] 'blocks/head.rain' -->",
			"icon": "Lightspeed.svg",
			"script": "http://assets.webshopapp.com",
			"url": "seoshop.webshopapp.com",
			"website": "http://www.lightspeedhq.com/products/ecommerce/"
		},
		"Lighty": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "lighty_version"
			},
			"icon": "Lighty.png",
			"implies": "PHP",
			"website": "http://gitlab.com/lighty/framework"
		},
		"LimeSurvey": {
			"cats": [
				"19"
			],
			"headers": {
				"generator": "LimeSurvey"
			},
			"icon": "LimeSurvey.png",
			"website": "http://limesurvey.org/"
		},
		"LinkSmart": {
			"cats": [
				"36"
			],
			"env": "^(?:_mb_site_guid$|LS_JSON|LinkSmart(?:_|$))",
			"icon": "LinkSmart.png",
			"script": "^https?://cdn\\.linksmart\\.com/linksmart_([\\d.]+?)(?:\\.min)?\\.js\\;version:\\1",
			"website": "http://linksmart.com"
		},
		"Linkedin": {
			"cats": [
				"5"
			],
			"icon": "Linkedin.svg",
			"script": "//platform\\.linkedin\\.com/in\\.js",
			"website": "http://linkedin.com"
		},
		"List.js": {
			"cats": [
				"12"
			],
			"env": "^List$",
			"icon": "List.js.png",
			"script": "^list\\.(?:min\\.)?js$",
			"website": "http://www.listjs.com"
		},
		"LiteSpeed": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "^LiteSpeed$"
			},
			"icon": "LiteSpeed.png",
			"website": "http://litespeedtech.com"
		},
		"Lithium": {
			"cats": [
				"1"
			],
			"env": [
				"^LITHIUM$"
			],
			"headers": {
				"Set-Cookie": "LithiumVisitor="
			},
			"html": " <a [^>]+Powered by Lithium",
			"icon": "Lithium.png",
			"implies": "PHP",
			"website": "http://www.lithium.com"
		},
		"LiveAgent": {
			"cats": [
				"52"
			],
			"env": "^LiveAgent$",
			"icon": "LiveAgent.png",
			"website": "http://www.ladesk.com"
		},
		"LiveChat": {
			"cats": [
				"52"
			],
			"icon": "LiveChat.png",
			"script": "cdn\\.livechatinc\\.com/.*tracking\\.js",
			"website": "http://livechatinc.com"
		},
		"LiveJournal": {
			"cats": [
				"11"
			],
			"icon": "LiveJournal.png",
			"url": "\\.livejournal\\.com",
			"website": "http://www.livejournal.com"
		},
		"LivePerson": {
			"cats": [
				"52"
			],
			"icon": "LivePerson.png",
			"script": "^https?://lptag\\.liveperson\\.net/tag/tag\\.js",
			"website": "https://www.liveperson.com/"
		},
		"LiveStreet CMS": {
			"cats": [
				"1"
			],
			"env": "^LIVESTREET",
			"headers": {
				"X-Powered-By": "LiveStreet CMS"
			},
			"icon": "LiveStreet CMS.png",
			"implies": "PHP",
			"website": "http://livestreetcms.com"
		},
		"Livefyre": {
			"cats": [
				"15"
			],
			"env": [
				"^fyre$",
				"^FyreLoader$"
			],
			"html": "<[^>]+(?:id|class)=\"livefyre",
			"icon": "Livefyre.png",
			"script": "livefyre_init\\.js",
			"website": "http://livefyre.com"
		},
		"Liveinternet": {
			"cats": [
				"10"
			],
			"html": [
				"<script[^<>]*>[^]{0,128}?src\\s*=\\s*['\"]//counter\\.yadro\\.ru/hit(?:;\\S+)?\\?(?:t\\d+\\.\\d+;)?r",
				"<!--LiveInternet counter-->",
				"<!--/LiveInternet-->",
				"<a href=\"http://www.liveinternet.ru/click\""
			],
			"icon": "Liveinternet.png",
			"script": "/js/al/common.js\\?[0-9_]+",
			"website": "http://liveinternet.ru/rating/"
		},
		"Lo-dash": {
			"cats": [
				"12"
			],
			"icon": "Lo-dash.png",
			"script": "lodash.*\\.js",
			"website": "http://www.lodash.com"
		},
		"Locomotive": {
			"cats": [
				"1"
			],
			"html": "<link[^>]*/sites/[a-z\\d]{24}/theme/stylesheets",
			"icon": "Locomotive.png",
			"implies": [
				"Ruby on Rails",
				"MongoDB"
			],
			"website": "http://www.locomotivecms.com"
		},
		"Logitech Media Server": {
			"cats": [
				"22",
				"38"
			],
			"headers": {
				"Server": "Logitech Media Server(?: \\(([\\d\\.]+))?\\;version:\\1"
			},
			"icon": "Logitech Media Server.png",
			"website": "http://www.mysqueezebox.com"
		},
		"Lotus Domino": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Lotus-Domino"
			},
			"icon": "Lotus Domino.png",
			"implies": "Java",
			"website": "http://www-01.ibm.com/software/lotus/products/domino"
		},
		"Lua": {
			"cats": [
				"27"
			],
			"headers": {
				"X-Powered-By": "\bLua(?: ([\\d.]+))?\\;version:\\1"
			},
			"icon": "Lua.png",
			"website": "http://www.lua.org"
		},
		"Lucene": {
			"cats": [
				"34"
			],
			"icon": "Lucene.png",
			"implies": "Java",
			"website": "http://lucene.apache.org/core/"
		},
		"Luigi’s Box": {
			"cats": [
				"10",
				"29"
			],
			"env": "^Luigis$",
			"icon": "Luigisbox.svg",
			"website": "https://www.luigisbox.com"
		},
		"M.R. Inc BoxyOS": {
			"cats": [
				"28"
			],
			"icon": "M.R. Inc.png",
			"website": "http://mrincworld.com"
		},
		"M.R. Inc SiteFrame": {
			"cats": [
				"18"
			],
			"headers": {
				"Powered-By": "M\\.R\\. Inc SiteFrame"
			},
			"icon": "M.R. Inc.png",
			"website": "http://mrincworld.com"
		},
		"M.R. Inc Webserver": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "M\\.R\\. Inc Webserver"
			},
			"icon": "M.R. Inc.png",
			"implies": [
				"M.R. Inc BoxyOS"
			],
			"website": "http://mrincworld.com"
		},
		"MHonArc": {
			"cats": [
				"50"
			],
			"html": "<!-- MHonArc v([0-9.]+) -->\\;version:\\1",
			"icon": "mhonarc.png",
			"website": "http://www.mhonarc.at"
		},
		"MOBOTIX": {
			"cats": [
				"39"
			],
			"icon": "MOBOTIX.png",
			"meta": {
				"author": "MOBOTIX AG\\;confidence:40",
				"copyright": "MOBOTIX AG\\;confidence:40",
				"publisher": "MOBOTIX AG\\;confidence:40"
			},
			"url": "control/userimage\\.html\\;confidence:70",
			"website": "http://mobotix.com"
		},
		"MODX": {
			"cats": [
				"1"
			],
			"env": "^MODX_MEDIA_PATH$",
			"headers": {
				"Set-Cookie": "SN5[a-f\\d]{12}",
				"X-Powered-By": "^MODX"
			},
			"html": [
				"<a[^>]+>Powered by MODX</a>",
				"<(?:link|script)[^>]+assets/snippets/\\;confidence:20",
				"<form[^>]+id=\"ajaxSearch_form\\;confidence:20",
				"<input[^>]+id=\"ajaxSearch_input\\;confidence:20"
			],
			"icon": "MODX.png",
			"implies": "PHP",
			"meta": {
				"generator": "MODX[^\\d.]*([\\d.]+)?\\;version:\\1"
			},
			"website": "http://modx.com"
		},
		"MadAdsMedia": {
			"cats": [
				"36"
			],
			"env": "^setM(?:Iframe|RefURL)$",
			"icon": "MadAdsMedia.png",
			"script": "^https?://(?:ads-by|pixel)\\.madadsmedia.com/",
			"website": "http://madadsmedia.com"
		},
		"Magento": {
			"cats": [
				"6"
			],
			"env": [
				"^(?:Mage|VarienForm)$"
			],
			"headers": {
				"Set-Cookie": "frontend=\\;confidence:50"
			},
			"html": [
				"<script [^>]+data-requiremodule=\"mage/\\;version:2",
				"<script [^>]+data-requiremodule=\"Magento_\\;version:2"
			],
			"icon": "Magento.png",
			"implies": "PHP",
			"script": [
				"js/mage",
				"skin/frontend/(?:default|(enterprise))\\;version:\\1?Enterprise:Community",
				"static/_requirejs\\;confidence:50\\;version:2",
				"static/frontend\\;confidence:20\\;version:2"
			],
			"website": "http://www.magentocommerce.com"
		},
		"Mailchimp": {
			"cats": [
				"32"
			],
			"html": [
				"<form [^>]*data-mailchimp-url",
				"<form [^>]*id=\"mc-embedded-subscribe-form\"",
				"<form [^>]*name=\"mc-embedded-subscribe-form\"",
				"<input [^>]*id=\"mc-email\"\\;confidence:20",
				"<!-- Begin MailChimp Signup Form -->"
			],
			"icon": "mailchimp.svg",
			"script": [
				"s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
				"cdn-images.mailchimp.com/[^>]*.css"
			],
			"website": "http://mailchimp.com"
		},
		"Mambo": {
			"cats": [
				"1"
			],
			"excludes": "Joomla",
			"icon": "Mambo.png",
			"meta": {
				"generator": "Mambo"
			},
			"website": "http://mambo-foundation.org"
		},
		"MantisBT": {
			"cats": [
				"13"
			],
			"html": "<img[^>]+ alt=\"Powered by Mantis Bugtracker",
			"icon": "MantisBT.png",
			"implies": "PHP",
			"website": "http://www.mantisbt.org"
		},
		"ManyContacts": {
			"cats": [
				"5"
			],
			"icon": "ManyContacts.png",
			"script": "\\/assets\\/js\\/manycontacts\\.min\\.js",
			"website": "http://www.manycontacts.com"
		},
		"Marionette.js": {
			"cats": [
				"12"
			],
			"env": "^Marionette$",
			"icon": "Marionette.js.svg",
			"implies": [
				"Underscore.js",
				"Backbone.js"
			],
			"script": "backbone\\.marionette.*\\.js",
			"website": "http://marionettejs.com"
		},
		"Marketo": {
			"cats": [
				"32"
			],
			"env": "^Munchkin$",
			"icon": "Marketo.png",
			"script": "munchkin\\.marketo\\.net/munchkin\\.js",
			"website": "http://www.marketo.com"
		},
		"Materialize CSS": {
			"cats": [
				"18"
			],
			"html": "<link[^>]* href=\"[^\"]*materialize(?:\\.min)?\\.css",
			"icon": "Materialize CSS.png",
			"implies": "jQuery",
			"script": "materialize(?:\\.min)?\\.js",
			"website": "http://materializecss.com"
		},
		"MathJax": {
			"cats": [
				"25"
			],
			"env": "^MathJax$",
			"icon": "MathJax.png",
			"script": "mathjax\\.js",
			"website": "http://mathjax.org"
		},
		"Mattermost": {
			"cats": [
				"2"
			],
			"env": "mm_(?:config|license|user|current_user_id)",
			"html": "<noscript> To use Mattermost, please enable JavaScript. </noscript>",
			"icon": "mattermost.png",
			"implies": [
				"Go",
				"React",
				"PostgreSQL\\;confidence:50",
				"MySQL\\;confidence:50"
			],
			"website": "http://about.mattermost.com"
		},
		"MaxCDN": {
			"cats": [
				"31"
			],
			"headers": {
				"Server": "^NetDNA",
				"X-CDN-Forward": "^maxcdn$"
			},
			"icon": "MaxCDN.png",
			"website": "http://www.maxcdn.com"
		},
		"MaxSite CMS": {
			"cats": [
				"1"
			],
			"icon": "MaxSite CMS.png",
			"implies": "PHP",
			"meta": {
				"generator": "MaxSite CMS"
			},
			"website": "http://max-3000.com"
		},
		"Mean.io": {
			"cats": [
				"12"
			],
			"headers": {
				"X-Powered-CMS": "Mean\\.io"
			},
			"icon": "Mean.io.png",
			"implies": [
				"MongoDB",
				"Express",
				"AngularJS"
			],
			"website": "http://mean.io"
		},
		"MediaElement.js": {
			"cats": [
				"14"
			],
			"env": "^mejs$",
			"icon": "MediaElement.js.png",
			"website": "http://mediaelementjs.com"
		},
		"MediaTomb": {
			"cats": [
				"38"
			],
			"headers": {
				"Server": "MediaTomb(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "MediaTomb.png",
			"website": "http://mediatomb.cc"
		},
		"MediaWiki": {
			"cats": [
				"8"
			],
			"html": "(?:<a[^>]+>Powered by MediaWiki</a>|<[^>]+id=\"t-specialpages)",
			"icon": "MediaWiki.png",
			"implies": "PHP",
			"meta": {
				"generator": "^MediaWiki ?([\\d.]+)$\\;version:\\1"
			},
			"website": "http://www.mediawiki.org"
		},
		"Medium": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "Medium"
			},
			"icon": "Medium.svg",
			"script": "medium\\.com",
			"url": "^(?:www\\.)?medium\\.com",
			"website": "https://medium.com"
		},
		"Meebo": {
			"cats": [
				"5"
			],
			"html": "(?:<iframe id=\"meebo-iframe\"|Meebo\\('domReady'\\))",
			"icon": "Meebo.png",
			"website": "http://www.meebo.com"
		},
		"Melis CMS V2": {
			"cats": [
				"1",
				"6"
			],
			"html": "<!-- Rendered with Melics CMS V2",
			"icon": "meliscmsv2.png",
			"meta": {
				"powered-by": "^Melis CMS"
			},
			"website": "http://www.melistechnology.com/"
		},
		"Meteor": {
			"cats": [
				"12"
			],
			"env": [
				"^Meteor$",
				"^METEOR_VERSION$"
			],
			"html": "<link[^>]+__meteor-css__",
			"icon": "Meteor.png",
			"implies": [
				"MongoDB",
				"Node.js"
			],
			"website": "http://meteor.com"
		},
		"Methode": {
			"cats": [
				"1"
			],
			"env": "^eidosBase$",
			"html": "<!-- Methode uuid: \"[a-f\\d]+\" ?-->",
			"icon": "Methode.png",
			"meta": {
				"eomportal-id": "\\d+",
				"eomportal-instanceid": "\\d+",
				"eomportal-lastUpdate": "",
				"eomportal-loid": "[\\d.]+",
				"eomportal-uuid": "[a-f\\d]+"
			},
			"website": "http://www.eidosmedia.com/solutions"
		},
		"Microsoft ASP.NET": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "ASPSESSION|ASP\\.NET_SessionId",
				"X-AspNet-Version": "(.+)\\;version:\\1",
				"X-Powered-By": "ASP\\.NET\\;confidence:50"
			},
			"html": "<input[^>]+name=\"__VIEWSTATE",
			"icon": "Microsoft ASP.NET.png",
			"implies": "IIS\\;confidence:50",
			"url": "\\.aspx(?:$|\\?)",
			"website": "http://www.asp.net"
		},
		"Microsoft HTTPAPI": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Microsoft-HTTPAPI(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Microsoft.svg",
			"website": "http://microsoft.com"
		},
		"Microsoft SharePoint": {
			"cats": [
				"1"
			],
			"env": "^_spBodyOnLoadCalled$",
			"headers": {
				"MicrosoftSharePointTeamServices": "(.*)\\;version:\\1",
				"SPRequestGuid": "",
				"SharePointHealthScore": "",
				"X-SharePointHealthScore": ""
			},
			"icon": "Microsoft SharePoint.png",
			"meta": {
				"generator": "Microsoft SharePoint"
			},
			"website": "http://sharepoint.microsoft.com"
		},
		"Mietshop": {
			"cats": [
				"6"
			],
			"html": "<a href=\"https://ssl.mietshop.d",
			"icon": "mietshop.png",
			"meta": {
				"generator": "Mietshop"
			},
			"website": "http://www.mietshop.de/"
		},
		"Milligram": {
			"cats": [
				"18"
			],
			"html": [
				"<link[^>]+?href=\"[^\"]+milligram(?:\\.min)?\\.css"
			],
			"icon": "Milligram.png",
			"website": "http://milligram.github.io"
		},
		"MiniBB": {
			"cats": [
				"2"
			],
			"html": "<a href=\"[^\"]+minibb[^<]+</a>[^<]+\n<!--End of copyright link",
			"icon": "MiniBB.png",
			"website": "http://www.minibb.com"
		},
		"MiniServ": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "MiniServ\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"website": "http://sourceforge.net/projects/miniserv"
		},
		"Mint": {
			"cats": [
				"10"
			],
			"env": "^Mint$",
			"icon": "Mint.png",
			"script": "mint/\\?js",
			"website": "http://haveamint.com"
		},
		"Mixpanel": {
			"cats": [
				"10"
			],
			"env": "^Mixpanel$",
			"icon": "Mixpanel.png",
			"script": "api\\.mixpanel\\.com/track",
			"website": "http://mixpanel.com"
		},
		"Mobify": {
			"cats": [
				"26"
			],
			"env": "^Mobify$",
			"icon": "Mobify.png",
			"script": "mobify\\.com",
			"website": "http://www.mobify.com"
		},
		"MochiKit": {
			"cats": [
				"12"
			],
			"env": "^MochiKit$",
			"icon": "MochiKit.png",
			"script": "MochiKit(?:\\.min)?\\.js",
			"website": "http://mochikit.com"
		},
		"MochiWeb": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "MochiWeb(?:/([\\d.]+))?\\;version:\\1"
			},
			"website": "http://github.com/mochi/mochiweb"
		},
		"Modernizr": {
			"cats": [
				"12"
			],
			"env": "^Modernizr$",
			"icon": "Modernizr.png",
			"script": "modernizr(?:-([\\d.]*[\\d]))?.*\\.js\\;version:\\1",
			"website": "http://www.modernizr.com"
		},
		"Modified": {
			"cats": [
				"6"
			],
			"icon": "modified.png",
			"meta": {
				"generator": "\\(c\\) by modified eCommerce Shopsoftware ------ http://www.modified-shop.org"
			},
			"website": "http://www.modified-shop.org/"
		},
		"Moguta.CMS": {
			"cats": [
				"1",
				"6"
			],
			"html": "(?:<script|link)[^>]*mg-(?:core|plugins|templates)",
			"icon": "Moguta.CMS.png",
			"implies": "PHP",
			"website": "http://moguta.ru"
		},
		"MoinMoin": {
			"cats": [
				"8"
			],
			"env": "^show_switch2gui$",
			"icon": "MoinMoin.png",
			"implies": "Python",
			"script": "moin(?:_static(\\d)(\\d)(\\d)|.+)/common/js/common\\.js\\;version:\\1.\\2.\\3",
			"website": "http://moinmo.in"
		},
		"Mojolicious": {
			"cats": [
				"18"
			],
			"headers": {
				"x-powered-by": "mojolicious"
			},
			"icon": "Mojolicious.png",
			"implies": "Perl",
			"website": "http://mojolicio.us"
		},
		"Mollom": {
			"cats": [
				"16"
			],
			"html": "<img[^>]+\\.mollom\\.com",
			"icon": "Mollom.png",
			"script": "mollom(?:\\.min)?\\.js",
			"website": "http://mollom.com"
		},
		"Moment Timezone": {
			"cats": [
				"12"
			],
			"icon": "Moment.js.png",
			"implies": "Moment.js",
			"script": "moment-timezone(?:\\-data)?(?:\\.min)?\\.js",
			"website": "http://momentjs.com/timezone/"
		},
		"Moment.js": {
			"cats": [
				"12"
			],
			"env": "^moment$",
			"icon": "Moment.js.png",
			"script": "moment(?:\\.min)?\\.js",
			"website": "http://momentjs.com"
		},
		"Mondo Media": {
			"cats": [
				"6"
			],
			"icon": "Mondo Media.png",
			"meta": {
				"generator": "Mondo Shop"
			},
			"website": "http://mondo-media.de"
		},
		"MongoDB": {
			"cats": [
				"34"
			],
			"icon": "MongoDB.png",
			"website": "http://www.mongodb.org"
		},
		"Mongrel": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Mongrel"
			},
			"icon": "Mongrel.png",
			"implies": "Ruby",
			"website": "http://mongrel2.org"
		},
		"Monkey HTTP Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Monkey/?([\\d.]+)?\\;version:\\1"
			},
			"icon": "Monkey HTTP Server.png",
			"website": "http://monkey-project.com"
		},
		"Mono": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "Mono"
			},
			"icon": "Mono.png",
			"website": "http://mono-project.com"
		},
		"Mono.net": {
			"cats": [
				"1"
			],
			"env": "^_monoTracker$",
			"icon": "Mono.net.png",
			"implies": "Piwik",
			"script": "monotracker(?:\\.min)?\\.js",
			"website": "http://www.mono.net"
		},
		"MooTools": {
			"cats": [
				"12"
			],
			"env": "^MooTools$",
			"icon": "MooTools.png",
			"script": "mootools.*\\.js",
			"website": "http://mootools.net"
		},
		"Moodle": {
			"cats": [
				"21"
			],
			"env": "^moodle",
			"headers": {
				"Set-Cookie": "(?:MoodleSession|MOODLEID_)"
			},
			"html": "<img[^>]+moodlelogo",
			"icon": "Moodle.png",
			"implies": "PHP",
			"meta": {
				"keywords": "^moodle"
			},
			"website": "http://moodle.org"
		},
		"Moon": {
			"cats": [
				"12"
			],
			"icon": "moon.png",
			"script": "/moon(?:\\.min)?\\.js$",
			"website": "http://moonjs.ga/"
		},
		"Motion-httpd": {
			"cats": [
				"22"
			],
			"excludes": "Apache",
			"headers": {
				"Server": "Motion-httpd(?:/([\\d.]+))?\\;version:\\1"
			},
			"website": "http://lavrsen.dk/foswiki/bin/view/Motion"
		},
		"MotoCMS": {
			"cats": [
				"1"
			],
			"html": "<link [^>]*href=\"[^>]*\\/mt-content\\/[^>]*\\.css",
			"icon": "MotoCMS.svg",
			"implies": [
				"PHP",
				"AngularJS",
				"jQuery"
			],
			"script": ".*\\/mt-includes\\/[asetj]{2,6}\\/.*\\.js.*",
			"website": "http://motocms.com"
		},
		"Movable Type": {
			"cats": [
				"1"
			],
			"icon": "Movable Type.png",
			"meta": {
				"generator": "Movable Type"
			},
			"website": "http://movabletype.org"
		},
		"Moxa": {
			"cats": [
				"37"
			],
			"headers": {
				"Server": "MoxaHttp(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Moxa.png",
			"website": "http://moxa.com"
		},
		"Mozard Suite": {
			"cats": [
				"1"
			],
			"icon": "Mozard Suite.png",
			"meta": {
				"author": "Mozard"
			},
			"url": "/mozard/!suite",
			"website": "http://mozard.nl"
		},
		"Mura CMS": {
			"cats": [
				"1",
				"11"
			],
			"icon": "Mura CMS.png",
			"implies": "Adobe ColdFusion",
			"meta": {
				"generator": "Mura CMS ([\\d]+)\\;version:\\1"
			},
			"website": "http://www.getmura.com"
		},
		"Mustache": {
			"cats": [
				"12"
			],
			"env": "^Mustache$",
			"icon": "Mustache.png",
			"script": "mustache(?:\\.min)?\\.js",
			"website": "http://mustache.github.com"
		},
		"MyBB": {
			"cats": [
				"2"
			],
			"env": "^MyBB$",
			"html": "(?:<script [^>]+\\s+<!--\\s+lang\\.no_new_posts|<a[^>]* title=\"Powered By MyBB)",
			"icon": "MyBB.png",
			"implies": [
				"PHP",
				"MySQL"
			],
			"website": "http://www.mybb.com"
		},
		"MyBlogLog": {
			"cats": [
				"5"
			],
			"icon": "MyBlogLog.png",
			"script": "pub\\.mybloglog\\.com",
			"website": "http://www.mybloglog.com"
		},
		"MySQL": {
			"cats": [
				"34"
			],
			"icon": "MySQL.svg",
			"website": "http://mysql.com"
		},
		"Mynetcap": {
			"cats": [
				"1"
			],
			"icon": "Mynetcap.png",
			"meta": {
				"generator": "Mynetcap"
			},
			"website": "http://www.netcap-creation.fr"
		},
		"NOIX": {
			"cats": [
				"19"
			],
			"html": "(?:<[^>]+(?:src|href)=[^>]*/media/noix|<!-- NOIX)",
			"icon": "NOIX.png",
			"website": "http://www.noix.com.br/tecnologias/joomla"
		},
		"NVD3": {
			"cats": [
				"25"
			],
			"env": "^nv$",
			"html": "<link[^>]* href=[^>]+nv\\.d3(?:\\.min)?\\.css",
			"icon": "NVD3.png",
			"implies": "D3",
			"script": "nv\\.d3(?:\\.min)?\\.js",
			"website": "http://nvd3.org"
		},
		"Navegg": {
			"cats": [
				"10"
			],
			"env": "^nvg[0-9]$",
			"icon": "Navegg.png",
			"script": "tag.navdmp.com",
			"website": "https://www.navegg.com/"
		},
		"Nedstat": {
			"cats": [
				"10"
			],
			"env": "^sitestat$",
			"icon": "Nedstat.png",
			"website": "http://www.nedstat.com"
		},
		"Neos CMS": {
			"cats": [
				"1"
			],
			"excludes": "TYPO3 CMS",
			"headers": {
				"X-Flow-Powered": "Neos/?(.+)?$\\;version:\\1"
			},
			"icon": "Neos.svg",
			"implies": "Neos Flow",
			"url": "/neos/",
			"website": "http://neos.io"
		},
		"Neos Flow": {
			"cats": [
				"18"
			],
			"excludes": "TYPO3 CMS",
			"headers": {
				"X-Flow-Powered": "Flow/?(.+)?$\\;version:\\1"
			},
			"icon": "Neos.svg",
			"implies": "PHP",
			"website": "http://flow.neos.io"
		},
		"Nepso": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-CMS": "Nepso"
			},
			"icon": "Nepso.png",
			"website": "http://nepso.com"
		},
		"Netlify": {
			"cats": [
				"22",
				"31"
			],
			"headers": {
				"Server": "Netlify"
			},
			"icon": "Netlify.svg",
			"website": "https://www.netlify.com/"
		},
		"Netmonitor": {
			"cats": [
				"10"
			],
			"env": "^netmonitor$",
			"icon": "Netmonitor.png",
			"script": "netmonitor\\.fi/nmtracker\\.js",
			"website": "http://netmonitor.fi/en"
		},
		"Neto": {
			"cats": [
				"6"
			],
			"env": "^NETO$",
			"icon": "Neto.svg",
			"script": "jquery\\.neto.*\\.js",
			"website": "http://www.neto.com.au"
		},
		"Netsuite": {
			"cats": [
				"6"
			],
			"headers": {
				"Set-Cookie": "NS_VER="
			},
			"icon": "Netsuite.png",
			"website": "http://netsuite.com"
		},
		"Nette Framework": {
			"cats": [
				"18"
			],
			"env": "^Nette$",
			"headers": {
				"Set-Cookie": "nette-browser=",
				"X-Powered-By": "Nette Framework"
			},
			"html": [
				"<input[^>]+data-nette-rules",
				"<div[^>]+id=\"snippet-",
				"<input[^>]+id=\"frm-"
			],
			"icon": "Nette Framework.png",
			"implies": "PHP",
			"website": "http://nette.org"
		},
		"New Relic": {
			"cats": [
				"10"
			],
			"env": "^NREUM",
			"icon": "New Relic.png",
			"website": "http://newrelic.com"
		},
		"Nginx": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "nginx(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Nginx.svg",
			"website": "http://nginx.org/en"
		},
		"Node.js": {
			"cats": [
				"27"
			],
			"icon": "node.js.png",
			"website": "http://nodejs.org"
		},
		"NodeBB": {
			"cats": [
				"2"
			],
			"headers": {
				"X-Powered-By": "^NodeBB$"
			},
			"icon": "NodeBB.png",
			"implies": "Node.js",
			"script": "^/nodebb\\.min\\.js\\?",
			"website": "https://nodebb.org"
		},
		"OWL Carousel": {
			"cats": [
				"5"
			],
			"html": "<link [^>]*href=\"[^\"]+owl.carousel(?:\\.min)?\\.css",
			"icon": "OWL Carousel.png",
			"implies": "jQuery",
			"script": "owl.carousel.*\\.js",
			"website": "https://owlcarousel2.github.io/OwlCarousel2/"
		},
		"OXID eShop": {
			"cats": [
				"6"
			],
			"env": "^ox(?:TopMenu|ModalPopup|LoginBox|InputValidator)",
			"html": "<!--[^-]*OXID eShop",
			"icon": "OXID eShop.png",
			"website": "http://oxid-esales.com"
		},
		"October CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "october_session="
			},
			"icon": "October CMS.png",
			"implies": "Laravel",
			"website": "http://octobercms.com"
		},
		"Octopress": {
			"cats": [
				"1",
				"11"
			],
			"html": "Powered by <a href=\"http://octopress.org\">",
			"icon": "octopress.png",
			"implies": "Jekyll",
			"meta": {
				"generator": "Octopress"
			},
			"website": "http://octopress.org"
		},
		"Odoo": {
			"cats": [
				"1",
				"6"
			],
			"html": "<link[^>]* href=[^>]+/web/css/(?:web\\.assets_common/|website\\.assets_frontend/)\\;confidence:25",
			"icon": "Odoo.png",
			"implies": [
				"Python",
				"PostgreSQL",
				"Node.js",
				"Less"
			],
			"meta": {
				"generator": "Odoo"
			},
			"script": "/web/js/(?:web\\.assets_common/|website\\.assets_frontend/)\\;confidence:25",
			"website": "http://odoo.com"
		},
		"Olark": {
			"cats": [
				"52"
			],
			"icon": "Olark.png",
			"script": "^https?:\\/\\/static\\.olark\\.com\\/jsclient\\/loader1\\.js",
			"website": "https://www.olark.com/"
		},
		"OmniTouch 8660 My Teamwork": {
			"cats": [
				"19"
			],
			"icon": "OmniTouch 8660 My Teamwork.png",
			"website": "http://enterprise.alcatel-lucent.com"
		},
		"OneAPM": {
			"cats": [
				"10"
			],
			"env": "^BWEUM",
			"icon": "OneAPM.png",
			"website": "http://www.oneapm.com"
		},
		"OneStat": {
			"cats": [
				"10"
			],
			"env": "^OneStat",
			"icon": "OneStat.png",
			"website": "http://www.onestat.com"
		},
		"Open AdStream": {
			"cats": [
				"36"
			],
			"env": "^OAS_AD$",
			"icon": "Open AdStream.png",
			"website": "http://xaxis.com"
		},
		"Open Classifieds": {
			"cats": [
				"6"
			],
			"icon": "Open Classifieds.png",
			"meta": {
				"author": "open-classifieds\\.com",
				"copyright": "Open Classifieds ?([0-9.]+)?\\;version:\\1"
			},
			"website": "http://open-classifieds.com"
		},
		"Open Journal Systems": {
			"cats": [
				"50"
			],
			"headers": {
				"Set-Cookie": "\bOJSSID\b"
			},
			"icon": "Open Journal Systems.png",
			"implies": "PHP",
			"meta": {
				"generator": "Open Journal Systems(?: ([\\d.]+))?\\;version:\\1"
			},
			"website": "http://pkp.sfu.ca/ojs"
		},
		"Open Web Analytics": {
			"cats": [
				"10"
			],
			"env": "^_?owa_",
			"html": "<!-- (?:Start|End) Open Web Analytics Tracker -->",
			"icon": "Open Web Analytics.png",
			"website": "http://openwebanalytics.com"
		},
		"Open eShop": {
			"cats": [
				"6"
			],
			"icon": "Open eShop.png",
			"implies": "PHP",
			"meta": {
				"author": "open-eshop\\.com",
				"copyright": "Open eShop ?([0-9.]+)?\\;version:\\1"
			},
			"website": "http://open-eshop.com/"
		},
		"OpenCart": {
			"cats": [
				"6"
			],
			"html": "(?:index\\.php\\?route=[a-z]+/|Powered By <a href=\"[^>]+OpenCart)",
			"icon": "OpenCart.png",
			"implies": "PHP",
			"website": "http://www.opencart.com"
		},
		"OpenCms": {
			"cats": [
				"1"
			],
			"headers": {
				"Server": "OpenCms"
			},
			"html": "<link href=\"/opencms/",
			"icon": "OpenCms.png",
			"implies": "Java",
			"script": "opencms",
			"website": "http://www.opencms.org"
		},
		"OpenGSE": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "GSE"
			},
			"icon": "OpenGSE.png",
			"implies": "Java",
			"website": "http://code.google.com/p/opengse"
		},
		"OpenGrok": {
			"cats": [
				"19"
			],
			"headers": {
				"Set-Cookie": "OpenGrok"
			},
			"icon": "OpenGrok.png",
			"implies": "Java",
			"meta": {
				"generator": "OpenGrok(?: v?([\\d.]+))?\\;version:\\1"
			},
			"website": "http://hub.opensolaris.org/bin/view/Project+opengrok/WebHome"
		},
		"OpenLayers": {
			"cats": [
				"35"
			],
			"env": "^OpenLayers$",
			"icon": "OpenLayers.png",
			"script": "openlayers",
			"website": "http://openlayers.org"
		},
		"OpenNemas": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "OpenNemas"
			},
			"icon": "OpenNemas.png",
			"meta": {
				"generator": "OpenNemas"
			},
			"website": "http://www.opennemas.com"
		},
		"OpenResty": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "openresty(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "OpenResty.png",
			"implies": [
				"Nginx",
				"Lua"
			],
			"website": "http://openresty.org"
		},
		"OpenSSL": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "OpenSSL(?:/([\\d.]+[a-z]?))?\\;version:\\1"
			},
			"icon": "OpenSSL.png",
			"website": "http://openssl.org"
		},
		"OpenText Web Solutions": {
			"cats": [
				"1"
			],
			"html": "<!--[^>]+published by Open Text Web Solutions",
			"icon": "OpenText Web Solutions.png",
			"implies": "Microsoft ASP.NET",
			"website": "http://websolutions.opentext.com"
		},
		"OpenX": {
			"cats": [
				"36"
			],
			"icon": "OpenX.png",
			"script": [
				"https?://[^/]*\\.openx\\.net",
				"https?://[^/]*\\.servedbyopenx\\.com"
			],
			"website": "http://openx.com"
		},
		"Ophal": {
			"cats": [
				"1",
				"11",
				"18"
			],
			"headers": {
				"X-Powered-By": "Ophal(?: (.*))? \\(ophal\\.org\\)\\;version:\\1"
			},
			"icon": "Ophal.png",
			"implies": "Lua",
			"meta": {
				"generator": "Ophal(?: (.*))? \\(ophal\\.org\\)\\;version:\\1"
			},
			"script": "ophal\\.js",
			"website": "http://ophal.org"
		},
		"Optimizely": {
			"cats": [
				"10"
			],
			"env": "^optimizely$",
			"icon": "Optimizely.png",
			"script": "optimizely\\.com.*\\.js",
			"website": "http://optimizely.com"
		},
		"Oracle Application Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Oracle[- ]Application[- ]Server(?: Containers for J2EE)?(?:[- ](\\d[\\da-z./]+))?\\;version:\\1"
			},
			"icon": "Oracle.png",
			"website": "http://www.oracle.com/technetwork/middleware/ias/overview/index.html"
		},
		"Oracle Commerce": {
			"cats": [
				"6"
			],
			"headers": {
				"X-ATG-Version": "(?:ATGPlatform/([\\d.]+))?\\;version:\\1"
			},
			"html": "<[^>]+_dyncharset",
			"icon": "Oracle.png",
			"website": "http://www.oracle.com/applications/customer-experience/commerce/products/commerce-platform/index.html"
		},
		"Oracle Commerce Cloud": {
			"cats": [
				"6"
			],
			"headers": {
				"OracleCommerceCloud-Version": "(.*)\\;version:\\1"
			},
			"html": "<[^>]+id=\"oracle-cc\"",
			"icon": "Oracle.png",
			"website": "http://cloud.oracle.com/commerce-cloud"
		},
		"Oracle Dynamic Monitoring Service": {
			"cats": [
				"19"
			],
			"headers": {
				"x-oracle-dms-ecid": ""
			},
			"icon": "Oracle.png",
			"website": "http://oracle.com"
		},
		"Oracle HTTP Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Oracle-HTTP-Server(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Oracle.png",
			"website": "http://oracle.com"
		},
		"Oracle Recommendations On Demand": {
			"cats": [
				"10"
			],
			"icon": "Oracle.png",
			"script": "atgsvcs.+atgsvcs\\.js",
			"website": "http://www.oracle.com/us/products/applications/commerce/recommendations-on-demand/index.html"
		},
		"Oracle Web Cache": {
			"cats": [
				"23"
			],
			"headers": {
				"Server": "Oracle(?:AS)?[- ]Web[- ]Cache(?:[- /]([\\da-z./]+))?\\;version:\\1"
			},
			"icon": "Oracle.png",
			"website": "http://oracle.com"
		},
		"Orchard CMS": {
			"cats": [
				"1"
			],
			"icon": "Orchard CMS.png",
			"implies": "Microsoft ASP.NET",
			"meta": {
				"generator": "Orchard"
			},
			"website": "http://orchardproject.net"
		},
		"Outbrain": {
			"cats": [
				"5"
			],
			"env": "^(?:OutbrainPermaLink|OB_releaseVer)$",
			"icon": "Outbrain.png",
			"script": "widgets\\.outbrain\\.com/outbrain\\.js",
			"website": "http://outbrain.com"
		},
		"Outlook Web App": {
			"cats": [
				"30"
			],
			"env": "^IsOwaPremiumBrowser$",
			"html": "<link\\s[^>]*href=\"[^\"]*?([\\d.]+)/themes/resources/owafont\\.css\\;version:\\1",
			"icon": "Outlook Web App.png",
			"implies": "Microsoft ASP.NET",
			"url": "/owa/auth/log(?:on|off)\\.aspx",
			"website": "http://help.outlook.com"
		},
		"PANSITE": {
			"cats": [
				"1"
			],
			"icon": "PANSITE.png",
			"meta": {
				"generator": "PANSITE"
			},
			"website": "http://panvision.de/Produkte/Content_Management/index.asp"
		},
		"PDF.js": {
			"cats": [
				"19"
			],
			"env": "^PDFJS$",
			"html": "<\\/div>\\s*<!-- outerContainer -->\\s*<div\\s*id=\"printContainer\"><\\/div>",
			"icon": "PDF.js.svg",
			"url": "/web/viewer\\.html?file=[^&]\\.pdf",
			"website": "http://mozilla.github.io/pdf.js/"
		},
		"PHP": {
			"cats": [
				"27"
			],
			"headers": {
				"Server": "php/?([\\d.]+)?\\;version:\\1",
				"Set-Cookie": "PHPSESSID",
				"X-Powered-By": "php/?([\\d.]+)?\\;version:\\1"
			},
			"icon": "PHP.svg",
			"url": "\\.php(?:$|\\?)",
			"website": "http://php.net"
		},
		"PHP-Fusion": {
			"cats": [
				"1"
			],
			"html": "Powered by <a href=\"[^>]+php-fusion",
			"icon": "PHP-Fusion.png",
			"implies": "PHP",
			"website": "http://www.php-fusion.co.uk"
		},
		"PHP-Nuke": {
			"cats": [
				"1"
			],
			"html": "<[^>]+Powered by PHP-Nuke",
			"icon": "PHP-Nuke.png",
			"implies": "PHP",
			"meta": {
				"generator": "PHP-Nuke"
			},
			"website": "http://phpnuke.org"
		},
		"Pagekit": {
			"cats": [
				"1"
			],
			"icon": "Pagekit.png",
			"meta": {
				"generator": "Pagekit"
			},
			"website": "http://pagekit.com"
		},
		"Pardot": {
			"cats": [
				"32"
			],
			"env": "^pi(?:Tracker|Hostname|Protocol|CId|AId)$",
			"headers": {
				"X-Pardot-LB": "",
				"X-Pardot-Route": "",
				"X-Pardot-Rsp": ""
			},
			"icon": "Pardot.png",
			"website": "http://pardot.com"
		},
		"Parse.ly": {
			"cats": [
				"10"
			],
			"env": "^PARSELY$",
			"icon": "Parse.ly.png",
			"website": "http://parse.ly"
		},
		"Paths.js": {
			"cats": [
				"25"
			],
			"script": "paths(?:\\.min)?\\.js",
			"website": "http://github.com/andreaferretti/paths-js"
		},
		"PayPal": {
			"cats": [
				"41"
			],
			"env": "^PAYPAL$",
			"html": "<input[^>]+_s-xclick",
			"icon": "PayPal.png",
			"script": "paypalobjects\\.com/js",
			"website": "http://paypal.com"
		},
		"PencilBlue": {
			"cats": [
				"1",
				"11"
			],
			"headers": {
				"X-Powered-By": "PencilBlue"
			},
			"icon": "PencilBlue.png",
			"implies": "Node.js",
			"website": "http://pencilblue.org"
		},
		"Penguin": {
			"cats": [
				"18"
			],
			"env": "^penguin$",
			"html": "<link[^>]+?href=\"[^\"]+penguin(?:\\.min)?\\.css",
			"icon": "Penguin.svg",
			"script": "penguin(?:\\.min)?\\.js",
			"website": "http://penguin.docs.bqws.io"
		},
		"Percussion": {
			"cats": [
				"1"
			],
			"html": "<[^>]+class=\"perc-region\"",
			"icon": "Percussion.png",
			"meta": {
				"generator": "(?:Percussion|Rhythmyx)"
			},
			"website": "http://percussion.com"
		},
		"PerfSONAR-PS": {
			"cats": [
				"19"
			],
			"headers": {
				"User-agent": "perfSONAR-PS/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "PerfSONAR-PS.png",
			"website": "http://psps.perfsonar.net"
		},
		"Perl": {
			"cats": [
				"27"
			],
			"headers": {
				"Server": "\bPerl\b(?: ?/?v?([\\d.]+))?\\;version:\\1"
			},
			"icon": "Perl.png",
			"website": "http://perl.org"
		},
		"Petrojs": {
			"cats": [
				"12"
			],
			"env": "^petrojs$",
			"icon": "Petrojs.png",
			"script": [
				"petrojs(?:\\-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"(?:/([\\d.]+)/)?petrojs(?:\\.min)?\\.js\\;version:\\1"
			],
			"website": "http://petrojs.thepetronics.com"
		},
		"Phabricator": {
			"cats": [
				"13",
				"47"
			],
			"headers": {
				"Set-Cookie": "phsid="
			},
			"html": "<[^>]+(?:class|id)=\"phabricator-",
			"icon": "Phabricator.png",
			"implies": [
				"PHP"
			],
			"script": "/phabricator/[a-f0-9]{8}/rsrc/js/phui/[a-z-]+\\.js$",
			"website": "http://phacility.com"
		},
		"Phaser": {
			"cats": [
				"12"
			],
			"env": "Phaser",
			"icon": "Phaser.png",
			"website": "http://phaser.io"
		},
		"Phusion Passenger": {
			"cats": [
				"22"
			],
			"headers": {
				"X-Powered-By": "^Phusion Passenger"
			},
			"icon": "Phusion Passenger.png",
			"website": "http://phusionpassenger.com"
		},
		"Piano Solo": {
			"cats": [
				"43"
			],
			"env": "^PianoMedia$",
			"headers": {
				"Set-Cookie": "pianovisitkey"
			},
			"icon": "Piano Solo.png",
			"website": "http://www.pianomedia.com/products"
		},
		"Pimcore": {
			"cats": [
				"1",
				"6",
				"18"
			],
			"headers": {
				"X-Powered-By": "pimcore"
			},
			"icon": "pimcore.svg",
			"implies": "PHP",
			"website": "http://pimcore.org"
		},
		"Pinterest": {
			"cats": [
				"5"
			],
			"icon": "Pinterest.svg",
			"script": "//assets\\.pinterest\\.com/js/pinit\\.js",
			"website": "http://pinterest.com"
		},
		"pirobase CMS": {
			"cats": [
				"1"
			],
			"html": "<[^<]+=\"[^\"]*site/[a-z0-9/._-]*/resourceCached/[a-z0-9/._-]*\"[^>]*>|[^<]+cbi:///cms/[^>]+",
			"icon": "pirobaseCMS.svg",
			"implies": "Java",
			"website": "https://www.pirobase-imperia.com/de/produkte/produktuebersicht/pirobase-cms"
		},
		"Piwik": {
			"cats": [
				"10"
			],
			"env": [
				"^Piwik$",
				"^_paq$"
			],
			"headers": {
				"Set-Cookie": "PIWIK_SESSID="
			},
			"icon": "Piwik.png",
			"meta": {
				"apple-itunes-app": "app-id=737216887",
				"generator": "Piwik - Open Source Web Analytics",
				"google-play-app": "app-id=org\\.piwik\\.mobile2"
			},
			"script": "piwik\\.js|piwik\\.php",
			"website": "http://piwik.org"
		},
		"Planet": {
			"cats": [
				"49"
			],
			"icon": "Planet.png",
			"meta": {
				"generator": "^Planet(?:/([\\d.]+))?\\;version:\\1"
			},
			"website": "http://planetplanet.org"
		},
		"Play": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "PLAY_SESSION"
			},
			"icon": "Play.svg",
			"implies": "Scala",
			"website": "https://www.playframework.com"
		},
		"Plentymarkets": {
			"cats": [
				"6"
			],
			"icon": "Plentymarkets.png",
			"meta": {
				"generator": "plentymarkets"
			},
			"website": "http://plentymarkets.eu"
		},
		"Plesk": {
			"cats": [
				"9"
			],
			"headers": {
				"X-Powered-By": "PleskLin",
				"X-Powered-By-Plesk": "Plesk"
			},
			"icon": "Plesk.png",
			"script": "common\\.js\\?plesk",
			"website": "http://plesk.com"
		},
		"Pligg": {
			"cats": [
				"1"
			],
			"env": "^pligg_",
			"html": "<span[^>]+id=\"xvotes-0",
			"icon": "Pligg.png",
			"meta": {
				"generator": "Pligg"
			},
			"website": "http://pligg.com"
		},
		"Plone": {
			"cats": [
				"1"
			],
			"icon": "Plone.png",
			"implies": "Python",
			"meta": {
				"generator": "Plone"
			},
			"website": "http://plone.org"
		},
		"Plotly": {
			"cats": [
				"25"
			],
			"env": "Plotly",
			"icon": "Plotly.png",
			"implies": "D3",
			"script": "https?://cdn\\.plot\\.ly/plotly",
			"website": "http://plot.ly/javascript/"
		},
		"Plura": {
			"cats": [
				"19"
			],
			"html": "<iframe src=\"[^>]+pluraserver\\.com",
			"icon": "Plura.png",
			"website": "http://www.pluraprocessing.com"
		},
		"Po.st": {
			"cats": [
				"5"
			],
			"env": "^pwidget_config$",
			"icon": "Po.st.png",
			"website": "http://www.po.st/"
		},
		"Polymer": {
			"cats": [
				"12"
			],
			"env": "^Polymer$",
			"html": "(?:<polymer-[^>]+|<link[^>]+rel=\"import\"[^>]+/polymer\\.html\")",
			"icon": "Polymer.png",
			"script": "polymer\\.js",
			"website": "http://polymer-project.org"
		},
		"Posterous": {
			"cats": [
				"1",
				"11"
			],
			"env": "^Posterous",
			"html": "<div class=\"posterous",
			"icon": "Posterous.png",
			"website": "http://posterous.com"
		},
		"PostgreSQL": {
			"cats": [
				"34"
			],
			"icon": "PostgreSQL.png",
			"website": "http://www.postgresql.org/"
		},
		"Powergap": {
			"cats": [
				"6"
			],
			"html": [
				"<a[^>]+title=\"POWERGAP",
				"<input type=\"hidden\" name=\"shopid\""
			],
			"icon": "Powergap.png",
			"website": "http://powergap.de"
		},
		"Prefix-Free": {
			"cats": [
				"19"
			],
			"env": "^PrefixFree$",
			"icon": "Prefix-Free.png",
			"script": "prefixfree\\.js",
			"website": "http://leaverou.github.io/prefixfree/"
		},
		"PrestaShop": {
			"cats": [
				"6"
			],
			"env": [
				"^freeProductTranslation$\\;confidence:25",
				"^freeProductTranslation$\\;confidence:25",
				"^priceDisplayMethod$\\;confidence:25",
				"^priceDisplayPrecision$\\;confidence:25"
			],
			"headers": {
				"Powered-By": "^Prestashop$",
				"Set-Cookie": "^PrestaShop"
			},
			"html": [
				"Powered by <a\\s+[^>]+>PrestaShop",
				"<!-- /Block [a-z ]+ module (?:HEADER|TOP)?\\s?-->",
				"<!-- /Module Block [a-z ]+ -->"
			],
			"icon": "PrestaShop.png",
			"implies": "PHP",
			"meta": {
				"generator": "PrestaShop"
			},
			"website": "http://www.prestashop.com"
		},
		"Project Wonderful": {
			"cats": [
				"36"
			],
			"env": "^pw_adloader$",
			"html": "<div[^>]+id=\"pw_adbox_",
			"icon": "Project Wonderful.png",
			"script": "^https?://(?:www\\.)?projectwonderful\\.com/(?:pwa\\.js|gen\\.php)",
			"website": "http://projectwonderful.com"
		},
		"Prospector": {
			"cats": [
				"36"
			],
			"html": "<[^>]+data-name=['\"]prospectscript",
			"icon": "Prospector.png",
			"script": "processprospector\\.js",
			"website": "http://prospector.io"
		},
		"Prototype": {
			"cats": [
				"12"
			],
			"env": "^Prototype$",
			"icon": "Prototype.png",
			"script": "(?:prototype|protoaculous)(?:-([\\d.]*[\\d]))?.*\\.js\\;version:\\1",
			"website": "http://www.prototypejs.org"
		},
		"Protovis": {
			"cats": [
				"25"
			],
			"env": "^protovis$",
			"script": "protovis.*\\.js",
			"website": "http://mbostock.github.com/protovis"
		},
		"Proximis Omnichannel": {
			"cats": [
				"6",
				"1"
			],
			"env": "^__change$",
			"html": "<html[^>]+data-ng-app=\"RbsChangeApp\"",
			"icon": "Proximis Omnichannel.png",
			"implies": [
				"PHP",
				"AngularJS"
			],
			"meta": {
				"generator": "Proximis Omnichannel"
			},
			"website": "http://www.proximis.com"
		},
		"PubMatic": {
			"cats": [
				"36"
			],
			"icon": "PubMatic.png",
			"script": "https?://[^/]*\\.pubmatic\\.com",
			"website": "http://www.pubmatic.com/"
		},
		"Public CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "PUBLICCMS_USER",
				"X-Powered-PublicCMS": "(.*)\\;version:\\1"
			},
			"icon": "Public CMS.png",
			"implies": "Java",
			"website": "http://www.publiccms.com"
		},
		"Pure CSS": {
			"cats": [
				"18"
			],
			"html": "<link[^>]+(?:([\\d.])+/)?pure(?:-min)?\\.css\\;version:\\1",
			"icon": "Pure CSS.png",
			"website": "http://purecss.io"
		},
		"Pygments": {
			"cats": [
				"19"
			],
			"html": "<link[^>]+pygments.css[\"']",
			"icon": "pygments.png",
			"website": "http://pygments.org"
		},
		"PyroCMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "pyrocms",
				"X-Streams-Distribution": "PyroCMS"
			},
			"icon": "PyroCMS.png",
			"implies": "Laravel",
			"website": "http://pyrocms.com"
		},
		"Python": {
			"cats": [
				"27"
			],
			"headers": {
				"Server": "(?:^|\\s)Python(?:/([\\d.]+))?\\;confidence:50\\;version:\\1"
			},
			"icon": "Python.png",
			"website": "http://python.org"
		},
		"Quantcast": {
			"cats": [
				"10"
			],
			"env": "^quantserve$",
			"icon": "Quantcast.png",
			"script": "edge\\.quantserve\\.com/quant\\.js",
			"website": "http://www.quantcast.com"
		},
		"Question2Answer": {
			"cats": [
				"15"
			],
			"html": "<!-- Powered by Question2Answer",
			"icon": "question2answer.png",
			"implies": "PHP",
			"script": "\\./qa-content/qa-page\\.js\\?([0-9.]+)\\;version:\\1",
			"website": "http://www.question2answer.org"
		},
		"Quick.CMS": {
			"cats": [
				"1"
			],
			"html": "<a href=\"[^>]+opensolution\\.org/\">CMS by",
			"icon": "Quick.CMS.png",
			"meta": {
				"generator": "Quick\\.CMS(?: v([\\d.]+))?\\;version:\\1"
			},
			"website": "http://opensolution.org"
		},
		"Quick.Cart": {
			"cats": [
				"6"
			],
			"html": "<a href=\"[^>]+opensolution\\.org/\">(?:Shopping cart by|Sklep internetowy)",
			"icon": "Quick.Cart.png",
			"meta": {
				"generator": "Quick\\.Cart(?: v([\\d.]+))?\\;version:\\1"
			},
			"website": "http://opensolution.org"
		},
		"Quill": {
			"cats": [
				"24"
			],
			"env": "^Quill$",
			"icon": "Quill.png",
			"website": "http://quilljs.com"
		},
		"RAID HTTPServer": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "RAID HTTPServer(?:/([\\d.]+))?\\;version:\\1"
			},
			"website": "http://example.com"
		},
		"RBS Change": {
			"cats": [
				"1",
				"6"
			],
			"html": "<html[^>]+xmlns:change=",
			"icon": "RBS Change.png",
			"implies": "PHP",
			"meta": {
				"generator": "RBS Change"
			},
			"website": "http://www.rbschange.fr"
		},
		"RCMS": {
			"cats": [
				"1"
			],
			"icon": "RCMS.png",
			"meta": {
				"generator": "^(?:RCMS|ReallyCMS)"
			},
			"website": "http://www.rcms.fi"
		},
		"RD Station": {
			"cats": [
				"32"
			],
			"env": "^RDStation$",
			"icon": "RD Station.png",
			"script": "d335luupugsy2\\.cloudfront\\.net/js/loader-scripts/.*-loader\\.js",
			"website": "http://rdstation.com.br"
		},
		"RDoc": {
			"cats": [
				"4"
			],
			"html": [
				"<link[^>]+href=\"[^\"]*rdoc-style\\.css",
				"Generated by <a[^>]+href=\"https?://rdoc\\.rubyforge\\.org[^>]+>RDoc</a> ([\\d.]*\\d)\\;version:\\1"
			],
			"icon": "RDoc.png",
			"implies": "Ruby",
			"website": "http://github.com/RDoc/RDoc"
		},
		"RackCache": {
			"cats": [
				"23"
			],
			"headers": {
				"X-Rack-Cache": ""
			},
			"icon": "RackCache.png",
			"implies": "Ruby",
			"website": "http://github.com/rtomayko/rack-cache"
		},
		"RainLoop": {
			"cats": [
				"30"
			],
			"env": "^rainloop",
			"headers": {
				"Server": "RainLoop"
			},
			"html": [
				"<meta [^>]*(?:content=\"([^\"]+)[^>]+ id=\"rlAppVersion\"|id=\"rlAppVersion\"[^>]+ content=\"([^\"]+))\\;version:\\1?\\1:\\2",
				"<link[^>]* href=\"[^\"]*rainloop/v/([^/]+)\\;version:\\1"
			],
			"icon": "RainLoop.png",
			"implies": "PHP",
			"script": "rainloop/v/([^/]+)\\;version:\\1",
			"website": "http://rainloop.net"
		},
		"Rakuten DBCore": {
			"cats": [
				"6"
			],
			"icon": "Rakuten DBCore.png",
			"meta": {
				"generator": "Rakuten DBCore",
				"generator:site": "http://ecservice.rakuten.com.br"
			},
			"website": "http://ecservice.rakuten.com.br"
		},
		"Ramda": {
			"cats": [
				"12"
			],
			"icon": "Ramda.png",
			"script": "ramda.*\\.js",
			"website": "http://ramdajs.com"
		},
		"Raphael": {
			"cats": [
				"25"
			],
			"env": "^Raphael$",
			"icon": "Raphael.png",
			"script": "raphael.*\\.js",
			"website": "http://raphaeljs.com"
		},
		"Rapid Logic": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Rapid Logic(?:/([\\d.]+))?\\;version:\\1"
			},
			"website": "http://example.com"
		},
		"Raspbian": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Raspbian",
				"X-Powered-By": "Raspbian"
			},
			"icon": "Raspbian.svg",
			"website": "https://www.raspbian.org/"
		},
		"Rdf": {
			"cats": [
				"27"
			],
			"website": "https://www.w3.org/RDF/"
		},
		"React": {
			"cats": [
				"12"
			],
			"env": "^React$",
			"html": "<[^>]+data-react",
			"icon": "React.png",
			"script": [
				"react(?:\\-with\\-addons)?(?:\\-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"/([\\d.]+)/react(?:\\.min)?\\.js\\;version:\\1",
				"react.*\\.js"
			],
			"website": "http://facebook.github.io/react"
		},
		"Red Hat": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Red Hat",
				"X-Powered-By": "Red Hat"
			},
			"icon": "Red Hat.png",
			"website": "http://redhat.com"
		},
		"Reddit": {
			"cats": [
				"2"
			],
			"env": "^reddit$",
			"html": "(?:<a[^>]+Powered by Reddit|powered by <a[^>]+>reddit<)",
			"icon": "Reddit.png",
			"implies": "Python",
			"url": "^(?:www\\.)?reddit\\.com",
			"website": "http://code.reddit.com"
		},
		"Redmine": {
			"cats": [
				"13"
			],
			"html": "Powered by <a href=\"[^>]+Redmine",
			"icon": "Redmine.png",
			"implies": "Ruby on Rails",
			"meta": {
				"description": "Redmine"
			},
			"website": "http://www.redmine.org"
		},
		"Reinvigorate": {
			"cats": [
				"10"
			],
			"env": "^reinvigorate$",
			"icon": "Reinvigorate.png",
			"website": "http://www.reinvigorate.net"
		},
		"RequireJS": {
			"cats": [
				"12"
			],
			"env": "^requirejs$",
			"icon": "RequireJS.png",
			"script": "require.*\\.js",
			"website": "http://requirejs.org"
		},
		"Resin": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "^Resin(?:/(\\S*))?\\;version:\\1"
			},
			"icon": "Resin.png",
			"implies": "Java",
			"website": "http://caucho.com"
		},
		"Reveal.js": {
			"cats": [
				"12"
			],
			"env": "^Reveal$",
			"icon": "Reveal.js.png",
			"implies": "Highlight.js",
			"script": "(?:^|/)reveal(?:\\.min)?\\.js",
			"website": "http://lab.hakim.se/reveal-js"
		},
		"Revel": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "^REVEL_(?:FLASH|SESSION)="
			},
			"icon": "Revel.png",
			"implies": "Go",
			"website": "http://revel.github.io"
		},
		"Rickshaw": {
			"cats": [
				"25"
			],
			"env": "^Rickshaw$",
			"implies": "D3",
			"script": "rickshaw(?:\\.min)?\\.js",
			"website": "http://code.shutterstock.com/rickshaw/"
		},
		"RightJS": {
			"cats": [
				"12"
			],
			"env": "^RightJS$",
			"icon": "RightJS.png",
			"script": "right\\.js",
			"website": "http://rightjs.org"
		},
		"Riot": {
			"cats": [
				"12"
			],
			"env": "^riot$",
			"icon": "Riot.png",
			"script": "riot(?:\\+compiler)?(?:\\.min)?\\.js",
			"website": "http://muut.com/riotjs"
		},
		"RiteCMS": {
			"cats": [
				"1"
			],
			"icon": "RiteCMS.png",
			"implies": [
				"PHP",
				"SQLite\\;confidence:50"
			],
			"meta": {
				"generator": "^RiteCMS(?: (.+))?\\;version:\\1"
			},
			"website": "http://ritecms.com"
		},
		"Roadiz CMS": {
			"cats": [
				"1",
				"11"
			],
			"headers": {
				"X-Powered-By": "Roadiz CMS"
			},
			"icon": "Roadiz CMS.png",
			"implies": [
				"PHP",
				"Symfony"
			],
			"meta": {
				"generator": "^Roadiz ([a-z0-9\\s\\.]+) - \\;version:\\1"
			},
			"website": "http://www.roadiz.io"
		},
		"Robin": {
			"cats": [
				"6"
			],
			"env": [
				"_robin_getRobinJs",
				"robin_settings",
				"robin_storage_settings"
			],
			"icon": "Robin.png",
			"website": "http://www.robinhq.com"
		},
		"RockRMS": {
			"cats": [
				"1",
				"11",
				"32"
			],
			"icon": "RockRMS.svg",
			"implies": [
				"Windows Server",
				"IIS",
				"Microsoft ASP.NET"
			],
			"meta": {
				"generator": "^Rock v.*"
			},
			"website": "http://www.rockrms.com"
		},
		"RoundCube": {
			"cats": [
				"30"
			],
			"env": "^(?:rcmail|rcube_|roundcube)",
			"html": "<title>RoundCube",
			"icon": "RoundCube.png",
			"implies": "PHP",
			"website": "http://roundcube.net"
		},
		"Rubicon Project": {
			"cats": [
				"36"
			],
			"icon": "Rubicon Project.png",
			"script": "https?://[^/]*\\.rubiconproject\\.com",
			"website": "http://rubiconproject.com/"
		},
		"Ruby": {
			"cats": [
				"27"
			],
			"headers": {
				"Server": "(?:Mongrel|WEBrick|Ruby)"
			},
			"icon": "Ruby.png",
			"website": "http://ruby-lang.org"
		},
		"Ruby on Rails": {
			"cats": [
				"18"
			],
			"headers": {
				"Server": "(?:mod_rails|mod_rack|Phusion(?:\\.|_)Passenger)\\;confidence:50",
				"X-Powered-By": "(?:mod_rails|mod_rack|Phusion[\\._ ]Passenger)(?: \\(mod_rails/mod_rack\\))?(?: ?/?([\\d\\.]+))?\\;version:\\1\\;confidence:50"
			},
			"icon": "Ruby on Rails.png",
			"implies": "Ruby",
			"meta": {
				"csrf-param": "authenticity_token\\;confidence:50"
			},
			"script": "/assets/application-[a-z\\d]{32}/\\.js\\;confidence:50",
			"website": "http://rubyonrails.org"
		},
		"Ruxit": {
			"cats": [
				"10"
			],
			"icon": "Ruxit.png",
			"script": "ruxitagentjs",
			"website": "http://ruxit.com"
		},
		"RxJS": {
			"cats": [
				"12"
			],
			"env": "^Rx$\\;confidence:20",
			"icon": "RxJS.png",
			"script": "rx(?:\\.\\w+)?(?:\\.compat)?(?:\\.min)?\\.js",
			"website": "http://reactivex.io"
		},
		"S.Builder": {
			"cats": [
				"1"
			],
			"icon": "S.Builder.png",
			"meta": {
				"generator": "S\\.Builder"
			},
			"website": "http://www.sbuilder.ru"
		},
		"SAP": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "SAP NetWeaver Application Server"
			},
			"icon": "SAP.png",
			"website": "http://sap.com"
		},
		"SDL Tridion": {
			"cats": [
				"1"
			],
			"html": "<img[^>]+_tcm\\d{2,3}-\\d{6}\\.",
			"icon": "SDL Tridion.png",
			"website": "http://www.sdl.com/products/tridion"
		},
		"SIMsite": {
			"cats": [
				"1"
			],
			"icon": "SIMsite.png",
			"meta": {
				"SIM.medium": ""
			},
			"script": "/sim(?:site|core)/js",
			"website": "http://simgroep.nl/internet/portfolio-contentbeheer_41623/"
		},
		"SMF": {
			"cats": [
				"2"
			],
			"env": "^smf_",
			"icon": "SMF.png",
			"implies": "PHP",
			"website": "http://www.simplemachines.org"
		},
		"SOBI 2": {
			"cats": [
				"19"
			],
			"html": "(?:<!-- start of Sigsiu Online Business Index|<div[^>]* class=\"sobi2)",
			"icon": "SOBI 2.png",
			"implies": "Joomla",
			"website": "http://www.sigsiu.net/sobi2.html"
		},
		"SPDY": {
			"cats": [
				"19"
			],
			"excludes": "HTTP/2",
			"headers": {
				"X-Firefox-Spdy": "\\d\\.\\d"
			},
			"icon": "SPDY.png",
			"website": "http://chromium.org/spdy"
		},
		"SPIP": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Spip-Cache": ""
			},
			"icon": "SPIP.png",
			"implies": "PHP",
			"meta": {
				"generator": "(?:^|\\s)SPIP(?:\\s([\\d.]+(?:\\s\\[\\d+\\])?))?\\;version:\\1"
			},
			"website": "http://www.spip.net"
		},
		"SQL Buddy": {
			"cats": [
				"3"
			],
			"html": "(?:<title>SQL Buddy</title>|<[^>]+onclick=\"sideMainClick\\(\"home\\.php)",
			"icon": "SQL Buddy.png",
			"implies": "PHP",
			"website": "http://www.sqlbuddy.com"
		},
		"SQLite": {
			"cats": [
				"34"
			],
			"icon": "SQLite.png",
			"website": "http://www.sqlite.org"
		},
		"SUSE": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "SUSE(?:/?\\s?-?([\\d.]+))?\\;version:\\1",
				"X-Powered-By": "SUSE(?:/?\\s?-?([\\d.]+))?\\;version:\\1"
			},
			"icon": "SUSE.png",
			"website": "http://suse.com"
		},
		"SWFObject": {
			"cats": [
				"19"
			],
			"env": "^SWFObject$",
			"icon": "SWFObject.png",
			"script": "swfobject.*\\.js",
			"website": "http://github.com/swfobject/swfobject"
		},
		"Saia PCD": {
			"cats": [
				"45"
			],
			"headers": {
				"Server": "Saia PCD(?:([/a-z\\d.]+))?\\;version:\\1"
			},
			"icon": "Saia PCD.png",
			"website": "http://saia-pcd.com"
		},
		"Sails.js": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "^sails\\.sid$",
				"X-Powered-By": "^Sails$"
			},
			"icon": "Sails.js.svg",
			"implies": "Express",
			"website": "http://sailsjs.org"
		},
		"Salesforce": {
			"cats": [
				"53"
			],
			"env": "^SFDC(?:App|Cmp|Page|SessionVars)$",
			"headers": {
				"Set-Cookie": "com\\.salesforce\\."
			},
			"html": "<[^>]+=\"brandQuaternaryFgrs\"",
			"icon": "Salesforce.svg",
			"website": "https://www.salesforce.com"
		},
		"Salesforce Commerce Cloud": {
			"cats": [
				"6"
			],
			"env": "^dwAnalytics$",
			"headers": {
				"Server": "Demandware eCommerce Server"
			},
			"html": "<[^>]+demandware\\.edgesuite",
			"icon": "Salesforce.svg",
			"website": "http://demandware.com"
		},
		"Sarka-SPIP": {
			"cats": [
				"1"
			],
			"icon": "Sarka-SPIP.png",
			"implies": "SPIP",
			"meta": {
				"generator": "Sarka-SPIP(?:\\s([\\d.]+))?\\;version:\\1"
			},
			"website": "http://sarka-spip.net"
		},
		"Scala": {
			"cats": [
				"27"
			],
			"icon": "Scala.png",
			"website": "http://www.scala-lang.org"
		},
		"Schneider": {
			"cats": [
				"45"
			],
			"icon": "Schneider.png",
			"website": "http://schneider-electric.com"
		},
		"Schneider Web Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Schneider-WEB(?:/V?([\\d.]+))?\\;version:\\1"
			},
			"icon": "Schneider.png",
			"implies": [
				"Schneider"
			],
			"website": "http://schneider-electric.com"
		},
		"Scholica": {
			"cats": [
				"21"
			],
			"headers": {
				"X-Scholica-Version": ""
			},
			"icon": "Scholica.svg",
			"website": "http://scholica.com"
		},
		"Scientific Linux": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Scientific Linux",
				"X-Powered-By": "Scientific Linux"
			},
			"icon": "Scientific Linux.png",
			"website": "http://scientificlinux.org"
		},
		"Segment": {
			"cats": [
				"10"
			],
			"env": "^analytics$",
			"html": "<script[\\s\\S]*cdn\\.segment\\.com/analytics.js[\\s\\S]*script>",
			"icon": "Segment.png",
			"script": "cdn\\.segment\\.com/analytics\\.js",
			"website": "http://segment.com"
		},
		"Select2": {
			"cats": [
				"12"
			],
			"icon": "Select2.png",
			"implies": "jQuery",
			"script": "select2.*\\.js",
			"website": "http://select2.github.io"
		},
		"Semantic-ui": {
			"cats": [
				"18"
			],
			"html": [
				"(?:<div class=\"ui\\s[^>]+\">)\\;confidence:30",
				"(?:<link[^>]+semantic(?:\\.css|\\.min\\.css)\">)"
			],
			"icon": "Semantic-ui.png",
			"script": "(?:semantic(?:\\.js|\\.min\\.js))",
			"website": "http://semantic-ui.com"
		},
		"Sencha Touch": {
			"cats": [
				"12",
				"26"
			],
			"icon": "Sencha Touch.png",
			"script": "sencha-touch.*\\.js",
			"website": "http://sencha.com/products/touch"
		},
		"Sentinel Keys Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "SentinelKeysServer\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "Sentinel.png",
			"website": "http://www.safenet-inc.com/software-monetization/sentinel-rms"
		},
		"Sentinel License Monitor": {
			"cats": [
				"19"
			],
			"html": "<title>Sentinel (?:Keys )?License Monitor</title>",
			"icon": "Sentinel.png",
			"website": "http://www.safenet-inc.com/software-monetization/sentinel-rms/"
		},
		"Sentinel Protection Server": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "SentinelProtectionServer\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "Sentinel.png",
			"website": "http://www.safenet-inc.com/software-monetization/sentinel-rms/"
		},
		"Serendipity": {
			"cats": [
				"1",
				"11"
			],
			"icon": "Serendipity.png",
			"implies": "PHP",
			"meta": {
				"Powered-By": "Serendipity v\\.(.+)\\;version:\\1",
				"generator": "Serendipity"
			},
			"website": "http://s9y.org"
		},
		"Shadow": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "ShadowFramework"
			},
			"icon": "Shadow.png",
			"implies": "PHP",
			"website": "http://shadow-technologies.co.uk"
		},
		"Shapecss": {
			"cats": [
				"18"
			],
			"env": "^Shapecss$",
			"html": "<link[^>]* href=\"[^\"]*shapecss(?:\\.min)?\\.css",
			"icon": "Shapecss.svg",
			"script": [
				"shapecss[-.]([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"/([\\d.]+)/shapecss(?:\\.min)?\\.js\\;version:\\1",
				"shapecss.*\\.js"
			],
			"website": "https://shapecss.com"
		},
		"ShareThis": {
			"cats": [
				"5"
			],
			"env": "^SHARETHIS$",
			"icon": "ShareThis.png",
			"script": "w\\.sharethis\\.com/",
			"website": "http://sharethis.com"
		},
		"ShellInABox": {
			"cats": [
				"46"
			],
			"env": "^ShellInABox$",
			"html": [
				"<title>Shell In A Box</title>",
				"must be enabled for ShellInABox</noscript>"
			],
			"icon": "ShellInABox.png",
			"website": "http://shellinabox.com"
		},
		"ShinyStat": {
			"cats": [
				"10"
			],
			"env": "^SSsdk$",
			"html": "<img[^>]*\\s+src=['\"]?https?://www\\.shinystat\\.com/cgi-bin/shinystat\\.cgi\\?[^'\"\\s>]*['\"\\s/>]",
			"icon": "ShinyStat.png",
			"script": "^https?://codice(?:business|ssl|pro|isp)?\\.shinystat\\.com/cgi-bin/getcod\\.cgi",
			"website": "http://shinystat.com"
		},
		"Shopalize": {
			"cats": [
				"5",
				"10"
			],
			"env": "^Shopalize$",
			"icon": "Shopalize.png",
			"website": "http://shopalize.com"
		},
		"Shopatron": {
			"cats": [
				"6"
			],
			"env": "^shptUrl$",
			"html": [
				"<body class=\"shopatron",
				"<img[^>]+mediacdn\\.shopatron\\.com\\;confidence:50"
			],
			"icon": "Shopatron.png",
			"meta": {
				"keywords": "Shopatron"
			},
			"script": "mediacdn\\.shopatron\\.com",
			"website": "http://ecommerce.shopatron.com"
		},
		"Shopery": {
			"cats": [
				"6"
			],
			"headers": {
				"X-Shopery": ""
			},
			"icon": "Shopery.svg",
			"implies": [
				"PHP",
				"Symfony",
				"Elcodi"
			],
			"website": "http://shopery.com"
		},
		"Shopify": {
			"cats": [
				"6"
			],
			"env": "^Shopify$",
			"html": "<link[^>]+=['\"]//cdn\\.shopify\\.com",
			"icon": "Shopify.svg",
			"website": "http://shopify.com"
		},
		"Shoptet": {
			"cats": [
				"6"
			],
			"env": "^shoptet$",
			"html": "<link [^>]*href=\"https?://cdn\\.myshoptet\\.com/",
			"icon": "Shoptet.svg",
			"implies": "PHP",
			"meta": {
				"web_author": "^Shoptet"
			},
			"script": [
				"^https?://cdn\\.myshoptet\\.com/"
			],
			"website": "http://www.shoptet.cz"
		},
		"Shopware": {
			"cats": [
				"6"
			],
			"html": "<title>Shopware ([\\d\\.]+) [^<]+\\;version:\\1",
			"icon": "Shopware.png",
			"implies": [
				"PHP",
				"MySQL",
				"jQuery"
			],
			"meta": {
				"application-name": "Shopware"
			},
			"script": "(?:(shopware)|/web/cache/[0-9]{10}_.+)\\.js\\;version:\\1?4:5",
			"website": "http://shopware.com"
		},
		"Silva": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "SilvaCMS"
			},
			"icon": "Silva.png",
			"website": "http://silvacms.org"
		},
		"SilverStripe": {
			"cats": [
				"1"
			],
			"html": "Powered by <a href=\"[^>]+SilverStripe",
			"icon": "SilverStripe.svg",
			"meta": {
				"generator": "SilverStripe"
			},
			"website": "http://www.silverstripe.org"
		},
		"SimpleHTTP": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "SimpleHTTP(?:/([\\d.]+))?\\;version:\\1"
			},
			"website": "http://example.com"
		},
		"Site Meter": {
			"cats": [
				"10"
			],
			"icon": "Site Meter.png",
			"script": "sitemeter\\.com/js/counter\\.js\\?site=",
			"website": "http://www.sitemeter.com"
		},
		"SiteCatalyst": {
			"cats": [
				"10"
			],
			"env": "^s_(?:account|objectID|code|INST)$",
			"icon": "SiteCatalyst.png",
			"script": "/s[_-]code.*\\.js",
			"website": "http://www.adobe.com/solutions/digital-marketing.html"
		},
		"SiteEdit": {
			"cats": [
				"1"
			],
			"icon": "SiteEdit.png",
			"meta": {
				"generator": "SiteEdit"
			},
			"website": "http://www.siteedit.ru"
		},
		"Sitecore": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-cookie": "SC_ANALYTICS_GLOBAL_COOKIE"
			},
			"html": "<img[^>]+src=\"[^>]*/~/media/[^>]+\\.ashx",
			"icon": "Sitecore.png",
			"website": "http://sitecore.net"
		},
		"Sitefinity": {
			"cats": [
				"1"
			],
			"icon": "Sitefinity.svg",
			"implies": "Microsoft ASP.NET",
			"meta": {
				"generator": "^Sitefinity (.+)$\\;version:\\1"
			},
			"website": "http://www.sitefinity.com"
		},
		"Sivuviidakko": {
			"cats": [
				"1"
			],
			"icon": "Sivuviidakko.png",
			"meta": {
				"generator": "Sivuviidakko"
			},
			"website": "http://sivuviidakko.fi"
		},
		"Sizmek": {
			"cats": [
				"36"
			],
			"html": "(?:<a [^>]*href=\"[^/]*//[^/]*serving-sys\\.com/|<img [^>]*src=\"[^/]*//[^/]*serving-sys\\.com/)",
			"icon": "Sizmek.png",
			"script": "[^/]*//[^/]*serving-sys\\.com/",
			"website": "http://sizmek.com"
		},
		"Slimbox": {
			"cats": [
				"12"
			],
			"html": "<link [^>]*href=\"[^/]*slimbox(?:-rtl)?\\.css",
			"icon": "Slimbox.png",
			"implies": "MooTools",
			"script": "slimbox\\.js",
			"website": "http://www.digitalia.be/software/slimbox"
		},
		"Slimbox 2": {
			"cats": [
				"12"
			],
			"html": "<link [^>]*href=\"[^/]*slimbox2(?:-rtl)?\\.css",
			"icon": "Slimbox 2.png",
			"implies": "jQuery",
			"script": "slimbox2\\.js",
			"website": "http://www.digitalia.be/software/slimbox2"
		},
		"Smart Ad Server": {
			"cats": [
				"36"
			],
			"env": "^SmartAdServer$",
			"html": "<img[^>]+smartadserver\\.com\\/call",
			"icon": "Smart Ad Server.png",
			"website": "http://smartadserver.com"
		},
		"SmartSite": {
			"cats": [
				"1"
			],
			"html": "<[^>]+/smartsite\\.(?:dws|shtml)\\?id=",
			"icon": "SmartSite.png",
			"meta": {
				"author": "Redacteur SmartInstant"
			},
			"website": "http://www.seneca.nl/pub/Smartsite/Smartsite-Smartsite-iXperion"
		},
		"Smartstore": {
			"cats": [
				"6"
			],
			"icon": "Smartstore.png",
			"script": "smjslib\\.js",
			"website": "http://smartstore.com"
		},
		"Snap": {
			"cats": [
				"18",
				"22"
			],
			"headers": {
				"Server": "Snap/([.\\d]+)\\;version:\\1"
			},
			"icon": "Snap.png",
			"implies": "Haskell",
			"website": "http://snapframework.com"
		},
		"Snap.svg": {
			"cats": [
				"12"
			],
			"env": "^Snap$",
			"icon": "Snap.svg.png",
			"script": "snap\\.svg(?:-min)?\\.js",
			"website": "http://snapsvg.io"
		},
		"Snoobi": {
			"cats": [
				"10"
			],
			"env": "^snoobi$",
			"icon": "Snoobi.png",
			"script": "snoobi\\.com/snoop\\.php",
			"website": "http://www.snoobi.com"
		},
		"SobiPro": {
			"cats": [
				"19"
			],
			"env": "^SobiProUrl$",
			"icon": "SobiPro.png",
			"implies": "Joomla",
			"website": "http://sigsiu.net/sobipro.html"
		},
		"Socket.io": {
			"cats": [
				"12"
			],
			"env": "^io$",
			"icon": "Socket.io.png",
			"implies": "Node.js",
			"script": "socket.io.*\\.js",
			"website": "http://socket.io"
		},
		"Solodev": {
			"cats": [
				"1"
			],
			"headers": {
				"solodev_session": ""
			},
			"html": "<div class=[\"']dynamicDiv[\"'] id=[\"']dd\\.\\d\\.\\d(?:\\.\\d)?[\"']>",
			"icon": "Solodev.png",
			"implies": "PHP",
			"website": "http://www.solodev.com"
		},
		"Solr": {
			"cats": [
				"34"
			],
			"icon": "Solr.png",
			"implies": "Lucene",
			"website": "http://lucene.apache.org/solr/"
		},
		"Solve Media": {
			"cats": [
				"16",
				"36"
			],
			"env": "^(?:_?ACPuzzle|adcopy-puzzle-image-image$)",
			"icon": "Solve Media.png",
			"script": "^https?://api\\.solvemedia\\.com/",
			"website": "http://solvemedia.com"
		},
		"SonarQubes": {
			"cats": [
				"47"
			],
			"env": "^Sonar(?:Measures|Request)$",
			"html": [
				"<link href=\"/css/sonar\\.css?v=([\\d.]+)\\;version:\\1",
				"<title>SonarQube</title>"
			],
			"icon": "sonar.png",
			"implies": "Java",
			"meta": {
				"application-name": "^SonarQubes$"
			},
			"script": "^/js/bundles/sonar\\.js?v=([\\d.]+)$\\;version:\\1",
			"website": "https://www.sonarqube.org/"
		},
		"SoundManager": {
			"cats": [
				"12"
			],
			"env": "^(?:SoundManager|BaconPlayer)$",
			"icon": "SoundManager.png",
			"website": "http://www.schillmania.com/projects/soundmanager2"
		},
		"Sparql": {
			"cats": [
				"27"
			],
			"website": "https://www.w3.org/TR/sparql11-overview/"
		},
		"Sphinx": {
			"cats": [
				"4"
			],
			"env": "^DOCUMENTATION_OPTIONS$",
			"icon": "Sphinx.png",
			"implies": "Python",
			"website": "http://sphinx.pocoo.org"
		},
		"SpiderControl iniNet": {
			"cats": [
				"45"
			],
			"icon": "SpiderControl iniNet.png",
			"meta": {
				"generator": "iniNet SpiderControl"
			},
			"website": "http://spidercontrol.net/ininet"
		},
		"SpinCMS": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "spincms_session"
			},
			"icon": "SpinCMS.png",
			"implies": "PHP",
			"website": "http://www.spin.cw"
		},
		"Splunk": {
			"cats": [
				"19"
			],
			"html": "<p class=\"footer\">&copy; [-\\d]+ Splunk Inc\\.(?: Splunk ([\\d\\.]+(?: build [\\d\\.]*\\d)?))?[^<]*</p>\\;version:\\1",
			"icon": "Splunk.png",
			"meta": {
				"author": "Splunk Inc\\;confidence:50"
			},
			"website": "http://splunk.com"
		},
		"Splunkd": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Splunkd"
			},
			"icon": "Splunk.png",
			"website": "http://splunk.com"
		},
		"Spree": {
			"cats": [
				"6"
			],
			"html": "(?:<link[^>]*/assets/store/all-[a-z\\d]{32}\\.css[^>]+>|<script>\\s*Spree\\.(?:routes|translations|api_key))",
			"icon": "Spree.png",
			"implies": "Ruby on Rails",
			"website": "http://spreecommerce.com"
		},
		"Squarespace": {
			"cats": [
				"1"
			],
			"env": "^Squarespace",
			"headers": {
				"X-ServedBy": "squarespace"
			},
			"icon": "Squarespace.png",
			"website": "http://www.squarespace.com"
		},
		"SquirrelMail": {
			"cats": [
				"30"
			],
			"env": "^squirrelmail_loginpage_onload$",
			"html": "<small>SquirrelMail version ([.\\d]+)[^<]*<br \\;version:\\1",
			"icon": "SquirrelMail.png",
			"implies": "PHP",
			"url": "/src/webmail\\.php(?:$|\\?)",
			"website": "http://squirrelmail.org"
		},
		"Squiz Matrix": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "Squiz Matrix"
			},
			"html": "<!--\\s+Running (?:MySource|Squiz) Matrix",
			"icon": "Squiz Matrix.png",
			"implies": "PHP",
			"meta": {
				"generator": "Squiz Matrix"
			},
			"website": "http://squiz.net"
		},
		"Stackla": {
			"cats": [
				"5"
			],
			"env": "^Stackla$",
			"icon": "Stackla.png",
			"script": "assetscdn\\.stackla\\.com\\/media\\/js\\/widget\\/(?:[a-zA-Z0-9.]+)?\\.js",
			"website": "http://stackla.com/"
		},
		"Stackla Social Hub": {
			"cats": [
				"1"
			],
			"env": "^stacklaSocialHub$",
			"icon": "Stackla.png",
			"website": "http://stackla.com/"
		},
		"Stamplay": {
			"cats": [
				"34",
				"47"
			],
			"headers": {
				"Server": "Stamplay"
			},
			"icon": "Stamplay.png",
			"script": "stamplay.*\\.js",
			"website": "http://stamplay.com"
		},
		"Starlet": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "^Plack::Handler::Starlet"
			},
			"icon": "Starlet.png",
			"implies": "Perl",
			"website": "http://metacpan.org/pod/Starlet"
		},
		"StatCounter": {
			"cats": [
				"10"
			],
			"icon": "StatCounter.png",
			"script": "statcounter\\.com/counter/counter",
			"website": "http://www.statcounter.com"
		},
		"Store Systems": {
			"cats": [
				"6"
			],
			"html": "Shopsystem von <a href=[^>]+store-systems\\.de\"|\\.mws_boxTop",
			"icon": "Store Systems.png",
			"website": "http://store-systems.de"
		},
		"Storyblok": {
			"cats": [
				"1"
			],
			"icon": "storyblok.png",
			"meta": {
				"generator": "storyblok"
			},
			"website": "https://www.storyblok.com"
		},
		"Strapdown.js": {
			"cats": [
				"12"
			],
			"icon": "strapdown.js.png",
			"implies": [
				"Twitter Bootstrap",
				"Google Code Prettify"
			],
			"script": "strapdown\\.js",
			"website": "http://strapdownjs.com"
		},
		"Strato": {
			"cats": [
				"6"
			],
			"html": "<a href=\"http://www.strato.de/\" target=\"_blank\">",
			"icon": "strato.png",
			"website": "http://shop.strato.com"
		},
		"Stripe": {
			"cats": [
				"41"
			],
			"env": "^Stripe$",
			"html": "<input[^>]+data-stripe",
			"icon": "Stripe.png",
			"script": "js\\.stripe\\.com",
			"website": "http://stripe.com"
		},
		"SublimeVideo": {
			"cats": [
				"14"
			],
			"env": "^sublimevideo$",
			"icon": "SublimeVideo.png",
			"script": "cdn\\.sublimevideo\\.net/js/[a-z\\d]+\\.js",
			"website": "http://sublimevideo.net"
		},
		"Subrion": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-CMS": "Subrion CMS"
			},
			"icon": "Subrion.png",
			"implies": "PHP",
			"meta": {
				"generator": "^Subrion "
			},
			"website": "http://subrion.com"
		},
		"Sulu": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Generator": "Sulu/?(.+)?$\\;version:\\1"
			},
			"icon": "Sulu.svg",
			"implies": "Symfony",
			"website": "http://sulu.io"
		},
		"SumoMe": {
			"cats": [
				"5",
				"32"
			],
			"icon": "SumoMe.png",
			"script": "load\\.sumome\\.com",
			"website": "http://sumome.com"
		},
		"SunOS": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "SunOS( [\\d\\.]+)?\\;version:\\1",
				"Servlet-engine": "SunOS( [\\d\\.]+)?\\;version:\\1"
			},
			"icon": "Oracle.png",
			"website": "http://oracle.com/solaris"
		},
		"Supersized": {
			"cats": [
				"25"
			],
			"icon": "Supersized.png",
			"script": "supersized(?:\\.([\\d.]*[\\d]))?.*\\.js\\;version:\\1",
			"website": "http://buildinternet.com/project/supersized"
		},
		"SweetAlert": {
			"cats": [
				"12"
			],
			"env": "^swal$",
			"html": "<link[^>]+?href=\"[^\"]+sweet-alert(?:\\.min)?\\.css",
			"icon": "SweetAlert.png",
			"script": "sweet-alert(?:\\.min)?\\.js",
			"website": "http://t4t5.github.io/sweetalert/"
		},
		"SweetAlert2": {
			"cats": [
				"12"
			],
			"excludes": "SweetAlert",
			"html": "<link[^>]+?href=\"[^\"]+sweetalert2(?:\\.min)?\\.css",
			"icon": "SweetAlert2.png",
			"script": "sweetalert2(?:\\.min)?\\.js",
			"website": "https://limonte.github.io/sweetalert2"
		},
		"Swiftlet": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Generator": "Swiftlet",
				"X-Powered-By": "Swiftlet",
				"X-Swiftlet-Cache": ""
			},
			"html": "Powered by <a href=\"[^>]+Swiftlet",
			"icon": "Swiftlet.png",
			"implies": "PHP",
			"meta": {
				"generator": "Swiftlet"
			},
			"website": "http://swiftlet.org"
		},
		"Swiftype": {
			"cats": [
				"29"
			],
			"env": "Swiftype",
			"icon": "swiftype.png",
			"script": "swiftype\\.com/embed\\.js$",
			"website": "http://swiftype.com"
		},
		"Symfony": {
			"cats": [
				"18"
			],
			"icon": "Symfony.png",
			"implies": "PHP",
			"website": "http://symfony.com"
		},
		"Synology DiskStation": {
			"cats": [
				"48"
			],
			"html": "<noscript><div class='syno-no-script'",
			"icon": "Synology DiskStation.png",
			"meta": {
				"application-name": "Synology DiskStation",
				"description": "^DiskStation provides a full-featured network attached storage"
			},
			"script": "webapi/entry\\.cgi\\?api=SYNO\\.(?:Core|Filestation)\\.Desktop\\.",
			"website": "http://synology.com"
		},
		"SyntaxHighlighter": {
			"cats": [
				"19"
			],
			"env": "^SyntaxHighlighter$",
			"html": "<(?:script|link)[^>]*sh(?:Core|Brush|ThemeDefault)",
			"icon": "SyntaxHighlighter.png",
			"website": "http://github.com/syntaxhighlighter"
		},
		"TWiki": {
			"cats": [
				"8"
			],
			"headers": {
				"Set-cookie": "TWIKISID"
			},
			"html": "<img [^>]*(?:title|alt)=\"This site is powered by the TWiki collaboration platform",
			"icon": "TWiki.png",
			"implies": "Perl",
			"script": "(?:TWikiJavascripts|twikilib(?:\\.min)?\\.js)",
			"website": "http://twiki.org"
		},
		"TYPO3 CMS": {
			"cats": [
				"1"
			],
			"html": "<(?:script[^>]+ src|link[^>]+ href)=[^>]+typo3temp/",
			"icon": "TYPO3.svg",
			"implies": "PHP",
			"meta": {
				"generator": "TYPO3\\s+(?:CMS\\s+)?([\\d.]+)?(?:\\s+CMS)?\\;version:\\1"
			},
			"url": "/typo3/",
			"website": "http://www.typo3.org"
		},
		"Taiga": {
			"cats": [
				"13"
			],
			"env": "^taigaConfig$",
			"icon": "Taiga.png",
			"implies": [
				"Django",
				"AngularJS"
			],
			"website": "http://taiga.io"
		},
		"Tawk.to": {
			"cats": [
				"52"
			],
			"icon": "TawkTo.png",
			"script": "//embed\\.tawk\\.to",
			"website": "http://tawk.to"
		},
		"Tealeaf": {
			"cats": [
				"10"
			],
			"env": "^TeaLeaf$",
			"icon": "Tealeaf.png",
			"website": "http://www.tealeaf.com"
		},
		"Tealium": {
			"cats": [
				"36"
			],
			"env": "^TEALIUMENABLED$",
			"icon": "Tealium.png",
			"script": [
				"^//tags\\.tiqcdn\\.com/",
				"/tealium/utag\\.js$"
			],
			"website": "http://tealium.com"
		},
		"TeamCity": {
			"cats": [
				"44"
			],
			"html": "<span class=\"versionTag\"><span class=\"vWord\">Version</span> ([\\d\\.]+)\\;version:\\1",
			"icon": "TeamCity.png",
			"implies": [
				"jQuery",
				"Prototype"
			],
			"meta": {
				"application-name": "TeamCity"
			},
			"website": "http://jetbrains.com/teamcity"
		},
		"Telescope": {
			"cats": [
				"1"
			],
			"env": "^Telescope$",
			"icon": "Telescope.png",
			"implies": [
				"Meteor",
				"React"
			],
			"website": "http://telescopeapp.org"
		},
		"Tengine": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Tengine"
			},
			"icon": "Tengine.png",
			"website": "http://tengine.taobao.org"
		},
		"Textpattern CMS": {
			"cats": [
				"1"
			],
			"icon": "Textpattern CMS.png",
			"implies": [
				"PHP",
				"MySQL"
			],
			"meta": {
				"generator": "Textpattern"
			},
			"website": "http://textpattern.com"
		},
		"Thelia": {
			"cats": [
				"1",
				"6"
			],
			"html": "<(?:link|style|script)[^>]+/assets/frontOffice/",
			"icon": "Thelia.png",
			"implies": [
				"PHP",
				"Symfony"
			],
			"website": "http://thelia.net"
		},
		"ThinkPHP": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "ThinkPHP"
			},
			"icon": "ThinkPHP.png",
			"implies": "PHP",
			"website": "http://www.thinkphp.cn"
		},
		"TiddlyWiki": {
			"cats": [
				"1",
				"2",
				"4",
				"8"
			],
			"env": "tiddler",
			"html": "<[^>]*type=[^>]text\\/vnd\\.tiddlywiki",
			"icon": "TiddlyWiki.png",
			"meta": {
				"application-name": "^TiddlyWiki$",
				"copyright": "^TiddlyWiki created by Jeremy Ruston",
				"generator": "^TiddlyWiki$",
				"tiddlywiki-version": "(.*)\\;version:\\1"
			},
			"website": "http://tiddlywiki.com"
		},
		"Tiki Wiki CMS Groupware": {
			"cats": [
				"1",
				"2",
				"8",
				"11",
				"13"
			],
			"icon": "Tiki Wiki CMS Groupware.png",
			"meta": {
				"generator": "^Tiki"
			},
			"script": "(?:/|_)tiki",
			"website": "http://tiki.org"
		},
		"Timeplot": {
			"cats": [
				"25"
			],
			"env": "^Timeplot$",
			"icon": "Timeplot.png",
			"script": "timeplot.*\\.js",
			"website": "http://www.simile-widgets.org/timeplot/"
		},
		"TinyMCE": {
			"cats": [
				"24"
			],
			"env": "^tinyMCE$",
			"icon": "TinyMCE.png",
			"website": "http://tinymce.com"
		},
		"Titan": {
			"cats": [
				"36"
			],
			"env": [
				"^titan$",
				"^titanEnabled$"
			],
			"html": "<script[^>]+>var titan",
			"icon": "Titan.png",
			"website": "http://titan360.com"
		},
		"TomatoCart": {
			"cats": [
				"6"
			],
			"env": "^AjaxShoppingCart$",
			"icon": "TomatoCart.png",
			"meta": {
				"generator": "TomatoCart"
			},
			"website": "http://tomatocart.com"
		},
		"TornadoServer": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "TornadoServer(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "TornadoServer.png",
			"website": "http://tornadoweb.org"
		},
		"TotalCode": {
			"cats": [
				"6"
			],
			"headers": {
				"X-Powered-By": "^TotalCode$"
			},
			"icon": "TotalCode.png",
			"website": "http://www.totalcode.com"
		},
		"Trac": {
			"cats": [
				"13"
			],
			"html": [
				"<a id=\"tracpowered",
				"Powered by <a href=\"[^\"]*\"><strong>Trac(?:[ /]([\\d.]+))?\\;version:\\1"
			],
			"icon": "Trac.png",
			"implies": "Python",
			"website": "http://trac.edgewall.org"
		},
		"TrackJs": {
			"cats": [
				"10"
			],
			"env": "^TrackJs$",
			"icon": "TrackJs.png",
			"script": "tracker.js",
			"website": "http://trackjs.com"
		},
		"Translucide": {
			"cats": [
				"1"
			],
			"icon": "translucide.svg",
			"implies": [
				"PHP",
				"jQuery"
			],
			"script": "lucide\\.init(?:\\.min)?\\.js",
			"website": "http://www.translucide.net"
		},
		"Tumblr": {
			"cats": [
				"11"
			],
			"headers": {
				"X-Tumblr-User": ""
			},
			"html": "<iframe src=\"[^>]+tumblr\\.com",
			"icon": "Tumblr.png",
			"url": "^https?://(?:www\\.)?[^/]+\\.tumblr\\.com/",
			"website": "http://www.tumblr.com"
		},
		"TweenMax": {
			"cats": [
				"12"
			],
			"env": "^TweenMax$",
			"icon": "TweenMax.png",
			"script": "TweenMax(?:\\.min)?\\.js",
			"website": "http://greensock.com/tweenmax"
		},
		"Twilight CMS": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-CMS": "Twilight CMS"
			},
			"icon": "Twilight CMS.png",
			"website": "http://www.twilightcms.com"
		},
		"TwistPHP": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "TwistPHP"
			},
			"icon": "TwistPHP.png",
			"implies": "PHP",
			"website": "http://twistphp.com"
		},
		"TwistedWeb": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "TwistedWeb(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "TwistedWeb.png",
			"website": "http://twistedmatrix.com/trac/wiki/TwistedWeb"
		},
		"Twitter": {
			"cats": [
				"5"
			],
			"icon": "Twitter.svg",
			"script": "//platform\\.twitter\\.com/widgets\\.js",
			"website": "http://twitter.com"
		},
		"Twitter Bootstrap": {
			"cats": [
				"18"
			],
			"env": "^Twipsy$\\;confidence:50",
			"html": [
				"<style>/\\*!\\* Bootstrap v(\\d\\.\\d\\.\\d)\\;version:\\1",
				"<link[^>]+?href=\"[^\"]+bootstrap(?:\\.min)?\\.css",
				"<div[^>]+class=\"[^\"]*glyphicon glyphicon-"
			],
			"icon": "Twitter Bootstrap.png",
			"script": "(?:twitter\\.github\\.com/bootstrap|bootstrap(?:\\.js|\\.min\\.js))",
			"website": "http://getbootstrap.com"
		},
		"Twitter Emoji (Twemoji)": {
			"cats": [
				"25"
			],
			"env": "^twemoji$",
			"script": "twemoji(?:\\.min)?\\.js",
			"website": "http://twitter.github.io/twemoji/"
		},
		"Twitter Flight": {
			"cats": [
				"12"
			],
			"env": "^flight$",
			"icon": "Twitter Flight.png",
			"implies": "jQuery",
			"website": "http://flightjs.github.io/"
		},
		"Twitter typeahead.js": {
			"cats": [
				"12"
			],
			"env": "^typeahead$",
			"icon": "Twitter typeahead.js.png",
			"implies": "jQuery\\;confidence:50",
			"script": "(?:typeahead|bloodhound)\\.(?:jquery|bundle)?(?:\\.min)?\\.js",
			"website": "http://twitter.github.io/typeahead.js"
		},
		"TypePad": {
			"cats": [
				"11"
			],
			"icon": "TypePad.png",
			"meta": {
				"generator": "typepad"
			},
			"url": "typepad\\.com",
			"website": "http://www.typepad.com"
		},
		"Typecho": {
			"cats": [
				"11"
			],
			"icon": "typecho.svg",
			"implies": "PHP",
			"url": "/admin/login\\.php?referer=http%3A%2F%2F",
			"website": "http://typecho.org/"
		},
		"Typekit": {
			"cats": [
				"17"
			],
			"env": "^Typekit$",
			"icon": "Typekit.png",
			"script": "use\\.typekit\\.com",
			"website": "http://typekit.com"
		},
		"uCoz": {
			"cats": [
				1
			],
			"headers": {
				"Set-Cookie": "uCoz="
			},
			"icon": "uCoz.svg",
			"website": "https://ucoz.ru"
		},
		"UIKit": {
			"cats": [
				"18"
			],
			"icon": "UIKit.png",
			"html": "<[^>]+class=\"[^\"]*(?:uk-container|uk-section)",
			"script": "uikit.*\\.js",
			"website": "https://getuikit.com"
		},
		"UNIX": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Unix"
			},
			"icon": "UNIX.png",
			"website": "http://unix.org"
		},
		"Ubercart": {
			"cats": [
				"6"
			],
			"icon": "Ubercart.png",
			"implies": "Drupal",
			"script": "uc_cart/uc_cart_block\\.js",
			"website": "http://www.ubercart.org"
		},
		"Ubuntu": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Ubuntu",
				"X-Powered-By": "Ubuntu"
			},
			"icon": "Ubuntu.png",
			"website": "http://www.ubuntu.com/server"
		},
		"UltraCart": {
			"cats": [
				"6"
			],
			"env": "^ucCatalog",
			"html": "<form [^>]*action=\"[^\"]*\\/cgi-bin\\/UCEditor\\?(?:[^\"]*&)?merchantId=[^\"]",
			"icon": "UltraCart.png",
			"script": "cgi-bin\\/UCJavaScript\\?(?:[^\"]*&)?merchantid=.",
			"url": "/cgi-bin/UCEditor\\?(?:.*&)?merchantid=.",
			"website": "http://ultracart.com"
		},
		"Umbraco": {
			"cats": [
				"1"
			],
			"env": "^(?:UC_(?:IMAGE_SERVICE|ITEM_INFO_SERVICE|SETTINGS)|Umbraco)$",
			"headers": {
				"X-Umbraco-Version": "(.*)\\;version:\\1"
			},
			"html": "powered by <a href=[^>]+umbraco",
			"icon": "Umbraco.png",
			"implies": "Microsoft ASP.NET",
			"meta": {
				"generator": "umbraco"
			},
			"url": "/umbraco/login\\.aspx(?:$|\\?)",
			"website": "http://umbraco.com"
		},
		"Unbounce": {
			"cats": [
				"20",
				"51"
			],
			"headers": {
				"X-Unbounce-PageId": ""
			},
			"icon": "Unbounce.png",
			"website": "http://unbounce.com"
		},
		"Underscore.js": {
			"cats": [
				"12"
			],
			"icon": "Underscore.js.png",
			"script": "underscore.*\\.js",
			"website": "http://underscorejs.org"
		},
		"Usabilla": {
			"cats": [
				"13"
			],
			"env": "^usabilla_live$",
			"icon": "Usabilla.svg",
			"website": "http://usabilla.com"
		},
		"UserLike": {
			"cats": [
				"52"
			],
			"icon": "UserLike.svg",
			"script": [
				"userlike\\.min\\.js",
				"userlikelib\\.min\\.js"
			],
			"website": "http://userlike.com"
		},
		"UserRules": {
			"cats": [
				"13"
			],
			"env": "^_usrp$",
			"icon": "UserRules.png",
			"website": "http://www.userrules.com"
		},
		"UserVoice": {
			"cats": [
				"13"
			],
			"env": "^UserVoice$",
			"icon": "UserVoice.png",
			"website": "http://uservoice.com"
		},
		"Ushahidi": {
			"cats": [
				"1",
				"35"
			],
			"env": "^Ushahidi$",
			"headers": {
				"Set-Cookie": "^ushahidi="
			},
			"icon": "Ushahidi.png",
			"implies": [
				"PHP",
				"MySQL",
				"OpenLayers"
			],
			"script": "/js/ushahidi\\.js$",
			"website": "http://www.ushahidi.com"
		},
		"VIVVO": {
			"cats": [
				"1"
			],
			"env": "^vivvo",
			"headers": {
				"Set-Cookie": "VivvoSessionId"
			},
			"icon": "VIVVO.png",
			"website": "http://vivvo.net"
		},
		"VP-ASP": {
			"cats": [
				"6"
			],
			"html": "<a[^>]+>Powered By VP-ASP Shopping Cart</a>",
			"icon": "VP-ASP.png",
			"implies": "Microsoft ASP.NET",
			"script": "vs350\\.js",
			"website": "http://www.vpasp.com"
		},
		"VTEX Enterprise": {
			"cats": [
				"6"
			],
			"headers": {
				"powered": "vtex"
			},
			"icon": "VTEX Enterprise.png",
			"website": "http://vtex.com"
		},
		"VTEX Integrated Store": {
			"cats": [
				"6"
			],
			"headers": {
				"X-Powered-By": "vtex-integrated-store"
			},
			"icon": "VTEX Integrated Store.png",
			"website": "http://lojaintegrada.com.br"
		},
		"Vanilla": {
			"cats": [
				"2"
			],
			"headers": {
				"X-Powered-By": "Vanilla"
			},
			"html": "<body id=\"(?:DiscussionsPage|vanilla)",
			"icon": "Vanilla.png",
			"implies": "PHP",
			"website": "http://vanillaforums.org"
		},
		"Varnish": {
			"cats": [
				"23"
			],
			"headers": {
				"Via": ".*Varnish",
				"X-Varnish": "",
				"X-Varnish-Action": "",
				"X-Varnish-Age": "",
				"X-Varnish-Cache": "",
				"X-Varnish-Hostname": ""
			},
			"icon": "Varnish.svg",
			"website": "http://www.varnish-cache.org"
		},
		"Venda": {
			"cats": [
				"6"
			],
			"headers": {
				"X-venda-hitid": ""
			},
			"icon": "Venda.png",
			"website": "http://venda.com"
		},
		"Veoxa": {
			"cats": [
				"36"
			],
			"env": "^(?:Veoxa_|VuVeoxaContent)",
			"html": "<img [^>]*src=\"[^\"]+tracking\\.veoxa\\.com",
			"icon": "Veoxa.png",
			"script": "tracking\\.veoxa\\.com",
			"website": "http://veoxa.com"
		},
		"VideoJS": {
			"cats": [
				"14"
			],
			"env": "^VideoJS$",
			"html": "<div[^>]+class=\"video-js+\">",
			"icon": "VideoJS.png",
			"script": "zencdn\\.net/c/video\\.js",
			"website": "http://videojs.com"
		},
		"VigLink": {
			"cats": [
				"36"
			],
			"env": "^(?:vglnk(?:$|_)|vl_(?:cB|disable)$)",
			"icon": "VigLink.png",
			"script": "(?:^[^/]*//[^/]*viglink\\.com/api/|vglnk\\.js)",
			"website": "http://viglink.com"
		},
		"Vignette": {
			"cats": [
				"1"
			],
			"html": "<[^>]+=\"vgn-?ext",
			"icon": "Vignette.png",
			"website": "http://www.vignette.com"
		},
		"Vimeo": {
			"cats": [
				"14"
			],
			"html": "(?:<(?:param|embed)[^>]+vimeo\\.com/moogaloop|<iframe[^>]player\\.vimeo\\.com)",
			"icon": "Vimeo.png",
			"website": "http://vimeo.com"
		},
		"Vinala": {
			"cats": [
				"18"
			],
			"headers": {
				"Set-Cookie": "vinala_version"
			},
			"icon": "Vinala.png",
			"implies": "PHP",
			"website": "https://github.com/vinala/vinala"
		},
		"Virata EmWeb": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Virata-EmWeb(?:/(R?[\\d._]+))?\\;version:\\1"
			},
			"implies": [
				"HP"
			],
			"website": "http://example.com"
		},
		"VirtueMart": {
			"cats": [
				"6"
			],
			"html": "<div id=\"vmMainPage",
			"icon": "VirtueMart.png",
			"implies": "Joomla",
			"website": "http://virtuemart.net"
		},
		"Virtuoso": {
			"cats": [
				"34"
			],
			"website": "https://virtuoso.openlinksw.com/",
			"meta": {
				"Keywords": "^OpenLink Virtuoso Sparql",
				"Copyright": "^Copyright &copy; \\d{4} OpenLink Software"
			},
			"url": ".*/sparql\\.*",
			"headers": {
				"Server": "Virtuoso\\/?(\\d{2}\\.\\d{2}\\.\\d{4})?\\;version:\\1"
			}
		},
		"Visual WebGUI": {
			"cats": [
				"18"
			],
			"env": "^VWGEventArgs$",
			"icon": "Visual WebGUI.png",
			"implies": "Microsoft ASP.NET",
			"meta": {
				"generator": "^Visual WebGUI"
			},
			"script": "\\.js\\.wgx$",
			"url": "\\.wgx$",
			"website": "http://www.gizmox.com/products/visual-web-gui/"
		},
		"VisualPath": {
			"cats": [
				"10"
			],
			"icon": "VisualPath.png",
			"script": "visualpath[^/]*\\.trackset\\.it/[^/]+/track/include\\.js",
			"website": "http://www.trackset.com/web-analytics-software/visualpath"
		},
		"Volusion": {
			"cats": [
				"6"
			],
			"env": "^volusion$",
			"html": "<link [^>]*href=\"[^\"]*/vspfiles/",
			"icon": "Volusion.png",
			"script": "/volusion\\.js(?:\\?([\\d.]*))?\\;version:\\1",
			"website": "http://volusion.com"
		},
		"Vox": {
			"cats": [
				"11"
			],
			"icon": "Vox.png",
			"url": "\\.vox\\.com",
			"website": "http://www.vox.com"
		},
		"Vue.js": {
			"cats": [
				"12"
			],
			"env": "^Vue$",
			"icon": "Vue.js.png",
			"script": [
				"vue(?:\\-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"/([\\d.]+)/vue(?:\\.min)?\\.js\\;version:\\1",
				"vue.*\\.js\\;confidence:20"
			],
			"website": "http://vuejs.org"
		},
		"W3 Total Cache": {
			"cats": [
				"23"
			],
			"headers": {
				"X-Powered-By": "W3 Total Cache(?:/([\\d.]+))?\\;version:\\1"
			},
			"html": "<!--[^>]+W3 Total Cache",
			"icon": "W3 Total Cache.png",
			"implies": "WordPress",
			"website": "http://www.w3-edge.com/wordpress-plugins/w3-total-cache"
		},
		"W3Counter": {
			"cats": [
				"10"
			],
			"icon": "W3Counter.png",
			"script": "w3counter\\.com/tracker\\.js",
			"website": "http://www.w3counter.com"
		},
		"WEBXPAY": {
			"cats": [
				"6"
			],
			"env": "^WEBXPAY$",
			"html": "Powered by <a href=\"https://www.webxpay.com\">WEBXPAY<",
			"icon": "WEBXPAY.png",
			"website": "https://webxpay.com"
		},
		"WHMCS": {
			"cats": [
				"6"
			],
			"headers": {
				"Set-Cookie": "^WHMCS.*"
			},
			"icon": "WHMCS.png",
			"website": "http://www.whmcs.com"
		},
		"WP Rocket": {
			"cats": [
				"23"
			],
			"headers": {
				"X-Powered-By": "WP Rocket(?:/([\\d.]+))?\\;version:\\1"
			},
			"html": "<!--[^>]+WP Rocket",
			"icon": "WP Rocket.png",
			"implies": "WordPress",
			"website": "http://wp-rocket.me"
		},
		"Warp": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "^Warp/(\\d+(?:\\.\\d+)+)?$\\;version:\\1"
			},
			"icon": "Warp.png",
			"implies": "Haskell",
			"website": "http://www.stackage.org/package/warp"
		},
		"Web Optimizer": {
			"cats": [
				"10"
			],
			"html": "<title [^>]*lang=\"wo\">",
			"icon": "Web Optimizer.png",
			"website": "http://www.web-optimizer.us"
		},
		"Web2py": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "web2py"
			},
			"icon": "Web2py.png",
			"implies": [
				"Python",
				"jQuery"
			],
			"meta": {
				"generator": "^Web2py"
			},
			"script": "web2py\\.js",
			"website": "http://web2py.com"
		},
		"WebGUI": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "^wgSession="
			},
			"icon": "WebGUI.png",
			"implies": "Perl",
			"meta": {
				"generator": "^WebGUI ([\\d.]+)\\;version:\\1"
			},
			"website": "http://www.webgui.org"
		},
		"WebPublisher": {
			"cats": [
				"1"
			],
			"icon": "WebPublisher.png",
			"meta": {
				"generator": "WEB\\|Publisher"
			},
			"website": "http://scannet.dk"
		},
		"Webix": {
			"cats": [
				"12"
			],
			"env": "^webix$",
			"icon": "Webix.png",
			"script": "\bwebix\\.js",
			"website": "http://webix.com"
		},
		"Webs": {
			"cats": [
				"1"
			],
			"headers": {
				"Server": "Webs\\.com/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "Webs.png",
			"website": "http://webs.com"
		},
		"WebsPlanet": {
			"cats": [
				"1"
			],
			"icon": "WebsPlanet.png",
			"meta": {
				"generator": "WebsPlanet"
			},
			"website": "http://websplanet.com"
		},
		"Websale": {
			"cats": [
				"6"
			],
			"icon": "Websale.png",
			"url": "/websale7/",
			"website": "http://websale.de"
		},
		"WebsiteBaker": {
			"cats": [
				"1"
			],
			"icon": "WebsiteBaker.png",
			"implies": [
				"PHP",
				"MySQL"
			],
			"meta": {
				"generator": "WebsiteBaker"
			},
			"website": "http://websitebaker2.org/en/home.php"
		},
		"Webtrekk": {
			"cats": [
				"10"
			],
			"env": "^webtrekk",
			"icon": "Webtrekk.png",
			"website": "http://www.webtrekk.com"
		},
		"Webtrends": {
			"cats": [
				"10"
			],
			"env": "^(?:WTOptimize|WebTrends)",
			"html": "<img[^>]+id=\"DCSIMG\"[^>]+webtrends",
			"icon": "Webtrends.png",
			"website": "http://worldwide.webtrends.com"
		},
		"Weebly": {
			"cats": [
				"1"
			],
			"icon": "Weebly.png",
			"script": "cdn\\d+\\.editmysite\\.com",
			"website": "http://www.weebly.com"
		},
		"Wikispaces": {
			"cats": [
				"8"
			],
			"html": [
				"<script[^>]*>[^<]*session_url:\\s*'https://session\\.wikispaces\\.com/",
				"<\\w+[^>]*\\s+class=\"[^\"]*WikispacesContent\\s+WikispacesBs3[^\"]*\""
			],
			"icon": "Wikispaces.png",
			"website": "http://www.wikispaces.com"
		},
		"WikkaWiki": {
			"cats": [
				"8"
			],
			"html": "Powered by <a href=\"[^>]+WikkaWiki",
			"icon": "WikkaWiki.png",
			"meta": {
				"generator": "WikkaWiki"
			},
			"website": "http://wikkawiki.org"
		},
		"Windows CE": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "\bWinCE\b"
			},
			"icon": "Microsoft.svg",
			"website": "http://microsoft.com"
		},
		"Windows Server": {
			"cats": [
				"28"
			],
			"headers": {
				"Server": "Win32|Win64"
			},
			"icon": "Microsoft.svg",
			"website": "http://microsoft.com/windowsserver"
		},
		"Wink": {
			"cats": [
				"26",
				"12"
			],
			"env": "^wink$",
			"icon": "Wink.png",
			"script": "(?:_base/js/base|wink).*\\.js",
			"website": "http://winktoolkit.org"
		},
		"Winstone Servlet Container": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Winstone Servlet (?:Container|Engine) v?([\\d.]+)?\\;version:\\1",
				"X-Powered-By": "Winstone(?:.([\\d.]+))?\\;version:\\1"
			},
			"website": "http://winstone.sourceforge.net"
		},
		"Wix": {
			"cats": [
				"1"
			],
			"env": "^wix(?:Events|Data|Errors)",
			"headers": {
				"Set-Cookie": "Domain=\\.wix\\.com",
				"X-Wix-Dispatcher-Cache-Hit": ""
			},
			"icon": "Wix.png",
			"meta": {
				"X-Wix-Renderer-Server": ""
			},
			"script": "static\\.wixstatic\\.com",
			"website": "http://wix.com"
		},
		"Wolf CMS": {
			"cats": [
				"1"
			],
			"html": "(?:<a href=\"[^>]+wolfcms\\.org[^>]+>Wolf CMS(?:</a>)? inside|Thank you for using <a[^>]+>Wolf CMS)",
			"icon": "Wolf CMS.png",
			"implies": "PHP",
			"website": "http://www.wolfcms.org"
		},
		"Woltlab Community Framework": {
			"cats": [
				"18"
			],
			"html": "var WCF_PATH[^>]+",
			"icon": "Woltlab Community Framework.png",
			"implies": "PHP",
			"script": "WCF\\..*\\.js",
			"website": "http://www.woltlab.com"
		},
		"WooCommerce": {
			"cats": [
				"6"
			],
			"env": "woocommerce",
			"html": "<!-- WooCommerce",
			"icon": "WooCommerce.png",
			"implies": "WordPress",
			"meta": {
				"generator": "WooCommerce ([\\d.]+)\\;version:\\1"
			},
			"script": "woocommerce",
			"website": "http://www.woothemes.com/woocommerce"
		},
		"Woopra": {
			"cats": [
				"10"
			],
			"icon": "Woopra.png",
			"script": "static\\.woopra\\.com",
			"website": "http://www.woopra.com"
		},
		"WordPress": {
			"cats": [
				"1",
				"11"
			],
			"env": "^wp_username$",
			"html": [
				"<link rel=[\"']stylesheet[\"'] [^>]+wp-(?:content|includes)",
				"<link[^>]+s\\d+\\.wp\\.com"
			],
			"icon": "WordPress.svg",
			"implies": "PHP",
			"meta": {
				"generator": "WordPress( [\\d.]+)?\\;version:\\1"
			},
			"script": "/wp-includes/",
			"website": "http://wordpress.org"
		},
		"WordPress Super Cache": {
			"cats": [
				"23"
			],
			"headers": {
				"WP-Super-Cache": ""
			},
			"html": "<!--[^>]+WP-Super-Cache",
			"icon": "wp_super_cache.png",
			"implies": "WordPress",
			"website": "http://z9.io/wp-super-cache/"
		},
		"Wowza Media Server": {
			"cats": [
				"38"
			],
			"html": "<title>Wowza Media Server \\d+ ((?:\\w+ Edition )?\\d+\\.[\\d\\.]+(?: build\\d+)?)?\\;version:\\1",
			"icon": "Wowza Media Server.png",
			"website": "http://www.wowza.com"
		},
		"X-Cart": {
			"cats": [
				"6"
			],
			"env": "^(?:xcart_web_dir|xliteConfig)$",
			"headers": {
				"Set-Cookie": "xid=[a-z\\d]{32}(?:;|$)"
			},
			"html": [
				"Powered by X-Cart(?: (\\d+))? <a[^>]+href=\"http://www\\.x-cart\\.com/\"[^>]*>\\;version:\\1",
				"<a[^>]+href=\"[^\"]*(?:\\?|&)xcart_form_id=[a-z\\d]{32}(?:&|$)"
			],
			"icon": "X-Cart.png",
			"implies": "PHP",
			"meta": {
				"generator": "X-Cart(?: (\\d+))?\\;version:\\1"
			},
			"script": "/skin/common_files/modules/Product_Options/func\\.js",
			"website": "http://x-cart.com"
		},
		"XAMPP": {
			"cats": [
				"22"
			],
			"html": "<title>XAMPP(?: Version ([\\d\\.]+))?</title>\\;version:\\1",
			"icon": "XAMPP.png",
			"implies": [
				"Apache",
				"MySQL",
				"PHP",
				"Perl"
			],
			"meta": {
				"author": "Kai Oswald Seidler\\;confidence:10"
			},
			"website": "http://www.apachefriends.org/en/xampp.html"
		},
		"XMB": {
			"cats": [
				"2"
			],
			"html": "<!-- Powered by XMB",
			"icon": "XMB.png",
			"website": "http://www.xmbforum.com"
		},
		"XOOPS": {
			"cats": [
				"1"
			],
			"env": "^xoops",
			"icon": "XOOPS.png",
			"implies": "PHP",
			"meta": {
				"generator": "XOOPS"
			},
			"website": "http://xoops.org"
		},
		"XRegExp": {
			"cats": [
				"12"
			],
			"env": "^XRegExp$",
			"icon": "XRegExp.png",
			"script": [
				"xregexp(?:\\-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"/([\\d.]+)/xregexp(?:\\.min)?\\.js\\;version:\\1",
				"xregexp.*\\.js"
			],
			"website": "http://xregexp.com"
		},
		"Xajax": {
			"cats": [
				"12"
			],
			"icon": "Xajax.png",
			"script": "xajax_core.*\\.js",
			"website": "http://xajax-project.org"
		},
		"Xanario": {
			"cats": [
				"6"
			],
			"icon": "Xanario.png",
			"meta": {
				"generator": "xanario shopsoftware"
			},
			"website": "http://xanario.de"
		},
		"XenForo": {
			"cats": [
				"2"
			],
			"html": "(?:jQuery\\.extend\\(true, XenForo|Forum software by XenForo&trade;|<!--XF:branding|<html[^>]+id=\"XenForo\")",
			"icon": "XenForo.png",
			"website": "http://xenforo.com"
		},
		"Xitami": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Xitami(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Xitami.png",
			"website": "http://xitami.com"
		},
		"Xonic": {
			"cats": [
				"6"
			],
			"html": [
				"Powered by <a href=\"http://www.xonic-solutions.de/index.php\" target=\"_blank\">xonic-solutions Shopsoftware</a>"
			],
			"icon": "xonic.png",
			"meta": {
				"keywords": "xonic-solutions"
			},
			"script": "core/jslib/jquery\\.xonic\\.js\\.php",
			"website": "http://www.xonic-solutions.de"
		},
		"XpressEngine": {
			"cats": [
				"1"
			],
			"icon": "XpressEngine.png",
			"meta": {
				"generator": "XpressEngine"
			},
			"website": "http://www.xpressengine.com/"
		},
		"YUI": {
			"cats": [
				"12"
			],
			"env": "^YAHOO$",
			"icon": "YUI.png",
			"script": "(?:/yui/|yui\\.yahooapis\\.com)",
			"website": "http://yuilibrary.com"
		},
		"YUI Doc": {
			"cats": [
				"4"
			],
			"html": "(?:<html[^>]* yuilibrary\\.com/rdf/[\\d.]+/yui\\.rdf|<body[^>]+class=\"yui3-skin-sam)",
			"icon": "yahoo.png",
			"website": "http://developer.yahoo.com/yui/yuidoc"
		},
		"YaBB": {
			"cats": [
				"2"
			],
			"html": "Powered by <a href=\"[^>]+yabbforum",
			"icon": "YaBB.png",
			"website": "http://www.yabbforum.com"
		},
		"Yahoo Advertising": {
			"cats": [
				"36"
			],
			"env": "^adxinserthtml$",
			"html": [
				"<iframe[^>]+adserver\\.yahoo\\.com",
				"<img[^>]+clicks\\.beap\\.bc\\.yahoo\\.com"
			],
			"icon": "yahoo.png",
			"script": "adinterax\\.com",
			"website": "http://advertising.yahoo.com"
		},
		"Yahoo! Ecommerce": {
			"cats": [
				"6"
			],
			"env": "^YStore$",
			"headers": {
				"X-XRDS-Location": "/ystore/"
			},
			"html": "<link[^>]+store\\.yahoo\\.net",
			"icon": "yahoo.png",
			"website": "http://smallbusiness.yahoo.com/ecommerce"
		},
		"Yahoo! Web Analytics": {
			"cats": [
				"10"
			],
			"env": "^YWA$",
			"icon": "yahoo.png",
			"script": "d\\.yimg\\.com/mi/ywa\\.js",
			"website": "http://web.analytics.yahoo.com"
		},
		"Yandex.Direct": {
			"cats": [
				"36"
			],
			"env": [
				"^yandex_partner_id$",
				"^yandex_ad_format$",
				"^yandex_direct_"
			],
			"html": "<yatag class=\"ya-partner__ads\">",
			"icon": "Yandex.Direct.png",
			"script": "https?://an\\.yandex\\.ru/",
			"website": "http://partner.yandex.com"
		},
		"Yandex.Metrika": {
			"cats": [
				"10"
			],
			"env": "^yandex_metrika",
			"icon": "Yandex.Metrika.png",
			"script": "mc\\.yandex\\.ru\\/metrika\\/watch\\.js",
			"website": "http://metrika.yandex.com"
		},
		"Yaws": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "Yaws(?: ([\\d.]+))?\\;version:\\1"
			},
			"icon": "Yaws.png",
			"implies": [
				"Erlang"
			],
			"website": "http://yaws.hyber.org"
		},
		"Yieldlab": {
			"cats": [
				"36"
			],
			"icon": "Yieldlab.png",
			"script": "^https?://(?:[^/]+\\.)?yieldlab\\.net/",
			"website": "http://yieldlab.de"
		},
		"Yii": {
			"cats": [
				"18"
			],
			"html": [
				"Powered by <a href=\"http://www.yiiframework.com/\" rel=\"external\">Yii Framework</a>",
				"<input type=\"hidden\" value=\"[a-zA-Z0-9]{40}\" name=\"YII_CSRF_TOKEN\" \\/>",
				"<!\\[CDATA\\[YII-BLOCK-(?:HEAD|BODY-BEGIN|BODY-END)\\]"
			],
			"icon": "Yii.png",
			"implies": [
				"PHP"
			],
			"website": "http://yiiframework.com"
		},
		"Yoast SEO": {
			"cats": [
				"32"
			],
			"html": [
				"<!-- This site is optimized with the Yoast"
			],
			"icon": "Yoast SEO.png",
			"website": "http://yoast.com"
		},
		"YouTrack": {
			"cats": [
				"13"
			],
			"html": [
				"no-title=\"YouTrack\">",
				"data-reactid=\"[^\"]+\">youTrack ([0-9.]+)<\\;version:\\1",
				"type=\"application/opensearchdescription\\+xml\" title=\"YouTrack\"/>"
			],
			"icon": "YouTrack.png",
			"website": "http://www.jetbrains.com/youtrack/"
		},
		"YouTube": {
			"cats": [
				"14"
			],
			"html": "<(?:param|embed|iframe)[^>]+youtube(?:-nocookie)?\\.com/(?:v|embed)",
			"icon": "YouTube.png",
			"website": "http://www.youtube.com"
		},
		"ZK": {
			"cats": [
				"18"
			],
			"html": "<!-- ZK [\\.\\d\\s]+-->",
			"icon": "ZK.png",
			"implies": "Java",
			"script": "zkau/",
			"website": "http://zkoss.org"
		},
		"ZURB Foundation": {
			"cats": [
				"18"
			],
			"html": [
				"<link[^>]+foundation[^>\"]+css",
				"<div [^>]*class=\"[^\"]*(?:small|medium|large)-\\d{1,2} columns"
			],
			"icon": "ZURB Foundation.png",
			"website": "http://foundation.zurb.com"
		},
		"Zabbix": {
			"cats": [
				"19"
			],
			"env": "^zbxCallPostScripts$",
			"html": "<body[^>]+zbxCallPostScripts",
			"icon": "Zabbix.png",
			"implies": "PHP",
			"meta": {
				"Author": "ZABBIX SIA\\;confidence:70"
			},
			"url": "\\/zabbix\\/\\;confidence:30",
			"website": "http://zabbix.com"
		},
		"Zanox": {
			"cats": [
				"36"
			],
			"env": "^zanox$",
			"html": "<img [^>]*src=\"[^\"]+ad\\.zanox\\.com",
			"icon": "Zanox.png",
			"script": "zanox\\.com/scripts/zanox\\.js$",
			"website": "http://zanox.com"
		},
		"Zen Cart": {
			"cats": [
				"6"
			],
			"icon": "Zen Cart.png",
			"meta": {
				"generator": "Zen Cart"
			},
			"website": "http://www.zen-cart.com"
		},
		"Zend": {
			"cats": [
				"22"
			],
			"headers": {
				"Set-Cookie": "ZENDSERVERSESSID",
				"X-Powered-By": "Zend"
			},
			"icon": "Zend.png",
			"website": "http://zend.com"
		},
		"Zendesk Chat": {
			"cats": [
				"52"
			],
			"icon": "Zendesk Chat.png",
			"script": "v2\\.zopim\\.com",
			"website": "http://zopim.com"
		},
		"Zepto": {
			"cats": [
				"12"
			],
			"env": "^Zepto$",
			"icon": "Zepto.png",
			"script": "zepto.*\\.js",
			"website": "http://zeptojs.com"
		},
		"Zeuscart": {
			"cats": [
				"6"
			],
			"html": "<form name=\"product\" method=\"post\" action=\"[^\"]+\\?do=addtocart&prodid=\\d+\"(?!<\\/form>.)+<input type=\"hidden\" name=\"addtocart\" value=\"\\d+\">",
			"icon": "Zeuscart.png",
			"implies": "PHP",
			"url": "\\?do=prodetail&action=show&prodid=\\d+",
			"website": "http://zeuscart.com"
		},
		"Zinnia": {
			"cats": [
				"11"
			],
			"icon": "Zinnia.png",
			"implies": "Django",
			"meta": {
				"generator": "Zinnia"
			},
			"website": "http://django-blog-zinnia.com"
		},
		"Zope": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "^Zope/"
			},
			"icon": "Zope.png",
			"website": "http://zope.org"
		},
		"a-blog cms": {
			"cats": [
				"1"
			],
			"icon": "a-blog cms.svg",
			"implies": "PHP",
			"meta": {
				"generator": "a-blog cms"
			},
			"website": "http://www.a-blogcms.jp"
		},
		"actionhero.js": {
			"cats": [
				"1",
				"18",
				"22"
			],
			"env": "^actionheroClient$",
			"headers": {
				"X-Powered-By": "actionhero API"
			},
			"icon": "actionhero.js.png",
			"implies": "Node.js",
			"script": "actionheroClient\\.js",
			"website": "http://www.actionherojs.com"
		},
		"amCharts": {
			"cats": [
				"25"
			],
			"env": "^AmCharts$",
			"icon": "amCharts.png",
			"script": "amcharts.*\\.js",
			"website": "http://amcharts.com"
		},
		"basket.js": {
			"cats": [
				"12"
			],
			"env": "^basket$\\;confidence:20",
			"icon": "basket.js.png",
			"script": "basket.*\\.js\\;confidence:10",
			"website": "http://addyosmani.github.io/basket.js/"
		},
		"cPanel": {
			"cats": [
				"9"
			],
			"headers": {
				"Server": "cpsrvd/([\\d.]+)\\;version:\\1"
			},
			"html": "<!-- cPanel",
			"icon": "cPanel.png",
			"website": "http://www.cpanel.net"
		},
		"cgit": {
			"cats": [
				"19"
			],
			"html": [
				"<[^>]+id='cgit'",
				"generated by <a href='http://git.zx2c4.com/cgit/about/'>cgit v([\\d.a-z-]+)</a>\\;version:\\1"
			],
			"icon": "cgit.png",
			"implies": "git",
			"meta": {
				"generator": "^cgit v([\\d.a-z-]+)$\\;version:\\1"
			},
			"website": "http://git.zx2c4.com/cgit"
		},
		"comScore": {
			"cats": [
				"10"
			],
			"env": "^_?COMSCORE$",
			"html": "<iframe[^>]* (?:id=\"comscore\"|scr=[^>]+comscore)|\\.scorecardresearch\\.com/beacon\\.js|COMSCORE\\.beacon",
			"icon": "comScore.png",
			"script": "\\.scorecardresearch\\.com/beacon\\.js|COMSCORE\\.beacon",
			"website": "http://comscore.com"
		},
		"debut": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "debut\\/?([\\d\\.]+)?\\;version:\\1"
			},
			"icon": "debut.png",
			"implies": "Brother",
			"website": "http://www.brother.com"
		},
		"dwhttpd": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "dwhttpd\\/?([\\d\\.a-z]+)?\\;version:\\1"
			},
			"website": "http://example.com"
		},
		"e107": {
			"cats": [
				"1"
			],
			"headers": {
				"Set-Cookie": "e107_tz[^;]+=",
				"X-Powered-By": "e107"
			},
			"icon": "e107.png",
			"implies": "PHP",
			"script": "[^a-z\\d]e107\\.js",
			"website": "http://e107.org"
		},
		"eDevice SmartStack": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "eDevice SmartStack(?: ?/?([\\d.]+))?\\;version:\\1"
			},
			"icon": "eDevice SmartStack.png",
			"website": "http://edevice.com"
		},
		"eHTTP": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "\beHTTP(?: v?([\\d\\.]+))?\\;version:\\1"
			},
			"implies": "HP ProCurve",
			"website": "http://example.com"
		},
		"eSyndiCat": {
			"cats": [
				"1"
			],
			"env": "^esyndicat$",
			"headers": {
				"X-Drectory-Script": "^eSyndiCat"
			},
			"icon": "eSyndiCat.png",
			"implies": "PHP",
			"meta": {
				"generator": "^eSyndiCat "
			},
			"website": "http://esyndicat.com"
		},
		"eZ Publish": {
			"cats": [
				"1",
				"6"
			],
			"headers": {
				"X-Powered-By": "^eZ Publish"
			},
			"icon": "eZ Publish.png",
			"implies": "PHP",
			"meta": {
				"generator": "eZ Publish"
			},
			"website": "http://ez.no"
		},
		"enduro.js": {
			"cats": [
				"1",
				"18",
				"47"
			],
			"headers": {
				"X-Powered-By": "^enduro.js$"
			},
			"icon": "enduro.js.svg",
			"implies": "Node.js",
			"website": "http://endurojs.com"
		},
		"git": {
			"cats": [
				"47"
			],
			"icon": "git.png",
			"meta": {
				"generator": "\bgit/([\\d.]+\\d)\\;version:\\1"
			},
			"website": "http://git-scm.com"
		},
		"gitlist": {
			"cats": [
				"47"
			],
			"html": "<p>Powered by <a[^>]+>GitList ([\\d.]+)\\;version:\\1",
			"implies": [
				"PHP",
				"git"
			],
			"website": "http://gitlist.org"
		},
		"gitweb": {
			"cats": [
				"47"
			],
			"html": "<!-- git web interface version ([\\d.]+)?\\;version:\\1",
			"icon": "git.png",
			"implies": [
				"Perl",
				"git"
			],
			"meta": {
				"generator": "gitweb(?:/([\\d.]+\\d))?\\;version:\\1"
			},
			"script": "static/gitweb.js$",
			"website": "http://git-scm.com"
		},
		"govCMS": {
			"cats": [
				"1"
			],
			"icon": "govCMS.svg",
			"implies": [
				"Drupal"
			],
			"meta": {
				"generator": "Drupal ([\\d]+) \\(http:\\/\\/drupal\\.org\\) \\+ govCMS\\;version:\\1"
			},
			"website": "https://www.govcms.gov.au"
		},
		"gunicorn": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "gunicorn(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "gunicorn.png",
			"implies": "Python",
			"website": "http://gunicorn.org"
		},
		"hapi.js": {
			"cats": [
				"18",
				"22"
			],
			"headers": {
				"Set-Cookie": "Fe26\\.2\\*\\*\\;confidence:50"
			},
			"icon": "hapi.js.png",
			"implies": "Node.js",
			"website": "http://hapijs.com"
		},
		"iCongo": {
			"cats": [
				"6"
			],
			"icon": "Hybris.png",
			"implies": "Adobe ColdFusion",
			"meta": {
				"iCongo": ""
			},
			"website": "http://hybris.com/icongo"
		},
		"iPresta": {
			"cats": [
				"6"
			],
			"excludes": "PrestaShop",
			"icon": "iPresta.png",
			"implies": "PHP",
			"meta": {
				"designer": "iPresta"
			},
			"website": "http://ipresta.ir"
		},
		"iWeb": {
			"cats": [
				"20"
			],
			"icon": "iWeb.png",
			"meta": {
				"generator": "^iWeb( [\\d.]+)?\\;version:\\1"
			},
			"website": "http://apple.com/ilife/iweb"
		},
		"ikiwiki": {
			"cats": [
				"8"
			],
			"html": [
				"<link rel=\"alternate\" type=\"application/x-wiki\" title=\"Edit this page\" href=\"/ikiwiki\\.cgi",
				"<a href=\"/ikiwiki\\.cgi\\?do="
			],
			"icon": "ikiwiki.png",
			"website": "http://ikiwiki.info"
		},
		"io4 CMS": {
			"cats": [
				"1"
			],
			"icon": "io4 CMS.png",
			"meta": {
				"generator": "GO[ |]+CMS Enterprise"
			},
			"website": "http://notenbomer.nl/Producten/Content_management/io4_|_cms"
		},
		"Jetshop": {
			"cats": [
				"6"
			],
			"env": "^JetshopData$",
			"html": "<(?:div|aside) id=\"jetshop-branding\">",
			"icon": "Jetshop.png",
			"website": "http://jetshop.se"
		},
		"jQTouch": {
			"cats": [
				"26"
			],
			"env": "^jQT$",
			"icon": "jQTouch.png",
			"script": "jqtouch.*\\.js",
			"website": "http://jqtouch.com"
		},
		"jQuery": {
			"cats": [
				"12"
			],
			"env": "^jQuery$",
			"icon": "jQuery.svg",
			"script": [
				"jquery(?:\\-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"/([\\d.]+)/jquery(?:\\.min)?\\.js\\;version:\\1",
				"jquery.*\\.js"
			],
			"website": "http://jquery.com"
		},
		"jQuery Mobile": {
			"cats": [
				"26"
			],
			"icon": "jQuery Mobile.svg",
			"implies": "jQuery",
			"script": "jquery\\.mobile(?:-([\\d.]+rc\\d))?.*\\.js(?:\\?ver=([\\d.]+))?\\;version:\\1?\\1:\\2",
			"website": "http://jquerymobile.com"
		},
		"jQuery Sparklines": {
			"cats": [
				"25"
			],
			"implies": "jQuery",
			"script": "jquery\\.sparkline.*\\.js",
			"website": "http://omnipotent.net/jquery.sparkline/"
		},
		"jQuery UI": {
			"cats": [
				"12"
			],
			"icon": "jQuery UI.svg",
			"implies": "jQuery",
			"script": [
				"jquery-ui(?:-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1",
				"([\\d.]+)/jquery-ui(?:\\.min)?\\.js\\;version:\\1",
				"jquery-ui.*\\.js"
			],
			"website": "http://jqueryui.com"
		},
		"jqPlot": {
			"cats": [
				"25"
			],
			"icon": "jqPlot.png",
			"implies": "jQuery",
			"script": "jqplot.*\\.js",
			"website": "http://www.jqplot.com"
		},
		"libwww-perl-daemon": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "libwww-perl-daemon(?:/([\\d\\.]+))?\\;version:\\1"
			},
			"icon": "libwww-perl-daemon.png",
			"implies": "Perl",
			"website": "http://metacpan.org/pod/HTTP::Daemon"
		},
		"lighttpd": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "lighttpd(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "lighttpd.png",
			"website": "http://www.lighttpd.net"
		},
		"math.js": {
			"cats": [
				"12"
			],
			"env": "^mathjs$",
			"icon": "math.js.png",
			"script": "math(?:\\.min)?\\.js",
			"website": "http://mathjs.org"
		},
		"mini_httpd": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "mini_httpd(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "mini_httpd.png",
			"website": "http://acme.com/software/mini_httpd"
		},
		"mod_auth_pam": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_auth_pam(?:/([\\d\\.]+))?\\;version:\\1"
			},
			"icon": "Apache.svg",
			"implies": "Apache",
			"website": "http://pam.sourceforge.net/mod_auth_pam"
		},
		"mod_dav": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "\b(?:mod_)?DAV\b(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Apache.svg",
			"implies": "Apache",
			"website": "http://webdav.org/mod_dav"
		},
		"mod_fastcgi": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_fastcgi(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Apache.svg",
			"implies": "Apache",
			"website": "http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html"
		},
		"mod_jk": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_jk(?:/([\\d\\.]+))?\\;version:\\1"
			},
			"icon": "Apache.svg",
			"implies": [
				"Apache Tomcat",
				"Apache"
			],
			"website": "http://tomcat.apache.org/tomcat-3.3-doc/mod_jk-howto.html"
		},
		"mod_perl": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_perl(?:/([\\d\\.]+))?\\;version:\\1"
			},
			"icon": "mod_perl.png",
			"implies": [
				"Perl",
				"Apache"
			],
			"website": "http://perl.apache.org"
		},
		"mod_python": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_python(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "mod_python.png",
			"implies": [
				"Python",
				"Apache"
			],
			"website": "http://www.modpython.org"
		},
		"mod_rack": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_rack(?:/([\\d.]+))?\\;version:\\1",
				"X-Powered-By": "mod_rack(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Phusion Passenger.png",
			"implies": [
				"Ruby on Rails\\;confidence:50",
				"Apache"
			],
			"website": "http://phusionpassenger.com"
		},
		"mod_rails": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_rails(?:/([\\d.]+))?\\;version:\\1",
				"X-Powered-By": "mod_rails(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "Phusion Passenger.png",
			"implies": [
				"Ruby on Rails\\;confidence:50",
				"Apache"
			],
			"website": "http://phusionpassenger.com"
		},
		"mod_ssl": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_ssl(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "mod_ssl.png",
			"implies": "Apache",
			"website": "http://modssl.org"
		},
		"mod_wsgi": {
			"cats": [
				"33"
			],
			"headers": {
				"Server": "mod_wsgi(?:/([\\d.]+))?\\;version:\\1",
				"X-Powered-By": "mod_wsgi(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "mod_wsgi.png",
			"implies": [
				"Python\\;confidence:50",
				"Apache"
			],
			"website": "http://code.google.com/p/modwsgi"
		},
		"nopCommerce": {
			"cats": [
				"6"
			],
			"html": "(?:<!--Powered by nopCommerce|Powered by: <a[^>]+nopcommerce)",
			"icon": "nopCommerce.png",
			"implies": "Microsoft ASP.NET",
			"website": "http://www.nopcommerce.com"
		},
		"openEngine": {
			"cats": [
				"1"
			],
			"icon": "openEngine.png",
			"meta": {
				"openEngine": ""
			},
			"website": "http://openengine.de/html/pages/de/"
		},
		"osCSS": {
			"cats": [
				"6"
			],
			"html": "<body onload=\"window\\.defaultStatus='oscss templates';\"",
			"icon": "osCSS.png",
			"website": "http://www.oscss.org"
		},
		"osCommerce": {
			"cats": [
				"6"
			],
			"headers": {
				"Set-Cookie": "osCsid="
			},
			"html": "(?:<a[^>]*(?:\\?|&)osCsid|Powered by (?:<[^>]+>)?osCommerce</a>|<[^>]+class=\"[^>]*infoBoxHeading)",
			"icon": "osCommerce.png",
			"implies": [
				"PHP",
				"MySQL"
			],
			"website": "http://www.oscommerce.com"
		},
		"osTicket": {
			"cats": [
				"13"
			],
			"headers": {
				"Set-Cookie": "OSTSESSID"
			},
			"icon": "osTicket.png",
			"implies": [
				"PHP",
				"MySQL"
			],
			"website": "http://osticket.com"
		},
		"otrs": {
			"cats": [
				"13"
			],
			"html": "<!--\\s+OTRS: Copyright \\d+-\\d+, OTRS AG",
			"script": "^/otrs-web/js/",
			"icon": "otrs.png",
			"implies": "perl",
			"website": "https://www.otrs.com"
		},
		"ownCloud": {
			"cats": [
				"19"
			],
			"html": "<a href=\"https://owncloud.com\" target=\"_blank\">ownCloud Inc.</a><br/>Your Cloud, Your Data, Your Way!",
			"icon": "ownCloud.png",
			"implies": "PHP",
			"meta": {
				"apple-itunes-app": "app-id=543672169"
			},
			"website": "http://owncloud.org"
		},
		"papaya CMS": {
			"cats": [
				"1"
			],
			"html": "<link[^>]*/papaya-themes/",
			"icon": "papaya CMS.png",
			"implies": "PHP",
			"website": "http://papaya-cms.com"
		},
		"phpAlbum": {
			"cats": [
				"7"
			],
			"html": "<!--phpalbum ([.\\d\\s]+)-->\\;version:\\1",
			"icon": "phpAlbum.png",
			"implies": "PHP",
			"website": "http://phpalbum.net"
		},
		"phpBB": {
			"cats": [
				"2"
			],
			"env": "^(?:style_cookie_settings|phpbb_)",
			"headers": {
				"Set-Cookie": "^phpbb"
			},
			"html": "(?:Powered by <a[^>]+phpbb|<a[^>]+phpbb[^>]+class=\\.copyright|\tphpBB style name|<[^>]+styles/(?:sub|pro)silver/theme|<img[^>]+i_icon_mini|<table class=\"forumline)",
			"icon": "phpBB.png",
			"implies": "PHP",
			"meta": {
				"copyright": "phpBB Group"
			},
			"website": "http://phpbb.com"
		},
		"phpCMS": {
			"cats": [
				"1"
			],
			"env": "^phpcms",
			"icon": "phpCMS.png",
			"implies": "PHP",
			"website": "http://phpcms.de"
		},
		"phpDocumentor": {
			"cats": [
				"4"
			],
			"html": "<!-- Generated by phpDocumentor",
			"icon": "phpDocumentor.png",
			"implies": "PHP",
			"website": "http://www.phpdoc.org"
		},
		"phpMyAdmin": {
			"cats": [
				"3"
			],
			"env": "^pma_absolute_uri$",
			"html": "(?: \\| phpMyAdmin ([\\d.]+)<\\/title>|PMA_sendHeaderLocation\\(|<link [^>]*href=\"[^\"]*phpmyadmin\\.css\\.php)\\;version:\\1",
			"icon": "phpMyAdmin.png",
			"implies": [
				"PHP",
				"MySQL"
			],
			"website": "http://www.phpmyadmin.net"
		},
		"phpPgAdmin": {
			"cats": [
				"3"
			],
			"html": "(?:<title>phpPgAdmin</title>|<span class=\"appname\">phpPgAdmin)",
			"icon": "phpPgAdmin.png",
			"implies": "PHP",
			"website": "http://phppgadmin.sourceforge.net"
		},
		"phpSQLiteCMS": {
			"cats": [
				"1"
			],
			"icon": "phpSQLiteCMS.png",
			"implies": [
				"PHP",
				"SQLite"
			],
			"meta": {
				"generator": "^phpSQLiteCMS(?: (.+))?$\\;version:\\1"
			},
			"website": "http://phpsqlitecms.net"
		},
		"phpliteadmin": {
			"cats": [
				"3"
			],
			"html": [
				"<span id='logo'>phpLiteAdmin</span> <span id='version'>v([0-9.]+)<\\;version:\\1",
				"<!-- Copyright [0-9]+ phpLiteAdmin (?:http://www.phpliteadmin.org/) -->",
				"Powered by <a href='http://www.phpliteadmin\\.org/'"
			],
			"icon": "phpliteadmin.png",
			"implies": [
				"PHP",
				"SQLite"
			],
			"website": "http://www.phpliteadmin.org/"
		},
		"phpwind": {
			"cats": [
				"1",
				"2"
			],
			"html": "Powered by <a href=\"[^\"]+phpwind\\.net",
			"icon": "phpwind.png",
			"implies": "PHP",
			"meta": {
				"generator": "^phpwind"
			},
			"website": "http://www.phpwind.net"
		},
		"prettyPhoto": {
			"cats": [
				"12"
			],
			"env": "pp_(?:alreadyInitialized|descriptions|images|titles)",
			"html": "(?:<link [^>]*href=\"[^\"]*prettyPhoto(?:\\.min)?\\.css|<a [^>]*rel=\"prettyPhoto)",
			"icon": "prettyPhoto.png",
			"implies": "jQuery",
			"script": "jquery\\.prettyPhoto\\.js",
			"website": "http://no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/"
		},
		"punBB": {
			"cats": [
				"2"
			],
			"html": "Powered by <a href=\"[^>]+punbb",
			"icon": "punBB.png",
			"implies": "PHP",
			"website": "http://punbb.informer.com"
		},
		"reCAPTCHA": {
			"cats": [
				"16"
			],
			"env": "^Recaptcha$",
			"html": "(?:<div[^>]+id=\"recaptcha_image|<link[^>]+recaptcha|document\\.getElementById\\('recaptcha')",
			"icon": "reCAPTCHA.png",
			"script": "(?:api-secure\\.recaptcha\\.net|recaptcha_ajax\\.js)",
			"website": "https://www.google.com/recaptcha/"
		},
		"sIFR": {
			"cats": [
				"17"
			],
			"icon": "sIFR.png",
			"script": "sifr\\.js",
			"website": "http://www.mikeindustries.com/blog/sifr"
		},
		"sNews": {
			"cats": [
				"1"
			],
			"icon": "sNews.png",
			"meta": {
				"generator": "sNews"
			},
			"website": "http://snewscms.com"
		},
		"script.aculo.us": {
			"cats": [
				"12"
			],
			"env": "^Scriptaculous$",
			"icon": "script.aculo.us.png",
			"script": "(?:scriptaculous|protoaculous)\\.js",
			"website": "http://script.aculo.us"
		},
		"shine.js": {
			"cats": [
				"25"
			],
			"env": "^Shine$",
			"script": "shine(?:\\.min)?\\.js",
			"website": "http://bigspaceship.github.io/shine.js/"
		},
		"swift.engine": {
			"cats": [
				"1"
			],
			"headers": {
				"X-Powered-By": "swift\\.engine"
			},
			"icon": "swift.engine.png",
			"website": "http://mittec.ru/default"
		},
		"three.js": {
			"cats": [
				"25"
			],
			"env": "^THREE$",
			"icon": "three.js.png",
			"script": "three(?:\\.min)?\\.js",
			"website": "http://threejs.org"
		},
		"thttpd": {
			"cats": [
				"22"
			],
			"headers": {
				"Server": "\bthttpd(?:/([\\d.]+))?\\;version:\\1"
			},
			"icon": "thttpd.png",
			"website": "http://acme.com/software/thttpd"
		},
		"total.js": {
			"cats": [
				"18"
			],
			"headers": {
				"X-Powered-By": "^total\\.js"
			},
			"icon": "total.js.png",
			"implies": "Node.js",
			"website": "http://totaljs.com"
		},
		"uCore": {
			"cats": [
				"1",
				"18"
			],
			"headers": {
				"Set-Cookie": "ucore"
			},
			"icon": "uCore.png",
			"implies": "PHP",
			"meta": {
				"generator": "uCore PHP Framework"
			},
			"website": "http://ucore.io"
		},
		"uKnowva": {
			"cats": [
				"1",
				"2",
				"18",
				"50"
			],
			"headers": {
				"X-Content-Encoded-By": "uKnowva ([\\d.]+)\\;version:\\1"
			},
			"html": "<a[^>]+>Powered by uKnowva</a>",
			"icon": "uKnowva.png",
			"implies": "PHP",
			"meta": {
				"generator": "uKnowva (?: ([\\d.]+))?\\;version:\\1"
			},
			"script": "/media/conv/js/jquery.js",
			"website": "http://uknowva.com"
		},
		"vBulletin": {
			"cats": [
				"2"
			],
			"env": "^(?:vBulletin|vB_[^g])",
			"icon": "vBulletin.png",
			"implies": "PHP",
			"meta": {
				"generator": "vBulletin"
			},
			"website": "http://www.vbulletin.com"
		},
		"vibecommerce": {
			"cats": [
				"6"
			],
			"excludes": "PrestaShop",
			"icon": "vibecommerce.png",
			"implies": "PHP",
			"meta": {
				"designer": "vibecommerce",
				"generator": "vibecommerce"
			},
			"website": "http://vibecommerce.com.br"
		},
		"viennaCMS": {
			"cats": [
				"1"
			],
			"html": "powered by <a href=\"[^>]+viennacms",
			"website": "http://www.viennacms.nl"
		},
		"webEdition": {
			"cats": [
				"1"
			],
			"icon": "webEdition.png",
			"meta": {
				"DC.title": "webEdition",
				"generator": "webEdition"
			},
			"website": "http://webedition.de/en"
		},
		"webpack": {
			"cats": [
				"44"
			],
			"env": "^webpackJsonp$",
			"icon": "webpack.svg",
			"website": "http://webpack.github.io"
		},
		"wpCache": {
			"cats": [
				"23"
			],
			"headers": {
				"X-Powered-By": "wpCache(?:/([\\d.]+))?\\;version:\\1"
			},
			"html": "<!--[^>]+wpCache",
			"icon": "wpCache.png",
			"implies": "PHP",
			"meta": {
				"generator": "wpCache",
				"keywords": "wpCache"
			},
			"website": "http://wpcache.co"
		},
		"xCharts": {
			"cats": [
				"25"
			],
			"env": "^xChart$",
			"html": "<link[^>]* href=\"[^\"]*xcharts(?:\\.min)?\\.css",
			"implies": "D3",
			"script": "xcharts\\.js",
			"website": "http://tenxer.github.io/xcharts/"
		},
		"xtCommerce": {
			"cats": [
				"6"
			],
			"html": "<div class=\"copyright\">[^<]+<a[^>]+>xt:Commerce",
			"icon": "xtCommerce.png",
			"meta": {
				"generator": "xt:Commerce"
			},
			"website": "http://www.xt-commerce.com"
		},
		"xui": {
			"cats": [
				"26",
				"12"
			],
			"env": "^xui$",
			"icon": "xui.png",
			"script": "[^a-z]xui.*\\.js",
			"website": "http://xuijs.com"
		}
	},
	"categories": {
		"1": {
			"name": "CMS",
			"priority": "1"
		},
		"2": {
			"name": "Message Boards",
			"priority": "1"
		},
		"3": {
			"name": "Database Managers",
			"priority": "9"
		},
		"4": {
			"name": "Documentation Tools",
			"priority": "9"
		},
		"5": {
			"name": "Widgets",
			"priority": "9"
		},
		"6": {
			"name": "Ecommerce",
			"priority": "1"
		},
		"7": {
			"name": "Photo Galleries",
			"priority": "1"
		},
		"8": {
			"name": "Wikis",
			"priority": "1"
		},
		"9": {
			"name": "Hosting Panels",
			"priority": "1"
		},
		"10": {
			"name": "Analytics",
			"priority": "9"
		},
		"11": {
			"name": "Blogs",
			"priority": "1"
		},
		"12": {
			"name": "JavaScript Frameworks",
			"priority": "3"
		},
		"13": {
			"name": "Issue Trackers",
			"priority": "9"
		},
		"14": {
			"name": "Video Players",
			"priority": "9"
		},
		"15": {
			"name": "Comment Systems",
			"priority": "9"
		},
		"16": {
			"name": "Captchas",
			"priority": "9"
		},
		"17": {
			"name": "Font Scripts",
			"priority": "9"
		},
		"18": {
			"name": "Web Frameworks",
			"priority": "2"
		},
		"19": {
			"name": "Miscellaneous",
			"priority": "9"
		},
		"20": {
			"name": "Editors",
			"priority": "9"
		},
		"21": {
			"name": "LMS",
			"priority": "1"
		},
		"22": {
			"name": "Web Servers",
			"priority": "9"
		},
		"23": {
			"name": "Cache Tools",
			"priority": "9"
		},
		"24": {
			"name": "Rich Text Editors",
			"priority": "9"
		},
		"25": {
			"name": "JavaScript Graphics",
			"priority": "3"
		},
		"26": {
			"name": "Mobile Frameworks",
			"priority": "3"
		},
		"27": {
			"name": "Programming Languages",
			"priority": "4"
		},
		"28": {
			"name": "Operating Systems",
			"priority": "5"
		},
		"29": {
			"name": "Search Engines",
			"priority": "9"
		},
		"30": {
			"name": "Web Mail",
			"priority": "9"
		},
		"31": {
			"name": "CDN",
			"priority": "9"
		},
		"32": {
			"name": "Marketing Automation",
			"priority": "9"
		},
		"33": {
			"name": "Web Server Extensions",
			"priority": "9"
		},
		"34": {
			"name": "Databases",
			"priority": "9"
		},
		"35": {
			"name": "Maps",
			"priority": "9"
		},
		"36": {
			"name": "Advertising Networks",
			"priority": "9"
		},
		"37": {
			"name": "Network Devices",
			"priority": "9"
		},
		"38": {
			"name": "Media Servers",
			"priority": "1"
		},
		"39": {
			"name": "Webcams",
			"priority": "9"
		},
		"40": {
			"name": "Printers",
			"priority": "9"
		},
		"41": {
			"name": "Payment Processors",
			"priority": "9"
		},
		"42": {
			"name": "Tag Managers",
			"priority": "9"
		},
		"43": {
			"name": "Paywalls",
			"priority": "9"
		},
		"44": {
			"name": "Build CI Systems",
			"priority": "9"
		},
		"45": {
			"name": "Control Systems",
			"priority": "9"
		},
		"46": {
			"name": "Remote Access",
			"priority": "9"
		},
		"47": {
			"name": "Dev Tools",
			"priority": "9"
		},
		"48": {
			"name": "Network Storage",
			"priority": "9"
		},
		"49": {
			"name": "Feed Readers",
			"priority": "1"
		},
		"50": {
			"name": "Document Management Systems",
			"priority": "1"
		},
		"51": {
			"name": "Landing Page Builders",
			"priority": "2"
		},
		"52": {
			"name": "Live Chat",
			"priority": "9"
		},
		"53": {
			"name": "CRM",
			"priority": "9"
		}
	}
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(console) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.browser = mod.exports;
  }
})(this, function (module) {
  /* webextension-polyfill - v0.1.1 - Thu Apr 13 2017 13:15:15 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined") {
    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = () => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "export": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "import": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "downloads": {
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getBrowserInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = promise => {
        return (...callbackArgs) => {
          if (chrome.runtime.lastError) {
            promise.reject(chrome.runtime.lastError);
          } else if (callbackArgs.length === 1) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            target[name](...args, makeCallback({ resolve, reject }));
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the orginal method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);

        let handlers = {
          has(target, prop) {
            return prop in target || prop in cache;
          },

          get(target, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });

              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(target, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },

          defineProperty(target, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(target, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        return new Proxy(target, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });

      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let result = listener(message, sender);

          if (isThenable(result)) {
            result.then(sendResponse, error => {
              console.error(error);
              sendResponse(error);
            });

            return true;
          } else if (result !== undefined) {
            sendResponse(result);
          }
        };
      });

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers)
        }
      };

      return wrapObject(chrome, staticWrappers, apiMetadata);
    };

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(); // eslint-disable-line no-undef
  } else {
    module.exports = browser; // eslint-disable-line no-undef
  }
});
//# sourceMappingURL=browser-polyfill.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(3);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = now

function now() {
    return new Date().getTime()
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Application {
  constructor(name, props, detected) {
    this.name = name;
    this.props = props;
    this.confidence = {};
    this.confidenceTotal = 0;
    this.detected = Boolean(detected);
    this.excludes = [];
    this.version = '';
    this.versions = [];
  }

  /**
   * Calculate confidence total
   */
  getConfidence() {
    var total = 0;

    for (var id in this.confidence) {
      total += this.confidence[id];
    }

    return this.confidenceTotal = Math.min(total, 100);
  }

  setDetected(pattern, type, value, key) {
    this.detected = true;

    // Set confidence level
    this.confidence[type + ' ' + (key ? key + ' ' : '') + pattern.regex] = pattern.confidence || 100;

    // Detect version number
    if (pattern.version) {
      var version = pattern.version;
      var matches = pattern.regex.exec(value);

      if (matches) {
        matches.forEach((match, i) => {
          // Parse ternary operator
          var ternary = new RegExp('\\\\' + i + '\\?([^:]+):(.*)$').exec(version);

          if (ternary && ternary.length === 3) {
            version = version.replace(ternary[0], match ? ternary[1] : ternary[2]);
          }

          // Replace back references
          version = version.replace(new RegExp('\\\\' + i, 'g'), match || '');
        });

        if (version && this.versions.indexOf(version) === -1) {
          this.versions.push(version);
        }

        if (this.versions.length) {
          // Use the longest detected version number
          this.version = this.versions.reduce((a, b) => a.length > b.length ? a : b)[0];
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Application);

/***/ })
/******/ ]);
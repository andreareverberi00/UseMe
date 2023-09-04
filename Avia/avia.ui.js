(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.avia = global.avia || {}, global.avia.ui = factory()));
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var avia_ui$1 = {};

	var interopRequireDefaultExports = {};
	var interopRequireDefault = {
	  get exports(){ return interopRequireDefaultExports; },
	  set exports(v){ interopRequireDefaultExports = v; },
	};

	(function (module) {
		function _interopRequireDefault(obj) {
		  return obj && obj.__esModule ? obj : {
		    "default": obj
		  };
		}
		module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (interopRequireDefault));

	var assertThisInitializedExports = {};
	var assertThisInitialized = {
	  get exports(){ return assertThisInitializedExports; },
	  set exports(v){ assertThisInitializedExports = v; },
	};

	var hasRequiredAssertThisInitialized;

	function requireAssertThisInitialized () {
		if (hasRequiredAssertThisInitialized) return assertThisInitializedExports;
		hasRequiredAssertThisInitialized = 1;
		(function (module) {
			function _assertThisInitialized(self) {
			  if (self === void 0) {
			    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			  }
			  return self;
			}
			module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (assertThisInitialized));
		return assertThisInitializedExports;
	}

	var getExports = {};
	var get = {
	  get exports(){ return getExports; },
	  set exports(v){ getExports = v; },
	};

	var superPropBaseExports = {};
	var superPropBase = {
	  get exports(){ return superPropBaseExports; },
	  set exports(v){ superPropBaseExports = v; },
	};

	var getPrototypeOfExports = {};
	var getPrototypeOf = {
	  get exports(){ return getPrototypeOfExports; },
	  set exports(v){ getPrototypeOfExports = v; },
	};

	var hasRequiredGetPrototypeOf;

	function requireGetPrototypeOf () {
		if (hasRequiredGetPrototypeOf) return getPrototypeOfExports;
		hasRequiredGetPrototypeOf = 1;
		(function (module) {
			function _getPrototypeOf(o) {
			  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
			    return o.__proto__ || Object.getPrototypeOf(o);
			  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
			  return _getPrototypeOf(o);
			}
			module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (getPrototypeOf));
		return getPrototypeOfExports;
	}

	var hasRequiredSuperPropBase;

	function requireSuperPropBase () {
		if (hasRequiredSuperPropBase) return superPropBaseExports;
		hasRequiredSuperPropBase = 1;
		(function (module) {
			var getPrototypeOf = requireGetPrototypeOf();
			function _superPropBase(object, property) {
			  while (!Object.prototype.hasOwnProperty.call(object, property)) {
			    object = getPrototypeOf(object);
			    if (object === null) break;
			  }
			  return object;
			}
			module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (superPropBase));
		return superPropBaseExports;
	}

	var hasRequiredGet;

	function requireGet () {
		if (hasRequiredGet) return getExports;
		hasRequiredGet = 1;
		(function (module) {
			var superPropBase = requireSuperPropBase();
			function _get() {
			  if (typeof Reflect !== "undefined" && Reflect.get) {
			    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
			  } else {
			    module.exports = _get = function _get(target, property, receiver) {
			      var base = superPropBase(target, property);
			      if (!base) return;
			      var desc = Object.getOwnPropertyDescriptor(base, property);
			      if (desc.get) {
			        return desc.get.call(arguments.length < 3 ? target : receiver);
			      }
			      return desc.value;
			    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
			  }
			  return _get.apply(this, arguments);
			}
			module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (get));
		return getExports;
	}

	var inheritsExports = {};
	var inherits = {
	  get exports(){ return inheritsExports; },
	  set exports(v){ inheritsExports = v; },
	};

	var setPrototypeOfExports = {};
	var setPrototypeOf = {
	  get exports(){ return setPrototypeOfExports; },
	  set exports(v){ setPrototypeOfExports = v; },
	};

	var hasRequiredSetPrototypeOf;

	function requireSetPrototypeOf () {
		if (hasRequiredSetPrototypeOf) return setPrototypeOfExports;
		hasRequiredSetPrototypeOf = 1;
		(function (module) {
			function _setPrototypeOf(o, p) {
			  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			    o.__proto__ = p;
			    return o;
			  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
			  return _setPrototypeOf(o, p);
			}
			module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (setPrototypeOf));
		return setPrototypeOfExports;
	}

	var hasRequiredInherits;

	function requireInherits () {
		if (hasRequiredInherits) return inheritsExports;
		hasRequiredInherits = 1;
		(function (module) {
			var setPrototypeOf = requireSetPrototypeOf();
			function _inherits(subClass, superClass) {
			  if (typeof superClass !== "function" && superClass !== null) {
			    throw new TypeError("Super expression must either be null or a function");
			  }
			  subClass.prototype = Object.create(superClass && superClass.prototype, {
			    constructor: {
			      value: subClass,
			      writable: true,
			      configurable: true
			    }
			  });
			  Object.defineProperty(subClass, "prototype", {
			    writable: false
			  });
			  if (superClass) setPrototypeOf(subClass, superClass);
			}
			module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (inherits));
		return inheritsExports;
	}

	var possibleConstructorReturnExports = {};
	var possibleConstructorReturn = {
	  get exports(){ return possibleConstructorReturnExports; },
	  set exports(v){ possibleConstructorReturnExports = v; },
	};

	var _typeofExports = {};
	var _typeof = {
	  get exports(){ return _typeofExports; },
	  set exports(v){ _typeofExports = v; },
	};

	var hasRequired_typeof;

	function require_typeof () {
		if (hasRequired_typeof) return _typeofExports;
		hasRequired_typeof = 1;
		(function (module) {
			function _typeof(obj) {
			  "@babel/helpers - typeof";

			  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
			    return typeof obj;
			  } : function (obj) {
			    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
			  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
			}
			module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (_typeof));
		return _typeofExports;
	}

	var hasRequiredPossibleConstructorReturn;

	function requirePossibleConstructorReturn () {
		if (hasRequiredPossibleConstructorReturn) return possibleConstructorReturnExports;
		hasRequiredPossibleConstructorReturn = 1;
		(function (module) {
			var _typeof = require_typeof()["default"];
			var assertThisInitialized = requireAssertThisInitialized();
			function _possibleConstructorReturn(self, call) {
			  if (call && (_typeof(call) === "object" || typeof call === "function")) {
			    return call;
			  } else if (call !== void 0) {
			    throw new TypeError("Derived constructors may only return object or undefined");
			  }
			  return assertThisInitialized(self);
			}
			module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (possibleConstructorReturn));
		return possibleConstructorReturnExports;
	}

	var regeneratorRuntimeExports = {};
	var regeneratorRuntime$1 = {
	  get exports(){ return regeneratorRuntimeExports; },
	  set exports(v){ regeneratorRuntimeExports = v; },
	};

	var hasRequiredRegeneratorRuntime;

	function requireRegeneratorRuntime () {
		if (hasRequiredRegeneratorRuntime) return regeneratorRuntimeExports;
		hasRequiredRegeneratorRuntime = 1;
		(function (module) {
			var _typeof = require_typeof()["default"];
			function _regeneratorRuntime() {
			  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
			    return exports;
			  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
			  var exports = {},
			    Op = Object.prototype,
			    hasOwn = Op.hasOwnProperty,
			    defineProperty = Object.defineProperty || function (obj, key, desc) {
			      obj[key] = desc.value;
			    },
			    $Symbol = "function" == typeof Symbol ? Symbol : {},
			    iteratorSymbol = $Symbol.iterator || "@@iterator",
			    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
			    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
			  function define(obj, key, value) {
			    return Object.defineProperty(obj, key, {
			      value: value,
			      enumerable: !0,
			      configurable: !0,
			      writable: !0
			    }), obj[key];
			  }
			  try {
			    define({}, "");
			  } catch (err) {
			    define = function define(obj, key, value) {
			      return obj[key] = value;
			    };
			  }
			  function wrap(innerFn, outerFn, self, tryLocsList) {
			    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
			      generator = Object.create(protoGenerator.prototype),
			      context = new Context(tryLocsList || []);
			    return defineProperty(generator, "_invoke", {
			      value: makeInvokeMethod(innerFn, self, context)
			    }), generator;
			  }
			  function tryCatch(fn, obj, arg) {
			    try {
			      return {
			        type: "normal",
			        arg: fn.call(obj, arg)
			      };
			    } catch (err) {
			      return {
			        type: "throw",
			        arg: err
			      };
			    }
			  }
			  exports.wrap = wrap;
			  var ContinueSentinel = {};
			  function Generator() {}
			  function GeneratorFunction() {}
			  function GeneratorFunctionPrototype() {}
			  var IteratorPrototype = {};
			  define(IteratorPrototype, iteratorSymbol, function () {
			    return this;
			  });
			  var getProto = Object.getPrototypeOf,
			    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
			  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
			  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
			  function defineIteratorMethods(prototype) {
			    ["next", "throw", "return"].forEach(function (method) {
			      define(prototype, method, function (arg) {
			        return this._invoke(method, arg);
			      });
			    });
			  }
			  function AsyncIterator(generator, PromiseImpl) {
			    function invoke(method, arg, resolve, reject) {
			      var record = tryCatch(generator[method], generator, arg);
			      if ("throw" !== record.type) {
			        var result = record.arg,
			          value = result.value;
			        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
			          invoke("next", value, resolve, reject);
			        }, function (err) {
			          invoke("throw", err, resolve, reject);
			        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
			          result.value = unwrapped, resolve(result);
			        }, function (error) {
			          return invoke("throw", error, resolve, reject);
			        });
			      }
			      reject(record.arg);
			    }
			    var previousPromise;
			    defineProperty(this, "_invoke", {
			      value: function value(method, arg) {
			        function callInvokeWithMethodAndArg() {
			          return new PromiseImpl(function (resolve, reject) {
			            invoke(method, arg, resolve, reject);
			          });
			        }
			        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
			      }
			    });
			  }
			  function makeInvokeMethod(innerFn, self, context) {
			    var state = "suspendedStart";
			    return function (method, arg) {
			      if ("executing" === state) throw new Error("Generator is already running");
			      if ("completed" === state) {
			        if ("throw" === method) throw arg;
			        return {
			          value: void 0,
			          done: !0
			        };
			      }
			      for (context.method = method, context.arg = arg;;) {
			        var delegate = context.delegate;
			        if (delegate) {
			          var delegateResult = maybeInvokeDelegate(delegate, context);
			          if (delegateResult) {
			            if (delegateResult === ContinueSentinel) continue;
			            return delegateResult;
			          }
			        }
			        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
			          if ("suspendedStart" === state) throw state = "completed", context.arg;
			          context.dispatchException(context.arg);
			        } else "return" === context.method && context.abrupt("return", context.arg);
			        state = "executing";
			        var record = tryCatch(innerFn, self, context);
			        if ("normal" === record.type) {
			          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
			          return {
			            value: record.arg,
			            done: context.done
			          };
			        }
			        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
			      }
			    };
			  }
			  function maybeInvokeDelegate(delegate, context) {
			    var methodName = context.method,
			      method = delegate.iterator[methodName];
			    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
			    var record = tryCatch(method, delegate.iterator, context.arg);
			    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
			    var info = record.arg;
			    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
			  }
			  function pushTryEntry(locs) {
			    var entry = {
			      tryLoc: locs[0]
			    };
			    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
			  }
			  function resetTryEntry(entry) {
			    var record = entry.completion || {};
			    record.type = "normal", delete record.arg, entry.completion = record;
			  }
			  function Context(tryLocsList) {
			    this.tryEntries = [{
			      tryLoc: "root"
			    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
			  }
			  function values(iterable) {
			    if (iterable || "" === iterable) {
			      var iteratorMethod = iterable[iteratorSymbol];
			      if (iteratorMethod) return iteratorMethod.call(iterable);
			      if ("function" == typeof iterable.next) return iterable;
			      if (!isNaN(iterable.length)) {
			        var i = -1,
			          next = function next() {
			            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
			            return next.value = undefined, next.done = !0, next;
			          };
			        return next.next = next;
			      }
			    }
			    throw new TypeError(_typeof(iterable) + " is not iterable");
			  }
			  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
			    value: GeneratorFunctionPrototype,
			    configurable: !0
			  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
			    value: GeneratorFunction,
			    configurable: !0
			  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
			    var ctor = "function" == typeof genFun && genFun.constructor;
			    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
			  }, exports.mark = function (genFun) {
			    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
			  }, exports.awrap = function (arg) {
			    return {
			      __await: arg
			    };
			  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
			    return this;
			  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
			    void 0 === PromiseImpl && (PromiseImpl = Promise);
			    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
			    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
			      return result.done ? result.value : iter.next();
			    });
			  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
			    return this;
			  }), define(Gp, "toString", function () {
			    return "[object Generator]";
			  }), exports.keys = function (val) {
			    var object = Object(val),
			      keys = [];
			    for (var key in object) keys.push(key);
			    return keys.reverse(), function next() {
			      for (; keys.length;) {
			        var key = keys.pop();
			        if (key in object) return next.value = key, next.done = !1, next;
			      }
			      return next.done = !0, next;
			    };
			  }, exports.values = values, Context.prototype = {
			    constructor: Context,
			    reset: function reset(skipTempReset) {
			      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
			    },
			    stop: function stop() {
			      this.done = !0;
			      var rootRecord = this.tryEntries[0].completion;
			      if ("throw" === rootRecord.type) throw rootRecord.arg;
			      return this.rval;
			    },
			    dispatchException: function dispatchException(exception) {
			      if (this.done) throw exception;
			      var context = this;
			      function handle(loc, caught) {
			        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
			      }
			      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
			        var entry = this.tryEntries[i],
			          record = entry.completion;
			        if ("root" === entry.tryLoc) return handle("end");
			        if (entry.tryLoc <= this.prev) {
			          var hasCatch = hasOwn.call(entry, "catchLoc"),
			            hasFinally = hasOwn.call(entry, "finallyLoc");
			          if (hasCatch && hasFinally) {
			            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
			            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
			          } else if (hasCatch) {
			            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
			          } else {
			            if (!hasFinally) throw new Error("try statement without catch or finally");
			            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
			          }
			        }
			      }
			    },
			    abrupt: function abrupt(type, arg) {
			      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
			        var entry = this.tryEntries[i];
			        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
			          var finallyEntry = entry;
			          break;
			        }
			      }
			      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
			      var record = finallyEntry ? finallyEntry.completion : {};
			      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
			    },
			    complete: function complete(record, afterLoc) {
			      if ("throw" === record.type) throw record.arg;
			      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
			    },
			    finish: function finish(finallyLoc) {
			      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
			        var entry = this.tryEntries[i];
			        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
			      }
			    },
			    "catch": function _catch(tryLoc) {
			      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
			        var entry = this.tryEntries[i];
			        if (entry.tryLoc === tryLoc) {
			          var record = entry.completion;
			          if ("throw" === record.type) {
			            var thrown = record.arg;
			            resetTryEntry(entry);
			          }
			          return thrown;
			        }
			      }
			      throw new Error("illegal catch attempt");
			    },
			    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
			      return this.delegate = {
			        iterator: values(iterable),
			        resultName: resultName,
			        nextLoc: nextLoc
			      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
			    }
			  }, exports;
			}
			module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (regeneratorRuntime$1));
		return regeneratorRuntimeExports;
	}

	var regenerator;
	var hasRequiredRegenerator;

	function requireRegenerator () {
		if (hasRequiredRegenerator) return regenerator;
		hasRequiredRegenerator = 1;
		// TODO(Babel 8): Remove this file.

		var runtime = requireRegeneratorRuntime()();
		regenerator = runtime;

		// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
		try {
		  regeneratorRuntime = runtime;
		} catch (accidentalStrictMode) {
		  if (typeof globalThis === "object") {
		    globalThis.regeneratorRuntime = runtime;
		  } else {
		    Function("r", "regeneratorRuntime = r")(runtime);
		  }
		}
		return regenerator;
	}

	var definePropertyExports = {};
	var defineProperty = {
	  get exports(){ return definePropertyExports; },
	  set exports(v){ definePropertyExports = v; },
	};

	var toPropertyKeyExports = {};
	var toPropertyKey = {
	  get exports(){ return toPropertyKeyExports; },
	  set exports(v){ toPropertyKeyExports = v; },
	};

	var toPrimitiveExports = {};
	var toPrimitive = {
	  get exports(){ return toPrimitiveExports; },
	  set exports(v){ toPrimitiveExports = v; },
	};

	var hasRequiredToPrimitive;

	function requireToPrimitive () {
		if (hasRequiredToPrimitive) return toPrimitiveExports;
		hasRequiredToPrimitive = 1;
		(function (module) {
			var _typeof = require_typeof()["default"];
			function _toPrimitive(input, hint) {
			  if (_typeof(input) !== "object" || input === null) return input;
			  var prim = input[Symbol.toPrimitive];
			  if (prim !== undefined) {
			    var res = prim.call(input, hint || "default");
			    if (_typeof(res) !== "object") return res;
			    throw new TypeError("@@toPrimitive must return a primitive value.");
			  }
			  return (hint === "string" ? String : Number)(input);
			}
			module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (toPrimitive));
		return toPrimitiveExports;
	}

	var hasRequiredToPropertyKey;

	function requireToPropertyKey () {
		if (hasRequiredToPropertyKey) return toPropertyKeyExports;
		hasRequiredToPropertyKey = 1;
		(function (module) {
			var _typeof = require_typeof()["default"];
			var toPrimitive = requireToPrimitive();
			function _toPropertyKey(arg) {
			  var key = toPrimitive(arg, "string");
			  return _typeof(key) === "symbol" ? key : String(key);
			}
			module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (toPropertyKey));
		return toPropertyKeyExports;
	}

	var hasRequiredDefineProperty;

	function requireDefineProperty () {
		if (hasRequiredDefineProperty) return definePropertyExports;
		hasRequiredDefineProperty = 1;
		(function (module) {
			var toPropertyKey = requireToPropertyKey();
			function _defineProperty(obj, key, value) {
			  key = toPropertyKey(key);
			  if (key in obj) {
			    Object.defineProperty(obj, key, {
			      value: value,
			      enumerable: true,
			      configurable: true,
			      writable: true
			    });
			  } else {
			    obj[key] = value;
			  }
			  return obj;
			}
			module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (defineProperty));
		return definePropertyExports;
	}

	var createClassExports = {};
	var createClass = {
	  get exports(){ return createClassExports; },
	  set exports(v){ createClassExports = v; },
	};

	var hasRequiredCreateClass;

	function requireCreateClass () {
		if (hasRequiredCreateClass) return createClassExports;
		hasRequiredCreateClass = 1;
		(function (module) {
			var toPropertyKey = requireToPropertyKey();
			function _defineProperties(target, props) {
			  for (var i = 0; i < props.length; i++) {
			    var descriptor = props[i];
			    descriptor.enumerable = descriptor.enumerable || false;
			    descriptor.configurable = true;
			    if ("value" in descriptor) descriptor.writable = true;
			    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
			  }
			}
			function _createClass(Constructor, protoProps, staticProps) {
			  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
			  if (staticProps) _defineProperties(Constructor, staticProps);
			  Object.defineProperty(Constructor, "prototype", {
			    writable: false
			  });
			  return Constructor;
			}
			module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (createClass));
		return createClassExports;
	}

	var classCallCheckExports = {};
	var classCallCheck = {
	  get exports(){ return classCallCheckExports; },
	  set exports(v){ classCallCheckExports = v; },
	};

	var hasRequiredClassCallCheck;

	function requireClassCallCheck () {
		if (hasRequiredClassCallCheck) return classCallCheckExports;
		hasRequiredClassCallCheck = 1;
		(function (module) {
			function _classCallCheck(instance, Constructor) {
			  if (!(instance instanceof Constructor)) {
			    throw new TypeError("Cannot call a class as a function");
			  }
			}
			module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (classCallCheck));
		return classCallCheckExports;
	}

	var asyncToGeneratorExports = {};
	var asyncToGenerator = {
	  get exports(){ return asyncToGeneratorExports; },
	  set exports(v){ asyncToGeneratorExports = v; },
	};

	var hasRequiredAsyncToGenerator;

	function requireAsyncToGenerator () {
		if (hasRequiredAsyncToGenerator) return asyncToGeneratorExports;
		hasRequiredAsyncToGenerator = 1;
		(function (module) {
			function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
			  try {
			    var info = gen[key](arg);
			    var value = info.value;
			  } catch (error) {
			    reject(error);
			    return;
			  }
			  if (info.done) {
			    resolve(value);
			  } else {
			    Promise.resolve(value).then(_next, _throw);
			  }
			}
			function _asyncToGenerator(fn) {
			  return function () {
			    var self = this,
			      args = arguments;
			    return new Promise(function (resolve, reject) {
			      var gen = fn.apply(self, args);
			      function _next(value) {
			        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
			      }
			      function _throw(err) {
			        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
			      }
			      _next(undefined);
			    });
			  };
			}
			module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (asyncToGenerator));
		return asyncToGeneratorExports;
	}

	var slicedToArrayExports = {};
	var slicedToArray = {
	  get exports(){ return slicedToArrayExports; },
	  set exports(v){ slicedToArrayExports = v; },
	};

	var arrayWithHolesExports = {};
	var arrayWithHoles = {
	  get exports(){ return arrayWithHolesExports; },
	  set exports(v){ arrayWithHolesExports = v; },
	};

	var hasRequiredArrayWithHoles;

	function requireArrayWithHoles () {
		if (hasRequiredArrayWithHoles) return arrayWithHolesExports;
		hasRequiredArrayWithHoles = 1;
		(function (module) {
			function _arrayWithHoles(arr) {
			  if (Array.isArray(arr)) return arr;
			}
			module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (arrayWithHoles));
		return arrayWithHolesExports;
	}

	var iterableToArrayLimitExports = {};
	var iterableToArrayLimit = {
	  get exports(){ return iterableToArrayLimitExports; },
	  set exports(v){ iterableToArrayLimitExports = v; },
	};

	var hasRequiredIterableToArrayLimit;

	function requireIterableToArrayLimit () {
		if (hasRequiredIterableToArrayLimit) return iterableToArrayLimitExports;
		hasRequiredIterableToArrayLimit = 1;
		(function (module) {
			function _iterableToArrayLimit(arr, i) {
			  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
			  if (null != _i) {
			    var _s,
			      _e,
			      _x,
			      _r,
			      _arr = [],
			      _n = !0,
			      _d = !1;
			    try {
			      if (_x = (_i = _i.call(arr)).next, 0 === i) {
			        if (Object(_i) !== _i) return;
			        _n = !1;
			      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
			    } catch (err) {
			      _d = !0, _e = err;
			    } finally {
			      try {
			        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
			      } finally {
			        if (_d) throw _e;
			      }
			    }
			    return _arr;
			  }
			}
			module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (iterableToArrayLimit));
		return iterableToArrayLimitExports;
	}

	var unsupportedIterableToArrayExports = {};
	var unsupportedIterableToArray = {
	  get exports(){ return unsupportedIterableToArrayExports; },
	  set exports(v){ unsupportedIterableToArrayExports = v; },
	};

	var arrayLikeToArrayExports = {};
	var arrayLikeToArray = {
	  get exports(){ return arrayLikeToArrayExports; },
	  set exports(v){ arrayLikeToArrayExports = v; },
	};

	var hasRequiredArrayLikeToArray;

	function requireArrayLikeToArray () {
		if (hasRequiredArrayLikeToArray) return arrayLikeToArrayExports;
		hasRequiredArrayLikeToArray = 1;
		(function (module) {
			function _arrayLikeToArray(arr, len) {
			  if (len == null || len > arr.length) len = arr.length;
			  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
			  return arr2;
			}
			module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (arrayLikeToArray));
		return arrayLikeToArrayExports;
	}

	var hasRequiredUnsupportedIterableToArray;

	function requireUnsupportedIterableToArray () {
		if (hasRequiredUnsupportedIterableToArray) return unsupportedIterableToArrayExports;
		hasRequiredUnsupportedIterableToArray = 1;
		(function (module) {
			var arrayLikeToArray = requireArrayLikeToArray();
			function _unsupportedIterableToArray(o, minLen) {
			  if (!o) return;
			  if (typeof o === "string") return arrayLikeToArray(o, minLen);
			  var n = Object.prototype.toString.call(o).slice(8, -1);
			  if (n === "Object" && o.constructor) n = o.constructor.name;
			  if (n === "Map" || n === "Set") return Array.from(o);
			  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
			}
			module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (unsupportedIterableToArray));
		return unsupportedIterableToArrayExports;
	}

	var nonIterableRestExports = {};
	var nonIterableRest = {
	  get exports(){ return nonIterableRestExports; },
	  set exports(v){ nonIterableRestExports = v; },
	};

	var hasRequiredNonIterableRest;

	function requireNonIterableRest () {
		if (hasRequiredNonIterableRest) return nonIterableRestExports;
		hasRequiredNonIterableRest = 1;
		(function (module) {
			function _nonIterableRest() {
			  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
			}
			module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (nonIterableRest));
		return nonIterableRestExports;
	}

	var hasRequiredSlicedToArray;

	function requireSlicedToArray () {
		if (hasRequiredSlicedToArray) return slicedToArrayExports;
		hasRequiredSlicedToArray = 1;
		(function (module) {
			var arrayWithHoles = requireArrayWithHoles();
			var iterableToArrayLimit = requireIterableToArrayLimit();
			var unsupportedIterableToArray = requireUnsupportedIterableToArray();
			var nonIterableRest = requireNonIterableRest();
			function _slicedToArray(arr, i) {
			  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
			}
			module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (slicedToArray));
		return slicedToArrayExports;
	}

	var toConsumableArrayExports = {};
	var toConsumableArray = {
	  get exports(){ return toConsumableArrayExports; },
	  set exports(v){ toConsumableArrayExports = v; },
	};

	var arrayWithoutHolesExports = {};
	var arrayWithoutHoles = {
	  get exports(){ return arrayWithoutHolesExports; },
	  set exports(v){ arrayWithoutHolesExports = v; },
	};

	var hasRequiredArrayWithoutHoles;

	function requireArrayWithoutHoles () {
		if (hasRequiredArrayWithoutHoles) return arrayWithoutHolesExports;
		hasRequiredArrayWithoutHoles = 1;
		(function (module) {
			var arrayLikeToArray = requireArrayLikeToArray();
			function _arrayWithoutHoles(arr) {
			  if (Array.isArray(arr)) return arrayLikeToArray(arr);
			}
			module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (arrayWithoutHoles));
		return arrayWithoutHolesExports;
	}

	var iterableToArrayExports = {};
	var iterableToArray = {
	  get exports(){ return iterableToArrayExports; },
	  set exports(v){ iterableToArrayExports = v; },
	};

	var hasRequiredIterableToArray;

	function requireIterableToArray () {
		if (hasRequiredIterableToArray) return iterableToArrayExports;
		hasRequiredIterableToArray = 1;
		(function (module) {
			function _iterableToArray(iter) {
			  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
			}
			module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (iterableToArray));
		return iterableToArrayExports;
	}

	var nonIterableSpreadExports = {};
	var nonIterableSpread = {
	  get exports(){ return nonIterableSpreadExports; },
	  set exports(v){ nonIterableSpreadExports = v; },
	};

	var hasRequiredNonIterableSpread;

	function requireNonIterableSpread () {
		if (hasRequiredNonIterableSpread) return nonIterableSpreadExports;
		hasRequiredNonIterableSpread = 1;
		(function (module) {
			function _nonIterableSpread() {
			  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
			}
			module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (nonIterableSpread));
		return nonIterableSpreadExports;
	}

	var hasRequiredToConsumableArray;

	function requireToConsumableArray () {
		if (hasRequiredToConsumableArray) return toConsumableArrayExports;
		hasRequiredToConsumableArray = 1;
		(function (module) {
			var arrayWithoutHoles = requireArrayWithoutHoles();
			var iterableToArray = requireIterableToArray();
			var unsupportedIterableToArray = requireUnsupportedIterableToArray();
			var nonIterableSpread = requireNonIterableSpread();
			function _toConsumableArray(arr) {
			  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
			}
			module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (toConsumableArray));
		return toConsumableArrayExports;
	}

	(function (exports) {

		var _interopRequireDefault = interopRequireDefaultExports;
		var _assertThisInitialized2 = _interopRequireDefault(requireAssertThisInitialized());
		var _get2 = _interopRequireDefault(requireGet());
		var _inherits2 = _interopRequireDefault(requireInherits());
		var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
		var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
		var _regenerator = _interopRequireDefault(requireRegenerator());
		var _defineProperty2 = _interopRequireDefault(requireDefineProperty());
		var _createClass2 = _interopRequireDefault(requireCreateClass());
		var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
		var _asyncToGenerator2 = _interopRequireDefault(requireAsyncToGenerator());
		var _slicedToArray2 = _interopRequireDefault(requireSlicedToArray());
		var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
		var _typeof2 = _interopRequireDefault(require_typeof());
		var _en, _es;
		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
		function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
		function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
		function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var BUILD = {
		  allRenderFn: false,
		  cmpDidLoad: true,
		  cmpDidUnload: false,
		  cmpDidUpdate: true,
		  cmpDidRender: true,
		  cmpWillLoad: true,
		  cmpWillUpdate: true,
		  cmpWillRender: true,
		  connectedCallback: true,
		  disconnectedCallback: true,
		  element: true,
		  event: true,
		  hasRenderFn: true,
		  lifecycle: true,
		  hostListener: true,
		  hostListenerTargetWindow: true,
		  hostListenerTargetDocument: true,
		  hostListenerTargetBody: true,
		  hostListenerTargetParent: false,
		  hostListenerTarget: true,
		  member: true,
		  method: true,
		  mode: true,
		  observeAttribute: true,
		  prop: true,
		  propMutable: true,
		  reflect: true,
		  scoped: true,
		  shadowDom: true,
		  slot: true,
		  cssAnnotations: true,
		  state: true,
		  style: true,
		  svg: true,
		  updatable: true,
		  vdomAttribute: true,
		  vdomXlink: true,
		  vdomClass: true,
		  vdomFunctional: true,
		  vdomKey: true,
		  vdomListener: true,
		  vdomRef: true,
		  vdomPropOrAttr: true,
		  vdomRender: true,
		  vdomStyle: true,
		  vdomText: true,
		  watchCallback: true,
		  taskQueue: true,
		  hotModuleReplacement: false,
		  isDebug: false,
		  isDev: false,
		  isTesting: false,
		  hydrateServerSide: false,
		  hydrateClientSide: false,
		  lifecycleDOMEvents: false,
		  lazyLoad: false,
		  profile: false,
		  slotRelocation: true,
		  appendChildSlotFix: false,
		  cloneNodeFix: false,
		  hydratedAttribute: false,
		  hydratedClass: true,
		  safari10: false,
		  scriptDataOpts: false,
		  scopedSlotTextContentFix: false,
		  shadowDomShim: false,
		  slotChildNodesFix: false,
		  invisiblePrehydration: true,
		  propBoolean: true,
		  propNumber: true,
		  propString: true,
		  cssVarShim: false,
		  constructableCSS: true,
		  cmpShouldUpdate: true,
		  devTools: false,
		  dynamicImportShim: false,
		  shadowDelegatesFocus: true,
		  initializeNextTick: false,
		  asyncLoading: false,
		  asyncQueue: false,
		  transformTagName: false,
		  attachStyles: true
		};

		/**
		 * Virtual DOM patching algorithm based on Snabbdom by
		 * Simon Friis Vindum (@paldepind)
		 * Licensed under the MIT License
		 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
		 *
		 * Modified for Stencil's renderer and slot projection
		 */
		var scopeId;
		var contentRef;
		var hostTagName;
		var useNativeShadowDom = false;
		var checkSlotFallbackVisibility = false;
		var checkSlotRelocate = false;
		var isSvgMode = false;
		var renderingRef = null;
		var queuePending = false;
		var setAssetPath = function setAssetPath(path) {
		  return plt.$resourcesUrl$ = path;
		};
		var createTime = function createTime(fnName) {
		  {
		    return function () {
		      return;
		    };
		  }
		};
		var XLINK_NS = 'http://www.w3.org/1999/xlink';
		/**
		 * Default style mode id
		 */
		/**
		 * Reusable empty obj/array
		 * Don't add values to these!!
		 */
		var EMPTY_OBJ = {};
		/**
		 * Namespaces
		 */
		var SVG_NS = 'http://www.w3.org/2000/svg';
		var HTML_NS = 'http://www.w3.org/1999/xhtml';
		var isDef = function isDef(v) {
		  return v != null;
		};
		var isComplexType = function isComplexType(o) {
		  // https://jsperf.com/typeof-fn-object/5
		  o = (0, _typeof2["default"])(o);
		  return o === 'object' || o === 'function';
		};
		/**
		 * Production h() function based on Preact by
		 * Jason Miller (@developit)
		 * Licensed under the MIT License
		 * https://github.com/developit/preact/blob/master/LICENSE
		 *
		 * Modified for Stencil's compiler and vdom
		 */
		// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
		// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
		var h = function h(nodeName, vnodeData) {
		  var child = null;
		  var key = null;
		  var slotName = null;
		  var simple = false;
		  var lastSimple = false;
		  var vNodeChildren = [];
		  var walk = function walk(c) {
		    for (var i = 0; i < c.length; i++) {
		      child = c[i];
		      if (Array.isArray(child)) {
		        walk(child);
		      } else if (child != null && typeof child !== 'boolean') {
		        if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
		          child = String(child);
		        }
		        if (simple && lastSimple) {
		          // If the previous child was simple (string), we merge both
		          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
		        } else {
		          // Append a new vNode, if it's text, we create a text vNode
		          vNodeChildren.push(simple ? newVNode(null, child) : child);
		        }
		        lastSimple = simple;
		      }
		    }
		  };
		  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		    children[_key - 2] = arguments[_key];
		  }
		  walk(children);
		  if (vnodeData) {
		    // normalize class / classname attributes
		    if (vnodeData.key) {
		      key = vnodeData.key;
		    }
		    if (vnodeData.name) {
		      slotName = vnodeData.name;
		    }
		    {
		      var classData = vnodeData.className || vnodeData["class"];
		      if (classData) {
		        vnodeData["class"] = (0, _typeof2["default"])(classData) !== 'object' ? classData : Object.keys(classData).filter(function (k) {
		          return classData[k];
		        }).join(' ');
		      }
		    }
		  }
		  if (typeof nodeName === 'function') {
		    // nodeName is a functional component
		    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
		  }
		  var vnode = newVNode(nodeName, null);
		  vnode.$attrs$ = vnodeData;
		  if (vNodeChildren.length > 0) {
		    vnode.$children$ = vNodeChildren;
		  }
		  {
		    vnode.$key$ = key;
		  }
		  {
		    vnode.$name$ = slotName;
		  }
		  return vnode;
		};
		var newVNode = function newVNode(tag, text) {
		  var vnode = {
		    $flags$: 0,
		    $tag$: tag,
		    $text$: text,
		    $elm$: null,
		    $children$: null
		  };
		  {
		    vnode.$attrs$ = null;
		  }
		  {
		    vnode.$key$ = null;
		  }
		  {
		    vnode.$name$ = null;
		  }
		  return vnode;
		};
		var Host = {};
		var isHost = function isHost(node) {
		  return node && node.$tag$ === Host;
		};
		/**
		 * Implementation of {@link d.FunctionalUtilities} for Stencil's VDom.
		 *
		 * Note that these functions convert from {@link d.VNode} to
		 * {@link d.ChildNode} to give functional component developers a friendly
		 * interface.
		 */
		var vdomFnUtils = {
		  forEach: function forEach(children, cb) {
		    return children.map(convertToPublic).forEach(cb);
		  },
		  map: function map(children, cb) {
		    return children.map(convertToPublic).map(cb).map(convertToPrivate);
		  }
		};
		var convertToPublic = function convertToPublic(node) {
		  return {
		    vattrs: node.$attrs$,
		    vchildren: node.$children$,
		    vkey: node.$key$,
		    vname: node.$name$,
		    vtag: node.$tag$,
		    vtext: node.$text$
		  };
		};
		var convertToPrivate = function convertToPrivate(node) {
		  if (typeof node.vtag === 'function') {
		    var vnodeData = Object.assign({}, node.vattrs);
		    if (node.vkey) {
		      vnodeData.key = node.vkey;
		    }
		    if (node.vname) {
		      vnodeData.name = node.vname;
		    }
		    return h.apply(void 0, [node.vtag, vnodeData].concat((0, _toConsumableArray2["default"])(node.vchildren || [])));
		  }
		  var vnode = newVNode(node.vtag, node.vtext);
		  vnode.$attrs$ = node.vattrs;
		  vnode.$children$ = node.vchildren;
		  vnode.$key$ = node.vkey;
		  vnode.$name$ = node.vname;
		  return vnode;
		};
		// Private
		var computeMode = function computeMode(elm) {
		  return modeResolutionChain.map(function (h) {
		    return h(elm);
		  }).find(function (m) {
		    return !!m;
		  });
		};
		/**
		 * Parse a new property value for a given property type.
		 *
		 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
		 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
		 *   1. `any`, the type given to `propValue` in the function signature
		 *   2. the type stored from `propType`.
		 *
		 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
		 *
		 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
		 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
		 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
		 * ```tsx
		 * <my-cmp prop-val={0}></my-cmp>
		 * ```
		 *
		 * HTML prop values on the other hand, will always a string
		 *
		 * @param propValue the new value to coerce to some type
		 * @param propType the type of the prop, expressed as a binary number
		 * @returns the parsed/coerced value
		 */
		var parsePropertyValue = function parsePropertyValue(propValue, propType) {
		  // ensure this value is of the correct prop type
		  if (propValue != null && !isComplexType(propValue)) {
		    if (propType & 4 /* MEMBER_FLAGS.Boolean */) {
		      // per the HTML spec, any string value means it is a boolean true value
		      // but we'll cheat here and say that the string "false" is the boolean false
		      return propValue === 'false' ? false : propValue === '' || !!propValue;
		    }
		    if (propType & 2 /* MEMBER_FLAGS.Number */) {
		      // force it to be a number
		      return parseFloat(propValue);
		    }
		    if (propType & 1 /* MEMBER_FLAGS.String */) {
		      // could have been passed as a number or boolean
		      // but we still want it as a string
		      return String(propValue);
		    }
		    // redundant return here for better minification
		    return propValue;
		  }
		  // not sure exactly what type we want
		  // so no need to change to a different type
		  return propValue;
		};
		var getElement = function getElement(ref) {
		  return ref;
		};
		var createEvent = function createEvent(ref, name, flags) {
		  var elm = getElement(ref);
		  return {
		    emit: function emit(detail) {
		      return emitEvent(elm, name, {
		        bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
		        composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
		        cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
		        detail: detail
		      });
		    }
		  };
		};
		/**
		 * Helper function to create & dispatch a custom Event on a provided target
		 * @param elm the target of the Event
		 * @param name the name to give the custom Event
		 * @param opts options for configuring a custom Event
		 * @returns the custom Event
		 */
		var emitEvent = function emitEvent(elm, name, opts) {
		  var ev = plt.ce(name, opts);
		  elm.dispatchEvent(ev);
		  return ev;
		};
		var rootAppliedStyles = /*@__PURE__*/new WeakMap();
		var registerStyle = function registerStyle(scopeId, cssText, allowCS) {
		  var style = styles.get(scopeId);
		  if (supportsConstructableStylesheets && allowCS) {
		    style = style || new CSSStyleSheet();
		    if (typeof style === 'string') {
		      style = cssText;
		    } else {
		      style.replaceSync(cssText);
		    }
		  } else {
		    style = cssText;
		  }
		  styles.set(scopeId, style);
		};
		var addStyle = function addStyle(styleContainerNode, cmpMeta, mode, hostElm) {
		  var scopeId = getScopeId(cmpMeta, mode);
		  var style = styles.get(scopeId);
		  // if an element is NOT connected then getRootNode() will return the wrong root node
		  // so the fallback is to always use the document for the root node in those cases
		  styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
		  if (style) {
		    if (typeof style === 'string') {
		      styleContainerNode = styleContainerNode.head || styleContainerNode;
		      var appliedStyles = rootAppliedStyles.get(styleContainerNode);
		      var styleElm;
		      if (!appliedStyles) {
		        rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
		      }
		      if (!appliedStyles.has(scopeId)) {
		        {
		          {
		            styleElm = doc.createElement('style');
		            styleElm.innerHTML = style;
		          }
		          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
		        }
		        if (appliedStyles) {
		          appliedStyles.add(scopeId);
		        }
		      }
		    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
		      styleContainerNode.adoptedStyleSheets = [].concat((0, _toConsumableArray2["default"])(styleContainerNode.adoptedStyleSheets), [style]);
		    }
		  }
		  return scopeId;
		};
		var attachStyles = function attachStyles(hostRef) {
		  var cmpMeta = hostRef.$cmpMeta$;
		  var elm = hostRef.$hostElement$;
		  var flags = cmpMeta.$flags$;
		  var endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
		  var scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$);
		  if (flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
		    // only required when we're NOT using native shadow dom (slot)
		    // or this browser doesn't support native shadow dom
		    // and this host element was NOT created with SSR
		    // let's pick out the inner content for slot projection
		    // create a node to represent where the original
		    // content was first placed, which is useful later on
		    // DOM WRITE!!
		    elm['s-sc'] = scopeId;
		    elm.classList.add(scopeId + '-h');
		    if (flags & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
		      elm.classList.add(scopeId + '-s');
		    }
		  }
		  endAttachStyles();
		};
		var getScopeId = function getScopeId(cmp, mode) {
		  return 'sc-' + (mode && cmp.$flags$ & 32 /* CMP_FLAGS.hasMode */ ? cmp.$tagName$ + '-' + mode : cmp.$tagName$);
		};
		/**
		 * Production setAccessor() function based on Preact by
		 * Jason Miller (@developit)
		 * Licensed under the MIT License
		 * https://github.com/developit/preact/blob/master/LICENSE
		 *
		 * Modified for Stencil's compiler and vdom
		 */
		var setAccessor = function setAccessor(elm, memberName, oldValue, newValue, isSvg, flags) {
		  if (oldValue !== newValue) {
		    var isProp = isMemberInElement(elm, memberName);
		    var ln = memberName.toLowerCase();
		    if (memberName === 'class') {
		      var classList = elm.classList;
		      var oldClasses = parseClassList(oldValue);
		      var newClasses = parseClassList(newValue);
		      classList.remove.apply(classList, (0, _toConsumableArray2["default"])(oldClasses.filter(function (c) {
		        return c && !newClasses.includes(c);
		      })));
		      classList.add.apply(classList, (0, _toConsumableArray2["default"])(newClasses.filter(function (c) {
		        return c && !oldClasses.includes(c);
		      })));
		    } else if (memberName === 'style') {
		      // update style attribute, css properties and values
		      {
		        for (var prop in oldValue) {
		          if (!newValue || newValue[prop] == null) {
		            if (prop.includes('-')) {
		              elm.style.removeProperty(prop);
		            } else {
		              elm.style[prop] = '';
		            }
		          }
		        }
		      }
		      for (var _prop in newValue) {
		        if (!oldValue || newValue[_prop] !== oldValue[_prop]) {
		          if (_prop.includes('-')) {
		            elm.style.setProperty(_prop, newValue[_prop]);
		          } else {
		            elm.style[_prop] = newValue[_prop];
		          }
		        }
		      }
		    } else if (memberName === 'key') ;else if (memberName === 'ref') {
		      // minifier will clean this up
		      if (newValue) {
		        newValue(elm);
		      }
		    } else if (!elm.__lookupSetter__(memberName) && memberName[0] === 'o' && memberName[1] === 'n') {
		      // Event Handlers
		      // so if the member name starts with "on" and the 3rd characters is
		      // a capital letter, and it's not already a member on the element,
		      // then we're assuming it's an event listener
		      if (memberName[2] === '-') {
		        // on- prefixed events
		        // allows to be explicit about the dom event to listen without any magic
		        // under the hood:
		        // <my-cmp on-click> // listens for "click"
		        // <my-cmp on-Click> // listens for "Click"
		        // <my-cmp on-ionChange> // listens for "ionChange"
		        // <my-cmp on-EVENTS> // listens for "EVENTS"
		        memberName = memberName.slice(3);
		      } else if (isMemberInElement(win, ln)) {
		        // standard event
		        // the JSX attribute could have been "onMouseOver" and the
		        // member name "onmouseover" is on the window's prototype
		        // so let's add the listener "mouseover", which is all lowercased
		        memberName = ln.slice(2);
		      } else {
		        // custom event
		        // the JSX attribute could have been "onMyCustomEvent"
		        // so let's trim off the "on" prefix and lowercase the first character
		        // and add the listener "myCustomEvent"
		        // except for the first character, we keep the event name case
		        memberName = ln[2] + memberName.slice(3);
		      }
		      if (oldValue) {
		        plt.rel(elm, memberName, oldValue, false);
		      }
		      if (newValue) {
		        plt.ael(elm, memberName, newValue, false);
		      }
		    } else {
		      // Set property if it exists and it's not a SVG
		      var isComplex = isComplexType(newValue);
		      if ((isProp || isComplex && newValue !== null) && !isSvg) {
		        try {
		          if (!elm.tagName.includes('-')) {
		            var n = newValue == null ? '' : newValue;
		            // Workaround for Safari, moving the <input> caret when re-assigning the same valued
		            if (memberName === 'list') {
		              isProp = false;
		            } else if (oldValue == null || elm[memberName] != n) {
		              elm[memberName] = n;
		            }
		          } else {
		            elm[memberName] = newValue;
		          }
		        } catch (e) {}
		      }
		      /**
		       * Need to manually update attribute if:
		       * - memberName is not an attribute
		       * - if we are rendering the host element in order to reflect attribute
		       * - if it's a SVG, since properties might not work in <svg>
		       * - if the newValue is null/undefined or 'false'.
		       */
		      var xlink = false;
		      {
		        if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
		          memberName = ln;
		          xlink = true;
		        }
		      }
		      if (newValue == null || newValue === false) {
		        if (newValue !== false || elm.getAttribute(memberName) === '') {
		          if (xlink) {
		            elm.removeAttributeNS(XLINK_NS, memberName);
		          } else {
		            elm.removeAttribute(memberName);
		          }
		        }
		      } else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
		        newValue = newValue === true ? '' : newValue;
		        if (xlink) {
		          elm.setAttributeNS(XLINK_NS, memberName, newValue);
		        } else {
		          elm.setAttribute(memberName, newValue);
		        }
		      }
		    }
		  }
		};
		var parseClassListRegex = /\s/;
		var parseClassList = function parseClassList(value) {
		  return !value ? [] : value.split(parseClassListRegex);
		};
		var updateElement = function updateElement(oldVnode, newVnode, isSvgMode, memberName) {
		  // if the element passed in is a shadow root, which is a document fragment
		  // then we want to be adding attrs/props to the shadow root's "host" element
		  // if it's not a shadow root, then we add attrs/props to the same element
		  var elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
		  var oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
		  var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
		  {
		    // remove attributes no longer present on the vnode by setting them to undefined
		    for (memberName in oldVnodeAttrs) {
		      if (!(memberName in newVnodeAttrs)) {
		        setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
		      }
		    }
		  }
		  // add new & update changed attributes
		  for (memberName in newVnodeAttrs) {
		    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
		  }
		};
		/**
		 * Create a DOM Node corresponding to one of the children of a given VNode.
		 *
		 * @param oldParentVNode the parent VNode from the previous render
		 * @param newParentVNode the parent VNode from the current render
		 * @param childIndex the index of the VNode, in the _new_ parent node's
		 * children, for which we will create a new DOM node
		 * @param parentElm the parent DOM node which our new node will be a child of
		 * @returns the newly created node
		 */
		var createElm = function createElm(oldParentVNode, newParentVNode, childIndex, parentElm) {
		  // tslint:disable-next-line: prefer-const
		  var newVNode = newParentVNode.$children$[childIndex];
		  var i = 0;
		  var elm;
		  var childNode;
		  var oldVNode;
		  if (!useNativeShadowDom) {
		    // remember for later we need to check to relocate nodes
		    checkSlotRelocate = true;
		    if (newVNode.$tag$ === 'slot') {
		      if (scopeId) {
		        // scoped css needs to add its scoped id to the parent element
		        parentElm.classList.add(scopeId + '-s');
		      }
		      newVNode.$flags$ |= newVNode.$children$ ?
		      // slot element has fallback content
		      2 /* VNODE_FLAGS.isSlotFallback */ :
		      // slot element does not have fallback content
		      1 /* VNODE_FLAGS.isSlotReference */;
		    }
		  }

		  if (newVNode.$text$ !== null) {
		    // create text node
		    elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
		  } else if (newVNode.$flags$ & 1 /* VNODE_FLAGS.isSlotReference */) {
		    // create a slot reference node
		    elm = newVNode.$elm$ = doc.createTextNode('');
		  } else {
		    if (!isSvgMode) {
		      isSvgMode = newVNode.$tag$ === 'svg';
		    }
		    // create element
		    elm = newVNode.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode.$flags$ & 2 /* VNODE_FLAGS.isSlotFallback */ ? 'slot-fb' : newVNode.$tag$);
		    if (isSvgMode && newVNode.$tag$ === 'foreignObject') {
		      isSvgMode = false;
		    }
		    // add css classes, attrs, props, listeners, etc.
		    {
		      updateElement(null, newVNode, isSvgMode);
		    }
		    if (isDef(scopeId) && elm['s-si'] !== scopeId) {
		      // if there is a scopeId and this is the initial render
		      // then let's add the scopeId as a css class
		      elm.classList.add(elm['s-si'] = scopeId);
		    }
		    if (newVNode.$children$) {
		      for (i = 0; i < newVNode.$children$.length; ++i) {
		        // create the node
		        childNode = createElm(oldParentVNode, newVNode, i, elm);
		        // return node could have been null
		        if (childNode) {
		          // append our new node
		          elm.appendChild(childNode);
		        }
		      }
		    }
		    {
		      if (newVNode.$tag$ === 'svg') {
		        // Only reset the SVG context when we're exiting <svg> element
		        isSvgMode = false;
		      } else if (elm.tagName === 'foreignObject') {
		        // Reenter SVG context when we're exiting <foreignObject> element
		        isSvgMode = true;
		      }
		    }
		  }
		  {
		    elm['s-hn'] = hostTagName;
		    if (newVNode.$flags$ & (2 /* VNODE_FLAGS.isSlotFallback */ | 1 /* VNODE_FLAGS.isSlotReference */)) {
		      // remember the content reference comment
		      elm['s-sr'] = true;
		      // remember the content reference comment
		      elm['s-cr'] = contentRef;
		      // remember the slot name, or empty string for default slot
		      elm['s-sn'] = newVNode.$name$ || '';
		      // check if we've got an old vnode for this slot
		      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
		      if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
		        // we've got an old slot vnode and the wrapper is being replaced
		        // so let's move the old slot content back to it's original location
		        putBackInOriginalLocation(oldParentVNode.$elm$, false);
		      }
		    }
		  }
		  return elm;
		};
		var putBackInOriginalLocation = function putBackInOriginalLocation(parentElm, recursive) {
		  plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
		  var oldSlotChildNodes = parentElm.childNodes;
		  for (var i = oldSlotChildNodes.length - 1; i >= 0; i--) {
		    var childNode = oldSlotChildNodes[i];
		    if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
		      // // this child node in the old element is from another component
		      // // remove this node from the old slot's parent
		      // childNode.remove();
		      // and relocate it back to it's original location
		      parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
		      // remove the old original location comment entirely
		      // later on the patch function will know what to do
		      // and move this to the correct spot in need be
		      childNode['s-ol'].remove();
		      childNode['s-ol'] = undefined;
		      checkSlotRelocate = true;
		    }
		    if (recursive) {
		      putBackInOriginalLocation(childNode, recursive);
		    }
		  }
		  plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
		};

		var addVnodes = function addVnodes(parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
		  var containerElm = parentElm['s-cr'] && parentElm['s-cr'].parentNode || parentElm;
		  var childNode;
		  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
		    containerElm = containerElm.shadowRoot;
		  }
		  for (; startIdx <= endIdx; ++startIdx) {
		    if (vnodes[startIdx]) {
		      childNode = createElm(null, parentVNode, startIdx, parentElm);
		      if (childNode) {
		        vnodes[startIdx].$elm$ = childNode;
		        containerElm.insertBefore(childNode, referenceNode(before));
		      }
		    }
		  }
		};
		var removeVnodes = function removeVnodes(vnodes, startIdx, endIdx, vnode, elm) {
		  for (; startIdx <= endIdx; ++startIdx) {
		    if (vnode = vnodes[startIdx]) {
		      elm = vnode.$elm$;
		      callNodeRefs(vnode);
		      {
		        // we're removing this element
		        // so it's possible we need to show slot fallback content now
		        checkSlotFallbackVisibility = true;
		        if (elm['s-ol']) {
		          // remove the original location comment
		          elm['s-ol'].remove();
		        } else {
		          // it's possible that child nodes of the node
		          // that's being removed are slot nodes
		          putBackInOriginalLocation(elm, true);
		        }
		      }
		      // remove the vnode's element from the dom
		      elm.remove();
		    }
		  }
		};
		/**
		 * Reconcile the children of a new VNode with the children of an old VNode by
		 * traversing the two collections of children, identifying nodes that are
		 * conserved or changed, calling out to `patch` to make any necessary
		 * updates to the DOM, and rearranging DOM nodes as needed.
		 *
		 * The algorithm for reconciling children works by analyzing two 'windows' onto
		 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
		 * 'windows' by storing start and end indices and references to the
		 * corresponding array entries. Initially the two 'windows' are basically equal
		 * to the entire array, but we progressively narrow the windows until there are
		 * no children left to update by doing the following:
		 *
		 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
		 *    that if we have an initial array like the following we'll end up dealing
		 *    only with a window bounded by the highlighted elements:
		 *
		 *    [null, null, VNode1 , ... , VNode2, null, null]
		 *                 ^^^^^^         ^^^^^^
		 *
		 * 2. Check to see if the elements at the head and tail positions are equal
		 *    across the windows. This will basically detect elements which haven't
		 *    been added, removed, or changed position, i.e. if you had the following
		 *    VNode elements (represented as HTML):
		 *
		 *    oldVNode: `<div><p><span>HEY</span></p></div>`
		 *    newVNode: `<div><p><span>THERE</span></p></div>`
		 *
		 *    Then when comparing the children of the `<div>` tag we check the equality
		 *    of the VNodes corresponding to the `<p>` tags and, since they are the
		 *    same tag in the same position, we'd be able to avoid completely
		 *    re-rendering the subtree under them with a new DOM element and would just
		 *    call out to `patch` to handle reconciling their children and so on.
		 *
		 * 3. Check, for both windows, to see if the element at the beginning of the
		 *    window corresponds to the element at the end of the other window. This is
		 *    a heuristic which will let us identify _some_ situations in which
		 *    elements have changed position, for instance it _should_ detect that the
		 *    children nodes themselves have not changed but merely moved in the
		 *    following example:
		 *
		 *    oldVNode: `<div><element-one /><element-two /></div>`
		 *    newVNode: `<div><element-two /><element-one /></div>`
		 *
		 *    If we find cases like this then we also need to move the concrete DOM
		 *    elements corresponding to the moved children to write the re-order to the
		 *    DOM.
		 *
		 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
		 *    nodes in the old children which have the same key as the first element in
		 *    our window on the new children. If we find such a node we handle calling
		 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
		 *    what we find.
		 *
		 * Finally, once we've narrowed our 'windows' to the point that either of them
		 * collapse (i.e. they have length 0) we then handle any remaining VNode
		 * insertion or deletion that needs to happen to get a DOM state that correctly
		 * reflects the new child VNodes. If, for instance, after our window on the old
		 * children has collapsed we still have more nodes on the new children that
		 * we haven't dealt with yet then we need to add them, or if the new children
		 * collapse but we still have unhandled _old_ children then we need to make
		 * sure the corresponding DOM nodes are removed.
		 *
		 * @param parentElm the node into which the parent VNode is rendered
		 * @param oldCh the old children of the parent node
		 * @param newVNode the new VNode which will replace the parent
		 * @param newCh the new children of the parent node
		 */
		var updateChildren = function updateChildren(parentElm, oldCh, newVNode, newCh) {
		  var oldStartIdx = 0;
		  var newStartIdx = 0;
		  var idxInOld = 0;
		  var i = 0;
		  var oldEndIdx = oldCh.length - 1;
		  var oldStartVnode = oldCh[0];
		  var oldEndVnode = oldCh[oldEndIdx];
		  var newEndIdx = newCh.length - 1;
		  var newStartVnode = newCh[0];
		  var newEndVnode = newCh[newEndIdx];
		  var node;
		  var elmToMove;
		  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		    if (oldStartVnode == null) {
		      // VNode might have been moved left
		      oldStartVnode = oldCh[++oldStartIdx];
		    } else if (oldEndVnode == null) {
		      oldEndVnode = oldCh[--oldEndIdx];
		    } else if (newStartVnode == null) {
		      newStartVnode = newCh[++newStartIdx];
		    } else if (newEndVnode == null) {
		      newEndVnode = newCh[--newEndIdx];
		    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
		      // if the start nodes are the same then we should patch the new VNode
		      // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
		      // indices to reflect that. We don't need to move any DOM Nodes around
		      // since things are matched up in order.
		      patch(oldStartVnode, newStartVnode);
		      oldStartVnode = oldCh[++oldStartIdx];
		      newStartVnode = newCh[++newStartIdx];
		    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
		      // likewise, if the end nodes are the same we patch new onto old and
		      // decrement our end indices, and also likewise in this case we don't
		      // need to move any DOM Nodes.
		      patch(oldEndVnode, newEndVnode);
		      oldEndVnode = oldCh[--oldEndIdx];
		      newEndVnode = newCh[--newEndIdx];
		    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
		      // case: "Vnode moved right"
		      //
		      // We've found that the last node in our window on the new children is
		      // the same VNode as the _first_ node in our window on the old children
		      // we're dealing with now. Visually, this is the layout of these two
		      // nodes:
		      //
		      // newCh: [..., newStartVnode , ... , newEndVnode , ...]
		      //                                    ^^^^^^^^^^^
		      // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
		      //              ^^^^^^^^^^^^^
		      //
		      // In this situation we need to patch `newEndVnode` onto `oldStartVnode`
		      // and move the DOM element for `oldStartVnode`.
		      if (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot') {
		        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
		      }
		      patch(oldStartVnode, newEndVnode);
		      // We need to move the element for `oldStartVnode` into a position which
		      // will be appropriate for `newEndVnode`. For this we can use
		      // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
		      // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
		      // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
		      //
		      // <old-start-node />
		      // <some-intervening-node />
		      // <old-end-node />
		      // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
		      // <next-sibling />
		      //
		      // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
		      // the node for `oldStartVnode` at the end of the children of
		      // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
		      // aren't any siblings, and passing `null` to `Node.insertBefore` will
		      // append it to the children of the parent element.
		      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
		      oldStartVnode = oldCh[++oldStartIdx];
		      newEndVnode = newCh[--newEndIdx];
		    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
		      // case: "Vnode moved left"
		      //
		      // We've found that the first node in our window on the new children is
		      // the same VNode as the _last_ node in our window on the old children.
		      // Visually, this is the layout of these two nodes:
		      //
		      // newCh: [..., newStartVnode , ... , newEndVnode , ...]
		      //              ^^^^^^^^^^^^^
		      // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
		      //                                    ^^^^^^^^^^^
		      //
		      // In this situation we need to patch `newStartVnode` onto `oldEndVnode`
		      // (which will handle updating any changed attributes, reconciling their
		      // children etc) but we also need to move the DOM node to which
		      // `oldEndVnode` corresponds.
		      if (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot') {
		        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
		      }
		      patch(oldEndVnode, newStartVnode);
		      // We've already checked above if `oldStartVnode` and `newStartVnode` are
		      // the same node, so since we're here we know that they are not. Thus we
		      // can move the element for `oldEndVnode` _before_ the element for
		      // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
		      // future.
		      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
		      oldEndVnode = oldCh[--oldEndIdx];
		      newStartVnode = newCh[++newStartIdx];
		    } else {
		      // Here we do some checks to match up old and new nodes based on the
		      // `$key$` attribute, which is set by putting a `key="my-key"` attribute
		      // in the JSX for a DOM element in the implementation of a Stencil
		      // component.
		      //
		      // First we check to see if there are any nodes in the array of old
		      // children which have the same key as the first node in the new
		      // children.
		      idxInOld = -1;
		      {
		        for (i = oldStartIdx; i <= oldEndIdx; ++i) {
		          if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
		            idxInOld = i;
		            break;
		          }
		        }
		      }
		      if (idxInOld >= 0) {
		        // We found a node in the old children which matches up with the first
		        // node in the new children! So let's deal with that
		        elmToMove = oldCh[idxInOld];
		        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
		          // the tag doesn't match so we'll need a new DOM element
		          node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
		        } else {
		          patch(elmToMove, newStartVnode);
		          // invalidate the matching old node so that we won't try to update it
		          // again later on
		          oldCh[idxInOld] = undefined;
		          node = elmToMove.$elm$;
		        }
		        newStartVnode = newCh[++newStartIdx];
		      } else {
		        // We either didn't find an element in the old children that matches
		        // the key of the first new child OR the build is not using `key`
		        // attributes at all. In either case we need to create a new element
		        // for the new node.
		        node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
		        newStartVnode = newCh[++newStartIdx];
		      }
		      if (node) {
		        // if we created a new node then handle inserting it to the DOM
		        {
		          parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
		        }
		      }
		    }
		  }
		  if (oldStartIdx > oldEndIdx) {
		    // we have some more new nodes to add which don't match up with old nodes
		    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
		  } else if (newStartIdx > newEndIdx) {
		    // there are nodes in the `oldCh` array which no longer correspond to nodes
		    // in the new array, so lets remove them (which entails cleaning up the
		    // relevant DOM nodes)
		    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
		  }
		};
		/**
		 * Compare two VNodes to determine if they are the same
		 *
		 * **NB**: This function is an equality _heuristic_ based on the available
		 * information set on the two VNodes and can be misleading under certain
		 * circumstances. In particular, if the two nodes do not have `key` attrs
		 * (available under `$key$` on VNodes) then the function falls back on merely
		 * checking that they have the same tag.
		 *
		 * So, in other words, if `key` attrs are not set on VNodes which may be
		 * changing order within a `children` array or something along those lines then
		 * we could obtain a false positive and then have to do needless re-rendering.
		 *
		 * @param leftVNode the first VNode to check
		 * @param rightVNode the second VNode to check
		 * @returns whether they're equal or not
		 */
		var isSameVnode = function isSameVnode(leftVNode, rightVNode) {
		  // compare if two vnode to see if they're "technically" the same
		  // need to have the same element tag, and same key to be the same
		  if (leftVNode.$tag$ === rightVNode.$tag$) {
		    if (leftVNode.$tag$ === 'slot') {
		      return leftVNode.$name$ === rightVNode.$name$;
		    }
		    // this will be set if components in the build have `key` attrs set on them
		    {
		      return leftVNode.$key$ === rightVNode.$key$;
		    }
		  }
		  return false;
		};
		var referenceNode = function referenceNode(node) {
		  // this node was relocated to a new location in the dom
		  // because of some other component's slot
		  // but we still have an html comment in place of where
		  // it's original location was according to it's original vdom
		  return node && node['s-ol'] || node;
		};
		var parentReferenceNode = function parentReferenceNode(node) {
		  return (node['s-ol'] ? node['s-ol'] : node).parentNode;
		};
		/**
		 * Handle reconciling an outdated VNode with a new one which corresponds to
		 * it. This function handles flushing updates to the DOM and reconciling the
		 * children of the two nodes (if any).
		 *
		 * @param oldVNode an old VNode whose DOM element and children we want to update
		 * @param newVNode a new VNode representing an updated version of the old one
		 */
		var patch = function patch(oldVNode, newVNode) {
		  var elm = newVNode.$elm$ = oldVNode.$elm$;
		  var oldChildren = oldVNode.$children$;
		  var newChildren = newVNode.$children$;
		  var tag = newVNode.$tag$;
		  var text = newVNode.$text$;
		  var defaultHolder;
		  if (text === null) {
		    {
		      // test if we're rendering an svg element, or still rendering nodes inside of one
		      // only add this to the when the compiler sees we're using an svg somewhere
		      isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
		    }
		    {
		      if (tag === 'slot') ;else {
		        // either this is the first render of an element OR it's an update
		        // AND we already know it's possible it could have changed
		        // this updates the element's css classes, attrs, props, listeners, etc.
		        updateElement(oldVNode, newVNode, isSvgMode);
		      }
		    }
		    if (oldChildren !== null && newChildren !== null) {
		      // looks like there's child vnodes for both the old and new vnodes
		      // so we need to call `updateChildren` to reconcile them
		      updateChildren(elm, oldChildren, newVNode, newChildren);
		    } else if (newChildren !== null) {
		      // no old child vnodes, but there are new child vnodes to add
		      if (oldVNode.$text$ !== null) {
		        // the old vnode was text, so be sure to clear it out
		        elm.textContent = '';
		      }
		      // add the new vnode children
		      addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
		    } else if (oldChildren !== null) {
		      // no new child vnodes, but there are old child vnodes to remove
		      removeVnodes(oldChildren, 0, oldChildren.length - 1);
		    }
		    if (isSvgMode && tag === 'svg') {
		      isSvgMode = false;
		    }
		  } else if (defaultHolder = elm['s-cr']) {
		    // this element has slotted content
		    defaultHolder.parentNode.textContent = text;
		  } else if (oldVNode.$text$ !== text) {
		    // update the text content for the text only vnode
		    // and also only if the text is different than before
		    elm.data = text;
		  }
		};
		var updateFallbackSlotVisibility = function updateFallbackSlotVisibility(elm) {
		  // tslint:disable-next-line: prefer-const
		  var childNodes = elm.childNodes;
		  var childNode;
		  var i;
		  var ilen;
		  var j;
		  var slotNameAttr;
		  var nodeType;
		  for (i = 0, ilen = childNodes.length; i < ilen; i++) {
		    childNode = childNodes[i];
		    if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
		      if (childNode['s-sr']) {
		        // this is a slot fallback node
		        // get the slot name for this slot reference node
		        slotNameAttr = childNode['s-sn'];
		        // by default always show a fallback slot node
		        // then hide it if there are other slots in the light dom
		        childNode.hidden = false;
		        for (j = 0; j < ilen; j++) {
		          nodeType = childNodes[j].nodeType;
		          if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
		            // this sibling node is from a different component OR is a named fallback slot node
		            if (nodeType === 1 /* NODE_TYPE.ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
		              childNode.hidden = true;
		              break;
		            }
		          } else {
		            // this is a default fallback slot node
		            // any element or text node (with content)
		            // should hide the default fallback slot node
		            if (nodeType === 1 /* NODE_TYPE.ElementNode */ || nodeType === 3 /* NODE_TYPE.TextNode */ && childNodes[j].textContent.trim() !== '') {
		              childNode.hidden = true;
		              break;
		            }
		          }
		        }
		      }
		      // keep drilling down
		      updateFallbackSlotVisibility(childNode);
		    }
		  }
		};
		var relocateNodes = [];
		var relocateSlotContent = function relocateSlotContent(elm) {
		  // tslint:disable-next-line: prefer-const
		  var childNode;
		  var node;
		  var hostContentNodes;
		  var slotNameAttr;
		  var relocateNodeData;
		  var j;
		  var i = 0;
		  var childNodes = elm.childNodes;
		  var ilen = childNodes.length;
		  for (; i < ilen; i++) {
		    childNode = childNodes[i];
		    if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
		      // first got the content reference comment node
		      // then we got it's parent, which is where all the host content is in now
		      hostContentNodes = node.parentNode.childNodes;
		      slotNameAttr = childNode['s-sn'];
		      for (j = hostContentNodes.length - 1; j >= 0; j--) {
		        node = hostContentNodes[j];
		        if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
		          // let's do some relocating to its new home
		          // but never relocate a content reference node
		          // that is suppose to always represent the original content location
		          if (isNodeLocatedInSlot(node, slotNameAttr)) {
		            // it's possible we've already decided to relocate this node
		            relocateNodeData = relocateNodes.find(function (r) {
		              return r.$nodeToRelocate$ === node;
		            });
		            // made some changes to slots
		            // let's make sure we also double check
		            // fallbacks are correctly hidden or shown
		            checkSlotFallbackVisibility = true;
		            node['s-sn'] = node['s-sn'] || slotNameAttr;
		            if (relocateNodeData) {
		              // previously we never found a slot home for this node
		              // but turns out we did, so let's remember it now
		              relocateNodeData.$slotRefNode$ = childNode;
		            } else {
		              // add to our list of nodes to relocate
		              relocateNodes.push({
		                $slotRefNode$: childNode,
		                $nodeToRelocate$: node
		              });
		            }
		            if (node['s-sr']) {
		              relocateNodes.map(function (relocateNode) {
		                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
		                  relocateNodeData = relocateNodes.find(function (r) {
		                    return r.$nodeToRelocate$ === node;
		                  });
		                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
		                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
		                  }
		                }
		              });
		            }
		          } else if (!relocateNodes.some(function (r) {
		            return r.$nodeToRelocate$ === node;
		          })) {
		            // so far this element does not have a slot home, not setting slotRefNode on purpose
		            // if we never find a home for this element then we'll need to hide it
		            relocateNodes.push({
		              $nodeToRelocate$: node
		            });
		          }
		        }
		      }
		    }
		    if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
		      relocateSlotContent(childNode);
		    }
		  }
		};
		var isNodeLocatedInSlot = function isNodeLocatedInSlot(nodeToRelocate, slotNameAttr) {
		  if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
		    if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
		      return true;
		    }
		    if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
		      return true;
		    }
		    return false;
		  }
		  if (nodeToRelocate['s-sn'] === slotNameAttr) {
		    return true;
		  }
		  return slotNameAttr === '';
		};
		var callNodeRefs = function callNodeRefs(vNode) {
		  {
		    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
		    vNode.$children$ && vNode.$children$.map(callNodeRefs);
		  }
		};
		var renderVdom = function renderVdom(hostRef, renderFnResults) {
		  var hostElm = hostRef.$hostElement$;
		  var cmpMeta = hostRef.$cmpMeta$;
		  var oldVNode = hostRef.$vnode$ || newVNode(null, null);
		  var rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
		  hostTagName = hostElm.tagName;
		  if (cmpMeta.$attrsToReflect$) {
		    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
		    cmpMeta.$attrsToReflect$.map(function (_ref) {
		      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
		        propName = _ref2[0],
		        attribute = _ref2[1];
		      return rootVnode.$attrs$[attribute] = hostElm[propName];
		    });
		  }
		  rootVnode.$tag$ = null;
		  rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
		  hostRef.$vnode$ = rootVnode;
		  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
		  {
		    scopeId = hostElm['s-sc'];
		  }
		  {
		    contentRef = hostElm['s-cr'];
		    useNativeShadowDom = (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) !== 0;
		    // always reset
		    checkSlotFallbackVisibility = false;
		  }
		  // synchronous patch
		  patch(oldVNode, rootVnode);
		  {
		    // while we're moving nodes around existing nodes, temporarily disable
		    // the disconnectCallback from working
		    plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
		    if (checkSlotRelocate) {
		      relocateSlotContent(rootVnode.$elm$);
		      var relocateData;
		      var nodeToRelocate;
		      var orgLocationNode;
		      var parentNodeRef;
		      var insertBeforeNode;
		      var refNode;
		      var i = 0;
		      for (; i < relocateNodes.length; i++) {
		        relocateData = relocateNodes[i];
		        nodeToRelocate = relocateData.$nodeToRelocate$;
		        if (!nodeToRelocate['s-ol']) {
		          // add a reference node marking this node's original location
		          // keep a reference to this node for later lookups
		          orgLocationNode = doc.createTextNode('');
		          orgLocationNode['s-nr'] = nodeToRelocate;
		          nodeToRelocate.parentNode.insertBefore(nodeToRelocate['s-ol'] = orgLocationNode, nodeToRelocate);
		        }
		      }
		      for (i = 0; i < relocateNodes.length; i++) {
		        relocateData = relocateNodes[i];
		        nodeToRelocate = relocateData.$nodeToRelocate$;
		        if (relocateData.$slotRefNode$) {
		          // by default we're just going to insert it directly
		          // after the slot reference node
		          parentNodeRef = relocateData.$slotRefNode$.parentNode;
		          insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
		          orgLocationNode = nodeToRelocate['s-ol'];
		          while (orgLocationNode = orgLocationNode.previousSibling) {
		            refNode = orgLocationNode['s-nr'];
		            if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
		              refNode = refNode.nextSibling;
		              if (!refNode || !refNode['s-nr']) {
		                insertBeforeNode = refNode;
		                break;
		              }
		            }
		          }
		          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
		            // we've checked that it's worth while to relocate
		            // since that the node to relocate
		            // has a different next sibling or parent relocated
		            if (nodeToRelocate !== insertBeforeNode) {
		              if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
		                // probably a component in the index.html that doesn't have it's hostname set
		                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
		              }
		              // add it back to the dom but in its new home
		              parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
		            }
		          }
		        } else {
		          // this node doesn't have a slot home to go to, so let's hide it
		          if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
		            nodeToRelocate.hidden = true;
		          }
		        }
		      }
		    }
		    if (checkSlotFallbackVisibility) {
		      updateFallbackSlotVisibility(rootVnode.$elm$);
		    }
		    // done moving nodes around
		    // allow the disconnect callback to work again
		    plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
		    // always reset
		    relocateNodes.length = 0;
		  }
		};
		var attachToAncestor = function attachToAncestor(hostRef, ancestorComponent) {};
		var scheduleUpdate = function scheduleUpdate(hostRef, isInitialLoad) {
		  {
		    hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
		  }

		  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
		  // there is no ancestor component or the ancestor component
		  // has already fired off its lifecycle update then
		  // fire off the initial update
		  var dispatch = function dispatch() {
		    return dispatchHooks(hostRef, isInitialLoad);
		  };
		  return writeTask(dispatch);
		};
		var dispatchHooks = function dispatchHooks(hostRef, isInitialLoad) {
		  var elm = hostRef.$hostElement$;
		  var endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
		  var instance = elm;
		  var promise;
		  if (isInitialLoad) {
		    {
		      promise = safeCall(instance, 'componentWillLoad');
		    }
		  } else {
		    {
		      promise = safeCall(instance, 'componentWillUpdate');
		    }
		  }
		  {
		    promise = then(promise, function () {
		      return safeCall(instance, 'componentWillRender');
		    });
		  }
		  endSchedule();
		  return then(promise, function () {
		    return updateComponent(hostRef, instance, isInitialLoad);
		  });
		};
		var updateComponent = /*#__PURE__*/function () {
		  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(hostRef, instance, isInitialLoad) {
		    var elm, endUpdate, endRender;
		    return _regenerator["default"].wrap(function _callee$(_context) {
		      while (1) switch (_context.prev = _context.next) {
		        case 0:
		          // updateComponent
		          elm = hostRef.$hostElement$;
		          endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
		          elm['s-rc'];
		          if (isInitialLoad) {
		            // DOM WRITE!
		            attachStyles(hostRef);
		          }
		          endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
		          callRender(hostRef, instance);
		          endRender();
		          endUpdate();
		          postUpdateComponent(hostRef);
		        case 9:
		        case "end":
		          return _context.stop();
		      }
		    }, _callee);
		  }));
		  return function updateComponent(_x, _x2, _x3) {
		    return _ref3.apply(this, arguments);
		  };
		}();
		var callRender = function callRender(hostRef, instance, elm) {
		  // in order for bundlers to correctly treeshake the BUILD object
		  // we need to ensure BUILD is not deoptimized within a try/catch
		  // https://rollupjs.org/guide/en/#treeshake tryCatchDeoptimization
		  var allRenderFn = false;
		  var lazyLoad = false;
		  var taskQueue = true;
		  var updatable = true;
		  try {
		    renderingRef = instance;
		    instance = allRenderFn ? instance.render() : instance.render && instance.render();
		    if (updatable && taskQueue) {
		      hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
		    }

		    if (updatable || lazyLoad) {
		      hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
		    }

		    if (BUILD.hasRenderFn || BUILD.reflect) {
		      if (BUILD.vdomRender || BUILD.reflect) {
		        // looks like we've got child nodes to render into this host element
		        // or we need to update the css class/attrs on the host element
		        // DOM WRITE!
		        if (BUILD.hydrateServerSide) ;else {
		          renderVdom(hostRef, instance);
		        }
		      }
		    }
		  } catch (e) {
		    consoleError(e, hostRef.$hostElement$);
		  }
		  renderingRef = null;
		  return null;
		};
		var getRenderingRef = function getRenderingRef() {
		  return renderingRef;
		};
		var postUpdateComponent = function postUpdateComponent(hostRef) {
		  hostRef.$cmpMeta$.$tagName$;
		  var elm = hostRef.$hostElement$;
		  var endPostUpdate = createTime();
		  var instance = elm;
		  hostRef.$ancestorComponent$;
		  {
		    safeCall(instance, 'componentDidRender');
		  }
		  if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
		    hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
		    {
		      safeCall(instance, 'componentDidLoad');
		    }
		    endPostUpdate();
		  } else {
		    {
		      safeCall(instance, 'componentDidUpdate');
		    }
		    endPostUpdate();
		  }
		  // ( •_•)
		  // ( •_•)>⌐■-■
		  // (⌐■_■)
		};

		var safeCall = function safeCall(instance, method, arg) {
		  if (instance && instance[method]) {
		    try {
		      return instance[method](arg);
		    } catch (e) {
		      consoleError(e);
		    }
		  }
		  return undefined;
		};
		var then = function then(promise, thenFn) {
		  return promise && promise.then ? promise.then(thenFn) : thenFn();
		};
		var getValue = function getValue(ref, propName) {
		  return getHostRef(ref).$instanceValues$.get(propName);
		};
		var setValue = function setValue(ref, propName, newVal, cmpMeta) {
		  // check our new property value against our internal value
		  var hostRef = getHostRef(ref);
		  var elm = ref;
		  var oldVal = hostRef.$instanceValues$.get(propName);
		  var flags = hostRef.$flags$;
		  var instance = elm;
		  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
		  // explicitly check for NaN on both sides, as `NaN === NaN` is always false
		  var areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
		  var didValueChange = newVal !== oldVal && !areBothNaN;
		  if (didValueChange) {
		    // gadzooks! the property's value has changed!!
		    // set our new value!
		    hostRef.$instanceValues$.set(propName, newVal);
		    {
		      // get an array of method names of watch functions to call
		      if (cmpMeta.$watchers$ && flags & 128 /* HOST_FLAGS.isWatchReady */) {
		        var watchMethods = cmpMeta.$watchers$[propName];
		        if (watchMethods) {
		          // this instance is watching for when this property changed
		          watchMethods.map(function (watchMethodName) {
		            try {
		              // fire off each of the watch methods that are watching this property
		              instance[watchMethodName](newVal, oldVal, propName);
		            } catch (e) {
		              consoleError(e, elm);
		            }
		          });
		        }
		      }
		      if ((flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
		        if (instance.componentShouldUpdate) {
		          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
		            return;
		          }
		        }
		        // looks like this value actually changed, so we've got work to do!
		        // but only if we've already rendered, otherwise just chill out
		        // queue that we need to do an update, but don't worry about queuing
		        // up millions cuz this function ensures it only runs once
		        scheduleUpdate(hostRef, false);
		      }
		    }
		  }
		};
		/**
		 * Attach a series of runtime constructs to a compiled Stencil component
		 * constructor, including getters and setters for the `@Prop` and `@State`
		 * decorators, callbacks for when attributes change, and so on.
		 *
		 * @param Cstr the constructor for a component that we need to process
		 * @param cmpMeta metadata collected previously about the component
		 * @param flags a number used to store a series of bit flags
		 * @returns a reference to the same constructor passed in (but now mutated)
		 */
		var proxyComponent = function proxyComponent(Cstr, cmpMeta, flags) {
		  if (cmpMeta.$members$) {
		    if (Cstr.watchers) {
		      cmpMeta.$watchers$ = Cstr.watchers;
		    }
		    // It's better to have a const than two Object.entries()
		    var members = Object.entries(cmpMeta.$members$);
		    var prototype = Cstr.prototype;
		    members.map(function (_ref4) {
		      var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
		        memberName = _ref5[0],
		        _ref5$ = (0, _slicedToArray2["default"])(_ref5[1], 1),
		        memberFlags = _ref5$[0];
		      if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ || memberFlags & 32 /* MEMBER_FLAGS.State */) {
		        // proxyComponent - prop
		        Object.defineProperty(prototype, memberName, {
		          get: function get() {
		            // proxyComponent, get value
		            return getValue(this, memberName);
		          },
		          set: function set(newValue) {
		            // proxyComponent, set value
		            setValue(this, memberName, newValue, cmpMeta);
		          },
		          configurable: true,
		          enumerable: true
		        });
		      }
		    });
		    {
		      var attrNameToPropName = new Map();
		      prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
		        var _this2 = this;
		        plt.jmp(function () {
		          var propName = attrNameToPropName.get(attrName);
		          //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
		          //  in the case where an attribute was set inline.
		          //  ```html
		          //    <my-component some-attribute="some-value"></my-component>
		          //  ```
		          //
		          //  There is an edge case where a developer sets the attribute inline on a custom element and then
		          //  programmatically changes it before it has been upgraded as shown below:
		          //
		          //  ```html
		          //    <!-- this component has _not_ been upgraded yet -->
		          //    <my-component id="test" some-attribute="some-value"></my-component>
		          //    <script>
		          //      // grab non-upgraded component
		          //      el = document.querySelector("#test");
		          //      el.someAttribute = "another-value";
		          //      // upgrade component
		          //      customElements.define('my-component', MyComponent);
		          //    </script>
		          //  ```
		          //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
		          //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
		          //  to the value that was set inline i.e. "some-value" from above example. When
		          //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
		          //
		          //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
		          //  by connectedCallback as this attributeChangedCallback will not fire.
		          //
		          //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
		          //
		          //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
		          //  properties here given that this goes against best practices outlined here
		          //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
		          if (_this2.hasOwnProperty(propName)) {
		            newValue = _this2[propName];
		            delete _this2[propName];
		          } else if (prototype.hasOwnProperty(propName) && typeof _this2[propName] === 'number' && _this2[propName] == newValue) {
		            // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
		            // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
		            // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
		            return;
		          }
		          _this2[propName] = newValue === null && typeof _this2[propName] === 'boolean' ? false : newValue;
		        });
		      };
		      // create an array of attributes to observe
		      // and also create a map of html attribute name to js property name
		      Cstr.observedAttributes = members.filter(function (_ref6) {
		        var _ref7 = (0, _slicedToArray2["default"])(_ref6, 2);
		          _ref7[0];
		          var m = _ref7[1];
		        return m[0] & 15;
		      } /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
		      .map(function (_ref8) {
		        var _ref9 = (0, _slicedToArray2["default"])(_ref8, 2),
		          propName = _ref9[0],
		          m = _ref9[1];
		        var attrName = m[1] || propName;
		        attrNameToPropName.set(attrName, propName);
		        if (m[0] & 512 /* MEMBER_FLAGS.ReflectAttr */) {
		          cmpMeta.$attrsToReflect$.push([propName, attrName]);
		        }
		        return attrName;
		      });
		    }
		  }
		  return Cstr;
		};
		var initializeComponent = /*#__PURE__*/function () {
		  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(elm, hostRef, cmpMeta, hmrVersionId, Cstr) {
		    var style, _scopeId, endRegisterStyles, schedule;
		    return _regenerator["default"].wrap(function _callee2$(_context2) {
		      while (1) switch (_context2.prev = _context2.next) {
		        case 0:
		          // initializeComponent
		          if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
		            {
		              // sync constructor component
		              Cstr = elm.constructor;
		              hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
		              // wait for the CustomElementRegistry to mark the component as ready before setting `isWatchReady`. Otherwise,
		              // watchers may fire prematurely if `customElements.get()`/`customElements.whenDefined()` resolves _before_
		              // Stencil has completed instantiating the component.
		              customElements.whenDefined(cmpMeta.$tagName$).then(function () {
		                return hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */;
		              });
		            }

		            if (Cstr.style) {
		              // this component has styles but we haven't registered them yet
		              style = Cstr.style;
		              if (typeof style !== 'string') {
		                style = style[hostRef.$modeName$ = computeMode(elm)];
		              }
		              _scopeId = getScopeId(cmpMeta, hostRef.$modeName$);
		              if (!styles.has(_scopeId)) {
		                endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
		                registerStyle(_scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
		                endRegisterStyles();
		              }
		            }
		          }
		          // we've successfully created a lazy instance
		          hostRef.$ancestorComponent$;
		          schedule = function schedule() {
		            return scheduleUpdate(hostRef, true);
		          };
		          schedule();
		        case 4:
		        case "end":
		          return _context2.stop();
		      }
		    }, _callee2);
		  }));
		  return function initializeComponent(_x4, _x5, _x6, _x7, _x8) {
		    return _ref10.apply(this, arguments);
		  };
		}();
		var fireConnectedCallback = function fireConnectedCallback(instance) {};
		var _connectedCallback = function connectedCallback(elm) {
		  if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
		    var hostRef = getHostRef(elm);
		    var cmpMeta = hostRef.$cmpMeta$;
		    var endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
		    if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
		      // first time this component has connected
		      hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
		      {
		        // initUpdate
		        // if the slot polyfill is required we'll need to put some nodes
		        // in here to act as original content anchors as we move nodes around
		        // host element has been connected to the DOM
		        if (cmpMeta.$flags$ & (4 /* CMP_FLAGS.hasSlotRelocation */ | 8 /* CMP_FLAGS.needsShadowDomShim */)) {
		          setContentReference(elm);
		        }
		      }
		      // Lazy properties
		      // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
		      if (cmpMeta.$members$) {
		        Object.entries(cmpMeta.$members$).map(function (_ref11) {
		          var _ref12 = (0, _slicedToArray2["default"])(_ref11, 2),
		            memberName = _ref12[0],
		            _ref12$ = (0, _slicedToArray2["default"])(_ref12[1], 1),
		            memberFlags = _ref12$[0];
		          if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
		            var value = elm[memberName];
		            delete elm[memberName];
		            elm[memberName] = value;
		          }
		        });
		      }
		      {
		        initializeComponent(elm, hostRef, cmpMeta);
		      }
		    } else {
		      // not the first time this has connected
		      // reattach any event listeners to the host
		      // since they would have been removed when disconnected
		      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
		      // fire off connectedCallback() on component instance
		      fireConnectedCallback(hostRef.$lazyInstance$);
		    }
		    endConnected();
		  }
		};
		var setContentReference = function setContentReference(elm) {
		  // only required when we're NOT using native shadow dom (slot)
		  // or this browser doesn't support native shadow dom
		  // and this host element was NOT created with SSR
		  // let's pick out the inner content for slot projection
		  // create a node to represent where the original
		  // content was first placed, which is useful later on
		  var contentRefElm = elm['s-cr'] = doc.createComment('');
		  contentRefElm['s-cn'] = true;
		  elm.insertBefore(contentRefElm, elm.firstChild);
		};
		var _disconnectedCallback = function disconnectedCallback(elm) {
		  if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
		    var hostRef = getHostRef(elm);
		    {
		      if (hostRef.$rmListeners$) {
		        hostRef.$rmListeners$.map(function (rmListener) {
		          return rmListener();
		        });
		        hostRef.$rmListeners$ = undefined;
		      }
		    }
		  }
		};
		var proxyCustomElement = function proxyCustomElement(Cstr, compactMeta) {
		  var cmpMeta = {
		    $flags$: compactMeta[0],
		    $tagName$: compactMeta[1]
		  };
		  {
		    cmpMeta.$members$ = compactMeta[2];
		  }
		  {
		    cmpMeta.$listeners$ = compactMeta[3];
		  }
		  {
		    cmpMeta.$watchers$ = Cstr.$watchers$;
		  }
		  {
		    cmpMeta.$attrsToReflect$ = [];
		  }

		  var originalConnectedCallback = Cstr.prototype.connectedCallback;
		  var originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
		  Object.assign(Cstr.prototype, {
		    __registerHost: function __registerHost() {
		      registerHost(this, cmpMeta);
		    },
		    connectedCallback: function connectedCallback() {
		      _connectedCallback(this);
		      if (originalConnectedCallback) {
		        originalConnectedCallback.call(this);
		      }
		    },
		    disconnectedCallback: function disconnectedCallback() {
		      _disconnectedCallback(this);
		      if (originalDisconnectedCallback) {
		        originalDisconnectedCallback.call(this);
		      }
		    },
		    __attachShadow: function __attachShadow() {
		      {
		        {
		          this.attachShadow({
		            mode: 'open',
		            delegatesFocus: !!(cmpMeta.$flags$ & 16 /* CMP_FLAGS.shadowDelegatesFocus */)
		          });
		        }
		      }
		    }
		  });
		  Cstr.is = cmpMeta.$tagName$;
		  return proxyComponent(Cstr, cmpMeta);
		};
		var Fragment = function Fragment(_, children) {
		  return children;
		};
		var addHostEventListeners = function addHostEventListeners(elm, hostRef, listeners, attachParentListeners) {
		  if (listeners) {
		    listeners.map(function (_ref13) {
		      var _ref14 = (0, _slicedToArray2["default"])(_ref13, 3),
		        flags = _ref14[0],
		        name = _ref14[1],
		        method = _ref14[2];
		      var target = getHostListenerTarget(elm, flags);
		      var handler = hostListenerProxy(hostRef, method);
		      var opts = hostListenerOpts(flags);
		      plt.ael(target, name, handler, opts);
		      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(function () {
		        return plt.rel(target, name, handler, opts);
		      });
		    });
		  }
		};
		var hostListenerProxy = function hostListenerProxy(hostRef, methodName) {
		  return function (ev) {
		    try {
		      if (BUILD.lazyLoad) ;else {
		        hostRef.$hostElement$[methodName](ev);
		      }
		    } catch (e) {
		      consoleError(e);
		    }
		  };
		};
		var getHostListenerTarget = function getHostListenerTarget(elm, flags) {
		  if (flags & 4 /* LISTENER_FLAGS.TargetDocument */) return doc;
		  if (flags & 8 /* LISTENER_FLAGS.TargetWindow */) return win;
		  if (flags & 16 /* LISTENER_FLAGS.TargetBody */) return doc.body;
		  return elm;
		};
		// prettier-ignore
		var hostListenerOpts = function hostListenerOpts(flags) {
		  return supportsListenerOptions ? {
		    passive: (flags & 1 /* LISTENER_FLAGS.Passive */) !== 0,
		    capture: (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0
		  } : (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0;
		};
		var setPlatformOptions = function setPlatformOptions(opts) {
		  return Object.assign(plt, opts);
		};
		var hostRefs = /*@__PURE__*/new WeakMap();
		var getHostRef = function getHostRef(ref) {
		  return hostRefs.get(ref);
		};
		var registerHost = function registerHost(elm, cmpMeta) {
		  var hostRef = {
		    $flags$: 0,
		    $hostElement$: elm,
		    $cmpMeta$: cmpMeta,
		    $instanceValues$: new Map()
		  };
		  addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
		  return hostRefs.set(elm, hostRef);
		};
		var isMemberInElement = function isMemberInElement(elm, memberName) {
		  return memberName in elm;
		};
		var consoleError = function consoleError(e, el) {
		  return (0, console.error)(e, el);
		};
		var styles = /*@__PURE__*/new Map();
		var modeResolutionChain = [];
		var win = typeof window !== 'undefined' ? window : {};
		var doc = win.document || {
		  head: {}
		};
		var H = win.HTMLElement || /*#__PURE__*/function () {
		  function _class() {
		    (0, _classCallCheck2["default"])(this, _class);
		  }
		  return (0, _createClass2["default"])(_class);
		}();
		var plt = {
		  $flags$: 0,
		  $resourcesUrl$: '',
		  jmp: function jmp(h) {
		    return h();
		  },
		  raf: function raf(h) {
		    return requestAnimationFrame(h);
		  },
		  ael: function ael(el, eventName, listener, opts) {
		    return el.addEventListener(eventName, listener, opts);
		  },
		  rel: function rel(el, eventName, listener, opts) {
		    return el.removeEventListener(eventName, listener, opts);
		  },
		  ce: function ce(eventName, opts) {
		    return new CustomEvent(eventName, opts);
		  }
		};
		var supportsListenerOptions = /*@__PURE__*/function () {
		  var supportsListenerOptions = false;
		  try {
		    doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
		      get: function get() {
		        supportsListenerOptions = true;
		      }
		    }));
		  } catch (e) {}
		  return supportsListenerOptions;
		}();
		var promiseResolve = function promiseResolve(v) {
		  return Promise.resolve(v);
		};
		var supportsConstructableStylesheets = /*@__PURE__*/function () {
		  try {
		    new CSSStyleSheet();
		    return typeof new CSSStyleSheet().replaceSync === 'function';
		  } catch (e) {}
		  return false;
		}() ;
		var queueDomReads = [];
		var queueDomWrites = [];
		var queueTask = function queueTask(queue, write) {
		  return function (cb) {
		    queue.push(cb);
		    if (!queuePending) {
		      queuePending = true;
		      if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
		        nextTick(flush);
		      } else {
		        plt.raf(flush);
		      }
		    }
		  };
		};
		var consume = function consume(queue) {
		  for (var i = 0; i < queue.length; i++) {
		    try {
		      queue[i](performance.now());
		    } catch (e) {
		      consoleError(e);
		    }
		  }
		  queue.length = 0;
		};
		var flush = function flush() {
		  // always force a bunch of medium callbacks to run, but still have
		  // a throttle on how many can run in a certain time
		  // DOM READS!!!
		  consume(queueDomReads);
		  // DOM WRITES!!!
		  {
		    consume(queueDomWrites);
		    if (queuePending = queueDomReads.length > 0) {
		      // still more to do yet, but we've run out of time
		      // let's let this thing cool off and try again in the next tick
		      plt.raf(flush);
		    }
		  }
		};
		var nextTick = function nextTick(cb) {
		  return promiseResolve().then(cb);
		};
		var writeTask = /*@__PURE__*/queueTask(queueDomWrites, true);
		var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};
		function createCommonjsModule(fn, basedir, module) {
		  return module = {
		    path: basedir,
		    exports: {},
		    require: function require(path, base) {
		      return commonjsRequire();
		    }
		  }, fn(module, module.exports), module.exports;
		}
		function commonjsRequire() {
		  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
		}
		createCommonjsModule(function (module, exports) {
		  (function (global, factory) {
		    factory();
		  })(commonjsGlobal$1, function () {
		    /**
		     * Applies the :focus-visible polyfill at the given scope.
		     * A scope in this case is either the top-level Document or a Shadow Root.
		     *
		     * @param {(Document|ShadowRoot)} scope
		     * @see https://github.com/WICG/focus-visible
		     */
		    function applyFocusVisiblePolyfill(scope) {
		      var hadKeyboardEvent = true;
		      var hadFocusVisibleRecently = false;
		      var hadFocusVisibleRecentlyTimeout = null;
		      var inputTypesAllowlist = {
		        text: true,
		        search: true,
		        url: true,
		        tel: true,
		        email: true,
		        password: true,
		        number: true,
		        date: true,
		        month: true,
		        week: true,
		        time: true,
		        datetime: true,
		        'datetime-local': true
		      };

		      /**
		       * Helper function for legacy browsers and iframes which sometimes focus
		       * elements like document, body, and non-interactive SVG.
		       * @param {Element} el
		       */
		      function isValidFocusTarget(el) {
		        if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
		          return true;
		        }
		        return false;
		      }

		      /**
		       * Computes whether the given element should automatically trigger the
		       * `focus-visible` class being added, i.e. whether it should always match
		       * `:focus-visible` when focused.
		       * @param {Element} el
		       * @return {boolean}
		       */
		      function focusTriggersKeyboardModality(el) {
		        var type = el.type;
		        var tagName = el.tagName;
		        if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
		          return true;
		        }
		        if (tagName === 'TEXTAREA' && !el.readOnly) {
		          return true;
		        }
		        if (el.isContentEditable) {
		          return true;
		        }
		        return false;
		      }

		      /**
		       * Add the `focus-visible` class to the given element if it was not added by
		       * the author.
		       * @param {Element} el
		       */
		      function addFocusVisibleClass(el) {
		        if (el.classList.contains('focus-visible')) {
		          return;
		        }
		        el.classList.add('focus-visible');
		        el.setAttribute('data-focus-visible-added', '');
		      }

		      /**
		       * Remove the `focus-visible` class from the given element if it was not
		       * originally added by the author.
		       * @param {Element} el
		       */
		      function removeFocusVisibleClass(el) {
		        if (!el.hasAttribute('data-focus-visible-added')) {
		          return;
		        }
		        el.classList.remove('focus-visible');
		        el.removeAttribute('data-focus-visible-added');
		      }

		      /**
		       * If the most recent user interaction was via the keyboard;
		       * and the key press did not include a meta, alt/option, or control key;
		       * then the modality is keyboard. Otherwise, the modality is not keyboard.
		       * Apply `focus-visible` to any current active element and keep track
		       * of our keyboard modality state with `hadKeyboardEvent`.
		       * @param {KeyboardEvent} e
		       */
		      function onKeyDown(e) {
		        if (e.metaKey || e.altKey || e.ctrlKey) {
		          return;
		        }
		        if (isValidFocusTarget(scope.activeElement)) {
		          addFocusVisibleClass(scope.activeElement);
		        }
		        hadKeyboardEvent = true;
		      }

		      /**
		       * If at any point a user clicks with a pointing device, ensure that we change
		       * the modality away from keyboard.
		       * This avoids the situation where a user presses a key on an already focused
		       * element, and then clicks on a different element, focusing it with a
		       * pointing device, while we still think we're in keyboard modality.
		       * @param {Event} e
		       */
		      function onPointerDown(e) {
		        hadKeyboardEvent = false;
		      }

		      /**
		       * On `focus`, add the `focus-visible` class to the target if:
		       * - the target received focus as a result of keyboard navigation, or
		       * - the event target is an element that will likely require interaction
		       *   via the keyboard (e.g. a text box)
		       * @param {Event} e
		       */
		      function onFocus(e) {
		        // Prevent IE from focusing the document or HTML element.
		        if (!isValidFocusTarget(e.target)) {
		          return;
		        }
		        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
		          addFocusVisibleClass(e.target);
		        }
		      }

		      /**
		       * On `blur`, remove the `focus-visible` class from the target.
		       * @param {Event} e
		       */
		      function onBlur(e) {
		        if (!isValidFocusTarget(e.target)) {
		          return;
		        }
		        if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
		          // To detect a tab/window switch, we look for a blur event followed
		          // rapidly by a visibility change.
		          // If we don't see a visibility change within 100ms, it's probably a
		          // regular focus change.
		          hadFocusVisibleRecently = true;
		          window.clearTimeout(hadFocusVisibleRecentlyTimeout);
		          hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
		            hadFocusVisibleRecently = false;
		          }, 100);
		          removeFocusVisibleClass(e.target);
		        }
		      }

		      /**
		       * If the user changes tabs, keep track of whether or not the previously
		       * focused element had .focus-visible.
		       * @param {Event} e
		       */
		      function onVisibilityChange(e) {
		        if (document.visibilityState === 'hidden') {
		          // If the tab becomes active again, the browser will handle calling focus
		          // on the element (Safari actually calls it twice).
		          // If this tab change caused a blur on an element with focus-visible,
		          // re-apply the class when the user switches back to the tab.
		          if (hadFocusVisibleRecently) {
		            hadKeyboardEvent = true;
		          }
		          addInitialPointerMoveListeners();
		        }
		      }

		      /**
		       * Add a group of listeners to detect usage of any pointing devices.
		       * These listeners will be added when the polyfill first loads, and anytime
		       * the window is blurred, so that they are active when the window regains
		       * focus.
		       */
		      function addInitialPointerMoveListeners() {
		        document.addEventListener('mousemove', onInitialPointerMove);
		        document.addEventListener('mousedown', onInitialPointerMove);
		        document.addEventListener('mouseup', onInitialPointerMove);
		        document.addEventListener('pointermove', onInitialPointerMove);
		        document.addEventListener('pointerdown', onInitialPointerMove);
		        document.addEventListener('pointerup', onInitialPointerMove);
		        document.addEventListener('touchmove', onInitialPointerMove);
		        document.addEventListener('touchstart', onInitialPointerMove);
		        document.addEventListener('touchend', onInitialPointerMove);
		      }
		      function removeInitialPointerMoveListeners() {
		        document.removeEventListener('mousemove', onInitialPointerMove);
		        document.removeEventListener('mousedown', onInitialPointerMove);
		        document.removeEventListener('mouseup', onInitialPointerMove);
		        document.removeEventListener('pointermove', onInitialPointerMove);
		        document.removeEventListener('pointerdown', onInitialPointerMove);
		        document.removeEventListener('pointerup', onInitialPointerMove);
		        document.removeEventListener('touchmove', onInitialPointerMove);
		        document.removeEventListener('touchstart', onInitialPointerMove);
		        document.removeEventListener('touchend', onInitialPointerMove);
		      }

		      /**
		       * When the polfyill first loads, assume the user is in keyboard modality.
		       * If any event is received from a pointing device (e.g. mouse, pointer,
		       * touch), turn off keyboard modality.
		       * This accounts for situations where focus enters the page from the URL bar.
		       * @param {Event} e
		       */
		      function onInitialPointerMove(e) {
		        // Work around a Safari quirk that fires a mousemove on <html> whenever the
		        // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
		        if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
		          return;
		        }
		        hadKeyboardEvent = false;
		        removeInitialPointerMoveListeners();
		      }

		      // For some kinds of state, we are interested in changes at the global scope
		      // only. For example, global pointer input, global key presses and global
		      // visibility change should affect the state at every scope:
		      document.addEventListener('keydown', onKeyDown, true);
		      document.addEventListener('mousedown', onPointerDown, true);
		      document.addEventListener('pointerdown', onPointerDown, true);
		      document.addEventListener('touchstart', onPointerDown, true);
		      document.addEventListener('visibilitychange', onVisibilityChange, true);
		      addInitialPointerMoveListeners();

		      // For focus and blur, we specifically care about state changes in the local
		      // scope. This is because focus / blur events that originate from within a
		      // shadow root are not re-dispatched from the host element if it was already
		      // the active element in its own scope:
		      scope.addEventListener('focus', onFocus, true);
		      scope.addEventListener('blur', onBlur, true);

		      // We detect that a node is a ShadowRoot by ensuring that it is a
		      // DocumentFragment and also has a host property. This check covers native
		      // implementation and polyfill implementation transparently. If we only cared
		      // about the native implementation, we could just check if the scope was
		      // an instance of a ShadowRoot.
		      if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
		        // Since a ShadowRoot is a special kind of DocumentFragment, it does not
		        // have a root element to add a class to. So, we add this attribute to the
		        // host element instead:
		        scope.host.setAttribute('data-js-focus-visible', '');
		      } else if (scope.nodeType === Node.DOCUMENT_NODE) {
		        document.documentElement.classList.add('js-focus-visible');
		        document.documentElement.setAttribute('data-js-focus-visible', '');
		      }
		    }

		    // It is important to wrap all references to global window and document in
		    // these checks to support server-side rendering use cases
		    // @see https://github.com/WICG/focus-visible/issues/199
		    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		      // Make the polyfill helper globally available. This can be used as a signal
		      // to interested libraries that wish to coordinate with the polyfill for e.g.,
		      // applying the polyfill to a shadow root:
		      window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

		      // Notify interested libraries of the polyfill's presence, in case the
		      // polyfill was loaded lazily:
		      var event;
		      try {
		        event = new CustomEvent('focus-visible-polyfill-ready');
		      } catch (error) {
		        // IE11 does not support using CustomEvent as a constructor directly:
		        event = document.createEvent('CustomEvent');
		        event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
		      }
		      window.dispatchEvent(event);
		    }
		    if (typeof document !== 'undefined') {
		      // Apply the polyfill to the global document, so that no JavaScript
		      // coordination is required to use the polyfill in the top-level document:
		      applyFocusVisiblePolyfill(document);
		    }
		  });
		});
		var Action;
		(function (Action) {
		  Action["PLAY"] = "play";
		  Action["PAUSE"] = "pause";
		  Action["STOP"] = "stop";
		  Action["ENTER_FULLSCREEN"] = "enterfullscreen";
		  Action["EXIT_FULLSCREEN"] = "exitfullscreen";
		  Action["MUTE"] = "mute";
		  Action["UNMUTE"] = "unmute";
		  Action["TEXT_ON"] = "texton";
		  Action["TEXT_OFF"] = "textoff";
		  Action["GO_TO_LIVE"] = "gotolive";
		  Action["MENU_ITEM_SELECT"] = "menuitemselect";
		  Action["LIST_ITEM_SELECT"] = "listitemselect";
		  Action["NONE"] = "none";
		  Action["SEEK"] = "seek";
		  Action["SEEK_FORWARD"] = "seekforward";
		  Action["SEEK_BACK"] = "seekback";
		  Action["VOLUME"] = "volume";
		  Action["PREVIEW"] = "preview";
		  Action["SETTINGS_ON"] = "settingson";
		  Action["SETTINGS_OFF"] = "settingsoff";
		  Action["LANGUAGE_SELECT"] = "languageselect";
		  Action["QUALITY_SELECT"] = "qualityselect";
		  Action["POSTER_PLAY"] = "posterplay";
		  Action["PANEL_BACK"] = "panelback";
		  Action["PANEL_CLOSE"] = "panelclose";
		})(Action || (Action = {}));
		exports.ActiveMode = void 0;
		(function (ActiveMode) {
		  /**
		   * The UI will show/hide based on user interactions.
		   */
		  ActiveMode["AUTO"] = "auto";
		  /**
		   * The UI will show/hide based on the `active` API.
		   */
		  ActiveMode["MANUAL"] = "manual";
		})(exports.ActiveMode || (exports.ActiveMode = {}));
		var ControlFunction;
		(function (ControlFunction) {
		  ControlFunction["MUTE"] = "mute";
		  ControlFunction["PLAY"] = "play";
		  ControlFunction["FULLSCREEN"] = "fullscreen";
		  ControlFunction["TEXT"] = "text";
		  ControlFunction["PLAY_OVERLAY"] = "playOverlay";
		  ControlFunction["SETTINGS"] = "settings";
		  ControlFunction["VOLUME"] = "volume";
		})(ControlFunction || (ControlFunction = {}));
		var ControlMode;
		(function (ControlMode) {
		  ControlMode["NONE"] = "none";
		  ControlMode["AD"] = "ad";
		  ControlMode["CONTENT"] = "content";
		  ControlMode["COMPACT"] = "compact";
		})(ControlMode || (ControlMode = {}));
		var CssNames;
		(function (CssNames) {
		  CssNames["HIDDEN"] = "avia-ui-hidden";
		  CssNames["ACC_VOL_ON"] = "avia-volume-on";
		  CssNames["ACC_VOL_OFF"] = "avia-volume-off";
		  CssNames["SEGMENT_MARKER"] = "avia-segment-marker";
		  CssNames["INDICATOR_ACTIVE"] = "avia-indicator-active";
		  CssNames["ACC_VOL"] = "avia-acc-vol";
		  CssNames["ACC_VOL_METER"] = "avia-acc-vol-meter";
		  CssNames["ACC_VOL_OVERLAY"] = "avia-vol-meter-overlay";
		  CssNames["ACC_FWD"] = "avia-acc-fwd";
		  CssNames["ACC_BACK"] = "avia-acc-back";
		  CssNames["ACC_ARROW"] = "avia-acc-arrow";
		  CssNames["UNMUTE_CTA"] = "avia-unmute-cta";
		  CssNames["CONTROLS_VISIBLE"] = "avia-controls-vis";
		  CssNames["SPINNER_ACTIVE"] = "avia-spinner";
		  CssNames["SPINNER_IDLE"] = "avia-spinner-idle";
		  CssNames["SETTINGS_NUDGE_LEFT"] = "avia-settings-nudge-left";
		})(CssNames || (CssNames = {}));
		exports.DeviceMode = void 0;
		(function (DeviceMode) {
		  DeviceMode["AUTO"] = "auto";
		  DeviceMode["TV"] = "tv";
		  DeviceMode["DESKTOP"] = "desktop";
		  DeviceMode["MOBILE"] = "mobile";
		})(exports.DeviceMode || (exports.DeviceMode = {}));
		exports.LocalizationId = void 0;
		(function (LocalizationId) {
		  LocalizationId["PLAY"] = "play";
		  LocalizationId["PAUSE"] = "pause";
		  LocalizationId["STOP"] = "stop";
		  LocalizationId["MUTE"] = "mute";
		  LocalizationId["UNMUTE"] = "unmute";
		  LocalizationId["VOLUME"] = "volume";
		  LocalizationId["CLICK_TO_UNMUTE"] = "click-to-unmute";
		  LocalizationId["TAP_TO_UNMUTE"] = "tap-to-unmute";
		  LocalizationId["LIVE"] = "live";
		  LocalizationId["GO_LIVE"] = "go-live";
		  LocalizationId["SEEK"] = "seek";
		  LocalizationId["SEEK_BACK"] = "seek-back";
		  LocalizationId["SEEK_FORWARD"] = "seek-forward";
		  LocalizationId["CLOSED_CAPTIONS_OFF"] = "closed-captions-off";
		  LocalizationId["CLOSED_CAPTIONS_ON"] = "closed-captions-on";
		  LocalizationId["FULL_SCREEN_ENTER"] = "full-screen-enter";
		  LocalizationId["FULL_SCREEN_EXIT"] = "full-screen-exit";
		  LocalizationId["HOURS"] = "hours";
		  LocalizationId["MINUTES"] = "minutes";
		  LocalizationId["SECONDS"] = "seconds";
		  LocalizationId["VALUE_OF_TOTAL"] = "value-of-total";
		  LocalizationId["UNMUTE_CTA"] = "unmute-cta";
		  LocalizationId["SETTINGS"] = "settings";
		  LocalizationId["LANGUAGE"] = "language";
		  LocalizationId["QUALITY"] = "quality";
		  LocalizationId["BACK"] = "back";
		  LocalizationId["CAPTIONS"] = "captions";
		  LocalizationId["AUDIO"] = "audio";
		  LocalizationId["CLOSE"] = "close";
		  LocalizationId["AUTO"] = "auto";
		  LocalizationId["UNKNOWN"] = "unknown";
		})(exports.LocalizationId || (exports.LocalizationId = {}));
		var LanguageLabel;
		(function (LanguageLabel) {
		  LanguageLabel["AB"] = "Abkhaz";
		  LanguageLabel["AE"] = "Avesta";
		  LanguageLabel["AF"] = "Afrikaans";
		  LanguageLabel["AK"] = "Akan";
		  LanguageLabel["AM"] = "\u12A0\u121B\u122D\u129B";
		  LanguageLabel["AN"] = "Aragon\xE9s";
		  LanguageLabel["AR"] = "\u0627\u0644\u0639\u0631\u0628\u064A\u0629";
		  LanguageLabel["AV"] = "A\u0432\u0430\u0440 \u043C\u0430\u0446\u04C0";
		  LanguageLabel["AY"] = "Aymar aru";
		  LanguageLabel["AZ"] = "az\u0259rbaycan dili";
		  LanguageLabel["BA"] = "\u0431\u0430\u0448\u04A1\u043E\u0440\u0442 \u0442\u0435\u043B\u0435";
		  LanguageLabel["BE"] = "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F \u043C\u043E\u0432\u0430";
		  LanguageLabel["BG"] = "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A";
		  LanguageLabel["BH"] = "\u092D\u094B\u091C\u092A\u0941\u0930\u0940";
		  LanguageLabel["BI"] = "Bislama";
		  LanguageLabel["BM"] = "Bamanankan";
		  LanguageLabel["BN"] = "\u09AC\u09BE\u0982\u09B2\u09BE";
		  LanguageLabel["BO"] = "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42";
		  LanguageLabel["BR"] = "Brezhoneg";
		  LanguageLabel["BS"] = "Bosanski jezik";
		  LanguageLabel["CA"] = "catal\xE0";
		  LanguageLabel["CE"] = "\u043D\u043E\u0445\u0447\u0438\u0439\u043D \u043C\u043E\u0442\u0442";
		  LanguageLabel["CH"] = "Chamoru";
		  LanguageLabel["CO"] = "Corsu";
		  LanguageLabel["CR"] = "\u14C0\u1426\u1403\u152D\u140D\u140F\u1423";
		  LanguageLabel["CS"] = "\u010De\u0161tina";
		  LanguageLabel["CU"] = "\u0469\u0437\u044B\u043A\u044A \u0441\u043B\u043E\u0432\u0463\u043D\u044C\u0441\u043A\u044A";
		  LanguageLabel["CV"] = "\u0447\u04D1\u0432\u0430\u0448 \u0447\u04D7\u043B\u0445\u0438";
		  LanguageLabel["CY"] = "Cymraeg";
		  LanguageLabel["DA"] = "Dansk";
		  LanguageLabel["DE"] = "Deutsch";
		  LanguageLabel["DZ"] = "\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41";
		  LanguageLabel["EE"] = "E\u028Begbe";
		  LanguageLabel["EL"] = "\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
		  LanguageLabel["EN"] = "English";
		  LanguageLabel["EO"] = "Esperanto";
		  LanguageLabel["ES"] = "Espa\xF1ol";
		  LanguageLabel["ET"] = "Eesti";
		  LanguageLabel["EU"] = "Euskara";
		  LanguageLabel["FA"] = "\u0641\u0627\u0631\u0633\u06CC";
		  LanguageLabel["FF"] = "Fulfulde";
		  LanguageLabel["FI"] = "Suomi";
		  LanguageLabel["FJ"] = "Vosa Vakaviti";
		  LanguageLabel["FO"] = "F\xF8royskt";
		  LanguageLabel["FR"] = "Fran\xE7ais";
		  LanguageLabel["FY"] = "Frysk";
		  LanguageLabel["GA"] = "Gaeilge";
		  LanguageLabel["GD"] = "G\xE0idhlig";
		  LanguageLabel["GL"] = "Galego";
		  LanguageLabel["GN"] = "Ava\xF1e'\u1EBD";
		  LanguageLabel["GU"] = "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0";
		  LanguageLabel["GV"] = "Gaelg";
		  LanguageLabel["HA"] = "(Hausa) \u0647\u064E\u0648\u064F\u0633\u064E";
		  LanguageLabel["HE"] = "\u05E2\u05D1\u05E8\u05D9\u05EA";
		  LanguageLabel["HI"] = "\u0939\u093F\u0928\u094D\u0926\u0940";
		  LanguageLabel["HO"] = "Hiri Motu";
		  LanguageLabel["HR"] = "hrvatski jezik";
		  LanguageLabel["HT"] = "Krey\xF2l ayisyen";
		  LanguageLabel["HU"] = "Magyar";
		  LanguageLabel["HY"] = "\u0540\u0561\u0575\u0565\u0580\u0565\u0576";
		  LanguageLabel["HZ"] = "Otjiherero";
		  LanguageLabel["IA"] = "Interlingua";
		  LanguageLabel["ID"] = "Bahasa Indonesia";
		  LanguageLabel["IE"] = "Interlingue";
		  LanguageLabel["IG"] = "As\u1EE5s\u1EE5 Igbo";
		  LanguageLabel["II"] = "\uA188\uA320\uA4BF Nuosuhxop";
		  LanguageLabel["IK"] = "I\xF1upiaq";
		  LanguageLabel["IO"] = "Ido";
		  LanguageLabel["IS"] = "\xCDslenska";
		  LanguageLabel["IT"] = "Italiano";
		  LanguageLabel["IU"] = "\u1403\u14C4\u1483\u144E\u1450\u1466";
		  LanguageLabel["JA"] = "\u65E5\u672C\u4EBA";
		  LanguageLabel["JV"] = "Basa Jawa";
		  LanguageLabel["KA"] = "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8";
		  LanguageLabel["KG"] = "Kikongo";
		  LanguageLabel["KI"] = "G\u0129k\u0169y\u0169";
		  LanguageLabel["KJ"] = "Kuanyama";
		  LanguageLabel["KK"] = "\u049B\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456";
		  LanguageLabel["KL"] = "kalaallisut";
		  LanguageLabel["KM"] = "\u1781\u17D2\u1798\u17C2\u179A";
		  LanguageLabel["KN"] = "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1";
		  LanguageLabel["KO"] = "\uD55C\uAD6D\uC5B4";
		  LanguageLabel["KR"] = "Kanuri";
		  LanguageLabel["KS"] = "\u0915\u0936\u094D\u092E\u0940\u0930\u0940,";
		  LanguageLabel["KU"] = "Kurd\xEE";
		  LanguageLabel["KV"] = "\u043A\u043E\u043C\u0438 \u043A\u044B\u0432";
		  LanguageLabel["KW"] = "Kernewek";
		  LanguageLabel["KY"] = "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430";
		  LanguageLabel["LA"] = "Latine";
		  LanguageLabel["LB"] = "L\xEBtzebuergesch";
		  LanguageLabel["LG"] = "Luganda";
		  LanguageLabel["LI"] = "Limburgs";
		  LanguageLabel["LN"] = "Ling\xE1la";
		  LanguageLabel["LO"] = "\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7";
		  LanguageLabel["LT"] = "Lietuvi\u0173 kalba";
		  LanguageLabel["LU"] = "Kiluba";
		  LanguageLabel["LV"] = "latvie\u0161u valoda";
		  LanguageLabel["MG"] = "fiteny malagasy";
		  LanguageLabel["MH"] = "Kajin M\u0327aje\u013C";
		  LanguageLabel["MI"] = "te reo M\u0101ori";
		  LanguageLabel["MK"] = "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A";
		  LanguageLabel["ML"] = "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02";
		  LanguageLabel["MN"] = "\u041C\u043E\u043D\u0433\u043E\u043B \u0445\u044D\u043B";
		  LanguageLabel["MR"] = "\u092E\u0930\u093E\u0920\u0940";
		  LanguageLabel["MS"] = "Bahasa Melayu";
		  LanguageLabel["MT"] = "Malti";
		  LanguageLabel["MY"] = "\u1017\u1019\u102C\u1005\u102C";
		  LanguageLabel["NA"] = "Dorerin Naoero";
		  LanguageLabel["NB"] = "Norsk Bokm\xE5l";
		  LanguageLabel["NE"] = "\u0928\u0947\u092A\u093E\u0932\u0940";
		  LanguageLabel["NG"] = "Owambo";
		  LanguageLabel["NL"] = "Nederlands";
		  LanguageLabel["NN"] = "Norsk Nynorsk";
		  LanguageLabel["NO"] = "Norsk";
		  LanguageLabel["NR"] = "IsiNdebele";
		  LanguageLabel["NV"] = "Din\xE9 bizaad";
		  LanguageLabel["NY"] = "ChiChe\u0175a";
		  LanguageLabel["OC"] = "Occitan";
		  LanguageLabel["OJ"] = "\u140A\u14C2\u1511\u14C8\u142F\u14A7\u140E\u14D0";
		  LanguageLabel["OM"] = "Afaan Oromoo";
		  LanguageLabel["OR"] = "\u0B13\u0B21\u0B3C\u0B3F\u0B06";
		  LanguageLabel["OS"] = "\u0438\u0440\u043E\u043D \xE6\u0432\u0437\u0430\u0433";
		  LanguageLabel["PA"] = "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40";
		  LanguageLabel["PI"] = "\u092A\u093E\u0932\u093F, \u092A\u093E\u0933\u093F";
		  LanguageLabel["PL"] = "J\u0119zyk polski";
		  LanguageLabel["PS"] = "\u067E\u069A\u062A\u0648";
		  LanguageLabel["PT"] = "Portugu\xEAs";
		  LanguageLabel["QU"] = "Runa Simi";
		  LanguageLabel["RM"] = "Rumantsch Grischun";
		  LanguageLabel["RN"] = "Ikirundi";
		  LanguageLabel["RO"] = "Rom\xE2n\u0103";
		  LanguageLabel["RU"] = "\u0440\u0443\u0441\u0441\u043A\u0438\u0439";
		  LanguageLabel["RW"] = "Ikinyarwanda";
		  LanguageLabel["SA"] = "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D";
		  LanguageLabel["SC"] = "sardu";
		  LanguageLabel["SD"] = "\u0938\u093F\u0928\u094D\u0927\u0940";
		  LanguageLabel["SE"] = "Davvis\xE1megiella";
		  LanguageLabel["SG"] = "Y\xE2ng\xE2 t\xEE s\xE4ng\xF6";
		  LanguageLabel["SI"] = "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD";
		  LanguageLabel["SK"] = "Sloven\u010Dina";
		  LanguageLabel["SL"] = "Slovenski jezik";
		  LanguageLabel["SM"] = "Gagana fa'a Samoa";
		  LanguageLabel["SN"] = "chiShona";
		  LanguageLabel["SO"] = "Soomaaliga";
		  LanguageLabel["SQ"] = "Shqip";
		  LanguageLabel["SR"] = "\u0441\u0440\u043F\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A";
		  LanguageLabel["SS"] = "SiSwati";
		  LanguageLabel["ST"] = "Sesotho";
		  LanguageLabel["SU"] = "Basa Sunda";
		  LanguageLabel["SV"] = "Svenska";
		  LanguageLabel["SW"] = "Kiswahili";
		  LanguageLabel["TA"] = "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD";
		  LanguageLabel["TE"] = "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41";
		  LanguageLabel["TG"] = "\u0442\u043E\u04B7\u0438\u043A\u04E3";
		  LanguageLabel["TH"] = "\u0E44\u0E17\u0E22";
		  LanguageLabel["TI"] = "\u1275\u130D\u122D\u129B";
		  LanguageLabel["TK"] = "T\xFCrkmen";
		  LanguageLabel["TL"] = "Wikang Tagalog";
		  LanguageLabel["TN"] = "Setswana";
		  LanguageLabel["TO"] = "Faka Tonga";
		  LanguageLabel["TR"] = "T\xFCrk\xE7e";
		  LanguageLabel["TS"] = "Xitsonga";
		  LanguageLabel["TT"] = "\u0442\u0430\u0442\u0430\u0440 \u0442\u0435\u043B\u0435";
		  LanguageLabel["TW"] = "Twi";
		  LanguageLabel["TY"] = "Reo Tahiti";
		  LanguageLabel["UG"] = "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5";
		  LanguageLabel["UK"] = "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430";
		  LanguageLabel["UR"] = "\u0627\u0631\u062F\u0648";
		  LanguageLabel["UZ"] = "O\u02BBzbek";
		  LanguageLabel["VE"] = "Tshiven\u1E13a";
		  LanguageLabel["VI"] = "Ti\u1EBFng Vi\u1EC7t";
		  LanguageLabel["VO"] = "Volap\xFCk";
		  LanguageLabel["WA"] = "Walon";
		  LanguageLabel["WO"] = "Wollof";
		  LanguageLabel["XH"] = "IsiXhosa";
		  LanguageLabel["YI"] = "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9";
		  LanguageLabel["YO"] = "Yor\xF9b\xE1";
		  LanguageLabel["ZA"] = "Sa\u026F cue\u014B\u0185";
		  LanguageLabel["ZH"] = "\u4E2D\u6587 (Zh\u014Dngw\xE9n)";
		  LanguageLabel["ZU"] = "IsiZulu";
		})(LanguageLabel || (LanguageLabel = {}));
		function debounce(func, delay) {
		  var timeout;
		  var pending = function pending() {
		    return timeout != null;
		  };
		  var cancel = function cancel() {
		    clearTimeout(timeout);
		    timeout = null;
		  };
		  var run = function run() {
		    cancel();
		    // @ts-ignore
		    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		      args[_key4] = arguments[_key4];
		    }
		    timeout = setTimeout.apply(void 0, [func, delay].concat(args));
		  };
		  run.cancel = cancel;
		  run.flush = func;
		  run.pending = pending;
		  return run;
		}
		function isEmpty(val) {
		  return val == null || val === undefined || val === '';
		}
		function isUndefined(value) {
		  return typeof value === 'undefined';
		}
		function csvToArray(str) {
		  if (isEmpty(str)) {
		    return [];
		  }
		  return str.split(',').map(function (v) {
		    return v.trim();
		  });
		}
		function toTimeObject() {
		  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		  if (value == null || isNaN(value)) {
		    value = 0;
		  }
		  var hms = secToHms(value, 3600).split(':');
		  return {
		    hours: parseInt(hms[0]),
		    minutes: parseInt(hms[1]),
		    seconds: parseInt(hms[2])
		  };
		}
		function createLocalizedTimeString(time, localeData) {
		  var t = toTimeObject(time);
		  var hasHours = t.hours > 0;
		  var ret = '';
		  if (hasHours) {
		    ret += "".concat(t.hours, " ").concat(localeData[exports.LocalizationId.HOURS], " ");
		  }
		  if (t.minutes > 0 || hasHours) {
		    ret += "".concat(t.minutes, " ").concat(localeData[exports.LocalizationId.MINUTES], " ");
		  }
		  ret += "".concat(t.seconds, " ").concat(localeData[exports.LocalizationId.SECONDS]);
		  return ret;
		}
		function getEventPos(event) {
		  // @ts-ignore
		  if (!(event === null || event === void 0 ? void 0 : event.pageX) && (!event.targetTouches || event.targetTouches.length === 0)) {
		    return {
		      x: null,
		      y: null
		    };
		  }
		  return {
		    // @ts-ignore
		    x: event.pageX - (window.scrollX || window.pageXOffset) || event.targetTouches[0].pageX - window.scrollX,
		    // @ts-ignore
		    y: event.pageY - (window.scrollY || window.pageYOffset) || event.targetTouches[0].pageY - window.scrollY
		  };
		}
		function valueOfTotal(time, duration, localeData) {
		  var value = createLocalizedTimeString(time, localeData);
		  var total = createLocalizedTimeString(duration, localeData);
		  return localize(localeData[exports.LocalizationId.VALUE_OF_TOTAL], {
		    value: value,
		    total: total
		  });
		}
		function toCssPercent(value) {
		  return "".concat(roundTo(value * 100, 2), "%");
		}
		// TODO: The following items are all duplicates from avia.util.Util and should be removed.
		function secToHms(seconds) {
		  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 61;
		  // default
		  if (seconds == null || isNaN(seconds)) {
		    return '00:00';
		  }
		  // logical OR truncation
		  seconds = seconds | 0;
		  var time = zeroFill(seconds % 60);
		  seconds = seconds / 60 | 0;
		  time = zeroFill(seconds % 60) + ':' + time;
		  seconds = seconds / 60 | 0;
		  if (seconds > 0) {
		    time = zeroFill(seconds) + ':' + time;
		  }
		  if (max >= 3600 && time.length === 5) {
		    time = '00:' + time;
		  }
		  return time;
		}
		function localize(message, context) {
		  return template(message, context);
		}
		function template(input, context) {
		  var open = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '{{';
		  var close = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '}}';
		  if (!input) {
		    return input;
		  }
		  var regex = new RegExp("".concat(open, "((?:(?!(").concat(open, "|").concat(close, ")).)+)").concat(close), 'g');
		  return input.replace(regex, function (match, token) {
		    return !isUndefined(context[token]) ? context[token] : match;
		  });
		}
		function zeroFill(time) {
		  return time < 10 ? '0' + time : time.toString();
		}
		function mapToRange(value, fromMin, fromMax) {
		  var toMin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		  var toMax = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
		  return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
		}
		function roundTo(num, len) {
		  return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
		}
		function clampValue(value, min, max) {
		  return Math.max(min, Math.min(max, value));
		}
		function blockEvent(event) {
		  event.stopPropagation();
		  event.preventDefault();
		}
		function createElementsFromString(html) {
		  try {
		    var _template = document.createElement('template');
		    _template.innerHTML = html;
		    return Array.from(_template.content.children);
		  } catch (error) {
		    throw new Error("Could not create element from string: ".concat(html));
		  }
		}
		function applyCssVars(varMap) {
		  var style = document.documentElement.style;
		  Object.keys(varMap).forEach(function (key) {
		    return style.setProperty(key, varMap[key]);
		  });
		}
		function getLangLabel(language) {
		  var tag = language.split('-').shift().slice(0, 2).toUpperCase();
		  var lbl = LanguageLabel[tag];
		  return lbl;
		}
		var PreviewTimeTransform = {
		  DEFAULT: function DEFAULT(playerTime) {
		    return secToHms(playerTime.contentTime);
		  },
		  UTC_TIME: function UTC_TIME(playerTime) {
		    return new Date(playerTime.liveStreamUtcTime).toTimeString().split(' ')[0];
		  }
		};
		var UiEvents;
		(function (UiEvents) {
		  UiEvents["ACTION"] = "uiaction";
		})(UiEvents || (UiEvents = {}));
		var AviaPluginBase = /*#__PURE__*/function () {
		  function AviaPluginBase(id) {
		    (0, _classCallCheck2["default"])(this, AviaPluginBase);
		    this.debug = false;
		    this.logFmt = 'color: #fcf; font-style: italic;';
		    this.id = id;
		    this.player = null;
		    this.services = null;
		    this.options = null;
		    this.onPlayerEvent = this.onPlayerEvent.bind(this);
		  }
		  (0, _createClass2["default"])(AviaPluginBase, [{
		    key: "getId",
		    value: function getId() {
		      return this.id;
		    }
		  }, {
		    key: "destroy",
		    value: function destroy() {
		      this.listenToPlayer(false, this.getEventInterests());
		      this.player = null;
		      this.options = null;
		      this.services = null;
		      this.avia = null;
		    }
		    // @ts-ignore
		  }, {
		    key: "onPlayerEvent",
		    value: function onPlayerEvent(event) {
		      // null op; implement in subclass
		    }
		    // Return a list of events this plugin needs to listen to;
		    // implement in subclass
		  }, {
		    key: "getEventInterests",
		    value: function getEventInterests() {
		      return [];
		    }
		  }, {
		    key: "sendEvent",
		    value: function sendEvent(data) {
		      this.services.event.dispatchPluginEvent(data);
		    }
		    // Add/remove listeners for the given list of player events
		    // Invoke with no arg or with TRUE to add listeners, FALSE to remove
		  }, {
		    key: "listenToPlayer",
		    value: function listenToPlayer(flag, events) {
		      var _this3 = this;
		      var action = flag !== false ? 'on' : 'off';
		      events.forEach(function (event) {
		        return _this3.player[action](event, _this3.onPlayerEvent);
		      });
		    }
		  }, {
		    key: "log",
		    value: function log(msg) {
		      this.debug && (console === null || console === void 0 ? void 0 : console.log("%c<Plugin: ".concat(this.id, "> ").concat(msg), this.logFmt));
		    }
		  }, {
		    key: "onRegister",
		    value: function () {
		      var _onRegister = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(player, options, services) {
		        return _regenerator["default"].wrap(function _callee3$(_context3) {
		          while (1) switch (_context3.prev = _context3.next) {
		            case 0:
		              this.player = player;
		              this.services = services;
		              this.options = options;
		              this.avia = services.avia;
		              this.debug = options.debug === true;
		              _context3.next = 7;
		              return this.initialize();
		            case 7:
		              this.listenToPlayer(true, this.getEventInterests());
		              this.log("Registered ".concat(this.id));
		            case 9:
		            case "end":
		              return _context3.stop();
		          }
		        }, _callee3, this);
		      }));
		      function onRegister(_x9, _x10, _x11) {
		        return _onRegister.apply(this, arguments);
		      }
		      return onRegister;
		    }()
		  }, {
		    key: "initialize",
		    value: function () {
		      var _initialize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
		        return _regenerator["default"].wrap(function _callee4$(_context4) {
		          while (1) switch (_context4.prev = _context4.next) {
		            case 0:
		            case "end":
		              return _context4.stop();
		          }
		        }, _callee4);
		      }));
		      function initialize() {
		        return _initialize.apply(this, arguments);
		      }
		      return initialize;
		    }()
		  }]);
		  return AviaPluginBase;
		}();
		/* eslint no-unused-vars: "off", @typescript-eslint/no-explicit-any: "off", no-use-before-define: "off" */
		var Directions;
		(function (Directions) {
		  Directions["LEFT"] = "left";
		  Directions["RIGHT"] = "right";
		  Directions["UP"] = "up";
		  Directions["DOWN"] = "down";
		  Directions["ENTER"] = "enter";
		  Directions["UNSPECIFIED"] = "*";
		})(Directions || (Directions = {}));
		var Orientations;
		(function (Orientations) {
		  Orientations["VERTICAL"] = "vertical";
		  Orientations["HORIZONTAL"] = "horizontal";
		})(Orientations || (Orientations = {}));
		var KeyCodes = {
		  4: Directions.LEFT,
		  21: Directions.LEFT,
		  37: Directions.LEFT,
		  214: Directions.LEFT,
		  205: Directions.LEFT,
		  218: Directions.LEFT,
		  5: Directions.RIGHT,
		  22: Directions.RIGHT,
		  39: Directions.RIGHT,
		  213: Directions.RIGHT,
		  206: Directions.RIGHT,
		  217: Directions.RIGHT,
		  29460: Directions.UP,
		  19: Directions.UP,
		  38: Directions.UP,
		  211: Directions.UP,
		  203: Directions.UP,
		  215: Directions.UP,
		  29461: Directions.DOWN,
		  20: Directions.DOWN,
		  40: Directions.DOWN,
		  212: Directions.DOWN,
		  204: Directions.DOWN,
		  216: Directions.DOWN,
		  29443: Directions.ENTER,
		  13: Directions.ENTER,
		  67: Directions.ENTER,
		  32: Directions.ENTER,
		  23: Directions.ENTER,
		  195: Directions.ENTER
		};

		/**
		 * Given an array of values and a goal, return the value from values which is closest to the goal.
		 *
		 * @param {number[]} values
		 * @param {number} goal
		 */
		var closestIndex = function closestIndex(values, goal) {
		  return values.reduce(function (prev, curr) {
		    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
		  });
		};
		/**
		 * Checks if a given node is focusable.
		 *
		 * @param {object} node - node to check against focusability
		 */
		var isNodeFocusable = function isNodeFocusable(node) {
		  if (!node) {
		    return false;
		  }
		  return node.isFocusable != null ? node.isFocusable : !!node.selectAction;
		};
		/**
		 * Given a keyCode, lookup and return the direction from the keycodes mapping file.
		 *
		 * @param {number} keyCode - key code for which corresponding direction is searched
		 */
		var getDirectionForKeyCode = function getDirectionForKeyCode(keyCode) {
		  return KeyCodes[keyCode];
		};
		/**
		 * Given an orientation and a direction, do they match?
		 *
		 * I.e an orientation `horizontal` and direction `left` or `right` is considered matching.
		 *
		 * Direction CAN be passed as `*` (wildcard). this will always return true.
		 *
		 * @param {string} orientation - orientation to match with the direction
		 * @param {string} direction - direction to match with the orientation
		 */
		var isDirectionAndOrientationMatching = function isDirectionAndOrientationMatching(orientation, direction) {
		  if (!orientation || !direction) {
		    return false;
		  }
		  var validOrientation = toValidOrientation(orientation);
		  var validDirection = toValidDirection(direction);
		  return validDirection === Directions.UNSPECIFIED || validOrientation === Orientations.VERTICAL && (validDirection === Directions.UP || validDirection === Directions.DOWN) || validOrientation === Orientations.HORIZONTAL && (validDirection === Directions.LEFT || validDirection === Directions.RIGHT);
		};
		/**
		 * Returns a child from the given node whose indexRange encompasses the given index.
		 *
		 * @param {object} node - node, which children index ranges will be examined
		 * @param {number} index - examined index value
		 */
		var findChildWithMatchingIndexRange = function findChildWithMatchingIndexRange(node, index) {
		  if (!node || !node.children) {
		    return undefined;
		  }
		  for (var i = 0; i < node.children.length; i++) {
		    var child = node.children[i];
		    if (child.indexRange && child.indexRange[0] <= index && child.indexRange[1] >= index) {
		      return child;
		    }
		  }
		  return undefined;
		};
		/**
		 * Returns a child from the given node whose index is numerically closest to the given index.
		 *
		 * If an indexRange is provided, first check if the node's activeChild is inside
		 * the indexRange. If it is, return the activeChild node instead
		 *
		 * @param {object} node
		 * @param {number} index
		 * @param {number[]} indexRange
		 */
		var findChildWithClosestIndex = function findChildWithClosestIndex(node, index, indexRange) {
		  if (!node || !node.children) {
		    return undefined;
		  }
		  // if we have an indexRange, and the nodes active child is inside that index range,
		  // just return the active child
		  if (indexRange && node.activeChild && node.activeChild.index >= indexRange[0] && node.activeChild.index <= indexRange[1] && isNodeFocusable(node.activeChild)) {
		    return node.activeChild;
		  }
		  var indices = [];
		  for (var i = 0; i < node.children.length; i++) {
		    if (isNodeFocusable(node.children[i]) || node.children[i].children) {
		      indices.push(i);
		    }
		  }
		  if (indices.length <= 0) {
		    return undefined;
		  }
		  return node.children[closestIndex(indices, index)];
		};
		/**
		 * Inserts given child to the parent's children, keeping indices coherent and compact.
		 *
		 * @param parent - node to which new child is about to be added
		 * @param newChild - node to be added to the parent
		 */
		var insertChildNode = function insertChildNode(parent, newChild) {
		  if (!parent || !newChild) {
		    return;
		  }
		  if (!parent.children) {
		    parent.children = [];
		  }
		  newChild.parent = parent;
		  if (typeof newChild.index !== 'number' || newChild.index > parent.children.length) {
		    newChild.index = parent.children.length;
		    parent.children.push(newChild);
		  } else {
		    // Inserting new child, from now on all further children needs to have index value increased by one
		    parent.children.splice(newChild.index, 0, newChild);
		    for (var i = newChild.index + 1; i < parent.children.length; i++) {
		      parent.children[i].index = i;
		    }
		  }
		};
		/**
		 * Removes given child from the parent's children, keeping indices coherent and compact.
		 *
		 * @param parent - node from which children given child is about to be removed
		 * @param child - node to be removed from parent's children
		 */
		var removeChildNode = function removeChildNode(parent, child) {
		  if (!child || !parent || !parent.children) {
		    return;
		  }
		  var removedChildIndex = -1;
		  for (var i = 0; i < parent.children.length; i++) {
		    if (parent.children[i] === child) {
		      removedChildIndex = i;
		    } else if (removedChildIndex !== -1) {
		      parent.children[i].index = i - 1;
		    }
		  }
		  if (removedChildIndex !== -1) {
		    if (parent.children.length === 1) {
		      parent.children = undefined;
		    } else {
		      parent.children.splice(removedChildIndex, 1);
		    }
		  }
		};
		/**
		 * Returns valid orientation parameter.
		 *
		 * TypeScript defines type appropriately, but in JavaScript anything can be passed. Method doesn't imply that user
		 * might be malicious, it just tries to unify provided string values, by making them a valid Orientation type.
		 *
		 * @param orientation - orientation to correct
		 */
		var toValidOrientation = function toValidOrientation(orientation) {
		  if (!orientation) {
		    return undefined;
		  }
		  for (var _i = 0, _a = Object.keys(Orientations); _i < _a.length; _i++) {
		    var orientationKey = _a[_i];
		    if (Orientations[orientationKey] === orientation.toLowerCase()) {
		      return Orientations[orientationKey];
		    }
		  }
		  return undefined;
		};
		/**
		 * Returns valid direction parameter.
		 *
		 * TypeScript defines type appropriately, but in JavaScript anything can be passed. Method doesn't imply that user
		 * might be malicious, it just tries to unify provided string values, by making them a valid Orientation type.
		 *
		 * @param direction - direction to correct
		 */
		var toValidDirection = function toValidDirection(direction) {
		  if (!direction) {
		    return undefined;
		  }
		  for (var _i = 0, _a = Object.keys(Directions); _i < _a.length; _i++) {
		    var directionKey = _a[_i];
		    if (Directions[directionKey] === direction.toLowerCase()) {
		      return Directions[directionKey];
		    }
		  }
		  return undefined;
		};
		/**
		 * Creates node object from given node parameters.
		 *
		 * Node creation method is optimized for JavaScript engine.
		 * Objects created in "the same way" allows JavaScript engine reusing existing HiddenClass transition chain.
		 * Moreover most used properties are defined "at the beginning" making access to them a bit faster.
		 *
		 * @param {string} nodeId - id of the node
		 * @param {object} [nodeConfig] - node parameters
		 */
		var prepareNode = function prepareNode(nodeId, nodeConfig) {
		  if (nodeConfig === void 0) {
		    nodeConfig = {};
		  }
		  if (!nodeId) {
		    throw Error('Node ID has to be defined');
		  }
		  return {
		    id: nodeId,
		    parent: undefined,
		    children: undefined,
		    activeChild: undefined,
		    overrides: undefined,
		    overrideSources: undefined,
		    index: typeof nodeConfig.index === 'number' ? nodeConfig.index : undefined,
		    orientation: nodeConfig.orientation,
		    indexRange: nodeConfig.indexRange,
		    selectAction: nodeConfig.selectAction,
		    isFocusable: nodeConfig.isFocusable,
		    isWrapping: nodeConfig.isWrapping,
		    isStopPropagate: nodeConfig.isStopPropagate,
		    isIndexAlign: nodeConfig.isIndexAlign,
		    onLeave: nodeConfig.onLeave,
		    onEnter: nodeConfig.onEnter,
		    shouldCancelLeave: nodeConfig.shouldCancelLeave,
		    onLeaveCancelled: nodeConfig.onLeaveCancelled,
		    shouldCancelEnter: nodeConfig.shouldCancelEnter,
		    onEnterCancelled: nodeConfig.onEnterCancelled,
		    onSelect: nodeConfig.onSelect,
		    onInactive: nodeConfig.onInactive,
		    onActive: nodeConfig.onActive,
		    onActiveChildChange: nodeConfig.onActiveChildChange,
		    onBlur: nodeConfig.onBlur,
		    onFocus: nodeConfig.onFocus,
		    onMove: nodeConfig.onMove
		  };
		};
		/**
		 * Traverses through node subtree (including the node) with iterative preorder deep first search tree traversal algorithm.
		 *
		 * DFS is implemented without recursion to avoid putting methods to the stack. This allows traversing deep trees without
		 * the need of allocating memory for recursive method calls.
		 *
		 * For some processes, when node meeting some condition is searched, there's no need to traverse through whole tree.
		 * To address that, given nodeProcessor may return boolean value. when true is returned, than traversal algorithm
		 * is interrupted immediately.
		 *
		 * E.g. Given tree:
		 *        root
		 *        / \
		 *       A   B
		 *      /     \
		 *     AA      BA
		 *    /  \
		 *  AAA  AAB
		 *
		 *  Traversal path: root -> A -> AA -> AAA -> AAB -> B -> BA
		 *
		 * @param {object} startNode - node that is the root of traversed subtree
		 * @param {function} nodeProcessor - callback executed for traversed node, if true is returned then subtree traversal is interrupted
		 */
		var traverseNodeSubtree = function traverseNodeSubtree(startNode, nodeProcessor) {
		  var stack = [startNode];
		  var dummyThis = Object.create(null);
		  var traversedNode;
		  while (stack.length > 0) {
		    traversedNode = stack.pop();
		    if (nodeProcessor.call(dummyThis, traversedNode)) {
		      return;
		    }
		    if (traversedNode.children) {
		      for (var i = traversedNode.children.length - 1; i >= 0; i--) {
		        stack.push(traversedNode.children[i]);
		      }
		    }
		  }
		};

		//      
		// An event handler can take an optional event argument
		// and should not return a value

		// An array of all currently registered event handlers for a type

		// A map of event types and their corresponding event handlers.

		/** Mitt: Tiny (~200b) functional event emitter / pubsub.
		 *  @name mitt
		 *  @returns {Mitt}
		 */
		function mitt(all) {
		  all = all || Object.create(null);
		  return {
		    /**
		     * Register an event handler for the given type.
		     *
		     * @param  {String} type	Type of event to listen for, or `"*"` for all events
		     * @param  {Function} handler Function to call in response to given event
		     * @memberOf mitt
		     */
		    on: function on(type, handler) {
		      (all[type] || (all[type] = [])).push(handler);
		    },
		    /**
		     * Remove an event handler for the given type.
		     *
		     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		     * @param  {Function} handler Handler function to remove
		     * @memberOf mitt
		     */
		    off: function off(type, handler) {
		      if (all[type]) {
		        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
		      }
		    },
		    /**
		     * Invoke all handlers for the given type.
		     * If present, `"*"` handlers are invoked after type-matched handlers.
		     *
		     * @param {String} type  The event type to invoke
		     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		     * @memberOf mitt
		     */
		    emit: function emit(type, evt) {
		      (all[type] || []).slice().map(function (handler) {
		        handler(evt);
		      });
		      (all['*'] || []).slice().map(function (handler) {
		        handler(type, evt);
		      });
		    }
		  };
		}
		var Lrud = /** @class */function () {
		  function Lrud() {
		    this.nodes = {};
		    this.rootNode = undefined;
		    this.currentFocusNode = undefined;
		    this.isIndexAlignMode = false;
		    this.emitter = mitt();
		  }
		  /**
		   * Registers a callback for an LRUD event.
		   *
		   * @param {string} eventName - event to subscribe to
		   * @param {function} callback - function to call on event
		   */
		  Lrud.prototype.on = function (eventName, callback) {
		    this.emitter.on(eventName, callback);
		  };
		  /**
		   * Unregisters a callback for an LRUD event.
		   *
		   * @param {string} eventName - event to unsubscribe from
		   * @param {function} callback - function that was added using .on()
		   */
		  Lrud.prototype.off = function (eventName, callback) {
		    this.emitter.off(eventName, callback);
		  };
		  /**
		   * Returns the root node.
		   */
		  Lrud.prototype.getRootNode = function () {
		    if (!this.rootNode) {
		      throw new Error('no root node');
		    }
		    return this.rootNode;
		  };
		  /**
		   * Returns the current focused node.
		   */
		  Lrud.prototype.getCurrentFocusNode = function () {
		    return this.currentFocusNode;
		  };
		  /**
		   * Registers a new node into the LRUD tree.
		   *
		   * @param {string} nodeId - id of the node to register
		   * @param {object} [nodeConfig] - registered node parameters
		   * @param {string} [nodeConfig.parent] - parent node id, if null, default root node is used
		   * @param {number} [nodeConfig.index] - if null, index is 1 more than the index of the last sibling. if no previous siblings, index is 1
		   * @param {number[]} [nodeConfig.indexRange] - defaults to null. acts as a colspan, value [0] is lower bound, value [1] is upper bound
		   * @param {object} [nodeConfig.selectAction] - if a node has a selectAction, it is focusable
		   * @param {boolean} [nodeConfig.isFocusable] - if a node is explicitly set as isFocusable, it is focusable
		   * @param {boolean} [nodeConfig.isWrapping] - if true, when asking for the next child at the end or start of the node, the will "wrap around" and return the first/last (when asking for the last/first)
		   * @param {string} [nodeConfig.orientation] - can be "vertical" or "horizontal". is used in conjunction when handling direction of key press, to determine which child is "next"
		   * @param {boolean} [nodeConfig.isIndexAlign]  -if a node is index aligned, its descendents should jump to nodes based on index instead of activeChild
		   * @param {function} [nodeConfig.onLeave] - if a node has an `onLeave` function, it will be run when a move event leaves this node
		   * @param {function} [nodeConfig.onEnter] - if a node has an `onEnter` function, it will be run when a move event enters this node
		   */
		  Lrud.prototype.registerNode = function (nodeId, nodeConfig) {
		    var _a;
		    if (nodeConfig === void 0) {
		      nodeConfig = {};
		    }
		    if (this.getNode(nodeId)) {
		      throw Error("Node with an ID of " + nodeId + " has already been registered");
		    }
		    // It is not allowed to register node directly with children, for such purposes registerTree should be used
		    var node = prepareNode(nodeId, nodeConfig);
		    // if this is the very first node, set it as root and return...
		    if (!this.rootNode) {
		      this.rootNode = node;
		      this.nodes = (_a = {}, _a[nodeId] = node, _a);
		      return this;
		    }
		    // if this node config has no parent, assume its parent is root
		    var parentNode = nodeConfig.parent ? this.getNode(nodeConfig.parent) : this.rootNode;
		    // to keep tree coherent, nodes that are about to be added to not existing parent are ignored
		    if (!parentNode) {
		      return this;
		    }
		    // add the node into the tree
		    this.nodes[nodeId] = node;
		    insertChildNode(parentNode, node);
		    return this;
		  };
		  /**
		   * Allows to change node's parent by moving it's whole sub-tree.
		   *
		   * @param {string|object} node - node or id of the node that is about to change parent
		   * @param {string|object} newParentNode - node or id of the node that became a new parent for nodeId
		   * @param {object} [options]
		   * @param {number} [options.index] - index at which nodeId should be inserted as a child of newParentNodeId
		   * @param {boolean} [options.maintainIndex] - applies only if index is not defined; if true, node will be inserted at
		   *                                           it's current position if possible; otherwise node will be appended; default: false
		   */
		  Lrud.prototype.moveNode = function (node, newParentNode, options) {
		    if (options === void 0) {
		      options = {
		        maintainIndex: false
		      };
		    }
		    node = typeof node === 'string' ? this.getNode(node) : node;
		    newParentNode = typeof newParentNode === 'string' ? this.getNode(newParentNode) : newParentNode;
		    if (!node || !newParentNode) {
		      return;
		    }
		    // It's not possible to move root node
		    if (node === this.rootNode) {
		      return;
		    }
		    // There's no need to change the parent
		    if (node.parent === newParentNode) {
		      return;
		    }
		    var oldParentNode = node.parent;
		    // Removing node from old parent
		    removeChildNode(oldParentNode, node);
		    // Changing parent of a node
		    if (typeof options.index === 'number') {
		      node.index = options.index;
		    } else if (!options.maintainIndex) {
		      node.index = undefined;
		    }
		    insertChildNode(newParentNode, node);
		    // If moved node was an active child of the old parent, it needs to be cleaned out as well
		    this.unsetActiveChild(oldParentNode, node);
		    // If moved node which is (or it's subtree contains) currently focused node, then parent's active child needs to be adjusted
		    if (this.isSameOrParentForChild(node, this.currentFocusNode)) {
		      this.setActiveChildRecursive(newParentNode, node);
		    }
		  };
		  /**
		   * Registers a new node into the LRUD tree.
		   *
		   * Kept for backwards compatibility reasons.
		   *
		   * @param {string} nodeId - id of the node to register
		   * @param {object} [nodeConfig] - registered node parameters
		   */
		  Lrud.prototype.register = function (nodeId, nodeConfig) {
		    return this.registerNode(nodeId, nodeConfig);
		  };
		  /**
		   * Unregisters a node from the navigation tree.
		   *
		   * Kept for backwards compatibility reasons.
		   *
		   * @param {string|object} node - node or id of the node to unregister
		   * @param {object} [unregisterOptions]
		   */
		  Lrud.prototype.unregister = function (node, unregisterOptions) {
		    this.unregisterNode(node, unregisterOptions);
		  };
		  /**
		   * Unregisters a node from the navigation tree.
		   *
		   * @param {string|object} node - node or id of the node to unregister
		   * @param {object} [unregisterOptions]
		   * @param {boolean} [unregisterOptions.forceRefocus] if true, LRUD will attempt to re-focus on a new node if the currently focused
		   *                                                   node becomes unregistered due to the given node ID being unregistered
		   */
		  Lrud.prototype.unregisterNode = function (node, unregisterOptions) {
		    var _this = this;
		    if (unregisterOptions === void 0) {
		      unregisterOptions = {
		        forceRefocus: true
		      };
		    }
		    node = typeof node === 'string' ? this.getNode(node) : node;
		    // if we're trying to unregister a node that doesn't exist, exit out
		    if (!node) {
		      return this;
		    }
		    if (node === this.rootNode) {
		      this.nodes = {};
		      this.rootNode = undefined;
		      this.currentFocusNode = undefined;
		      this.isIndexAlignMode = false;
		      this.emitter = mitt();
		      return this;
		    }
		    // get a copy of the node to pass to the blur event, and grab the parent to work with it
		    var parentNode = node.parent;
		    // ...if we're unregistering the activeChild of our parent (could be a leaf OR branch)
		    // we might need to recalculate the focus...
		    if (parentNode.activeChild && parentNode.activeChild === node) {
		      this.isIndexAlignMode = false;
		      this.unsetActiveChild(parentNode, node);
		    }
		    // delete the node itself (delete from the parent and re-set the parent later)
		    removeChildNode(parentNode, node);
		    // releasing memory references for node and all it's children all node's children
		    var currentFocusIsLost = false;
		    traverseNodeSubtree(node, function (traversedNode) {
		      delete _this.nodes[traversedNode.id];
		      // Unregistering overrides
		      _this.unregisterOverride(traversedNode);
		      // Unregistering overrides which pointed to unregistered node
		      for (var i = 0, overrideSources = traversedNode.overrideSources || []; i < overrideSources.length; i++) {
		        _this.unregisterOverride(overrideSources[i].node, overrideSources[i].direction);
		      }
		      // Unregistering currently focused node
		      if (traversedNode === _this.currentFocusNode) {
		        _this.currentFocusNode = undefined;
		        currentFocusIsLost = true;
		      }
		    });
		    // blur on the nodeClone
		    this.emitter.emit('blur', node);
		    if (node.onBlur) {
		      node.onBlur(node);
		    }
		    // check if the current focus node was removed, if so focus needs to be recalculated
		    if (currentFocusIsLost && unregisterOptions.forceRefocus) {
		      this.recalculateFocus(parentNode);
		    }
		    return this;
		  };
		  /**
		   * Registers a new override onto the LRUD instance.
		   *
		   * @param {string|object} source - node or id of the node for which override should be triggered
		   * @param {string|object} target - node or id of the node to which this overrides points
		   * @param {string} direction - traversal direction, for which this override should be triggered
		   * @param {object} [options]
		   * @param {boolean} [options.forceOverride] if true, existing override from source node in direction will be overwritten.
		   */
		  Lrud.prototype.registerOverride = function (source, target, direction, options) {
		    if (options === void 0) {
		      options = {};
		    }
		    source = typeof source === 'string' ? this.getNode(source) : source;
		    if (!source) {
		      throw new Error('registering override: missing source node');
		    }
		    target = typeof target === 'string' ? this.getNode(target) : target;
		    if (!target) {
		      throw new Error('registering override: missing target node');
		    }
		    direction = toValidDirection(direction);
		    if (!direction) {
		      throw new Error('registering override: missing direction');
		    }
		    if (source.overrides && source.overrides[direction]) {
		      if (options.forceOverride) {
		        this.unregisterOverride(source, direction);
		      } else {
		        throw new Error("registering override: override from " + source.id + " to " + target.id + " in direction " + direction + " already exist");
		      }
		    }
		    source.overrides = source.overrides || {};
		    source.overrides[direction] = target;
		    target.overrideSources = target.overrideSources || [];
		    target.overrideSources.push({
		      direction: direction,
		      node: source
		    });
		    return this;
		  };
		  /**
		   * Unregisters an override from the LRUD instance.
		   *
		   * @param {string|object} source - node or id of the node for which override should be unregistered
		   * @param {string} [direction] - traversal direction, in which override should be unregistered
		   */
		  Lrud.prototype.unregisterOverride = function (source, direction) {
		    source = typeof source === 'string' ? this.getNode(source) : source;
		    if (!source || !source.overrides) {
		      return;
		    }
		    // if no direction provided, than removing all overrides
		    // if unknown direction provided, then aborting
		    if (direction) {
		      direction = toValidDirection(direction);
		      if (!direction) {
		        return;
		      }
		    }
		    var overridesToAreEmpty = true;
		    for (var _i = 0, _a = Object.keys(Directions); _i < _a.length; _i++) {
		      var directionKey = _a[_i];
		      var directionToRemove = Directions[directionKey];
		      if (direction && direction !== directionToRemove) {
		        overridesToAreEmpty = overridesToAreEmpty && !(source.overrides && source.overrides[directionToRemove]);
		        continue;
		      }
		      // removing reference to source node in target overridden in direction
		      var target = source.overrides[directionToRemove];
		      if (target && target.overrideSources) {
		        for (var i = 0; i < target.overrideSources.length; i++) {
		          if (target.overrideSources[i].direction === directionToRemove && target.overrideSources[i].node === source) {
		            if (target.overrideSources.length === 1) {
		              target.overrideSources = undefined;
		            } else {
		              // The fastest way of removing element from array without maintaining the order:
		              // put last element into removed one slot and make array shorter
		              target.overrideSources[i] = target.overrideSources[target.overrideSources.length - 1];
		              target.overrideSources.length = target.overrideSources.length - 1;
		            }
		            break;
		          }
		        }
		      }
		      // removing override
		      source.overrides[directionToRemove] = undefined;
		    }
		    // cleaning if no overrides defined
		    if (overridesToAreEmpty) {
		      source.overrides = undefined;
		    }
		    return this;
		  };
		  /**
		   * Returns a node for an ID.
		   *
		   * @param {string} nodeId - id of the node to be returned
		   */
		  Lrud.prototype.getNode = function (nodeId) {
		    if (!nodeId) {
		      return undefined;
		    }
		    return this.nodes[nodeId];
		  };
		  /**
		   * Gets a node by ID and then unregisters it from the instance.
		   *
		   * @param {string} nodeId - id of the node to be picked
		   */
		  Lrud.prototype.pickNode = function (nodeId) {
		    var node = this.getNode(nodeId);
		    if (!node) {
		      return undefined;
		    }
		    this.unregisterNode(node);
		    return node;
		  };
		  /**
		   * Starting from a node, climb up the navigation tree until we find a node that can be
		   * actioned, based on the given direction. An actionable node is one whose orientation is valid
		   * for the given direction, has focusable children and whose activeChild isn't a leaf that is
		   * also its current activeChild.
		   *
		   * @param {object} node - node from which climbing up starts
		   * @param {string} direction - direction in which to traverse while climbing up
		   */
		  Lrud.prototype.climbUp = function (node, direction) {
		    while (node) {
		      // if we have a matching override at this point in the climb, return that target node
		      if (node.overrides && node.overrides[direction]) {
		        return node.overrides[direction];
		      }
		      // if we're on a currently focused node, climb up, definitely we are looking for some other node
		      if (node === this.currentFocusNode) {
		        // climb up
		        node = node.parent;
		        continue;
		      }
		      // we have children, but the orientation doesn't match, so try our parent
		      if (!isDirectionAndOrientationMatching(node.orientation, direction)) {
		        // climb up
		        node = node.parent;
		        continue;
		      }
		      // if we couldn't find any focusable candidate within children or we get currently
		      // activeChild, we have to look for other focusable candidate, climb up
		      if (!this.getNextFocusableChildInDirection(node, direction)) {
		        // climb up
		        node = node.parent;
		        continue;
		      }
		      return node;
		    }
		    return undefined;
		  };
		  /**
		   * Starting from the given node, dig down the navigation tree until we find a focusable
		   * leaf, and return it. dig "direction" priority:
		   * - index align mode
		   * - active child
		   * - first focusable child
		   *
		   * @param {object} node - node, from which digging down starts
		   * @param {string} [direction] - direction in which to traverse while digging down
		   */
		  Lrud.prototype.digDown = function (node, direction) {
		    if (direction === void 0) {
		      direction = Directions.UNSPECIFIED;
		    }
		    while (node) {
		      // If the node is focusable, then return it, but only when it doesn't contain focusable children.
		      // Otherwise, digging down to "the deepest" focusable node.
		      // Focusable "leaf" has a higher priority than focusable "container".
		      if (isNodeFocusable(node) && (node.isStopPropagate || !this.doesNodeHaveFocusableChildren(node))) {
		        return node;
		      }
		      /*
		      if we're in a nested grid
		        if we're going VERTICAL DOWN
		          take the first child, and then match the index
		        if we're going VERTICAL UP
		          take the last child, and then match the index
		             if we're in a nested grid
		        and we're going HORIZONTAL LEFT
		          take the matching index of the same depth, and then the last child
		        and we're going HORIZONTAL RIGHT
		          take the matching index of the same depth, and then the first child
		             if its not a nested grid, take the matching index
		      */
		      if (this.isIndexAlignMode) {
		        var currentFocusedNode = this.getCurrentFocusNode();
		        var currentFocusedIndexRange = currentFocusedNode.indexRange;
		        var currentFocusedIndex = currentFocusedIndexRange ? currentFocusedIndexRange[0] : currentFocusedNode.index;
		        if (node.isIndexAlign) {
		          // we're in a nested grid, so need to take into account orientation and direction of travel
		          if (node.parent.orientation === Orientations.VERTICAL) {
		            if (direction === Directions.UP) {
		              // dig down
		              node = findChildWithClosestIndex(this.getNodeLastChild(node), currentFocusedIndex, currentFocusedIndexRange);
		              continue;
		            }
		            if (direction === Directions.DOWN) {
		              // dig down
		              node = findChildWithClosestIndex(this.getNodeFirstChild(node), currentFocusedIndex, currentFocusedIndexRange);
		              continue;
		            }
		          }
		          if (node.parent.orientation === Orientations.HORIZONTAL) {
		            if (direction === Directions.LEFT) {
		              // dig down
		              node = this.getNodeLastChild(findChildWithClosestIndex(node, currentFocusedNode.parent.index));
		              continue;
		            }
		            if (direction === Directions.RIGHT) {
		              // dig down
		              node = this.getNodeFirstChild(findChildWithClosestIndex(node, currentFocusedNode.parent.index));
		              continue;
		            }
		          }
		        }
		        // we're not in a nested grid, so just look for matching index ranges or index
		        var matchingViaIndexRange = findChildWithMatchingIndexRange(node, currentFocusedIndex);
		        if (matchingViaIndexRange) {
		          // dig down
		          node = matchingViaIndexRange;
		          continue;
		        } else {
		          // dig down
		          node = findChildWithClosestIndex(node, currentFocusedIndex, currentFocusedIndexRange);
		          continue;
		        }
		      }
		      // if possible, picking a branch that had focus in the past, one of its children was focused
		      if (node.activeChild) {
		        // dig down
		        node = node.activeChild;
		        continue;
		      }
		      // otherwise simply digging deeper, picking branch with first focusable candidate
		      node = this.getNextFocusableChildInDirection(node, Directions.UNSPECIFIED);
		    }
		    return undefined;
		  };
		  /**
		   * Gets the semantic next focusable child for a given direction.
		   *
		   * If the direction is 'left' or 'up', return the semantic previous focusable child of the node.
		   * If the direction is 'right' or 'down'', return the semantic next focusable child of the node.
		   * If the direction is *, return the semantic next (or previous, if next not found) focusable child of the node.
		   *
		   * @param {object} node - node, for which next focusable child for a given direction is returned
		   * @param {string} direction - direction in which to traverse while searching for next focusable child
		   */
		  Lrud.prototype.getNextFocusableChildInDirection = function (node, direction) {
		    if (!node) {
		      return undefined;
		    }
		    var validOrientation = toValidOrientation(node.orientation);
		    var validDirection = toValidDirection(direction);
		    var nextChildInDirection;
		    var traverseForward = validDirection === Directions.UNSPECIFIED || validOrientation === Orientations.HORIZONTAL && validDirection === Directions.RIGHT || validOrientation === Orientations.VERTICAL && validDirection === Directions.DOWN;
		    if (traverseForward) {
		      nextChildInDirection = this.getNextFocusableChild(node);
		    }
		    var traverseBackward = validDirection === Directions.UNSPECIFIED || validOrientation === Orientations.HORIZONTAL && validDirection === Directions.LEFT || validOrientation === Orientations.VERTICAL && validDirection === Directions.UP;
		    if (!nextChildInDirection && traverseBackward) {
		      nextChildInDirection = this.getPrevFocusableChild(node);
		    }
		    return nextChildInDirection;
		  };
		  /**
		   * Gets the semantic "next" child for a node that might be focused or bypass focus to its children.
		   *
		   * @param {object} node - node, for which next focusable child is returned
		   */
		  Lrud.prototype.getNextFocusableChild = function (node) {
		    if (!node || !node.children) {
		      return undefined;
		    }
		    // there's no child that is (or was) focused, so we can quickly pick first focusable child
		    if (!node.activeChild) {
		      return this.getNodeFirstFocusableChild(node);
		    }
		    // starting right after child that is (or was) focused
		    for (var i = node.activeChild.index + 1; i < node.children.length; i++) {
		      if (this.isNodeFocusableCandidate(node.children[i])) {
		        return node.children[i];
		      }
		    }
		    // we haven't found a node so far, so looking from the beginning of list up to current active node if possible
		    if (node.isWrapping) {
		      for (var i = 0; i < node.activeChild.index; i++) {
		        if (this.isNodeFocusableCandidate(node.children[i])) {
		          return node.children[i];
		        }
		      }
		    }
		    return undefined;
		  };
		  /**
		   * Gets the semantic "previous" child for a node that might be focused or bypass focus to its children.
		   *
		   * @param {object} node - node, for which previous focusable child is returned
		   */
		  Lrud.prototype.getPrevFocusableChild = function (node) {
		    if (!node || !node.children) {
		      return undefined;
		    }
		    // there's no child that is (or was) focused, so we can quickly pick last focusable child
		    if (!node.activeChild) {
		      return this.getNodeLastFocusableChild(node);
		    }
		    // starting right before child that is (or was) focused
		    for (var i = node.activeChild.index - 1; i >= 0; i--) {
		      if (this.isNodeFocusableCandidate(node.children[i])) {
		        return node.children[i];
		      }
		    }
		    // we haven't found a node so far, so looking from the end of list up to current active node if possible
		    if (node.isWrapping) {
		      for (var i = node.children.length - 1; i > node.activeChild.index; i--) {
		        if (this.isNodeFocusableCandidate(node.children[i])) {
		          return node.children[i];
		        }
		      }
		    }
		    return undefined;
		  };
		  /**
		   * Gets the first child of a node, based on index.
		   *
		   * @param {object} node - node, for which first child is returned
		   */
		  Lrud.prototype.getNodeFirstChild = function (node) {
		    if (!node || !node.children) {
		      return undefined;
		    }
		    return node.children[0];
		  };
		  /**
		   * Gets the last child of a node, based on index.
		   *
		   * @param {object} node - node, for which last child is returned
		   */
		  Lrud.prototype.getNodeLastChild = function (node) {
		    if (!node || !node.children) {
		      return undefined;
		    }
		    return node.children[node.children.length - 1];
		  };
		  /**
		   * Gets the first focusable (or containing focusable nodes) child of a node, based on index.
		   *
		   * @param {object} node - node, for which first focusable child is returned
		   */
		  Lrud.prototype.getNodeFirstFocusableChild = function (node) {
		    if (!node || !node.children) {
		      return undefined;
		    }
		    for (var i = 0; i < node.children.length; i++) {
		      if (this.isNodeFocusableCandidate(node.children[i])) {
		        return node.children[i];
		      }
		    }
		    return undefined;
		  };
		  /**
		   * Gets the last focusable (or containing focusable nodes) child of a node, based on index.
		   *
		   * @param {object} node - node, for which last focusable child is returned
		   */
		  Lrud.prototype.getNodeLastFocusableChild = function (node) {
		    if (!node || !node.children) {
		      return undefined;
		    }
		    for (var i = node.children.length - 1; i >= 0; i--) {
		      if (this.isNodeFocusableCandidate(node.children[i])) {
		        return node.children[i];
		      }
		    }
		    return undefined;
		  };
		  /**
		   * Given an event, handle any state changes that may arise from the direction pressed.
		   *
		   * State changes based on climbing up and digging down from the current focusedNode
		   *
		   * @param {object} event
		   * @param {number} [event.keyCode]
		   * @param {string} [event.direction]
		   * @param {object} [options]
		   * @param {boolean} [options.forceFocus] - if true and there's no currently focused node, LRUD will try to focus
		   *                                         first focusable node; default: false
		   */
		  Lrud.prototype.handleKeyEvent = function (event, options) {
		    if (options === void 0) {
		      options = {
		        forceFocus: false
		      };
		    }
		    if (!event) {
		      return undefined;
		    }
		    var direction = event.keyCode ? getDirectionForKeyCode(event.keyCode) : toValidDirection(event.direction);
		    if (!direction) {
		      return undefined;
		    }
		    var currentFocusNode = this.getCurrentFocusNode();
		    // if all we're doing is processing an enter, just run the `onSelect` function of the current node...
		    if (direction === Directions.ENTER) {
		      if (currentFocusNode) {
		        this.emitter.emit('select', currentFocusNode);
		        if (currentFocusNode.onSelect) {
		          currentFocusNode.onSelect(currentFocusNode);
		        }
		      }
		      return currentFocusNode;
		    }
		    var topNode;
		    var focusableNode;
		    if (!currentFocusNode && options.forceFocus) {
		      // No node is focused, focusing first focusable node
		      topNode = this.getRootNode();
		      focusableNode = this.getNextFocusableChildInDirection(topNode, Directions.UNSPECIFIED);
		    } else {
		      // climb up from where we are...
		      topNode = this.climbUp(currentFocusNode, direction);
		      // ... if we cant find a top node, its an invalid move - just return
		      if (!topNode) {
		        return undefined;
		      }
		      // ...if we need to align indexes, turn the flag on now...
		      this.isIndexAlignMode = topNode.isIndexAlign === true;
		      // ...get the top's next child in the direction we're going...
		      var nextChild = this.getNextFocusableChildInDirection(topNode, direction);
		      // ...and depending on if we're able to find a child, dig down from the child or from the original top...
		      focusableNode = this.digDown(nextChild || topNode, direction);
		    }
		    if (!focusableNode) {
		      return undefined;
		    }
		    // ...give an opportunity for the move to be cancelled by the leaving node
		    if (currentFocusNode && currentFocusNode.shouldCancelLeave) {
		      if (currentFocusNode.shouldCancelLeave(currentFocusNode, focusableNode)) {
		        if (currentFocusNode.onLeaveCancelled) {
		          currentFocusNode.onLeaveCancelled(currentFocusNode, focusableNode);
		        }
		        this.emitter.emit('cancelled', {
		          leave: currentFocusNode,
		          enter: focusableNode
		        });
		        return currentFocusNode;
		      }
		    }
		    // ...give an opportunity for the move to be cancelled by the entering node
		    if (focusableNode.shouldCancelEnter) {
		      if (focusableNode.shouldCancelEnter(currentFocusNode, focusableNode)) {
		        if (focusableNode.onEnterCancelled) {
		          focusableNode.onEnterCancelled(currentFocusNode, focusableNode);
		        }
		        this.emitter.emit('cancelled', {
		          leave: currentFocusNode,
		          enter: focusableNode
		        });
		        return currentFocusNode;
		      }
		    }
		    // ...and then assign focus
		    this.assignFocus(focusableNode);
		    var offset = direction === Directions.LEFT || direction === Directions.UP ? -1 : 1;
		    // emit events and fire functions now that the move has completed
		    this.emitter.emit('move', {
		      leave: currentFocusNode,
		      enter: focusableNode,
		      direction: direction,
		      offset: offset
		    });
		    if (topNode.onMove) {
		      topNode.onMove({
		        node: topNode,
		        leave: currentFocusNode,
		        enter: focusableNode,
		        direction: direction,
		        offset: offset
		      });
		    }
		    if (currentFocusNode && currentFocusNode.onLeave) {
		      currentFocusNode.onLeave(currentFocusNode);
		    }
		    if (focusableNode.onEnter) {
		      focusableNode.onEnter(focusableNode);
		    }
		    return focusableNode;
		  };
		  /**
		   * Sets the activeChild of the parent node to the value of the child node.
		   *
		   * @param {string|object} parent - node or id of the node, which activeChild is about to be set
		   * @param {string|object} child - node or id of the node, that is about to be set as parent's activeChild
		   */
		  Lrud.prototype.setActiveChild = function (parent, child) {
		    parent = typeof parent === 'string' ? this.getNode(parent) : parent;
		    child = typeof child === 'string' ? this.getNode(child) : child;
		    if (!parent || !child) {
		      return;
		    }
		    if (child.parent.id !== parent.id) {
		      return;
		    }
		    // the parent already has an active child, and its NOT the same child that we're now setting
		    if (parent.activeChild && parent.activeChild.id !== child.id) {
		      var currentActiveChild = parent.activeChild;
		      parent.activeChild = child;
		      this.emitter.emit('inactive', currentActiveChild);
		      if (currentActiveChild.onInactive) {
		        currentActiveChild.onInactive(currentActiveChild);
		      }
		      this.emitter.emit('active', child);
		      if (child.onActive) {
		        child.onActive(child);
		      }
		      if (parent.onActiveChildChange) {
		        parent.onActiveChildChange({
		          node: parent,
		          leave: currentActiveChild,
		          enter: child
		        });
		      }
		    } else if (!parent.activeChild) {
		      parent.activeChild = child;
		      this.emitter.emit('active', child);
		      if (child.onActive) {
		        child.onActive(child);
		      }
		      if (parent.onActiveChildChange) {
		        parent.onActiveChildChange({
		          node: parent,
		          leave: null,
		          enter: child
		        });
		      }
		    }
		  };
		  /**
		   * Sets the activeChild of the parent node to the value of the child node.
		   *
		   * If the parent node has a parent itself, it digs up the tree and sets those activeChild values.
		   *
		   * @param {string|object} parent - node or id of the node, which activeChild is about to be set
		   * @param {string|object} child - node or id of the node, that is about to be set as parent's activeChild
		   */
		  Lrud.prototype.setActiveChildRecursive = function (parent, child) {
		    parent = typeof parent === 'string' ? this.getNode(parent) : parent;
		    child = typeof child === 'string' ? this.getNode(child) : child;
		    while (parent) {
		      this.setActiveChild(parent, child);
		      // if the parent has a parent, bubble up
		      child = parent;
		      parent = parent.parent;
		    }
		  };
		  /**
		   * Unsets the activeChild of the parent nodes branch ensuring that activeChild is on the unsetting child node path
		   * and not on the currentFocusNode's path, unless child node is a currentFocusNode.
		   *
		   * @param {string|object} parent - node or id of the node, which activeChild is about to be unset
		   * @param {string|object} activeChild - node or id of the node, that is about to be unset as parent's activeChild
		   */
		  Lrud.prototype.unsetActiveChild = function (parent, activeChild) {
		    parent = typeof parent === 'string' ? this.getNode(parent) : parent;
		    activeChild = typeof activeChild === 'string' ? this.getNode(activeChild) : activeChild;
		    if (!parent || !parent.activeChild) {
		      return;
		    }
		    if (!activeChild || parent.activeChild !== activeChild) {
		      return;
		    }
		    var isActiveChildAtCurrentFocusNodeBranch = this.isSameOrParentForChild(activeChild, this.currentFocusNode);
		    while (parent && parent.activeChild) {
		      var isParentAtActiveChildBranch = parent.activeChild === activeChild;
		      var isParentAtCurrentFocusedNodeBranch = this.isSameOrParentForChild(parent.activeChild, this.currentFocusNode);
		      if (isActiveChildAtCurrentFocusNodeBranch || isParentAtActiveChildBranch && !isParentAtCurrentFocusedNodeBranch) {
		        parent.activeChild = undefined;
		      }
		      activeChild = parent;
		      parent = parent.parent;
		    }
		  };
		  /**
		   * Sets the current focus of the instance to the given node or node ID.
		   *
		   * If the given node points to a non-focusable node, we dig down from
		   * the given node to find a node that can be focused on.
		   *
		   * Calls `onFocus` on the given node, if it exists, and emits a `focus` event,
		   * also calls `onBlur` on the node that WAS focused before this function was called.
		   *
		   * @param {string|object} node - node or id of the node to be focused
		   */
		  Lrud.prototype.assignFocus = function (node) {
		    node = typeof node === 'string' ? this.getNode(node) : node;
		    // Focus might be assigned to node that is not focusable itself, but
		    // contains focusable children, looking for such child
		    if (node && !isNodeFocusable(node)) {
		      node = this.digDown(node, Directions.UNSPECIFIED);
		    }
		    if (!node) {
		      throw new Error('trying to assign focus to a non focusable node');
		    }
		    if (this.currentFocusNode) {
		      this.emitter.emit('blur', this.currentFocusNode);
		      if (this.currentFocusNode.onBlur) {
		        this.currentFocusNode.onBlur(this.currentFocusNode);
		      }
		    }
		    this.currentFocusNode = node;
		    if (node.parent) {
		      this.setActiveChildRecursive(node.parent, node);
		    }
		    if (node.onFocus) {
		      node.onFocus(node);
		    }
		    this.emitter.emit('focus', node);
		  };
		  /**
		   * If the focus of the tree is out of sync, ie, the current focused node becomes unfocusable,
		   * this can be used to fall back to another focus.
		   *
		   * @param {object} node - node, based on which focus is recalculated
		   */
		  Lrud.prototype.recalculateFocus = function (node) {
		    var topNode = this.climbUp(node, Directions.UNSPECIFIED) || this.getRootNode();
		    var nextChild = this.getNextFocusableChildInDirection(topNode, Directions.UNSPECIFIED);
		    var focusableNode = this.digDown(nextChild || topNode, Directions.UNSPECIFIED);
		    if (focusableNode) {
		      this.assignFocus(focusableNode);
		    } else {
		      this.currentFocusNode = undefined;
		    }
		  };
		  /**
		   * Given a tree, register all of its nodes into this instance.
		   *
		   * @param {object} subTreeRootNodeConfig
		   */
		  Lrud.prototype.registerTree = function (subTreeRootNodeConfig) {
		    var _this = this;
		    if (!subTreeRootNodeConfig) {
		      return;
		    }
		    traverseNodeSubtree(subTreeRootNodeConfig, function (traversedNodeConfig) {
		      _this.registerNode(traversedNodeConfig.id, traversedNodeConfig);
		      if (traversedNodeConfig.children) {
		        for (var i = 0; i < traversedNodeConfig.children.length; i++) {
		          traversedNodeConfig.children[i].parent = traversedNodeConfig.id;
		        }
		      }
		    });
		  };
		  /**
		   * Given a tree object, attempt to register that tree into the current lrud instance.
		   *
		   * If the given tree already exists as a branch in the instance tree, the new tree will replace that branch.
		   *
		   * If the new tree doesn't already exist as a branch in the instance tree, this function will register the new
		   * tree as a branch against the root node, as per standard registerNode() behaviour.
		   *
		   * @param {object} subTreeRootNodeConfig
		   * @param {object} [options]
		   * @param {boolean} [options.maintainIndex] - if true, and new tree is replacing an existing branch of the tree,
		   *                                            maintain the original branches relative index; default: true
		   */
		  Lrud.prototype.insertTree = function (subTreeRootNodeConfig, options) {
		    if (options === void 0) {
		      options = {
		        maintainIndex: true
		      };
		    }
		    if (!subTreeRootNodeConfig) {
		      return;
		    }
		    var nodeToReplace = this.pickNode(subTreeRootNodeConfig.id);
		    if (!subTreeRootNodeConfig.parent && nodeToReplace && nodeToReplace.parent) {
		      subTreeRootNodeConfig.parent = nodeToReplace.parent.id;
		    }
		    if (options.maintainIndex && nodeToReplace && typeof nodeToReplace.index === 'number') {
		      subTreeRootNodeConfig.index = nodeToReplace.index;
		    }
		    this.registerTree(subTreeRootNodeConfig);
		  };
		  /**
		   * Checks is node contains children that might be focused (are a focusable candidates).
		   * It checks the whole node's children sub-tree, not only direct children.
		   *
		   * @param {object} node - node, which children are checked against being focusable candidates
		   */
		  Lrud.prototype.doesNodeHaveFocusableChildren = function (node) {
		    if (!node || !node.children) {
		      return false;
		    }
		    var nodeHaveFocusableChildren = false;
		    traverseNodeSubtree(node, function (traversedNode) {
		      // ignoring when subtree root, we are only interested in children focusability
		      if (traversedNode !== node) {
		        nodeHaveFocusableChildren = nodeHaveFocusableChildren || isNodeFocusable(traversedNode);
		      }
		      return nodeHaveFocusableChildren;
		    });
		    return nodeHaveFocusableChildren;
		  };
		  /**
		   * Checks if node is focusable or contains focusable children.
		   *
		   * @param {object} node - node to check against being focusable candidate
		   */
		  Lrud.prototype.isNodeFocusableCandidate = function (node) {
		    return isNodeFocusable(node) || this.doesNodeHaveFocusableChildren(node);
		  };
		  /**
		   * Checks if given parent node is a child's parent node or the node itself. If it's a parent it doesn't have
		   * to be a direct one, but has to be placed at a path to the root node.
		   *
		   * E.g.
		   *        root
		   *        / \
		   *       A   B
		   *      /     \
		   *     AA      BA
		   *    /  \
		   *  AAA  AAB
		   *
		   *  Expect:
		   *    isSameOrParentForChild('A', 'A') -> true
		   *    isSameOrParentForChild('A', 'AA') -> true
		   *    isSameOrParentForChild('AA', 'A') -> false
		   *    isSameOrParentForChild('A', 'AAA') -> true
		   *    isSameOrParentForChild('AAA', 'AA') -> false
		   *    isSameOrParentForChild('A', 'BA') -> false
		   *    isSameOrParentForChild('BA', 'A') -> false
		   *    isSameOrParentForChild('AA', 'BA') -> false
		   *    isSameOrParentForChild('BA', 'AA') -> false
		   *
		   * @param {string|object} parent - parent or id of the examined parent
		   * @param {string|object} child - node id of the node which parents are queried
		   */
		  Lrud.prototype.isSameOrParentForChild = function (parent, child) {
		    parent = typeof parent === 'string' ? this.getNode(parent) : parent;
		    child = typeof child === 'string' ? this.getNode(child) : child;
		    if (!parent || !child) {
		      return false;
		    }
		    if (parent === child) {
		      return true;
		    }
		    while (child) {
		      if (child.parent === parent) {
		        return true;
		      }
		      child = child.parent;
		    }
		    return false;
		  };
		  /**
		   * Changes the ability of a node to be focused in place.
		   *
		   * @param {string|object} node - node or id of the node, which focusability property is about to be changed
		   * @param {boolean} isFocusable - focusability value to set
		   */
		  Lrud.prototype.setNodeFocusable = function (node, isFocusable) {
		    node = typeof node === 'string' ? this.getNode(node) : node;
		    if (!node) {
		      return;
		    }
		    var nodeIsFocusable = isNodeFocusable(node);
		    if (nodeIsFocusable === isFocusable) {
		      return;
		    }
		    node.isFocusable = isFocusable;
		    if (!isFocusable) {
		      if (this.currentFocusNode === node) {
		        this.recalculateFocus(node);
		      }
		      if (node.parent) {
		        this.unsetActiveChild(node.parent, node);
		      }
		    }
		  };
		  return Lrud;
		}();
		var Orientation;
		(function (Orientation) {
		  Orientation["HORIZONTAL"] = "horizontal";
		  Orientation["VERTICAL"] = "vertical";
		})(Orientation || (Orientation = {}));
		var FocusManager = /*#__PURE__*/function () {
		  function FocusManager(element) {
		    var _this4 = this;
		    (0, _classCallCheck2["default"])(this, FocusManager);
		    this.element = element;
		    this.parents = ['[role=menu]', '[role=menubar]'];
		    this.interactive = [].concat((0, _toConsumableArray2["default"])(this.parents), ['button', 'a[href]', 'input', 'textarea', 'select', 'details', '[tabindex]:not([tabindex="-1"]']);
		    this.scope = document;
		    this.counter = 0;
		    this.onMutation = debounce(function () {
		      _this4.createGraph();
		    }, 250);
		    this.onKeyDown = function (event) {
		      _this4.navigation.handleKeyEvent(event);
		    };
		    this.onFocus = function (event) {
		      var node = _this4.find(function (node) {
		        return node.id === event.id;
		      });
		      if (node === null || node === void 0 ? void 0 : node.element) {
		        node.element.focus();
		      }
		    };
		    this.onFocusIn = debounce(function (event) {
		      var _a;
		      var node = _this4.find(function (node) {
		        return node.element === event.target;
		      });
		      if (node) {
		        (_a = _this4.navigation) === null || _a === void 0 ? void 0 : _a.assignFocus(node.id);
		      }
		    }, 250);
		    this.observer = new MutationObserver(this.onMutation);
		    this.observer.observe(this.element, {
		      childList: true,
		      subtree: true
		    });
		  }
		  (0, _createClass2["default"])(FocusManager, [{
		    key: "createGraph",
		    value: function createGraph() {
		      var _this5 = this;
		      var _a, _b;
		      this.counter = 0;
		      var interactiveSelector = this.interactive.join(', ');
		      var parentSelector = this.parents.join(', ');
		      var elementMap = new Map();
		      this.graph = this.elementToNode(this.element);
		      this.element.querySelectorAll(interactiveSelector).forEach(function (element) {
		        // ignore elements hidden by css
		        if (element.offsetParent === null) {
		          return;
		        }
		        // ignore disabled elements
		        if (element.disabled === true) {
		          return;
		        }
		        var base = element.matches(parentSelector) ? element.parentElement : element;
		        var parent = base.closest(parentSelector) || _this5.element;
		        if (!elementMap.has(parent)) {
		          elementMap.set(parent, []);
		        }
		        elementMap.get(parent).push(element);
		      });
		      elementMap.forEach(function (value, key) {
		        var parentNode = _this5.find(function (node) {
		          return node.element === key;
		        });
		        parentNode.children = value.map(function (element) {
		          return _this5.elementToNode(element, parentNode);
		        });
		      });
		      var focused = (_a = this.navigation) === null || _a === void 0 ? void 0 : _a.getCurrentFocusNode();
		      (_b = this.navigation) === null || _b === void 0 ? void 0 : _b.unregisterNode(this.rootId);
		      var navigation = new Lrud();
		      navigation.registerTree(this.graph);
		      this.rootId = this.graph.id;
		      // Keep arrow key and tab key focus management in sync
		      this.element.addEventListener('focusin', this.onFocusIn);
		      navigation.on('focus', this.onFocus);
		      // re-apply focus
		      var _document = document,
		        activeElement = _document.activeElement;
		      if (focused) {
		        if (!activeElement) {
		          navigation.assignFocus(focused.id);
		        } else {
		          var active = this.find(function (node) {
		            return node.element === activeElement;
		          });
		          if (active) {
		            navigation.assignFocus(active.id);
		          }
		        }
		      }
		      // TODO: document or element?
		      this.scope.addEventListener('keydown', this.onKeyDown);
		      this.navigation = navigation;
		    }
		  }, {
		    key: "walk",
		    value: function walk(action) {
		      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.graph;
		      action(base);
		      var _iterator = _createForOfIteratorHelper(base.children),
		        _step;
		      try {
		        for (_iterator.s(); !(_step = _iterator.n()).done;) {
		          var child = _step.value;
		          this.walk(action, child);
		        }
		      } catch (err) {
		        _iterator.e(err);
		      } finally {
		        _iterator.f();
		      }
		    }
		  }, {
		    key: "find",
		    value: function find(func) {
		      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.graph;
		      if (func(base)) {
		        return base;
		      }
		      var _iterator2 = _createForOfIteratorHelper(base.children),
		        _step2;
		      try {
		        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
		          var child = _step2.value;
		          var node = this.find(func, child);
		          if (node) {
		            return node;
		          }
		        }
		      } catch (err) {
		        _iterator2.e(err);
		      } finally {
		        _iterator2.f();
		      }
		      return null;
		    }
		  }, {
		    key: "focus",
		    value: function focus(element) {
		      var interactiveSelector = this.interactive.join(', ');
		      var interactive = element.querySelector(interactiveSelector);
		      var node = this.find(function (node) {
		        return node.element === interactive;
		      });
		      if (!node) {
		        return;
		      }
		      this.navigation.assignFocus(node.id);
		    }
		  }, {
		    key: "elementToNode",
		    value: function elementToNode(element, parent) {
		      var orientation = element.role ? element.role === 'menu' ? Orientation.VERTICAL : Orientation.HORIZONTAL : undefined;
		      var text = element.textContent ? "-".concat(element.textContent) : '';
		      return {
		        id: element.id || "".concat(element.nodeName, "-").concat(this.counter++).concat(text),
		        element: element,
		        parent: parent === null || parent === void 0 ? void 0 : parent.id,
		        children: [],
		        orientation: orientation,
		        isFocusable: !!parent
		      };
		    }
		  }, {
		    key: "destroy",
		    value: function destroy() {
		      if (this.navigation) {
		        this.navigation.off('focus', this.onFocus);
		        this.navigation.unregisterNode(this.rootId);
		      }
		      this.element.removeEventListener('focusin', this.onFocusIn);
		      this.onFocusIn.cancel();
		      this.scope.removeEventListener('keypress', this.onKeyDown);
		      this.scope = null;
		      this.onMutation.cancel();
		      this.observer.disconnect();
		      this.observer = null;
		    }
		  }]);
		  return FocusManager;
		}();
		var LocalizationData = {
		  en: (_en = {}, (0, _defineProperty2["default"])(_en, exports.LocalizationId.PLAY, 'Play'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.PAUSE, 'Pause'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.STOP, 'Stop'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.MUTE, 'Mute'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.UNMUTE, 'Unmute'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.VOLUME, 'Volume'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.CLICK_TO_UNMUTE, 'Click to unmute'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.TAP_TO_UNMUTE, 'Tap to unmute'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.SEEK, 'Seek'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.SEEK_BACK, 'Seek Backward'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.SEEK_FORWARD, 'Seek Forward'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.LIVE, 'Live'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.GO_LIVE, 'Go Live'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.CLOSED_CAPTIONS_OFF, 'Closed Captions Off'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.CLOSED_CAPTIONS_ON, 'Closed Captions On'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.FULL_SCREEN_ENTER, 'Enter Fullscreen'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.FULL_SCREEN_EXIT, 'Exit Fullscreen'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.HOURS, 'Hours'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.MINUTES, 'Minutes'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.SECONDS, 'Seconds'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.VALUE_OF_TOTAL, '{{value}} of {{total}}'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.SETTINGS, 'Settings'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.LANGUAGE, 'Language'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.QUALITY, 'Quality'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.BACK, 'Back'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.CAPTIONS, 'Captions'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.AUDIO, 'Audio'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.CLOSE, 'Close'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.AUTO, 'Auto'), (0, _defineProperty2["default"])(_en, exports.LocalizationId.UNKNOWN, 'Unknown'), _en),
		  es: (_es = {}, (0, _defineProperty2["default"])(_es, exports.LocalizationId.PLAY, 'Reproducir'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.PAUSE, 'Pausa'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.STOP, 'Stop'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.MUTE, 'Silencio'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.UNMUTE, 'Dejar de silenciar'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.VOLUME, 'Volumen'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.CLICK_TO_UNMUTE, 'Haz clic para dejar de silenciar'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.TAP_TO_UNMUTE, 'Toca para dejar de silenciar'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.SEEK, 'Buscar'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.SEEK_BACK, 'Buscar hacia atrás'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.SEEK_FORWARD, 'Buscar adelante'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.LIVE, 'En Vivo'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.GO_LIVE, 'Ir a Vivir'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.CLOSED_CAPTIONS_OFF, 'Subtítulos cerrados'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.CLOSED_CAPTIONS_ON, 'Subtítulos cerrados en'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.FULL_SCREEN_ENTER, 'Ir a pantalla completa'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.FULL_SCREEN_EXIT, 'Salir de pantalla completa'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.HOURS, 'Horas'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.MINUTES, 'Minutos'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.SECONDS, 'Segundos'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.VALUE_OF_TOTAL, '{{value}} de {{total}}'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.SETTINGS, 'Configuraciones'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.LANGUAGE, 'Lengua'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.QUALITY, 'Calidad'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.BACK, 'Volver'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.CAPTIONS, 'Subtítulos'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.AUDIO, 'Audio'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.CLOSE, 'Cerrar'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.AUTO, 'Auto'), (0, _defineProperty2["default"])(_es, exports.LocalizationId.UNKNOWN, 'Desconocida'), _es)
		};
		var UI = 'ui';
		function ui() {
		  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		  return {
		    id: UI,
		    factory: createUiPlugin,
		    options: options
		  };
		}
		function createUiPlugin(_x12, _x13) {
		  return _createUiPlugin.apply(this, arguments);
		}
		function _createUiPlugin() {
		  _createUiPlugin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(services, options) {
		    var plugin;
		    return _regenerator["default"].wrap(function _callee8$(_context8) {
		      while (1) switch (_context8.prev = _context8.next) {
		        case 0:
		          if ((typeof customElements === "undefined" ? "undefined" : (0, _typeof2["default"])(customElements)) !== 'object') {
		            services.logger.warn("Polyfill warning: customElements is not defined");
		          }
		          if (typeof Node.prototype.getRootNode !== 'function') {
		            services.logger.warn("Polyfill warning: Node.prototype.getRootNode is not defined");
		          }
		          plugin = new AviaUiPlugin();
		          _context8.next = 5;
		          return plugin.onRegister(services.player, options, services);
		        case 5:
		          return _context8.abrupt("return", plugin);
		        case 6:
		        case "end":
		          return _context8.stop();
		      }
		    }, _callee8);
		  }));
		  return _createUiPlugin.apply(this, arguments);
		}
		var AviaUiPlugin = /*#__PURE__*/function (_AviaPluginBase) {
		  (0, _inherits2["default"])(AviaUiPlugin, _AviaPluginBase);
		  var _super = _createSuper(AviaUiPlugin);
		  function AviaUiPlugin() {
		    var _this6;
		    (0, _classCallCheck2["default"])(this, AviaUiPlugin);
		    _this6 = _super.call(this, UI);
		    _this6.TV_MODE_IDLE_DELAY = 7000;
		    _this6.defaultSeekInc = 10;
		    _this6.accIndicatorDisplayTime = 1500;
		    _this6.playbackStarted = false;
		    _this6.settingsEngaged = false;
		    _this6.firstProgressReceived = false;
		    _this6.defaultCompactViewBreakpoint = 520;
		    _this6.rootElement = 'avia-ui';
		    _this6.previewTimeTransform = PreviewTimeTransform.DEFAULT;
		    _this6.pendingActive = false;
		    _this6.resourceStarted = false;
		    _this6.activeMode_ = exports.ActiveMode.AUTO;
		    _this6.idleDelay_ = NaN;
		    _this6.BUFFERED_CHECK_COUNT_INTERVAL = 10;
		    _this6.bufferedCheckCounter = 0;
		    _this6.onKeyDown = function () {
		      if (_this6.aviaUi.deviceMode !== exports.DeviceMode.TV || _this6.activeMode === exports.ActiveMode.MANUAL) {
		        return;
		      }
		      _this6.setActive(true);
		      if (!_this6.aviaUi.contains(document.activeElement)) {
		        var progress = _this6.aviaUi.querySelector('avia-progress-bar');
		        progress === null || progress === void 0 ? void 0 : progress.focus();
		      }
		    };
		    _this6.aviaUi = null;
		    _this6.onUiEvent = _this6.onUiEvent.bind((0, _assertThisInitialized2["default"])(_this6));
		    _this6.accVolUpdater = debounce(function (state) {
		      _this6.setAccIndicatorState(state);
		    }, _this6.accIndicatorDisplayTime);
		    _this6.accSeekUpdater = debounce(function (state) {
		      _this6.setAccIndicatorState(state);
		    }, _this6.accIndicatorDisplayTime);
		    document.addEventListener('keydown', _this6.onKeyDown);
		    return _this6;
		  }
		  (0, _createClass2["default"])(AviaUiPlugin, [{
		    key: "activeMode",
		    get: function get() {
		      return this.activeMode_ || exports.ActiveMode.AUTO;
		    },
		    set: function set(value) {
		      this.activeMode_ = value;
		    }
		  }, {
		    key: "active",
		    get: function get() {
		      return this.aviaUi.active;
		    },
		    set: function set(value) {
		      this.setActive(value);
		    }
		  }, {
		    key: "idleDelay",
		    get: function get() {
		      return this.idleDelay_;
		    },
		    set: function set(value) {
		      this.idleDelay_ = value;
		    }
		  }, {
		    key: "destroy",
		    value: function destroy() {
		      var _a, _b;
		      (0, _get2["default"])((0, _getPrototypeOf2["default"])(AviaUiPlugin.prototype), "destroy", this).call(this);
		      this.accVolUpdater.cancel();
		      this.accSeekUpdater.cancel();
		      (_a = this.aviaUi) === null || _a === void 0 ? void 0 : _a.removeEventListener(UiEvents.ACTION, this.onUiEvent);
		      this.aviaUi = null;
		      (_b = this.focusManager) === null || _b === void 0 ? void 0 : _b.destroy();
		      document.removeEventListener('keydown', this.onKeyDown);
		      clearTimeout(this.idleTimeout);
		    }
		    // events from UI
		  }, {
		    key: "onUiEvent",
		    value: function onUiEvent(event) {
		      var _this7 = this;
		      var action = event.detail.action;
		      var value = event.detail.value;
		      if (action !== Action.POSTER_PLAY) {
		        this.services.event.dispatchPluginEvent({
		          id: this.id,
		          type: action,
		          detail: value || null
		        });
		      }
		      switch (action) {
		        case Action.POSTER_PLAY:
		          if (!this.playbackStarted && this.resourceStarted) {
		            this.cancelPoster(action === Action.POSTER_PLAY);
		            this.player.play()["catch"](function () {});
		          }
		          break;
		        case Action.PLAY:
		        case Action.PAUSE:
		        case Action.STOP:
		          // @ts-ignore
		          this.player[action]();
		          break;
		        case Action.ENTER_FULLSCREEN:
		          this.player.enterFullscreen();
		          break;
		        case Action.EXIT_FULLSCREEN:
		          this.player.exitFullscreen();
		          break;
		        case Action.MUTE:
		          this.player.muted = true;
		          this.aviaUi.muted = true;
		          break;
		        case Action.UNMUTE:
		          this.unmute();
		          break;
		        case Action.TEXT_ON:
		        case Action.TEXT_OFF:
		          var isOn = action === Action.TEXT_ON;
		          this.player.textTrackEnabled = isOn;
		          this.aviaUi.textTrackEnabled = isOn;
		          break;
		        case Action.SEEK:
		          this.player.seek(value)["catch"](function (error) {
		            _this7.log("AviaUI: A seek() call failed: ".concat(error.message));
		          });
		          break;
		        case Action.SEEK_FORWARD:
		          this.incrementalSeek(1);
		          break;
		        case Action.SEEK_BACK:
		          this.incrementalSeek(-1);
		          break;
		        case Action.VOLUME:
		          this.player.volume = value;
		          break;
		        case Action.PREVIEW:
		          var time = value.time,
		            percent = value.percent;
		          var _this$player = this.player,
		            contentDuration = _this$player.contentDuration,
		            streamDuration = _this$player.streamDuration,
		            liveStreamUtcDuration = _this$player.liveStreamUtcDuration,
		            liveStreamUtcStart = _this$player.liveStreamUtcStart;
		          var streamTime = percent * streamDuration;
		          Promise.resolve(this.previewTimeTransform({
		            contentTime: time,
		            streamTime: streamTime,
		            liveStreamUtcTime: Math.round(streamTime * 1000 + liveStreamUtcStart),
		            contentDuration: contentDuration,
		            streamDuration: streamDuration,
		            liveStreamUtcDuration: liveStreamUtcDuration
		          })).then(function (value) {
		            _this7.player.getThumbnails(time).then(function (thumbs) {
		              return _this7.aviaUi.preview = {
		                value: value,
		                thumbs: thumbs,
		                thumbnailScaleFactor: _this7.options.thumbnailScaleFactor || 0.25
		              };
		            });
		          });
		          break;
		        case Action.SETTINGS_ON:
		        case Action.SETTINGS_OFF:
		          this.setStateForSettings(action === Action.SETTINGS_ON);
		          this.player.disableKeyCommands(action === Action.SETTINGS_ON);
		          break;
		        case Action.LANGUAGE_SELECT:
		          this.selectLanguage(value);
		          break;
		        case Action.QUALITY_SELECT:
		          this.selectQuality(value);
		          break;
		        case Action.GO_TO_LIVE:
		          this.player.goLive();
		          break;
		      }
		    }
		  }, {
		    key: "onPlayerEvent",
		    value: function onPlayerEvent(event) {
		      var _this$avia = this.avia,
		        PlayerEvent = _this$avia.PlayerEvent,
		        StreamType = _this$avia.StreamType,
		        PlaybackState = _this$avia.PlaybackState;
		      var isLive = this.player.streamType === StreamType.LIVE;
		      var isDvr = this.player.streamType === StreamType.DVR;
		      var type = event.type,
		        detail = event.detail;
		      switch (type) {
		        case PlayerEvent.CLOCK:
		          this.bufferedCheckCounter = detail.count;
		          var state = this.player.playbackState;
		          if (state === PlaybackState.PAUSED || state === PlaybackState.WAITING) {
		            this.updateBufferedRanges();
		          }
		          break;
		        case PlayerEvent.READY:
		          this.setPlayState();
		          this.setPosterState();
		          break;
		        case PlayerEvent.AUTOPLAY_BLOCKED:
		          this.setPosterState(true);
		          break;
		        case PlayerEvent.RESOURCE_START:
		          this.setPosterState(this.aviaUi.posterActive);
		          this.setSegmentBreakPositions([]);
		          this.resourceStarted = true;
		          break;
		        case PlayerEvent.AD_CUEPOINTS_AVAILABLE:
		          this.setSegmentBreakPositions(detail.cuepoints);
		          break;
		        case PlayerEvent.AD_SEGMENT_START:
		          if (this.options.showAdControlsOnAdSegmentStart !== false) {
		            this.setStateForAdBreakStart();
		          }
		          break;
		        case PlayerEvent.AD_START:
		          this.setControlMode(ControlMode.AD);
		          this.enableControls([ControlFunction.PLAY], true);
		          this.aviaUi.playing = true;
		          break;
		        case PlayerEvent.AD_BREAK_START:
		          this.setStateForAdBreakStart();
		          break;
		        case PlayerEvent.AD_PROGRESS:
		          this.setAdPosition(detail.currentTime, detail.duration);
		          break;
		        case PlayerEvent.AD_SEGMENT_END:
		        case PlayerEvent.AD_BREAK_COMPLETE:
		          this.setControlMode(ControlMode.NONE);
		          break;
		        case PlayerEvent.CONTENT_START:
		        case PlayerEvent.CONTENT_SEGMENT_START:
		          this.setStateForContentStart(isLive, isDvr);
		          break;
		        case PlayerEvent.CONTENT_SEGMENT_END:
		          this.firstProgressReceived = false;
		          this.setControlMode(ControlMode.NONE);
		          break;
		        case PlayerEvent.CONTENT_PLAYING:
		          this.setControlMode(ControlMode.CONTENT);
		          this.setPlayState();
		          break;
		        case PlayerEvent.AD_PAUSED:
		        case PlayerEvent.CONTENT_PAUSED:
		          this.aviaUi.playing = false;
		          break;
		        case PlayerEvent.AD_PLAYING:
		          this.aviaUi.playing = true;
		          break;
		        case PlayerEvent.STREAM_TYPE_CHANGE:
		          this.setLiveState(isLive, isDvr);
		          break;
		        case PlayerEvent.CONTENT_PROGRESS:
		          if (!this.firstProgressReceived) {
		            this.firstProgressReceived = true;
		            this.setPlayState();
		            this.setLiveState(isLive, isDvr);
		          }
		          this.updateBufferedRanges();
		          if (!isLive) {
		            this.setTimeAndPosition();
		          }
		          if (isLive || isDvr) {
		            this.setLiveState(isLive, isDvr);
		          }
		          break;
		        case PlayerEvent.FULLSCREEN_CHANGE:
		          this.aviaUi.fullscreen = detail.fullscreen;
		          break;
		        case PlayerEvent.TEXT_TRACK_ENABLED_CHANGE:
		          this.aviaUi.textTrackEnabled = detail.textTrackEnabled;
		          break;
		        case PlayerEvent.LANGUAGE_CHANGE:
		          this.setLocalizationData(detail.language || 'en');
		          break;
		        case PlayerEvent.MUTE_CHANGE:
		          this.aviaUi.muted = detail.muted;
		          if (!this.player.muted) {
		            this.aviaUi.unmuteCtaVisible = false;
		          }
		          break;
		        case PlayerEvent.VOLUME_CHANGE:
		          var volume = detail.volume;
		          var muted = this.player.muted;
		          if (this.aviaUi.volume === volume) {
		            break;
		          }
		          if (!this.aviaUi.muted) {
		            this.aviaUi.muted = Math.ceil(volume) ? false : true;
		          } else if (this.aviaUi.muted && volume > 0) {
		            this.unmute();
		          }
		          this.aviaUi.volume = volume;
		          if (!muted) {
		            this.aviaUi.unmuteCtaVisible = false;
		          }
		          break;
		        case PlayerEvent.HOTKEY_ACTION:
		          this.playbackStarted && this.setAccIndicator(detail.action, detail);
		          break;
		        case PlayerEvent.ACTIVE_STATE_CHANGE:
		          if (this.activeMode === exports.ActiveMode.AUTO) {
		            this.setActiveState(detail.activeState);
		          }
		          break;
		        case PlayerEvent.PRESENTATION_SIZE_CHANGE:
		          this.respondToSizeChange();
		          break;
		        case PlayerEvent.AUDIO_TRACK_CHANGE:
		        case PlayerEvent.AUDIO_TRACKS_CHANGE:
		        case PlayerEvent.QUALITY_CHANGE:
		        case PlayerEvent.QUALITIES_CHANGE:
		        case PlayerEvent.TEXT_TRACK_CHANGE:
		        case PlayerEvent.TEXT_TRACKS_CHANGE:
		          if (type === PlayerEvent.TEXT_TRACKS_CHANGE) {
		            this.enableControls(ControlFunction.TEXT, true);
		          }
		          this.enableSettingsButton();
		          this.setStateForSettings();
		          break;
		        case PlayerEvent.RESOURCE_END:
		          this.setIdleState();
		          break;
		        case PlayerEvent.PLAYBACK_STATE_CHANGE:
		          this.setPlayState();
		          break;
		      }
		    }
		  }, {
		    key: "updateBufferedRanges",
		    value: function updateBufferedRanges() {
		      var update = this.bufferedCheckCounter % this.BUFFERED_CHECK_COUNT_INTERVAL === 0 && this.player.streamType !== this.avia.StreamType.LIVE;
		      if (!update) {
		        return;
		      }
		      var buffered = this.player.getBuffered();
		      var ranges = (buffered || []).map(function (range) {
		        return {
		          start: range.startTime,
		          end: range.endTime
		        };
		      });
		      var t = this.player.contentTime;
		      this.aviaUi.bufferedRanges = this.options.showForwardBufferedRangeOnly === false ? ranges : ranges.filter(function (r) {
		        return t >= r.start && t <= r.end;
		      });
		    }
		  }, {
		    key: "incrementalSeek",
		    value: function incrementalSeek(dir) {
		      var _this8 = this;
		      var inc = this.options.seekIncrement || this.defaultSeekInc;
		      var increment = dir * inc;
		      this.player.jump(increment)["catch"](function (error) {
		        _this8.log("AviaUI: A jump() call failed: ".concat(error.message));
		      });
		      this.player.recordMetric(this.avia.MetricType.UI, this.avia.UiMetric.SEEK_BY, increment);
		    }
		  }, {
		    key: "unmute",
		    value: function unmute() {
		      this.player.muted = false;
		      this.aviaUi.muted = false;
		    }
		  }, {
		    key: "setControlMode",
		    value: function setControlMode(mode) {
		      if (mode === ControlMode.CONTENT) {
		        var m = this.getContentControlMode();
		        this.aviaUi.controlMode = m;
		      } else {
		        this.aviaUi.controlMode = mode;
		      }
		    }
		  }, {
		    key: "setActiveState",
		    value: function setActiveState(state) {
		      this.active = state === this.avia.ActiveState.ACTIVE;
		    }
		  }, {
		    key: "setActive",
		    value: function setActive(active) {
		      var _a, _b;
		      if (!this.playbackStarted) {
		        this.pendingActive = true;
		        return;
		      }
		      this.aviaUi.active = this.activeMode === exports.ActiveMode.MANUAL ? active : ((_b = (_a = this.aviaUi) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.active) ? true : active;
		      if (this.options.offsetTimedTextOnControlsVisible && this.aviaUi.controlMode === ControlMode.CONTENT) {
		        this.player.offsetTimedText(active ? this.controlBarHeight + 4 : 0);
		      }
		      if (this.aviaUi.active && Number.isFinite(this.idleDelay)) {
		        this.activeTimeout();
		      }
		    }
		  }, {
		    key: "activeTimeout",
		    value: function activeTimeout() {
		      var _this9 = this;
		      clearTimeout(this.idleTimeout);
		      this.idleTimeout = setTimeout(function () {
		        if (_this9.aviaUi.settings.active) {
		          _this9.activeTimeout();
		          return;
		        }
		        _this9.setActive(false);
		      }, this.idleDelay);
		    }
		  }, {
		    key: "setAccIndicator",
		    value: function setAccIndicator(action, data) {
		      var newState = {};
		      var AccessibilityAction = this.avia.AccessibilityAction;
		      switch (action) {
		        case AccessibilityAction.INCREASE_VOLUME:
		        case AccessibilityAction.DECREASE_VOLUME:
		        case AccessibilityAction.TOGGLE_MUTE:
		          newState.volumeKey = true;
		          this.accVolUpdater({
		            volumeKey: false
		          });
		          if (!this.player.muted) {
		            this.aviaUi.unmuteCtaVisible = false;
		          }
		          break;
		        case AccessibilityAction.SEEK_FORWARD:
		        case AccessibilityAction.SEEK_BACK:
		          newState.seekForward = action === AccessibilityAction.SEEK_FORWARD;
		          newState.seekBack = action === AccessibilityAction.SEEK_BACK;
		          newState.seekTime = (data === null || data === void 0 ? void 0 : data.position) || 0;
		          this.accSeekUpdater({
		            seekForward: false,
		            seekBack: false,
		            seekTime: null
		          });
		          break;
		      }
		      this.setAccIndicatorState(newState);
		    }
		  }, {
		    key: "setAccIndicatorState",
		    value: function setAccIndicatorState(state) {
		      this.aviaUi.accIndicatorState = Object.assign(Object.assign({}, this.aviaUi.accIndicatorState), state);
		    }
		  }, {
		    key: "setStateForContentStart",
		    value: function setStateForContentStart(isLive, isDvr) {
		      this.cancelPoster(false);
		      this.setControlMode(ControlMode.CONTENT);
		      this.setLiveState(isLive, isDvr);
		      var enabled = [ControlFunction.MUTE, ControlFunction.PLAY];
		      if (this.options.disableFullscreen !== true) {
		        enabled.push(ControlFunction.FULLSCREEN);
		      }
		      this.enableControls(enabled, true);
		      this.aviaUi.muted = this.player.muted;
		      this.setSeekDisabled(false);
		      this.setStateForPlaybackStart();
		      this.aviaUi.volume = this.player.volume;
		      this.enableSettingsButton();
		    }
		  }, {
		    key: "setStateForAdBreakStart",
		    value: function setStateForAdBreakStart() {
		      var enabled = [ControlFunction.MUTE, ControlFunction.PLAY];
		      if (!this.services.playerOptions.useNativeFullscreen || this.services.system.hasFullscreenApi && this.options.disableFullscreen !== true) {
		        enabled.push(ControlFunction.FULLSCREEN);
		      } else {
		        this.enableControls([ControlFunction.FULLSCREEN], false);
		      }
		      this.cancelPoster(false);
		      this.setControlMode(ControlMode.AD);
		      this.enableControls(enabled, true);
		      this.aviaUi.playing = true;
		      this.aviaUi.muted = this.player.muted;
		      this.setStateForPlaybackStart();
		    }
		  }, {
		    key: "setStateForPlaybackStart",
		    value: function setStateForPlaybackStart() {
		      if (this.options.useUnmuteCta && !this.playbackStarted && this.player.muted) {
		        this.aviaUi.unmuteCtaVisible = true;
		      }
		      this.playbackStarted = true;
		      this.setPlayState();
		      if (this.pendingActive) {
		        this.pendingActive = false;
		        this.setActiveState(this.avia.ActiveState.ACTIVE);
		      }
		    }
		  }, {
		    key: "setPosterState",
		    value: function setPosterState() {
		      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.services.playerOptions.autoplay === this.avia.Autoplay.NONE;
		      var _a;
		      this.aviaUi.posterImageUrl = ((_a = this.player.resource) === null || _a === void 0 ? void 0 : _a.location.posterImageUrl) || this.options.posterImageUrl;
		      this.aviaUi.posterActive = active;
		    }
		  }, {
		    key: "cancelPoster",
		    value: function cancelPoster(posterClicked) {
		      this.aviaUi.posterActive = false;
		      if (posterClicked) {
		        this.services.event.dispatchPluginEvent({
		          id: this.id,
		          type: Action.POSTER_PLAY
		        });
		      }
		    }
		  }, {
		    key: "setIdleState",
		    value: function setIdleState() {
		      this.setControlMode(ControlMode.NONE);
		      this.aviaUi.unmuteCtaVisible = false;
		      var enabled = [ControlFunction.MUTE, ControlFunction.PLAY, ControlFunction.TEXT];
		      if (this.options.disableFullscreen !== true) {
		        enabled.push(ControlFunction.FULLSCREEN);
		      }
		      this.enableControls(enabled, false);
		      this.aviaUi.active = false;
		      this.playbackStarted = false;
		    }
		  }, {
		    key: "setLiveState",
		    value: function setLiveState(isLive, isDvr) {
		      var isPlayingLive = this.player.isPlayingLive;
		      this.aviaUi.isLiveLinear = isLive;
		      this.aviaUi.isDvr = isDvr;
		      this.aviaUi.live = isLive || isDvr && isPlayingLive;
		      this.aviaUi.pausable = this.player.pausable;
		      if (isDvr) {
		        this.aviaUi.seekForwardDisabled = isPlayingLive;
		      }
		    }
		  }, {
		    key: "setPlayState",
		    value: function setPlayState() {
		      var playbackState = this.player.playbackState;
		      var isPlaying = playbackState === this.avia.PlaybackState.PLAYING;
		      var isWaiting = playbackState === this.avia.PlaybackState.WAITING;
		      var isPaused = playbackState === this.avia.PlaybackState.PAUSED;
		      this.aviaUi.playing = isWaiting || isPlaying ? true : false;
		      this.aviaUi.playDisabled = !isPlaying && !isPaused;
		      this.aviaUi.waiting = isWaiting;
		      if (this.aviaUi.deviceMode === exports.DeviceMode.TV && isPaused) {
		        this.setActive(true);
		      }
		    }
		  }, {
		    key: "respondToSizeChange",
		    value: function respondToSizeChange() {
		      var m = this.aviaUi.controlMode;
		      if (m === ControlMode.CONTENT || m === ControlMode.COMPACT) {
		        this.aviaUi.controlMode = this.getContentControlMode();
		      }
		      this.aviaUi.playerDimensions = this.player.dimensions;
		    }
		  }, {
		    key: "getContentControlMode",
		    value: function getContentControlMode() {
		      var width = this.player.dimensions.width;
		      var brk = this.options.compactViewBreakpoint || this.defaultCompactViewBreakpoint;
		      return width > brk ? ControlMode.CONTENT : ControlMode.COMPACT;
		    }
		  }, {
		    key: "enableSettingsButton",
		    value: function enableSettingsButton() {
		      var p = this.player;
		      var t = p.textTrack;
		      var a = p.audioTrack;
		      var q = p.qualities.length > 1;
		      this.aviaUi.settingsDisabled = !(t || a || q);
		    }
		  }, {
		    key: "setStateForSettings",
		    value: function setStateForSettings() {
		      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.settingsEngaged;
		      var player = this.player;
		      if (this.services.system.browser === this.avia.Browser.FIREFOX && active) {
		        this.aviaUi.classList.add(CssNames.SETTINGS_NUDGE_LEFT);
		      }
		      this.aviaUi.settings = {
		        active: active,
		        textTrack: player.textTrack,
		        textTracks: player.textTracks,
		        audioTrack: player.audioTrack,
		        audioTracks: player.audioTracks,
		        quality: player.quality,
		        qualities: player.qualities,
		        qualityAuto: player.autoQualitySwitching
		      };
		      this.settingsEngaged = active;
		      this.pauseOnSettings(active);
		    }
		  }, {
		    key: "pauseOnSettings",
		    value: function pauseOnSettings(active) {
		      if (this.options.pauseOnSettings) {
		        var playing = this.player.playbackState === this.avia.PlaybackState.PLAYING;
		        if (active && playing) {
		          this.player.pause();
		          this.playPendingAfterSettings = true;
		        }
		        if (!active && this.playPendingAfterSettings) {
		          this.playPendingAfterSettings = false;
		          this.player.play();
		        }
		      }
		    }
		  }, {
		    key: "enableControls",
		    value: function enableControls(name, flag) {
		      var arr = !Array.isArray(name) ? [name] : name;
		      var uir = this.aviaUi;
		      arr.forEach(function (n) {
		        return uir["".concat(n, "Disabled")] = !flag;
		      });
		    }
		  }, {
		    key: "setSeekDisabled",
		    value: function setSeekDisabled(flag) {
		      this.aviaUi.seekDisabled = flag;
		      this.aviaUi.seekBackDisabled = flag;
		      this.aviaUi.seekForwardDisabled = flag;
		    }
		  }, {
		    key: "setAdPosition",
		    value: function setAdPosition(time, dur) {
		      this.aviaUi.adPlayheadPosition = time / dur;
		    }
		  }, {
		    key: "setTimeAndPosition",
		    value: function setTimeAndPosition() {
		      if (this.aviaUi.waiting && !this.player.video.paused) {
		        return;
		      }
		      var ct = this.player.contentTime;
		      var dur = this.player.contentDuration;
		      this.aviaUi.timeDisplayValue = this.getTimeDisplayValue(ct, dur);
		      this.aviaUi.currentTimeSeconds = ct;
		      this.aviaUi.durationSeconds = dur;
		      this.aviaUi.playheadPosition = ct / dur;
		    }
		  }, {
		    key: "setSegmentBreakPositions",
		    value: function setSegmentBreakPositions(times) {
		      var d = this.player.contentDuration;
		      this.aviaUi.segmentBreakPositions = times.filter(function (t) {
		        return t > 0 && t !== d;
		      }).join(',');
		    }
		  }, {
		    key: "selectLanguage",
		    value: function selectLanguage(data) {
		      var _a, _b;
		      var t = data.trackType;
		      var id = data.trackId;
		      if (t === 'text') {
		        var track = (_a = this.player.textTracks) === null || _a === void 0 ? void 0 : _a.find(function (tk) {
		          return tk.id === id;
		        });
		        if (track) {
		          this.player.textTrack = track;
		        }
		      } else if (t === 'audio') {
		        var _track = (_b = this.player.audioTracks) === null || _b === void 0 ? void 0 : _b.find(function (tk) {
		          return tk.id === id;
		        });
		        if (_track) {
		          this.player.audioTrack = _track;
		        }
		      }
		    }
		  }, {
		    key: "selectQuality",
		    value: function selectQuality(data) {
		      var index = data.index;
		      if (index === -1) {
		        this.player.autoQualitySwitching = true;
		        return;
		      }
		      var quality = this.player.qualities.find(function (quality) {
		        return quality.index === index;
		      });
		      var bitrate = quality === null || quality === void 0 ? void 0 : quality.bitrate;
		      if (bitrate) {
		        this.player.bitrate = bitrate;
		      }
		    }
		  }, {
		    key: "getTimeDisplayValue",
		    value: function getTimeDisplayValue(ct, dur) {
		      if (dur > 86400) {
		        return '';
		      }
		      return "".concat(secToHms(ct), " / ").concat(secToHms(dur));
		    }
		    ////////////////////////
		    // initialization & util
		  }, {
		    key: "controlBarHeight",
		    get: function get() {
		      if (this.controlBarHeight_ == null) {
		        var bar = this.aviaUi.querySelector('avia-control-bar');
		        this.controlBarHeight_ = bar.getBoundingClientRect().height;
		      }
		      return this.controlBarHeight_;
		    }
		  }, {
		    key: "createUi",
		    value: function createUi() {
		      var _this10 = this;
		      var _a;
		      this.applyTheme((_a = this.options) === null || _a === void 0 ? void 0 : _a.theme);
		      return customElements.whenDefined(this.rootElement).then(function () {
		        _this10.initializeState();
		      });
		    }
		  }, {
		    key: "getContainer",
		    value: function getContainer() {
		      var _a;
		      var container = this.options.container;
		      if (container) {
		        container = document.querySelector(container);
		      }
		      return container || ((_a = this.services) === null || _a === void 0 ? void 0 : _a.dom.main);
		    }
		  }, {
		    key: "initializeState",
		    value: function initializeState() {
		      var _a, _b, _c;
		      var aviaUi = this.aviaUi,
		        options = this.options,
		        services = this.services;
		      aviaUi.accIndicatorState = {
		        displayTime: this.accIndicatorDisplayTime,
		        volumeKey: false,
		        muted: false,
		        seekForward: false,
		        seekBack: false,
		        seekTime: null
		      };
		      aviaUi.qualityLabel = options.qualityLabel;
		      aviaUi.deviceMode = this.calculateDeviceMode();
		      aviaUi.isIosNative = aviaUi.deviceMode === exports.DeviceMode.MOBILE && !services.system.hasFullscreenApi && services.playerOptions.useNativeFullscreen;
		      aviaUi.linkMuteAndVolume = options.linkMuteAndVolume !== false;
		      if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.activeMode) {
		        this.activeMode = this.options.activeMode;
		      } else if (aviaUi.deviceMode === exports.DeviceMode.TV) {
		        this.active = true;
		        this.idleDelay = this.options.idleDelay || this.TV_MODE_IDLE_DELAY;
		        this.player.disableKeyCommands(true);
		        this.log('AviaUI is in TV Mode');
		      }
		      if ((_b = this.options) === null || _b === void 0 ? void 0 : _b.previewTimeTransform) {
		        this.previewTimeTransform = (_c = this.options) === null || _c === void 0 ? void 0 : _c.previewTimeTransform;
		      }
		      aviaUi.isTouch = 'ontouchstart' in document.documentElement;
		      aviaUi.initialized = true;
		    }
		  }, {
		    key: "setLocalizationData",
		    value: function setLocalizationData(lang) {
		      var _this11 = this;
		      var localeData = Object.values(exports.LocalizationId).reduce(function (acc, id) {
		        acc[id] = _this11.services.localization.localize(id, lang);
		        return acc;
		      }, {});
		      this.aviaUi.localeData = localeData;
		    }
		  }, {
		    key: "calculateDeviceMode",
		    value: function calculateDeviceMode() {
		      var deviceMode = this.options.deviceMode;
		      if (deviceMode && deviceMode !== exports.DeviceMode.AUTO) {
		        return deviceMode;
		      }
		      var system = this.services.system;
		      if (system.isTv || system.isConsole || system.isEmbedded || system.isChromecast) {
		        return exports.DeviceMode.TV;
		      }
		      if (system.isMobile) {
		        return exports.DeviceMode.MOBILE;
		      }
		      return exports.DeviceMode.DESKTOP;
		    }
		  }, {
		    key: "getEventInterests",
		    value: function getEventInterests() {
		      var PlayerEvent = this.avia.PlayerEvent;
		      return [PlayerEvent.CLOCK, PlayerEvent.READY, PlayerEvent.AUTOPLAY_BLOCKED, PlayerEvent.RESOURCE_START, PlayerEvent.AD_CUEPOINTS_AVAILABLE, PlayerEvent.AD_SEGMENT_START, PlayerEvent.AD_START, PlayerEvent.AD_BREAK_START, PlayerEvent.AD_PROGRESS, PlayerEvent.AD_SEGMENT_END, PlayerEvent.AD_BREAK_COMPLETE, PlayerEvent.CONTENT_START, PlayerEvent.CONTENT_SEGMENT_START, PlayerEvent.CONTENT_SEGMENT_END, PlayerEvent.CONTENT_PLAYING, PlayerEvent.AD_PAUSED, PlayerEvent.CONTENT_PAUSED, PlayerEvent.AD_PLAYING, PlayerEvent.STREAM_TYPE_CHANGE, PlayerEvent.CONTENT_PROGRESS, PlayerEvent.FULLSCREEN_CHANGE, PlayerEvent.TEXT_TRACK_ENABLED_CHANGE, PlayerEvent.LANGUAGE_CHANGE, PlayerEvent.MUTE_CHANGE, PlayerEvent.VOLUME_CHANGE, PlayerEvent.HOTKEY_ACTION, PlayerEvent.ACTIVE_STATE_CHANGE, PlayerEvent.PRESENTATION_SIZE_CHANGE, PlayerEvent.AUDIO_TRACK_CHANGE, PlayerEvent.AUDIO_TRACKS_CHANGE, PlayerEvent.QUALITY_CHANGE, PlayerEvent.QUALITIES_CHANGE, PlayerEvent.TEXT_TRACK_CHANGE, PlayerEvent.TEXT_TRACKS_CHANGE, PlayerEvent.RESOURCE_END, PlayerEvent.PLAYBACK_STATE_CHANGE];
		    }
		  }, {
		    key: "initialize",
		    value: function () {
		      var _initialize2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
		        return _regenerator["default"].wrap(function _callee5$(_context5) {
		          while (1) switch (_context5.prev = _context5.next) {
		            case 0:
		              this.services.localization.registerLocalizationData(LocalizationData);
		              _context5.next = 3;
		              return this.createUi();
		            case 3:
		            case "end":
		              return _context5.stop();
		          }
		        }, _callee5, this);
		      }));
		      function initialize() {
		        return _initialize2.apply(this, arguments);
		      }
		      return initialize;
		    }()
		  }, {
		    key: "applyTheme",
		    value: function applyTheme() {
		      var _this12 = this;
		      var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		      var container = this.getContainer();
		      var html = theme.html,
		        cssVars = theme.cssVars;
		      var aviaUi = container.querySelector(this.rootElement);
		      var previous;
		      if (html && aviaUi) {
		        previous = container.removeChild(aviaUi);
		        previous.removeEventListener(UiEvents.ACTION, this.onUiEvent);
		        aviaUi = null;
		        this.aviaUi = null;
		      }
		      if (!aviaUi) {
		        var elements = html ? createElementsFromString(html) : [document.createElement(this.rootElement)];
		        aviaUi = elements.find(function (element) {
		          return element.nodeName.toLowerCase() === _this12.rootElement;
		        });
		        if (!aviaUi) {
		          throw new Error("Avia UI theme HTML must contain the root element ".concat(this.rootElement));
		        }
		        elements.forEach(function (element) {
		          return container.appendChild(element);
		        });
		        if (previous) {
		          // @ts-ignore
		          Object.keys(Object.getPrototypeOf(previous)).forEach(function (key) {
		            var value = previous[key];
		            if (typeof value === 'function') {
		              return;
		            }
		            aviaUi[key] = previous[key];
		          });
		        }
		      }
		      if (!this.aviaUi) {
		        this.aviaUi = aviaUi;
		        this.aviaUi.addEventListener(UiEvents.ACTION, this.onUiEvent);
		        this.focusManager = new FocusManager(this.aviaUi);
		        // @ts-ignore
		        window.fm = this.focusManager;
		      }
		      if (cssVars) {
		        applyCssVars(cssVars);
		      }
		    }
		  }]);
		  return AviaUiPlugin;
		}(AviaPluginBase); // UMD Aliases
		var ID = UI;
		var createPlugin = createUiPlugin;
		var plugin = ui;
		var aviaAccessibilityCss = "avia-accessibility{display:block}";
		var AviaAccessibility$1 = /*#__PURE__*/function (_H) {
		  (0, _inherits2["default"])(AviaAccessibility$1, _H);
		  var _super2 = _createSuper(AviaAccessibility$1);
		  function AviaAccessibility$1() {
		    var _this13;
		    (0, _classCallCheck2["default"])(this, AviaAccessibility$1);
		    _this13 = _super2.call(this);
		    _this13.__registerHost();
		    return _this13;
		  }
		  (0, _createClass2["default"])(AviaAccessibility$1, [{
		    key: "render",
		    value: function render() {
		      return h(Host, null, h("avia-volume-indicator", null), h("avia-seek-indicator", null));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaAccessibilityCss;
		    }
		  }]);
		  return AviaAccessibility$1;
		}(H);
		var aviaActiveCss = "avia-active{display:block;transition:var(--avia-active-transition-in)}avia-ui:not([active]) avia-active{opacity:0;transition:var(--avia-active-transition-out)}";
		var AviaActive$1 = /*#__PURE__*/function (_H2) {
		  (0, _inherits2["default"])(AviaActive$1, _H2);
		  var _super3 = _createSuper(AviaActive$1);
		  function AviaActive$1() {
		    var _this14;
		    (0, _classCallCheck2["default"])(this, AviaActive$1);
		    _this14 = _super3.call(this);
		    _this14.__registerHost();
		    return _this14;
		  }
		  (0, _createClass2["default"])(AviaActive$1, [{
		    key: "render",
		    value: function render() {
		      return h(Host, null);
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaActiveCss;
		    }
		  }]);
		  return AviaActive$1;
		}(H);
		var aviaAdControlBarCss = "avia-ad-control-bar{position:absolute;height:56px;width:100%;left:0;bottom:0;right:0;pointer-events:none;flex-direction:row;justify-content:center;display:none;transition:var(--avia-active-transition-in)}avia-ui[control-mode=\"ad\"] avia-ad-control-bar{display:flex}.avia-ad-control-container{pointer-events:auto;display:flex;width:calc(3 * var(--avia-control-bar-btn-width) + (2 * var(--avia-default-spacing)));height:var(--avia-control-bar-btn-height);justify-content:space-between;background-color:var(--avia-ad-control-bg-color);border-radius:var(--avia-ad-control-border-radius)}avia-ui:not([active]) avia-ad-control-bar{opacity:0;transition:var(--avia-active-transition-out)}";
		var AviaAdControlBar$1 = /*#__PURE__*/function (_H3) {
		  (0, _inherits2["default"])(AviaAdControlBar$1, _H3);
		  var _super4 = _createSuper(AviaAdControlBar$1);
		  function AviaAdControlBar$1() {
		    var _this15;
		    (0, _classCallCheck2["default"])(this, AviaAdControlBar$1);
		    _this15 = _super4.call(this);
		    _this15.__registerHost();
		    return _this15;
		  }
		  (0, _createClass2["default"])(AviaAdControlBar$1, [{
		    key: "render",
		    value: function render() {
		      return h(Host, null, h("div", {
		        "class": "avia-ad-control-container"
		      }, h("avia-mute-toggle", null), h("avia-play-toggle", null), h("avia-fullscreen-toggle", null)), h("avia-ad-progress-bar", null));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaAdControlBarCss;
		    }
		  }]);
		  return AviaAdControlBar$1;
		}(H);
		var createDeferredPromise = function createDeferredPromise() {
		  var resolve;
		  var promise = new Promise(function (res) {
		    resolve = res;
		  });
		  return {
		    promise: promise,
		    resolve: resolve
		  };
		};
		var openWormhole = function openWormhole(Component, props, isBlocking) {
		  if (isBlocking === void 0) {
		    isBlocking = true;
		  }
		  var isConstructor = Component.constructor.name === 'Function';
		  var Proto = isConstructor ? Component.prototype : Component;
		  var componentWillLoad = Proto.componentWillLoad;
		  Proto.componentWillLoad = function () {
		    var _this = this;
		    var el = getElement(this);
		    var onOpen = createDeferredPromise();
		    var event = new CustomEvent('openWormhole', {
		      bubbles: true,
		      composed: true,
		      detail: {
		        consumer: this,
		        fields: props,
		        updater: function updater(prop, value) {
		          var target = prop in el ? el : _this;
		          target[prop] = value;
		        },
		        onOpen: onOpen
		      }
		    });
		    el.dispatchEvent(event);
		    var willLoad = function willLoad() {
		      if (componentWillLoad) {
		        return componentWillLoad.call(_this);
		      }
		    };
		    return isBlocking ? onOpen.promise.then(function () {
		      return willLoad();
		    }) : willLoad();
		  };
		};
		var multiverse = new Map();
		var updateConsumer = function updateConsumer(_a, state) {
		  var fields = _a.fields,
		    updater = _a.updater;
		  fields.forEach(function (field) {
		    updater(field, state[field]);
		  });
		};
		var Universe = {
		  create: function create(creator, initialState) {
		    var el = getElement(creator);
		    var wormholes = new Map();
		    var universe = {
		      wormholes: wormholes,
		      state: initialState
		    };
		    multiverse.set(creator, universe);
		    var connectedCallback = creator.connectedCallback;
		    creator.connectedCallback = function () {
		      multiverse.set(creator, universe);
		      if (connectedCallback) {
		        connectedCallback.call(creator);
		      }
		    };
		    var disconnectedCallback = creator.disconnectedCallback;
		    creator.disconnectedCallback = function () {
		      multiverse["delete"](creator);
		      if (disconnectedCallback) {
		        disconnectedCallback.call(creator);
		      }
		    };
		    el.addEventListener('openWormhole', function (event) {
		      event.stopPropagation();
		      var _a = event.detail,
		        consumer = _a.consumer,
		        onOpen = _a.onOpen;
		      if (wormholes.has(consumer)) return;
		      if ((0, _typeof2["default"])(consumer) !== 'symbol') {
		        var connectedCallback_1 = consumer.connectedCallback,
		          disconnectedCallback_1 = consumer.disconnectedCallback;
		        consumer.connectedCallback = function () {
		          wormholes.set(consumer, event.detail);
		          if (connectedCallback_1) {
		            connectedCallback_1.call(consumer);
		          }
		        };
		        consumer.disconnectedCallback = function () {
		          wormholes["delete"](consumer);
		          if (disconnectedCallback_1) {
		            disconnectedCallback_1.call(consumer);
		          }
		        };
		      }
		      wormholes.set(consumer, event.detail);
		      updateConsumer(event.detail, universe.state);
		      onOpen === null || onOpen === void 0 ? void 0 : onOpen.resolve(function () {
		        wormholes["delete"](consumer);
		      });
		    });
		    el.addEventListener('closeWormhole', function (event) {
		      var consumer = event.detail;
		      wormholes["delete"](consumer);
		    });
		  },
		  Provider: function Provider(_a, children) {
		    var state = _a.state;
		    var creator = getRenderingRef();
		    if (multiverse.has(creator)) {
		      var universe = multiverse.get(creator);
		      universe.state = state;
		      universe.wormholes.forEach(function (opening) {
		        updateConsumer(opening, state);
		      });
		    }
		    return children;
		  }
		};
		var aviaAdProgressBarCss = "avia-ad-progress-bar{display:block;position:absolute;background:var(--avia-ad-progress-track-color);position:absolute;height:3px;bottom:0;left:0;right:0;user-select:none}.avia-ad-prog-bar{height:3px;user-select:none;background-color:var(--avia-ad-progress-color);width:0%}";
		var AviaAdProgressBar$1 = /*#__PURE__*/function (_H4) {
		  (0, _inherits2["default"])(AviaAdProgressBar$1, _H4);
		  var _super5 = _createSuper(AviaAdProgressBar$1);
		  function AviaAdProgressBar$1() {
		    var _this16;
		    (0, _classCallCheck2["default"])(this, AviaAdProgressBar$1);
		    _this16 = _super5.call(this);
		    _this16.__registerHost();
		    _this16.adPlayheadPosition = 0;
		    _this16.isLiveLinear = false;
		    return _this16;
		  }
		  (0, _createClass2["default"])(AviaAdProgressBar$1, [{
		    key: "adPlayheadPositionHandler",
		    value: function adPlayheadPositionHandler(val) {
		      if (!this.pbar || val === null || val === undefined || isNaN(val) || val < 0) {
		        return;
		      }
		      this.pbar.style.width = "".concat(val * 100, "%");
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this17 = this;
		      return h("div", {
		        "class": 'avia-ad-prog-bar',
		        ref: function ref(el) {
		          return _this17.pbar = el;
		        }
		      });
		    }
		  }], [{
		    key: "watchers",
		    get: function get() {
		      return {
		        "adPlayheadPosition": ["adPlayheadPositionHandler"]
		      };
		    }
		  }, {
		    key: "style",
		    get: function get() {
		      return aviaAdProgressBarCss;
		    }
		  }]);
		  return AviaAdProgressBar$1;
		}(H);
		openWormhole(AviaAdProgressBar$1, ['adPlayheadPosition', 'isLiveLinear']);
		var KeyboardCode;
		(function (KeyboardCode) {
		  KeyboardCode[KeyboardCode["ARROW_LEFT"] = 37] = "ARROW_LEFT";
		  KeyboardCode[KeyboardCode["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
		  KeyboardCode[KeyboardCode["ARROW_UP"] = 38] = "ARROW_UP";
		  KeyboardCode[KeyboardCode["ARROW_DOWN"] = 40] = "ARROW_DOWN";
		  KeyboardCode[KeyboardCode["PAGE_UP"] = 33] = "PAGE_UP";
		  KeyboardCode[KeyboardCode["PAGE_DOWN"] = 34] = "PAGE_DOWN";
		  KeyboardCode[KeyboardCode["ENTER"] = 13] = "ENTER";
		  KeyboardCode[KeyboardCode["SPACE"] = 32] = "SPACE";
		})(KeyboardCode || (KeyboardCode = {}));
		var aviaButtonCss = "avia-button{display:inline-block;background-color:transparent;height:var(--avia-control-bar-btn-height);width:var(--avia-control-bar-btn-width);color:var(--avia-control-bar-btn-text-color);border:var(--avia-control-bar-btn-border);border-width:var(--avia-control-bar-btn-border-width);border-radius:var(--avia-control-bar-btn-border-radius);outline:var(--avia-control-bar-btn-border-outline);cursor:var(--avia-control-bar-btn-border-cursor);pointer-events:all}avia-button:hover{color:var(--avia-control-bar-btn-text-color-hover)}avia-button[disabled]{cursor:var(--avia-control-bar-btn-disabled-cursor);opacity:var(--avia-control-bar-btn-disabled-opacity);pointer-events:none}avia-button[icon]{padding:0;margin:0;background-position:center;background-size:var(--avia-icon-btn-bg-size);background-repeat:no-repeat;user-select:none}avia-button[compact]{width:var(--avia-compact-button-width);height:var(--avia-compact-button-height);border-radius:var(--avia-compact-button-border-radius);background-color:var(--avia-compact-button-background-color)}";
		var AviaButton$1 = /*#__PURE__*/function (_H5) {
		  (0, _inherits2["default"])(AviaButton$1, _H5);
		  var _super6 = _createSuper(AviaButton$1);
		  function AviaButton$1() {
		    var _this18;
		    (0, _classCallCheck2["default"])(this, AviaButton$1);
		    _this18 = _super6.call(this);
		    _this18.__registerHost();
		    _this18.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this18), "action", 7);
		    _this18.TAP_THRESHOLD = 300;
		    _this18.isTouch = 'ontouchstart' in document.documentElement;
		    _this18.locId = undefined;
		    _this18.toggled = false;
		    _this18.compact = false;
		    _this18.icon = false;
		    _this18.variant = false;
		    _this18.actions = '';
		    _this18.ids = '';
		    _this18.disabled = false;
		    _this18.localeData = undefined;
		    _this18.focused = false;
		    return _this18;
		  }
		  (0, _createClass2["default"])(AviaButton$1, [{
		    key: "onClick",
		    value: function onClick(event) {
		      if (this.isTouch || this.disabled) {
		        blockEvent(event);
		        return;
		      }
		      this.execAction();
		    }
		  }, {
		    key: "onTouchStart",
		    value: function onTouchStart(event) {
		      blockEvent(event);
		      this.touchStartStamp = event.timeStamp;
		    }
		  }, {
		    key: "onTouchEnd",
		    value: function onTouchEnd(event) {
		      if (!this.disabled && this.touchStartStamp && event.timeStamp - this.touchStartStamp <= this.TAP_THRESHOLD) {
		        this.touchStartStamp = null;
		        this.execAction();
		      }
		    }
		  }, {
		    key: "onFocus",
		    value: function onFocus() {
		      if (!this.element.classList.contains('focus-visible')) {
		        return;
		      }
		      this.focused = true;
		    }
		  }, {
		    key: "onBlur",
		    value: function onBlur() {
		      if (!this.focused) {
		        return;
		      }
		      this.focused = false;
		    }
		  }, {
		    key: "onKeyDown",
		    value: function onKeyDown(event) {
		      switch (event.keyCode) {
		        case KeyboardCode.ENTER:
		        case KeyboardCode.SPACE:
		          this.element.click();
		          blockEvent(event);
		          return;
		      }
		    }
		  }, {
		    key: "getCsvValue",
		    value: function getCsvValue(state) {
		      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : +this.toggled;
		      return csvToArray(state)[index];
		    }
		  }, {
		    key: "execAction",
		    value: function execAction() {
		      var action = this.getCsvValue(this.actions);
		      if (!action) {
		        return;
		      }
		      this.actionEvent.emit({
		        action: action
		      });
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _a;
		      var id = this.getCsvValue(this.ids) || this.locId;
		      var ariaLabel = (_a = this.localeData) === null || _a === void 0 ? void 0 : _a[id];
		      var attributes = {
		        'aria-label': ariaLabel
		      };
		      if (!this.focused && ariaLabel) {
		        attributes.title = ariaLabel;
		      }
		      return h(Host, Object.assign({
		        disabled: this.disabled,
		        tabIndex: 0
		      }, attributes));
		    }
		  }, {
		    key: "element",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaButtonCss;
		    }
		  }]);
		  return AviaButton$1;
		}(H);
		openWormhole(AviaButton$1, ['localeData']);
		var aviaControlBarCss = "avia-control-bar{box-sizing:border-box;width:100%;padding:0 var(--avia-default-spacing);background:var(--avia-control-bar-bg);display:none;transition:var(--avia-active-transition-in);padding-bottom:auto;pointer-events:auto}avia-ui[control-mode=\"content\"] avia-control-bar{display:block}avia-ui:not([active]) avia-control-bar{opacity:0;transition:var(--avia-active-transition-out)}avia-control-bar.avia-live-linear{padding-top:var(--avia-live-padding-top)}.avia-control-container{display:flex;justify-content:space-between;align-items:center;height:var(--avia-control-bar-btn-height);flex-wrap:nowrap}avia-control-bar.avia-layout-c-30 .avia-control-group-left,avia-control-bar.avia-layout-c-30 .avia-control-group-right{width:35%}avia-control-bar.avia-layout-c-30 .avia-control-group-center{width:30%}avia-control-bar.avia-layout-c-40 .avia-control-group-left,avia-control-bar.avia-layout-c-40 .avia-control-group-right{width:30%}avia-control-bar.avia-layout-c-40 .avia-control-group-center{width:40%}avia-control-bar.avia-layout-c-50 .avia-control-group-left,avia-control-bar.avia-layout-c-50 .avia-control-group-right{width:25%}avia-control-bar.avia-layout-c-50 .avia-control-group-center{width:50%}avia-control-bar.avia-layout-c-60 .avia-control-group-left,avia-control-bar.avia-layout-c-60 .avia-control-group-right{width:20%}avia-control-bar.avia-layout-c-60 .avia-control-group-center{width:60%}avia-control-bar.avia-layout-c-70 .avia-control-group-left,avia-control-bar.avia-layout-c-70 .avia-control-group-right{width:15%}avia-control-bar.avia-layout-c-70 .avia-control-group-center{width:70%}avia-control-bar[avia-layout=default] .avia-control-group-left,avia-control-bar[avia-layout=default] .avia-control-group-right{display:flex;flex-basis:auto}avia-control-bar[avia-layout=default] .avia-control-group-left{flex-grow:1}.avia-control-group-left,.avia-control-group-right,.avia-control-group-center,.avia-control-group-left>*,.avia-control-group-right>*,.avia-control-group-center>*{display:flex;flex-basis:auto;align-items:center}.avia-control-group-center>*{flex-grow:1;justify-content:space-evenly}.avia-control-group-right,.avia-control-group-right>*{justify-content:flex-end}.avia-control-group-left>*{justify-content:flex-start}.avia-control-group-left>*>*{margin-right:var(--avia-half-spacing)}.avia-control-group-right>*>*{margin-left:var(--avia-half-spacing)}avia-control-bar>avia-progress-seek:empty{display:none}.avia-control-group-left>*:empty,.avia-control-group-right>*:empty,.avia-control-group-center>*:empty{display:none}.avia-control-group-top{display:flex}.avia-control-group-top-left{flex-grow:1}";
		var AviaControlBar$1 = /*#__PURE__*/function (_H6) {
		  (0, _inherits2["default"])(AviaControlBar$1, _H6);
		  var _super7 = _createSuper(AviaControlBar$1);
		  function AviaControlBar$1() {
		    var _this19;
		    (0, _classCallCheck2["default"])(this, AviaControlBar$1);
		    _this19 = _super7.call(this);
		    _this19.__registerHost();
		    _this19.active = false;
		    _this19.controlMode = ControlMode.NONE;
		    _this19.deviceMode = exports.DeviceMode.DESKTOP;
		    _this19.isDvr = false;
		    _this19.isLiveLinear = false;
		    _this19.isIosNative = false;
		    _this19.settings = null;
		    return _this19;
		  }
		  (0, _createClass2["default"])(AviaControlBar$1, [{
		    key: "getHeight",
		    value: function () {
		      var _getHeight = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
		        return _regenerator["default"].wrap(function _callee6$(_context6) {
		          while (1) switch (_context6.prev = _context6.next) {
		            case 0:
		              return _context6.abrupt("return", this.element.getBoundingClientRect().height);
		            case 1:
		            case "end":
		              return _context6.stop();
		          }
		        }, _callee6, this);
		      }));
		      function getHeight() {
		        return _getHeight.apply(this, arguments);
		      }
		      return getHeight;
		    }()
		  }, {
		    key: "render",
		    value: function render() {
		      var isDesktop = this.deviceMode === exports.DeviceMode.DESKTOP;
		      var isTv = this.deviceMode === exports.DeviceMode.TV;
		      var useDesktopButtons = this.deviceMode === exports.DeviceMode.DESKTOP || this.deviceMode === exports.DeviceMode.MOBILE && !this.isIosNative;
		      return h(Host, {
		        role: "menu",
		        "class": this.isLiveLinear ? 'avia-live-linear' : ''
		      }, h("slot", {
		        name: "top"
		      }, isTv && h("avia-control-group", {
		        orientation: Orientation.HORIZONTAL,
		        "class": "avia-control-group-top"
		      }, h("div", {
		        "class": "avia-control-group-top-left",
		        role: "group"
		      }, this.isLiveLinear && h("avia-live-control", null)), h("div", {
		        "class": "avia-control-group-top-right",
		        role: "group"
		      }, h("avia-text-toggle", null), h("avia-settings-toggle", null))), !this.isLiveLinear ? h("avia-progress-bar", null) : ''), h("avia-control-group", {
		        orientation: Orientation.HORIZONTAL,
		        "class": "avia-control-container"
		      }, h("div", {
		        "class": "avia-control-group-left",
		        role: "group"
		      }, h("slot", {
		        name: "left"
		      }, !isTv && h("avia-play-toggle", null), !isTv && h("avia-mute-toggle", null), isDesktop && h("avia-volume-slider", null), isTv && !this.isLiveLinear && h("avia-current-time", null))), h("div", {
		        "class": "avia-control-group-center",
		        role: "group"
		      }, h("slot", {
		        name: "center"
		      })), h("div", {
		        "class": "avia-control-group-right",
		        role: "group"
		      }, h("slot", {
		        name: "right"
		      }, h("div", {
		        "class": "avia-control-group-right"
		      }, useDesktopButtons && h("avia-time-display", null), (!isTv && this.isLiveLinear || this.isDvr) && h("avia-live-control", null), useDesktopButtons && h(Fragment, null, h("avia-text-toggle", null), !this.isIosNative && h("avia-settings-toggle", null), !this.isIosNative && h("avia-fullscreen-toggle", null)), isTv && !this.isLiveLinear && h("avia-time-remaining", null))))), h("slot", {
		        name: "bottom"
		      }));
		    }
		  }, {
		    key: "element",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaControlBarCss;
		    }
		  }]);
		  return AviaControlBar$1;
		}(H);
		openWormhole(AviaControlBar$1, ['active', 'controlMode', 'deviceMode', 'isDvr', 'isIosNative', 'isLiveLinear', 'settings']);
		var aviaControlBarCompactCss = "avia-control-bar-compact{display:none;position:absolute;top:50%;left:50%;width:var(--avia-compact-control-bar-width);height:var(--avia-compact-button-height);border-radius:var(--avia-compact-button-border-radius);margin-left:var(--avia-compact-control-bar-margin-left);margin-top:var(--avia-compact-control-bar-margin-top)}avia-control-bar-compact avia-mute-toggle,avia-control-bar-compact avia-play-toggle{margin-right:var(--avia-default-spacing)}avia-ui[control-mode=\"compact\"][active] avia-control-bar-compact,avia-ui[control-mode=\"compact\"][active] avia-control-bar-compact>*{display:block}";
		var AviaControlBarCompact$1 = /*#__PURE__*/function (_H7) {
		  (0, _inherits2["default"])(AviaControlBarCompact$1, _H7);
		  var _super8 = _createSuper(AviaControlBarCompact$1);
		  function AviaControlBarCompact$1() {
		    var _this20;
		    (0, _classCallCheck2["default"])(this, AviaControlBarCompact$1);
		    _this20 = _super8.call(this);
		    _this20.__registerHost();
		    return _this20;
		  }
		  (0, _createClass2["default"])(AviaControlBarCompact$1, [{
		    key: "render",
		    value: function render() {
		      return h(Host, null, h("slot", null, h("avia-mute-toggle", {
		        compact: true
		      }), h("avia-play-toggle", {
		        compact: true
		      }), h("avia-fullscreen-toggle", {
		        compact: true
		      })));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaControlBarCompactCss;
		    }
		  }]);
		  return AviaControlBarCompact$1;
		}(H);
		var aviaControlGroupCss = "";
		var AviaControlGroup$1 = /*#__PURE__*/function (_H8) {
		  (0, _inherits2["default"])(AviaControlGroup$1, _H8);
		  var _super9 = _createSuper(AviaControlGroup$1);
		  function AviaControlGroup$1() {
		    var _this21;
		    (0, _classCallCheck2["default"])(this, AviaControlGroup$1);
		    _this21 = _super9.call(this);
		    _this21.__registerHost();
		    _this21.orientation = Orientation.HORIZONTAL;
		    return _this21;
		  }
		  (0, _createClass2["default"])(AviaControlGroup$1, [{
		    key: "render",
		    value: function render() {
		      var role = this.orientation === Orientation.VERTICAL ? 'menu' : 'menubar';
		      return h(Host, {
		        role: role
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaControlGroupCss;
		    }
		  }]);
		  return AviaControlGroup$1;
		}(H);
		var aviaCurrentTimeCss = ":host{display:inline-block}.avia-current-time{display:inline-block;user-select:none;height:var(--avia-time-height);line-height:var(--avia-time-line-height);font-size:var(--avia-time-font-size);color:var(--avia-time-color);font-family:var(--avia-time-font-family)}.avia-control-group-right .avia-current-time{text-align:right}";
		var AviaCurrentTime$1 = /*#__PURE__*/function (_H9) {
		  (0, _inherits2["default"])(AviaCurrentTime$1, _H9);
		  var _super10 = _createSuper(AviaCurrentTime$1);
		  function AviaCurrentTime$1() {
		    var _this22;
		    (0, _classCallCheck2["default"])(this, AviaCurrentTime$1);
		    _this22 = _super10.call(this);
		    _this22.__registerHost();
		    _this22.currentTimeSeconds = undefined;
		    _this22.localeData = undefined;
		    _this22.isLiveLinear = false;
		    _this22.isDvr = false;
		    return _this22;
		  }
		  (0, _createClass2["default"])(AviaCurrentTime$1, [{
		    key: "render",
		    value: function render() {
		      var inactive = this.isLiveLinear || this.isDvr;
		      if (inactive) {
		        return '';
		      }
		      var t = this.currentTimeSeconds || 0;
		      var lbl = this.localeData ? createLocalizedTimeString(t, this.localeData) : '';
		      return h("div", {
		        "class": 'avia-current-time',
		        "aria-label": lbl,
		        title: lbl
		      }, secToHms(t));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaCurrentTimeCss;
		    }
		  }]);
		  return AviaCurrentTime$1;
		}(H);
		openWormhole(AviaCurrentTime$1, ['currentTimeSeconds', 'localeData', 'isLiveLinear', 'isDvr']);
		var aviaDurationCss = ":host{display:inline-block}.avia-duration{display:inline-block;user-select:none;height:var(--avia-time-height);line-height:var(--avia-time-line-height);font-size:var(--avia-time-font-size);color:var(--avia-time-color);font-family:var(--avia-time-font-family)}.avia-control-group-right .avia-duration{text-align:right}";
		var AviaDuration$1 = /*#__PURE__*/function (_H10) {
		  (0, _inherits2["default"])(AviaDuration$1, _H10);
		  var _super11 = _createSuper(AviaDuration$1);
		  function AviaDuration$1() {
		    var _this23;
		    (0, _classCallCheck2["default"])(this, AviaDuration$1);
		    _this23 = _super11.call(this);
		    _this23.__registerHost();
		    _this23.durationSeconds = undefined;
		    _this23.localeData = undefined;
		    _this23.isLiveLinear = false;
		    _this23.isDvr = false;
		    return _this23;
		  }
		  (0, _createClass2["default"])(AviaDuration$1, [{
		    key: "render",
		    value: function render() {
		      var inactive = this.isLiveLinear || this.isDvr;
		      if (inactive) {
		        return '';
		      }
		      var t = this.durationSeconds || 0;
		      var lbl = this.localeData ? createLocalizedTimeString(t, this.localeData) : '';
		      return h("div", {
		        "class": 'avia-duration',
		        "aria-label": lbl,
		        title: lbl
		      }, secToHms(this.durationSeconds || 0));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaDurationCss;
		    }
		  }]);
		  return AviaDuration$1;
		}(H);
		openWormhole(AviaDuration$1, ['durationSeconds', 'localeData', 'isLiveLinear', 'isDvr']);
		var aviaFullscreenToggleCss = "avia-fullscreen-toggle{display:inline-block}avia-fullscreen-toggle avia-button{background-image:var(--avia-fs-icon)}avia-fullscreen-toggle avia-button:hover{background-image:var(--avia-fs-icon-hover)}avia-fullscreen-toggle avia-button[toggled]{background-image:var(--avia-fs-exit-icon)}avia-fullscreen-toggle avia-button[toggled]:hover{background-image:var(--avia-fs-exit-icon-hover)}";
		var AviaFullscreenToggle$1 = /*#__PURE__*/function (_H11) {
		  (0, _inherits2["default"])(AviaFullscreenToggle$1, _H11);
		  var _super12 = _createSuper(AviaFullscreenToggle$1);
		  function AviaFullscreenToggle$1() {
		    var _this24;
		    (0, _classCallCheck2["default"])(this, AviaFullscreenToggle$1);
		    _this24 = _super12.call(this);
		    _this24.__registerHost();
		    _this24.fullscreen = false;
		    _this24.fullscreenDisabled = true;
		    _this24.compact = false;
		    return _this24;
		  }
		  (0, _createClass2["default"])(AviaFullscreenToggle$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this25 = this;
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this25.focusElement = element;
		        },
		        ids: "".concat(exports.LocalizationId.FULL_SCREEN_ENTER, ", ").concat(exports.LocalizationId.FULL_SCREEN_EXIT),
		        actions: "".concat(Action.ENTER_FULLSCREEN, ", ").concat(Action.EXIT_FULLSCREEN),
		        disabled: this.fullscreenDisabled,
		        toggled: this.fullscreen,
		        compact: this.compact,
		        icon: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaFullscreenToggleCss;
		    }
		  }]);
		  return AviaFullscreenToggle$1;
		}(H);
		openWormhole(AviaFullscreenToggle$1, ['fullscreen', 'fullscreenDisabled']);
		var aviaLiveControlCss = "avia-live-control{display:inline-block;margin-right:var(--avia-default-spacing)}avia-live-control avia-button{width:auto;height:auto !important;font-size:0.9em;text-align:right;overflow:hidden}avia-live-control avia-button[disabled]{opacity:1;cursor:default}avia-live-control avia-button::before,avia-live-control avia-button[disabled]::before{content:'• ';color:red;font-size:0.9em}";
		var AviaLiveControl$1 = /*#__PURE__*/function (_H12) {
		  (0, _inherits2["default"])(AviaLiveControl$1, _H12);
		  var _super13 = _createSuper(AviaLiveControl$1);
		  function AviaLiveControl$1() {
		    var _this26;
		    (0, _classCallCheck2["default"])(this, AviaLiveControl$1);
		    _this26 = _super13.call(this);
		    _this26.__registerHost();
		    _this26.isLiveLinear = false;
		    _this26.isDvr = false;
		    _this26.live = false;
		    return _this26;
		  }
		  (0, _createClass2["default"])(AviaLiveControl$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this27 = this;
		      if (!(this.isLiveLinear || this.isDvr)) {
		        return;
		      }
		      var isLive = this.live || this.isLiveLinear;
		      var locId = isLive ? exports.LocalizationId.LIVE : exports.LocalizationId.GO_LIVE;
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this27.focusElement = element;
		        },
		        actions: "".concat(Action.NONE, ", ").concat(Action.GO_TO_LIVE),
		        toggled: !this.live,
		        disabled: isLive
		      }, h("avia-text", {
		        "loc-id": locId
		      }));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaLiveControlCss;
		    }
		  }]);
		  return AviaLiveControl$1;
		}(H);
		openWormhole(AviaLiveControl$1, ['isLiveLinear', 'live', 'isDvr']);
		var aviaMenuCss = "avia-menu{display:flex;flex-direction:column;font-size:0.95em;width:100%}.avia-menu-titlebar{padding-left:1em;color:var(--avia-accent-color);font-size:0.9em;font-weight:bold;height:2em;line-height:2em;background-color:black;border-bottom:1px solid #444}.avia-menu-content{scrollbar-width:thin;scrollbar-color:var(--avia-menu-text-color) transparent}.avia-menu-content::-webkit-scrollbar{width:8px;height:0}.avia-menu-content::-webkit-scrollbar-track{background-color:transparent}.avia-menu-content::-webkit-scrollbar-thumb{background-color:var(--avia-menu-text-color);border-radius:20px}.avia-menu-content::-webkit-scrollbar-thumb:hover{background-color:var(--avia-control-bar-btn-text-color-hover)}.avia-menu-content::-webkit-scrollbar-corner{background-color:transparent}";
		var __rest = function __rest(s, e) {
		  var t = {};
		  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
		  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
		    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
		  }
		  return t;
		};
		var AviaMenu$1 = /*#__PURE__*/function (_H13) {
		  (0, _inherits2["default"])(AviaMenu$1, _H13);
		  var _super14 = _createSuper(AviaMenu$1);
		  function AviaMenu$1() {
		    var _this28;
		    (0, _classCallCheck2["default"])(this, AviaMenu$1);
		    _this28 = _super14.call(this);
		    _this28.__registerHost();
		    _this28.hasSubmenu = false;
		    _this28.locId = undefined;
		    _this28.titlebar = false;
		    _this28.localeData = undefined;
		    _this28.options = [];
		    return _this28;
		  }
		  (0, _createClass2["default"])(AviaMenu$1, [{
		    key: "onAction",
		    value: function onAction(event) {
		      if (event.detail.action !== Action.LIST_ITEM_SELECT) {
		        return;
		      }
		      var _event$detail$value = event.detail.value,
		        key = _event$detail$value.key,
		        value = _event$detail$value.value;
		      var item = this.element.querySelector("[data-key=\"".concat(key, "\"][data-value=\"").concat(value, "\"]"));
		      if (item) {
		        this.selectListItem(item);
		      }
		    }
		  }, {
		    key: "onKeydown",
		    value: function onKeydown(event) {
		      var _a;
		      var code = event.keyCode;
		      switch (code) {
		        case KeyboardCode.ARROW_RIGHT:
		          if (!this.hasSubmenu) {
		            return;
		          }
		          (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.click();
		          break;
		      }
		    }
		  }, {
		    key: "selectListItem",
		    value: function selectListItem(element) {
		      var selected = this.element.querySelector('[selected]');
		      if (selected) {
		        selected.selected = false;
		        selected.disabled = false;
		      }
		      element.selected = true;
		    }
		  }, {
		    key: "createDataAttributes",
		    value: function createDataAttributes(data) {
		      return Object.entries(data).reduce(function (acc, entry) {
		        acc["data-".concat(entry[0])] = entry[1];
		        return acc;
		      }, {});
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this29 = this;
		      var _a;
		      var label = (_a = this.localeData) === null || _a === void 0 ? void 0 : _a[this.locId];
		      var action = this.hasSubmenu ? Action.MENU_ITEM_SELECT : Action.LIST_ITEM_SELECT;
		      return h(Host, {
		        "aria-label": label,
		        role: "menu"
		      }, this.titlebar && h("div", {
		        "class": "avia-menu-titlebar"
		      }, label), h("div", {
		        "class": "avia-menu-content"
		      }, this.options.map(function (option, index) {
		        var value = option.value,
		          attrs = __rest(option, ["value"]);
		        return h("avia-menu-item", Object.assign({
		          key: index,
		          ref: function ref(element) {
		            if (index === 0) {
		              _this29.focusElement = element;
		            }
		          }
		        }, attrs, {
		          hasSubmenu: _this29.hasSubmenu,
		          action: action
		        }, _this29.createDataAttributes(value)));
		      })));
		    }
		  }, {
		    key: "element",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaMenuCss;
		    }
		  }]);
		  return AviaMenu$1;
		}(H);
		openWormhole(AviaMenu$1, ['localeData']);
		var aviaMenuItemCss = "avia-menu-item{display:block;width:100%;height:auto;border:none;outline:none;text-align:left;color:var(--avia-menu-text-color);background-color:transparent;background-position:right center;background-repeat:no-repeat;background-size:20% 20%;margin:0}avia-menu-item:hover{color:var(--avia-menu-text-color-hover);background-color:rgba(0, 0, 0, 0.65)}avia-menu-item[aria-haspopup=true]{background-image:var(--avia-chevron-right)}avia-menu-item[disabled]{cursor:default;opacity:0.55}avia-menu-item[disabled]:hover{background-color:transparent;color:var(--avia-menu-text-color)}avia-menu-item[data-description] button:after{content:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAACG0lEQVQ4jZ2Vz0tVQRTHP89QKJ9lm6ikzN6zJAlxJ1E8CJO27oo2IdKmRdBWwRZhkH9A4kJoI7ppIUWkibRsERpILpQCF9lPLPpBQc+vTJ0Lh+lduc8Dw8z9zJlz5sw5MzcniR1IAegDDgJrwCjwvqKZ4CBDa5VUkrTf6YbNnZc0JemHpHFJtbGtrBF0AOeAI8AxYAp44OYvAo+BT0AJeFVtBEnbI2lI/+RZtOPDxsuSmnwEd4FG4E+06xxQa2c8DSy6uSKwYufeBnwxfgGYAZaBU0kEWeWJpONux822bjWK8qHx63+PX9J6FU5+SWp3xm4av+PYSWMh8XXhiNat3IIMA5+BGqAM1ANX7BgSCfotwG/T+wrkgV3AptMJNrviCNKSOxlF0ufm7hu77NiIsVs1UWJbUsr0EvDBffe48YL1JcdeW98bO9hO5lI28tb63Y6VrS9U48Dn4Z0b563fdCyX6MUONlKMXwU63fdzNy5Y/8axpGgexUnukLRPUqOkvZKKkgYqlOtRl9AlY82OLRvrjh38lPTdavhbyl245gy1G1t07IDTzWNvR1a5EZXviq1rdeyesZHkJr+QtLZNeylpzG6oNz5R4U4UjYXo6xIH1bYGSfNmqD9a+9H42YRlNV4v6bSkQUkLkp5KanPzh5zxXr82i/HwXoX3vdsS3Bm9qLetKEI1ndjpHy2W8P84Y09GEzAGzP6nBWwBc7kMbCgO6BoAAAAASUVORK5CYII=');left:0.4em;top:0.25em;position:relative}avia-menu-item[selected] button{font-weight:bold;cursor:default;background-position:94% center;background-repeat:no-repeat;background-size:0.9em;background-image:var(--avia-selected-icon);pointer-events:none}button{border:none;outline:none;width:100%;height:100%;padding:1em;margin:0;color:var(--avia-menu-text-color);background-color:transparent;text-align:left;cursor:pointer;font-size:var(--avia-menu-text-size)}button:focus-visible,button.focus-visible{outline:none;box-shadow:var(--avia-focus-box-shadow-inner)}button[aria-haspopup=true]{background-image:var(--avia-chevron-right);background-position:right center;background-repeat:no-repeat;background-size:20% 20%}";
		var AviaMenuItem$1 = /*#__PURE__*/function (_H14) {
		  (0, _inherits2["default"])(AviaMenuItem$1, _H14);
		  var _super15 = _createSuper(AviaMenuItem$1);
		  function AviaMenuItem$1() {
		    var _this30;
		    (0, _classCallCheck2["default"])(this, AviaMenuItem$1);
		    _this30 = _super15.call(this);
		    _this30.__registerHost();
		    _this30.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this30), "action", 7);
		    _this30.disabled = false;
		    _this30.selected = false;
		    _this30.label = '';
		    _this30.action = '';
		    _this30.hasSubmenu = false;
		    return _this30;
		  }
		  (0, _createClass2["default"])(AviaMenuItem$1, [{
		    key: "onClick",
		    value: function onClick(event) {
		      if (this.disabled || this.selected) {
		        return;
		      }
		      blockEvent(event);
		      this.actionEvent.emit({
		        action: this.action,
		        value: this.element.dataset
		      });
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      this.focusElement.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      this.focusElement.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this31 = this;
		      return h(Host, null, h("button", {
		        ref: function ref(element) {
		          return _this31.focusElement = element;
		        },
		        role: this.hasSubmenu ? 'menuitem' : 'menuitemradio',
		        "aria-haspopup": String(this.hasSubmenu),
		        "aria-checked": String(this.selected),
		        disabled: this.disabled
		      }, h("label", null, this.label), h("slot", null)));
		    }
		  }, {
		    key: "element",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaMenuItemCss;
		    }
		  }]);
		  return AviaMenuItem$1;
		}(H);
		var aviaMuteToggleCss = "avia-mute-toggle{display:inline-block}avia-mute-toggle avia-button{background-image:var(--avia-unmuted-icon)}avia-mute-toggle avia-button:hover{background-image:var(--avia-unmuted-icon-hover)}avia-mute-toggle avia-button[toggled]{background-image:var(--avia-mute-icon)}avia-mute-toggle avia-button[toggled]:hover{background-image:var(--avia-mute-icon-hover)}";
		var AviaMuteToggle$1 = /*#__PURE__*/function (_H15) {
		  (0, _inherits2["default"])(AviaMuteToggle$1, _H15);
		  var _super16 = _createSuper(AviaMuteToggle$1);
		  function AviaMuteToggle$1() {
		    var _this32;
		    (0, _classCallCheck2["default"])(this, AviaMuteToggle$1);
		    _this32 = _super16.call(this);
		    _this32.__registerHost();
		    _this32.muted = false;
		    _this32.muteDisabled = true;
		    _this32.compact = false;
		    return _this32;
		  }
		  (0, _createClass2["default"])(AviaMuteToggle$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this33 = this;
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this33.focusElement = element;
		        },
		        ids: "".concat(exports.LocalizationId.MUTE, ", ").concat(exports.LocalizationId.UNMUTE),
		        actions: "".concat(Action.MUTE, ", ").concat(Action.UNMUTE),
		        toggled: this.muted,
		        disabled: this.muteDisabled,
		        compact: this.compact,
		        icon: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaMuteToggleCss;
		    }
		  }]);
		  return AviaMuteToggle$1;
		}(H);
		openWormhole(AviaMuteToggle$1, ['muted', 'muteDisabled']);
		var aviaOverlayCss = "avia-overlay{background:transparent;position:absolute;width:100%;height:100%;top:0;left:0;border:none;padding:0;margin:0}avia-overlay[centered]{justify-content:center;align-items:center;display:flex}";
		var AviaOverlay$1 = /*#__PURE__*/function (_H16) {
		  (0, _inherits2["default"])(AviaOverlay$1, _H16);
		  var _super17 = _createSuper(AviaOverlay$1);
		  function AviaOverlay$1() {
		    var _this34;
		    (0, _classCallCheck2["default"])(this, AviaOverlay$1);
		    _this34 = _super17.call(this);
		    _this34.__registerHost();
		    _this34.centered = false;
		    return _this34;
		  }
		  (0, _createClass2["default"])(AviaOverlay$1, [{
		    key: "render",
		    value: function render() {
		      return h(Host, {
		        centered: this.centered
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaOverlayCss;
		    }
		  }]);
		  return AviaOverlay$1;
		}(H);
		var aviaPanelCss = "avia-panel{width:100%;height:100%}.avia-panel-titlebar{padding:0.5em 0.25em 0.5em 0.75em;color:var(--avia-accent-color);background-color:black;border-bottom:1px solid #444;display:flex;align-items:center;justify-content:center;font-weight:bold}.avia-panel-close-button{width:1.75em;height:2em;background-image:var(--avia-x-symbol);background-repeat:no-repeat;padding:0px}.avia-panel-back-button{width:1.75em;height:1.75em;background-image:var(--avia-chevron-right);background-repeat:no-repeat;background-size:47.5% 47.5%;transform:rotate(180deg);margin-right:1em}.avia-panel-content{display:flex;flex-direction:row;overflow:hidden}.avia-panel-content>div{width:180px;color:var(--avia-menu-text-color)}.avia-panel-content>div:first-child{border-right:1px solid #888}.avia-panel-content>div:only-child{border-right:none}";
		var AviaPanel$1 = /*#__PURE__*/function (_H17) {
		  (0, _inherits2["default"])(AviaPanel$1, _H17);
		  var _super18 = _createSuper(AviaPanel$1);
		  function AviaPanel$1() {
		    var _this35;
		    (0, _classCallCheck2["default"])(this, AviaPanel$1);
		    _this35 = _super18.call(this);
		    _this35.__registerHost();
		    _this35.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this35), "action", 7);
		    _this35.titlebar = true;
		    _this35.back = false;
		    _this35.locId = undefined;
		    _this35.localeData = undefined;
		    return _this35;
		  }
		  (0, _createClass2["default"])(AviaPanel$1, [{
		    key: "emit",
		    value: function emit(action) {
		      this.actionEvent.emit({
		        action: action,
		        value: this.element.dataset
		      });
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this36 = this;
		      var _a;
		      var label = (_a = this.localeData) === null || _a === void 0 ? void 0 : _a[this.locId];
		      return h("avia-control-group", {
		        orientation: Orientation.VERTICAL
		      }, this.titlebar && h("avia-control-group", {
		        "class": "avia-panel-titlebar",
		        orientation: Orientation.HORIZONTAL
		      }, this.back && h("avia-button", {
		        "loc-id": exports.LocalizationId.BACK,
		        "class": "avia-panel-back-button",
		        disabled: false,
		        onClick: function onClick() {
		          return _this36.emit(Action.PANEL_BACK);
		        },
		        icon: true
		      }), h("span", null, label), h("span", {
		        "class": "avia-spacer"
		      }), h("avia-button", {
		        "loc-id": exports.LocalizationId.CLOSE,
		        "class": "avia-panel-close-button",
		        disabled: false,
		        onClick: function onClick() {
		          return _this36.emit(Action.PANEL_CLOSE);
		        },
		        icon: true
		      })), h("div", {
		        "class": "avia-panel-content"
		      }, h("slot", null)));
		    }
		  }, {
		    key: "element",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaPanelCss;
		    }
		  }]);
		  return AviaPanel$1;
		}(H);
		openWormhole(AviaPanel$1, ['localeData']);
		var aviaPauseOverlayCss = ":root{--avia-pause-large-width:66px;--avia-pause-large-height:66px;--avia-pause-large-border-radius:calc(var(--avia-pause-large-width) / 2);--avia-pause-large-bg-image:var(--avia-pause-icon);--avia-pause-large-bg-position:50%;--avia-pause-large-bg-color:rgba(64, 64, 64, 0.5);--avia-pause-large-bg-size:calc(var(--avia-pause-large-width) / 2) calc(var(--avia-pause-large-height) / 2)}avia-pause-overlay div{width:var(--avia-pause-large-width);height:var(--avia-pause-large-height);background-image:var(--avia-pause-large-bg-image);background-repeat:no-repeat;background-position-x:calc(var(--avia-pause-large-bg-position) + 6%);background-position-y:var(--avia-pause-large-bg-position);background-size:var(--avia-pause-large-bg-size)}";
		var AviaPauseOverlay$1 = /*#__PURE__*/function (_H18) {
		  (0, _inherits2["default"])(AviaPauseOverlay$1, _H18);
		  var _super19 = _createSuper(AviaPauseOverlay$1);
		  function AviaPauseOverlay$1() {
		    var _this37;
		    (0, _classCallCheck2["default"])(this, AviaPauseOverlay$1);
		    _this37 = _super19.call(this);
		    _this37.__registerHost();
		    _this37.started = false;
		    _this37.playing = false;
		    _this37.waiting = false;
		    return _this37;
		  }
		  (0, _createClass2["default"])(AviaPauseOverlay$1, [{
		    key: "render",
		    value: function render() {
		      if (!this.started || this.waiting || this.playing) {
		        this.started = true;
		        return;
		      }
		      return h("avia-overlay", {
		        centered: true
		      }, h("div", null));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaPauseOverlayCss;
		    }
		  }]);
		  return AviaPauseOverlay$1;
		}(H);
		openWormhole(AviaPauseOverlay$1, ['playing', 'waiting']);
		var aviaPlayCtaCss = "avia-play-cta avia-button{width:var(--avia-play-cta-width);height:var(--avia-play-cta-height);border-radius:var(--avia-play-cta-border-radius);background-image:var(--avia-play-cta-bg-image);background-color:var(--avia-play-cta-bg-color);background-repeat:no-repeat;background-position-x:calc(var(--avia-play-cta-bg-position) + 6%);background-position-y:var(--avia-play-cta-bg-position);background-size:var(--avia-play-cta-bg-size);cursor:pointer}";
		var AviaPlayCta$1 = /*#__PURE__*/function (_H19) {
		  (0, _inherits2["default"])(AviaPlayCta$1, _H19);
		  var _super20 = _createSuper(AviaPlayCta$1);
		  function AviaPlayCta$1() {
		    var _this38;
		    (0, _classCallCheck2["default"])(this, AviaPlayCta$1);
		    _this38 = _super20.call(this);
		    _this38.__registerHost();
		    return _this38;
		  }
		  (0, _createClass2["default"])(AviaPlayCta$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this39 = this;
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this39.focusElement = element;
		        },
		        disabled: false,
		        actions: Action.PLAY,
		        "loc-id": exports.LocalizationId.PLAY
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaPlayCtaCss;
		    }
		  }]);
		  return AviaPlayCta$1;
		}(H);
		var aviaPlayOverlayCss = "avia-play-overlay{background-color:var(--avia-play-overlay-bg-color)}avia-play-overlay.focus-visible avia-play-cta{box-shadow:var(--avia-focus-box-shadow-inner)}";
		var AviaPlayOverlay$1 = /*#__PURE__*/function (_H20) {
		  (0, _inherits2["default"])(AviaPlayOverlay$1, _H20);
		  var _super21 = _createSuper(AviaPlayOverlay$1);
		  function AviaPlayOverlay$1() {
		    var _this40;
		    (0, _classCallCheck2["default"])(this, AviaPlayOverlay$1);
		    _this40 = _super21.call(this);
		    _this40.__registerHost();
		    _this40.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this40), "action", 7);
		    _this40.playing = false;
		    _this40.controlMode = ControlMode.NONE;
		    _this40.playDisabled = true;
		    _this40.pausable = true;
		    _this40.isTouch = false;
		    return _this40;
		  }
		  (0, _createClass2["default"])(AviaPlayOverlay$1, [{
		    key: "onClick",
		    value: function onClick() {
		      var action = this.playing ? Action.PAUSE : Action.PLAY;
		      this.actionEvent.emit({
		        action: action
		      });
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this41 = this;
		      var paused = !this.playing;
		      var noTouch = !paused && this.isTouch;
		      if (noTouch || this.playDisabled || !this.pausable || this.controlMode !== ControlMode.CONTENT) {
		        return;
		      }
		      return h("avia-overlay", {
		        centered: true
		      }, paused && h("avia-play-cta", {
		        ref: function ref(element) {
		          return _this41.focusElement = element;
		        }
		      }));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaPlayOverlayCss;
		    }
		  }]);
		  return AviaPlayOverlay$1;
		}(H);
		openWormhole(AviaPlayOverlay$1, ['playing', 'playDisabled', 'pausable', 'controlMode', 'isTouch']);
		var aviaPlayToggleCss = "avia-play-toggle{display:inline-block}avia-play-toggle avia-button{background-image:var(--avia-play-icon)}avia-play-toggle avia-button:hover{background-image:var(--avia-play-icon-hover)}avia-play-toggle avia-button[toggled]{background-image:var(--avia-pause-icon)}avia-play-toggle avia-button[toggled]:hover{background-image:var(--avia-pause-icon-hover)}avia-play-toggle avia-button[toggled][variant]{background-image:var(--avia-stop-icon)}avia-play-toggle avia-button[toggled][variant]:hover{background-image:var(--avia-stop-icon-hover)}";
		var AviaPlayToggle$1 = /*#__PURE__*/function (_H21) {
		  (0, _inherits2["default"])(AviaPlayToggle$1, _H21);
		  var _super22 = _createSuper(AviaPlayToggle$1);
		  function AviaPlayToggle$1() {
		    var _this42;
		    (0, _classCallCheck2["default"])(this, AviaPlayToggle$1);
		    _this42 = _super22.call(this);
		    _this42.__registerHost();
		    _this42.playing = false;
		    _this42.playDisabled = true;
		    _this42.pausable = undefined;
		    _this42.compact = false;
		    return _this42;
		  }
		  (0, _createClass2["default"])(AviaPlayToggle$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this43 = this;
		      var paused = !this.playing;
		      var ids = [exports.LocalizationId.PLAY, this.pausable ? exports.LocalizationId.PAUSE : exports.LocalizationId.STOP];
		      var actions = [Action.PLAY, this.pausable ? Action.PAUSE : Action.STOP];
		      var locId = paused ? this.pausable ? exports.LocalizationId.PAUSE : exports.LocalizationId.STOP : exports.LocalizationId.PLAY;
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this43.focusElement = element;
		        },
		        ids: ids.join(','),
		        actions: actions.join(','),
		        disabled: this.playDisabled,
		        "loc-id": locId,
		        toggled: this.playing,
		        compact: this.compact,
		        variant: !this.pausable,
		        icon: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaPlayToggleCss;
		    }
		  }]);
		  return AviaPlayToggle$1;
		}(H);
		openWormhole(AviaPlayToggle$1, ['playing', 'playDisabled', 'pausable']);
		var aviaPosterCss = "avia-poster img{width:100%;height:auto}";
		var AviaPoster$1 = /*#__PURE__*/function (_H22) {
		  (0, _inherits2["default"])(AviaPoster$1, _H22);
		  var _super23 = _createSuper(AviaPoster$1);
		  function AviaPoster$1() {
		    var _this44;
		    (0, _classCallCheck2["default"])(this, AviaPoster$1);
		    _this44 = _super23.call(this);
		    _this44.__registerHost();
		    _this44.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this44), "action", 7);
		    _this44.canceled = false;
		    _this44.posterActive = false;
		    _this44.posterImageUrl = undefined;
		    _this44.playing = false;
		    _this44.waiting = false;
		    return _this44;
		  }
		  (0, _createClass2["default"])(AviaPoster$1, [{
		    key: "playingStateWatcher",
		    value: function playingStateWatcher() {
		      this.canceled = true;
		    }
		  }, {
		    key: "waitingStateWatcher",
		    value: function waitingStateWatcher() {
		      this.canceled = true;
		    }
		  }, {
		    key: "handleAction",
		    value: function handleAction(event) {
		      this.canceled = true;
		      this.actionEvent.emit({
		        action: Action.POSTER_PLAY
		      });
		      blockEvent(event);
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      if (this.canceled || !this.posterActive) {
		        return '';
		      }
		      return h("avia-overlay", null, !isEmpty(this.posterImageUrl) ? h("img", {
		        src: this.posterImageUrl,
		        alt: ""
		      }) : '', h("div", {
		        "class": ""
		      }, h("slot", null)), h("avia-overlay", {
		        centered: true
		      }, h("avia-play-cta", null)));
		    }
		  }], [{
		    key: "watchers",
		    get: function get() {
		      return {
		        "playing": ["playingStateWatcher"],
		        "waiting": ["waitingStateWatcher"]
		      };
		    }
		  }, {
		    key: "style",
		    get: function get() {
		      return aviaPosterCss;
		    }
		  }]);
		  return AviaPoster$1;
		}(H);
		openWormhole(AviaPoster$1, ['posterActive', 'posterImageUrl', 'playing', 'waiting']);
		var aviaProgressBarCss = ":root{--avia-progress-preview-height:24px;--avia-progress-preview-width:50px;--avia-progress-preview-line-height:24px;--avia-progress-preview-top:-34px;--avia-progress-preview-bg-color:rgba(44, 44, 44, 0.7);--avia-progress-preview-color:rgb(220, 220, 220);--avia-progress-preview-font-size:13px;--avia-progress-preview-border-radius:4px}avia-progress-bar .avia-slider-range-item{background-color:var(--avia-buffered-range-background-color)}.avia-progress-preview{position:absolute;line-height:var(--avia-progress-preview-line-height);background:var(--avia-progress-preview-bg-color);color:var(--avia-progress-preview-color);font-size:var(--avia-progress-preview-font-size);text-align:center;border-radius:var(--avia-progress-preview-border-radius);user-select:none;overflow:hidden}.avia-progress-text{padding:0 0.5em 0 0.5em;white-space:nowrap}";
		var AviaProgressBar$1 = /*#__PURE__*/function (_H23) {
		  (0, _inherits2["default"])(AviaProgressBar$1, _H23);
		  var _super24 = _createSuper(AviaProgressBar$1);
		  function AviaProgressBar$1() {
		    var _this45;
		    (0, _classCallCheck2["default"])(this, AviaProgressBar$1);
		    _this45 = _super24.call(this);
		    _this45.__registerHost();
		    _this45.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this45), "action", 7);
		    _this45.updateEvent = createEvent((0, _assertThisInitialized2["default"])(_this45), "update", 7);
		    _this45.hoverDelay = 250;
		    _this45.imgElement = document.createElement('img');
		    _this45.dragging = false;
		    _this45.bufferedRanges = undefined;
		    _this45.currentTimeSeconds = undefined;
		    _this45.durationSeconds = undefined;
		    _this45.localeData = undefined;
		    _this45.segmentBreakPositions = undefined;
		    _this45.preview = undefined;
		    _this45.increment = 15;
		    _this45.live = false;
		    _this45.hovering = false;
		    _this45.cursor = 0;
		    _this45.value = 0;
		    return _this45;
		  }
		  (0, _createClass2["default"])(AviaProgressBar$1, [{
		    key: "onCurrentTimeSeconds",
		    value: function onCurrentTimeSeconds() {
		      this.value = this.live ? this.durationSeconds : this.currentTimeSeconds;
		    }
		  }, {
		    key: "onMouseEnter",
		    value: function onMouseEnter(event) {
		      var _this46 = this;
		      clearTimeout(this.hoverTimeoutHandle);
		      this.hoverTimeoutHandle = setTimeout(function () {
		        _this46.hovering = true;
		        _this46.onMouseMove(event);
		      }, this.hoverDelay);
		    }
		  }, {
		    key: "onMouseLeave",
		    value: function onMouseLeave() {
		      clearTimeout(this.hoverTimeoutHandle);
		      this.hovering = false;
		    }
		  }, {
		    key: "onMouseMove",
		    value: function onMouseMove(event) {
		      if (!this.active) {
		        return;
		      }
		      var offset = this.sliderElement.getBoundingClientRect();
		      var pos = getEventPos(event).x - offset.left;
		      var percent = clampValue(pos / offset.width, 0, 1);
		      this.actionEvent.emit({
		        action: Action.PREVIEW,
		        value: {
		          time: percent * this.durationSeconds,
		          percent: percent
		        }
		      });
		      this.cursor = clampValue(pos, 0, offset.width);
		    }
		  }, {
		    key: "active",
		    get: function get() {
		      return this.hovering || this.dragging;
		    }
		  }, {
		    key: "onChange",
		    value: function onChange(event) {
		      this.actionEvent.emit({
		        action: Action.SEEK,
		        value: event.detail.value
		      });
		    }
		  }, {
		    key: "onDragging",
		    value: function onDragging(event) {
		      this.dragging = event.detail.value;
		    }
		  }, {
		    key: "hasPreview",
		    value: function hasPreview() {
		      var _a, _b;
		      return !!((_b = (_a = this.preview) === null || _a === void 0 ? void 0 : _a.thumbs) === null || _b === void 0 ? void 0 : _b.length);
		    }
		  }, {
		    key: "componentDidRender",
		    value: function componentDidRender() {
		      var _this47 = this;
		      var slider = this.sliderElement;
		      var parentWidth = slider.offsetWidth;
		      if (this.hasPreview()) {
		        var thumbnailWidth = parentWidth * this.preview.thumbnailScaleFactor;
		        var img = this.imgElement;
		        var thumb = this.preview.thumbs.reduce(function (acc, thumb) {
		          if (!acc) {
		            return thumb;
		          }
		          var current = Math.abs(thumbnailWidth - acc.width);
		          var target = Math.abs(thumbnailWidth - thumb.width);
		          if (current > target) {
		            return thumb;
		          }
		          return acc;
		        }, null);
		        var draw = function draw() {
		          var canvas = _this47.canvasElement;
		          var scale = Math.min(thumbnailWidth / thumb.width, 1);
		          var context = canvas.getContext('2d');
		          var width = thumb.width * scale;
		          var height = thumb.height * scale;
		          canvas.width = width;
		          canvas.height = height;
		          context.drawImage(img, thumb.x, thumb.y, thumb.width, thumb.height, 0, 0, width, height);
		        };
		        if (thumb) {
		          if (img.src !== thumb.url) {
		            img.src = thumb.url;
		            img.onload = draw;
		          } else {
		            draw();
		          }
		        }
		      }
		      var preview = this.previewElement;
		      var margin = preview.offsetWidth / 2;
		      var max = parentWidth - margin;
		      var offset = this.cursor < margin ? margin - this.cursor : this.cursor > max ? max - this.cursor : 0;
		      preview.style.marginLeft = "".concat(offset - margin, "px");
		      preview.style.top = "-".concat(preview.offsetHeight + slider.offsetHeight / 2, "px");
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      this.sliderElement.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      this.sliderElement.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this48 = this;
		      var _a;
		      var ariaValueText = this.localeData ? valueOfTotal(this.value, this.durationSeconds, this.localeData) : '';
		      var list = csvToArray(this.segmentBreakPositions).map(function (i) {
		        return {
		          value: parseFloat(i)
		        };
		      });
		      return h("avia-slider", {
		        ref: function ref(e) {
		          return _this48.sliderElement = e;
		        },
		        "loc-id": exports.LocalizationId.SEEK,
		        "aria-valuetext": ariaValueText,
		        list: list,
		        value: this.value,
		        max: this.durationSeconds,
		        ranges: this.bufferedRanges,
		        increment: this.increment,
		        onChange: function onChange(event) {
		          return _this48.onChange(event);
		        },
		        onDragging: function onDragging(event) {
		          return _this48.onDragging(event);
		        }
		      }, h("div", {
		        ref: function ref(e) {
		          return _this48.previewElement = e;
		        },
		        "class": "avia-progress-preview",
		        style: {
		          visibility: this.active ? 'visible' : 'hidden',
		          left: "".concat(this.cursor, "px")
		        }
		      }, h("canvas", {
		        ref: function ref(e) {
		          return _this48.canvasElement = e;
		        },
		        "class": "avia-progress-img",
		        style: {
		          display: this.hasPreview() && this.imgElement.complete ? 'block' : 'none'
		        }
		      }), h("div", {
		        ref: function ref(e) {
		          return _this48.textElement = e;
		        },
		        "class": "avia-progress-text"
		      }, (_a = this.preview) === null || _a === void 0 ? void 0 : _a.value)));
		    }
		  }], [{
		    key: "watchers",
		    get: function get() {
		      return {
		        "currentTimeSeconds": ["onCurrentTimeSeconds"],
		        "live": ["onCurrentTimeSeconds"]
		      };
		    }
		  }, {
		    key: "style",
		    get: function get() {
		      return aviaProgressBarCss;
		    }
		  }]);
		  return AviaProgressBar$1;
		}(H);
		openWormhole(AviaProgressBar$1, ['bufferedRanges', 'currentTimeSeconds', 'durationSeconds', 'live', 'localeData', 'seekDisabled', 'segmentBreakPositions', 'preview']);
		var aviaSeekBackButtonCss = "avia-seek-back-button{display:inline-block}avia-seek-back-button avia-button{background-image:var(--avia-seek-back-icon)}avia-seek-back-button avia-button:hover{background-image:var(--avia-seek-back-icon-hover)}";
		var AviaSeekBackButton$1 = /*#__PURE__*/function (_H24) {
		  (0, _inherits2["default"])(AviaSeekBackButton$1, _H24);
		  var _super25 = _createSuper(AviaSeekBackButton$1);
		  function AviaSeekBackButton$1() {
		    var _this49;
		    (0, _classCallCheck2["default"])(this, AviaSeekBackButton$1);
		    _this49 = _super25.call(this);
		    _this49.__registerHost();
		    _this49.seekBackDisabled = false;
		    _this49.isLiveLinear = false;
		    return _this49;
		  }
		  (0, _createClass2["default"])(AviaSeekBackButton$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this50 = this;
		      if (this.isLiveLinear) {
		        return '';
		      }
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this50.focusElement = element;
		        },
		        actions: Action.SEEK_BACK,
		        disabled: this.seekBackDisabled,
		        "loc-id": exports.LocalizationId.SEEK_BACK,
		        icon: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSeekBackButtonCss;
		    }
		  }]);
		  return AviaSeekBackButton$1;
		}(H);
		openWormhole(AviaSeekBackButton$1, ['seekBackDisabled', 'isLiveLinear']);
		var aviaSeekForwardButtonCss = "avia-seek-forward-button{display:inline-block}avia-seek-forward-button avia-button{background-image:var(--avia-seek-forward-icon)}avia-seek-forward-button avia-button:hover{background-image:var(--avia-seek-forward-icon-hover)}";
		var AviaSeekForwardButton$1 = /*#__PURE__*/function (_H25) {
		  (0, _inherits2["default"])(AviaSeekForwardButton$1, _H25);
		  var _super26 = _createSuper(AviaSeekForwardButton$1);
		  function AviaSeekForwardButton$1() {
		    var _this51;
		    (0, _classCallCheck2["default"])(this, AviaSeekForwardButton$1);
		    _this51 = _super26.call(this);
		    _this51.__registerHost();
		    _this51.seekForwardDisabled = false;
		    _this51.isLiveLinear = false;
		    return _this51;
		  }
		  (0, _createClass2["default"])(AviaSeekForwardButton$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this52 = this;
		      if (this.isLiveLinear) {
		        return '';
		      }
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this52.focusElement = element;
		        },
		        actions: Action.SEEK_FORWARD,
		        disabled: this.seekForwardDisabled,
		        "loc-id": exports.LocalizationId.SEEK_FORWARD,
		        icon: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSeekForwardButtonCss;
		    }
		  }]);
		  return AviaSeekForwardButton$1;
		}(H);
		openWormhole(AviaSeekForwardButton$1, ['seekForwardDisabled', 'isLiveLinear']);
		var aviaSeekIndicatorCss = "avia-seek-indicator{position:absolute;display:inline-block;box-sizing:border-box;border-radius:var(--avia-seek-indicator-border-radius);background-color:var(--avia-seek-indicator-background-color);color:var(--avia-seek-indicator-color);height:var(--avia-seek-indicator-height);font-size:var(--avia-seek-indicator-font-size);font-family:var(--avia-seek-indicator-font-family);line-height:var(--avia-seek-indicator-line-height);top:calc(50% - 24px);opacity:0;transition-property:opacity;transition-duration:300ms;transition-timing-function:ease-in}avia-seek-indicator.avia-indicator-active{opacity:1}avia-seek-indicator:empty{opacity:0}.avia-acc-fwd{right:12px;padding-left:48px;padding-right:12px;text-align:right}.avia-acc-back{left:12px;padding-right:48px;padding-left:12px}avia-seek-indicator .avia-acc-arrow{width:24px;height:18px;position:absolute;top:calc(50% - 9px);background-image:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2017.81%2024%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Layer_2%22%20data-name%3D%22Layer%202%22%3E%3Cg%20id%3D%22Layer_2-2%22%20data-name%3D%22Layer%202%22%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M0%2C6.55V17.79a.54.54%2C0%2C0%2C0%2C.54.54l5.15-.08a.54.54%2C0%2C0%2C1%2C.54.54v4.67a.54.54%2C0%2C0%2C0%2C.92.38l10.51-11.2a.56.56%2C0%2C0%2C0%2C0-.76L7.25.17a.54.54%2C0%2C0%2C0-.93.37V5.39a.54.54%2C0%2C0%2C1-.54.54L.54%2C6A.54.54%2C0%2C0%2C0%2C0%2C6.55Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');background-repeat:no-repeat;background-size:24px 18px}.avia-acc-fwd .avia-acc-arrow{left:12px}.avia-acc-back .avia-acc-arrow{transform:rotate(180deg);right:12px}";
		var AviaSeekIndicator$1 = /*#__PURE__*/function (_H26) {
		  (0, _inherits2["default"])(AviaSeekIndicator$1, _H26);
		  var _super27 = _createSuper(AviaSeekIndicator$1);
		  function AviaSeekIndicator$1() {
		    var _this53;
		    (0, _classCallCheck2["default"])(this, AviaSeekIndicator$1);
		    _this53 = _super27.call(this);
		    _this53.__registerHost();
		    _this53.durationSeconds = undefined;
		    _this53.accIndicatorState = undefined;
		    return _this53;
		  }
		  (0, _createClass2["default"])(AviaSeekIndicator$1, [{
		    key: "componentDidRender",
		    value: function componentDidRender() {
		      var _this54 = this;
		      if (!this.debouncer && this.accIndicatorState.displayTime > 0) {
		        this.debouncer = debounce(function () {
		          var _a;
		          (_a = _this54.el) === null || _a === void 0 ? void 0 : _a.classList.remove(CssNames.INDICATOR_ACTIVE);
		          _this54.visible = false;
		        }, this.accIndicatorState.displayTime);
		      }
		      if (this.visible) {
		        setTimeout(function () {
		          return _this54.el.classList.add(CssNames.INDICATOR_ACTIVE);
		        }, 0);
		        this.debouncer && this.debouncer();
		      }
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var acc = this.accIndicatorState;
		      if (!acc.seekForward && !acc.seekBack) {
		        this.visible = false;
		        return '';
		      }
		      this.visible = true;
		      var t = this.accIndicatorState.seekTime;
		      var d = this.durationSeconds;
		      var hasD = d && !isNaN(d);
		      var str = '';
		      if (hasD) {
		        var dur = secToHms(d);
		        if (!isNaN(t) && t >= 0) {
		          var p = secToHms(t);
		          str = p + ' / ' + dur;
		        }
		      }
		      return h(Host, {
		        "class": acc.seekForward ? CssNames.ACC_FWD : CssNames.ACC_BACK
		      }, h("span", null, str), h("div", {
		        "class": 'avia-acc-arrow'
		      }));
		    }
		  }, {
		    key: "el",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSeekIndicatorCss;
		    }
		  }]);
		  return AviaSeekIndicator$1;
		}(H);
		openWormhole(AviaSeekIndicator$1, ['durationSeconds', 'accIndicatorState']);
		var aviaSettingsCss = ":root{--avia-chevron-right:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22white%22%3E%3Cpath%20id%3D%22Arrow_2_1%22%20d%3D%22M0%2C24L14.4%2C11.556%2C0%2C0%2C6.74%2C0%2C24%2C11.556%2C6.74%2C24Z%22%2F%3E%3C%2Fsvg%3E');--avia-x-symbol:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2012%2012%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cstyle%3Etspan%20%7B%20white-space%3Apre%20%7D%3C%2Fstyle%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M0.07%202.19L2.26%200L5.91%203.65L9.56%200L11.75%202.19L8.1%205.84L11.75%209.49L9.56%2011.68L5.91%208.03L2.26%2011.68L0.07%209.49L3.72%205.84L0.07%202.19Z%22%20%2F%3E%3C%2Fsvg%3E');--avia-menu-text-color:var(--avia-text-color);--avia-menu-text-size:var(--avia-text-size);--avia-menu-text-color-hover:var(--avia-text-color-hover)}avia-settings{display:flex;align-self:flex-end;pointer-events:none;min-width:180px;height:auto;background-color:rgba(0, 0, 0, 0.65);flex-direction:column;max-height:calc(100% - 1em - var(--avia-control-bar-height));border-radius:0.25em;overflow:hidden;position:absolute;bottom:64px;right:var(--avia-default-spacing)}avia-settings>*{pointer-events:auto}.avia-settings-nudge-left avia-settings{right:calc(var(--avia-default-spacing) + 48px)}[device-mode=tv] avia-settings{bottom:118px}";
		var AviaSettings$1 = /*#__PURE__*/function (_H27) {
		  (0, _inherits2["default"])(AviaSettings$1, _H27);
		  var _super28 = _createSuper(AviaSettings$1);
		  function AviaSettings$1() {
		    var _this55;
		    (0, _classCallCheck2["default"])(this, AviaSettings$1);
		    _this55 = _super28.call(this);
		    _this55.__registerHost();
		    _this55.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this55), "action", 7);
		    _this55.settings = null;
		    _this55.localeData = null;
		    _this55.controlMode = null;
		    _this55.deviceMode = exports.DeviceMode.DESKTOP;
		    _this55.currentId = exports.LocalizationId.SETTINGS;
		    _this55.menu = undefined;
		    return _this55;
		  }
		  (0, _createClass2["default"])(AviaSettings$1, [{
		    key: "onMenuChange",
		    value: function onMenuChange(newValue) {
		      var _this56 = this;
		      // TODO: Find a way to do that doesn't involve a timeout.
		      clearTimeout(this.timeout);
		      if (newValue) {
		        this.timeout = setTimeout(function () {
		          var _a;
		          (_a = _this56.menu) === null || _a === void 0 ? void 0 : _a.focus();
		        }, 50);
		      }
		    }
		  }, {
		    key: "onAction",
		    value: function onAction(e) {
		      switch (e.detail.action) {
		        case Action.PANEL_BACK:
		          this.currentId = exports.LocalizationId.SETTINGS;
		          break;
		        case Action.PANEL_CLOSE:
		          this.close();
		          break;
		        case Action.MENU_ITEM_SELECT:
		          this.currentId = e.detail.value.action;
		          break;
		      }
		    }
		  }, {
		    key: "onKeyDown",
		    value: function onKeyDown(event) {
		      var _a;
		      if (!((_a = this.settings) === null || _a === void 0 ? void 0 : _a.active)) {
		        return;
		      }
		      switch (event.key) {
		        case 'Escape':
		          this.close();
		          break;
		      }
		    }
		  }, {
		    key: "close",
		    value: function () {
		      var _close = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
		        return _regenerator["default"].wrap(function _callee7$(_context7) {
		          while (1) switch (_context7.prev = _context7.next) {
		            case 0:
		              this.actionEvent.emit({
		                action: Action.SETTINGS_OFF
		              });
		            case 1:
		            case "end":
		              return _context7.stop();
		          }
		        }, _callee7, this);
		      }));
		      function close() {
		        return _close.apply(this, arguments);
		      }
		      return close;
		    }()
		  }, {
		    key: "disconnectedCallback",
		    value: function disconnectedCallback() {
		      clearTimeout(this.timeout);
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this57 = this;
		      var _a, _b;
		      if (!((_a = this.settings) === null || _a === void 0 ? void 0 : _a.active) || !this.localeData) {
		        return;
		      }
		      if (this.controlMode !== ControlMode.CONTENT && ((_b = this.settings) === null || _b === void 0 ? void 0 : _b.active)) {
		        this.close();
		        return;
		      }
		      if (this.deviceMode === exports.DeviceMode.TV) {
		        return h("avia-settings-language", {
		          ref: function ref(element) {
		            return _this57.menu = element;
		          }
		        });
		      }
		      return h("avia-panel", {
		        locId: this.currentId,
		        back: this.currentId !== exports.LocalizationId.SETTINGS
		      }, this.getMenu());
		    }
		  }, {
		    key: "getMenu",
		    value: function getMenu() {
		      var _this58 = this;
		      var _a;
		      switch (this.currentId) {
		        case exports.LocalizationId.SETTINGS:
		          var options = [{
		            label: this.localeData[exports.LocalizationId.LANGUAGE],
		            value: {
		              action: exports.LocalizationId.LANGUAGE
		            },
		            disabled: !(this.settings.textTrack || this.settings.audioTrack)
		          }, {
		            label: this.localeData[exports.LocalizationId.QUALITY],
		            value: {
		              action: exports.LocalizationId.QUALITY
		            },
		            disabled: !(((_a = this.settings.qualities) === null || _a === void 0 ? void 0 : _a.length) > 0)
		          }];
		          return h("avia-menu", {
		            ref: function ref(element) {
		              return _this58.menu = element;
		            },
		            locId: exports.LocalizationId.SETTINGS,
		            key: exports.LocalizationId.SETTINGS,
		            options: options,
		            titlebar: false,
		            hasSubmenu: true
		          });
		        case exports.LocalizationId.LANGUAGE:
		          return h("avia-settings-language", {
		            ref: function ref(element) {
		              return _this58.menu = element;
		            },
		            key: exports.LocalizationId.LANGUAGE
		          });
		        case exports.LocalizationId.QUALITY:
		          return h("avia-settings-quality", {
		            key: exports.LocalizationId.QUALITY,
		            ref: function ref(element) {
		              return _this58.menu = element;
		            }
		          });
		      }
		    }
		  }], [{
		    key: "watchers",
		    get: function get() {
		      return {
		        "menu": ["onMenuChange"]
		      };
		    }
		  }, {
		    key: "style",
		    get: function get() {
		      return aviaSettingsCss;
		    }
		  }]);
		  return AviaSettings$1;
		}(H);
		openWormhole(AviaSettings$1, ['controlMode', 'deviceMode', 'localeData', 'settings']);
		var aviaSettingsAudioCss = "";
		var AviaSettingsAudio$1 = /*#__PURE__*/function (_H28) {
		  (0, _inherits2["default"])(AviaSettingsAudio$1, _H28);
		  var _super29 = _createSuper(AviaSettingsAudio$1);
		  function AviaSettingsAudio$1() {
		    var _this59;
		    (0, _classCallCheck2["default"])(this, AviaSettingsAudio$1);
		    _this59 = _super29.call(this);
		    _this59.__registerHost();
		    _this59.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this59), "action", 7);
		    _this59.localeData = undefined;
		    _this59.settings = undefined;
		    return _this59;
		  }
		  (0, _createClass2["default"])(AviaSettingsAudio$1, [{
		    key: "onAction",
		    value: function onAction(e) {
		      switch (e.detail.action) {
		        case Action.LIST_ITEM_SELECT:
		          var _e$detail$value = e.detail.value,
		            key = _e$detail$value.key,
		            value = _e$detail$value.value;
		          this.actionEvent.emit({
		            action: Action.LANGUAGE_SELECT,
		            value: {
		              trackType: key,
		              trackId: value
		            }
		          });
		          break;
		      }
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this60 = this;
		      var _this$settings = this.settings,
		        audioTrack = _this$settings.audioTrack,
		        audioTracks = _this$settings.audioTracks;
		      var selected = audioTrack === null || audioTrack === void 0 ? void 0 : audioTrack.index;
		      var options = audioTracks.map(function (track) {
		        return {
		          selected: track.index === selected,
		          disabled: audioTracks.length === 1,
		          label: getLangLabel(track.language) || _this60.localeData[exports.LocalizationId.UNKNOWN],
		          value: {
		            key: 'audio',
		            value: track.id,
		            description: track.type === 'description'
		          }
		        };
		      });
		      if (!(options === null || options === void 0 ? void 0 : options.length)) {
		        return;
		      }
		      return h("avia-menu", {
		        ref: function ref(element) {
		          return _this60.focusElement = element;
		        },
		        locId: exports.LocalizationId.AUDIO,
		        options: options,
		        titlebar: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSettingsAudioCss;
		    }
		  }]);
		  return AviaSettingsAudio$1;
		}(H);
		openWormhole(AviaSettingsAudio$1, ['localeData', 'settings']);
		var aviaSettingsLanguageCss = "avia-settings-language{display:flex;flex-direction:row}avia-menu{min-width:180px}";
		var AviaSettingsLanguage$1 = /*#__PURE__*/function (_H29) {
		  (0, _inherits2["default"])(AviaSettingsLanguage$1, _H29);
		  var _super30 = _createSuper(AviaSettingsLanguage$1);
		  function AviaSettingsLanguage$1() {
		    var _this61;
		    (0, _classCallCheck2["default"])(this, AviaSettingsLanguage$1);
		    _this61 = _super30.call(this);
		    _this61.__registerHost();
		    _this61.localeData = undefined;
		    _this61.settings = undefined;
		    return _this61;
		  }
		  (0, _createClass2["default"])(AviaSettingsLanguage$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this62 = this;
		      return h(Host, {
		        role: 'menubar'
		      }, h("avia-settings-text", {
		        ref: function ref(element) {
		          return _this62.focusElement = element;
		        }
		      }), h("avia-settings-audio", null));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSettingsLanguageCss;
		    }
		  }]);
		  return AviaSettingsLanguage$1;
		}(H);
		openWormhole(AviaSettingsLanguage$1, ['localeData', 'settings']);
		var aviaSettingsQualityCss = "avia-settigs-quality{display:flex;flex-direction:row}avia-menu{min-width:180px}";
		var AviaSettingsQuality$1 = /*#__PURE__*/function (_H30) {
		  (0, _inherits2["default"])(AviaSettingsQuality$1, _H30);
		  var _super31 = _createSuper(AviaSettingsQuality$1);
		  function AviaSettingsQuality$1() {
		    var _this63;
		    (0, _classCallCheck2["default"])(this, AviaSettingsQuality$1);
		    _this63 = _super31.call(this);
		    _this63.__registerHost();
		    _this63.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this63), "action", 7);
		    _this63.localeData = undefined;
		    _this63.settings = undefined;
		    _this63.qualityLabel = 0;
		    return _this63;
		  }
		  (0, _createClass2["default"])(AviaSettingsQuality$1, [{
		    key: "onAction",
		    value: function onAction(e) {
		      switch (e.detail.action) {
		        case Action.LIST_ITEM_SELECT:
		          this.actionEvent.emit({
		            action: Action.QUALITY_SELECT,
		            value: {
		              index: parseInt(e.detail.value.value)
		            }
		          });
		          break;
		      }
		    }
		  }, {
		    key: "getQualityLabel",
		    value: function getQualityLabel(quality) {
		      var _a;
		      if ((_a = quality.category) === null || _a === void 0 ? void 0 : _a.length) {
		        return quality.category[this.qualityLabel || 0];
		      }
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this64 = this;
		      var _this$settings2 = this.settings,
		        quality = _this$settings2.quality,
		        qualities = _this$settings2.qualities,
		        qualityAuto = _this$settings2.qualityAuto;
		      var unique = qualities.reduce(function (acc, qual) {
		        var label = _this64.getQualityLabel(qual);
		        var item = acc.find(function (i) {
		          return i.label === label;
		        });
		        if (qual.enabled) {
		          if (!item) {
		            acc.push({
		              label: label,
		              value: {
		                key: 'quality',
		                value: qual.index,
		                bitrate: qual.bitrate
		              }
		            });
		          } else if (qual.bitrate > item.value.bitrate) {
		            item.value.value = qual.index;
		            item.value.bitrate = qual.bitrate;
		          }
		        }
		        return acc;
		      }, []);
		      var label = this.getQualityLabel(quality);
		      var disabled = unique.length === 1;
		      var options = unique.map(function (option) {
		        return Object.assign(Object.assign({}, option), {
		          selected: disabled || !qualityAuto && option.label === label,
		          disabled: disabled
		        });
		      }).sort(function (a, b) {
		        return b.value.bitrate - a.value.bitrate;
		      });
		      if (options.length > 1) {
		        options.unshift({
		          selected: qualityAuto,
		          disabled: false,
		          label: "".concat(this.localeData[exports.LocalizationId.AUTO], " (").concat(label, ")"),
		          value: {
		            key: 'quality',
		            value: -1
		          }
		        });
		      }
		      return h(Host, null, h("avia-menu", {
		        ref: function ref(element) {
		          return _this64.focusElement = element;
		        },
		        locId: exports.LocalizationId.QUALITY,
		        options: options,
		        titlebar: false
		      }));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSettingsQualityCss;
		    }
		  }]);
		  return AviaSettingsQuality$1;
		}(H);
		openWormhole(AviaSettingsQuality$1, ['localeData', 'settings', 'qualityLabel']);
		var aviaSettingsTextCss = "";
		var AviaSettingsText$1 = /*#__PURE__*/function (_H31) {
		  (0, _inherits2["default"])(AviaSettingsText$1, _H31);
		  var _super32 = _createSuper(AviaSettingsText$1);
		  function AviaSettingsText$1() {
		    var _this65;
		    (0, _classCallCheck2["default"])(this, AviaSettingsText$1);
		    _this65 = _super32.call(this);
		    _this65.__registerHost();
		    _this65.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this65), "action", 7);
		    _this65.localeData = undefined;
		    _this65.settings = undefined;
		    return _this65;
		  }
		  (0, _createClass2["default"])(AviaSettingsText$1, [{
		    key: "onAction",
		    value: function onAction(e) {
		      switch (e.detail.action) {
		        case Action.LIST_ITEM_SELECT:
		          var _e$detail$value2 = e.detail.value,
		            key = _e$detail$value2.key,
		            value = _e$detail$value2.value;
		          this.actionEvent.emit({
		            action: Action.LANGUAGE_SELECT,
		            value: {
		              trackType: key,
		              trackId: value
		            }
		          });
		          break;
		      }
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this66 = this;
		      var _this$settings3 = this.settings,
		        textTrack = _this$settings3.textTrack,
		        textTracks = _this$settings3.textTracks;
		      var selected = textTrack === null || textTrack === void 0 ? void 0 : textTrack.id;
		      var options = textTracks.map(function (track) {
		        return {
		          selected: track.id === selected,
		          disabled: textTracks.length === 1,
		          label: getLangLabel(track.language) || _this66.localeData[exports.LocalizationId.UNKNOWN],
		          value: {
		            key: 'text',
		            value: track.id
		          }
		        };
		      });
		      if (!(options === null || options === void 0 ? void 0 : options.length)) {
		        return;
		      }
		      return h("avia-menu", {
		        ref: function ref(element) {
		          return _this66.focusElement = element;
		        },
		        locId: exports.LocalizationId.CAPTIONS,
		        options: options,
		        titlebar: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSettingsTextCss;
		    }
		  }]);
		  return AviaSettingsText$1;
		}(H);
		openWormhole(AviaSettingsText$1, ['localeData', 'settings']);
		var aviaSettingsToggleCss = "avia-settings-toggle{display:inline-block;position:relative}avia-settings-toggle avia-button{background-image:var(--avia-settings-icon)}avia-settings-toggle avia-button:hover{background-image:var(--avia-settings-icon-hover)}";
		var AviaSettingsToggle$1 = /*#__PURE__*/function (_H32) {
		  (0, _inherits2["default"])(AviaSettingsToggle$1, _H32);
		  var _super33 = _createSuper(AviaSettingsToggle$1);
		  function AviaSettingsToggle$1() {
		    var _this67;
		    (0, _classCallCheck2["default"])(this, AviaSettingsToggle$1);
		    _this67 = _super33.call(this);
		    _this67.__registerHost();
		    _this67.settings = undefined;
		    _this67.settingsDisabled = true;
		    return _this67;
		  }
		  (0, _createClass2["default"])(AviaSettingsToggle$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this68 = this;
		      var _a;
		      var toggled = ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.active) === true;
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this68.focusElement = element;
		        },
		        actions: "".concat(Action.SETTINGS_ON, ",").concat(Action.SETTINGS_OFF),
		        disabled: this.settingsDisabled,
		        "loc-id": exports.LocalizationId.SETTINGS,
		        "aria-haspopup": 'true',
		        "aria-expanded": toggled ? 'true' : 'false',
		        toggled: toggled,
		        icon: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSettingsToggleCss;
		    }
		  }]);
		  return AviaSettingsToggle$1;
		}(H);
		openWormhole(AviaSettingsToggle$1, ['settings', 'settingsDisabled']);
		var aviaSliderCss = ":root{--avia-slider-height:12px;--avia-slider-color:var(--avia-accent-color);--avia-slider-handle-color:var(--avia-accent-color);--avia-slider-track-color:#444;--avia-slider-track-radius:2px;--avia-slider-value-height:4px;--avia-slider-handle-width:12px;--avia-slider-handle-height:12px;--avia-slider-handle-radius:12px}avia-slider{display:block;height:var(--avia-slider-height);cursor:pointer;position:relative}.avia-slider-track{position:absolute;width:100%;height:var(--avia-slider-value-height);top:calc( (var(--avia-slider-height) - var(--avia-slider-value-height)) * 0.5);background:var(--avia-slider-track-color);border-radius:var(--avia-slider-track-radius);overflow:hidden}.avia-slider-value{position:absolute;height:var(--avia-slider-value-height);top:0;background-color:var(--avia-slider-color)}.avia-slider-handle{position:absolute;top:calc((var(--avia-slider-handle-height) - var(--avia-slider-height)) / -2);width:var(--avia-slider-handle-width);height:var(--avia-slider-handle-height);margin-left:calc(var(--avia-slider-handle-width) / -2);background-color:var(--avia-slider-handle-color);border-radius:var(--avia-slider-handle-radius);cursor:pointer;border:0;padding:0;outline:none;opacity:0;transition-property:opacity;transition-duration:250ms}avia-slider:hover .avia-slider-handle{opacity:1.0}.avia-slider-handle.focus-visible{opacity:1.0;box-shadow:var(--avia-focus-box-shadow)}.avia-slider-ranges{position:absolute;width:100%;height:var(--avia-slider-value-height);top:0;background:transparent}.avia-slider-range-item{position:absolute;height:var(--avia-segment-marker-height);top:0;background-color:#fff}.avia-slider-list{position:absolute;width:100%;height:var(--avia-slider-value-height);top:0;background:transparent}.avia-slider-list-item{background-color:var(--avia-segment-marker-color);width:var(--avia-segment-marker-width);height:var(--avia-segment-marker-height);position:absolute;top:0}";
		var AviaSlider$1 = /*#__PURE__*/function (_H33) {
		  (0, _inherits2["default"])(AviaSlider$1, _H33);
		  var _super34 = _createSuper(AviaSlider$1);
		  function AviaSlider$1() {
		    var _this69;
		    (0, _classCallCheck2["default"])(this, AviaSlider$1);
		    _this69 = _super34.call(this);
		    _this69.__registerHost();
		    _this69.changeEvent = createEvent((0, _assertThisInitialized2["default"])(_this69), "change", 7);
		    _this69.inputEvent = createEvent((0, _assertThisInitialized2["default"])(_this69), "input", 7);
		    _this69.updateEvent = createEvent((0, _assertThisInitialized2["default"])(_this69), "update", 7);
		    _this69.draggingEvent = createEvent((0, _assertThisInitialized2["default"])(_this69), "dragging", 7);
		    _this69.dragging = false;
		    _this69.locId = undefined;
		    _this69.min = 0;
		    _this69.max = 1;
		    _this69.value = 1;
		    _this69.ranges = [];
		    _this69.list = [];
		    _this69.ariaValuetext = undefined;
		    _this69.increment = 0.1;
		    _this69.localeData = undefined;
		    _this69.deviceMode = undefined;
		    _this69.valueInternal = _this69.value;
		    return _this69;
		  }
		  (0, _createClass2["default"])(AviaSlider$1, [{
		    key: "onValueInternalChange",
		    value: function onValueInternalChange() {
		      this.update();
		    }
		  }, {
		    key: "onValueChange",
		    value: function onValueChange(value) {
		      if (this.dragging) {
		        return;
		      }
		      if (value < this.min) {
		        this.value = this.min;
		        return;
		      }
		      if (value > this.max) {
		        this.value = this.max;
		        return;
		      }
		      this.valueInternal = value;
		    }
		  }, {
		    key: "onMinChange",
		    value: function onMinChange(value) {
		      this.value = mapToRange(this.value, 0, 1, value, this.max);
		    }
		  }, {
		    key: "onMaxChange",
		    value: function onMaxChange(value) {
		      this.value = mapToRange(this.value, 0, 1, this.min, value);
		    }
		  }, {
		    key: "onListChange",
		    value: function onListChange(value) {
		      if (value) {
		        return;
		      }
		      this.list = [];
		      this.update();
		    }
		  }, {
		    key: "onMouseDown",
		    value: function onMouseDown(event) {
		      var _a;
		      (_a = this.gestureStartDebouncer) === null || _a === void 0 ? void 0 : _a.call(this, event);
		    }
		  }, {
		    key: "onMouseMove",
		    value: function onMouseMove(event) {
		      if (!this.dragging) {
		        return;
		      }
		      blockEvent(event);
		      this.move(event);
		    }
		  }, {
		    key: "onMouseUp",
		    value: function onMouseUp(event) {
		      this.gestureEndDebouncer(event);
		    }
		  }, {
		    key: "onKeydown",
		    value: function onKeydown(event) {
		      var _this70 = this;
		      var code = event.keyCode;
		      var action = function action(v) {
		        var value = _this70.value += v;
		        _this70.input(value);
		        _this70.change(value);
		        blockEvent(event);
		      };
		      switch (code) {
		        case KeyboardCode.ARROW_RIGHT:
		          action(this.increment);
		          break;
		        case KeyboardCode.ARROW_LEFT:
		          action(-this.increment);
		          break;
		        case KeyboardCode.ARROW_UP:
		        case KeyboardCode.PAGE_UP:
		          if (this.deviceMode === exports.DeviceMode.DESKTOP) {
		            action(this.increment);
		          }
		          break;
		        case KeyboardCode.ARROW_DOWN:
		        case KeyboardCode.PAGE_DOWN:
		          if (this.deviceMode === exports.DeviceMode.DESKTOP) {
		            action(-this.increment);
		          }
		          break;
		      }
		    }
		  }, {
		    key: "move",
		    value: function move(event) {
		      var offset = this.el.getBoundingClientRect();
		      var pos = getEventPos(event);
		      if (pos.x === null) {
		        return;
		      }
		      var percent = clampValue((pos.x - offset.left) / offset.width, 0, 1);
		      var value = mapToRange(percent, 0, 1, this.min, this.max);
		      this.input(value);
		    }
		  }, {
		    key: "toPercent",
		    value: function toPercent(value) {
		      return toCssPercent(mapToRange(value, this.min, this.max));
		    }
		  }, {
		    key: "update",
		    value: function update() {
		      var list = this.list,
		        max = this.max,
		        min = this.min,
		        value = this.value;
		      this.updateEvent.emit({
		        value: value,
		        min: min,
		        max: max,
		        list: list,
		        percent: mapToRange(value, min, max)
		      });
		    }
		  }, {
		    key: "input",
		    value: function input(v) {
		      var previous = this.valueInternal;
		      var value = clampValue(v, this.min, this.max);
		      this.valueInternal = value;
		      this.inputEvent.emit({
		        value: value,
		        previous: previous
		      });
		    }
		  }, {
		    key: "change",
		    value: function change(v) {
		      var previous = this.value;
		      var value = clampValue(v, this.min, this.max);
		      this.value = value;
		      this.changeEvent.emit({
		        value: value,
		        previous: previous
		      });
		    }
		  }, {
		    key: "disconnectedCallback",
		    value: function disconnectedCallback() {
		      var _a, _b;
		      (_a = this.gestureStartDebouncer) === null || _a === void 0 ? void 0 : _a.cancel();
		      (_b = this.gestureEndDebouncer) === null || _b === void 0 ? void 0 : _b.cancel();
		    }
		  }, {
		    key: "componentDidRender",
		    value: function componentDidRender() {
		      var _this71 = this;
		      if (!this.gestureStartDebouncer) {
		        this.gestureStartDebouncer = debounce(function (event) {
		          // @ts-ignore
		          if (event.which > 1 || event.button > 0) {
		            return;
		          }
		          blockEvent(event);
		          _this71.dragging = true;
		          _this71.draggingEvent.emit({
		            value: true
		          });
		          _this71.move(event);
		        }, 200);
		      }
		      if (!this.gestureEndDebouncer) {
		        this.gestureEndDebouncer = debounce(function (event) {
		          if (_this71.dragging) {
		            blockEvent(event);
		            _this71.dragging = false;
		            _this71.draggingEvent.emit({
		              value: false
		            });
		            _this71.move(event);
		            _this71.change(_this71.valueInternal);
		          }
		        }, 200);
		      }
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      this.focusElement.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      this.focusElement.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this72 = this;
		      var _a;
		      var percent = this.toPercent(this.valueInternal);
		      var ariaLabel = (_a = this.localeData) === null || _a === void 0 ? void 0 : _a[this.locId];
		      return h(Host, {
		        className: "avia-slider",
		        role: "slider",
		        "aria-label": ariaLabel,
		        "aria-valuemin": this.min,
		        "aria-valuemax": this.max,
		        "aria-valuenow": this.value,
		        "aria-valuetext": this.ariaValuetext || percent
		      }, h("div", {
		        "class": "avia-slider-track"
		      }, h("div", {
		        "class": "avia-slider-ranges"
		      }, this.ranges.map(function (item, index) {
		        return h("div", {
		          "class": "avia-slider-range-item",
		          key: index,
		          style: {
		            left: _this72.toPercent(item.start),
		            width: _this72.toPercent(item.end - item.start)
		          }
		        });
		      })), h("div", {
		        "class": "avia-slider-value",
		        style: {
		          width: percent
		        }
		      }), h("div", {
		        "class": "avia-slider-list"
		      }, this.list.map(function (item) {
		        return h("div", {
		          "class": "avia-slider-list-item",
		          style: {
		            left: _this72.toPercent(item.value)
		          }
		        });
		      }))), h("slot", null), h("button", {
		        ref: function ref(element) {
		          return _this72.focusElement = element;
		        },
		        "class": "avia-slider-handle",
		        style: {
		          left: percent
		        }
		      }));
		    }
		  }, {
		    key: "el",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "watchers",
		    get: function get() {
		      return {
		        "valueInternal": ["onValueInternalChange"],
		        "value": ["onValueChange"],
		        "min": ["onMinChange"],
		        "max": ["onMaxChange"],
		        "list": ["onListChange"]
		      };
		    }
		  }, {
		    key: "style",
		    get: function get() {
		      return aviaSliderCss;
		    }
		  }]);
		  return AviaSlider$1;
		}(H);
		openWormhole(AviaSlider$1, ['localeData', 'deviceMode']);
		var aviaSpinnerCss = "avia-spinner{display:block;width:var(--avia-spinner-diameter);height:var(--avia-spinner-diameter);overflow:visible;background-size:var(--avia-spinner-diameter);background-repeat:no-repeat;background-image:var(--avia-spinner-image);animation:avia-rotate 2s linear infinite}@keyframes avia-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}";
		var AviaSpinner$1 = /*#__PURE__*/function (_H34) {
		  (0, _inherits2["default"])(AviaSpinner$1, _H34);
		  var _super35 = _createSuper(AviaSpinner$1);
		  function AviaSpinner$1() {
		    var _this73;
		    (0, _classCallCheck2["default"])(this, AviaSpinner$1);
		    _this73 = _super35.call(this);
		    _this73.__registerHost();
		    return _this73;
		  }
		  (0, _createClass2["default"])(AviaSpinner$1, [{
		    key: "render",
		    value: function render() {
		      return h(Host, null);
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaSpinnerCss;
		    }
		  }]);
		  return AviaSpinner$1;
		}(H);
		var aviaTextCss = "avia-text{color:var(--avia-control-bar-btn-text-color)}";
		var AviaText$1 = /*#__PURE__*/function (_H35) {
		  (0, _inherits2["default"])(AviaText$1, _H35);
		  var _super36 = _createSuper(AviaText$1);
		  function AviaText$1() {
		    var _this74;
		    (0, _classCallCheck2["default"])(this, AviaText$1);
		    _this74 = _super36.call(this);
		    _this74.__registerHost();
		    _this74.locId = undefined;
		    _this74.localeData = undefined;
		    return _this74;
		  }
		  (0, _createClass2["default"])(AviaText$1, [{
		    key: "render",
		    value: function render() {
		      var _a;
		      return h(Host, null, (_a = this.localeData) === null || _a === void 0 ? void 0 : _a[this.locId]);
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaTextCss;
		    }
		  }]);
		  return AviaText$1;
		}(H);
		openWormhole(AviaText$1, ['localeData']);
		var aviaTextToggleCss = "avia-text-toggle{display:inline-block}avia-text-toggle avia-button{background-image:var(--avia-text-on-icon)}avia-text-toggle avia-button:hover{background-image:var(--avia-text-on-icon-hover)}avia-text-toggle avia-button[toggled]{background-image:var(--avia-text-off-icon)}avia-text-toggle avia-button[toggled]:hover{background-image:var(--avia-text-off-icon-hover)}";
		var AviaTextToggle$1 = /*#__PURE__*/function (_H36) {
		  (0, _inherits2["default"])(AviaTextToggle$1, _H36);
		  var _super37 = _createSuper(AviaTextToggle$1);
		  function AviaTextToggle$1() {
		    var _this75;
		    (0, _classCallCheck2["default"])(this, AviaTextToggle$1);
		    _this75 = _super37.call(this);
		    _this75.__registerHost();
		    _this75.textTrackEnabled = false;
		    _this75.textDisabled = true;
		    return _this75;
		  }
		  (0, _createClass2["default"])(AviaTextToggle$1, [{
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this76 = this;
		      return h("avia-button", {
		        ref: function ref(element) {
		          return _this76.focusElement = element;
		        },
		        ids: "".concat(exports.LocalizationId.CLOSED_CAPTIONS_ON, ", ").concat(exports.LocalizationId.CLOSED_CAPTIONS_OFF),
		        actions: "".concat(Action.TEXT_ON, ", ").concat(Action.TEXT_OFF),
		        disabled: this.textDisabled,
		        toggled: this.textTrackEnabled,
		        icon: true
		      });
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaTextToggleCss;
		    }
		  }]);
		  return AviaTextToggle$1;
		}(H);
		openWormhole(AviaTextToggle$1, ['textTrackEnabled', 'textDisabled']);
		var aviaTimeDisplayCss = "avia-time-display{display:inline-block;margin-right:var(--avia-default-spacing)}.avia-time-display{display:inline-block;user-select:none;height:var(--avia-time-height);line-height:var(--avia-time-line-height);font-size:var(--avia-time-font-size);color:var(--avia-time-color);font-family:var(--avia-time-font-family)}.avia-control-group-right .avia-time-display{text-align:right}";
		var AviaTimeDisplay$1 = /*#__PURE__*/function (_H37) {
		  (0, _inherits2["default"])(AviaTimeDisplay$1, _H37);
		  var _super38 = _createSuper(AviaTimeDisplay$1);
		  function AviaTimeDisplay$1() {
		    var _this77;
		    (0, _classCallCheck2["default"])(this, AviaTimeDisplay$1);
		    _this77 = _super38.call(this);
		    _this77.__registerHost();
		    _this77.timeDisplayValue = undefined;
		    _this77.currentTimeSeconds = undefined;
		    _this77.durationSeconds = undefined;
		    _this77.isLiveLinear = false;
		    _this77.isDvr = false;
		    return _this77;
		  }
		  (0, _createClass2["default"])(AviaTimeDisplay$1, [{
		    key: "render",
		    value: function render() {
		      var inactive = this.isLiveLinear || this.isDvr;
		      if (inactive) {
		        return '';
		      }
		      return h("div", {
		        "class": 'avia-time-display'
		      }, this.timeDisplayValue);
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaTimeDisplayCss;
		    }
		  }]);
		  return AviaTimeDisplay$1;
		}(H);
		openWormhole(AviaTimeDisplay$1, ['timeDisplayValue', 'currentTimeSeconds', 'durationSeconds', 'isLiveLinear', 'isDvr']);
		var aviaTimeRemainingCss = "avia-time-remaining{display:inline-block;user-select:none;height:var(--avia-time-height);line-height:var(--avia-time-line-height);font-size:var(--avia-time-font-size);color:var(--avia-time-color);font-family:var(--avia-time-font-family)}";
		var AviaTimeRemaining$1 = /*#__PURE__*/function (_H38) {
		  (0, _inherits2["default"])(AviaTimeRemaining$1, _H38);
		  var _super39 = _createSuper(AviaTimeRemaining$1);
		  function AviaTimeRemaining$1() {
		    var _this78;
		    (0, _classCallCheck2["default"])(this, AviaTimeRemaining$1);
		    _this78 = _super39.call(this);
		    _this78.__registerHost();
		    _this78.currentTimeSeconds = 0;
		    _this78.durationSeconds = 0;
		    _this78.localeData = undefined;
		    return _this78;
		  }
		  (0, _createClass2["default"])(AviaTimeRemaining$1, [{
		    key: "render",
		    value: function render() {
		      var time = Math.max(this.durationSeconds - this.currentTimeSeconds, 0);
		      var label = this.localeData ? createLocalizedTimeString(time, this.localeData) : '';
		      return h(Host, {
		        "aria-label": label,
		        title: label
		      }, "-".concat(secToHms(time)));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaTimeRemainingCss;
		    }
		  }]);
		  return AviaTimeRemaining$1;
		}(H);
		openWormhole(AviaTimeRemaining$1, ['currentTimeSeconds', 'durationSeconds', 'localData']);
		var aviaUiCss = ":root{--avia-accent-color:#3aacff;--avia-text-color:#dedede;--avia-text-color-hover:#ffffff;--avia-font-family:Arial, sans-serif;--avia-control-bar-bg:linear-gradient(to top, rgba(2,0,36,0.8) 0%, rgba(1,0,10,0.5029586834733894) 62%, rgba(0,0,0,0) 100%);--avia-control-bar-height:64px;--avia-default-spacing:12px;--avia-half-spacing:6px;--avia-live-padding-top:12px;--avia-compact-button-width:48px;--avia-compact-button-height:48px;--avia-compact-button-border-radius:calc(var(--avia-compact-button-width) / 2);--avia-compact-button-background-color:rgba(64, 64, 64, 0.5);--avia-compact-control-bar-width:calc( (var(--avia-compact-button-width) * 3) + (var(--avia-default-spacing) * 2));--avia-compact-control-bar-margin-left:calc(var(--avia-compact-control-bar-width) / -2);--avia-compact-control-bar-margin-top:calc(var(--avia-compact-button-height) / -2);--avia-play-overlay-bg-color:rgba(0, 0, 0, 0.35);--avia-play-cta-width:66px;--avia-play-cta-height:66px;--avia-play-cta-border-radius:calc(var(--avia-play-cta-width) / 2);--avia-play-cta-bg-image:var(--avia-play-icon);--avia-play-cta-bg-position:50%;--avia-play-cta-bg-color:rgba(64, 64, 64, 0.5);--avia-play-cta-bg-size:calc(var(--avia-play-cta-width) / 2) calc(var(--avia-play-cta-height) / 2);--avia-control-bar-btn-height:48px;--avia-control-bar-btn-width:48px;--avia-control-bar-btn-text-color:var(--avia-text-color);--avia-control-bar-btn-text-color-hover:var(--avia-text-color-hover);--avia-control-bar-btn-border:none;--avia-control-bar-btn-border-width:0;--avia-control-bar-btn-border-radius:0;--avia-control-bar-btn-border-outline:none;--avia-control-bar-btn-border-cursor:pointer;--avia-control-bar-btn-disabled-cursor:not-allowed;--avia-control-bar-btn-disabled-opacity:0.5;--avia-icon-btn-bg-width:50%;--avia-icon-btn-bg-height:37.5%;--avia-icon-btn-bg-size:var(--avia-icon-btn-bg-width) var(--avia-icon-btn-bg-height);--avia-fs-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2018%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v18H0z%22%2F%3E%3Cpath%20d%3D%22M1%207a1%201%200%200%201-1-1V1a1%201%200%200%201%201-1h5a1%201%200%200%201%200%202H2.5a.5.5%200%200%200-.5.5V6a1%201%200%200%201-1%201zM6%2018H1a1%201%200%200%201-1-1v-5a1%201%200%200%201%202%200v3.5a.5.5%200%200%200%20.5.5H6a1%201%200%200%201%200%202zM23%2018h-5a1%201%200%200%201%200-2h3.5a.5.5%200%200%200%20.5-.5V12a1%201%200%200%201%202%200v5a1%201%200%200%201-1%201zM23%207a1%201%200%200%201-1-1V2.5a.5.5%200%200%200-.5-.5H18a1%201%200%200%201%200-2h5a1%201%200%200%201%201%201v5a1%201%200%200%201-1%201z%22%2F%3E%3C%2Fsvg%3E');--avia-fs-icon-hover:var(--avia-fs-icon);--avia-fs-exit-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2018%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v18H0z%22%2F%3E%3Cpath%20d%3D%22M4%206H1a1%201%200%200%201%200-2h2.5a.5.5%200%200%200%20.5-.5V1a1%201%200%200%201%202%200v3a2%202%200%200%201-2%202zM23%206h-4a1%201%200%200%201-1-1V1a1%201%200%200%201%202%200v2.5a.5.5%200%200%200%20.5.5H23a1%201%200%200%201%200%202zM19%2018a1%201%200%200%201-1-1v-3a2%202%200%200%201%202-2h3a1%201%200%200%201%200%202h-2.5a.5.5%200%200%200-.5.5V17a1%201%200%200%201-1%201zM5%2018a1%201%200%200%201-1-1v-2.5a.5.5%200%200%200-.5-.5H1a1%201%200%200%201%200-2h3a2%202%200%200%201%202%202v3a1%201%200%200%201-1%201z%22%2F%3E%3C%2Fsvg%3E');--avia-fs-exit-icon-hover:var(--avia-fs-exit-icon);--avia-play-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2018%22%3E%3Ctitle%3EPlay%3C%2Ftitle%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v18H0z%22%2F%3E%3Cpath%20d%3D%22M19%2010L6.84%2017.81a1.19%201.19%200%200%201-1.84-1V1.19a1.19%201.19%200%200%201%201.83-1L19%208a1.19%201.19%200%200%201%200%202z%22%2F%3E%3C%2Fsvg%3E');--avia-play-icon-hover:var(--avia-play-icon);--avia-pause-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2018%22%3E%3Ctitle%3EPause%3C%2Ftitle%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v18H0z%22%2F%3E%3Crect%20x%3D%226%22%20width%3D%224%22%20height%3D%2218%22%20rx%3D%221%22%2F%3E%3Crect%20x%3D%2214%22%20width%3D%224%22%20height%3D%2218%22%20rx%3D%221%22%2F%3E%3C%2Fsvg%3E');--avia-pause-icon-hover:var(--avia-pause-icon);--avia-stop-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2018%22%3E%3Ctitle%3EStop%3C%2Ftitle%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v18H0z%22%2F%3E%3Crect%20x%3D%223%22%20width%3D%2218%22%20height%3D%2218%22%20rx%3D%221%22%2F%3E%3C%2Fsvg%3E');--avia-stop-icon-hover:var(--avia-stop-icon);--avia-mute-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2018%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v18H0z%22%2F%3E%3Cpath%20d%3D%22M3.58%206H2a1%201%200%200%200-1%201v4a1%201%200%200%200%201%201h1.58a1%201%200%200%201%20.72.3l5%205a1%201%200%200%200%201.7-.74V1.44A1%201%200%200%200%209.27.73l-5%205a1%201%200%200%201-.69.27zM19.77%209.33a.5.5%200%200%201%200-.71l.94-.94a1%201%200%200%200%200-1.41%201%201%200%200%200-1.42%200l-.94.94a.5.5%200%200%201-.7%200l-.94-.94a1%201%200%200%200-1.42%200%201%201%200%200%200%200%201.41l.94.94a.5.5%200%200%201%200%20.71l-.94.94a1%201%200%200%200%200%201.41%201%201%200%200%200%201.42%200l.94-.94a.5.5%200%200%201%20.7%200l.94.94a1%201%200%200%200%201.42%200%201%201%200%200%200%200-1.41z%22%2F%3E%3C%2Fsvg%3E');--avia-mute-icon-hover:var(--avia-mute-icon);--avia-unmuted-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2018%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v18H0z%22%2F%3E%3Cpath%20d%3D%22M3.59%206H2a1%201%200%200%200-1%201v4a1%201%200%200%200%201%201h1.59a1%201%200%200%201%20.7.29l5%205a1%201%200%200%200%201.71-.7V1.41a1%201%200%200%200-1.71-.7l-5%205a1%201%200%200%201-.7.29zM14%2018a1%201%200%200%201%200-2%207%207%200%200%200%200-14%201%201%200%200%201%200-2%209%209%200%200%201%200%2018z%22%2F%3E%3Cpath%20d%3D%22M14%2014a1%201%200%200%201%200-2%203%203%200%200%200%200-6%201%201%200%200%201%200-2%205%205%200%200%201%200%2010z%22%2F%3E%3C%2Fsvg%3E');--avia-unmuted-icon-hover:var(--avia-unmuted-icon);--avia-text-on-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2018%22%3E%3Cdefs%3E%3Cstyle%3E.b%7Bfill%3Anone%3Bstroke%3A%23fff%3Bstroke-linecap%3Around%3Bstroke-miterlimit%3A10%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M23%200H1a1%201%200%2000-1%201v12a1%201%200%20001%201h2.5a.5.5%200%2001.5.5V17a1%201%200%2000.62.92A.84.84%200%20005%2018a1%201%200%2000.71-.29l3.56-3.56a.47.47%200%2001.35-.15H23a1%201%200%20001-1V1a1%201%200%2000-1-1zm-1%2011a1%201%200%2001-1%201H9a1%201%200%2000-.71.29L6%2014.59V13a1%201%200%2000-1-1H3a1%201%200%2001-1-1V3a1%201%200%20011-1h18a1%201%200%20011%201z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22M4.5%206.5h5M16.5%206.5h3M12.5%206.5h1M4.5%209.5h3M18.5%209.5h1M10.5%209.5h5%22%2F%3E%3C%2Fsvg%3E');--avia-text-on-icon-hover:var(--avia-text-on-icon);--avia-text-off-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2018%22%3E%3Cdefs%3E%3Cstyle%3E.b%7Bfill%3Anone%3Bstroke%3A%23231f20%3Bstroke-linecap%3Around%3Bstroke-miterlimit%3A10%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M23%200H1a1%201%200%2000-1%201v12a1%201%200%20001%201h2.5a.5.5%200%2001.5.5V17a1%201%200%2000.62.92A.84.84%200%20005%2018a1%201%200%2000.71-.29l3.56-3.56a.47.47%200%2001.35-.15H23a1%201%200%20001-1V1a1%201%200%2000-1-1z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22M4.5%206.5h5M16.5%206.5h3M12.5%206.5h1M4.5%209.5h3M18.5%209.5h1M10.5%209.5h5%22%2F%3E%3C%2Fsvg%3E');--avia-text-off-icon-hover:var(--avia-text-off-icon);--avia-text-icon-disabled:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2018%22%3E%3Cdefs%3E%3Cstyle%3E.b%7Bfill%3Anone%3Bstroke%3A%23fff%3Bstroke-linecap%3Around%3Bstroke-miterlimit%3A10%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M23%200H1a1%201%200%2000-1%201v12a1%201%200%20001%201h2.5a.5.5%200%2001.5.5V17a1%201%200%2000.62.92A.84.84%200%20005%2018a1%201%200%2000.71-.29l3.56-3.56a.47.47%200%2001.35-.15H23a1%201%200%20001-1V1a1%201%200%2000-1-1zm-1%2011a1%201%200%2001-1%201H9a1%201%200%2000-.71.29L6%2014.59V13a1%201%200%2000-1-1H3a1%201%200%2001-1-1V3a1%201%200%20011-1h18a1%201%200%20011%201z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22M4.5%206.5h5M16.5%206.5h3M12.5%206.5h1M4.5%209.5h3M18.5%209.5h1M10.5%209.5h5%22%2F%3E%3C%2Fsvg%3E');--avia-seek-forward-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2015.52%2017.29%22%3E%3Cpath%20d%3D%22M14.69%2C1.16%2C14%2C1.8A8.76%2C8.76%2C0%2C0%2C0%2C1.81%2C3.37%2C8.59%2C8.59%2C0%2C0%2C0%2C3.39%2C15.49a8.77%2C8.77%2C0%2C0%2C0%2C11.5-.74A1%2C1%2C0%2C0%2C0%2C15%2C13.4a1%2C1%2C0%2C0%2C0-1.36-.11l-.11.11a6.81%2C6.81%2C0%2C0%2C1-9.58%2C0%2C6.69%2C6.69%2C0%2C0%2C1-.06-9.51%2C6.82%2C6.82%2C0%2C0%2C1%2C8.73-.77L11.8%2C4a.47.47%2C0%2C0%2C0%2C0%2C.67.5.5%2C0%2C0%2C0%2C.37.15H15a.49.49%2C0%2C0%2C0%2C.49-.48V1.49a.47.47%2C0%2C0%2C0-.83-.33Z%22%20style%3D%22fill%3A%23fff%22%2F%3E%3C%2Fsvg%3E');--avia-seek-forward-icon-hover:var(--avia-seek-forward-icon);--avia-seek-back-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2015.52%2017.29%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Layer_2%22%20data-name%3D%22Layer%202%22%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M.46%2C1A.48.48%2C0%2C0%2C0%2C0%2C1.49V4.33a.49.49%2C0%2C0%2C0%2C.48.48h2.9a.51.51%2C0%2C0%2C0%2C.37-.15.48.48%2C0%2C0%2C0%2C0-.67L2.9%2C3.17a6.82%2C6.82%2C0%2C0%2C1%2C8.73.77%2C6.69%2C6.69%2C0%2C0%2C1-.05%2C9.51A6.82%2C6.82%2C0%2C0%2C1%2C2%2C13.4a.52.52%2C0%2C0%2C0-.1-.11%2C1%2C1%2C0%2C0%2C0-1.37.11%2C1%2C1%2C0%2C0%2C0%2C.11%2C1.35%2C8.76%2C8.76%2C0%2C0%2C0%2C11.49.74A8.59%2C8.59%2C0%2C0%2C0%2C13.7%2C3.37%2C8.76%2C8.76%2C0%2C0%2C0%2C1.48%2C1.8L.82%2C1.16A.45.45%2C0%2C0%2C0%2C.46%2C1Z%22%20transform%3D%22translate(0%200)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');--avia-seek-back-icon-hover:var(--avia-seek-back-icon);--avia-settings-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2018%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v18H0z%22%2F%3E%3Cpath%20d%3D%22M20.43%2010.4l-.93-.53a1%201%200%200%201%200-1.74l.93-.53a1%201%200%200%200%20.36-1.37l-2-3.46a1%201%200%200%200-1.36-.37l-.93.54a1%201%200%200%201-1.5-.87V1a1%201%200%200%200-1-1h-4a1%201%200%200%200-1%201v1.07a1%201%200%200%201-1.5.87l-.93-.54a1%201%200%200%200-1.36.37l-2%203.46a1%201%200%200%200%20.36%201.37l.93.53a1%201%200%200%201%200%201.74l-.93.53a1%201%200%200%200-.36%201.37l2%203.46a1%201%200%200%200%201.36.37l.93-.54a1%201%200%200%201%201.5.87V17a1%201%200%200%200%201%201h4a1%201%200%200%200%201-1v-1.07a1%201%200%200%201%201.5-.87l.93.54a1%201%200%200%200%201.36-.37l2-3.46a1%201%200%200%200-.36-1.37zM12%2012a3%203%200%201%201%203-3%203%203%200%200%201-3%203z%22%2F%3E%3C%2Fsvg%3E');--avia-settings-icon-hover:var(--avia-settings-icon);--avia-selected-icon:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22white%22%3E%3Cpath%20d%3D%22M20.285%202l-11.285%2011.567-5.286-5.011-3.714%203.716%209%208.728%2015-15.285z%22%2F%3E%3C%2Fsvg%3E');--avia-time-height:48px;--avia-time-width:86px;--avia-time-line-height:48px;--avia-time-font-size:13px;--avia-time-color:var(--avia-text-color);--avia-time-font-family:var(--avia-font-family);--avia-segment-marker-color:var(--avia-text-color);--avia-segment-marker-height:4px;--avia-segment-marker-width:2px;--avia-ad-progress-color:#ffe83a;--avia-ad-progress-track-color:transparent;--avia-ad-control-bg-color:rgba(0, 0, 0, 0.7);--avia-ad-control-border-radius:4px;--avia-seek-indicator-border-radius:4px;--avia-seek-indicator-background-color:rgba(0, 0, 0, 0.5);--avia-seek-indicator-color:var(--avia-text-color);--avia-seek-indicator-height:48px;--avia-seek-indicator-font-size:20px;--avia-seek-indicator-font-family:var(--avia-font-family);--avia-seek-indicator-line-height:48px;--avia-volume-indicator-border-radius:6px;--avia-volume-indicator-background-color:rgba(0, 0, 0, 0.5);--avia-volume-indicator-width:64px;--avia-volume-indicator-height:64px;--avia-volume-indicator-right:12px;--avia-volume-indicator-bottom:72px;--avia-focus-box-shadow:0 0 2px 3px rgba(247, 228, 85, 0.85);--avia-focus-box-shadow-inner:inset 0 0 2px 3px rgba(247, 228, 85, 0.85);--avia-spinner-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"white\" stroke-width=\"1\" width=\"40\" height=\"40\" fill=\"white\" viewBox=\"0 0 37.84 41\"><path d=\"M18,39.61V32.09a.93.93,0,0,1,.26-.66.85.85,0,0,1,.64-.27.83.83,0,0,1,.63.27.89.89,0,0,1,.26.66v7.52a.91.91,0,0,1-.89.89.85.85,0,0,1-.64-.27.87.87,0,0,1-.26-.62Zm-6.4-10.27a.89.89,0,0,1,.59-.37.82.82,0,0,1,.65.16.79.79,0,0,1,.36.59.94.94,0,0,1-.15.69L8.8,36.47a.8.8,0,0,1-.57.38,1,1,0,0,1-.67-.16.84.84,0,0,1-.36-.59,1,1,0,0,1,.16-.7ZM1.13,25.53,8,23.21a.92.92,0,0,1,.67.05.93.93,0,0,1,.4,1.23,1,1,0,0,1-.52.47L1.64,27.27A.87.87,0,0,1,1,27.22a.82.82,0,0,1-.43-.53,1,1,0,0,1,0-.72.81.81,0,0,1,.54-.44Zm.51-11.8L8.56,16a1,1,0,0,1,.52.47.93.93,0,0,1-.4,1.23.92.92,0,0,1-.67.05L1.13,15.47A.81.81,0,0,1,.59,15a1,1,0,0,1,0-.72A.82.82,0,0,1,1,13.78a.87.87,0,0,1,.67,0ZM8.8,4.53l4.27,6.06a.94.94,0,0,1,.15.69.79.79,0,0,1-.36.59.82.82,0,0,1-.65.16.89.89,0,0,1-.59-.37L7.36,5.6a1,1,0,0,1-.16-.7.84.84,0,0,1,.36-.59,1,1,0,0,1,.67-.16.8.8,0,0,1,.57.38Zm11-3.14V8.91a.89.89,0,0,1-.26.66.83.83,0,0,1-.63.27.85.85,0,0,1-.64-.27A.93.93,0,0,1,18,8.91V1.39a.87.87,0,0,1,.26-.62A.85.85,0,0,1,18.92.5a.83.83,0,0,1,.63.27.83.83,0,0,1,.26.62ZM30.48,5.6l-4.27,6.06a.87.87,0,0,1-.58.37.85.85,0,0,1-.66-.16.86.86,0,0,1-.36-.59,1,1,0,0,1,.16-.69L29,4.53a.76.76,0,0,1,.56-.38.94.94,0,0,1,.67.16.86.86,0,0,1,.37.59,1,1,0,0,1-.16.7Zm6.23,9.87-6.88,2.32a.91.91,0,0,1-.67-.05.93.93,0,0,1-.4-1.23,1,1,0,0,1,.52-.47l6.91-2.31a.87.87,0,0,1,.67,0,.83.83,0,0,1,.44.53,1,1,0,0,1-.06.72.79.79,0,0,1-.53.44Zm-.52,11.8L29.28,25a1,1,0,0,1-.52-.47.93.93,0,0,1,.4-1.23.91.91,0,0,1,.67-.05l6.88,2.32a.79.79,0,0,1,.53.44,1,1,0,0,1,.06.72.83.83,0,0,1-.44.53.87.87,0,0,1-.67.05ZM29,36.47l-4.27-6.06a1,1,0,0,1-.16-.69.86.86,0,0,1,.36-.59.85.85,0,0,1,.66-.16.87.87,0,0,1,.58.37l4.27,6.06a1,1,0,0,1,.16.7.86.86,0,0,1-.37.59.94.94,0,0,1-.67.16.76.76,0,0,1-.56-.38Z\"/></svg>');--avia-spinner-diameter:48px;--avia-active-transition-in:opacity 0.5s ease 0s;--avia-active-transition-out:opacity 0.5s ease 0s;--avia-buffered-range-background-color:rgba(255, 255, 255, 0.20)}avia-ui{color:var(--avia-text-color);font-family:var(--avia-font-family)}avia-ui>*{pointer-events:auto;-webkit-user-select:none;user-select:none}avia-ui,avia-ui avia-accessibility,.avia-layer{pointer-events:none;position:absolute;top:0;left:0;bottom:0;right:0}.avia-layer>*{pointer-events:auto}slot-fb[hidden]{display:none}.avia-ui-hidden{display:none}img.avia-poster-img{width:100%;height:auto}.avia-container,avia-ui:focus,avia-ui button:focus{outline:none}avia-ui.focus-visible,avia-ui .focus-visible{box-shadow:var(--avia-focus-box-shadow)}avia-ui.focus-visible .avia-menu-button,avia-ui .focus-visible.avia-menu-button{box-shadow:var(--avia-focus-box-shadow-inner)}avia-ui:not([active])[fullscreen]{cursor:none}.avia-container.avia-controls-vis video::-webkit-media-text-track-container{bottom:calc(var(--avia-control-bar-height) + 4px);height:auto}.avia-controls{display:flex;flex-direction:column}.avia-spacer{pointer-events:none;flex-grow:1}";
		var AviaUi$1 = /*#__PURE__*/function (_H39) {
		  (0, _inherits2["default"])(AviaUi$1, _H39);
		  var _super40 = _createSuper(AviaUi$1);
		  function AviaUi$1() {
		    var _this79;
		    (0, _classCallCheck2["default"])(this, AviaUi$1);
		    _this79 = _super40.call(this);
		    _this79.__registerHost();
		    _this79.actionEvent = createEvent((0, _assertThisInitialized2["default"])(_this79), "uiaction", 7);
		    _this79.controlMode = ControlMode.NONE;
		    _this79.fullscreen = false;
		    _this79.active = null;
		    _this79.deviceMode = exports.DeviceMode.DESKTOP;
		    _this79.fullscreenDisabled = true;
		    _this79.muted = false;
		    _this79.muteDisabled = true;
		    _this79.volume = 1;
		    _this79.playing = false;
		    _this79.playDisabled = true;
		    _this79.textTrackEnabled = false;
		    _this79.textDisabled = true;
		    _this79.timeDisplayValue = '';
		    _this79.isLiveLinear = false;
		    _this79.isDvr = false;
		    _this79.live = false;
		    _this79.playheadPosition = 0;
		    _this79.durationSeconds = 0;
		    _this79.currentTimeSeconds = 0;
		    _this79.seekDisabled = true;
		    _this79.seekBackDisabled = true;
		    _this79.seekForwardDisabled = true;
		    _this79.settingsDisabled = true;
		    _this79.adPlayheadPosition = 0;
		    _this79.segmentBreakPositions = undefined;
		    _this79.localeData = null;
		    _this79.preview = null;
		    _this79.accIndicatorState = undefined;
		    _this79.unmuteCtaVisible = false;
		    _this79.settings = null;
		    _this79.posterActive = false;
		    _this79.posterImageUrl = '';
		    _this79.qualityLabel = 0;
		    _this79.waiting = false;
		    _this79.initialized = false;
		    _this79.pausable = true;
		    _this79.isTouch = false;
		    _this79.isIosNative = false;
		    _this79.linkMuteAndVolume = true;
		    _this79.playerDimensions = {
		      width: 0,
		      height: 0
		    };
		    _this79.bufferedRanges = [];
		    return _this79;
		  }
		  (0, _createClass2["default"])(AviaUi$1, [{
		    key: "handleAction",
		    value: function handleAction(event) {
		      var _a;
		      this.actionEvent.emit(event.detail);
		      if (event.detail.action === Action.SETTINGS_OFF) {
		        (_a = this.element.querySelector('avia-settings-toggle')) === null || _a === void 0 ? void 0 : _a.focus();
		      }
		    }
		  }, {
		    key: "componentWillLoad",
		    value: function componentWillLoad() {
		      // @ts-ignore
		      Universe.create(this, this);
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      if (!this.initialized) {
		        return;
		      }
		      var isTv = this.deviceMode === exports.DeviceMode.TV;
		      return h(Host, null, h(Universe.Provider, {
		        state: this
		      }, h("div", {
		        "class": "avia-layer"
		      }, h("slot", {
		        name: "underlay"
		      })), h("slot", {
		        name: "play-overlay"
		      }, !isTv && h("avia-play-overlay", null)), h("slot", {
		        name: "pause-overlay"
		      }, isTv && h("avia-pause-overlay", null)), h("slot", {
		        name: "waiting-overlay"
		      }, h("avia-waiting-overlay", null)), h("slot", {
		        name: "unmute-cta"
		      }, !isTv && h("avia-unmute-cta", null)), h("slot", {
		        name: "accessibility"
		      }, h("avia-accessibility", null)), h("slot", {
		        name: "poster"
		      }, !isTv && h("avia-poster", null)), h("div", {
		        "class": "avia-layer avia-controls"
		      }, h("div", {
		        "class": "avia-spacer"
		      }), h("slot", {
		        name: "settings"
		      }, h("avia-settings", null)), h("slot", {
		        name: "control-bar"
		      }, h("avia-control-bar", null)), h("slot", {
		        name: "ad-control-bar"
		      }, h("avia-ad-control-bar", null)), h("slot", {
		        name: "compact-control-bar"
		      }, !isTv && h("avia-control-bar-compact", null))), h("div", {
		        "class": "avia-layer"
		      }, h("slot", {
		        name: "overlay"
		      }))));
		    }
		  }, {
		    key: "element",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaUiCss;
		    }
		  }]);
		  return AviaUi$1;
		}(H);
		var aviaUnmuteCtaCss = "avia-unmute-cta{box-sizing:border-box;display:inline-block;position:absolute;top:64px;height:var(--avia-control-bar-btn-height);left:var(--avia-default-spacing);pointer-events:auto;background-color:rgba(0, 0, 0, 0.415);border-radius:4px;opacity:1}avia-unmute-cta avia-button{background-image:var(--avia-mute-icon);background-position:-31px center;background-repeat:no-repeat;background-size:60% 45%;line-height:var(--avia-control-bar-btn-height);padding-right:var(--avia-default-spacing);padding-left:50px;font-size:1.1em;text-align:left;width:auto;height:var(--avia-control-bar-btn-height);color:white;cursor:pointer;opacity:0.85}avia-unmute-cta avia-button:hover{background-image:var(--avia-mute-icon-hover)}";
		var AviaUnmuteCta$1 = /*#__PURE__*/function (_H40) {
		  (0, _inherits2["default"])(AviaUnmuteCta$1, _H40);
		  var _super41 = _createSuper(AviaUnmuteCta$1);
		  function AviaUnmuteCta$1() {
		    var _this80;
		    (0, _classCallCheck2["default"])(this, AviaUnmuteCta$1);
		    _this80 = _super41.call(this);
		    _this80.__registerHost();
		    _this80.muted = false;
		    _this80.unmuteCtaVisible = false;
		    _this80.isTouch = false;
		    return _this80;
		  }
		  (0, _createClass2["default"])(AviaUnmuteCta$1, [{
		    key: "getText",
		    value: function getText() {
		      return this.isTouch ? exports.LocalizationId.TAP_TO_UNMUTE : exports.LocalizationId.CLICK_TO_UNMUTE;
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this81 = this;
		      if (!this.unmuteCtaVisible || !this.muted) {
		        return '';
		      }
		      return h("avia-button", {
		        actions: Action.UNMUTE,
		        ref: function ref(element) {
		          return _this81.focusElement = element;
		        }
		      }, h("avia-text", {
		        "loc-id": this.getText()
		      }));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaUnmuteCtaCss;
		    }
		  }]);
		  return AviaUnmuteCta$1;
		}(H);
		openWormhole(AviaUnmuteCta$1, ['muted', 'unmuteCtaVisible', 'isTouch']);
		var aviaVolumeIndicatorCss = "avia-volume-indicator{position:absolute;display:block;box-sizing:border-box;border-radius:var(--avia-volume-indicator-border-radius);background-color:var(--avia-volume-indicator-background-color);width:0;height:0;right:var(--avia-volume-indicator-right);bottom:var(--avia-volume-indicator-bottom);visibility:hidden;padding-top:48px;opacity:0;transition-property:opacity;transition-duration:300ms;transition-timing-function:ease-in;box-shadow:0px 0px 1px 1px rgba(0, 0, 0, 0.3)}avia-volume-indicator:empty{opacity:0}.avia-acc-vol{width:48px;margin:0 auto;background-color:black;height:4px;position:relative}.avia-acc-vol-meter{height:4px;background-color:#fff}.avia-vol-meter-overlay{position:absolute;top:0;left:0;height:4px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAFElEQVQImWNAA/+Z0EUICDAwMAAANNwBBuf8FlcAAAAASUVORK5CYII=');width:100%}avia-volume-indicator.avia-indicator-active{width:var(--avia-volume-indicator-width);height:var(--avia-volume-indicator-height);opacity:1.0}avia-volume-indicator.avia-volume-on::before,avia-volume-indicator.avia-volume-off::before{content:\"\";position:absolute;top:0px;right:0px;bottom:0px;left:0px;opacity:0.85;background-repeat:no-repeat;background-position:center 12px;background-size:40% 30%}avia-volume-indicator.avia-volume-on::before{background-image:var(--avia-unmuted-icon)}avia-volume-indicator.avia-volume-on::before:hover{background-image:var(--avia-unmuted-icon-hover)}avia-volume-indicator.avia-volume-off::before{background-image:var(--avia-mute-icon)}avia-volume-indicator.avia-volume-off::before:hover{background-image:var(--avia-mute-icon-hover)}";
		var AviaVolumeIndicator$1 = /*#__PURE__*/function (_H41) {
		  (0, _inherits2["default"])(AviaVolumeIndicator$1, _H41);
		  var _super42 = _createSuper(AviaVolumeIndicator$1);
		  function AviaVolumeIndicator$1() {
		    var _this82;
		    (0, _classCallCheck2["default"])(this, AviaVolumeIndicator$1);
		    _this82 = _super42.call(this);
		    _this82.__registerHost();
		    _this82.volume = undefined;
		    _this82.accIndicatorState = undefined;
		    return _this82;
		  }
		  (0, _createClass2["default"])(AviaVolumeIndicator$1, [{
		    key: "componentDidRender",
		    value: function componentDidRender() {
		      var _this83 = this;
		      var _a;
		      if (!this.debouncer && this.accIndicatorState.displayTime > 0) {
		        this.debouncer = debounce(function () {
		          var _a;
		          (_a = _this83.el) === null || _a === void 0 ? void 0 : _a.classList.remove(CssNames.INDICATOR_ACTIVE);
		          _this83.visible = false;
		        }, this.accIndicatorState.displayTime);
		      }
		      if (this.visible) {
		        setTimeout(function () {
		          return _this83.el.classList.add(CssNames.INDICATOR_ACTIVE);
		        }, 0);
		        (_a = this.debouncer) === null || _a === void 0 ? void 0 : _a.call(this);
		      }
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _a;
		      var acc = this.accIndicatorState;
		      if (!acc.volumeKey) {
		        (_a = this.el) === null || _a === void 0 ? void 0 : _a.classList.remove(CssNames.INDICATOR_ACTIVE);
		        this.visible = false;
		        return '';
		      }
		      this.visible = true;
		      var vol = this.volume === 0 ? 0 : clampValue(this.volume, 0, 1);
		      return h(Host, {
		        "class": acc.muted || this.volume === 0 ? CssNames.ACC_VOL_OFF : CssNames.ACC_VOL_ON
		      }, h("div", {
		        "class": CssNames.ACC_VOL
		      }, h("div", {
		        "class": CssNames.ACC_VOL_METER,
		        style: {
		          width: toCssPercent(vol)
		        }
		      }), h("div", {
		        "class": CssNames.ACC_VOL_OVERLAY
		      })));
		    }
		  }, {
		    key: "el",
		    get: function get() {
		      return this;
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaVolumeIndicatorCss;
		    }
		  }]);
		  return AviaVolumeIndicator$1;
		}(H);
		openWormhole(AviaVolumeIndicator$1, ['volume', 'accIndicatorState']);
		var aviaVolumeSliderCss = "avia-volume-slider avia-slider{width:100%;margin-top:-4px}";
		var SLIDER_BREAKPOINT_MS = 530;
		var SLIDER_BREAKPOINT_HMS = 560;
		var SLIDER_WIDTH_SM = 60;
		var SLIDER_WIDTH_MD = 100;
		var AviaVolumeSlider$1 = /*#__PURE__*/function (_H42) {
		  (0, _inherits2["default"])(AviaVolumeSlider$1, _H42);
		  var _super43 = _createSuper(AviaVolumeSlider$1);
		  function AviaVolumeSlider$1() {
		    var _this84;
		    (0, _classCallCheck2["default"])(this, AviaVolumeSlider$1);
		    _this84 = _super43.call(this);
		    _this84.__registerHost();
		    _this84.changeEvent = createEvent((0, _assertThisInitialized2["default"])(_this84), "action", 7);
		    _this84.volume = undefined;
		    _this84.muted = false;
		    _this84.linkMuteAndVolume = true;
		    _this84.playerDimensions = undefined;
		    _this84.durationSeconds = undefined;
		    return _this84;
		  }
		  (0, _createClass2["default"])(AviaVolumeSlider$1, [{
		    key: "onInput",
		    value: function onInput(e) {
		      this.changeEvent.emit({
		        action: Action.VOLUME,
		        value: e.detail.value
		      });
		    }
		  }, {
		    key: "onDragging",
		    value: function onDragging(e) {
		      if (e.detail.value !== true) {
		        return;
		      }
		      this.changeEvent.emit({
		        action: Action.UNMUTE,
		        value: true
		      });
		    }
		  }, {
		    key: "getSliderWidth",
		    value: function getSliderWidth() {
		      var maxPlayerWidth = this.durationSeconds >= 3600 ? SLIDER_BREAKPOINT_HMS : SLIDER_BREAKPOINT_MS;
		      return "".concat(this.playerDimensions.width && this.playerDimensions.width <= maxPlayerWidth ? SLIDER_WIDTH_SM : SLIDER_WIDTH_MD, "px");
		    }
		  }, {
		    key: "focus",
		    value: function focus() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.focus();
		    }
		  }, {
		    key: "blur",
		    value: function blur() {
		      var _a;
		      (_a = this.focusElement) === null || _a === void 0 ? void 0 : _a.blur();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this85 = this;
		      return h("div", {
		        style: {
		          display: 'flex',
		          width: this.getSliderWidth(),
		          marginLeft: 'var(--avia-default-spacing)'
		        }
		      }, h("avia-slider", {
		        ref: function ref(element) {
		          return _this85.focusElement = element;
		        },
		        "loc-id": exports.LocalizationId.VOLUME,
		        value: this.linkMuteAndVolume && this.muted ? 0 : this.volume,
		        onInput: function onInput(e) {
		          return _this85.onInput(e);
		        },
		        onDragging: function onDragging(e) {
		          return _this85.onDragging(e);
		        }
		      }));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaVolumeSliderCss;
		    }
		  }]);
		  return AviaVolumeSlider$1;
		}(H);
		openWormhole(AviaVolumeSlider$1, ['linkMuteAndVolume', 'muted', 'volume', 'playerDimensions', 'durationSeconds']);
		var aviaWaitingOverlayCss = "avia-waiting-overlay{display:block;justify-content:center;align-items:center;display:flex}avia-waiting-overlay slot-fb:not(:empty)~avia-spinner{display:none}";
		var AviaWaitingOverlay$1 = /*#__PURE__*/function (_H43) {
		  (0, _inherits2["default"])(AviaWaitingOverlay$1, _H43);
		  var _super44 = _createSuper(AviaWaitingOverlay$1);
		  function AviaWaitingOverlay$1() {
		    var _this86;
		    (0, _classCallCheck2["default"])(this, AviaWaitingOverlay$1);
		    _this86 = _super44.call(this);
		    _this86.__registerHost();
		    _this86.waiting = false;
		    return _this86;
		  }
		  (0, _createClass2["default"])(AviaWaitingOverlay$1, [{
		    key: "render",
		    value: function render() {
		      if (!this.waiting) {
		        return;
		      }
		      return h("avia-overlay", {
		        centered: true
		      }, h("avia-spinner", null));
		    }
		  }], [{
		    key: "style",
		    get: function get() {
		      return aviaWaitingOverlayCss;
		    }
		  }]);
		  return AviaWaitingOverlay$1;
		}(H);
		openWormhole(AviaWaitingOverlay$1, ['waiting']);
		var AviaAccessibility = /*@__PURE__*/proxyCustomElement(AviaAccessibility$1, [0, "avia-accessibility"]);
		var AviaActive = /*@__PURE__*/proxyCustomElement(AviaActive$1, [0, "avia-active"]);
		var AviaAdControlBar = /*@__PURE__*/proxyCustomElement(AviaAdControlBar$1, [0, "avia-ad-control-bar"]);
		var AviaAdProgressBar = /*@__PURE__*/proxyCustomElement(AviaAdProgressBar$1, [0, "avia-ad-progress-bar", {
		  "adPlayheadPosition": [2, "ad-playhead-position"],
		  "isLiveLinear": [4, "is-live-linear"]
		}]);
		var AviaButton = /*@__PURE__*/proxyCustomElement(AviaButton$1, [0, "avia-button", {
		  "locId": [513, "loc-id"],
		  "toggled": [516],
		  "compact": [516],
		  "icon": [516],
		  "variant": [516],
		  "actions": [1],
		  "ids": [513],
		  "disabled": [4],
		  "localeData": [16],
		  "focused": [32]
		}, [[0, "click", "onClick"], [0, "touchstart", "onTouchStart"], [1, "touchend", "onTouchEnd"], [0, "focus", "onFocus"], [0, "blur", "onBlur"], [0, "keyup", "onKeyDown"]]]);
		var AviaControlBar = /*@__PURE__*/proxyCustomElement(AviaControlBar$1, [4, "avia-control-bar", {
		  "active": [516],
		  "controlMode": [513, "control-mode"],
		  "deviceMode": [1, "device-mode"],
		  "isDvr": [4, "is-dvr"],
		  "isLiveLinear": [4, "is-live-linear"],
		  "isIosNative": [4, "is-ios-native"],
		  "settings": [16]
		}]);
		var AviaControlBarCompact = /*@__PURE__*/proxyCustomElement(AviaControlBarCompact$1, [4, "avia-control-bar-compact"]);
		var AviaControlGroup = /*@__PURE__*/proxyCustomElement(AviaControlGroup$1, [0, "avia-control-group", {
		  "orientation": [513]
		}]);
		var AviaCurrentTime = /*@__PURE__*/proxyCustomElement(AviaCurrentTime$1, [0, "avia-current-time", {
		  "currentTimeSeconds": [2, "current-time-seconds"],
		  "localeData": [16],
		  "isLiveLinear": [4, "is-live-linear"],
		  "isDvr": [4, "is-dvr"]
		}]);
		var AviaDuration = /*@__PURE__*/proxyCustomElement(AviaDuration$1, [0, "avia-duration", {
		  "durationSeconds": [2, "duration-seconds"],
		  "localeData": [16],
		  "isLiveLinear": [4, "is-live-linear"],
		  "isDvr": [4, "is-dvr"]
		}]);
		var AviaFullscreenToggle = /*@__PURE__*/proxyCustomElement(AviaFullscreenToggle$1, [0, "avia-fullscreen-toggle", {
		  "fullscreen": [4],
		  "fullscreenDisabled": [4, "fullscreen-disabled"],
		  "compact": [516]
		}]);
		var AviaLiveControl = /*@__PURE__*/proxyCustomElement(AviaLiveControl$1, [0, "avia-live-control", {
		  "isLiveLinear": [4, "is-live-linear"],
		  "isDvr": [4, "is-dvr"],
		  "live": [4]
		}]);
		var AviaMenu = /*@__PURE__*/proxyCustomElement(AviaMenu$1, [0, "avia-menu", {
		  "hasSubmenu": [4, "has-submenu"],
		  "locId": [1, "loc-id"],
		  "titlebar": [4],
		  "localeData": [16],
		  "options": [1040]
		}, [[0, "action", "onAction"], [0, "keydown", "onKeydown"]]]);
		var AviaMenuItem = /*@__PURE__*/proxyCustomElement(AviaMenuItem$1, [4, "avia-menu-item", {
		  "disabled": [1540],
		  "selected": [516],
		  "label": [1],
		  "action": [1],
		  "hasSubmenu": [4, "has-submenu"]
		}, [[0, "click", "onClick"]]]);
		var AviaMuteToggle = /*@__PURE__*/proxyCustomElement(AviaMuteToggle$1, [0, "avia-mute-toggle", {
		  "muted": [4],
		  "muteDisabled": [4, "mute-disabled"],
		  "compact": [516]
		}]);
		var AviaOverlay = /*@__PURE__*/proxyCustomElement(AviaOverlay$1, [0, "avia-overlay", {
		  "centered": [516]
		}]);
		var AviaPanel = /*@__PURE__*/proxyCustomElement(AviaPanel$1, [4, "avia-panel", {
		  "titlebar": [4],
		  "back": [4],
		  "locId": [1, "loc-id"],
		  "localeData": [16]
		}]);
		var AviaPauseOverlay = /*@__PURE__*/proxyCustomElement(AviaPauseOverlay$1, [0, "avia-pause-overlay", {
		  "playing": [4],
		  "waiting": [4]
		}]);
		var AviaPlayCta = /*@__PURE__*/proxyCustomElement(AviaPlayCta$1, [0, "avia-play-cta"]);
		var AviaPlayOverlay = /*@__PURE__*/proxyCustomElement(AviaPlayOverlay$1, [0, "avia-play-overlay", {
		  "playing": [4],
		  "controlMode": [1, "control-mode"],
		  "playDisabled": [4, "play-disabled"],
		  "pausable": [4],
		  "isTouch": [4, "is-touch"]
		}, [[2, "click", "onClick"]]]);
		var AviaPlayToggle = /*@__PURE__*/proxyCustomElement(AviaPlayToggle$1, [0, "avia-play-toggle", {
		  "playing": [4],
		  "playDisabled": [4, "play-disabled"],
		  "pausable": [4],
		  "compact": [516]
		}]);
		var AviaPoster = /*@__PURE__*/proxyCustomElement(AviaPoster$1, [4, "avia-poster", {
		  "posterActive": [4, "poster-active"],
		  "posterImageUrl": [1, "poster-image-url"],
		  "playing": [4],
		  "waiting": [4]
		}, [[2, "click", "handleAction"]]]);
		var AviaProgressBar = /*@__PURE__*/proxyCustomElement(AviaProgressBar$1, [0, "avia-progress-bar", {
		  "bufferedRanges": [16],
		  "currentTimeSeconds": [2, "current-time-seconds"],
		  "durationSeconds": [2, "duration-seconds"],
		  "localeData": [16],
		  "segmentBreakPositions": [1, "segment-break-positions"],
		  "preview": [16],
		  "increment": [2],
		  "live": [4],
		  "hovering": [32],
		  "cursor": [32],
		  "value": [32]
		}, [[1, "mouseenter", "onMouseEnter"], [1, "mouseleave", "onMouseLeave"], [9, "mousemove", "onMouseMove"]]]);
		var AviaSeekBackButton = /*@__PURE__*/proxyCustomElement(AviaSeekBackButton$1, [0, "avia-seek-back-button", {
		  "seekBackDisabled": [4, "seek-back-disabled"],
		  "isLiveLinear": [4, "is-live-linear"]
		}]);
		var AviaSeekForwardButton = /*@__PURE__*/proxyCustomElement(AviaSeekForwardButton$1, [0, "avia-seek-forward-button", {
		  "seekForwardDisabled": [4, "seek-forward-disabled"],
		  "isLiveLinear": [4, "is-live-linear"]
		}]);
		var AviaSeekIndicator = /*@__PURE__*/proxyCustomElement(AviaSeekIndicator$1, [0, "avia-seek-indicator", {
		  "durationSeconds": [2, "duration-seconds"],
		  "accIndicatorState": [16]
		}]);
		var AviaSettings = /*@__PURE__*/proxyCustomElement(AviaSettings$1, [0, "avia-settings", {
		  "settings": [16],
		  "localeData": [16],
		  "controlMode": [1, "control-mode"],
		  "deviceMode": [1, "device-mode"],
		  "currentId": [32],
		  "menu": [32]
		}, [[0, "action", "onAction"], [4, "keydown", "onKeyDown"]]]);
		var AviaSettingsAudio = /*@__PURE__*/proxyCustomElement(AviaSettingsAudio$1, [0, "avia-settings-audio", {
		  "localeData": [16],
		  "settings": [16]
		}, [[0, "action", "onAction"]]]);
		var AviaSettingsLanguage = /*@__PURE__*/proxyCustomElement(AviaSettingsLanguage$1, [0, "avia-settings-language", {
		  "localeData": [16],
		  "settings": [16]
		}]);
		var AviaSettingsQuality = /*@__PURE__*/proxyCustomElement(AviaSettingsQuality$1, [0, "avia-settings-quality", {
		  "localeData": [16],
		  "settings": [16],
		  "qualityLabel": [2, "quality-label"]
		}, [[0, "action", "onAction"]]]);
		var AviaSettingsText = /*@__PURE__*/proxyCustomElement(AviaSettingsText$1, [0, "avia-settings-text", {
		  "localeData": [16],
		  "settings": [16]
		}, [[0, "action", "onAction"]]]);
		var AviaSettingsToggle = /*@__PURE__*/proxyCustomElement(AviaSettingsToggle$1, [0, "avia-settings-toggle", {
		  "settings": [16],
		  "settingsDisabled": [4, "settings-disabled"]
		}]);
		var AviaSlider = /*@__PURE__*/proxyCustomElement(AviaSlider$1, [4, "avia-slider", {
		  "locId": [513, "loc-id"],
		  "min": [2],
		  "max": [2],
		  "value": [1026],
		  "ranges": [16],
		  "list": [16],
		  "ariaValuetext": [1, "aria-valuetext"],
		  "increment": [2],
		  "localeData": [16],
		  "deviceMode": [1, "device-mode"],
		  "valueInternal": [32]
		}, [[1, "touchstart", "onMouseDown"], [0, "mousedown", "onMouseDown"], [8, "touchmove", "onMouseMove"], [8, "mousemove", "onMouseMove"], [9, "touchend", "onMouseUp"], [8, "mouseup", "onMouseUp"], [2, "keydown", "onKeydown"]]]);
		var AviaSpinner = /*@__PURE__*/proxyCustomElement(AviaSpinner$1, [0, "avia-spinner"]);
		var AviaText = /*@__PURE__*/proxyCustomElement(AviaText$1, [0, "avia-text", {
		  "locId": [513, "loc-id"],
		  "localeData": [16]
		}]);
		var AviaTextToggle = /*@__PURE__*/proxyCustomElement(AviaTextToggle$1, [0, "avia-text-toggle", {
		  "textTrackEnabled": [4, "text-track-enabled"],
		  "textDisabled": [4, "text-disabled"]
		}]);
		var AviaTimeDisplay = /*@__PURE__*/proxyCustomElement(AviaTimeDisplay$1, [0, "avia-time-display", {
		  "timeDisplayValue": [1, "time-display-value"],
		  "currentTimeSeconds": [2, "current-time-seconds"],
		  "durationSeconds": [2, "duration-seconds"],
		  "isLiveLinear": [4, "is-live-linear"],
		  "isDvr": [4, "is-dvr"]
		}]);
		var AviaTimeRemaining = /*@__PURE__*/proxyCustomElement(AviaTimeRemaining$1, [0, "avia-time-remaining", {
		  "currentTimeSeconds": [2, "current-time-seconds"],
		  "durationSeconds": [2, "duration-seconds"],
		  "localeData": [16]
		}]);
		var AviaUi = /*@__PURE__*/proxyCustomElement(AviaUi$1, [4, "avia-ui", {
		  "controlMode": [513, "control-mode"],
		  "fullscreen": [516],
		  "active": [516],
		  "deviceMode": [513, "device-mode"],
		  "fullscreenDisabled": [4, "fullscreen-disabled"],
		  "muted": [4],
		  "muteDisabled": [4, "mute-disabled"],
		  "volume": [2],
		  "playing": [4],
		  "playDisabled": [4, "play-disabled"],
		  "textTrackEnabled": [4, "text-track-enabled"],
		  "textDisabled": [4, "text-disabled"],
		  "timeDisplayValue": [1, "time-display-value"],
		  "isLiveLinear": [4, "is-live-linear"],
		  "isDvr": [4, "is-dvr"],
		  "live": [4],
		  "playheadPosition": [2, "playhead-position"],
		  "durationSeconds": [2, "duration-seconds"],
		  "currentTimeSeconds": [2, "current-time-seconds"],
		  "seekDisabled": [4, "seek-disabled"],
		  "seekBackDisabled": [4, "seek-back-disabled"],
		  "seekForwardDisabled": [4, "seek-forward-disabled"],
		  "settingsDisabled": [4, "settings-disabled"],
		  "adPlayheadPosition": [2, "ad-playhead-position"],
		  "segmentBreakPositions": [1, "segment-break-positions"],
		  "localeData": [16],
		  "preview": [16],
		  "accIndicatorState": [16],
		  "unmuteCtaVisible": [4, "unmute-cta-visible"],
		  "settings": [16],
		  "posterActive": [4, "poster-active"],
		  "posterImageUrl": [1, "poster-image-url"],
		  "qualityLabel": [2, "quality-label"],
		  "waiting": [4],
		  "initialized": [4],
		  "pausable": [4],
		  "isTouch": [4, "is-touch"],
		  "isIosNative": [4, "is-ios-native"],
		  "linkMuteAndVolume": [4, "link-mute-and-volume"],
		  "playerDimensions": [16],
		  "bufferedRanges": [16]
		}, [[0, "action", "handleAction"]]]);
		var AviaUnmuteCta = /*@__PURE__*/proxyCustomElement(AviaUnmuteCta$1, [0, "avia-unmute-cta", {
		  "muted": [4],
		  "unmuteCtaVisible": [4, "unmute-cta-visible"],
		  "isTouch": [4, "is-touch"]
		}]);
		var AviaVolumeIndicator = /*@__PURE__*/proxyCustomElement(AviaVolumeIndicator$1, [0, "avia-volume-indicator", {
		  "volume": [2],
		  "accIndicatorState": [16]
		}]);
		var AviaVolumeSlider = /*@__PURE__*/proxyCustomElement(AviaVolumeSlider$1, [0, "avia-volume-slider", {
		  "volume": [2],
		  "muted": [4],
		  "linkMuteAndVolume": [4, "link-mute-and-volume"],
		  "playerDimensions": [16],
		  "durationSeconds": [2, "duration-seconds"]
		}]);
		var AviaWaitingOverlay = /*@__PURE__*/proxyCustomElement(AviaWaitingOverlay$1, [0, "avia-waiting-overlay", {
		  "waiting": [4]
		}]);
		var defineCustomElements = function defineCustomElements(opts) {
		  if (typeof customElements !== 'undefined') {
		    [AviaAccessibility, AviaActive, AviaAdControlBar, AviaAdProgressBar, AviaButton, AviaControlBar, AviaControlBarCompact, AviaControlGroup, AviaCurrentTime, AviaDuration, AviaFullscreenToggle, AviaLiveControl, AviaMenu, AviaMenuItem, AviaMuteToggle, AviaOverlay, AviaPanel, AviaPauseOverlay, AviaPlayCta, AviaPlayOverlay, AviaPlayToggle, AviaPoster, AviaProgressBar, AviaSeekBackButton, AviaSeekForwardButton, AviaSeekIndicator, AviaSettings, AviaSettingsAudio, AviaSettingsLanguage, AviaSettingsQuality, AviaSettingsText, AviaSettingsToggle, AviaSlider, AviaSpinner, AviaText, AviaTextToggle, AviaTimeDisplay, AviaTimeRemaining, AviaUi, AviaUnmuteCta, AviaVolumeIndicator, AviaVolumeSlider, AviaWaitingOverlay].forEach(function (cmp) {
		      if (!customElements.get(cmp.is)) {
		        customElements.define(cmp.is, cmp, opts);
		      }
		    });
		  }
		};
		exports.AviaAccessibility = AviaAccessibility;
		exports.AviaActive = AviaActive;
		exports.AviaAdControlBar = AviaAdControlBar;
		exports.AviaAdProgressBar = AviaAdProgressBar;
		exports.AviaButton = AviaButton;
		exports.AviaControlBar = AviaControlBar;
		exports.AviaControlBarCompact = AviaControlBarCompact;
		exports.AviaControlGroup = AviaControlGroup;
		exports.AviaCurrentTime = AviaCurrentTime;
		exports.AviaDuration = AviaDuration;
		exports.AviaFullscreenToggle = AviaFullscreenToggle;
		exports.AviaLiveControl = AviaLiveControl;
		exports.AviaMenu = AviaMenu;
		exports.AviaMenuItem = AviaMenuItem;
		exports.AviaMuteToggle = AviaMuteToggle;
		exports.AviaOverlay = AviaOverlay;
		exports.AviaPanel = AviaPanel;
		exports.AviaPauseOverlay = AviaPauseOverlay;
		exports.AviaPlayCta = AviaPlayCta;
		exports.AviaPlayOverlay = AviaPlayOverlay;
		exports.AviaPlayToggle = AviaPlayToggle;
		exports.AviaPoster = AviaPoster;
		exports.AviaProgressBar = AviaProgressBar;
		exports.AviaSeekBackButton = AviaSeekBackButton;
		exports.AviaSeekForwardButton = AviaSeekForwardButton;
		exports.AviaSeekIndicator = AviaSeekIndicator;
		exports.AviaSettings = AviaSettings;
		exports.AviaSettingsAudio = AviaSettingsAudio;
		exports.AviaSettingsLanguage = AviaSettingsLanguage;
		exports.AviaSettingsQuality = AviaSettingsQuality;
		exports.AviaSettingsText = AviaSettingsText;
		exports.AviaSettingsToggle = AviaSettingsToggle;
		exports.AviaSlider = AviaSlider;
		exports.AviaSpinner = AviaSpinner;
		exports.AviaText = AviaText;
		exports.AviaTextToggle = AviaTextToggle;
		exports.AviaTimeDisplay = AviaTimeDisplay;
		exports.AviaTimeRemaining = AviaTimeRemaining;
		exports.AviaUi = AviaUi;
		exports.AviaUiPlugin = AviaUiPlugin;
		exports.AviaUnmuteCta = AviaUnmuteCta;
		exports.AviaVolumeIndicator = AviaVolumeIndicator;
		exports.AviaVolumeSlider = AviaVolumeSlider;
		exports.AviaWaitingOverlay = AviaWaitingOverlay;
		exports.ID = ID;
		exports.PreviewTimeTransform = PreviewTimeTransform;
		exports.UI = UI;
		exports.createPlugin = createPlugin;
		exports.createUiPlugin = createUiPlugin;
		exports.defineCustomElements = defineCustomElements;
		exports.plugin = plugin;
		exports.setAssetPath = setAssetPath;
		exports.setPlatformOptions = setPlatformOptions;
		exports.ui = ui;
		defineCustomElements();

		
	} (avia_ui$1));

	var avia_ui = /*@__PURE__*/getDefaultExportFromCjs(avia_ui$1);

	return avia_ui;

}));
//# sourceMappingURL=avia.ui.js.map

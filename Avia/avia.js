(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.avia = {}));
})(this, (function (exports) { 'use strict';

  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../node_modules/screenfull/dist/screenfull.js
  var require_screenfull = __commonJS({
    "../node_modules/screenfull/dist/screenfull.js"(exports, module) {
      (function() {
        var document2 = typeof window !== "undefined" && typeof window.document !== "undefined" ? window.document : {};
        var isCommonjs = typeof module !== "undefined" && module.exports;
        var fn = function() {
          var val;
          var fnMap = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror"
            ],
            // New WebKit
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror"
            ],
            // Old WebKit
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror"
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror"
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError"
            ]
          ];
          var i = 0;
          var l = fnMap.length;
          var ret = {};
          for (; i < l; i++) {
            val = fnMap[i];
            if (val && val[1] in document2) {
              for (i = 0; i < val.length; i++) {
                ret[fnMap[0][i]] = val[i];
              }
              return ret;
            }
          }
          return false;
        }();
        var eventNameMap = {
          change: fn.fullscreenchange,
          error: fn.fullscreenerror
        };
        var screenfull3 = {
          request: function(element, options) {
            return new Promise(function(resolve, reject) {
              var onFullScreenEntered = function() {
                this.off("change", onFullScreenEntered);
                resolve();
              }.bind(this);
              this.on("change", onFullScreenEntered);
              element = element || document2.documentElement;
              var returnPromise = element[fn.requestFullscreen](options);
              if (returnPromise instanceof Promise) {
                returnPromise.then(onFullScreenEntered).catch(reject);
              }
            }.bind(this));
          },
          exit: function() {
            return new Promise(function(resolve, reject) {
              if (!this.isFullscreen) {
                resolve();
                return;
              }
              var onFullScreenExit = function() {
                this.off("change", onFullScreenExit);
                resolve();
              }.bind(this);
              this.on("change", onFullScreenExit);
              var returnPromise = document2[fn.exitFullscreen]();
              if (returnPromise instanceof Promise) {
                returnPromise.then(onFullScreenExit).catch(reject);
              }
            }.bind(this));
          },
          toggle: function(element, options) {
            return this.isFullscreen ? this.exit() : this.request(element, options);
          },
          onchange: function(callback) {
            this.on("change", callback);
          },
          onerror: function(callback) {
            this.on("error", callback);
          },
          on: function(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) {
              document2.addEventListener(eventName, callback, false);
            }
          },
          off: function(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) {
              document2.removeEventListener(eventName, callback, false);
            }
          },
          raw: fn
        };
        if (!fn) {
          if (isCommonjs) {
            module.exports = { isEnabled: false };
          } else {
            window.screenfull = { isEnabled: false };
          }
          return;
        }
        Object.defineProperties(screenfull3, {
          isFullscreen: {
            get: function() {
              return Boolean(document2[fn.fullscreenElement]);
            }
          },
          element: {
            enumerable: true,
            get: function() {
              return document2[fn.fullscreenElement];
            }
          },
          isEnabled: {
            enumerable: true,
            get: function() {
              return Boolean(document2[fn.fullscreenEnabled]);
            }
          }
        });
        if (isCommonjs) {
          module.exports = screenfull3;
        } else {
          window.screenfull = screenfull3;
        }
      })();
    }
  });

  // src/enum/LoggerEvent.ts
  var LoggerEvent = /* @__PURE__ */ ((LoggerEvent2) => {
    LoggerEvent2["LOG_EVENT"] = "logevent";
    LoggerEvent2["TIME_EVENT"] = "logtimeevent";
    LoggerEvent2["TIME_END_EVENT"] = "logtimeendevent";
    return LoggerEvent2;
  })(LoggerEvent || {});

  // src/enum/LogLevel.ts
  var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
    LogLevel2["OFF"] = "off";
    LogLevel2["ERROR"] = "error";
    LogLevel2["WARN"] = "warn";
    LogLevel2["INFO"] = "info";
    LogLevel2["DEBUG"] = "debug";
    return LogLevel2;
  })(LogLevel || {});

  // src/util/StringUtil.ts
  var StringUtil_exports = {};
  __export(StringUtil_exports, {
    camelToDash: () => camelToDash,
    formatTime: () => formatTime,
    getNumLines: () => getNumLines,
    hmsToSec: () => hmsToSec,
    msToHms: () => msToHms,
    padStart: () => padStart,
    secToHms: () => secToHms,
    template: () => template,
    uid8: () => uid8,
    uuid: () => uuid,
    xmlToJson: () => xmlToJson,
    zeroFill: () => zeroFill
  });

  // src/util/Type.ts
  var Type_exports = {};
  __export(Type_exports, {
    isBoolean: () => isBoolean,
    isEmpty: () => isEmpty,
    isFunction: () => isFunction,
    isNumber: () => isNumber,
    isObject: () => isObject,
    isString: () => isString,
    isUndefined: () => isUndefined
  });
  function isEmpty(obj) {
    return obj === null || obj === void 0 || Array.isArray(obj) && obj.length === 0 || isObject(obj) && Object.keys(obj).length === 0 || isString(obj) && obj === "";
  }
  function isFunction(obj) {
    return typeof obj === "function";
  }
  function isString(obj) {
    return typeof obj === "string";
  }
  function isUndefined(obj) {
    return typeof obj === "undefined";
  }
  function isNumber(obj) {
    return typeof obj === "number";
  }
  function isBoolean(obj) {
    return typeof obj === "boolean";
  }
  function isObject(obj) {
    return typeof obj === "object";
  }

  // src/util/StringUtil.ts
  var dre = /([a-z\d])([A-Z])/g;
  var cdr = /\W+/g;
  function camelToDash(term) {
    const d = "-";
    return term.replace(cdr, d).replace(dre, "$1-$2").toLowerCase();
  }
  function uid8() {
    const s4 = function() {
      return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
    };
    return s4() + s4();
  }
  function uuid() {
    const url = URL.createObjectURL(new Blob());
    const uuid2 = url.toString();
    URL.revokeObjectURL(url);
    return uuid2.slice(uuid2.lastIndexOf("/") + 1);
  }
  function xmlToJson(xml) {
    let obj = {};
    if (xml.nodeType === 1 && xml.attributes.length > 0) {
      for (let j = 0, k = xml.attributes.length; j < k; j++) {
        const attribute = xml.attributes.item(j);
        obj[attribute.nodeName] = attribute.nodeValue;
      }
    } else if (xml.nodeType === 3) {
      obj = xml.nodeValue;
    }
    if (xml.nodeName === "p") {
      obj.text = "";
      xml.childNodes.forEach((node) => {
        if (node.nodeName === "metadata") {
          return;
        }
        const text = new XMLSerializer().serializeToString(node);
        if (node.nodeType === 1) {
          obj.text += node.tagName === "br" ? "\n" : text;
        }
        if (node.nodeType === 3) {
          obj.text += text;
        }
      });
    }
    if (xml.hasChildNodes()) {
      for (let i = 0, h = xml.childNodes.length; i < h; i++) {
        const item = xml.childNodes.item(i), nodeName = item.nodeName;
        if (isUndefined(obj[nodeName])) {
          obj[nodeName] = xmlToJson(item);
          continue;
        }
        if (isUndefined(obj[nodeName].push)) {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
    return obj;
  }
  function getNumLines(text) {
    return text && (text.match(/\n/g) || []).length + 1;
  }
  function template(input, context, open = "{{", close = "}}") {
    if (!input) {
      return input;
    }
    const regex = new RegExp(`${open}((?:(?!(${open}|${close})).)+)${close}`, "g");
    return input.replace(regex, (match, token) => !isUndefined(context == null ? void 0 : context[token]) ? context[token] : match);
  }
  function padStart(str, targetLength, padString = " ") {
    targetLength = targetLength | 0;
    const len = str.length;
    if (len > targetLength) {
      return str;
    }
    targetLength = targetLength - len;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + str;
  }
  function secToHms(seconds, max = 61) {
    if (seconds == null || isNaN(seconds)) {
      return "00:00";
    }
    seconds = seconds | 0;
    let time = zeroFill(seconds % 60);
    seconds = seconds / 60 | 0;
    time = zeroFill(seconds % 60) + ":" + time;
    seconds = seconds / 60 | 0;
    if (seconds > 0) {
      time = zeroFill(seconds) + ":" + time;
    }
    if (max >= 3600 && time.length === 5) {
      time = "00:" + time;
    }
    return time;
  }
  function msToHms(ms) {
    return formatTime(new Date(ms), "HH:mm:ss:sss", { offset: 0 });
  }
  function zeroFill(time, len = 2) {
    return padStart(String(time), len, "0");
  }
  function hmsToSec(timeCode, framerate = 30) {
    if (!timeCode) {
      return NaN;
    }
    const pieces = timeCode.split(":");
    let ms = 0;
    if (pieces.length === 4) {
      ms = parseInt(pieces.pop()) / framerate;
    } else if (pieces.length === 3) {
      pieces[2] = pieces[2].replace(",", ".");
      if (pieces[2].indexOf(".") !== -1) {
        const parts = pieces[2].split(".");
        if ((parts != null ? parts.length : void 0) > 1) {
          pieces[2] = parts[0];
          ms = parseInt(parts[1]) / 1e3;
        }
      }
    }
    let time = parseInt(pieces.pop());
    while (pieces.length > 0) {
      time += Math.pow(60, pieces.length) * parseInt(pieces.shift());
    }
    return time + ms;
  }
  function formatTime(date, format = "h:mm:ss A", tz = { timezone: "", offset: -(new Date().getTimezoneOffset() / 60) }) {
    if (tz.offset != null && tz.offset !== 0) {
      date = new Date(date.getTime() + Math.round(tz.offset * 60 * 60 * 1e3));
    }
    if (isNaN(date.getTime())) {
      return "";
    }
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();
    const twelve = hours % 12 || 12;
    const a = hours < 12 ? "am" : "pm";
    const replace = {
      hh: zeroFill(twelve),
      h: twelve,
      HH: zeroFill(hours),
      H: hours,
      mm: zeroFill(minutes),
      m: minutes,
      sss: zeroFill(milliseconds, 3),
      ss: zeroFill(seconds),
      s: seconds,
      a,
      A: a.toUpperCase(),
      z: tz.timezone
    };
    for (const key in replace) {
      format = format.replace(key, replace[key]);
    }
    return format;
  }

  // src/core/CoreEvent.ts
  var CoreEvent = class {
    /**
        * Custom event class
        */
    constructor(type, target, detail) {
      this.timeStamp = Date.now();
      this.detail = detail;
      this.target = target;
      this.type = type;
    }
  };

  // src/core/LinkedList.ts
  var LinkedNode = class {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  };
  var LinkedList = class {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    get empty() {
      return this.head == null;
    }
    forEach(func) {
      let node = this.head;
      while (node) {
        func(node.value);
        node = node.next;
      }
    }
    add(value) {
      const node = new LinkedNode(value);
      if (this.head == null) {
        this.head = node;
        this.head.next = null;
        this.tail = null;
      } else if (this.tail == null) {
        this.head.next = this.tail = node;
      } else {
        this.tail.next = this.tail = node;
      }
    }
    has(value) {
      let node = this.head;
      while (node) {
        if (node.value === value) {
          return true;
        }
        node = node.next;
      }
      return false;
    }
    delete(value) {
      let previous = null;
      let node = this.head;
      while (node) {
        if (node.value === value) {
          if (previous) {
            previous.next = node.next;
          }
          if (node === this.head) {
            this.head = node.next;
          } else if (node === this.tail) {
            this.tail = previous !== this.head ? previous : null;
          }
          return true;
        }
        previous = node;
        node = node.next;
      }
      return false;
    }
    clear() {
      let node = this.head;
      let next;
      while (node) {
        next = node.next;
        node.value = node.next = null;
        node = next;
      }
      this.head = this.tail = null;
    }
  };

  // src/core/Emitter.ts
  var Emitter = class {
    /**
     * An event emitter, with methods to add and remove event listeners.
     * Base class for any class using event-based communication.
     */
    constructor(options, target) {
      this.target = target || this;
      this.opts = options || {};
      this.eventMap = {};
      const o = this.opts;
      for (const q in o) {
        if (isFunction(o[q]) && /^on[A-Z]/.test(q)) {
          const e = q.charAt(2).toLowerCase() + q.substring(3);
          this.on(e, o[q]);
          delete this.opts[q];
        }
      }
    }
    destroy() {
      let q;
      if (this.opts) {
        for (q in this.opts) {
          delete this.opts[q];
        }
        this.opts = null;
      }
      this.offAll(null);
      if (this.eventMap) {
        for (q in this.eventMap) {
          delete this.eventMap[q];
        }
        this.eventMap = null;
      }
    }
    /**
     * Adds an event listener
     */
    on(name, func) {
      if (!this.eventMap || !name || !isFunction(func)) {
        return;
      }
      const handlers = this.eventMap[name] || (this.eventMap[name] = new LinkedList());
      if (handlers.has(func)) {
        return;
      }
      handlers.add(func);
    }
    /**
     * Adds a one time event listener
     */
    once(name, func) {
      if (!this.eventMap || !name || !isFunction(func)) {
        return;
      }
      const handler = (event) => {
        this.off(name, handler);
        func(event);
      };
      this.on(name, handler);
    }
    /**
     * Removes the supplied EventHandler, or, if omitted, will remove all
     * handlers for the supplied (required) event name
     */
    off(name, func) {
      !func && this.offAll(name);
      func && this.remove(name, func);
    }
    /**
     * Removes all event handlers for the supplied (required) event name
     */
    offAll(name) {
      if (!this.eventMap) {
        return;
      }
      const map = this.eventMap;
      if (name) {
        this.remove(name, null);
        return;
      }
      for (const q in map) {
        this.remove(q, null);
      }
    }
    hasListenerFor(name) {
      return !!(this.eventMap && this.eventMap[name] && !this.eventMap[name].empty);
    }
    emit(name, detail) {
      const e = new CoreEvent(name, this.target || this, detail);
      this.dispatchEvt(e);
    }
    dispatchEvt(e) {
      if (!this.eventMap || !this.eventMap[e.type]) {
        return;
      }
      this.eventMap[e.type].forEach((h) => h(e));
    }
    remove(name, func = null) {
      if (!this.eventMap || !this.eventMap[name]) {
        return;
      }
      if (!func) {
        this.eventMap[name].clear();
      } else {
        this.eventMap[name].delete(func);
      }
    }
  };

  // src/core/Logger.ts
  var Levels = {
    ["off" /* OFF */]: 0,
    ["error" /* ERROR */]: 100,
    ["warn" /* WARN */]: 200,
    ["info" /* INFO */]: 300,
    ["debug" /* DEBUG */]: 400
  };
  var _Logger = class extends Emitter {
    constructor(opts) {
      super(opts);
      this.useConsole = false;
      this.pStartTime = {};
      this.useConsole = isObject(console);
      this.id = opts.id || uid8();
      this.tzero = Date.now();
      this.logLevel = isEmpty(this.opts.logLevel) ? "off" /* OFF */ : this.opts.logLevel;
    }
    static error(e) {
      console && console.error(e);
    }
    static warn(m) {
      console && console.warn(m);
    }
    static log(m) {
      console && console.log(m);
    }
    /**
     * @deprecated Log deprecation message
     */
    static deprecated(msg) {
      if (_Logger.deprecatedCounts[msg] >= _Logger.maxDeprecatedWarnings) {
        return;
      }
      _Logger.warn(msg);
      _Logger.deprecatedCounts[msg] = (_Logger.deprecatedCounts[msg] || 0) + 1;
    }
    get logLevel() {
      return this.pLogLevel;
    }
    set logLevel(level) {
      this.pLogLevel = level;
    }
    assert(expression, label) {
      if (!expression) {
        this.error(`Assertion failed! - "${label || ""}"`);
      }
    }
    log(logLevel, ...items) {
      for (let i = 0, n = items.length; i < n; i++) {
        this.emit("logevent" /* LOG_EVENT */, this.assembleEvent(items[i], logLevel));
      }
      if (!this.shouldLog(logLevel)) {
        return;
      }
      items.unshift(this.getStamp());
      console.log(...items);
    }
    dir(logLevel, obj, label) {
      const lbl = label || "Unnamed Object";
      this.emit("logevent" /* LOG_EVENT */, this.assembleEvent(obj, logLevel, lbl));
      if (!this.shouldLog(logLevel)) {
        return;
      }
      console.log(this.getStamp() + `Object: ${lbl}`);
      console.dir(obj);
    }
    error(msg) {
      this.emit("logevent" /* LOG_EVENT */, this.assembleEvent(msg, "error" /* ERROR */));
      if (!this.shouldLog("error" /* ERROR */)) {
        return;
      }
      console.error(this.getStamp() + msg);
    }
    warn(msg) {
      this.emit("logevent" /* LOG_EVENT */, this.assembleEvent(msg, "warn" /* WARN */));
      if (!this.shouldLog("warn" /* WARN */)) {
        return;
      }
      console.warn(this.getStamp() + msg);
    }
    time(label, startTime = performance.now()) {
      if (this.pStartTime[label]) {
        this.warn(`Timer ${label} already exists`);
        return;
      }
      this.pStartTime[label] = startTime;
      this.emit("logtimeevent" /* TIME_EVENT */, this.assembleEvent({ startTime }, "info" /* INFO */, label));
    }
    timeEnd(label) {
      if (!this.pStartTime[label]) {
        this.warn(`Timer ${label} does not exist`);
        return;
      }
      const startTime = this.pStartTime[label];
      delete this.pStartTime[label];
      const duration = performance.now() - startTime;
      this.emit("logtimeendevent" /* TIME_END_EVENT */, this.assembleEvent({ startTime, duration }, "info" /* INFO */, label));
      if (!this.shouldLog("info" /* INFO */)) {
        return;
      }
      console.log(`${this.getStamp()} Timer: ${label} ${Math.round(duration)}ms`);
    }
    assembleEvent(item, level, label = null) {
      return {
        id: this.id,
        item,
        level,
        label
      };
    }
    shouldLog(level) {
      return this.useConsole && Levels[this.pLogLevel] >= Levels[level];
    }
    getStamp() {
      return `[${this.id + "]  " + msToHms(Date.now() - this.tzero)} > `;
    }
  };
  var Logger = _Logger;
  Logger.maxDeprecatedWarnings = 1;
  Logger.deprecatedCounts = {};

  // src/enum/AviaHookType.ts
  var AviaHookType = /* @__PURE__ */ ((AviaHookType2) => {
    AviaHookType2["CREATE_PLAYER"] = "createplayer";
    AviaHookType2["REMOVE_PLAYER"] = "removeplayer";
    AviaHookType2["DEVICE_CAPABILITIES"] = "devicecapabilities";
    AviaHookType2["SCRIPT_LOAD"] = "scriptload";
    return AviaHookType2;
  })(AviaHookType || {});

  // src/enum/Measurement.ts
  var Measurement = /* @__PURE__ */ ((Measurement2) => {
    Measurement2["PLAYER_CREATION"] = "player-creation";
    Measurement2["RESOURCE_ATTACHMENT"] = "resource-attachment";
    Measurement2["AD_ADAPTER_CREATION"] = "ad-adapter-creation";
    Measurement2["AD_RESOURCE_CREATION"] = "ad-resource-creation";
    Measurement2["PLAYBACK_ADAPTER_CREATION"] = "playback-adapter-creation";
    Measurement2["RESOURCE_LOAD"] = "resource-load";
    Measurement2["RESOURCE_PLAYBACK"] = "resource-playback";
    Measurement2["FIRST_FRAME"] = "first-frame";
    return Measurement2;
  })(Measurement || {});

  // src/error/CoreError.ts
  var CoreError = class extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
    }
  };

  // src/error/assert.ts
  function assert(condition, message) {
    if (!condition) {
      throw new CoreError(message);
    }
  }

  // src/enum/ErrorCategory.ts
  var ErrorCategory = /* @__PURE__ */ ((ErrorCategory2) => {
    ErrorCategory2["AD"] = "Ad";
    ErrorCategory2["RESOURCE"] = "Resource";
    ErrorCategory2["PLAYBACK"] = "Playback";
    ErrorCategory2["VIDEO_START"] = "Video start";
    ErrorCategory2["HOOK"] = "Hook";
    ErrorCategory2["API"] = "API";
    ErrorCategory2["EVENT"] = "Event";
    return ErrorCategory2;
  })(ErrorCategory || {});

  // src/enum/ErrorCode.ts
  var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
    ErrorCode2["INVALID_RESOURCE_FORMAT"] = "1000";
    ErrorCode2["RESOURCE_UNAVAILABLE"] = "1100";
    ErrorCode2["GEO_LOCATION_BLOCKED"] = "1101";
    ErrorCode2["DOMAIN_BLOCKED"] = "1102";
    ErrorCode2["IP_BLOCKED"] = "1103";
    ErrorCode2["SATELLITE_PROVIDER_BLOCKED"] = "1104";
    ErrorCode2["EXPIRED"] = "1105";
    ErrorCode2["SELECTOR_CALL_ERROR"] = "1106";
    ErrorCode2["IMA_SDK_MISSING"] = "1200";
    ErrorCode2["DAI_SDK_MISSING"] = "1201";
    ErrorCode2["DASH_SDK_MISSING"] = "1202";
    ErrorCode2["HLS_SDK_MISSING"] = "1203";
    ErrorCode2["SHAKA_SDK_MISSING"] = "1204";
    ErrorCode2["TWITCH_SDK_MISSING"] = "1205";
    ErrorCode2["FW_SDK_MISSING"] = "1206";
    ErrorCode2["HLSJS_PARSE_ERROR"] = "2101";
    ErrorCode2["DASHJS_PARSE_ERROR"] = "2102";
    ErrorCode2["SHAKA_PARSE_ERROR"] = "2103";
    ErrorCode2["TWITCH_PARSE_ERROR"] = "2104";
    ErrorCode2["WEBMAF_START_ERROR"] = "2105";
    ErrorCode2["USER_GESTURE_REQUIRED"] = "2300";
    ErrorCode2["HTML5_NETWORK_ERROR"] = "3001";
    ErrorCode2["HLSJS_NETWORK_ERROR"] = "3002";
    ErrorCode2["DASHJS_NETWORK_ERROR"] = "3003";
    ErrorCode2["WEBMAF_NETWORK_ERROR"] = "3004";
    ErrorCode2["SHAKA_NETWORK_ERROR"] = "3005";
    ErrorCode2["TWITCH_NETWORK_ERROR"] = "3006";
    ErrorCode2["MEDIA_ABORTED"] = "3100";
    ErrorCode2["HTML5_SRC_NOT_SUPPORTED"] = "3101";
    ErrorCode2["HLSJS_SRC_NOT_SUPPORTED"] = "3102";
    ErrorCode2["DASHJS_SRC_NOT_SUPPORTED"] = "3103";
    ErrorCode2["SHAKA_SRC_NOT_SUPPORTED"] = "3105";
    ErrorCode2["TWITCH_SRC_NOT_SUPPORTED"] = "3106";
    ErrorCode2["HTML5_MEDIA_ERROR"] = "3200";
    ErrorCode2["HLSJS_MEDIA_ERROR"] = "3201";
    ErrorCode2["HLSJS_MUX_ERROR"] = "3202";
    ErrorCode2["DASHJS_MEDIA_ERROR"] = "3203";
    ErrorCode2["SHAKA_MEDIA_ERROR"] = "3205";
    ErrorCode2["TWITCH_MEDIA_ERROR"] = "3206";
    ErrorCode2["FAIRPLAY_APP_CERT_ERROR"] = "3300";
    ErrorCode2["FAIRPLAY_LIC_ERROR"] = "3301";
    ErrorCode2["DASHJS_DRM_ERROR"] = "3302";
    ErrorCode2["SHAKA_DRM_ERROR"] = "3304";
    ErrorCode2["UNSPECIFIED_VIDEO_PLAYBACK_ERROR"] = "3400";
    ErrorCode2["UNSPECIFIED_HLSJS_ERROR"] = "3401";
    ErrorCode2["UNSPECIFIED_DASHJS_ERROR"] = "3402";
    ErrorCode2["UNSPECIFIED_SHAKA_ERROR"] = "3404";
    ErrorCode2["UNSPECIFIED_TWITCH_ERROR"] = "3405";
    ErrorCode2["AD_STALLED"] = "4000";
    ErrorCode2["IMA_INIT_FAILURE"] = "4100";
    ErrorCode2["IMA_AD_ERROR"] = "4101";
    ErrorCode2["DAI_DATA_ERROR"] = "4200";
    ErrorCode2["DAI_NETWORK_ERROR"] = "4201";
    ErrorCode2["AD_BLOCKING_DETECTED"] = "4300";
    ErrorCode2["AD_ADAPTER_ERROR"] = "4400";
    ErrorCode2["ADAPTER_NOT_FOUND"] = "5000";
    ErrorCode2["HOOK_ERROR"] = "6000";
    ErrorCode2["EVENT_HOOK"] = "6001";
    ErrorCode2["AD_BREAK_HOOK"] = "6002";
    ErrorCode2["AD_HOOK"] = "6003";
    ErrorCode2["ATTACH_RESOURCE_HOOK"] = "6004";
    ErrorCode2["REQUEST_HOOK"] = "6005";
    ErrorCode2["RESPONSE_HOOK"] = "6006";
    ErrorCode2["CREATE_PLAYER_HOOK"] = "6007";
    ErrorCode2["REMOVE_PLAYER_HOOK"] = "6008";
    ErrorCode2["DEVICE_CAPABILITIES"] = "6009";
    ErrorCode2["SCRIPT_LOAD"] = "6010";
    ErrorCode2["INVALID_ARGUMENT"] = "9000";
    ErrorCode2["UNEXPECTED_CONDITION"] = "9999";
    return ErrorCode2;
  })(ErrorCode || {});

  // src/enum/PlayerHookType.ts
  var PlayerHookType = /* @__PURE__ */ ((PlayerHookType2) => {
    PlayerHookType2["EVENT"] = "event";
    PlayerHookType2["AD_BREAK"] = "adbreak";
    PlayerHookType2["AD"] = "ad";
    PlayerHookType2["ATTACH_RESOURCE"] = "attachresource";
    PlayerHookType2["REQUEST"] = "request";
    PlayerHookType2["RESPONSE"] = "response";
    PlayerHookType2["SEEK"] = "seek";
    return PlayerHookType2;
  })(PlayerHookType || {});

  // src/enum/ErrorMessage.ts
  var ErrorMessage = /* @__PURE__ */ ((ErrorMessage2) => {
    ErrorMessage2["ABR_UNAVAILABLE"] = "Single bitrate stream detected, adaptive bitrate system is unavailable";
    ErrorMessage2["ABR_MANUAL_SWITCHING_REACHED_LOWER_BOUNDS"] = "You have reached the lowest available quality for this presentation.";
    ErrorMessage2["ABR_MANUAL_SWITCHING_REACHED_UPPER_BOUNDS"] = "You have reached the highest available quality for this presentation at this screen size";
    ErrorMessage2["ABR_MIN_BITRATE_RESTRICTION_UNAVAILABLE"] = "Min bitrate restrictions are not offered with this streaming library";
    ErrorMessage2["AD_STALLED"] = "Stalled ad detected";
    ErrorMessage2["ADAPTER_UNAVAILABLE"] = "Unable to play the requested resource - mediaUrl not recognized";
    ErrorMessage2["ADAPTER_LIB_UNAVAILABLE"] = "Unable to play the requested resource - External library is not loading";
    ErrorMessage2["ADAPTER_NOT_FOUND"] = "Unable to find an adapter for the requested resource";
    ErrorMessage2["API_INVALID_ARG"] = "API method called with missing or invalid param";
    ErrorMessage2["CAP_LEVEL_MAXBITRATE"] = "Max bitrate setting will be ignored since capQualityToPlayerSize is enabled";
    ErrorMessage2["CONTENT_PLAYBACK_SETTING_IGNORED"] = "This API is only available after the CONTENT_START event has been dispatched. This setting will be ignored.";
    ErrorMessage2["DAI_MISSING_ASSET_URL"] = "Unexpected condition = valid assetUrl not found in DAI stream data";
    ErrorMessage2["DAI_SDK_UNAVAILABLE"] = "A DAI SDK is required for playback, but is not found";
    ErrorMessage2["ENVIRONMENT_NOT_SUPPORTED"] = 'Unable to locate a global "window" object or suitable alternative';
    ErrorMessage2["FAIRPLAY_LICENSE_ERROR"] = "Issue with fairplay DRM and the provided license acquisition url";
    ErrorMessage2["FAIRPLAY_APP_CERT_ERROR"] = "Issue creating a fairplay keysession with the provided application certificate";
    ErrorMessage2["FAIRPLAY_NO_CONTENT_ID"] = "A valid content or asset id was not detected when creating fairplay drm session";
    ErrorMessage2["FAIRPLAY_WEBKIT_ERROR"] = "Issue with webkit and keysession creations while using fairplay drm.";
    ErrorMessage2["FATAL_PLAYBACK_MEDIA_ERROR"] = "Fatal media error, no option for recovery";
    ErrorMessage2["NONFATAL_PLAYBACK_MEDIA_ERROR"] = "Nonfatal media error";
    ErrorMessage2["FATAL_PLAYBACK_NETWORK_ERROR"] = "Fatal network error, no option for recovery";
    ErrorMessage2["NONFATAL_PLAYBACK_NETWORK_ERROR"] = "Nonfatal network error";
    ErrorMessage2["IMA_SDK_MISSING"] = "IMA SDK not found.";
    ErrorMessage2["INVALID_RESOURCE"] = "Resource configuration appears to be invalid";
    ErrorMessage2["MANUAL_ABR_SWITCHING_UNAVAILABLE"] = "Native HTML5 Video does not allow manual bitrate switching";
    ErrorMessage2["PAUSING_LINEAR_LIVE_STREAM_NOT_ALLOWED"] = "StreamType.LIVE is detected. Redirecting to the stop method since a DVR window is not detected.";
    ErrorMessage2["PLUGIN_LOAD_ERROR"] = "Unable to load plugin from url";
    ErrorMessage2["RESOURCE_MISSING"] = "Resource missing";
    ErrorMessage2["RESOURCE_NOT_SUPPORTED"] = "Resource is not recognized or is currently unsupported";
    ErrorMessage2["RETRY_PLAYBACK_MEDIA_ERROR"] = "Media error detected";
    ErrorMessage2["RETRY_PLAYBACK_NETWORK_ERROR"] = "Network error detected";
    ErrorMessage2["UNEXPECTED_CONDITION"] = "An unexpected condition was encountered";
    ErrorMessage2["UNSPECIFIED_ERROR"] = "Unspecified error";
    ErrorMessage2["VIDEO_PLAYBACK_UNAVAILABLE"] = "Unable to locate a video element or suitable alternative";
    ErrorMessage2["WEBKIT_KEY_ADDED_SUCCESS"] = "Webkit key added successfully";
    ErrorMessage2["WEBKIT_MEDIA_KEYS_NOT_SUPPORTED"] = "WebKitMediaKeys are not supported for this type of media on this user agent";
    return ErrorMessage2;
  })(ErrorMessage || {});

  // src/error/PlayerError.ts
  var PlayerError = class extends CoreError {
    constructor(code, message, cause, fatal = true, category) {
      super(message, cause);
      this.code = code;
      this.fatal = fatal;
      this.category = category;
      this.name = "PlayerError";
    }
    static eventToError(event, category = "Event" /* EVENT */) {
      if (event instanceof Error || !event.detail && !event.error) {
        return event;
      }
      const detail = event.detail;
      if (detail instanceof Error) {
        return detail;
      }
      const error = event.error || detail.error;
      if (error instanceof Error) {
        return error;
      }
      if (error.code && error.message) {
        return new PlayerError(
          error.code,
          error.message,
          error.cause || event,
          true,
          category
        );
      }
      return new PlayerError(
        "9999" /* UNEXPECTED_CONDITION */,
        "An unexpected condition was encountered" /* UNEXPECTED_CONDITION */,
        event,
        true,
        category
      );
    }
  };

  // src/error/HookError.ts
  var HookError = class extends PlayerError {
    constructor(type, message, cause) {
      super(HookError.getErrorCode(type), message, cause, true, "Hook" /* HOOK */);
      this.type = type;
      this.name = "HookError";
    }
    static getErrorCode(type) {
      switch (type) {
        case "createplayer" /* CREATE_PLAYER */:
          return "6007" /* CREATE_PLAYER_HOOK */;
        case "removeplayer" /* REMOVE_PLAYER */:
          return "6008" /* REMOVE_PLAYER_HOOK */;
        case "devicecapabilities" /* DEVICE_CAPABILITIES */:
          return "6009" /* DEVICE_CAPABILITIES */;
        case "scriptload" /* SCRIPT_LOAD */:
          return "6010" /* SCRIPT_LOAD */;
        case "ad" /* AD */:
          return "6003" /* AD_HOOK */;
        case "adbreak" /* AD_BREAK */:
          return "6002" /* AD_BREAK_HOOK */;
        case "attachresource" /* ATTACH_RESOURCE */:
          return "6004" /* ATTACH_RESOURCE_HOOK */;
        case "event" /* EVENT */:
          return "6001" /* EVENT_HOOK */;
        case "request" /* REQUEST */:
          return "6005" /* REQUEST_HOOK */;
        case "response" /* RESPONSE */:
          return "6006" /* RESPONSE_HOOK */;
        default:
          return "6000" /* HOOK_ERROR */;
      }
    }
  };

  // src/model/HookManager.ts
  var HookManager = class {
    constructor(config2) {
      this.hookMap = {};
      this.hookConfig = null;
      this.hookConfig = config2;
    }
    destroy() {
      this.hookMap = null;
      this.hookConfig = null;
    }
    hasHook(type) {
      const hooks = this.hookMap[type];
      return (hooks == null ? void 0 : hooks.length) > 0;
    }
    defineHook(type, config2 = { multiple: true }) {
      assert(!this.hookConfig[type], `Hook type already exists: ${type}`);
      this.hookConfig[type] = config2;
    }
    validateHookType(type) {
      assert(type in this.hookConfig, `Invalid hook type: ${type}`);
    }
    registerHook(type, hook) {
      var _a;
      this.validateHookType(type);
      if (!this.hookMap[type]) {
        this.hookMap[type] = [];
      }
      if (((_a = this.hookConfig[type]) == null ? void 0 : _a.multiple) === false && this.hookMap[type].length) {
        return;
      }
      if (this.hookMap[type].includes(hook)) {
        return;
      }
      this.hookMap[type].push(hook);
    }
    removeHook(type, hook) {
      this.validateHookType(type);
      if (!this.hookMap[type]) {
        return;
      }
      this.hookMap[type] = this.hookMap[type].filter((h) => h !== hook);
    }
    applyHook(type, data, metadata) {
      return __async(this, null, function* () {
        var _a;
        const hooks = (_a = this.hookMap) == null ? void 0 : _a[type];
        if (!hooks || hooks.length === 0) {
          return data;
        }
        let cancelled = false;
        const cancel = () => cancelled = true;
        const exec = (value, index = 0) => __async(this, null, function* () {
          if (index >= hooks.length) {
            return value;
          }
          const transform = hooks[index];
          if (typeof transform !== "function") {
            throw new HookError(type, "Hook must be a valid function");
          }
          const context = { type, value, metadata, cancel };
          try {
            yield transform(context);
          } catch (error) {
            throw new HookError(type, error.toString(), error);
          }
          return cancelled ? null : exec(context.value, ++index);
        });
        return exec(data);
      });
    }
  };

  // src/model/hook_configs.ts
  var player_hook_config = {
    ["event" /* EVENT */]: {
      multiple: true
    },
    ["adbreak" /* AD_BREAK */]: {
      multiple: false
    },
    ["ad" /* AD */]: {
      multiple: false
    },
    ["attachresource" /* ATTACH_RESOURCE */]: {
      multiple: true
    },
    ["request" /* REQUEST */]: {
      multiple: true
    },
    ["response" /* RESPONSE */]: {
      multiple: true
    },
    ["seek" /* SEEK */]: {
      multiple: true
    }
  };
  var sdk_hook_config = __spreadProps(__spreadValues({}, player_hook_config), {
    ["createplayer" /* CREATE_PLAYER */]: {
      multiple: true
    },
    ["removeplayer" /* REMOVE_PLAYER */]: {
      multiple: true
    },
    ["devicecapabilities" /* DEVICE_CAPABILITIES */]: {
      multiple: true
    },
    ["scriptload" /* SCRIPT_LOAD */]: {
      multiple: true
    }
  });

  // src/sdk.ts
  var sdk_exports = {};
  __export(sdk_exports, {
    AccessibilityAction: () => AccessibilityAction,
    ActiveState: () => ActiveState,
    AdBreakType: () => AdBreakType,
    AdTechnology: () => AdTechnology,
    AdapterRole: () => AdapterRole,
    ApiMetric: () => ApiMetric,
    AudioTrackType: () => AudioTrackType,
    Autoplay: () => Autoplay,
    AviaHookType: () => AviaHookType,
    Browser: () => Browser,
    CoreEvent: () => CoreEvent,
    Device: () => Device,
    DrmKeySystemAvailability: () => DrmKeySystemAvailability,
    DrmRobustness: () => DrmRobustness,
    DrmType: () => DrmType,
    Emitter: () => Emitter,
    ErrorCategory: () => ErrorCategory,
    ErrorCode: () => ErrorCode,
    ErrorMessage: () => ErrorMessage,
    FileExtensionToMimeType: () => FileExtensionToMimeType,
    HTML5: () => HTML5,
    Header: () => Header,
    HookError: () => HookError,
    HookType: () => HookType,
    InvalidArgumentError: () => InvalidArgumentError,
    KeyboardScope: () => KeyboardScope,
    LocalizationId: () => LocalizationId,
    LocalizedLanguage: () => LocalizedLanguage,
    LogLevel: () => LogLevel,
    Logger: () => Logger,
    LoggerEvent: () => LoggerEvent,
    Measurement: () => Measurement,
    Metric: () => Metric,
    MetricType: () => MetricType,
    MimeType: () => MimeType,
    Os: () => Os,
    PerformanceMode: () => PerformanceMode,
    Platform: () => Platform,
    PlaybackAdapterBase: () => PlaybackAdapterBase,
    PlaybackState: () => PlaybackState,
    PlayerError: () => PlayerError,
    PlayerEvent: () => PlayerEvent,
    PlayerHookType: () => PlayerHookType,
    PluginPriority: () => PluginPriority,
    QualityCategory: () => QualityCategory,
    QualityLabel: () => QualityLabel,
    QualityMode: () => QualityMode,
    QueryString: () => QueryString,
    RequestCredentials: () => RequestCredentials,
    RequestMethod: () => RequestMethod,
    RequestObjectType: () => RequestObjectType,
    ResponseType: () => ResponseType,
    StreamType: () => StreamType,
    TextTrackEvent: () => TextTrackEvent,
    TextTrackKind: () => TextTrackKind,
    TextTrackMode: () => TextTrackMode,
    Timer: () => Timer,
    UiMetric: () => UiMetric,
    Util: () => Util,
    VideoFormat: () => VideoFormat,
    WILDCARD: () => WILDCARD,
    buildInfo: () => buildInfo,
    cmcd: () => cmcd_exports,
    createThumbnailStyles: () => createThumbnailStyles,
    eventsToPromise: () => eventsToPromise,
    id3: () => id3_exports,
    queue: () => queue,
    renderThumbnail: () => renderThumbnail,
    request: () => request,
    waitFor: () => waitFor,
    waitForEvent: () => waitForEvent,
    waitForTime: () => waitForTime,
    waitUntil: () => waitUntil
  });

  // src/app/AppResources.ts
  var AppResources = class {
    constructor() {
    }
  };
  AppResources.blankVideoUrl = "https:/avia.cbsivideo.com/h5/blanks/uvp_blank.mp4";
  AppResources.blankDataUrl = "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=";
  AppResources.messages = ErrorMessage;

  // src/enum/TextTrackEvent.ts
  var TextTrackEvent = /* @__PURE__ */ ((TextTrackEvent2) => {
    TextTrackEvent2["CUE_CHANGE"] = "cuechange";
    TextTrackEvent2["ADD_TRACK"] = "addtrack";
    TextTrackEvent2["CHANGE"] = "change";
    return TextTrackEvent2;
  })(TextTrackEvent || {});

  // src/enum/TextTrackKind.ts
  var TextTrackKind = /* @__PURE__ */ ((TextTrackKind2) => {
    TextTrackKind2["CAPTIONS"] = "captions";
    TextTrackKind2["SUBTITLES"] = "subtitles";
    TextTrackKind2["DESCRIPTIONS"] = "descriptions";
    TextTrackKind2["CHAPTERS"] = "chapters";
    TextTrackKind2["METADATA"] = "metadata";
    TextTrackKind2["FORCED"] = "forced";
    return TextTrackKind2;
  })(TextTrackKind || {});

  // src/util/Async.ts
  function waitFor(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  function waitUntil(func, interval = 100) {
    return new Promise((resolve, reject) => {
      const i = setInterval(() => {
        if (func()) {
          clearInterval(i);
          resolve();
        }
      }, interval);
    });
  }
  function waitForEvent(target, success, fail = "error", timeout = NaN) {
    if (typeof fail === "number") {
      timeout = fail;
    }
    return new Promise((resolve, reject) => {
      let timeoutId;
      const undo = [];
      const cleanUp = () => undo.forEach((u) => u());
      const apply = (action, event) => {
        const on = target.on ? "on" : "addEventListener";
        const off = target.off ? "off" : "removeEventListener";
        const complete = (e, d) => {
          clearTimeout(timeoutId);
          cleanUp();
          action(d || e);
        };
        target[on](event, complete);
        undo.push(() => target[off](event, complete));
      };
      apply(resolve, success);
      if (typeof fail === "string") {
        apply((event) => reject(PlayerError.eventToError(event)), fail);
      }
      if (timeout > -1) {
        timeoutId = setTimeout(() => {
          cleanUp();
          reject(new Error("timeout"));
        }, timeout);
      }
    });
  }
  function waitForTime(target, time, prop) {
    if (!prop) {
      prop = target instanceof HTMLVideoElement ? "currentTime" : "contentTime";
    }
    return waitUntil(() => target[prop] >= time);
  }
  function queue(tasks) {
    let canceled = false;
    let task;
    let running = false;
    return {
      run(context) {
        return __async(this, null, function* () {
          running = true;
          let result = context;
          for (let i = 0; i < tasks.length; i++) {
            task = tasks[i](result);
            result = yield task;
            if (canceled) {
              break;
            }
          }
          task = null;
          running = false;
          return result;
        });
      },
      get running() {
        return running;
      },
      cancel() {
        return __async(this, null, function* () {
          canceled = true;
          return yield task;
        });
      }
    };
  }
  function eventsToPromise(success, failure, timeout = NaN) {
    return new Promise((resolve, reject) => {
      let timeoutId;
      const undo = [];
      const cleanUp = () => undo.forEach((u) => u());
      const apply = (action) => ({ target, events }) => {
        const t = target;
        const on = t.on ? "on" : "addEventListener";
        const off = t.off ? "off" : "removeEventListener";
        const complete = (e, d) => {
          clearTimeout(timeoutId);
          cleanUp();
          action(d || e);
        };
        events.forEach((event) => {
          t[on](event, complete);
          undo.push(() => t[off](event, complete));
        });
      };
      success.forEach(apply(resolve));
      failure.forEach(apply(reject));
      if (timeout > -1) {
        timeoutId = setTimeout(() => {
          cleanUp();
          reject(new Error("timeout"));
        }, timeout);
      }
    });
  }

  // src/util/NumberUtil.ts
  var NumberUtil_exports = {};
  __export(NumberUtil_exports, {
    clampValue: () => clampValue,
    inRange: () => inRange,
    mapToRange: () => mapToRange,
    roundTo: () => roundTo
  });
  function roundTo(num, len) {
    return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
  }
  function clampValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function inRange(value, lower, upper) {
    return isNumber(value) && value >= lower && value <= upper;
  }
  function mapToRange(value, fromMin, fromMax, toMin = 0, toMax = 1) {
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
  }

  // src/util/ObjectUtil.ts
  var ObjectUtil_exports = {};
  __export(ObjectUtil_exports, {
    clone: () => clone,
    entries: () => entries,
    freeze: () => freeze,
    fromEntries: () => fromEntries,
    merge: () => merge,
    values: () => values
  });
  function values(obj) {
    return Object.keys(obj).reduce((a, k, i) => {
      a[i] = obj[k];
      return a;
    }, []);
  }
  function entries(obj) {
    return Object.keys(obj).reduce((a, k, i) => {
      a[i] = [k, obj[k]];
      return a;
    }, []);
  }
  function fromEntries(entries2) {
    return entries2.reduce((o, [k, v]) => {
      o[k] = v;
      return o;
    }, {});
  }
  function clone(obj, freeze2 = false) {
    const result = Array.isArray(obj) ? obj.map((o) => clone(o, freeze2)) : Object.assign({}, obj);
    return freeze2 ? Object.freeze(result) : result;
  }
  function freeze(obj) {
    if (Array.isArray(obj)) {
      obj.forEach((o) => freeze(o));
    }
    return Object.freeze(obj);
  }
  function merge(...args) {
    const override = (base2, overrides) => {
      if (base2 == null) {
        return overrides;
      } else if (overrides == null) {
        return base2;
      }
      Object.getOwnPropertyNames(overrides).forEach((key) => {
        const value = overrides[key];
        const baseValue = base2[key];
        const type = typeof value;
        if (type === "undefined") {
          return;
        } else if (Array.isArray(value)) {
          base2[key] = value.slice();
        } else if (baseValue == null && type === "object" && value != null) {
          base2[key] = override({}, value);
        } else if (baseValue == null || !isObject(baseValue)) {
          base2[key] = value;
        } else if (type === "object") {
          base2[key] = override(baseValue, value);
        }
      });
      return base2;
    };
    const [base, ...rest] = args;
    return rest.reduce((acc, obj) => override(acc, obj), base);
  }

  // src/util/Quality.ts
  var Quality_exports = {};
  __export(Quality_exports, {
    QualityMap: () => QualityMap,
    getMaxBitrateIndex: () => getMaxBitrateIndex,
    getMaxHeightForQualityCategory: () => getMaxHeightForQualityCategory,
    getMaxIndexForHeight: () => getMaxIndexForHeight,
    getMinAndMaxValuesForCategory: () => getMinAndMaxValuesForCategory,
    getMinBitrateIndex: () => getMinBitrateIndex,
    getQualityCategoryForVideoHeight: () => getQualityCategoryForVideoHeight,
    normalizeQuality: () => normalizeQuality,
    processQuality: () => processQuality,
    toKbits: () => toKbits,
    validateQualities: () => validateQualities,
    validateQuality: () => validateQuality
  });

  // src/enum/QualityCategory.ts
  var QualityCategory = /* @__PURE__ */ ((QualityCategory2) => {
    QualityCategory2["AUTO"] = "AUTO";
    QualityCategory2["SD"] = "SD";
    QualityCategory2["HD"] = "HD";
    QualityCategory2["UHD"] = "UHD";
    QualityCategory2["UHD_4K"] = "UHD 4K";
    QualityCategory2["UHD_8K"] = "UHD 8K";
    return QualityCategory2;
  })(QualityCategory || {});

  // src/util/Quality.ts
  var QualityMap = {
    ["UHD 8K" /* UHD_8K */]: 4320,
    ["UHD 4K" /* UHD_4K */]: 2160,
    ["UHD" /* UHD */]: 1440,
    ["HD" /* HD */]: 720,
    ["SD" /* SD */]: 0
  };
  function getMinAndMaxValuesForCategory(list, category) {
    let minIndex = Infinity;
    let maxIndex = 0;
    let minBitrate = Infinity;
    let maxBitrate = 0;
    list.forEach((q) => {
      if (q.category.indexOf(category) >= 0) {
        maxIndex = Math.max(maxIndex, q.index);
        minIndex = Math.min(minIndex, q.index);
        maxBitrate = Math.max(maxBitrate, q.bitrate);
        minBitrate = Math.min(minBitrate, q.bitrate);
      }
    });
    return { maxIndex, minIndex, minBitrate, maxBitrate };
  }
  function getQualityCategoryForVideoHeight(height) {
    var _a;
    return ((_a = entries(QualityMap).find((map) => height >= map[1])) == null ? void 0 : _a[0]) || "SD" /* SD */;
  }
  function getMaxHeightForQualityCategory(category) {
    if (!category || category === "AUTO" /* AUTO */) {
      return Infinity;
    }
    const item = entries(QualityMap).find((map, index, arr) => {
      var _a;
      return ((_a = arr[index + 1]) == null ? void 0 : _a[0]) === category;
    });
    return (item == null ? void 0 : item[1]) - 1 || Infinity;
  }
  function getMaxIndexForHeight(qualities, maxHeight) {
    return qualities.reduce((max, level, index) => {
      if (level.height <= maxHeight) {
        const current = qualities[max];
        if (isNaN(max)) {
          max = index;
        } else if (level.height > current.height) {
          max = index;
        } else if (level.height === current.height && level.bitrate > current.bitrate) {
          max = index;
        }
      }
      return max;
    }, NaN);
  }
  function processQuality(quality) {
    const category = [
      `${getQualityCategoryForVideoHeight(quality.height)}`,
      `${quality.height}p`,
      `${Math.round(quality.bitrate / 1e3)} kbps`
    ];
    return __spreadProps(__spreadValues({}, quality), { category });
  }
  function normalizeQuality(item, index) {
    return {
      index,
      bitrate: item.bitrate,
      height: item.height,
      width: item.width,
      codec: item.codec || item.codecs,
      enabled: item.enabled || true
    };
  }
  function getMinBitrateIndex(qualities, target) {
    const max = qualities.length - 1;
    if (target >= qualities[max].bitrate) {
      return max;
    }
    for (let i = max - 1; i > 0; i--) {
      const { bitrate } = qualities[i];
      if (target === bitrate) {
        return i;
      } else if (target > bitrate) {
        return i + 1;
      }
    }
    return 0;
  }
  function getMaxBitrateIndex(qualities, target) {
    if (target <= qualities[0].bitrate) {
      return 0;
    }
    const max = qualities.length - 1;
    for (let i = 1; i < max; i++) {
      const { bitrate } = qualities[i];
      if (target === bitrate) {
        return i;
      } else if (target < bitrate) {
        return i - 1;
      }
    }
    return max;
  }
  function validateQuality(quality, minBitrate, maxBitrate, maxHeight, bounds) {
    let valid = true;
    if (Number.isFinite(minBitrate)) {
      valid && (valid = quality.bitrate >= minBitrate);
    }
    if (Number.isFinite(maxBitrate)) {
      valid && (valid = quality.bitrate <= maxBitrate);
    }
    if (Number.isFinite(maxHeight)) {
      valid && (valid = quality.height <= maxHeight);
    }
    if (bounds) {
      const { width, height } = bounds;
      valid && (valid = quality.width <= width || quality.height <= height);
    }
    return valid;
  }
  function validateQualities(qualities, minBitrate, maxBitrate, maxHeight, bounds) {
    return qualities.some((quality) => quality.enabled && validateQuality(quality, minBitrate, maxBitrate, maxHeight, bounds));
  }
  function toKbits(bitrate) {
    return Math.round(bitrate / 1e3);
  }

  // src/util/Resource.ts
  var Resource_exports = {};
  __export(Resource_exports, {
    getResourceMetadata: () => getResourceMetadata,
    getResourceMimeType: () => getResourceMimeType
  });

  // src/util/File.ts
  var File_exports = {};
  __export(File_exports, {
    getFileExtension: () => getFileExtension,
    getMimeType: () => getMimeType
  });

  // src/enum/MimeType.ts
  var MimeType = /* @__PURE__ */ ((MimeType2) => {
    MimeType2["MP4_VIDEO"] = "video/mp4";
    MimeType2["MP4_AUDIO"] = "audio/mp4";
    MimeType2["HLS"] = "application/vnd.apple.mpegurl";
    MimeType2["HLS_ALT"] = "application/x-mpegURL";
    MimeType2["DASH"] = "application/dash+xml";
    MimeType2["WEBM_VIDEO"] = "video/webm";
    MimeType2["WEBM_AUDIO"] = "audio/webm";
    MimeType2["TS_VIDEO"] = "video/mp2t";
    MimeType2["VTT"] = "text/vtt";
    MimeType2["TTML"] = "application/ttml+xml";
    MimeType2["ISM"] = "application/vnd.ms-sstr+xml";
    return MimeType2;
  })(MimeType || {});

  // src/enum/FileExtensionToMimeType.ts
  var FileExtensionToMimeType = {
    VTT: "text/vtt" /* VTT */,
    XML: "application/ttml+xml" /* TTML */,
    M3U8: "application/vnd.apple.mpegurl" /* HLS */,
    MPD: "application/dash+xml" /* DASH */,
    TS: "video/mp2t" /* TS_VIDEO */,
    MP4: "video/mp4" /* MP4_VIDEO */,
    MPV: "video/mp4" /* MP4_VIDEO */,
    MPA: "audio/mp4" /* MP4_AUDIO */,
    WEBM: "video/webm" /* WEBM_VIDEO */,
    ISM: "application/vnd.ms-sstr+xml" /* ISM */
  };

  // src/util/File.ts
  function getFileExtension(uri) {
    return uri.replace(/\?.*/, "").replace(/#.*/, "").split(".").pop();
  }
  function getMimeType(uri) {
    if (!uri) {
      return "";
    }
    const ext = getFileExtension(uri).toUpperCase();
    return FileExtensionToMimeType[ext];
  }

  // src/util/Resource.ts
  function getResourceMimeType(resource) {
    var _a;
    const override = ((_a = resource.overrides) == null ? void 0 : _a.mimeType) || "";
    return override.split(";").shift() || getMimeType(resource.location.mediaUrl);
  }
  function getResourceMetadata(resource) {
    return {
      manifest: {
        mimeType: getResourceMimeType(resource)
      },
      fragment: {
        mimeType: ""
      }
    };
  }

  // src/util/TimedText.ts
  var TimedText_exports = {};
  __export(TimedText_exports, {
    clearAllCues: () => clearAllCues,
    clearCue: () => clearCue,
    createSidecarTextTrack: () => createSidecarTextTrack,
    dedupeCues: () => dedupeCues,
    findDefaultTrack: () => findDefaultTrack,
    findLanguageTracks: () => findLanguageTracks,
    isTextTrack: () => isTextTrack,
    processCues: () => processCues,
    smpteToVtt: () => smpteToVtt
  });

  // src/core/QueryString.ts
  var QueryString = class {
    static encode(obj) {
      if (isEmpty(obj)) {
        return "";
      }
      const str = entries(obj).map(([k, v]) => k + "=" + encodeURIComponent(v));
      return str.join("&");
    }
    static decode(uri) {
      const results = {};
      if (uri == null) {
        return results;
      }
      uri.replace(/^[^?]*\?/, "").replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), ($0, $1, $2, $3) => {
        let value;
        try {
          value = isUndefined($3) ? $3 : decodeURIComponent($3);
        } catch (error) {
          value = $3;
        }
        results[decodeURIComponent($1)] = value;
      });
      return results;
    }
    static parseValue(value) {
      if (isUndefined(value)) {
        return true;
      }
      let temp = value.toLowerCase();
      if (temp === "true" || temp === "false") {
        return temp === "true";
      }
      if (value === "undefined") {
        return void 0;
      }
      if (temp === "null") {
        return null;
      }
      temp = parseFloat(value);
      if (!isNaN(temp)) {
        return temp;
      }
      return value;
    }
    static parse(uri) {
      const params = QueryString.decode(uri);
      for (const k in params) {
        params[k] = QueryString.parseValue(params[k]);
      }
      return params;
    }
    static append(url, params) {
      const prefix = url.includes("?") ? "&" : "?";
      return url + prefix + QueryString.encode(params);
    }
  };

  // src/enum/RequestCredentials.ts
  var RequestCredentials = /* @__PURE__ */ ((RequestCredentials2) => {
    RequestCredentials2["INCLUDE"] = "include";
    RequestCredentials2["SAME_ORIGIN"] = "same-origin";
    RequestCredentials2["OMIT"] = "omit";
    return RequestCredentials2;
  })(RequestCredentials || {});

  // src/enum/ResponseType.ts
  var ResponseType = /* @__PURE__ */ ((ResponseType2) => {
    ResponseType2["ARRAY_BUFFER"] = "arraybuffer";
    ResponseType2["TEXT"] = "text";
    ResponseType2["JSON"] = "json";
    ResponseType2["DOCUMENT"] = "document";
    ResponseType2["DEFAULT"] = "";
    return ResponseType2;
  })(ResponseType || {});

  // src/enum/Network.ts
  var Network = class {
    static get TIMEOUT() {
      return 5e3;
    }
  };

  // src/enum/RequestMethod.ts
  var RequestMethod = /* @__PURE__ */ ((RequestMethod2) => {
    RequestMethod2["GET"] = "GET";
    RequestMethod2["POST"] = "POST";
    RequestMethod2["DELETE"] = "DELETE";
    RequestMethod2["OPTIONS"] = "OPTIONS";
    RequestMethod2["PUT"] = "PUT";
    return RequestMethod2;
  })(RequestMethod || {});

  // src/dataservice/AsyncDataRequestOptions.ts
  var AsyncDataRequestOptions = class {
    constructor() {
    }
    static create(options) {
      return {
        url: options.url || "",
        method: options.method || "GET" /* GET */,
        timeout: options.timeout || Network.TIMEOUT,
        headers: options.headers || {},
        data: this.getBody(options.data, options.encodeList, options.sendJson),
        withCredentials: options.withCredentials === true,
        responseType: options.responseType || "text" /* TEXT */,
        onComplete: options.onComplete || null,
        errorRecovery: options.errorRecovery || null
      };
    }
    /**
    	 * @param objOrStr - - can be a plain object or string
    	 * @param enc - - if supplying an object, an array of property names whose values should be encoded
    	 * @param asJson - - set TRUE if the body should be sent as a JSON string
    	 */
    static getBody(objOrStr, enc, asJson = false) {
      if (!objOrStr) {
        return null;
      }
      if (typeof objOrStr === "string") {
        return objOrStr;
      }
      if (!Object.keys(objOrStr).length) {
        return null;
      }
      const useEnc = Array.isArray(enc) && enc.length;
      !useEnc && (enc = []);
      for (const q in objOrStr) {
        objOrStr[q] = this.getValue(q, objOrStr[q], enc);
      }
      if (asJson) {
        return JSON.stringify(objOrStr);
      }
      let str = "", v;
      for (const q in objOrStr) {
        v = objOrStr[q];
        v != null && v !== void 0 && v !== "" && (str += `${q}=${v}&`);
      }
      str = str.substr(0, str.length - 1);
      return str;
    }
    static getValue(name, val, enc) {
      return enc.indexOf(name) >= 0 ? encodeURIComponent(val) : val;
    }
  };

  // src/dataservice/RecoveryEnabledRequest.ts
  var RecoveryEnabledRequest = class extends Emitter {
    constructor(options) {
      super(options);
      this.retryCount = 0;
      this.limit = 0;
      this.retryIntervals = null;
      const er = this.opts.errorRecovery;
      if (er && !isNaN(er.retryAttempts) && er.retryAttempts > 0) {
        this.limit = er.retryAttempts;
      }
      if (er && er.retryIntervals && Array.isArray(er.retryIntervals)) {
        this.retryIntervals = er.retryIntervals;
      }
    }
    shouldRetry() {
      return this.limit && !this.atLimit;
    }
    incrementAttempts() {
      this.retryCount++;
    }
    get retryLimit() {
      return this.limit;
    }
    get atLimit() {
      return this.retryCount === this.limit;
    }
    get retryInterval() {
      return this.retryIntervals && this.retryIntervals[this.retryCount - 1] || this.retryCount * 300;
    }
  };

  // src/dataservice/AsyncDataRequest.ts
  var _AsyncDataRequest = class extends RecoveryEnabledRequest {
    constructor(options) {
      super(AsyncDataRequestOptions.create(options));
      this.requestOptions = this.opts;
      if (this.opts.url) {
        this.createXhr();
      }
    }
    static load(options) {
      return new Promise((resolve, reject) => {
        const requestOptions = options;
        if (requestOptions.credentials) {
          requestOptions.withCredentials = requestOptions.credentials === "include" /* INCLUDE */;
        }
        if (requestOptions.body) {
          requestOptions.data = requestOptions.body;
        }
        requestOptions.onComplete = ({ detail }) => {
          if (!detail || detail.error) {
            reject(detail);
          } else {
            resolve(detail);
          }
        };
        new _AsyncDataRequest(requestOptions);
      });
    }
    createXhr() {
      this.request(this.requestOptions).then((request2) => {
        const { response } = request2;
        const contentType = request2.getResponseHeader("content-type");
        let data = response;
        if (this.requestOptions.responseType === "text" /* TEXT */ && contentType) {
          if (contentType.includes("application/smil") || contentType.includes("application/xml")) {
            const parser = new DOMParser();
            data = parser.parseFromString(data, "application/xml");
          } else if (contentType == null ? void 0 : contentType.includes("application/json")) {
            data = JSON.parse(data);
          }
        }
        if (request2.status !== 204 && data == null) {
          this.emitCompleteWithError("Unable to parse response.");
        } else {
          setTimeout(() => {
            this.emitComplete({ contentType, data });
          }, 1);
        }
      }).catch((error) => {
        if (this.shouldRetry()) {
          this.incrementAttempts();
          setTimeout(() => {
            this.createXhr();
          }, this.retryInterval);
        } else {
          const msg = error.response || _AsyncDataRequest.statusMessages["0"];
          this.emitCompleteWithError(msg);
        }
      });
    }
    request(options) {
      return new Promise((resolve, reject) => {
        if (options.query) {
          options.url = QueryString.append(options.url, options.query);
        }
        const xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url);
        xhr.onload = () => {
          if (options.checkStatus !== false && xhr.status > 399) {
            reject(xhr);
          }
          resolve(xhr);
        };
        xhr.onerror = (event) => {
          reject(xhr);
        };
        xhr.withCredentials = options.withCredentials;
        if (options.responseType != null) {
          try {
            xhr.responseType = options.responseType;
          } catch (error) {
          }
        }
        if (options.headers != null) {
          const headers = options.headers;
          entries(headers).forEach(([key, value]) => {
            if (key != null && value != null) {
              xhr.setRequestHeader(key, value);
            }
          });
        }
        return xhr.send(options.data);
      });
    }
    emitComplete(res) {
      this.emit(_AsyncDataRequest.event.COMPLETE, {
        response: res.data,
        contentType: res.contentType,
        error: false
      });
    }
    emitCompleteWithError(errResponse) {
      const msg = isString(errResponse) ? errResponse : null;
      const res = !msg ? errResponse : null;
      this.emit(_AsyncDataRequest.event.COMPLETE, {
        status: res && res.status,
        error: true,
        url: this.requestOptions.url || "not available",
        message: msg || this.getMsg((res == null ? void 0 : res.status) || 0, (res == null ? void 0 : res.data) || null)
      });
    }
    getMsg(stat, errorData) {
      let m = _AsyncDataRequest.statusMessages["" + stat];
      if (!m) {
        m = isString(errorData) ? errorData : "Unspecified error";
      }
      return "XhrDataRequest error: " + m;
    }
  };
  var AsyncDataRequest = _AsyncDataRequest;
  AsyncDataRequest.event = {
    COMPLETE: "complete"
  };
  AsyncDataRequest.statusMessages = {
    "0": "Request failed; blocked or timed out",
    "500": "Server error encountered.",
    "404": "Resource not found.",
    "403": "Access denied."
  };

  // src/core/Request.ts
  function request(options) {
    if (options.query) {
      options.url = QueryString.append(options.url, options.query);
    }
    return AsyncDataRequest.load(options).then((xhr) => xhr.response);
  }

  // src/enum/Browser.ts
  var Browser = /* @__PURE__ */ ((Browser2) => {
    Browser2["ANDROID"] = "Android";
    Browser2["CHROME"] = "Chrome";
    Browser2["CHROME_IOS"] = "Chrome-iOS";
    Browser2["FIREFOX"] = "Firefox";
    Browser2["FIREFOX_IOS"] = "Firefox-iOS";
    Browser2["EDGE"] = "Edge";
    Browser2["MSIE"] = "MSIE";
    Browser2["SAFARI"] = "Safari";
    Browser2["OPERA"] = "Opera";
    Browser2["OPERA_MOBILE"] = "Opera-Mobile";
    Browser2["SILK"] = "Silk";
    Browser2["WEBKIT"] = "Webkit Browser";
    Browser2["PLAYSTATION_4_WEBMAF"] = "PlayStation 4 (WebMAF)";
    Browser2["PLAYSTATION_4_MSE"] = "PlayStation 4 (Media Source API)";
    Browser2["PLAYSTATION_5"] = "PlayStation 5 (Media Source API)";
    Browser2["UNKNOWN"] = "Unknown";
    return Browser2;
  })(Browser || {});

  // src/util/cmcd/index.ts
  var cmcd_exports = {};
  __export(cmcd_exports, {
    CMCD_VERSION: () => CMCD_VERSION,
    CmcdObjectType: () => CmcdObjectType,
    CmcdStreamType: () => CmcdStreamType,
    CmcdStreamingFormat: () => CmcdStreamingFormat,
    appendCmcdQuery: () => appendCmcdQuery,
    decodeCmcd: () => decodeCmcd,
    encodeCmcd: () => encodeCmcd,
    fromCmcdQuery: () => fromCmcdQuery
  });

  // ../node_modules/@svta/common-media-library/dist/cmcd/CmcdObjectType.js
  var CmcdObjectType;
  (function(CmcdObjectType2) {
    CmcdObjectType2["MANIFEST"] = "m";
    CmcdObjectType2["AUDIO"] = "a";
    CmcdObjectType2["VIDEO"] = "v";
    CmcdObjectType2["MUXED"] = "av";
    CmcdObjectType2["INIT"] = "i";
    CmcdObjectType2["CAPTION"] = "c";
    CmcdObjectType2["TIMED_TEXT"] = "tt";
    CmcdObjectType2["KEY"] = "k";
    CmcdObjectType2["OTHER"] = "o";
  })(CmcdObjectType || (CmcdObjectType = {}));

  // ../node_modules/@svta/common-media-library/dist/cmcd/CmcdStreamType.js
  var CmcdStreamType;
  (function(CmcdStreamType2) {
    CmcdStreamType2["VOD"] = "v";
    CmcdStreamType2["LIVE"] = "l";
  })(CmcdStreamType || (CmcdStreamType = {}));

  // ../node_modules/@svta/common-media-library/dist/cmcd/CmcdStreamingFormat.js
  var CmcdStreamingFormat;
  (function(CmcdStreamingFormat2) {
    CmcdStreamingFormat2["DASH"] = "d";
    CmcdStreamingFormat2["HLS"] = "h";
    CmcdStreamingFormat2["SMOOTH"] = "s";
    CmcdStreamingFormat2["OTHER"] = "o";
  })(CmcdStreamingFormat || (CmcdStreamingFormat = {}));

  // ../node_modules/@svta/common-media-library/dist/cmcd/CmcdParam.js
  var CMCD_PARAM = "CMCD";

  // ../node_modules/@svta/common-media-library/dist/cmcd/isTokenField.js
  var isTokenField = (key) => key === "ot" || key === "sf" || key === "st";

  // ../node_modules/@svta/common-media-library/dist/cmcd/CmcdFormatters.js
  var toRounded = (value) => Math.round(value);
  var toUrlSafe = (value) => encodeURIComponent(value);
  var toHundred = (value) => toRounded(value / 100) * 100;
  var CmcdFormatters = {
    br: toRounded,
    d: toRounded,
    bl: toHundred,
    dl: toHundred,
    mtp: toHundred,
    nor: toUrlSafe,
    rtp: toHundred,
    tb: toRounded
  };

  // ../node_modules/@svta/common-media-library/dist/cmcd/processCmcd.js
  var isValid = (value) => value != null && value !== "" && value !== false;
  function processCmcd(obj, map, options) {
    const results = [];
    if (obj == null || typeof obj !== "object") {
      return results;
    }
    const keys = Object.keys(obj).sort();
    const formatters = Object.assign({}, CmcdFormatters, options == null ? void 0 : options.formatters);
    keys.forEach((key) => {
      let value = obj[key];
      if (!isValid(value)) {
        return;
      }
      if (key === "v" && value === 1) {
        return;
      }
      if (key == "pr" && value === 1) {
        return;
      }
      const formatter = formatters[key];
      if (formatter) {
        value = formatter(value);
      }
      const result = map(key, value);
      results.push(result);
    });
    return results;
  }

  // ../node_modules/@svta/common-media-library/dist/cmcd/encodeCmcd.js
  function encodeCmcd(obj, options = {}) {
    return processCmcd(obj, (key, value) => {
      switch (typeof value) {
        case "boolean":
          return key;
        case "number":
          return `${key}=${value}`;
        case "symbol":
          return `${key}=${value.description || value.toString().replace(/^Symbol\((.*)\)$/, "$1")}`;
        case "string":
          if (isTokenField(key)) {
            return `${key}=${value}`;
          }
          return `${key}=${JSON.stringify(value)}`;
        default:
          return void 0;
      }
    }, options).join(",");
  }

  // ../node_modules/@svta/common-media-library/dist/cmcd/toCmcdQuery.js
  function toCmcdQuery(cmcd, options = {}) {
    if (!cmcd) {
      return "";
    }
    const params = encodeCmcd(cmcd, options);
    return `${CMCD_PARAM}=${encodeURIComponent(params)}`;
  }

  // ../node_modules/@svta/common-media-library/dist/cmcd/appendCmcdQuery.js
  function appendCmcdQuery(url, cmcd, options) {
    const query = toCmcdQuery(cmcd, options);
    if (!query) {
      return url;
    }
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}${query}`;
  }

  // ../node_modules/@svta/common-media-library/dist/cmcd/decodeCmcd.js
  function decodeCmcd(cmcd) {
    if (!cmcd) {
      return {};
    }
    return decodeURIComponent(cmcd.replace(/^CMCD=/, "")).split(",").reduce((acc, part) => {
      const [key, value] = part.split("=");
      if (!key) {
        return acc;
      }
      if (!value) {
        acc[key] = true;
      } else if (isTokenField(key) || /^[a-zA-Z]$/.test(value)) {
        acc[key] = value;
      } else {
        acc[key] = JSON.parse(value);
      }
      return acc;
    }, {});
  }

  // ../node_modules/@svta/common-media-library/dist/cmcd/fromCmcdQuery.js
  function fromCmcdQuery(query) {
    if (typeof query === "string") {
      query = new URLSearchParams(query);
    }
    const value = query.get(CMCD_PARAM);
    return decodeCmcd(value);
  }

  // src/util/cmcd/index.ts
  var CMCD_VERSION = 1;

  // src/util/Language.ts
  var Language_exports = {};
  __export(Language_exports, {
    compareLanguageTags: () => compareLanguageTags,
    parseLanguageTag: () => parseLanguageTag
  });
  function parseLanguageTag(tag = "") {
    const regex = /^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;
    const match = tag.match(regex) || [];
    return {
      tag,
      language: match[1] || "",
      extended: match[2] || "",
      script: match[3] || "",
      region: match[4] || "",
      toString() {
        return this.tag;
      }
    };
  }
  function compareLanguageTags(a, b) {
    if (a === b) {
      return true;
    }
    const tagA = this.parseLanguageTag(a);
    const tagB = this.parseLanguageTag(b);
    if (tagA.language.slice(0, 2).toLowerCase() === tagB.language.slice(0, 2).toLowerCase()) {
      const regionA = tagA.region.toUpperCase();
      const regionB = tagB.region.toUpperCase();
      return regionA === regionB || !!regionA && !regionB || !regionA && !!regionB;
    }
    return false;
  }

  // src/util/System.ts
  var import_screenfull = __toESM(require_screenfull(), 1);

  // src/enum/Device.ts
  var Device = /* @__PURE__ */ ((Device2) => {
    Device2["DESKTOP"] = "Desktop";
    Device2["ANDROID_PHONE"] = "Android Phone";
    Device2["WINDOWS_PHONE"] = "Windows Phone";
    Device2["IPHONE"] = "iPhone";
    Device2["IPOD"] = "iPod";
    Device2["IPAD"] = "iPad";
    Device2["KINDLE"] = "Kindle";
    Device2["TABLET"] = "Tablet";
    Device2["MOBILE"] = "Mobile";
    Device2["EMBEDDED"] = "Embedded";
    Device2["LG_SMART_TV"] = "LG Smart Tv";
    Device2["VIZIO_SMART_TV"] = "Vizio Smart Tv";
    Device2["SAMSUNG_SMART_TV"] = "Samsung Smart Tv";
    Device2["PHILLIPS_SMART_TV"] = "Phillips Smart Tv";
    Device2["COMCAST_X1"] = "Comcast X1";
    Device2["XBOX_ONE"] = "Xbox One";
    Device2["CHROMECAST"] = "Chromecast";
    Device2["PLAYSTATION_4"] = "PlayStation 4";
    Device2["PLAYSTATION_5"] = "PlayStation 5";
    Device2["SKY_Q"] = "Sky Q";
    Device2["FOXTEL"] = "Foxtel";
    Device2["ORANGE"] = "Orange STB";
    Device2["VIRGIN_MEDIA"] = "Virgin Media STB";
    Device2["VESTEL"] = "Vestel Smart Tv";
    Device2["UNKNOWN"] = "UNKNOWN";
    return Device2;
  })(Device || {});

  // src/enum/Os.ts
  var Os = /* @__PURE__ */ ((Os2) => {
    Os2["OSX"] = "OS X";
    Os2["WINDOWS"] = "Windows";
    Os2["WINDOWS7"] = "Windows 7";
    Os2["WINDOWS8"] = "Windows 8";
    Os2["WINDOWS10"] = "Windows 10";
    Os2["WINDOWS_VISTA"] = "Windows Vista";
    Os2["WINDOWS_PHONE"] = "Windows Phone";
    Os2["IOS"] = "iOS";
    Os2["ANDROID"] = "Android";
    Os2["CHROMIUM"] = "Chromium";
    Os2["WEBOS"] = "Web0S";
    Os2["SMARTCAST"] = "SmartCast";
    Os2["TIZEN"] = "Tizen";
    Os2["ORBIS"] = "Orbis OS";
    Os2["PROSPERO"] = "Prospero OS";
    Os2["TIVO"] = "TiVo OS";
    Os2["UNKNOWN"] = "Unknown";
    return Os2;
  })(Os || {});

  // src/enum/Platform.ts
  var Platform = /* @__PURE__ */ ((Platform2) => {
    Platform2["MAC"] = "Macintosh";
    Platform2["WINDOWS"] = "Windows";
    Platform2["LINUX"] = "Linux";
    Platform2["UNKNOWN"] = "Unknown";
    return Platform2;
  })(Platform || {});

  // src/util/MediaTypes.ts
  var codecs = "; codecs=";
  var MediaTypes = {
    video: {
      HLS: "application/vnd.apple.mpegurl" /* HLS */,
      AVC: "video/mp4" /* MP4_VIDEO */ + codecs + "avc1.4D401E,mp4a.40.2" /* AVC */,
      HEVC: "video/mp4" /* MP4_VIDEO */ + codecs + "hev1.1.2.L93.B0" /* HEVC */,
      WEBM_VP8: "video/webm" /* WEBM_VIDEO */ + codecs + "vp8, opus, vorbis" /* VP8 */,
      WEBM_VP9: "video/webm" /* WEBM_VIDEO */ + codecs + "vp9, opus, vorbis" /* VP9 */
    },
    audio: {
      AVC: "audio/mp4" /* MP4_AUDIO */ + codecs + "avc1.4D401E,mp4a.40.2" /* AVC */,
      HEVC: "audio/mp4" /* MP4_AUDIO */ + codecs + "hev1.1.2.L93.B0" /* HEVC */,
      WEBM_VP8: "audio/webm" /* WEBM_AUDIO */ + codecs + "vp8, opus, vorbis" /* VP8 */,
      WEBM_VP9: "audio/webm" /* WEBM_AUDIO */ + codecs + "vp9, opus, vorbis" /* VP9 */
    }
  };

  // src/util/System.ts
  function inspectSystem(global) {
    if (!global) {
      return { global, isBrowser: false };
    }
    const navigator2 = global.navigator || { userAgent: "" };
    const document2 = global.document || null;
    const isLinux = (str, obj) => {
      const regex = new RegExp("Linux" /* LINUX */, "i");
      const uaData = navigator2.userAgentData;
      const platform2 = navigator2.platform || (uaData == null ? void 0 : uaData.platform);
      const isArm = /Linux armv/.test(platform2);
      if (regex.test(str) || str.indexOf("Android" /* ANDROID */) >= 0) {
        obj.platform = "Linux" /* LINUX */;
        obj.device = "UNKNOWN" /* UNKNOWN */;
        if (str.indexOf("Chromium" /* CHROMIUM */) >= 0) {
          const re = /Chromium\/([\d+\.]*)\s/;
          const test = re.exec(str);
          obj.os = "Chromium" /* CHROMIUM */;
          obj.osVersion = test && test[1] || "";
        } else if (str.indexOf("Android" /* ANDROID */) >= 0) {
          const re = / Android ([^\s]+);/;
          const test = re.exec(str);
          obj.os = "Android" /* ANDROID */;
          obj.osVersion = test && test[1] || "";
          obj.device = "Android Phone" /* ANDROID_PHONE */;
        } else if (str.indexOf("Web0S" /* WEBOS */) >= 0) {
          obj.os = "Web0S" /* WEBOS */;
          obj.osVersion = "n/a";
          obj.device = "LG Smart Tv" /* LG_SMART_TV */;
        } else if (str.indexOf("SmartCast" /* SMARTCAST */) >= 0) {
          obj.os = "SmartCast" /* SMARTCAST */;
          obj.osVersion = "n/a";
          obj.device = "Vizio Smart Tv" /* VIZIO_SMART_TV */;
        } else if (str.indexOf("Tizen" /* TIZEN */) >= 0) {
          const re = /Tizen ([^\s]+)(;|\))/;
          const test = re.exec(str);
          obj.os = "Tizen" /* TIZEN */;
          obj.osVersion = test && test[1] || "";
          obj.device = "Samsung Smart Tv" /* SAMSUNG_SMART_TV */;
        } else if (str.indexOf("Sky") >= 0) {
          obj.os = "Linux" /* LINUX */;
          obj.osVersion = "n/a";
          obj.device = "Sky Q" /* SKY_Q */;
        } else if (str.indexOf("Foxtel") >= 0) {
          obj.os = "Linux" /* LINUX */;
          obj.osVersion = "n/a";
          obj.device = "Foxtel" /* FOXTEL */;
        } else if (str.indexOf("VirginMedia") >= 0) {
          obj.os = "Linux" /* LINUX */;
          obj.osVersion = "n/a";
          obj.device = "Virgin Media STB" /* VIRGIN_MEDIA */;
        } else if (str.indexOf("Philips") >= 0) {
          obj.os = "Linux" /* LINUX */;
          obj.osVersion = "n/a";
          obj.device = "Phillips Smart Tv" /* PHILLIPS_SMART_TV */;
        } else if (str.indexOf("SOPOpenBrowser") >= 0) {
          obj.os = "Linux" /* LINUX */;
          obj.osVersion = "n/a";
          obj.device = "Orange STB" /* ORANGE */;
        } else if (str.indexOf("Vestel") >= 0) {
          obj.os = "TiVo OS" /* TIVO */;
          const version = str.match(/TiVoOS\/([\d.]+)/);
          obj.osVersion = version ? version[1] : "n/a";
          obj.device = "Vestel Smart Tv" /* VESTEL */;
        } else if (typeof $badger !== "undefined" || / Xfinity/.test(str) || / WPE/.test(str)) {
          obj.os = "Linux" /* LINUX */;
          obj.osVersion = "n/a";
          obj.device = "Comcast X1" /* COMCAST_X1 */;
        } else if (isArm) {
          obj.os = "Linux" /* LINUX */;
          obj.osVersion = "n/a";
          obj.device = "Embedded" /* EMBEDDED */;
        }
        return true;
      }
      return false;
    };
    const isMac = (str, obj) => {
      if (str.indexOf("Macintosh" /* MAC */) >= 0) {
        obj.platform = "Macintosh" /* MAC */;
        const iPad = ua.match(/(iPad)/) || navigator2.maxTouchPoints > 1;
        if (iPad) {
          obj.device = "iPad" /* IPAD */;
          obj.os = "iOS" /* IOS */;
        } else if (str.indexOf("OS X" /* OSX */) >= 0) {
          obj.device = "Desktop" /* DESKTOP */;
          obj.os = "OS X" /* OSX */;
        }
        const test = /Mac OS X ([\d.]+)/.exec(str);
        obj.osVersion = test && test[1] ? test[1] : null;
        return true;
      } else if (str.indexOf("like Mac OS X") !== -1) {
        obj.platform = "Macintosh" /* MAC */;
        obj.os = "iOS" /* IOS */;
        obj.device = "UNKNOWN" /* UNKNOWN */;
        const re = /\sOS\s([^\s]*)\s/;
        const version = re.exec(str);
        if (version && version[1]) {
          obj.osVersion = version[1];
        }
        const devices = [/\(iPhone;/, /\(iPad;/, /\(iPod;/];
        const names = ["iPhone" /* IPHONE */, "iPad" /* IPAD */, "iPod" /* IPOD */];
        let i = devices.length;
        while (i--) {
          if (devices[i].test(str)) {
            obj.device = names[i];
            return true;
          }
        }
        return true;
      }
      return false;
    };
    const isWin = (ua2, obj) => {
      let re = /(Windows Phone |Windows Phone OS )([^\s]+);/, reNt = /Windows NT ([^\s]+)[;\)]/, win = re.exec(ua2);
      if (win && win[2]) {
        obj.platform = "Windows" /* WINDOWS */;
        obj.os = "Windows Phone" /* WINDOWS_PHONE */;
        obj.osVersion = win[2];
        obj.device = "Windows Phone" /* WINDOWS_PHONE */;
        return true;
      } else {
        const test = reNt.exec(ua2);
        obj.device = "Desktop" /* DESKTOP */;
        if (test && test[1]) {
          obj.platform = "Windows" /* WINDOWS */;
          obj.os = "Windows" /* WINDOWS */;
          const osVersionNbr = test[1];
          if (/Xbox; Xbox One/.test(ua2)) {
            obj.device = "Xbox One" /* XBOX_ONE */;
          }
          if (parseInt(osVersionNbr) === 10) {
            obj.os = "Windows 10" /* WINDOWS10 */;
            obj.osVersion = osVersionNbr;
          } else {
            switch (osVersionNbr) {
              case "6.0":
                obj.os = "Windows Vista" /* WINDOWS_VISTA */;
                break;
              case "6.1":
                obj.os = "Windows 7" /* WINDOWS7 */;
                obj.osVersion = "7";
                break;
              case "6.2":
                obj.os = "Windows 8" /* WINDOWS8 */;
                obj.osVersion = "8";
                break;
            }
          }
          return true;
        }
      }
      return false;
    };
    const getMsBrowser = (reEdge, reIe, ua2) => {
      const tri = /Trident.[^\s]+;.*rv:([^\s]+)[);]/;
      if (reIe.test(ua2)) {
        return { browser: "MSIE" /* MSIE */, re: reIe };
      } else if (reEdge.test(ua2)) {
        return { browser: "Edge" /* EDGE */, re: reEdge };
      } else if (tri.test(ua2)) {
        return { browser: "MSIE" /* MSIE */, re: tri };
      }
      return { browser: "Unknown" /* UNKNOWN */, re: null };
    };
    const getSafariBrowser = (re, ua2, platformInfo2) => {
      const test = re.test(ua2), browserName = platformInfo2.os === "Android" /* ANDROID */ ? "Android" /* ANDROID */ : "Safari" /* SAFARI */;
      if (test && platformInfo2.os !== "Unknown" && /MacIntel|iPhone|iPad/.test(navigator2.platform)) {
        return browserName;
      }
      return null;
    };
    const getBrowser = (ua2, platformInfo2) => {
      const re = {
        ["Chrome" /* CHROME */]: /Chrome\/(\S+)/,
        ["Chrome-iOS" /* CHROME_IOS */]: /CriOS\/(\S+)/,
        ["Firefox-iOS" /* FIREFOX_IOS */]: /FxiOS\/(\S+)/,
        ["Edge" /* EDGE */]: / Edge?\/([^\s]+)/,
        ["Firefox" /* FIREFOX */]: /Firefox\/(\S+)/,
        ["Opera" /* OPERA */]: /Opera|OPR\/(\S+)/,
        ["Safari" /* SAFARI */]: /Version\/(\S+).*Safari/,
        ["MSIE" /* MSIE */]: /MSIE ([^\s]+)[);] Windows/,
        ["Android" /* ANDROID */]: /Android/,
        ["Silk" /* SILK */]: /Silk\/(\S+)/,
        ["PlayStation 4 (WebMAF)" /* PLAYSTATION_4_WEBMAF */]: /Playstation 4 (WebMAF) (\S+)/,
        ["PlayStation 4 (Media Source API)" /* PLAYSTATION_4_MSE */]: /WebMAF\/v3/,
        ["PlayStation 5 (Media Source API)" /* PLAYSTATION_5 */]: /PlayStation 5/,
        ["Webkit Browser" /* WEBKIT */]: / WPE/,
        ["Unknown" /* UNKNOWN */]: null
      };
      const isChromeIos = re["Chrome-iOS" /* CHROME_IOS */].test(ua2);
      const isChrome = (re["Chrome" /* CHROME */].test(ua2) || isChromeIos) && !re["Opera" /* OPERA */].test(ua2) && !re["Edge" /* EDGE */].test(ua2);
      const assembleInfo = (bName, re2, ua3) => {
        const browser2 = re2 && re2.exec(ua3), out = {
          browser: bName,
          browserVersion: "0",
          browserMajorVersion: 0
        };
        if (browser2 && browser2.length && browser2.length > 1) {
          out.browserVersion = browser2[1] || "";
          if (out.browserVersion.indexOf(".")) {
            const ar = out.browserVersion.split(".");
            if (Array.isArray(ar) && ar.length) {
              const mv = parseInt(ar[0]);
              !isNaN(mv) && (out.browserMajorVersion = mv);
            }
          } else {
            const mv = parseInt(out.browserVersion);
            !isNaN(mv) && (out.browserMajorVersion = mv);
          }
        }
        return out;
      };
      if (isChrome) {
        const name = isChromeIos ? "Chrome-iOS" /* CHROME_IOS */ : "Chrome" /* CHROME */;
        return assembleInfo(name, re[name], ua2);
      }
      const b = getMsBrowser(re["Edge" /* EDGE */], re["MSIE" /* MSIE */], ua2);
      if (b.browser !== "Unknown" /* UNKNOWN */) {
        return assembleInfo(b.browser, b.re, ua2);
      }
      for (const q in re) {
        switch (q) {
          case "Firefox" /* FIREFOX */:
          case "Firefox-iOS" /* FIREFOX_IOS */:
          case "Silk" /* SILK */:
          case "Android" /* ANDROID */:
            if (re[q].test(ua2)) {
              if (q === "Silk" /* SILK */) {
                platformInfo2.device = "Kindle" /* KINDLE */;
              }
              return assembleInfo(q, re[q], ua2);
            }
            break;
          case "Webkit Browser" /* WEBKIT */:
            return assembleInfo("Webkit Browser" /* WEBKIT */, re["Webkit Browser" /* WEBKIT */], ua2);
          case "PlayStation 4 (WebMAF)" /* PLAYSTATION_4_WEBMAF */:
          case "PlayStation 4 (Media Source API)" /* PLAYSTATION_4_MSE */:
          case "PlayStation 5 (Media Source API)" /* PLAYSTATION_5 */:
            if (re[q].test(ua2)) {
              const isPS5 = re["PlayStation 5 (Media Source API)" /* PLAYSTATION_5 */].test(ua2);
              let browser2;
              if (isPS5) {
                browser2 = "PlayStation 5 (Media Source API)" /* PLAYSTATION_5 */;
              } else {
                browser2 = re["PlayStation 4 (Media Source API)" /* PLAYSTATION_4_MSE */].test(ua2) ? "PlayStation 4 (Media Source API)" /* PLAYSTATION_4_MSE */ : "PlayStation 4 (WebMAF)" /* PLAYSTATION_4_WEBMAF */;
              }
              platformInfo2.device = isPS5 ? "PlayStation 5" /* PLAYSTATION_5 */ : "PlayStation 4" /* PLAYSTATION_4 */;
              platformInfo2.platform = isPS5 ? "PlayStation 5" /* PLAYSTATION_5 */ : "PlayStation 4" /* PLAYSTATION_4 */;
              platformInfo2.os = isPS5 ? "Prospero OS" /* PROSPERO */ : "Orbis OS" /* ORBIS */;
              return assembleInfo(browser2, re[browser2], ua2);
            }
            break;
          case "Safari" /* SAFARI */:
            let b2 = getSafariBrowser(re[q], ua2, platformInfo2);
            if (b2) {
              return assembleInfo(q, re[q], ua2);
            }
            break;
          case "Opera" /* OPERA */:
            let test = re[q].exec(ua2);
            if (test) {
              const browser2 = test.indexOf("Opera Mini/") >= 0 || test.indexOf("Opera Mobi") >= 0 ? "Opera-Mobile" /* OPERA_MOBILE */ : "Opera" /* OPERA */;
              return assembleInfo(browser2, re[q], ua2);
            }
            break;
        }
      }
      return assembleInfo("Unknown" /* UNKNOWN */, re["Unknown" /* UNKNOWN */], ua2);
    };
    const getPlatform = (userAgent) => {
      const ual = userAgent.toLowerCase();
      const out = {
        os: "Unknown" /* UNKNOWN */,
        platform: "Unknown" /* UNKNOWN */,
        osVersion: "",
        device: "UNKNOWN" /* UNKNOWN */
      };
      if (ual.indexOf("fxios") >= 0) {
        out.os = "iOS" /* IOS */;
        out.platform = "Macintosh" /* MAC */;
        if (ual.indexOf("iphone") >= 0) {
          out.device = "iPhone" /* IPHONE */;
        } else {
          out.device = "iPad" /* IPAD */;
        }
        return out;
      }
      if (ual.indexOf("crkey") >= 0) {
        out.platform = "Linux" /* LINUX */;
        out.device = "Chromecast" /* CHROMECAST */;
        return out;
      }
      const re = /\s(\([^)]+\))/;
      const test = re.exec(userAgent);
      if (test && test.length && test.length > 1) {
        const pStr = test[1].replace(/_/gi, ".");
        const tests = [
          (str, obj) => isLinux(str, obj),
          (str, obj) => isMac(str, obj),
          (str, obj) => isWin(str, obj)
        ];
        let i = tests.length;
        while (i--) {
          const ti = tests[i];
          if (ti(i === 0 ? userAgent : pStr, out)) {
            break;
          }
        }
      }
      return out;
    };
    const parseVerStr = (str) => {
      const out = {
        majorVersion: null,
        minorVersion: null,
        versionString: null
      };
      if (isString(str)) {
        out.versionString = str;
        const spl = str.split(".");
        const mj = parseInt(spl[0], 10);
        const mn = parseInt(spl[1], 10);
        !isNaN(mj) && (out.majorVersion = mj);
        !isNaN(mn) && (out.minorVersion = mn);
      }
      return out;
    };
    const ua = navigator2.userAgent || "";
    const platformInfo = getPlatform(ua);
    const browserInfo = getBrowser(ua, platformInfo);
    const { os, platform, osVersion, device } = platformInfo;
    const { browser, browserVersion } = browserInfo;
    const osVersionInfo = parseVerStr(osVersion);
    const browserVersionInfo = parseVerStr(browserVersion);
    const isTv = (() => {
      switch (device) {
        case "LG Smart Tv" /* LG_SMART_TV */:
        case "Vizio Smart Tv" /* VIZIO_SMART_TV */:
        case "Samsung Smart Tv" /* SAMSUNG_SMART_TV */:
        case "Phillips Smart Tv" /* PHILLIPS_SMART_TV */:
        case "Comcast X1" /* COMCAST_X1 */:
        case "Sky Q" /* SKY_Q */:
        case "Foxtel" /* FOXTEL */:
        case "Virgin Media STB" /* VIRGIN_MEDIA */:
        case "Vestel Smart Tv" /* VESTEL */:
          return true;
        default:
          return false;
      }
    })();
    const isDesktop = device === "Desktop" /* DESKTOP */;
    const isConsole = (() => {
      switch (device) {
        case "PlayStation 4" /* PLAYSTATION_4 */:
        case "PlayStation 5" /* PLAYSTATION_5 */:
        case "Xbox One" /* XBOX_ONE */:
          return true;
        default:
          return false;
      }
    })();
    const isReactNative = navigator2.product === "ReactNative";
    const isWebkit = !!global.WebKitMediaSource;
    const hasMediaSource = !!(global.MediaSource || isWebkit);
    const isTypeSupported = (codec) => {
      let supported = false;
      if (isWebkit) {
        supported = global.WebKitMediaSource.isTypeSupported(codec);
      } else if (hasMediaSource) {
        supported = global.MediaSource.isTypeSupported(codec);
      }
      if (!supported && document2) {
        const element = document2.createElement("video");
        if (isObject(element) && isFunction(element.canPlayType)) {
          if (element.canPlayType(codec) === "probably" || element.canPlayType(codec) === "maybe") {
            supported = true;
          }
        }
      }
      return supported;
    };
    const hasVp8 = isTypeSupported(MediaTypes.video.WEBM_VP8);
    const hasVp9 = isTypeSupported(MediaTypes.video.WEBM_VP9);
    const supportsUnrestrictedAutoplay = isTv || isConsole || isReactNative;
    const isWebMaf = !!global["WM_videoPlayer"];
    return {
      appNamespace: null,
      document: document2,
      global,
      isBrowser: !isWebMaf && !!document2 && !isReactNative,
      browser,
      browserVersionInfo,
      device,
      os,
      osVersionInfo,
      platform,
      isAndroid: device === "Android Phone" /* ANDROID_PHONE */ || os === "Android" /* ANDROID */,
      isChromecast: device === "Chromecast" /* CHROMECAST */,
      isDesktop,
      isEmbedded: device === "Embedded" /* EMBEDDED */,
      isIos: os === "iOS" /* IOS */,
      isMobile: !isDesktop,
      isTizen: device === "Samsung Smart Tv" /* SAMSUNG_SMART_TV */,
      isTv,
      isConsole,
      isWebkit,
      isWebMaf,
      isWebOs: os === "Web0S" /* WEBOS */,
      isXboxOne: device === "Xbox One" /* XBOX_ONE */,
      hasFullscreenApi: import_screenfull.default.isEnabled,
      hasMediaSource,
      hasEncryptedMediaSource: !!(global.MediaKeys || global.WebKitMediaKeys || global.MSMediaKeys),
      supportsVp8: hasVp8,
      supportsVp9: hasVp9,
      supportsWebM: hasVp8 || hasVp9,
      supportsMediaDecodeConfigurations: !!navigator2.mediaCapabilities,
      supportsNativeHls: isTypeSupported(MediaTypes.video.HLS),
      supportsRequestMediaKeySystemAccess: !!global.MediaKeySystemAccess,
      supportsUnrestrictedAutoplay
    };
  }
  var System = inspectSystem(typeof window === "object" ? window : null);

  // src/util/TimedText.ts
  function clearCue(textTrack, time) {
    try {
      const Cue = VTTCue || TextTrackCue;
      textTrack.addCue(new Cue(time - 0.1, time + 0.1, " "));
    } catch (error) {
    }
  }
  function clearAllCues(textTrack) {
    const clearCues = (cues) => {
      if (!cues) {
        return;
      }
      Array.from(cues).forEach((cue) => {
        try {
          textTrack.removeCue(cue);
        } catch (error) {
        }
      });
    };
    clearCues(textTrack.cues);
    clearCues(textTrack.activeCues);
  }
  function dedupeCues(track, time) {
    const map = {};
    const cues = [];
    processCues(track, time);
    if (!track.activeCues) {
      return cues;
    }
    Array.from(track.activeCues).forEach((cue) => {
      try {
        if (!cue) {
          return;
        }
        const { text, startTime, endTime, line } = cue;
        if (!text) {
          return;
        }
        const mapped = map[text];
        if (!mapped) {
          map[text] = cue;
        } else if (mapped.startTime === startTime) {
          if (mapped.endTime !== endTime) {
            mapped.endTime = Math.max(mapped.endTime, endTime);
          }
          if (mapped.line !== line) {
            mapped.line = mapped.line === "auto" || line === "auto" ? "auto" : mapped.line;
          }
          track.removeCue(cue);
          return;
        }
        cues.push(cue);
      } catch (error) {
      }
    });
    return cues;
  }
  function processCues(textTrack, playhead) {
    const map = {};
    const time = Math.max(0, playhead - 15);
    Array.from(textTrack.cues).forEach((cue) => {
      try {
        const { startTime, endTime, text } = cue;
        if (endTime < time) {
          return;
        }
        if (!map[text]) {
          map[text] = {};
        }
        const prev = map[text][endTime];
        if (prev && prev.line === cue.line) {
          textTrack.removeCue(cue);
          return;
        }
        const split = map[text][startTime];
        if (split && cue.line === split.line) {
          split.endTime = endTime;
          delete map[text][startTime];
          textTrack.removeCue(cue);
          cue = split;
        }
        map[text][endTime] = cue;
      } catch (error) {
      }
    });
  }
  function isTextTrack(kind) {
    return kind === "captions" /* CAPTIONS */ || kind === "subtitles" /* SUBTITLES */;
  }
  function smpteToVtt(url, textTrack) {
    return __async(this, null, function* () {
      const xml = yield request({ url, responseType: "document" /* DOCUMENT */ });
      const smpteCues = xml.querySelectorAll("tt body div p");
      if (!smpteCues.length) {
        throw new Error(`No cues found in ${url}`);
      }
      const align = System.browser === "Safari" /* SAFARI */ ? "middle" : "center";
      const lineOffset = System.browser === "Safari" /* SAFARI */ ? -1 : 0;
      const isVTTCueSupported = System.global.VTTCue !== void 0;
      const Cue = isVTTCueSupported ? System.global.VTTCue : System.global.TextTrackCue;
      smpteCues.forEach((item, i, cues) => {
        if (isEmpty(item.textContent)) {
          return;
        }
        const text = item.textContent.replace(/(.*)<span.*tts:fontStyle="italic">(.*)<\/span>(.*)/g, "$1<i>$2</i>$3").replace(/(.*)<span.*tts:fontWeight="bold">(.*)<\/span>(.*)/g, "$1<b>$2</b>$3").replace(/(.*)<span.*tts:textDecoration="under">(.*)<\/span>(.*)/g, "$1<u>$2</u>$3");
        const lc = getNumLines(text);
        item._lineCountPrev = item._lineCountPrev || 0;
        item._lineCountNext = item._lineCountNext || 0;
        let n = i + 1;
        let nextItem = cues[n];
        const begin = item.getAttribute("begin");
        while ((nextItem == null ? void 0 : nextItem.getAttribute("begin")) === begin) {
          nextItem._lineCountPrev = lc + item._lineCountNext;
          item._lineCountNext += getNumLines(nextItem.textContent);
          nextItem = cues[++n];
        }
        const cue = new Cue(hmsToSec(begin), hmsToSec(item.getAttribute("end")), text);
        try {
          const ttsAlign = item.getAttribute("tts:textAlign");
          cue.align = !ttsAlign ? align : ttsAlign;
        } catch (error) {
          cue.align = "middle";
        }
        if (isVTTCueSupported) {
          const metadata = item.querySelector("metadata");
          if (metadata) {
            cue.snapToLines = true;
            const col = parseInt(metadata.getAttribute("cccol"));
            const row = parseInt(metadata.getAttribute("ccrow"));
            const position = Math.round(col / 35 * 100);
            cue.position = position;
            try {
              cue.align = position < 45 ? "start" : position > 55 ? "end" : align;
            } catch (error) {
              cue.align = "center";
            }
            cue.positionAlign = position < 45 ? "line-left" : position > 55 ? "line-right" : "center";
            cue.line = row - 17 + lineOffset;
          }
        }
        try {
          textTrack.addCue(cue);
        } catch (error) {
        }
      });
    });
  }
  function createSidecarTextTrack(resource, video, language = "en", label = "English") {
    var _a;
    let url = (_a = resource.location) == null ? void 0 : _a.textTrackUrl;
    if (!url) {
      return Promise.reject("Invalid text track url");
    }
    const isVtt = url.indexOf(".vtt") >= 0;
    const { cmcd } = resource;
    if (cmcd.enabled) {
      url = appendCmcdQuery(url, {
        ot: CmcdObjectType.CAPTION,
        su: true,
        sid: cmcd.sessionId,
        cid: cmcd.contentId,
        pr: video.playbackRate,
        v: CMCD_VERSION
      });
    }
    if (isVtt) {
      const track = document.createElement("track");
      track.kind = "captions" /* CAPTIONS */;
      track.label = label;
      track.srclang = language;
      track.id = "sidecar-vtt";
      track.src = url;
      video.appendChild(track);
      return Promise.resolve(track.track);
    } else {
      const track = video.addTextTrack("captions" /* CAPTIONS */, label, language);
      return smpteToVtt(url, track).then(() => track);
    }
  }
  function findLanguageTracks(tracks, language, exact = false) {
    const regex = (language2) => new RegExp(`^${language2}`, "i");
    const exactMatch = regex(language);
    let matches = tracks.filter((t) => exactMatch.test(t.language));
    if (!exact) {
      const shortMatch = regex(parseLanguageTag(language).language);
      matches = matches.concat(tracks.filter((t) => !exactMatch.test(t.language) && shortMatch.test(t.language)));
    }
    return matches;
  }
  function findDefaultTrack(tracks, language) {
    return findLanguageTracks(tracks, language)[0] || tracks.find((t) => t.default) || tracks[0];
  }

  // src/util/Video.ts
  var Video_exports = {};
  __export(Video_exports, {
    createSimpleVideoInterface: () => createSimpleVideoInterface,
    isBuffered: () => isBuffered,
    isValidPlayheadTime: () => isValidPlayheadTime
  });

  // src/util/VirtualVideoElement.ts
  var VirtualVideoElement = class {
    constructor() {
      this.muted = false;
      this.volume = NaN;
      this.currentTime = NaN;
      this.duration = NaN;
    }
  };

  // src/util/Video.ts
  function isValidPlayheadTime(value) {
    return isNumber(value) && Number.isFinite(value) && value >= 0;
  }
  function createSimpleVideoInterface() {
    return new VirtualVideoElement();
  }
  function isBuffered(video, time = video.currentTime) {
    const buffered = video.buffered;
    for (let i = 0, len = buffered.length; i < len; i++) {
      if (buffered.start(i) <= time && buffered.end(i) >= time) {
        return true;
      }
    }
    return false;
  }

  // src/adapter/playback/enum/VideoSurfaceEvents.ts
  var VideoSurfaceEvents = /* @__PURE__ */ ((VideoSurfaceEvents2) => {
    VideoSurfaceEvents2["ABORT"] = "abort";
    VideoSurfaceEvents2["CAN_PLAY"] = "canplay";
    VideoSurfaceEvents2["CAN_PLAY_THROUGH"] = "canplaythrough";
    VideoSurfaceEvents2["DURATION_CHANGE"] = "durationchange";
    VideoSurfaceEvents2["ENDED"] = "ended";
    VideoSurfaceEvents2["ERROR"] = "error";
    VideoSurfaceEvents2["LOADED_METADATA"] = "loadedmetadata";
    VideoSurfaceEvents2["LOAD_START"] = "loadstart";
    VideoSurfaceEvents2["PAUSE"] = "pause";
    VideoSurfaceEvents2["PLAY"] = "play";
    VideoSurfaceEvents2["PLAYING"] = "playing";
    VideoSurfaceEvents2["PROGRESS"] = "progress";
    VideoSurfaceEvents2["RATE_CHANGE"] = "ratechange";
    VideoSurfaceEvents2["SEEKED"] = "seeked";
    VideoSurfaceEvents2["SEEKING"] = "seeking";
    VideoSurfaceEvents2["STALLED"] = "stalled";
    VideoSurfaceEvents2["TIME_UPDATE"] = "timeupdate";
    VideoSurfaceEvents2["VOLUME_CHANGE"] = "volumechange";
    VideoSurfaceEvents2["WAITING"] = "waiting";
    return VideoSurfaceEvents2;
  })(VideoSurfaceEvents || {});

  // src/enum/TextTrackMode.ts
  var TextTrackMode = /* @__PURE__ */ ((TextTrackMode2) => {
    TextTrackMode2["SHOWING"] = "showing";
    TextTrackMode2["HIDDEN"] = "hidden";
    TextTrackMode2["DISABLED"] = "disabled";
    return TextTrackMode2;
  })(TextTrackMode || {});

  // src/enum/WildCard.ts
  var WILDCARD = "*";

  // src/util/ArrayUtil.ts
  var ArrayUtil_exports = {};
  __export(ArrayUtil_exports, {
    arrayToString: () => arrayToString,
    base64DecodeUint8Array: () => base64DecodeUint8Array,
    base64EncodeUint8Array: () => base64EncodeUint8Array,
    bufferToString: () => bufferToString,
    forEach: () => forEach,
    forEachReverse: () => forEachReverse,
    stringToArray: () => stringToArray
  });
  function base64DecodeUint8Array(input) {
    const raw = atob(input);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
  function base64EncodeUint8Array(input) {
    const str = String.fromCharCode.apply(null, input);
    return btoa(str);
  }
  function forEach(list, func) {
    if (!list || !list.length || !isFunction(func)) {
      return;
    }
    for (let i = 0, len = list.length; i < len; i++) {
      func(list[i], i, list);
    }
  }
  function forEachReverse(list, func) {
    if (!list || !list.length || !isFunction(func)) {
      return;
    }
    for (let i = list.length - 1; i > -1; i--) {
      func(list[i], i, list);
    }
  }
  function bufferToString(buffer) {
    return typeof TextDecoder !== "undefined" ? new TextDecoder().decode(buffer) : String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
  function arrayToString(array) {
    const uint16array = new Uint16Array(array.buffer);
    return String.fromCharCode.apply(null, uint16array);
  }
  function stringToArray(string) {
    const buffer = new ArrayBuffer(string.length * 2);
    const array = new Uint16Array(buffer);
    for (let i = 0, strLen = string.length; i < strLen; i++) {
      array[i] = string.charCodeAt(i);
    }
    return array;
  }

  // src/util/id3.ts
  var id3_exports = {};
  __export(id3_exports, {
    getId3Frames: () => getId3Frames
  });

  // ../node_modules/@svta/common-media-library/dist/utils/utf8ArrayToStr.js
  function utf8ArrayToStr(array, exitOnNull = false) {
    if (typeof TextDecoder !== "undefined") {
      const decoder = new TextDecoder("utf-8");
      const decoded = decoder.decode(array);
      if (exitOnNull) {
        const idx = decoded.indexOf("\0");
        return idx !== -1 ? decoded.substring(0, idx) : decoded;
      }
      return decoded.replace(/\0/g, "");
    }
    const len = array.length;
    let c;
    let char2;
    let char3;
    let out = "";
    let i = 0;
    while (i < len) {
      c = array[i++];
      if (c === 0 && exitOnNull) {
        return out;
      } else if (c === 0 || c === 3) {
        continue;
      }
      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          out += String.fromCharCode(c);
          break;
        case 12:
        case 13:
          char2 = array[i++];
          out += String.fromCharCode((c & 31) << 6 | char2 & 63);
          break;
        case 14:
          char2 = array[i++];
          char3 = array[i++];
          out += String.fromCharCode((c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0);
          break;
      }
    }
    return out;
  }

  // ../node_modules/@svta/common-media-library/dist/id3/decodeId3PrivFrame.js
  function decodeId3PrivFrame(frame) {
    if (frame.size < 2) {
      return void 0;
    }
    const owner = utf8ArrayToStr(frame.data, true);
    const privateData = new Uint8Array(frame.data.subarray(owner.length + 1));
    return { key: frame.type, info: owner, data: privateData.buffer };
  }

  // ../node_modules/@svta/common-media-library/dist/id3/decodeId3TextFrame.js
  function decodeId3TextFrame(frame) {
    if (frame.size < 2) {
      return void 0;
    }
    if (frame.type === "TXXX") {
      let index = 1;
      const description = utf8ArrayToStr(frame.data.subarray(index), true);
      index += description.length + 1;
      const value = utf8ArrayToStr(frame.data.subarray(index));
      return { key: frame.type, info: description, data: value };
    }
    const text = utf8ArrayToStr(frame.data.subarray(1));
    return { key: frame.type, info: "", data: text };
  }

  // ../node_modules/@svta/common-media-library/dist/id3/decodeId3UrlFrame.js
  function decodeId3UrlFrame(frame) {
    if (frame.type === "WXXX") {
      if (frame.size < 2) {
        return void 0;
      }
      let index = 1;
      const description = utf8ArrayToStr(frame.data.subarray(index), true);
      index += description.length + 1;
      const value = utf8ArrayToStr(frame.data.subarray(index));
      return { key: frame.type, info: description, data: value };
    }
    const url = utf8ArrayToStr(frame.data);
    return { key: frame.type, info: "", data: url };
  }

  // ../node_modules/@svta/common-media-library/dist/id3/decodeId3Frame.js
  function decodeId3Frame(frame) {
    if (frame.type === "PRIV") {
      return decodeId3PrivFrame(frame);
    } else if (frame.type[0] === "W") {
      return decodeId3UrlFrame(frame);
    }
    return decodeId3TextFrame(frame);
  }

  // ../node_modules/@svta/common-media-library/dist/id3/readId3Size.js
  function readId3Size(data, offset) {
    let size = 0;
    size = (data[offset] & 127) << 21;
    size |= (data[offset + 1] & 127) << 14;
    size |= (data[offset + 2] & 127) << 7;
    size |= data[offset + 3] & 127;
    return size;
  }

  // ../node_modules/@svta/common-media-library/dist/id3/getId3FrameData.js
  function getId3FrameData(data) {
    const type = String.fromCharCode(data[0], data[1], data[2], data[3]);
    const size = readId3Size(data, 4);
    const offset = 10;
    return { type, size, data: data.subarray(offset, offset + size) };
  }

  // ../node_modules/@svta/common-media-library/dist/id3/isId3Footer.js
  function isId3Footer(data, offset) {
    if (offset + 10 <= data.length) {
      if (data[offset] === 51 && data[offset + 1] === 68 && data[offset + 2] === 73) {
        if (data[offset + 3] < 255 && data[offset + 4] < 255) {
          if (data[offset + 6] < 128 && data[offset + 7] < 128 && data[offset + 8] < 128 && data[offset + 9] < 128) {
            return true;
          }
        }
      }
    }
    return false;
  }

  // ../node_modules/@svta/common-media-library/dist/id3/isId3Header.js
  function isId3Header(data, offset) {
    if (offset + 10 <= data.length) {
      if (data[offset] === 73 && data[offset + 1] === 68 && data[offset + 2] === 51) {
        if (data[offset + 3] < 255 && data[offset + 4] < 255) {
          if (data[offset + 6] < 128 && data[offset + 7] < 128 && data[offset + 8] < 128 && data[offset + 9] < 128) {
            return true;
          }
        }
      }
    }
    return false;
  }

  // ../node_modules/@svta/common-media-library/dist/id3/getId3Frames.js
  function getId3Frames(id3Data) {
    let offset = 0;
    const frames = [];
    while (isId3Header(id3Data, offset)) {
      const size = readId3Size(id3Data, offset + 6);
      offset += 10;
      const end = offset + size;
      while (offset + 8 < end) {
        const frameData = getId3FrameData(id3Data.subarray(offset));
        const frame = decodeId3Frame(frameData);
        if (frame) {
          frames.push(frame);
        }
        offset += frameData.size + 10;
      }
      if (isId3Footer(id3Data, offset)) {
        offset += 10;
      }
    }
    return frames;
  }

  // src/adapter/playback/surface/MetadataSurface.ts
  var _MetadataSurface = class {
    constructor(config2, onMetadataCuepoint) {
      this.id3Map = [];
      this.daiId3 = /^google_/;
      this.maxId3DedupeLength = _MetadataSurface.MAX_ID3_DEDUPE_LENGTH;
      this.onTextTrackAdded = ({ track }) => {
        if (!this.isValidTrack(track)) {
          return;
        }
        track.mode = "hidden" /* HIDDEN */;
        track.addEventListener("cuechange" /* CUE_CHANGE */, this.onCueChange);
      };
      this.onCueChange = (e) => {
        const t = e.target;
        const cues = t && t.activeCues;
        if (!cues || !cues.length) {
          return;
        }
        forEach(cues, (cue) => this.processCue(cue));
      };
      this.onSeeking = () => {
        this.clearId3();
      };
      var _a;
      this.onMetadataCuepoint = onMetadataCuepoint;
      this.video = config2.video;
      this.id3OwnerIds = ["com.cbsi.live.sg"].concat(config2.resource.playback.id3OwnerIds || []);
      const maxId3DedupeLength = (_a = config2.playerOptions.overrides) == null ? void 0 : _a.maxId3DedupeLength;
      if (maxId3DedupeLength != null) {
        this.maxId3DedupeLength = maxId3DedupeLength;
      }
      this.addEvents();
      this.logger = config2.logger;
      this.logger.log("info" /* INFO */, "MetadataSurface created");
      forEach(this.video.textTracks, (track) => this.onTextTrackAdded({ track }));
    }
    destroy() {
      this.onMetadataCuepoint = null;
      this.id3Map = null;
      this.removeEvents();
      forEach(this.video.textTracks, (t) => this.cleanupTrack(t));
    }
    addEvents() {
      this.video.textTracks.addEventListener("addtrack" /* ADD_TRACK */, this.onTextTrackAdded);
      this.video.addEventListener("seeking" /* SEEKING */, this.onSeeking);
    }
    removeEvents() {
      this.video.textTracks.removeEventListener("addtrack" /* ADD_TRACK */, this.onTextTrackAdded);
      this.video.removeEventListener("seeking" /* SEEKING */, this.onSeeking);
      forEach(this.video.textTracks, (t) => t.removeEventListener("cuechange" /* CUE_CHANGE */, this.onCueChange));
    }
    clearId3() {
      this.id3Map = [];
    }
    cleanupTrack(track) {
      if (track.kind !== "metadata" /* METADATA */) {
        return;
      }
      function cleanupCue(cue) {
        try {
          if (cue) {
            track.removeCue(cue);
          }
        } catch (error) {
        }
      }
      forEachReverse(track.cues, cleanupCue);
      forEachReverse(track.activeCues, cleanupCue);
    }
    processCue(cue) {
      if (!cue.value && cue.data) {
        const { data: data2 } = cue;
        if (data2.constructor === ArrayBuffer) {
          const frames = getId3Frames(new Uint8Array(data2));
          frames.forEach((frame) => {
            cue.value = frame;
            this.processCue(cue);
          });
          return;
        }
      }
      const { value, startTime, endTime } = cue;
      const { key, data } = value;
      const { info = "" } = value;
      this.processId3(key, {
        id: void 0,
        text: typeof data === "string" ? data : "",
        info,
        data,
        startTime,
        endTime,
        source: cue
      });
    }
    processId3(key, metadata) {
      const { info, data } = metadata;
      if (key === "TXXX" && this.daiId3.test(metadata.text)) {
        if (isEmpty(info)) {
          metadata.info = metadata.text;
        }
        metadata.id = "google_dai";
      } else {
        if (!this.id3OwnerIds.find((id) => id === WILDCARD || info.includes(id))) {
          return;
        }
        metadata.id = info;
      }
      let text;
      try {
        text = data instanceof ArrayBuffer ? bufferToString(data) : data;
      } catch (error) {
        text = "";
      }
      if (key === "PRIV" && this.id3OwnerIds[0] === info) {
        metadata.data = text;
      }
      metadata.text = text;
      const duplicate = this.id3Map.some((d) => d.info === metadata.info && d.startTime === metadata.startTime && d.text === metadata.text);
      if (duplicate) {
        return;
      }
      if (this.id3Map.length > this.maxId3DedupeLength) {
        this.id3Map.pop();
      }
      this.id3Map.unshift(metadata);
      this.onMetadataCuepoint(metadata);
    }
    isMetadataTrack(type) {
      return type === "metadata" /* METADATA */;
    }
    isExpired(track) {
      return track.expired;
    }
    isValidTrack(track) {
      if (!track) {
        return false;
      }
      if (!this.isMetadataTrack(track.kind)) {
        return false;
      }
      if (this.isExpired(track)) {
        return false;
      }
      return true;
    }
  };
  var MetadataSurface = _MetadataSurface;
  MetadataSurface.MAX_ID3_DEDUPE_LENGTH = 32;

  // src/util/FunctionUtil.ts
  var FunctionUtil_exports = {};
  __export(FunctionUtil_exports, {
    debounce: () => debounce
  });
  function debounce(func, delay) {
    let timeout;
    const pending = () => timeout != null;
    const cancel = () => {
      clearTimeout(timeout);
      timeout = null;
    };
    const run = (...args) => {
      cancel();
      timeout = setTimeout(func, delay, ...args);
    };
    run.cancel = cancel;
    run.flush = func;
    run.pending = pending;
    return run;
  }

  // src/adapter/playback/surface/TextTrackSurface.ts
  var TextTrackSurface = class {
    constructor(config2, emit) {
      this.pTextTracks = null;
      this.currentTextTrack = null;
      this.currentTextTrackMode = "disabled" /* DISABLED */;
      this.existingTrack = [];
      this.addedTracks = [];
      this.ignoreBlankTracks = false;
      // Events
      this.onVideoSeeked = (e) => {
        this.updateForcedNarrative();
      };
      this.onVideoTextTrackAdded = (e) => {
        const track = e.track;
        track.expired = false;
        this.onTextTrackAdded(e);
      };
      this.onTextTrackAdded = (e) => {
        const track = e.track;
        const isEmpty2 = track.kind === "subtitles" /* SUBTITLES */ && !track.language && !track.label;
        const isMetadata = track.kind === "metadata" /* METADATA */;
        if (isMetadata || isEmpty2) {
          return;
        }
        this.addDebounced();
      };
      this.onTextTrackChange = (e) => {
        this.processDebounced();
      };
      this.onCueChange = (e) => {
        const track = e.target;
        const forced = track.kind === "forced" /* FORCED */;
        if (!this.config.textTrackSettings.enabled && !forced) {
          return;
        }
        const activeCues = dedupeCues(track, this.video.currentTime);
        this.emit("textCuepoint" /* TEXT_CUEPOINT */, { activeCues, forced });
      };
      this.addTracks = () => {
        forEach(this.pTextTracks, (t) => {
          const invalid = this.isExpired(t) || this.isDuplicateTrack(t);
          t.mode = !invalid ? "hidden" /* HIDDEN */ : "disabled" /* DISABLED */;
          if (invalid) {
            return;
          }
          this.addTrack(t);
        });
        if (!this.currentTextTrack) {
          this.textTrack = findDefaultTrack(this.textTracks, this.config.textTrackSettings.language);
          if (!this.textTrack) {
            return;
          }
          this.textTrack.mode = this.config.textTrackSettings.mode;
          this.emit("textTrackAvailable" /* TEXT_TRACK_AVAILABLE */);
        }
        this.processTracks();
      };
      this.processTracks = () => {
        const { enabled, native, enabledMode } = this.config.textTrackSettings;
        const tracks = this.textTracks;
        forEach(this.pTextTracks, (t) => {
          if (this.isExpired(t) && t.mode !== "disabled" /* DISABLED */) {
            t.mode = "disabled" /* DISABLED */;
          }
        });
        if (!native) {
          if (enabled) {
            const track2 = tracks.find((t) => t.mode === "showing" /* SHOWING */);
            if (track2) {
              track2.mode = enabledMode;
            }
          } else {
            const track2 = tracks.find((t) => t.mode !== "disabled" /* DISABLED */);
            if (track2) {
              track2.mode = "disabled" /* DISABLED */;
            }
          }
          return;
        }
        const track = tracks.find((t) => t.mode === "showing" /* SHOWING */);
        if (enabled) {
          if (track === this.currentTextTrack) {
            return;
          }
          if (!track) {
            this.textTrackMode = "disabled" /* DISABLED */;
          } else {
            this.textTrack = track;
          }
        } else {
          if (!track) {
            return;
          }
          if (track !== this.currentTextTrack) {
            this.textTrack = track;
          }
          this.textTrackMode = "showing" /* SHOWING */;
        }
      };
      this.config = config2;
      this.video = config2.video;
      this.pTextTracks = this.video.textTracks;
      this.currentTextTrackMode = config2.textTrackSettings.mode;
      this.pForcedLanguage = config2.textTrackSettings.language;
      this.ignoreBlankTracks = config2.playerOptions.ignoreBlankTextTracks;
      this.emit = emit || (() => {
      });
      this.processDebounced = debounce(this.processTracks, 100);
      this.addDebounced = debounce(this.addTracks, 25);
      this.addEvents();
      this.logger = config2.logger;
      this.logger.log("info" /* INFO */, "TextTrackSurface created");
      if (this.config.resource.location.textTrackUrl) {
        createSidecarTextTrack(this.config.resource, this.video);
      }
    }
    destroy() {
      this.processDebounced.cancel();
      this.addDebounced.cancel();
      this.emit = null;
      this.removeEvents();
      forEach(this.pTextTracks, (t) => this.cleanupTrack(t));
      forEach(this.video.querySelectorAll("track"), (element) => this.video.removeChild(element));
    }
    clearCue() {
      clearCue(this.currentTextTrack, this.video.currentTime);
    }
    cleanupTrack(track) {
      if (!this.isTextTrack(track.kind)) {
        return;
      }
      function cleanupCue(cue) {
        try {
          if (cue) {
            track.removeCue(cue);
          }
        } catch (error) {
        }
      }
      forEachReverse(track.cues, cleanupCue);
      forEachReverse(track.activeCues, cleanupCue);
      track.expired = true;
      track.textTrack1 = true;
      track.textTrack2 = true;
      track.isTTML = true;
      track.isEmbedded = false;
      try {
        track.mode = "disabled" /* DISABLED */;
      } catch (error) {
      }
    }
    set textTrackMode(mode) {
      if (this.currentTextTrack) {
        this.setTrackMode(mode);
      } else {
        this.logger.log("warn" /* WARN */, "No text track detected");
      }
    }
    set textTrack(newTrack) {
      if (!this.isValidTrack(newTrack) || newTrack === this.currentTextTrack) {
        return;
      }
      if (this.currentTextTrack && this.currentTextTrack.mode !== "disabled" /* DISABLED */) {
        this.currentTextTrack.mode = "disabled" /* DISABLED */;
      }
      this.currentTextTrack = newTrack;
      this.setTrackMode(this.currentTextTrackMode).then(() => {
        this.logger.log("info" /* INFO */, `${newTrack.language} is being set as the current text track`);
        this.emit("textTrackChange" /* TEXT_TRACK_CHANGE */, newTrack);
      });
    }
    get textTrack() {
      return this.currentTextTrack;
    }
    get textTracks() {
      return Array.from(this.pTextTracks).filter((t) => this.isValidTrack(t));
    }
    set forcedLanguage(value) {
      this.pForcedLanguage = value;
      this.updateForcedNarrative();
    }
    get forcedLanguage() {
      return this.pForcedLanguage;
    }
    setTrackMode(mode) {
      return new Promise((resolve, reject) => {
        const modeChanged = mode !== this.currentTextTrackMode;
        const applyMode = () => {
          this.currentTextTrack.mode = mode;
          this.updateForcedNarrative();
          if (modeChanged) {
            setTimeout(() => this.emit("textTrackModeChange" /* TEXT_TRACK_DISPLAY_MODE_CHANGE */, { mode }), 0);
          }
          let msg = "disabled" /* DISABLED */;
          mode === "hidden" /* HIDDEN */ && (msg = "enabled for event driven external custom rendering");
          mode === "showing" /* SHOWING */ && (msg = "enabled for native rendering by the user agent");
          this.logger.log("info" /* INFO */, `The ${this.currentTextTrack.kind} track for language code ${this.currentTextTrack.language} is being ${msg} `);
          resolve();
        };
        this.currentTextTrackMode = mode;
        if (mode === "showing" /* SHOWING */ && this.currentTextTrack.mode === "disabled" /* DISABLED */) {
          this.currentTextTrack.mode = "hidden" /* HIDDEN */;
          setTimeout(applyMode, 10);
        } else {
          applyMode();
        }
      });
    }
    updateForcedNarrative() {
      const isForced = (track) => track.kind === "forced" /* FORCED */;
      const tracks = Array.from(this.pTextTracks).filter(isForced);
      tracks.forEach((track) => track.mode = "disabled" /* DISABLED */);
      const disabled = this.currentTextTrackMode === "disabled" /* DISABLED */;
      if (!disabled) {
        return;
      }
      const forced = tracks.find((track) => track.language === this.pForcedLanguage);
      if (!forced) {
        return;
      }
      forced.addEventListener("cuechange" /* CUE_CHANGE */, this.onCueChange);
      forced.mode = this.config.textTrackSettings.enabledMode;
    }
    addTrack(track) {
      if (this.addedTracks.includes(track)) {
        return;
      }
      this.addedTracks.push(track);
      if (!this.isValidTrack(track)) {
        return;
      }
      track.addEventListener("cuechange" /* CUE_CHANGE */, this.onCueChange);
      this.logger.log("info" /* INFO */, `A ${track.kind} text track was added for ${track.language}`);
      this.emit("textTrackAdded" /* TEXT_TRACK_ADDED */, track);
    }
    addEvents() {
      this.pTextTracks.addEventListener("addtrack" /* ADD_TRACK */, this.onTextTrackAdded);
      this.pTextTracks.addEventListener("change" /* CHANGE */, this.onTextTrackChange);
      this.video.addEventListener("addtrack" /* ADD_TRACK */, this.onVideoTextTrackAdded);
      this.video.addEventListener("seeked" /* SEEKED */, this.onVideoSeeked);
    }
    removeEvents() {
      this.pTextTracks.removeEventListener("addtrack" /* ADD_TRACK */, this.onTextTrackAdded);
      this.pTextTracks.removeEventListener("change" /* CHANGE */, this.onTextTrackChange);
      this.video.removeEventListener("addtrack" /* ADD_TRACK */, this.onVideoTextTrackAdded);
      this.video.removeEventListener("seeked" /* SEEKED */, this.onVideoSeeked);
      forEach(this.pTextTracks, (t) => t.removeEventListener("cuechange" /* CUE_CHANGE */, this.onCueChange));
    }
    // Util
    isDuplicateTrack(t) {
      if (this.existingTrack.includes(t)) {
        return false;
      }
      const result = this.existingTrack.some((track) => t.language === track.language && t.label === track.label && t.kind === track.kind);
      if (!result) {
        this.existingTrack.push(t);
      }
      return result;
    }
    isTextTrack(type) {
      return type === "captions" /* CAPTIONS */ || type === "subtitles" /* SUBTITLES */;
    }
    isExpired(track) {
      return track.expired;
    }
    isValidTrack(track) {
      if (!track) {
        return false;
      }
      if (!this.isTextTrack(track.kind)) {
        return false;
      }
      if (this.ignoreBlankTracks && !track.label && !track.language) {
        return false;
      }
      if (this.isExpired(track)) {
        return false;
      }
      return true;
    }
  };

  // src/adapter/playback/surface/WaitingSurface.ts
  var WaitingSurface = class {
    constructor(context, onWaitingChange) {
      this.waiting = false;
      this.time = NaN;
      this.next = null;
      this.video = context.video;
      this.onWaitingChange = onWaitingChange;
      this.onWaiting = this.onWaiting.bind(this);
      this.onSeeking = this.onSeeking.bind(this);
      this.onUpdateTime = this.onUpdateTime.bind(this);
      this.onTimeUpdate = this.onTimeUpdate.bind(this);
      this.video.addEventListener("waiting" /* WAITING */, this.onWaiting);
      this.video.addEventListener("seeking" /* SEEKING */, this.onSeeking);
      this.video.addEventListener("error" /* ERROR */, this.onError);
    }
    clearUpdate() {
      const { video } = this;
      video.removeEventListener("timeupdate" /* TIME_UPDATE */, this.onUpdateTime);
    }
    destroy() {
      const { video } = this;
      this.onWaitingChange = null;
      video.removeEventListener("waiting" /* WAITING */, this.onWaiting);
      video.removeEventListener("seeking" /* SEEKING */, this.onSeeking);
      video.removeEventListener("timeupdate" /* TIME_UPDATE */, this.onTimeUpdate);
      video.removeEventListener("error" /* ERROR */, this.onError);
      this.clearUpdate();
    }
    setWaiting(value) {
      var _a;
      this.waiting = value;
      (_a = this.onWaitingChange) == null ? void 0 : _a.call(this, value);
      if (value) {
        this.video.addEventListener("timeupdate" /* TIME_UPDATE */, this.onUpdateTime);
      }
    }
    onWaiting() {
      if (!this.waiting && !this.video.seeking) {
        this.setWaiting(true);
      }
    }
    onSeeking() {
      this.setWaiting(true);
    }
    onUpdateTime() {
      this.clearUpdate();
      if (this.video.paused) {
        this.setWaiting(false);
        return;
      }
      this.time = this.video.currentTime;
      this.video.addEventListener("timeupdate" /* TIME_UPDATE */, this.onTimeUpdate);
    }
    onTimeUpdate() {
      if (this.time < this.video.currentTime) {
        this.setWaiting(false);
        this.time = NaN;
        this.video.removeEventListener("timeupdate" /* TIME_UPDATE */, this.onTimeUpdate);
      }
    }
    onError() {
      if (!this.waiting) {
        return;
      }
      this.setWaiting(false);
    }
  };

  // src/adapter/playback/PlaybackAdapterBase.ts
  var PlaybackAdapterBase = class {
    constructor(context, options = {}, useTextSurface = true) {
      this.metadataLoaded = false;
      this.suppressErrors = false;
      this.segmentDuration = 6;
      this.pauseTime = NaN;
      this.eventsEnabled = false;
      this.startedPlaying = false;
      this.liveStreamInfo = {
        isPlayingLive: false,
        liveEdgeOffset: NaN,
        dvrWindowSize: NaN,
        relativeTime: NaN,
        relativeDuration: NaN,
        absoluteStart: NaN,
        absoluteTime: NaN,
        absoluteDuration: NaN
      };
      this.lastKnownTimes = {
        absolute: NaN,
        relative: NaN,
        end: NaN
      };
      this.audioTrack = null;
      this.audioTracks = [];
      this.quality = null;
      this.qualities = null;
      this.textTrack = null;
      this.textTracks = [];
      this.minBitrate = 0;
      this.maxBitrate = Infinity;
      this.maxHeight = Infinity;
      this.onVideoEvent = (event) => {
        if (!this.eventsEnabled) {
          return;
        }
        const { delegate } = this;
        if (event.type === "loadedmetadata" /* LOADED_METADATA */) {
          this.metadataLoaded = true;
        }
        if (!this.metadataLoaded && event.type !== "durationchange" /* DURATION_CHANGE */) {
          return;
        }
        switch (event.type) {
          case "timeupdate" /* TIME_UPDATE */:
            delegate.timeUpdate();
            break;
          case "playing" /* PLAYING */:
            this.startedPlaying = true;
            delegate.playing();
            break;
          case "pause" /* PAUSE */:
            if (this.metadataLoaded) {
              delegate.paused();
            }
            break;
          case "seeking" /* SEEKING */:
            delegate.seeking();
            break;
          case "seeked" /* SEEKED */:
            delegate.seeked();
            break;
          case "ended" /* ENDED */:
            delegate.ended();
            break;
          case "durationchange" /* DURATION_CHANGE */:
            delegate.durationChange();
            break;
          case "volumechange" /* VOLUME_CHANGE */:
            delegate.volumeChange(this.video.volume, this.video.muted);
            break;
          case "error" /* ERROR */:
            if (!this.suppressErrors) {
              this.error(this.createVideoElementError());
            }
            break;
        }
      };
      this.onTextEvent = (type, data) => {
        if (!this.eventsEnabled) {
          return;
        }
        const { delegate } = this;
        switch (type) {
          case "textCuepoint" /* TEXT_CUEPOINT */:
            delegate.textCuepoints(data.activeCues, data.forced);
            break;
          case "textTrackModeChange" /* TEXT_TRACK_DISPLAY_MODE_CHANGE */:
            delegate.textTrackDisplayModeChange(data.mode);
            break;
          case "textTrackAdded" /* TEXT_TRACK_ADDED */:
            this.textTracks.push({
              id: this.textTracks.length.toString(),
              kind: data.kind,
              language: data.language,
              label: data.label || data.language
            });
            delegate.textTracksChange(this.textTracks);
            break;
          case "textTrackAvailable" /* TEXT_TRACK_AVAILABLE */:
            delegate.textTracksChange(this.textTracks);
            break;
          case "textTrackChange" /* TEXT_TRACK_CHANGE */:
            const track = this.textTracks.find((track2) => data.language === track2.language && data.kind === track2.kind && (data.label === track2.label || data.language === track2.label));
            this.textTrack = track;
            delegate.textTrackChange(track);
            break;
        }
      };
      var _a;
      this.context = context;
      this.options = options;
      this.video = context.video;
      this.delegate = this.context.getDelegate();
      this.logger = context.logger;
      this.metadataSurface = this.createMetadataSurface();
      this.waitingSurface = this.createWaitingSurface();
      const abr = (_a = this.context.resource.playback) == null ? void 0 : _a.abr;
      if (abr) {
        if (abr.maxBitrate) {
          this.maxBitrate = abr.maxBitrate;
        }
        if (abr.minBitrate) {
          this.minBitrate = abr.minBitrate;
        }
        if (abr.maxHeight) {
          this.maxHeight = abr.maxHeight;
        }
      }
      if (useTextSurface) {
        this.textTrackSurface = this.createTextTrackSurface();
      }
      values(VideoSurfaceEvents).forEach((type) => this.video.addEventListener(type, this.onVideoEvent));
      this.onCueChange = this.onCueChange.bind(this);
    }
    static canPlay(context, mimeTypes) {
      const { avia, resource } = context;
      const systemInfo = avia.getSystemInfo();
      const mimeType = getResourceMimeType(resource);
      const validMimeType = mimeTypes.includes(mimeType);
      return systemInfo.hasMediaSource && validMimeType;
    }
    destroy() {
      var _a, _b, _c;
      values(VideoSurfaceEvents).forEach((type) => this.video.removeEventListener(type, this.onVideoEvent));
      this.listenToTextTracks(false, true);
      (_a = this.metadataSurface) == null ? void 0 : _a.destroy();
      this.metadataSurface = null;
      (_b = this.textTrackSurface) == null ? void 0 : _b.destroy();
      this.textTrackSurface = null;
      (_c = this.waitingSurface) == null ? void 0 : _c.destroy();
      this.waitingSurface = null;
      this.context = null;
      this.options = null;
      this.delegate = null;
      this.logger = null;
      this.video = null;
      return Promise.resolve();
    }
    getIsLiveStream() {
      return this.video.duration === Infinity;
    }
    setAutoQualitySwitching(auto) {
      throw new Error("setAutoQualitySwitching Method not implemented.");
    }
    setQuality(quality) {
      throw new Error("setQuality Method not implemented.");
    }
    setMinBitrate(value) {
      this.minBitrate = value;
    }
    setMaxBitrate(value) {
      this.maxBitrate = value;
    }
    setTextTrack(value) {
      if (!this.textTrackSurface) {
        return;
      }
      const tracks = Array.from(this.video.textTracks);
      const track = tracks.find((track2) => value.language === track2.language && value.kind === track2.kind && value.label === track2.label);
      this.textTrackSurface.textTrack = track;
    }
    setTextTrackMode(mode) {
      if (!this.textTrackSurface) {
        return;
      }
      this.textTrackSurface.textTrackMode = mode;
    }
    setAudioTrack(track) {
      throw new Error("setAudioTrack Method not implemented.");
    }
    getId() {
      throw new Error("getId Method not implemented.");
    }
    getCurrentTime() {
      return this.video.currentTime;
    }
    getDuration() {
      return this.video.duration;
    }
    getBuffered(asStreamTime = false) {
      const { buffered } = this.video;
      const result = [];
      const offset = asStreamTime ? 0 : this.getSeekable().start;
      for (let i = 0, len = buffered.length; i < len; i++) {
        result.push({
          startTime: buffered.start(i) - offset,
          endTime: buffered.end(i) - offset
        });
      }
      return result;
    }
    getLiveStreamInfo() {
      const details = this.liveStreamInfo;
      const { start, end } = this.getSeekable();
      const time = this.video.currentTime;
      const duration = end - start;
      const offset = this.getLiveEdgeOffset();
      const relativeTime = Math.max(time - start, 0);
      details.relativeTime = relativeTime;
      details.relativeDuration = duration;
      details.absoluteDuration = Date.now();
      details.dvrWindowSize = Math.floor(duration);
      details.liveEdgeOffset = offset;
      details.isPlayingLive = Math.ceil(time) >= this.calculateLiveBoundary(end);
      if (end !== this.lastKnownTimes.end) {
        this.lastKnownTimes.end = end;
        details.absoluteStart = details.absoluteDuration - duration * 1e3;
        this.lastKnownTimes.absolute = Math.round(details.absoluteStart + details.relativeTime * 1e3);
        this.lastKnownTimes.relative = time;
      }
      const delta = Math.round((time - this.lastKnownTimes.relative) * 1e3);
      details.absoluteTime = this.lastKnownTimes.absolute + delta;
      return details;
    }
    getThumbnails(time) {
      return Promise.resolve([]);
    }
    load() {
      this.enableSurfaceEvents(true);
      this.suppressErrors = true;
      return Promise.resolve(getResourceMetadata(this.context.resource));
    }
    play() {
      return Promise.resolve().then(() => {
        if (!isNaN(this.pauseTime)) {
          this.pauseTime = NaN;
          if (this.pauseTime < this.liveStreamInfo.absoluteStart) {
            this.logger.log("info" /* INFO */, `Playhead outside of DVR window bounds. Moving to start of DVR window.`);
            return this.seek(0);
          }
        }
        if (this.getIsLiveStream()) {
          return this.seek(this.liveStreamInfo.relativeTime);
        }
      }).then(() => this.video.play());
    }
    pause() {
      var _a;
      if (this.getIsLiveStream() && ((_a = this.context.resource.overrides) == null ? void 0 : _a.clearOutOfBoundsDvrBuffer) === true) {
        this.pauseTime = this.liveStreamInfo.absoluteTime;
      }
      this.video.pause();
    }
    suspend() {
    }
    resume() {
    }
    seek(position) {
      const { start, end } = this.getSeekable();
      const duration = end - start;
      if (this.getIsLiveStream()) {
        const { startTime, endTime } = this.getNoSeekRange(end);
        if (inRange(position, startTime, endTime)) {
          const currentTime = this.liveStreamInfo.relativeTime;
          position = position < currentTime ? startTime : endTime;
        }
        position = clampValue(position, this.getLiveEdgeOffset(), endTime);
      }
      const time = mapToRange(position, 0, duration, start, end);
      if (isValidPlayheadTime(time)) {
        this.video.currentTime = time;
        return waitForEvent(this.video, "seeked" /* SEEKED */);
      }
      return Promise.resolve();
    }
    resize() {
    }
    clearText() {
      var _a;
      (_a = this.textTrackSurface) == null ? void 0 : _a.clearCue();
    }
    getMetrics() {
      const { video } = this;
      const result = {
        bandwidth: NaN,
        framerate: NaN,
        droppedVideoFrames: Number.NaN,
        totalVideoFrames: Number.NaN
      };
      if ("getVideoPlaybackQuality" in video) {
        Object.assign(result, video.getVideoPlaybackQuality());
      } else if ("webkitDroppedFrameCount" in video && "webkitDecodedFrameCount" in video) {
        result.droppedVideoFrames = video.webkitDroppedFrameCount;
        result.totalVideoFrames = video.webkitDroppedFrameCount + video.webkitDecodedFrameCount;
      }
      const frames = video.webkitDecodedFrameCount || video.mozPresentedFrames;
      if (frames) {
        result.framerate = frames / video.currentTime;
      }
      return result;
    }
    getLiveEdgeOffset() {
      const segmentDuration = this.getSegmentDuration();
      const count = this.context.resource.playback.liveEdgeSyncFragmentCount;
      return Math.max(segmentDuration, segmentDuration * count);
    }
    getRefreshInterval() {
      return this.getSegmentDuration() * 2;
    }
    calculateLiveBoundary(duration) {
      return duration - this.getLiveEdgeOffset() - this.getRefreshInterval();
    }
    getNoSeekRange(duration) {
      const boundary = this.calculateLiveBoundary(duration);
      const padding = this.getRefreshInterval();
      return {
        startTime: boundary - padding,
        endTime: boundary + padding
      };
    }
    createMetadataSurface() {
      return new MetadataSurface(this.context, this.delegate.metadataCuepoint);
    }
    createTextTrackSurface() {
      return new TextTrackSurface(this.context, this.onTextEvent);
    }
    createWaitingSurface() {
      return new WaitingSurface(this.context, this.delegate.waitingChange);
    }
    enableSurfaceEvents(enabled) {
      this.eventsEnabled = true;
    }
    addEvents(adapter, map) {
      const action = isFunction(adapter.on) ? "on" : "addEventListener";
      entries(map).forEach((entry) => adapter[action](entry[0], entry[1]));
    }
    removeEvents(adapter, map) {
      const action = isFunction(adapter.off) ? "off" : "removeEventListener";
      entries(map).forEach((entry) => {
        var _a, _b;
        (_b = (_a = entry[1]).cancel) == null ? void 0 : _b.call(_a);
        adapter[action](entry[0], entry[1]);
      });
    }
    createVideoElementError() {
      const error = this.video.error;
      let message = Object.keys(MediaError)[error.code - 1] || AppResources.messages.UNSPECIFIED_ERROR;
      let code = "3400" /* UNSPECIFIED_VIDEO_PLAYBACK_ERROR */;
      switch (error.code) {
        case MediaError.MEDIA_ERR_ABORTED:
          message = error.toString();
          code = "3100" /* MEDIA_ABORTED */;
          break;
        case MediaError.MEDIA_ERR_NETWORK:
          code = "3001" /* HTML5_NETWORK_ERROR */;
          break;
        case MediaError.MEDIA_ERR_DECODE:
          code = "3200" /* HTML5_MEDIA_ERROR */;
          break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
          code = "3101" /* HTML5_SRC_NOT_SUPPORTED */;
          break;
        default:
          code = "3400" /* UNSPECIFIED_VIDEO_PLAYBACK_ERROR */;
      }
      return { code, message, data: error, fatal: true };
    }
    getSegmentDuration() {
      return this.segmentDuration;
    }
    getSeekable() {
      const result = { start: 0, end: 0 };
      const range = this.video.seekable;
      const index = range.length - 1;
      if (index >= 0) {
        result.start = range.start(index);
        result.end = range.end(index);
      }
      return result;
    }
    getErrorMessage(msg, isFatal, retry = "n/a") {
      return `${msg} fatal: ${isFatal} retry: ${retry}`;
    }
    createError(code, message, cause, fatal = true) {
      return new PlayerError(code, message, cause, fatal);
    }
    throwError(code, message, cause, fatal = true) {
      this.error(this.createError(code, message, cause, fatal));
    }
    error(error) {
      this.delegate.error(error);
    }
    createSidecarTextTrack() {
      var _a;
      const { resource, video } = this.context;
      if (!((_a = resource.location) == null ? void 0 : _a.textTrackUrl)) {
        return;
      }
      createSidecarTextTrack(resource, video);
    }
    updateQualities(qualities = this.qualities) {
      if (!qualities) {
        return;
      }
      qualities.sort((a, b) => a.bitrate - b.bitrate);
      const cap = this.context.resource.playback.abr.capQualityToScreenSize;
      const bounds = cap && this.video.getBoundingClientRect();
      qualities.forEach((quality) => {
        quality.enabled = validateQuality(quality, this.minBitrate, this.maxBitrate, this.maxHeight, bounds);
      });
      if (!qualities.some((quality) => quality.enabled)) {
        this.logger.warn("Invalid qualities array. None of the values meet the current size/bitrate constraints.");
      }
      this.delegate.qualitiesChange(qualities);
    }
    listenToTextTracks(flag, clearCues = false) {
      const verb = flag ? "addEventListener" : "removeEventListener";
      Array.from(this.context.video.textTracks).forEach((textTrack) => {
        if (!isTextTrack(textTrack.kind)) {
          return;
        }
        textTrack[verb]("cuechange" /* CUE_CHANGE */, this.onCueChange);
        if (clearCues) {
          clearAllCues(textTrack);
        }
      });
    }
    onCueChange(event, forced) {
      const track = event.target;
      const activeCues = dedupeCues(track, this.video.currentTime);
      const forcedTrack = event.target.forced === true;
      forced != null ? forced : forced = track.kind === "forced" /* FORCED */ || event.forced || forcedTrack;
      this.delegate.textCuepoints(activeCues, forced);
    }
  };

  // src/core/Metric.ts
  var Metric = class {
    constructor(key, value, type) {
      this.key = key;
      this.value = value;
      this.type = type;
      this.timeStamp = Date.now();
    }
  };

  // src/core/BuildInfo.ts
  var buildInfo = Object.freeze({
    env: "__ENV__",
    playerVersion: "2.20.0",
    playerName: "@cbsinteractive/avia-js",
    buildTime: "2023-09-01T13:30:25.477Z"
  });

  // src/enum/AccessibilityAction.ts
  var AccessibilityAction = /* @__PURE__ */ ((AccessibilityAction2) => {
    AccessibilityAction2["ENTER_FULLSCREEN"] = "enterFullScreen";
    AccessibilityAction2["INCREASE_VOLUME"] = "increaseVolume";
    AccessibilityAction2["DECREASE_VOLUME"] = "decreaseVolume";
    AccessibilityAction2["SEEK_BACK"] = "seekBack";
    AccessibilityAction2["SEEK_FORWARD"] = "seekForward";
    AccessibilityAction2["TOGGLE_PLAY"] = "togglePlay";
    AccessibilityAction2["TOGGLE_TT"] = "toggleTextTrack";
    AccessibilityAction2["TOGGLE_MUTE"] = "toggleMute";
    AccessibilityAction2["PLAYLIST_NEXT"] = "playListNext";
    AccessibilityAction2["PLAYLIST_PREV"] = "playListPrev";
    AccessibilityAction2["STOP"] = "stop";
    return AccessibilityAction2;
  })(AccessibilityAction || {});

  // src/enum/ActiveState.ts
  var ActiveState = /* @__PURE__ */ ((ActiveState2) => {
    ActiveState2["ACTIVE"] = "active";
    ActiveState2["INACTIVE"] = "inactive";
    ActiveState2["IDLE"] = "idle";
    return ActiveState2;
  })(ActiveState || {});

  // src/enum/AdBreakType.ts
  var AdBreakType = /* @__PURE__ */ ((AdBreakType2) => {
    AdBreakType2["PRE"] = "PRE";
    AdBreakType2["MID"] = "MID";
    AdBreakType2["POST"] = "POST";
    return AdBreakType2;
  })(AdBreakType || {});

  // src/enum/AdTechnology.ts
  var AdTechnology = /* @__PURE__ */ ((AdTechnology2) => {
    AdTechnology2["SSAI"] = "ssai";
    AdTechnology2["CSAI"] = "csai";
    return AdTechnology2;
  })(AdTechnology || {});

  // src/enum/AdapterRole.ts
  var AdapterRole = /* @__PURE__ */ ((AdapterRole2) => {
    AdapterRole2["AD"] = "ad";
    AdapterRole2["PLAYBACK"] = "playback";
    return AdapterRole2;
  })(AdapterRole || {});

  // src/enum/ApiMetric.ts
  var ApiMetric = /* @__PURE__ */ ((ApiMetric2) => {
    ApiMetric2["PLAY"] = "play";
    ApiMetric2["PAUSE"] = "pause";
    ApiMetric2["SEEK"] = "seek";
    ApiMetric2["GO_LIVE"] = "go_live";
    return ApiMetric2;
  })(ApiMetric || {});

  // src/enum/AudioTrackType.ts
  var AudioTrackType = /* @__PURE__ */ ((AudioTrackType2) => {
    AudioTrackType2["MAIN"] = "main";
    AudioTrackType2["DESCRIPTION"] = "description";
    return AudioTrackType2;
  })(AudioTrackType || {});

  // src/enum/Autoplay.ts
  var Autoplay = /* @__PURE__ */ ((Autoplay2) => {
    Autoplay2["NONE"] = "none";
    Autoplay2["ATTEMPT_MUTED"] = "attemptMuted";
    Autoplay2["ATTEMPT_UNMUTED"] = "attemptUnmuted";
    Autoplay2["ATTEMPT_UNMUTED_THEN_MUTED"] = "attemptUnmutedThenMuted";
    return Autoplay2;
  })(Autoplay || {});

  // src/enum/DrmKeySystemAvailability.ts
  var DrmKeySystemAvailability = /* @__PURE__ */ ((DrmKeySystemAvailability2) => {
    DrmKeySystemAvailability2["UNKNOWN"] = "unknown";
    DrmKeySystemAvailability2["DETECTED"] = "detected";
    DrmKeySystemAvailability2["INFERRED"] = "inferred";
    return DrmKeySystemAvailability2;
  })(DrmKeySystemAvailability || {});

  // src/enum/DrmRobustness.ts
  var DrmRobustness = /* @__PURE__ */ ((DrmRobustness2) => {
    DrmRobustness2["SW_SECURE_CRYPTO"] = "SW_SECURE_CRYPTO";
    DrmRobustness2["SW_SECURE_DECODE"] = "SW_SECURE_DECODE";
    DrmRobustness2["HW_SECURE_CRYPTO"] = "HW_SECURE_CRYPTO";
    DrmRobustness2["HW_SECURE_DECODE"] = "HW_SECURE_DECODE";
    DrmRobustness2["HW_SECURE_ALL"] = "HW_SECURE_ALL";
    DrmRobustness2["UNKNOWN"] = "unknown";
    return DrmRobustness2;
  })(DrmRobustness || {});

  // src/enum/Header.ts
  var Header = /* @__PURE__ */ ((Header2) => {
    Header2["MULTI_CDN"] = "x-cdn";
    return Header2;
  })(Header || {});

  // src/events/PlayerEvent.ts
  var PlayerEvent = /* @__PURE__ */ ((PlayerEvent2) => {
    PlayerEvent2["HOTKEY_ACTION"] = "hotkeyaction";
    PlayerEvent2["READY"] = "ready";
    PlayerEvent2["AD_SKIPPABLE_STATE_CHANGE"] = "adskippablestatechange";
    PlayerEvent2["AD_CUEPOINTS_AVAILABLE"] = "adcuepointsavailable";
    PlayerEvent2["AD_BREAK_START"] = "adbreakstart";
    PlayerEvent2["AD_BREAK_METADATA"] = "adbreakmetadata";
    PlayerEvent2["AD_BREAK_COMPLETE"] = "adbreakcomplete";
    PlayerEvent2["AD_START"] = "adstart";
    PlayerEvent2["AD_COMPLETE"] = "adcomplete";
    PlayerEvent2["AD_FIRST_QUARTILE"] = "adfirstquartile";
    PlayerEvent2["AD_MIDPOINT"] = "admidpoint";
    PlayerEvent2["AD_THIRD_QUARTILE"] = "adthirdquartile";
    PlayerEvent2["AD_SEGMENT_START"] = "adsegmentstart";
    PlayerEvent2["AD_SEGMENT_END"] = "adsegmentend";
    PlayerEvent2["AD_SEGMENT_REENTERED"] = "adsegmentreentered";
    PlayerEvent2["AD_SKIPPED"] = "adskipped";
    PlayerEvent2["AD_PROGRESS"] = "adprogress";
    PlayerEvent2["AD_PAUSED"] = "adpaused";
    PlayerEvent2["AD_PLAYING"] = "adplaying";
    PlayerEvent2["AD_STALLED"] = "adstalled";
    PlayerEvent2["AD_BREAK_DISCARDED"] = "adbreakdiscarded";
    PlayerEvent2["AD_CLICK"] = "adclick";
    PlayerEvent2["AUDIO_TRACK_INFO_CHANGE"] = "audiotrackinfochange";
    PlayerEvent2["AUDIO_TRACK_CHANGE"] = "audiotrackchange";
    PlayerEvent2["AUDIO_TRACKS_CHANGE"] = "audiotrackschange";
    PlayerEvent2["QUALITY_CHANGE"] = "qualitychange";
    PlayerEvent2["QUALITIES_CHANGE"] = "qualitieschange";
    PlayerEvent2["QUALITY_INFO_CHANGE"] = "qualityinfochange";
    PlayerEvent2["CDN_CHANGE"] = "cdnchange";
    PlayerEvent2["CLOCK"] = "aviaclock";
    PlayerEvent2["CONTENT_START"] = "contentstart";
    PlayerEvent2["CONTENT_DURATION_AVAILABLE"] = "contentdurationavailable";
    PlayerEvent2["CONTENT_SEGMENT_START"] = "contentsegmentstart";
    PlayerEvent2["CONTENT_PLAYING"] = "contentplaying";
    PlayerEvent2["CONTENT_PROGRESS"] = "contentprogress";
    PlayerEvent2["CONTENT_PAUSED"] = "contentpaused";
    PlayerEvent2["CONTENT_SEGMENT_END"] = "contentsegmentend";
    PlayerEvent2["CONTENT_COMPLETE"] = "contentcomplete";
    PlayerEvent2["CONTENT_IS_PLAYING_LIVE"] = "contentisplayinglive";
    PlayerEvent2["STREAM_TYPE_CHANGE"] = "streamtypechange";
    PlayerEvent2["STREAM_METADATA"] = "streammetadata";
    PlayerEvent2["STREAM_ID_AVAILABLE"] = "streamidavailable";
    PlayerEvent2["DRM_KEY_SYSTEM_CREATED"] = "drmkeysystemcreated";
    PlayerEvent2["ERROR"] = "error";
    PlayerEvent2["PLAYBACK_STARTED"] = "playbackstarted";
    PlayerEvent2["PLAYBACK_SUSPENDED"] = "playbacksuspended";
    PlayerEvent2["PLAYBACK_RESUMED"] = "playbackresumed";
    PlayerEvent2["RESOURCE_START"] = "resourcestart";
    PlayerEvent2["RESOURCE_END"] = "resourceend";
    PlayerEvent2["RESOURCE_BUFFERING"] = "resourcebuffering";
    PlayerEvent2["WAITING_CHANGE"] = "waitingchange";
    PlayerEvent2["SEEK_COMPLETE"] = "seekcomplete";
    PlayerEvent2["SEEK_START"] = "seekstart";
    PlayerEvent2["SEEK_REDIRECT_START"] = "seekredirectstart";
    PlayerEvent2["SEEK_REDIRECT_COMPLETE"] = "seekredirectcomplete";
    PlayerEvent2["METADATA_CUEPOINT"] = "metadatacuepoint";
    PlayerEvent2["TEXT_CUEPOINT"] = "textcuepoint";
    PlayerEvent2["TEXT_TRACK_CHANGE"] = "texttrackchange";
    PlayerEvent2["TEXT_TRACKS_CHANGE"] = "texttrackschange";
    PlayerEvent2["TEXT_TRACK_INFO_CHANGE"] = "texttrackinfochange";
    PlayerEvent2["TEXT_TRACK_ENABLED_CHANGE"] = "texttrackenabledchange";
    PlayerEvent2["TEXT_TRACK_AVAILABLE"] = "texttrackavailable";
    PlayerEvent2["THUMBNAIL_TRACK_AVAILABLE"] = "thumbnailtrackavailable";
    PlayerEvent2["LIVE_PRESENTATION_STOPPED"] = "livepresentationstopped";
    PlayerEvent2["PRESENTATION_SIZE_CHANGE"] = "presentationsizechange";
    PlayerEvent2["FULLSCREEN_CHANGE"] = "fullscreenchange";
    PlayerEvent2["LOG_EVENT"] = "logevent";
    PlayerEvent2["PLUGIN_EVENT"] = "pluginevent";
    PlayerEvent2["LANGUAGE_CHANGE"] = "languagechange";
    PlayerEvent2["AUTOPLAY_BLOCKED"] = "autoplayblocked";
    PlayerEvent2["VOLUME_CHANGE"] = "volumechange";
    PlayerEvent2["MUTE_CHANGE"] = "mutechange";
    PlayerEvent2["ACTIVE_STATE_CHANGE"] = "activestatechange";
    PlayerEvent2["PLAYBACK_STATE_CHANGE"] = "playbackstatechange";
    PlayerEvent2["METRIC"] = "metric";
    PlayerEvent2["VIDEO_ELEMENT_ADDED"] = "videoelementadded";
    PlayerEvent2["VIDEO_ELEMENT_REMOVED"] = "videoelementremoved";
    return PlayerEvent2;
  })(PlayerEvent || {});

  // src/deprecated/Deprecated.ts
  var DeprecatedEvents = [
    "audiotrackinfochange" /* AUDIO_TRACK_INFO_CHANGE */,
    "texttrackinfochange" /* TEXT_TRACK_INFO_CHANGE */,
    "qualityinfochange" /* QUALITY_INFO_CHANGE */
  ];
  var Deprecated = class {
    /**
    * @deprecated deprecation warning
    */
    static warn(msg) {
      Logger.deprecated(msg);
    }
    /**
     * @deprecated Some event names have been deprecated.
     */
    static checkEventName(name) {
      if (DeprecatedEvents.includes(name)) {
        Deprecated.warn(`The ${name} event has been deprecated. This check will be removed July 1st, 2023`);
      }
    }
    /**
     * @deprecated The HookType enum is deprecated in favor of PlayerHookType
     */
    static hookType() {
      Deprecated.warn("The HookType enum is deprecated in favor of PlayerHookType and will be removed after July 1st, 2023");
    }
    /**
     * @deprecated Use player.qualities instead.
     */
    static qualityInfo() {
      Deprecated.warn("player.qualityInfo method is deprecated. Please use player.qualities instead. Access to this property will be completely removed July 1st, 2023");
    }
    /**
     * @deprecated Use player.textTracks instead.
     */
    static textTrackInfo() {
      Deprecated.warn("player.textTrackInfo method is deprecated. Please use player.textTracks instead. Access to this property will be completely removed July 1st, 2023");
    }
    /**
     * @deprecated Use player.audioTracks instead.
     */
    static audioTrackInfo() {
      Deprecated.warn("player.audioTrackInfo method is deprecated. Please use player.audioTracks instead. Access to this property will be completely removed July 1st, 2023");
    }
    /**
     * @deprecated Use player.selectAudioLanguage
     */
    static language() {
      Deprecated.warn("player.language setter is deprecated. Please use player.selectAudioLanguage, player.selectTextLanguage, or player.selectLocalizationLanguage instead. Access to this property will be completely removed July 1st, 2023");
    }
    /**
     * @deprecated Use player.getThumbnails instead.
     */
    static getThumbnail() {
      Deprecated.warn("getThumbnail is deprecated. Please use player.getThumbnails instead. Access to this property will be completely removed July 1st, 2023");
    }
    /**
    * @deprecated deprecation warning
    */
    static info() {
      Deprecated.warn("The info property of the metadata cuepoint event is deprecated. Please use the id and text properties instead. Access to the info property will be removed July 1st, 2024.");
    }
  };

  // src/enum/HookType.ts
  var HookType = class {
    static get EVENT() {
      Deprecated.hookType();
      return "event";
    }
    static get AD_BREAK() {
      Deprecated.hookType();
      return "adbreak";
    }
    static get AD() {
      Deprecated.hookType();
      return "ad";
    }
    static get ATTACH_RESOURCE() {
      Deprecated.hookType();
      return "attachresource";
    }
    static get REQUEST() {
      Deprecated.hookType();
      return "request";
    }
    static get RESPONSE() {
      Deprecated.hookType();
      return "response";
    }
  };

  // src/enum/Html5.ts
  var HTML5 = "html5";

  // src/enum/KeyboardScope.ts
  var KeyboardScope = /* @__PURE__ */ ((KeyboardScope2) => {
    KeyboardScope2["NONE"] = "none";
    KeyboardScope2["DOCUMENT"] = "document";
    KeyboardScope2["PLAYER"] = "player";
    return KeyboardScope2;
  })(KeyboardScope || {});

  // src/enum/LocalizationId.ts
  var LocalizationId = /* @__PURE__ */ ((LocalizationId2) => {
    LocalizationId2["MEDIA_PLAYER"] = "media-player";
    LocalizationId2["LEARN_MORE"] = "learn-more";
    return LocalizationId2;
  })(LocalizationId || {});

  // src/enum/LocalizedLanguage.ts
  var LocalizedLanguage = /* @__PURE__ */ ((LocalizedLanguage2) => {
    LocalizedLanguage2["EN"] = "English";
    LocalizedLanguage2["ES"] = "Espa\xF1ol";
    LocalizedLanguage2["FR"] = "Fran\xE7ais";
    LocalizedLanguage2["PT"] = "Portugu\xEAs";
    LocalizedLanguage2["DE"] = "Deutsche";
    LocalizedLanguage2["PL"] = "Polski";
    LocalizedLanguage2["JA"] = "\u65E5\u672C\u4EBA";
    LocalizedLanguage2["KO"] = "\uD55C\uAD6D\uC5B4";
    LocalizedLanguage2["ZH"] = "\u7B80\u4F53\u4E2D\u6587";
    LocalizedLanguage2["IT"] = "Italiano";
    LocalizedLanguage2["RU"] = "\u0420\u0443\u0441\u0441\u043A\u0438\u0439";
    return LocalizedLanguage2;
  })(LocalizedLanguage || {});

  // src/enum/MetricType.ts
  var MetricType = /* @__PURE__ */ ((MetricType2) => {
    MetricType2["API"] = "api";
    MetricType2["UI"] = "ui";
    MetricType2["MARK"] = "mark";
    MetricType2["MEASURE"] = "measure";
    return MetricType2;
  })(MetricType || {});

  // src/enum/PerformanceMode.ts
  var PerformanceMode = /* @__PURE__ */ ((PerformanceMode2) => {
    PerformanceMode2["AUTO"] = "auto";
    PerformanceMode2["DESKTOP"] = "desktop";
    PerformanceMode2["MOBILE"] = "mobile";
    PerformanceMode2["TV"] = "tv";
    PerformanceMode2["LOW"] = "low";
    return PerformanceMode2;
  })(PerformanceMode || {});

  // src/enum/PlaybackState.ts
  var PlaybackState = /* @__PURE__ */ ((PlaybackState2) => {
    PlaybackState2["IDLE"] = "idle";
    PlaybackState2["STOPPED"] = "stopped";
    PlaybackState2["PLAYING"] = "playing";
    PlaybackState2["PAUSED"] = "paused";
    PlaybackState2["WAITING"] = "waiting";
    return PlaybackState2;
  })(PlaybackState || {});

  // src/enum/PluginPriority.ts
  var PluginPriority = /* @__PURE__ */ ((PluginPriority2) => {
    PluginPriority2["LOW"] = "low";
    PluginPriority2["HIGH"] = "high";
    return PluginPriority2;
  })(PluginPriority || {});

  // src/enum/QualityLabel.ts
  var QualityLabel = /* @__PURE__ */ ((QualityLabel2) => {
    QualityLabel2[QualityLabel2["DEFINITION"] = 0] = "DEFINITION";
    QualityLabel2[QualityLabel2["HEIGHT"] = 1] = "HEIGHT";
    QualityLabel2[QualityLabel2["BITRATE"] = 2] = "BITRATE";
    QualityLabel2[QualityLabel2["CUSTOM"] = 3] = "CUSTOM";
    return QualityLabel2;
  })(QualityLabel || {});

  // src/enum/QualityMode.ts
  var QualityMode = /* @__PURE__ */ ((QualityMode2) => {
    QualityMode2["AUTO"] = "auto";
    QualityMode2["MANUAL"] = "manual";
    QualityMode2["UNAVAILABLE"] = "unavailable";
    return QualityMode2;
  })(QualityMode || {});

  // src/enum/RequestObjectType.ts
  var RequestObjectType = /* @__PURE__ */ ((RequestObjectType2) => {
    RequestObjectType2["MANIFEST"] = "manifest";
    RequestObjectType2["SEGMENT"] = "segment";
    RequestObjectType2["KEY"] = "key";
    RequestObjectType2["OTHER"] = "other";
    return RequestObjectType2;
  })(RequestObjectType || {});

  // src/enum/StreamType.ts
  var StreamType = /* @__PURE__ */ ((StreamType2) => {
    StreamType2["VOD"] = "VOD";
    StreamType2["LIVE"] = "LIVE";
    StreamType2["DVR"] = "DVR";
    return StreamType2;
  })(StreamType || {});

  // src/enum/UiMetric.ts
  var UiMetric = /* @__PURE__ */ ((UiMetric2) => {
    UiMetric2["SEEK_BY"] = "seek_by";
    return UiMetric2;
  })(UiMetric || {});

  // src/enum/VideoFormat.ts
  var VideoFormat = /* @__PURE__ */ ((VideoFormat2) => {
    VideoFormat2["HLS"] = "hls";
    VideoFormat2["DASH"] = "dash";
    VideoFormat2["MP4"] = "mp4";
    VideoFormat2["UNKNOWN"] = "unknown";
    return VideoFormat2;
  })(VideoFormat || {});

  // src/error/InvalidArgumentError.ts
  var InvalidArgumentError = class extends PlayerError {
    constructor(message) {
      super("9000" /* INVALID_ARGUMENT */, message, null, false, "API" /* API */);
      this.name = "InvalidArgumentError";
    }
  };

  // src/util/WebVTTParser.ts
  var WebVTTParser = class {
    /**
     * Parses a single WebVTT caption into a CaptionCue.
     *
     * @param caption - The text of the caption
     * @returns The CaptionCue
     */
    static parseCaption(caption, id = 0, style = {}) {
      const parts = caption.trim().split("\n");
      const timecode = /([0-9:.]+)\s*-->\s*([0-9:.]+)([^\n]*)/;
      const setting = /\s*([A-Za-z]+)\s*:\s*([\w\-%]+)/g;
      try {
        if (!timecode.test(parts[0])) {
          id = parseInt(parts.shift());
        }
        const times = parts[0].match(timecode).slice(1);
        const settings = times[2];
        const startTime = hmsToSec(times[0]);
        const endTime = hmsToSec(times[1]);
        const text = parts.slice(1).join("\n");
        if (settings != null) {
          settings.replace(setting, (match, key, value) => style[key] = value);
        }
        return __spreadValues({ id, startTime, endTime, text }, style);
      } catch (error) {
        return null;
      }
    }
    /**
     * Parses a WebVTT file into CaptionCue objects and attaches them to a given track.
     *
     * @param txt -   The text of the webvtt file
     * @returns The populated caption track
     */
    static parse(txt) {
      txt = txt.replace(/\r/g, "");
      const captions = txt.split("\n\n");
      const ignore = /^(WEBVTT|NOTE|STYLE)/;
      const cues = captions.reduce((acc, caption) => {
        if (!(ignore.test(caption) || !caption)) {
          const cue = this.parseCaption(caption, acc.length);
          if (cue) {
            acc.push(cue);
          }
        }
        return acc;
      }, []);
      return cues;
    }
  };

  // src/adapter/playback/surface/ThumbnailTrackSurface.ts
  function renderThumbnail(cue, container) {
    if ((cue == null ? void 0 : cue.style) && (container == null ? void 0 : container.style)) {
      Object.assign(container.style, cue.style);
    }
  }
  var ThumbnailTrackSurface = class {
    constructor(url, cues) {
      this.url = url;
      this.cues = cues;
    }
    getCueAt(time) {
      return this.cues.find((cue) => cue.startTime <= time && cue.endTime >= time);
    }
    renderCueAt(time, container) {
      renderThumbnail(this.getCueAt(time), container);
    }
    static create(url, hookManager2) {
      const a = document.createElement("a");
      a.href = url;
      const absolute = a.protocol + "//" + a.hostname;
      const relative = absolute + a.pathname.split("/").slice(0, -1).join("/") + "/";
      return hookManager2.applyHook("request" /* REQUEST */, { url }, { objectType: "other" /* OTHER */ }).then((req) => request(req)).then((response) => hookManager2.applyHook("response" /* RESPONSE */, { url, data: response })).then((response) => response.data).then((response) => {
        const cues = WebVTTParser.parse(response);
        cues.forEach((cue) => {
          const [file, params] = cue.text.split("#");
          let src = file;
          if (!/^(https?:)?\/\//.test(src)) {
            if (/^\//.test(src)) {
              src = absolute + src;
            } else {
              src = relative + src;
            }
          }
          const kv = params.split("=");
          const keys = kv[0];
          const values2 = kv[1].split(",");
          const style = {
            backgroundImage: `url(${src})`
          };
          const data = { url: src };
          forEach(keys, (key, i) => {
            const value = values2[i];
            switch (key) {
              case "w":
                data.width = parseInt(value);
                style.width = `${value}px`;
                break;
              case "h":
                data.height = parseInt(value);
                style.height = `${value}px`;
                break;
              case "x":
                data.x = parseInt(value);
                style.backgroundPositionX = `-${value}px`;
                break;
              case "y":
                data.y = parseInt(value);
                style.backgroundPositionY = `-${value}px`;
            }
          });
          cue.style = style;
          cue.data = data;
        });
        return new ThumbnailTrackSurface(url, cues);
      });
    }
  };

  // src/util/Net.ts
  var Net_exports = {};
  __export(Net_exports, {
    applyRequestToXhr: () => applyRequestToXhr,
    createRequest: () => createRequest,
    getHeader: () => getHeader,
    loadScript: () => loadScript,
    makeUrl: () => makeUrl
  });

  // src/dataservice/ScriptLoader.ts
  var _ScriptLoader = class extends RecoveryEnabledRequest {
    constructor(options) {
      const opts = Object.assign({ timeout: Network.TIMEOUT }, options || {});
      if (!opts.timeout) {
        opts.timeout = Network.TIMEOUT;
      }
      super(opts);
      this.timeoutHandles = {};
      this.map = {};
      const hasListener = this.hasListenerFor(_ScriptLoader.event.COMPLETE);
      if (this.opts.url && hasListener) {
        this.loadScript(this.opts.url);
      } else if (this.opts.urls && hasListener) {
        this.loadScripts(this.opts.urls);
      } else {
        throw new Error(`Script load error: Missing url or listener. url: ${this.opts.url || this.opts.urls}, hasListener: ${hasListener}`);
      }
    }
    static load(options) {
      return new Promise((resolve, reject) => {
        options.onComplete = ({ detail }) => detail.error || detail.timedOut ? reject(detail) : resolve(detail);
        new _ScriptLoader(options);
      });
    }
    destroy() {
      if (!this.timeoutHandles) {
        return;
      }
      for (const q in this.timeoutHandles) {
        clearTimeout(this.timeoutHandles[q]);
      }
      this.timeoutHandles = null;
      super.destroy();
    }
    loadScript(scriptUrl, completeListener) {
      const scr = document.createElement("script"), sec = window.location.protocol === "https:", url = sec ? scriptUrl.replace("http:", "https:") : scriptUrl;
      this.map[url] = {
        hLoad: () => this.hLoadOrError(url),
        hError: () => this.hLoadOrError(url, true, false),
        scriptEl: scr
      };
      const mapObj = this.map[url];
      completeListener && this.on(_ScriptLoader.event.COMPLETE, completeListener);
      scr.async = true;
      scr.addEventListener("load", mapObj.hLoad);
      scr.addEventListener("error", mapObj.hError);
      this.timeoutHandles[url] = setTimeout(
        () => this.hLoadOrError(url, true, true),
        this.opts.timeout
      );
      document.head.appendChild(scr);
      scr.src = url;
    }
    loadScripts(urls, completeListener) {
      completeListener && this.on(_ScriptLoader.event.COMPLETE, completeListener);
      for (let i = 0, n = urls.length; i < n; i++) {
        this.loadScript(urls[i]);
      }
    }
    hLoadOrError(url, error, timedOut) {
      clearTimeout(this.timeoutHandles[url]);
      delete this.timeoutHandles[url];
      const mapObj = this.map[url];
      mapObj.scriptEl.removeEventListener("load", mapObj.hLoad);
      mapObj.scriptEl.removeEventListener("error", mapObj.hError);
      for (const q in mapObj) {
        delete mapObj[q];
      }
      delete this.map[url];
      if (error && this.shouldRetry()) {
        this.incrementAttempts();
        setTimeout(() => {
          this.loadScript(url);
        }, this.retryInterval);
      } else {
        this.emit(_ScriptLoader.event.COMPLETE, {
          url,
          error,
          timedOut: timedOut === true
        });
      }
    }
  };
  var ScriptLoader = _ScriptLoader;
  ScriptLoader.event = {
    COMPLETE: "complete"
  };

  // src/util/Net.ts
  function createRequest(url, headers = {}, credentials = "same-origin" /* SAME_ORIGIN */) {
    return { url, headers, credentials };
  }
  function applyRequestToXhr(request2, xhr) {
    entries(request2.headers).forEach(([key, value]) => {
      xhr.setRequestHeader(key, value);
    });
    xhr.withCredentials = request2.credentials === "include" /* INCLUDE */;
  }
  function getHeader(headerName, rawHeaders) {
    var _a;
    if (!headerName || !rawHeaders) {
      return null;
    }
    const matchHeader = new RegExp(`${headerName}:([^\\n\\r]+)`, "i");
    return (_a = rawHeaders.match(matchHeader)) == null ? void 0 : _a[1].trim();
  }
  function loadScript(options, playerOptions, getter) {
    return __async(this, null, function* () {
      const { overrides, networkTimeout } = playerOptions || {};
      const avia = System.appNamespace;
      yield ScriptLoader.load({
        url: makeUrl(options.url),
        timeout: (overrides == null ? void 0 : overrides.streamingLibLoaderTimeout) || networkTimeout,
        errorRecovery: merge({}, playerOptions == null ? void 0 : playerOptions.networkErrorRecovery, options.errorRecovery)
      });
      const value = !getter || !getter() ? {} : getter();
      const metadata = {
        url: options.url
      };
      return avia.applyHook(avia.AviaHookType.SCRIPT_LOAD, value, metadata);
    });
  }
  function makeUrl(url) {
    const urlData = new URL(url, window.location.toString());
    if (System.isWebOs || urlData.protocol === "file:" && /^\/\//.test(url)) {
      urlData.protocol = "https:";
    }
    return urlData.toString();
  }

  // src/util/Thumbnail.ts
  var Thumbnail_exports = {};
  __export(Thumbnail_exports, {
    createThumbnailStyles: () => createThumbnailStyles,
    renderThumbnail: () => renderThumbnail2
  });
  function renderThumbnail2(cue, container) {
    if ((cue == null ? void 0 : cue.style) && (container == null ? void 0 : container.style)) {
      Object.assign(container.style, cue.style);
    }
  }
  function createThumbnailStyles(url, width, height, x = 0, y = 0) {
    const styles = {};
    if (url) {
      styles.backgroundImage = `url(${url})`;
    }
    if (width) {
      styles.width = `${width}px`;
    }
    if (height) {
      styles.height = `${height}px`;
    }
    if (x !== 0) {
      styles.backgroundPositionX = `-${x}px`;
    }
    if (y !== 0) {
      styles.backgroundPositionY = `-${y}px`;
    }
    return styles;
  }

  // src/core/Util.ts
  var Util = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, ArrayUtil_exports), {
    eventsToPromise
  }), File_exports), FunctionUtil_exports), Language_exports), Net_exports), NumberUtil_exports), ObjectUtil_exports), Quality_exports), {
    request
  }), Resource_exports), StringUtil_exports), Thumbnail_exports), TimedText_exports), Type_exports), Video_exports);

  // src/enum/DrmType.ts
  var DrmType = /* @__PURE__ */ ((DrmType2) => {
    DrmType2["WIDEVINE"] = "com.widevine.alpha";
    DrmType2["PLAYREADY"] = "com.microsoft.playready";
    DrmType2["PLAYREADY_REC"] = "com.microsoft.playready.recommendation";
    DrmType2["CLEAR_KEY"] = "org.w3.clearkey";
    DrmType2["FAIRPLAY_1_0"] = "com.apple.fps.1_0";
    return DrmType2;
  })(DrmType || {});

  // src/util/Timer.ts
  var _Timer = class extends Emitter {
    constructor(pInterval = 250) {
      super({});
      this.timer = NaN;
      this.pCount = 0;
      this.pInterval = pInterval;
    }
    destroy() {
      this.stop();
      super.destroy();
    }
    start() {
      if (this.running) {
        return;
      }
      this.timer = setInterval(() => {
        this.pCount++;
        this.emit(_Timer.TIC_EVENT, { count: this.pCount });
      }, this.pInterval);
    }
    stop() {
      clearInterval(this.timer);
      this.timer = NaN;
      this.pCount = 0;
    }
    get running() {
      return !isNaN(this.timer);
    }
    get interval() {
      return this.pInterval;
    }
    get count() {
      return this.pCount;
    }
  };
  var Timer = _Timer;
  Timer.TICK = "tic";
  Timer.TIC_EVENT = _Timer.TICK;

  // src/mvc/MvcMessages.ts
  var MvcMessages = class {
    constructor() {
    }
  };

  // src/service/ServiceContainer.ts
  var _ServiceContainer = class {
    constructor(key) {
      if (_ServiceContainer.serviceContainerMap[key]) {
        Logger.error(MvcMessages.ERROR_KEY_EXISTS.replace("$ACTOR_NAME$", "ServiceContainer"));
        return;
      }
      this.multiCoreKey = key;
      this.serviceMap = {};
    }
    static getInstance(key) {
      if (!key) {
        return null;
      }
      if (this.serviceContainerMap[key] == null) {
        this.serviceContainerMap[key] = new _ServiceContainer(key);
      }
      return this.serviceContainerMap[key];
    }
    static removeServiceContainer(key) {
      this.serviceContainerMap[key] && this.serviceContainerMap[key].destroy();
      delete this.serviceContainerMap[key];
    }
    destroy() {
      for (const q in this.serviceMap) {
        this.removeService(q);
      }
      this.serviceMap = null;
    }
    registerService(service) {
      this.serviceMap[service.name] = service;
      service.onRegister(this.multiCoreKey);
    }
    retrieveService(serviceName) {
      return this.serviceMap[serviceName] || null;
    }
    hasService(serviceName) {
      return this.serviceMap[serviceName] != null;
    }
    removeService(serviceName) {
      if (this.serviceMap[serviceName]) {
        this.serviceMap[serviceName].destroy();
      }
      delete this.serviceMap[serviceName];
    }
  };
  var ServiceContainer = _ServiceContainer;
  ServiceContainer.serviceContainerMap = {};

  // src/mvc/Observer.ts
  var Observer = class {
    constructor(notifyMethod, notifyContext) {
      this.setNotifyMethod(notifyMethod);
      this.setNotifyContext(notifyContext);
    }
    destroy() {
      this.context = null;
      this.notify = null;
    }
    setNotifyMethod(notifyMethod) {
      this.notify = notifyMethod;
    }
    setNotifyContext(notifyContext) {
      this.context = notifyContext;
    }
    getNotifyMethod() {
      return this.notify;
    }
    getNotifyContext() {
      return this.context;
    }
    notifyObserver(notification) {
      this.getNotifyMethod().call(this.getNotifyContext(), notification);
    }
    /**
        * Compare an object to this instance's notification context.
        */
    compareNotifyContext(object) {
      return object === this.context;
    }
  };

  // src/mvc/View.ts
  var _View = class {
    constructor(key) {
      if (_View.viewMap[key] != null) {
        Logger.error(MvcMessages.ERROR_KEY_EXISTS.replace("$ACTOR_NAME$", "View"));
        return;
      }
      this.multiCoreKey = key;
      this.mediatorMap = {};
      this.observerMap = {};
      _View.viewMap[this.multiCoreKey] = this;
      this.initializeView();
    }
    static getInstance(key) {
      if (!key) {
        return null;
      }
      if (!this.viewMap[key]) {
        this.viewMap[key] = new _View(key);
      }
      return this.viewMap[key];
    }
    static removeView(key) {
      this.viewMap[key] && this.viewMap[key].destroy();
      delete this.viewMap[key];
    }
    destroy() {
      for (const q in this.mediatorMap) {
        this.removeMediator(this.mediatorMap[q].name);
      }
      this.mediatorMap = null;
      this.observerMap = null;
    }
    registerObserver(notificationName, observer) {
      if (this.observerMap[notificationName] != null) {
        this.observerMap[notificationName].push(observer);
      } else {
        this.observerMap[notificationName] = [observer];
      }
    }
    notifyObservers(notification) {
      let i, n;
      if (this.observerMap[notification.name] != null) {
        const observers_ref = this.observerMap[notification.name];
        const observers = [];
        let observer;
        for (i = 0, n = observers_ref.length; i < n; i++) {
          observer = observers_ref[i];
          observers.push(observer);
        }
        for (i = 0, n = observers.length; i < n; i++) {
          observer = observers[i];
          observer.notifyObserver(notification);
        }
      }
    }
    removeObserver(notificationName, notifyContext) {
      if (!this.observerMap) {
        return;
      }
      const observers = this.observerMap[notificationName];
      let i = observers.length;
      while (i--) {
        if (observers[i].compareNotifyContext(notifyContext) === true) {
          observers.splice(i, 1);
          break;
        }
      }
      if (observers.length === 0) {
        delete this.observerMap[notificationName];
      }
    }
    registerMediator(mediator) {
      const name = mediator.name;
      let i, n, obs;
      if (this.mediatorMap[name]) {
        return;
      }
      mediator.initializeNotifier(this.multiCoreKey);
      this.mediatorMap[name] = mediator;
      const interests = mediator.listNotificationInterests();
      if (interests.length > 0) {
        obs = new Observer(mediator.handleNotification, mediator);
        for (i = 0, n = interests.length; i < n; i++) {
          this.registerObserver(interests[i], obs);
        }
      }
      mediator.onRegister();
    }
    retrieveMediator(mediatorName) {
      return this.mediatorMap[mediatorName];
    }
    removeMediator(mediatorName) {
      const mediator = this.mediatorMap[mediatorName];
      if (mediator) {
        const interests = mediator.listNotificationInterests();
        let i = interests.length;
        while (i--) {
          this.removeObserver(interests[i], mediator);
        }
        delete this.mediatorMap[mediatorName];
        mediator.onRemove();
      }
    }
    hasMediator(mediatorName) {
      return this.mediatorMap[mediatorName] != null;
    }
    initializeView() {
    }
  };
  var View = _View;
  View.viewMap = {};

  // src/mvc/Controller.ts
  var _Controller = class {
    constructor(key) {
      if (_Controller.controllerMap[key]) {
        Logger.error(MvcMessages.ERROR_KEY_EXISTS.replace("$ACTOR_NAME$", "Controller"));
        return;
      }
      this.multiCoreKey = key;
      _Controller.controllerMap[this.multiCoreKey] = this;
      this.commandMap = {};
      this.view = null;
      this.initializeController();
    }
    static getInstance(key) {
      if (!key) {
        return null;
      }
      if (!this.controllerMap[key]) {
        this.controllerMap[key] = new _Controller(key);
      }
      return this.controllerMap[key];
    }
    static removeController(key) {
      this.controllerMap[key] && this.controllerMap[key].destroy();
      delete this.controllerMap[key];
    }
    destroy() {
      for (const q in this.commandMap) {
        this.removeCommand(q);
      }
      this.commandMap = null;
      this.view = null;
    }
    initializeController() {
      this.view = View.getInstance(this.multiCoreKey);
    }
    executeCommand(notification) {
      const commandClassRef = this.commandMap[notification.name];
      if (!commandClassRef) {
        return;
      }
      const commandInstance = new commandClassRef();
      commandInstance.initializeNotifier(this.multiCoreKey);
      commandInstance.execute(notification);
    }
    registerCommand(notificationName, commandClassRef) {
      if (!this.commandMap[notificationName]) {
        this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));
      }
      this.commandMap[notificationName] = commandClassRef;
    }
    hasCommand(notificationName) {
      return !!this.commandMap[notificationName];
    }
    removeCommand(notificationName) {
      if (this.hasCommand(notificationName)) {
        this.view.removeObserver(notificationName, this);
        this.commandMap[notificationName] = null;
      }
    }
  };
  var Controller = _Controller;
  Controller.controllerMap = {};

  // src/mvc/Model.ts
  var _Model = class {
    constructor(key) {
      this.proxyMap = null;
      if (_Model.modelMap[key]) {
        Logger.error(MvcMessages.ERROR_KEY_EXISTS.replace("$ACTOR_NAME$", "Model"));
        return;
      }
      this.multiCoreKey = key;
      _Model.modelMap[key] = this;
      this.proxyMap = {};
      this.initializeModel();
    }
    static getInstance(key) {
      if (!key) {
        return null;
      }
      if (this.modelMap[key] == null) {
        this.modelMap[key] = new _Model(key);
      }
      return this.modelMap[key];
    }
    static removeModel(key) {
      this.modelMap[key] && this.modelMap[key].destroy();
      delete this.modelMap[key];
    }
    destroy() {
      for (const q in this.proxyMap) {
        this.removeProxy(q);
      }
      this.proxyMap = null;
    }
    initializeModel() {
    }
    registerProxy(proxy) {
      this.proxyMap[proxy.name] = proxy;
      proxy.initializeNotifier(this.multiCoreKey);
      proxy.onRegister();
    }
    retrieveProxy(proxyName) {
      return this.proxyMap[proxyName] || null;
    }
    hasProxy(proxyName) {
      return this.proxyMap[proxyName] != null;
    }
    removeProxy(proxyName) {
      const proxy = this.proxyMap[proxyName];
      if (proxy) {
        proxy.onRemove();
        this.proxyMap[proxyName] = null;
      }
    }
  };
  var Model = _Model;
  Model.modelMap = {};

  // src/mvc/Notification.ts
  var Notification = class {
    constructor(name, body, type) {
      this.pName = name;
      this.pBody = body;
      this.pType = type;
    }
    get name() {
      return this.pName;
    }
    get body() {
      return this.pBody;
    }
    get type() {
      return this.pType || null;
    }
    toString() {
      const bdy = `
Body: ${this.pBody == null ? "null" : JSON.stringify(this.body)}`, typ = `
Type: ${this.pType == null ? "null" : this.type}`;
      return `Notification Name: ${this.name + bdy + typ}`;
    }
  };

  // src/mvc/Facade.ts
  var _Facade = class {
    constructor(key, commandMap) {
      this.model = null;
      this.view = null;
      this.controller = null;
      this.serviceContainer = null;
      this.initialized = false;
      this.multiCoreKey = key;
      this.initializeFacade();
      this.registerCommands(commandMap);
    }
    static removeCore(key) {
      if (!this.facadeMap[key]) {
        return;
      }
      Model.removeModel(key);
      View.removeView(key);
      Controller.removeController(key);
      ServiceContainer.removeServiceContainer(key);
      this.facadeMap[key].destroy();
      delete this.facadeMap[key];
    }
    static hasCore(key) {
      return _Facade.facadeMap[key] != null;
    }
    // used internally by mvc actors
    static getInstance(key) {
      if (!key) {
        throw new Error(MvcMessages.ERROR_NO_KEY);
      }
      return this.facadeMap[key];
    }
    static createFacade(key, commandMap) {
      if (!key) {
        throw new Error(MvcMessages.ERROR_NO_KEY);
      }
      if (this.facadeMap[key]) {
        const error = new Error(`Not creating facade - key "${key}" already exists!`);
        error.key = key;
        throw error;
      }
      this.facadeMap[key] = new _Facade(key, commandMap);
      return this.facadeMap[key];
    }
    ///////////////////////////////////////////////
    // Instance members
    destroy() {
      this.model = null;
      this.view = null;
      this.controller = null;
      this.serviceContainer = null;
    }
    get key() {
      return this.multiCoreKey;
    }
    // supplied as a semantic alternative to get key()
    get appId() {
      return this.multiCoreKey;
    }
    get logger() {
      return this.retrieveService("Logging" /* Logging */).logger;
    }
    log(logLevel, ...args) {
      this.logger.log(logLevel, ...args);
    }
    // Controller: Commands
    registerCommand(notificationName, commandClassRef) {
      this.controller.registerCommand(notificationName, commandClassRef);
    }
    removeCommand(notificationName) {
      this.controller.removeCommand(notificationName);
    }
    hasCommand(notificationName) {
      return this.controller.hasCommand(notificationName);
    }
    // Model: Proxies
    registerProxy(proxy) {
      this.model.registerProxy(proxy);
    }
    retrieveProxy(proxyName) {
      return this.model ? this.model.retrieveProxy(proxyName) : null;
    }
    removeProxy(proxyName) {
      this.model && this.model.removeProxy(proxyName);
    }
    hasProxy(proxyName) {
      return this.model.hasProxy(proxyName);
    }
    // View: Mediators
    registerMediator(mediator) {
      this.view.registerMediator(mediator);
    }
    retrieveMediator(mediatorName) {
      return this.view ? this.view.retrieveMediator(mediatorName) : null;
    }
    removeMediator(mediatorName) {
      this.view && this.view.removeMediator(mediatorName);
    }
    hasMediator(mediatorName) {
      return this.view.hasMediator(mediatorName);
    }
    // ServiceContainer: Services
    registerService(service) {
      this.serviceContainer.registerService(service);
    }
    retrieveService(serviceName) {
      return this.serviceContainer ? this.serviceContainer.retrieveService(serviceName) : null;
    }
    removeService(serviceName) {
      this.model && this.serviceContainer.removeService(serviceName);
    }
    hasService(serviceName) {
      return this.serviceContainer.hasService(serviceName);
    }
    registerGlobalServices(svcCollection) {
      for (const s in svcCollection) {
        this.registerService(svcCollection[s]);
      }
    }
    sendNotification(name, param1, param2) {
      let notification;
      if (typeof param1 === "string") {
        notification = new Notification(name, {}, param1);
      } else {
        notification = new Notification(name, param1, param2);
      }
      this.notifyObservers(notification);
    }
    /* eslint-enable*/
    notifyObservers(notification) {
      this.view != null && this.view.notifyObservers(notification);
    }
    // command reg
    registerCommands(map) {
      if (!map) {
        return;
      }
      for (const q in map) {
        !!map[q] && this.registerCommand(q, map[q]);
      }
    }
    // init
    initializeServiceContainer() {
      this.serviceContainer = ServiceContainer.getInstance(this.multiCoreKey);
    }
    initializeController() {
      this.controller = Controller.getInstance(this.multiCoreKey);
    }
    initializeModel() {
      this.model = Model.getInstance(this.multiCoreKey);
    }
    initializeView() {
      this.view = View.getInstance(this.multiCoreKey);
    }
    initializeFacade() {
      if (this.initialized) {
        throw new Error("Unexpected Condition: Facade already initialized");
      }
      this.initializeModel();
      this.initializeController();
      this.initializeView();
      this.initializeServiceContainer();
      this.initialized = true;
    }
  };
  var Facade = _Facade;
  Facade.facadeMap = {};

  // src/service/ServiceBase.ts
  var ServiceBase = class {
    constructor(name) {
      this.pName = name;
    }
    get name() {
      return this.pName;
    }
    destroy() {
    }
    onRegister(key) {
      this.facadeKey = key;
    }
    getLogger() {
      const logSvc = this.getService("Logging" /* Logging */);
      return logSvc.logger;
    }
    getService(name) {
      return Facade.getInstance(this.facadeKey).retrieveService(name);
    }
    getModel(name) {
      return this.getModelCollection().getModel(name);
    }
    getModelCollection() {
      var _a;
      return (_a = Facade.getInstance(this.facadeKey)) == null ? void 0 : _a.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */);
    }
  };

  // src/service/AutoplayCapabilitiesService.ts
  var AutoplayCapabilitiesService = class extends ServiceBase {
    constructor() {
      super("AutoplayCapabilities" /* AutoplayCapabilities */);
      this.testDom = null;
      this.checkCompleted = false;
      this.testVideoSrc = AppResources.blankDataUrl;
      this.isMobile = null;
      this.info = {
        supportsUnmutedAutoplay: null,
        supportsMutedAutoplay: null
      };
      if (System.supportsUnrestrictedAutoplay) {
        this.setInfo(true, true);
        this.checkCompleted = true;
      }
    }
    static getInstance() {
      if (!this.instance) {
        this.instance = new AutoplayCapabilitiesService();
      }
      return this.instance;
    }
    get autoplayInfo() {
      return this.info;
    }
    destroy() {
      clearTimeout(this.timeout);
      super.destroy();
    }
    // Promise-based determination: Check unmuted first, then muted autoplay
    detectCapabilities(url) {
      if (this.detecting) {
        return this.detecting;
      }
      if (url) {
        this.testVideoSrc = url;
      }
      return this.detecting = new Promise((resolve) => {
        if (!this.checkCompleted) {
          this.createTestDom();
          this.internalCallback = () => resolve(this.info);
          this.checkUnmutedAutoplay();
        } else {
          resolve(this.info);
        }
      });
    }
    ///////////
    // PRIVATE
    finishCheck(unmutedOk, mutedOk) {
      this.setInfo(unmutedOk, mutedOk);
      this.checkCompleted = true;
      this.internalCallback();
      this.timeout = setTimeout(() => this.cleanUp(), 100);
    }
    setInfo(unmutedOk, mutedOk) {
      this.info.supportsUnmutedAutoplay = unmutedOk;
      this.info.supportsMutedAutoplay = mutedOk;
    }
    cleanUp() {
      this.testDom && this.testDom.parentNode.removeChild(this.testDom);
      this.testDom = null;
    }
    checkUnmutedAutoplay() {
      const v = this.createVideoElement(false);
      if (!v) {
        this.finishCheck(true, true);
        return;
      }
      v.load();
      const promise = v.play();
      if (promise === void 0) {
        if (this.isMobile) {
          this.detectMobileCapabilities();
        } else {
          this.finishCheck(true, true);
        }
      } else {
        promise.then(() => {
          this.finishCheck(true, true);
        }).catch((e) => {
          this.checkMutedAutoplay();
        });
      }
    }
    checkMutedAutoplay() {
      if (this.isEarlySafari11()) {
        this.finishCheck(false, false);
        return;
      }
      const v = this.createVideoElement(true);
      v.load();
      v.play().then(() => {
        this.finishCheck(false, true);
      }).catch((e) => {
        if (v.error && this.testVideoSrc !== AppResources.blankDataUrl) {
          this.testVideoSrc = AppResources.blankDataUrl;
          this.checkUnmutedAutoplay();
          return;
        }
        this.finishCheck(false, false);
      });
    }
    isEarlySafari11() {
      const isS = System.browser === "Safari" /* SAFARI */;
      const isD = isS && System.device === "Desktop" /* DESKTOP */;
      const maj = isD ? System.browserVersionInfo.majorVersion : null;
      const min = isD ? System.browserVersionInfo.minorVersion : null;
      const majMinMatch = maj === 11 && min === 0;
      const verStr = System.browserVersionInfo.versionString;
      const verArr = verStr ? verStr.split(".") : null;
      return majMinMatch && (!verArr[2] || parseInt(verArr[2]) < 3);
    }
    // mobile checks where no Promise available
    detectMobileCapabilities() {
      const unmutedOk = false;
      const mutedOk = this.isAutoplayEligibleAndroid() || this.isAutoplayEligibleIos();
      this.finishCheck(unmutedOk, mutedOk);
    }
    isAutoplayEligibleAndroid() {
      const isA = System.os === "Android" /* ANDROID */;
      const isOkChrome = isA && System.browser === "Chrome" /* CHROME */ && this.isChromeAutoplayEligible();
      return isOkChrome;
    }
    isAutoplayEligibleIos() {
      const is10 = System.os === "iOS" /* IOS */ && System.browserVersionInfo.majorVersion >= 10;
      const isOkSafari = is10 && System.browser === "Safari" /* SAFARI */;
      const isOkChrome = is10 && !isOkSafari && (System.browser === "Chrome-iOS" /* CHROME_IOS */ || System.browser === "Chrome" /* CHROME */) && this.isChromeAutoplayEligible();
      return isOkSafari || isOkChrome;
    }
    isChromeAutoplayEligible() {
      return System.browserVersionInfo.majorVersion >= 54;
    }
    // util
    createVideoElement(muted) {
      const doc = this.document;
      if (!doc) {
        return null;
      }
      const v = doc.createElement("video");
      if (muted) {
        v.muted = true;
        v.setAttribute("muted", "muted");
        v.setAttribute("playsinline", "playsinline");
      }
      v.volume = 5e-3;
      v.style.width = "100%";
      v.style.height = "100%";
      v.src = this.testVideoSrc;
      this.testDom.appendChild(v);
      return v;
    }
    createTestDom() {
      const doc = this.document;
      if (!this.document) {
        return null;
      }
      const d = doc.createElement("div"), ds = d.style, p = "-1000px";
      ds.position = "absolute";
      ds.top = p;
      ds.left = p;
      ds.width = "400px";
      ds.height = "225px";
      doc.body.appendChild(d);
      this.testDom = d;
      return d;
    }
    get document() {
      return System.document || null;
    }
  };

  // src/app/PlayerOptions.ts
  var PlayerOptions = class {
    constructor(options = {}) {
      this.plugins = [];
      this.autoplay = "none" /* NONE */;
      this.networkErrorRecovery = {};
      this.networkTimeout = Network.TIMEOUT;
      this.id = uid8();
      this.performanceMode = "auto" /* AUTO */;
      this.renderTextTrackNatively = true;
      this.useNativeFullscreen = true;
      this.playsInline = false;
      this.useNativeControls = false;
      this.overrides = {};
      this.enableOm = false;
      this.enableMoat = false;
      this.keyboardScope = "player" /* PLAYER */;
      this.logLevel = "off" /* OFF */;
      this.language = navigator.language;
      this.localization = {};
      this.idleDelay = 3e3;
      this.ignoreBlankTextTracks = false;
      var _b, _c, _d, _e;
      const _a = options, { container } = _a, opts = __objRest(_a, ["container"]);
      if (System.isBrowser) {
        if (container == null || !(container.constructor === HTMLDivElement || typeof container === "object" && typeof container.getBoundingClientRect === "function" || typeof container === "string" && document.querySelector(container) != null)) {
          throw new Error("Invalid player configuration: Missing presentation container.");
        }
      }
      merge(this, opts);
      this.container = container;
      (_b = this.audioLanguage) != null ? _b : this.audioLanguage = this.language;
      (_c = this.textLanguage) != null ? _c : this.textLanguage = this.language;
      (_d = this.localizationLanguage) != null ? _d : this.localizationLanguage = this.language;
      (_e = this.reuseVideoElement) != null ? _e : this.reuseVideoElement = System.isIos;
    }
  };

  // src/app/ResourceConfiguration.ts
  var ResourceConfiguration = class {
    constructor(config2 = {}) {
      this.sessionId = null;
      this.contentId = null;
      this.ad = {
        adapter: null,
        showPrerollOnNonZeroStart: false,
        suppressAdUi: false,
        viewabilityTracking: {
          partner: null,
          viewGuid: null,
          pageType: null
        },
        csai: null,
        ssai: null
      };
      this.location = {
        mediaUrl: null,
        textTrackUrl: null,
        thumbnailTrackUrl: null,
        posterImageUrl: null,
        drm: {
          playready: {
            url: null,
            header: null,
            priority: null,
            audioRobustness: null,
            videoRobustness: null
          },
          widevine: {
            url: null,
            header: null,
            priority: null,
            audioRobustness: null,
            videoRobustness: null
          },
          fairplay: {
            appCertUrl: null,
            licenseUrl: null,
            header: null
          },
          aes: {
            header: null,
            provider: null
          }
        }
      };
      this.playback = {
        id3OwnerIds: null,
        startTime: NaN,
        preloadContent: false,
        enableAdvancedCodecs: false,
        liveEdgeSyncFragmentCount: 3,
        abr: {
          maxBitrate: NaN,
          minBitrate: NaN,
          startBitrate: NaN,
          maxHeight: Infinity,
          maxCategory: null,
          capQualityToScreenSize: true,
          ignoreDevicePixelRatio: true
        }
      };
      this.metadata = {};
      this.tracking = {};
      this.cmcd = {
        enabled: true,
        sessionId: null,
        contentId: null,
        useHeaders: false
      };
      this.overrides = {};
      merge(this, config2);
      const { abr } = this.playback;
      const { maxCategory, maxHeight } = abr;
      if (maxCategory && !Number.isFinite(maxHeight)) {
        abr.maxHeight = getMaxHeightForQualityCategory(maxCategory);
      }
    }
    static validate(resource) {
      if (isEmpty(resource)) {
        throw new Error(AppResources.messages.RESOURCE_MISSING);
      }
      const missing = [];
      Object.keys(defaultResource).forEach((k) => {
        if (!(k in resource)) {
          missing.push(k);
        }
      });
      if (missing.length) {
        throw new Error(`One or more configuration properties not found: ${missing.join(", ")}`);
      }
    }
  };
  var defaultResource = new ResourceConfiguration();

  // src/mvc/Notifier.ts
  var Notifier = class {
    constructor() {
      this.multiCoreKey = null;
    }
    /**
    	 * @internal
    	 */
    destroy() {
    }
    /**
    	* @internal
    	*/
    onRemove() {
      this.multiCoreKey = null;
    }
    /**
    	* @internal
    	*/
    get facade() {
      return Facade.getInstance(this.multiCoreKey);
    }
    /**
    	* @internal
    	*/
    sendNotification(notificationName, body, type) {
      const f = this.facade;
      f && f.sendNotification(notificationName, body, type);
    }
    /**
    	* @internal
    	*/
    initializeNotifier(key) {
      this.multiCoreKey = key;
    }
  };

  // src/mvc/Proxy.ts
  var Proxy2 = class extends Notifier {
    constructor(name, data) {
      super();
      this.proxyName = null;
      this.pData = null;
      this.proxyName = name;
      this.pData = data || {};
    }
    /**
    	* @internal
    	*/
    get name() {
      return this.proxyName;
    }
    /**
    	* @internal
    	*/
    get data() {
      return this.pData;
    }
    /**
    	* @internal
    	*/
    onRegister() {
    }
    /**
    	* @internal
    	*/
    onRemove() {
      this.pData = null;
      super.onRemove();
    }
  };

  // src/model/HookProxy.ts
  var HookProxy = class extends Proxy2 {
    // player-level hook mgt
    constructor(hookManager2) {
      super("HookProxy" /* HookProxy */, null);
      this.aviaHookManager = null;
      // sdk-level hook mgt
      this.pHookManager = null;
      this.pHookManager = new HookManager(player_hook_config);
      this.aviaHookManager = hookManager2;
    }
    onRemove() {
      var _a;
      (_a = this.pHookManager) == null ? void 0 : _a.destroy();
      this.aviaHookManager = null;
      this.pHookManager = null;
      super.onRemove();
    }
    defineHook(type, config2) {
      this.pHookManager.defineHook(type, config2);
    }
    hasHook(type) {
      return this.pHookManager.hasHook(type) || this.aviaHookManager.hasHook(type);
    }
    registerHook(type, hook) {
      this.pHookManager.registerHook(type, hook);
    }
    removeHook(type, hook) {
      this.pHookManager.removeHook(type, hook);
    }
    applyHook(type, value, metadata) {
      return __async(this, null, function* () {
        var _a;
        const val = yield (_a = this.aviaHookManager) == null ? void 0 : _a.applyHook(type, value, metadata);
        return this.pHookManager.applyHook(type, val, metadata);
      });
    }
  };

  // src/service/LogService.ts
  var LogService = class extends ServiceBase {
    constructor(name, logger) {
      super(name);
      this.pLogger = logger;
    }
    destroy() {
      this.pLogger.destroy();
      this.pLogger = null;
    }
    get logger() {
      return this.pLogger;
    }
  };

  // src/app/AbstractApplication.ts
  var AbstractApplication = class extends Emitter {
    constructor(options) {
      super(options || {});
      this.pAppId = options.id;
      this.pFacade = Facade.createFacade(
        this.pAppId,
        options.commandMap || null
      );
      const { logger } = options;
      this.pFacade.registerService(new LogService("Logging" /* Logging */, logger));
      values(LoggerEvent).forEach((type) => logger.on(type, (e) => this.sendEvent(e.type, e.detail)));
    }
    /**
    * @internal
    */
    destroy() {
      this.mdlCollProxy = null;
      this.pFacade = null;
      super.destroy();
      Facade.removeCore(this.pAppId);
    }
    /**
    * @internal
    */
    get appId() {
      return this.pAppId;
    }
    sendNotification(name, body, type) {
      this.pFacade.sendNotification(name, body, type);
    }
    registerGlobalServices(gServices) {
      const f = this.pFacade;
      for (const s in gServices) {
        f.registerService(gServices[s]);
      }
    }
    get facade() {
      return this.pFacade;
    }
    get modelCollectionProxy() {
      if (!this.mdlCollProxy) {
        this.mdlCollProxy = this.facade.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */);
      }
      return this.mdlCollProxy;
    }
    get appMediator() {
      return this.pFacade.retrieveMediator("AppMediator" /* APPLICATION */);
    }
  };

  // src/app/ApiDecorators.ts
  function apiMethod() {
    return function(target, propertyKey, descriptor) {
      if (!isObject(target.apiMethods)) {
        target.apiMethods = {};
      }
      target.apiMethods[propertyKey] = descriptor.value;
    };
  }
  function apiAccessor(readonly = false) {
    return function(target, propertyKey, descriptor) {
      if (!isObject(target.apiAccessors)) {
        target.apiAccessors = {};
      }
      const obj = {
        get: descriptor.get,
        set: readonly ? void 0 : descriptor.set || void 0
      };
      target.apiAccessors[propertyKey] = obj;
    };
  }
  function apiCollection(obj, target) {
    for (const i in target.apiMethods) {
      obj[i] = function(...args) {
        var _a, _b;
        return ((_b = (_a = target == null ? void 0 : target.apiMethods) == null ? void 0 : _a[i]) == null ? void 0 : _b.apply(target, args)) || null;
      };
    }
    for (const p in target.apiAccessors) {
      const desc = target.apiAccessors[p];
      const pd = {};
      if (desc.get) {
        pd.get = () => {
          return target[p];
        };
      }
      if (desc.set) {
        pd.set = (val) => {
          target[p] = val;
        };
      }
      Object.defineProperty(obj, p, pd);
    }
    return obj;
  }

  // src/mvc/AbstractSimpleCommand.ts
  var AbstractSimpleCommand = class extends Notifier {
    constructor() {
      super();
    }
    get system() {
      return System;
    }
    getModel(name) {
      return this.getModelCollection().getModel(name);
    }
    getProxy(name) {
      return this.facade ? this.facade.retrieveProxy(name) : null;
    }
    getService(name) {
      return this.facade ? this.facade.retrieveService(name) : null;
    }
    getModelCollection() {
      return this.facade ? this.facade.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */) : null;
    }
  };

  // src/controller/LogAwareSimpleCommand.ts
  var LogAwareSimpleCommand = class extends AbstractSimpleCommand {
    constructor() {
      super();
    }
    get logger() {
      return this.facade.logger;
    }
    log(logLevel, ...args) {
      this.logger.log(logLevel, ...args);
    }
  };

  // src/controller/AbrSwitchCommand.ts
  var AbrSwitchCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const presoMediator = this.facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
      const stateProxy = this.facade.retrieveProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
      const adapter = presoMediator.adapter;
      const value = notification.body.value;
      if (!stateProxy.isAbrSwitchingAvailable) {
        stateProxy.qualitySwitchingMode = "unavailable" /* UNAVAILABLE */;
        return;
      }
      switch (notification.name) {
        case "switchBitrate" /* SWITCH_BITRATE */:
          const idx = getMaxBitrateIndex(stateProxy.qualities, value);
          this.switchToIndex(idx, stateProxy, adapter);
          break;
        case "switchQualityCategory" /* SWITCH_QUALITY_CATEGORY */:
          stateProxy.userQualityCategory = value;
          this.switchQualityCategory(stateProxy, value, adapter);
          break;
        case "autoQualitySwitching" /* AUTO_QUALITY_SWITCHING */:
          adapter.setAutoQualitySwitching(value);
          stateProxy.qualitySwitchingMode = this.getAbrMode(value);
          break;
        case "minBitrate" /* MIN_BITRATE */:
          adapter.setMinBitrate(value);
          break;
        case "maxBitrate" /* MAX_BITRATE */:
          adapter.setMaxBitrate(value);
          break;
      }
    }
    switchToIndex(index, stateProxy, adapter) {
      const minIndex = stateProxy.minIndex;
      const maxIndex = stateProxy.maxIndex;
      if (inRange(index, minIndex, maxIndex)) {
        adapter.setAutoQualitySwitching(false);
        stateProxy.qualitySwitchingMode = this.getAbrMode(false);
        adapter.setQuality(stateProxy.qualities[index]);
      } else {
        this.logger.log("warn" /* WARN */, index >= maxIndex ? AppResources.messages.ABR_MANUAL_SWITCHING_REACHED_UPPER_BOUNDS : AppResources.messages.ABR_MANUAL_SWITCHING_REACHED_LOWER_BOUNDS);
      }
    }
    switchQualityCategory(stateProxy, category, adapter) {
      if (category === "AUTO" /* AUTO */) {
        adapter.setAutoQualitySwitching(true);
        adapter.setMinBitrate(NaN);
        adapter.setMaxBitrate(NaN);
        return;
      }
      const qia = stateProxy.qualities;
      const { minBitrate, maxBitrate, minIndex, maxIndex } = getMinAndMaxValuesForCategory(qia, category);
      if (minIndex === maxIndex) {
        this.switchToIndex(minIndex, stateProxy, adapter);
      } else {
        adapter.setMinBitrate(minBitrate);
        adapter.setMaxBitrate(maxBitrate);
      }
    }
    getAbrMode(enabled) {
      return enabled ? "auto" /* AUTO */ : "manual" /* MANUAL */;
    }
  };

  // src/mvc/AbstractMacroCommand.ts
  var AbstractMacroCommand = class extends Notifier {
    constructor() {
      super();
      this.subCommands = null;
      this.subCommands = [];
      this.initializeMacroCommand();
    }
    addSubCommand(commandClassRef) {
      this.subCommands.push(commandClassRef);
    }
    execute(notification) {
      let cmdClass, cmd;
      while (this.subCommands.length > 0) {
        cmdClass = this.subCommands.shift();
        cmd = new cmdClass();
        cmd.initializeNotifier(this.multiCoreKey);
        cmd.execute(notification);
      }
    }
  };

  // src/model/ActivityProxy.ts
  var ActivityProxy = class extends Proxy2 {
    constructor(name, data) {
      super(name, { activeState: "inactive" /* INACTIVE */, idleDelay: data.idleDelay });
      this.mouseDown = false;
      this.mouseOver = false;
      this.idleEvents = [
        "mousemove",
        "mousedown",
        "keypress",
        "DOMMouseScroll",
        "mousewheel",
        "touchmove",
        "touchstart",
        "MSPointerMove",
        "MSPointerDown",
        "pointermove",
        "pointerdown"
      ];
      this.container = data.container;
      this.document = data.document;
    }
    onRegister() {
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.reset = this.reset.bind(this);
      this.idle = this.idle.bind(this);
      this.container.addEventListener("mouseenter", this.onMouseEnter);
      this.container.addEventListener("mouseleave", this.onMouseLeave);
      this.container.addEventListener("mousedown", this.onMouseDown);
      this.document.addEventListener("mouseup", this.onMouseUp);
      this.document.addEventListener("keydown", this.onKeyDown);
    }
    onRemove() {
      this.container.removeEventListener("mouseenter", this.onMouseEnter);
      this.container.removeEventListener("mouseleave", this.onMouseLeave);
      this.container.removeEventListener("mousedown", this.onMouseDown);
      this.document.removeEventListener("mouseup", this.onMouseUp);
      this.document.removeEventListener("keydown", this.onKeyDown);
      this.stop();
      this.container = null;
      this.document = null;
      super.onRemove();
    }
    applyListeners(add = true) {
      const action = add ? "add" : "remove";
      this.idleEvents.forEach((event) => this.container[`${action}EventListener`](event, this.reset, { passive: true }));
    }
    start() {
      this.stop();
      this.applyListeners();
      this.timeout = setTimeout(this.idle, this.idleDelay);
    }
    stop() {
      clearTimeout(this.timeout);
      this.applyListeners(false);
    }
    idle() {
      this.activeState = this.mouseOver ? "idle" /* IDLE */ : "inactive" /* INACTIVE */;
    }
    reset() {
      this.activeState = "active" /* ACTIVE */;
      this.start();
    }
    onMouseEnter() {
      this.reset();
      this.mouseOver = true;
      this.activeState = "active" /* ACTIVE */;
      this.start();
    }
    onMouseLeave() {
      this.reset();
      this.mouseOver = false;
      this.activeState = "inactive" /* INACTIVE */;
    }
    onMouseDown() {
      this.mouseDown = true;
    }
    onMouseUp() {
      if (!this.mouseDown) {
        return;
      }
      this.mouseDown = false;
      this.start();
    }
    onKeyDown(event) {
      const { key, keyCode } = event;
      if (key !== "Tab" && keyCode !== 9) {
        return;
      }
      setTimeout(() => {
        const element = this.document.activeElement;
        const active = this.container === element || this.container.contains(element);
        if (active) {
          this.stop();
        }
        this.activeState = active ? "active" /* ACTIVE */ : "inactive" /* INACTIVE */;
      }, 0);
    }
    set activeState(value) {
      if (this.mouseDown) {
        value = "active" /* ACTIVE */;
      }
      if (value === this.data.activeState) {
        return;
      }
      this.data.activeState = value;
      this.sendNotification("activestatechange" /* ACTIVE_STATE_CHANGE */, { activeState: value });
    }
    get activeState() {
      return this.data.activeState;
    }
    get idleDelay() {
      return this.data.idleDelay;
    }
  };

  // src/util/PlayerDom.ts
  var containerCss = {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: "0",
    margin: "0",
    overflow: "hidden"
  };
  function createVideoElement() {
    const video = document.createElement("video");
    video.style.height = "100%";
    video.style.width = "100%";
    video.style.backgroundColor = "#000";
    video.dataset.elementId = uid8();
    return video;
  }
  function createAdContainer() {
    const adContainer = createDiv("adContainer" /* AD_CONTAINER */, containerCss);
    adContainer.dataset.elementId = uid8();
    return adContainer;
  }
  function createDiv(role, css) {
    const el = document.createElement("div");
    el.setAttribute("data-role", role);
    Object.assign(el.style, css);
    return el;
  }
  function createAdClickEl() {
    const css = {
      display: "none",
      padding: "4px 8px",
      fontSize: "12px",
      background: "#dedede",
      lineHeight: "14px",
      color: "#000",
      position: "absolute",
      right: "2px",
      top: "2px",
      textAlign: "center"
    };
    const el = createDiv("adClickEl", css);
    el.innerHTML = "Learn More";
    return el;
  }
  function createPlayerDom(mainContainer, skipEls, playerOptions) {
    const coll = {
      ["main" /* MAIN_CONTAINER */]: mainContainer,
      ["video" /* VIDEO_EL */]: null
    };
    const main = mainContainer;
    const roles = [
      "adContainer" /* AD_CONTAINER */,
      "ccContainer" /* CC_CONTAINER */,
      "videoContainer" /* VIDEO_CONTAINER */
    ];
    const style = main.style;
    style.position = style.position || "relative";
    style.padding = style.padding || "0";
    style.margin = style.margin || "0";
    style.width = style.width || "100%";
    style.height = style.height || "100%";
    style.backgroundColor = style.backgroundColor || "#000";
    style.overflow = style.overflow || "hidden";
    main.classList.add("avia-container");
    const styleEl = document.createElement("style");
    main.parentElement.insertAdjacentElement("beforebegin", styleEl);
    styleEl.innerText = ":root{--avia-timed-text-offset: 60px;}.avia-container.avia-cc-offset video::-webkit-media-text-track-container{bottom: var(--avia-timed-text-offset);height: auto;}";
    let refNode = main.hasChildNodes() ? main.firstChild : null;
    let el;
    roles.forEach((role) => {
      if (skipEls.includes(role)) {
        return;
      }
      if (role === "adContainer" /* AD_CONTAINER */) {
        el = createAdContainer();
      } else {
        el = createDiv(role, containerCss);
      }
      coll[role] = el;
      if (refNode) {
        main.insertBefore(el, refNode);
      } else {
        main.appendChild(el);
      }
      refNode = el;
    });
    if (playerOptions.reuseVideoElement === true) {
      const v = createVideoElement();
      coll["videoContainer" /* VIDEO_CONTAINER */].appendChild(v);
      coll["video" /* VIDEO_EL */] = v;
    }
    coll["adClickEl" /* AD_CLICK_EL */] = createAdClickEl();
    main.appendChild(coll["adClickEl" /* AD_CLICK_EL */]);
    return {
      ["main" /* MAIN_CONTAINER */]: coll["main" /* MAIN_CONTAINER */],
      ["video" /* VIDEO_EL */]: coll["video" /* VIDEO_EL */],
      ["videoContainer" /* VIDEO_CONTAINER */]: coll["videoContainer" /* VIDEO_CONTAINER */],
      ["ccContainer" /* CC_CONTAINER */]: coll["ccContainer" /* CC_CONTAINER */],
      ["adContainer" /* AD_CONTAINER */]: coll["adContainer" /* AD_CONTAINER */],
      ["adClickEl" /* AD_CLICK_EL */]: coll["adClickEl" /* AD_CLICK_EL */],
      ["style" /* STYLE */]: styleEl
    };
  }

  // src/controller/boot/CreateDomCommand.ts
  var CreateDomCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const cfg = notification.body.playerOptions;
      const container = cfg.container;
      const sys = this.system;
      const playerOpts = this.getModel("PlayerOptions" /* PlayerOptions */);
      if (!sys.isBrowser || !container) {
        return;
      }
      const c = typeof container === "string" ? sys.document.querySelector(container) : container;
      let skipEls = [];
      if (playerOpts.useNativeControls) {
        skipEls = ["ccContainer" /* CC_CONTAINER */];
      }
      const domColl = createPlayerDom(c, skipEls, playerOpts);
      const domProxy = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
      domProxy.setModel(domColl);
      domProxy.showAdContainer(false);
      if (playerOpts.useNativeControls) {
        domProxy.setVideoAttribute("controls", "");
      }
      playerOpts.playsInline !== false && domProxy.setVideoAttribute("playsinline", "");
      domProxy.setVideoAttribute("data-player-id", this.facade.appId);
      this.facade.registerProxy(new ActivityProxy("ActivityProxy" /* ActivityProxy */, { container: c, document: sys.document, idleDelay: playerOpts.idleDelay }));
      this.log("info" /* INFO */, "Player DOM created.");
    }
  };

  // src/util/FairPlay.ts
  var WEBKIT_NEED_KEY = "webkitneedkey";
  var WEBKIT_KEY_MESSAGE = "webkitkeymessage";
  var WEBKIT_KEY_ADDED = "webkitkeyadded";
  var WEBKIT_KEY_ERROR = "webkitkeyerror";
  var FairPlay = class {
    constructor(video, drm, logger, delegate, onError) {
      this.appCertLoaded = false;
      this.webKitNeedKeyCalled = false;
      this.webkitNeedKeyHandler = (e) => this.onWebkitNeedKey(e);
      this.onError = onError;
      this.drmInfo = drm;
      this.video = video;
      this.video.addEventListener(WEBKIT_NEED_KEY, this.webkitNeedKeyHandler);
      this.logger = logger;
      this.delegate = delegate;
    }
    ////////////////////
    //Public Methods
    ////////////////////
    initialize() {
      return __async(this, null, function* () {
        const value = yield this.delegate.applyHook("request" /* REQUEST */, { url: this.drmInfo.appCertUrl, headers: {} });
        const response = yield request(merge({ responseType: "arraybuffer" /* ARRAY_BUFFER */ }, value));
        this.appCertData = new Uint8Array(response);
        this.appCertLoaded = true;
        if (this.webKitNeedKeyCalled) {
          this.initializeFairplayCDM();
        }
      });
    }
    destroy() {
      this.appCertData = null;
      this.initData = null;
      this.onError = null;
      this.drmInfo = null;
      this.logger = null;
      this.video.removeEventListener(WEBKIT_NEED_KEY, this.webkitNeedKeyHandler);
      this.video = null;
    }
    ////////////////////
    //Events Methods
    ////////////////////
    /*
     * Async dependent on app certdata to continue.
     */
    onWebkitNeedKey(event) {
      this.initData = event.initData;
      this.webKitNeedKeyCalled = true;
      if (this.appCertLoaded) {
        this.initializeFairplayCDM();
      }
    }
    onLicenseRequestReady(url, event) {
      const drmVendor = this.getDrmVendor(url);
      const session = event.target;
      const spcMessage = base64EncodeUint8Array(event.message);
      const data = {
        spc: spcMessage,
        contentId: session.contentId
      };
      const responseType = drmVendor === "irdeto" /* IRDETO */ || drmVendor === "unknown" /* UNKNOWN */ ? "arraybuffer" /* ARRAY_BUFFER */ : "text" /* TEXT */;
      const headers = { "Content-Type": "application/x-www-form-urlencoded" };
      const { header } = this.drmInfo;
      if (!isEmpty(header)) {
        Object.assign(headers, header);
      }
      this.delegate.applyHook("request" /* REQUEST */, { url, method: "POST" /* POST */, responseType, headers, data }).then((value) => {
        const requestOptions = clone(value);
        const contentType = value.headers["Content-Type"];
        if (contentType === "application/x-www-form-urlencoded") {
          requestOptions.data = "spc=" + encodeURIComponent(value.data.spc) + "&" + value.data.contentId;
        } else if (contentType === "application/json") {
          requestOptions.data = JSON.stringify(value.data);
        }
        return request(requestOptions).then((response) => {
          const key = typeof response === "string" ? base64DecodeUint8Array(response) : new Uint8Array(response);
          session.update(key);
        }).catch((error) => {
          this.throwFatalError("3301" /* FAIRPLAY_LIC_ERROR */, AppResources.messages.FAIRPLAY_LICENSE_ERROR);
        });
      });
    }
    onWebkitKeyAdded(event) {
      this.logger.log("info" /* INFO */, AppResources.messages.WEBKIT_KEY_ADDED_SUCCESS);
    }
    onWebkitError(event) {
      this.throwFatalError("3301" /* FAIRPLAY_LIC_ERROR */, `${AppResources.messages.FAIRPLAY_LICENSE_ERROR}`);
    }
    ////////////////////
    //Private Methods
    ////////////////////
    initializeFairplayCDM() {
      const licenseServerUrl = this.getLicenseServerUrl(this.initData);
      const contentId = this.getId(licenseServerUrl, this.initData);
      const video = this.video;
      const global = System.global;
      const errMsg = AppResources.messages;
      if (!contentId) {
        this.throwFatalError("3300" /* FAIRPLAY_APP_CERT_ERROR */, errMsg.FAIRPLAY_NO_CONTENT_ID);
        return;
      }
      if (!video.webkitKeys) {
        const keySystem = "com.apple.fps.1_0" /* FAIRPLAY_1_0 */;
        if (!global.WebKitMediaKeys.isTypeSupported(keySystem, "video/mp4")) {
          this.throwFatalError("3300" /* FAIRPLAY_APP_CERT_ERROR */, errMsg.FAIRPLAY_WEBKIT_ERROR);
          return;
        }
        try {
          video.webkitSetMediaKeys(new global.WebKitMediaKeys(keySystem));
        } catch (e) {
          this.throwFatalError("3300" /* FAIRPLAY_APP_CERT_ERROR */, e.message);
          return;
        }
      }
      const appCertInitData = this.concatInitDataIdAndCertificate(this.initData, contentId, this.appCertData);
      const keySession = video.webkitKeys.createSession("video/mp4", appCertInitData);
      if (!keySession) {
        this.throwFatalError("3300" /* FAIRPLAY_APP_CERT_ERROR */, errMsg.FAIRPLAY_WEBKIT_ERROR);
        return;
      }
      keySession.contentId = contentId;
      keySession.addEventListener(WEBKIT_KEY_MESSAGE, this.onLicenseRequestReady.bind(this, licenseServerUrl), false);
      keySession.addEventListener(WEBKIT_KEY_ADDED, this.onWebkitKeyAdded.bind(this), false);
      keySession.addEventListener(WEBKIT_KEY_ERROR, this.onWebkitError.bind(this), false);
    }
    concatInitDataIdAndCertificate(initData, id, cert) {
      if (typeof id === "string") {
        id = stringToArray(id);
      }
      let offset = 0;
      const buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
      const dataView = new DataView(buffer);
      const initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
      initDataArray.set(initData);
      offset += initData.byteLength;
      dataView.setUint32(offset, id.byteLength, true);
      offset += 4;
      const idArray = new Uint16Array(buffer, offset, id.length);
      idArray.set(id);
      offset += idArray.byteLength;
      dataView.setUint32(offset, cert.byteLength, true);
      offset += 4;
      const certArray = new Uint8Array(buffer, offset, cert.byteLength);
      certArray.set(cert);
      return new Uint8Array(buffer, 0, buffer.byteLength);
    }
    getLicenseServerUrl(initData) {
      let url = null;
      if (!isEmpty(this.drmInfo.licenseUrl)) {
        url = this.drmInfo.licenseUrl;
      } else {
        const initDataString = String.fromCharCode.apply(null, new Uint16Array(initData.buffer));
        const splitString = initDataString.split("://");
        url = "https://" + splitString[1];
      }
      return url;
    }
    extractContentId(initData) {
      return arrayToString(initData).split("skd://")[1];
    }
    getId(licenseServerUrl, initData) {
      const obj = QueryString.decode(licenseServerUrl);
      return obj.ContentId || obj.contentId || obj.assetId || this.extractContentId(initData);
    }
    /**
     * license server url needed to parse vendor
     */
    getDrmVendor(url) {
      let v = "unknown" /* UNKNOWN */;
      if (url.indexOf("irdeto" /* IRDETO */) !== -1) {
        v = "irdeto" /* IRDETO */;
      } else if (url.indexOf("drmtoday" /* DRM_TODAY */) !== -1) {
        v = "drmtoday" /* DRM_TODAY */;
      }
      return v;
    }
    throwFatalError(code, message) {
      this.logger.log("error" /* ERROR */, code, message);
      this.onError({
        code,
        message,
        fatal: true
      });
    }
  };

  // src/adapter/playback/PlaybackAdapter.ts
  var PlaybackAdapter = class extends PlaybackAdapterBase {
    constructor(context, options = {}) {
      super(context, options, true);
      this.isNonZeroStartTime = false;
      this.onAddAudioEvent = (event) => {
        this.audioTracks = [];
        this.audioTrack = null;
        forEach(this.domAudioTracks, (audioTrack, index) => {
          if (!audioTrack.label && !audioTrack.language) {
            return;
          }
          const { kind } = audioTrack;
          const track = {
            index,
            id: index.toString(),
            type: kind === "alternative" || kind === "description" ? "description" /* DESCRIPTION */ : "main" /* MAIN */,
            codec: "",
            language: audioTrack.language,
            label: audioTrack.label
          };
          this.audioTracks.push(track);
        });
        this.delegate.audioTracksChange(this.audioTracks);
        this.setAudioTrack(findDefaultTrack(this.audioTracks, this.context.playerOptions.audioLanguage));
        if (!this.audioTrack) {
          this.changeAudioDebounced();
        }
      };
      this.onChangeAudioEvent = (event) => {
        const audioTrack = Array.from(this.domAudioTracks).find((track) => track.enabled);
        this.audioTrack = this.audioTracks.find((track) => track.id === audioTrack.id);
        this.delegate.audioTrackChange(this.audioTrack);
      };
      this.onFairPlayError = (error) => {
        this.delegate.error(error);
      };
      const { fairplay } = this.context.resource.location.drm;
      if (fairplay.appCertUrl) {
        this.fairplay = new FairPlay(this.video, fairplay, this.logger, this.delegate, this.onFairPlayError);
        this.fairplay.initialize();
        this.delegate.drmKeySystemCreated("com.apple.fps.1_0" /* FAIRPLAY_1_0 */);
      }
      const audioTracks = this.domAudioTracks;
      if (audioTracks) {
        this.addAudioDebounced = debounce(this.onAddAudioEvent, 100);
        this.changeAudioDebounced = debounce(this.onChangeAudioEvent, 100);
        audioTracks.addEventListener("addtrack" /* ADD_TRACK */, this.addAudioDebounced);
        audioTracks.addEventListener("change" /* CHANGE */, this.changeAudioDebounced);
      }
    }
    static get ID() {
      return HTML5;
    }
    static get config() {
      return {
        id: PlaybackAdapter.ID,
        role: ["playback" /* PLAYBACK */],
        factory: (context, options = {}) => {
          return new PlaybackAdapter(context, options);
        },
        isSupported: (context) => {
          var _a;
          const type = getResourceMimeType(context.resource);
          return ((_a = context.video) == null ? void 0 : _a.canPlayType(type)) !== "";
        }
      };
    }
    get domAudioTracks() {
      return this.video.audioTracks;
    }
    getId() {
      return PlaybackAdapter.ID;
    }
    destroy() {
      const video = this.video;
      const audioTracks = this.domAudioTracks;
      return super.destroy().then(() => {
        if (audioTracks) {
          this.addAudioDebounced.cancel();
          this.changeAudioDebounced.cancel();
          audioTracks.removeEventListener("addtrack" /* ADD_TRACK */, this.addAudioDebounced);
          audioTracks.removeEventListener("change" /* CHANGE */, this.changeAudioDebounced);
        }
        if (this.fairplay) {
          this.fairplay.destroy();
          this.fairplay = null;
        }
        video.removeAttribute("src");
        video.load();
      });
    }
    load() {
      var _a;
      this.suppressErrors = true;
      super.load();
      const { resource } = this.context;
      let src = resource.location.mediaUrl;
      const mimeType = ((_a = resource.overrides) == null ? void 0 : _a.mimeType) || getMimeType(src);
      const getFormat = (mimeType2) => {
        switch (mimeType2) {
          case "application/vnd.apple.mpegurl" /* HLS */:
          case "application/x-mpegURL" /* HLS_ALT */:
            return CmcdStreamingFormat.HLS;
          case "application/dash+xml" /* DASH */:
            return CmcdStreamingFormat.DASH;
          default:
            return CmcdStreamingFormat.OTHER;
        }
      };
      const { cmcd } = resource;
      if (cmcd.enabled) {
        src = appendCmcdQuery(src, {
          ot: CmcdObjectType.MANIFEST,
          sf: getFormat(mimeType),
          su: true,
          sid: cmcd.sessionId,
          cid: cmcd.contentId,
          pr: this.video.playbackRate,
          v: CMCD_VERSION
        });
      }
      return this.delegate.applyHook("request" /* REQUEST */, { url: src }, { objectType: "manifest" /* MANIFEST */ }).then((value) => {
        this.video.src = value.url;
        const { system } = this.context;
        return waitForEvent(this.video, "loadedmetadata" /* LOADED_METADATA */).then(() => {
          if (system.isIos) {
            this.video.load();
          }
          const startTime = resource.playback.startTime;
          if (isValidPlayheadTime(startTime)) {
            this.isNonZeroStartTime = true;
            return waitForEvent(this.video, "canplaythrough" /* CAN_PLAY_THROUGH */).then(() => this.seek(startTime));
          }
        }).then(() => {
          this.suppressErrors = false;
          return {
            manifest: {
              mimeType
            },
            fragment: {
              mimeType: void 0
            }
          };
        }).catch(() => {
          throw this.createVideoElementError();
        });
      });
    }
    setAudioTrack(track) {
      if (!track) {
        return;
      }
      forEach(this.domAudioTracks, (audioTrack, index) => {
        audioTrack.enabled = track.index === index;
      });
      this.textTrackSurface.forcedLanguage = track.language;
    }
    setQuality(value) {
      this.logger.log("info" /* INFO */, AppResources.messages.MANUAL_ABR_SWITCHING_UNAVAILABLE);
    }
    setAutoQualitySwitching(value) {
      this.logger.log("info" /* INFO */, AppResources.messages.MANUAL_ABR_SWITCHING_UNAVAILABLE);
    }
    setMinBitrate(value) {
      this.logger.log("info" /* INFO */, AppResources.messages.MANUAL_ABR_SWITCHING_UNAVAILABLE);
    }
    setMaxBitrate(value) {
      this.logger.log("info" /* INFO */, AppResources.messages.MANUAL_ABR_SWITCHING_UNAVAILABLE);
    }
    setTextTrackMode(mode) {
      if (!this.textTrackSurface) {
        return;
      }
      if (this.isNonZeroStartTime && !this.startedPlaying) {
        this.isNonZeroStartTime = false;
        waitForEvent(this.video, "seeked" /* SEEKED */).then(() => this.textTrackSurface.textTrackMode = mode);
      } else {
        this.textTrackSurface.textTrackMode = mode;
      }
    }
  };

  // src/model/AdapterProxy.ts
  var AdapterProxy = class extends Proxy2 {
    constructor(data) {
      super("AdapterProxy" /* AdapterProxy */, data);
      this.adapterMap = {};
      this.defaultAdapters = {
        ["playback" /* PLAYBACK */]: PlaybackAdapter.config
      };
    }
    onRemove() {
      this.adapterMap = null;
      super.onRemove();
    }
    registerAdapter(adapterConfig) {
      const { id } = adapterConfig;
      this.adapterMap[id] = adapterConfig;
    }
    retrieveAdapter(id) {
      return this.adapterMap[id];
    }
    removeAdapter(id) {
      delete this.adapterMap[id];
    }
    getAdaptersByRole(role) {
      const adapters = values(this.adapterMap).filter((config2) => config2.role.includes(role));
      const dflt = this.defaultAdapters[role];
      if (dflt) {
        adapters.push(dflt);
      }
      return adapters;
    }
    createContext(resource, getDelegate) {
      const services = this.facade.retrieveMediator("PluginMediator" /* PLUGIN_MEDIATOR */).createPluginServices();
      const { dom, system } = services;
      const modelCollection = this.facade.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */);
      const presentationState = modelCollection.getModel("PresentationState" /* PresentationState */);
      const textTrackProxy = this.facade.retrieveProxy("TextTrackProxy" /* TextTrackProxy */);
      const performanceProxy = this.facade.retrieveProxy("PerformanceProxy" /* PerformanceProxy */);
      return Object.assign(services, {
        resource,
        video: system.isWebMaf ? system.webMafPlayer : dom.video,
        container: dom.main,
        autoplay: presentationState.isAutoplay,
        muted: presentationState.isMuteAtPlayStart,
        performanceSettings: performanceProxy,
        textTrackSettings: textTrackProxy,
        getDelegate
      });
    }
    createAdapter(role, resource, delegateFactory) {
      return __async(this, null, function* () {
        var _a;
        const context = this.createContext(resource, delegateFactory);
        const adapters = this.getAdaptersByRole(role);
        const adapterConfig = ((_a = context.resource[role]) == null ? void 0 : _a.adapter) || {};
        const { id, options = {} } = adapterConfig;
        const list = id ? adapters.filter((adapter) => adapter.id === id) : adapters;
        for (const config2 of list) {
          const opts = merge({}, config2.options, options, adapterConfig[config2.id]);
          if (!id && !(yield config2.isSupported(context, opts))) {
            continue;
          }
          const adapter = yield config2.factory(context, opts);
          if (adapter) {
            this.facade.log("info" /* INFO */, `${config2.id} adapter created`);
            return adapter;
          }
        }
        let message = `Could not find adapter for role: ${role}`;
        if (id) {
          message += `, with id: ${id}`;
        }
        throw new PlayerError("5000" /* ADAPTER_NOT_FOUND */, message);
      });
    }
  };

  // src/model/LocalizationProxy.ts
  var _LocalizationProxy = class extends Proxy2 {
    constructor(name, language) {
      super(name, {});
      this.pLocalizationData = [];
      this.pLocale = {};
      this.pLanguage = language;
      this.registerLocalizationData(_LocalizationProxy.LocalizationData);
    }
    static load(url) {
      if (this.pExternalData[url] == null) {
        this.pExternalData[url] = request({ url, responseType: "json" /* JSON */ });
      }
      return this.pExternalData[url];
    }
    onRemove() {
      this.pLocale = null;
      this.pLocalizationData = null;
      this.pLanguageTag = null;
      this.pLanguage = null;
    }
    getApi() {
      return apiCollection({}, this);
    }
    get defaultLanguage() {
      return (navigator == null ? void 0 : navigator.language) ? navigator.language : "en";
    }
    get language() {
      return this.pLanguage || this.defaultLanguage;
    }
    get languageTag() {
      return this.pLanguageTag;
    }
    changeLanguage(language = this.defaultLanguage) {
      this.pLanguage = language;
      this.pLanguageTag = parseLanguageTag(this.language);
      const tag = new RegExp(`^${this.pLanguageTag.language}`, "i");
      const load = ([k, v]) => {
        return _LocalizationProxy.load(v).then((data2) => [k, data2]).catch((error) => {
          this.facade.log("error" /* ERROR */, `Could not load locale file ${v}`, error);
          return [k, {}];
        });
      };
      const data = this.pLocalizationData.map((data2) => {
        const locale = entries(data2).filter((entry) => tag.test(entry[0])).map((entry) => typeof entry[1] === "string" ? load(entry) : entry);
        return Promise.all(locale);
      });
      return Promise.all(data).then((entries2) => {
        const objs = entries2.map((entry) => fromEntries(entry));
        const data2 = merge(...objs);
        return this.pLocale = data2;
      });
    }
    registerLocalizationData(data) {
      if (isEmpty(data)) {
        return;
      }
      this.pLocalizationData.push(data);
    }
    localize(messageId, context) {
      const message = this.lookup(messageId);
      return template(message, context);
    }
    lookup(messageId, language = this.language) {
      const find = (lang) => {
        const locale = this.pLocale[lang] || {};
        return locale[messageId];
      };
      return find(language) || find(this.pLanguageTag.language) || messageId;
    }
  };
  var LocalizationProxy = _LocalizationProxy;
  LocalizationProxy.pExternalData = {};
  LocalizationProxy.LocalizationData = {
    en: {
      ["media-player" /* MEDIA_PLAYER */]: "Media Player",
      ["learn-more" /* LEARN_MORE */]: "Learn More"
    },
    es: {
      ["media-player" /* MEDIA_PLAYER */]: "Reproductor multimedia",
      ["learn-more" /* LEARN_MORE */]: "Aprende m\xE1s"
    }
  };
  __decorateClass([
    apiAccessor(true)
  ], LocalizationProxy.prototype, "defaultLanguage", 1);
  __decorateClass([
    apiAccessor(true)
  ], LocalizationProxy.prototype, "language", 1);
  __decorateClass([
    apiMethod()
  ], LocalizationProxy.prototype, "languageTag", 1);
  __decorateClass([
    apiMethod()
  ], LocalizationProxy.prototype, "changeLanguage", 1);
  __decorateClass([
    apiMethod()
  ], LocalizationProxy.prototype, "registerLocalizationData", 1);
  __decorateClass([
    apiMethod()
  ], LocalizationProxy.prototype, "localize", 1);

  // src/model/ModelCollectionProxy.ts
  var ModelCollectionProxy = class extends Proxy2 {
    constructor() {
      super(...arguments);
      /*
      			All models:
      
      					ContentPlaybackState    | Full Reset
      					- - - - - - - - - - - - - - - - - - - - - - - -
      					PresentationState       | Partial reset
      					- - - - - - - - - - - - - - - - - - - - - - - -
      					BuildInfo               | No reset
      					PlayerDom               | No reset
      					PlayerOptions           | No reset
      	*/
      this.resettables = [
        "ContentPlaybackState" /* ContentPlaybackState */
      ];
    }
    onRemove() {
      this.resettables = null;
      const pdp = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
      if (pdp) {
        pdp.removeDom();
      }
      super.onRemove();
    }
    get collection() {
      return this.data;
    }
    getModel(name) {
      return this.data.getModel(name);
    }
    reset() {
      const list = this.resettables;
      let i = list.length;
      while (i--) {
        this.getModel(list[i]).reset();
      }
      const psi = this.getModel("PresentationState" /* PresentationState */);
      psi.isAutoplay = true;
      psi.isCurrentVideoAd = false;
      psi.started = false;
      psi.streamDuration = NaN;
      psi.streamTime = NaN;
    }
  };

  // src/mvc/AbstractMediator.ts
  var AbstractMediator = class extends Notifier {
    constructor(name, viewControl) {
      super();
      this.pViewControl = null;
      this.mediatorName = name;
      viewControl && (this.viewControl = viewControl);
    }
    get name() {
      return this.mediatorName;
    }
    set viewControl(viewControl) {
      this.pViewControl = viewControl;
    }
    get viewControl() {
      return this.pViewControl;
    }
    get system() {
      return System;
    }
    getService(name) {
      return this.facade ? this.facade.retrieveService(name) : null;
    }
    getModel(name) {
      return this.getModelCollection().getModel(name);
    }
    getProxy(name) {
      return this.facade ? this.facade.retrieveProxy(name) : null;
    }
    getModelCollection() {
      return this.facade ? this.facade.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */) : null;
    }
    listNotificationInterests() {
      return [];
    }
    onRegister() {
    }
    onRemove() {
      this.pViewControl = null;
      super.onRemove();
    }
  };

  // src/view/LogAwareMediator.ts
  var LogAwareMediator = class extends AbstractMediator {
    // It may be useful to pass the logger to lower level components
    // (which don't have facade access), if logging is desired at that level.
    get logger() {
      return this.facade.logger;
    }
    log(logLevel, ...args) {
      this.logger.log(logLevel, ...args);
    }
  };

  // src/view/TimerMediator.ts
  var _TimerMediator = class extends LogAwareMediator {
    constructor(name) {
      super(name);
      this.timer = new Timer(_TimerMediator.INTERVAL);
      this.timer.on(Timer.TIC_EVENT, (e) => this.onTic(e));
    }
    killTimer() {
      var _a;
      (_a = this.timer) == null ? void 0 : _a.stop();
    }
    listNotificationInterests() {
      return [
        "resourcestart" /* RESOURCE_START */
      ];
    }
    handleNotification(notification) {
      var _a;
      switch (notification.name) {
        case "resourcestart" /* RESOURCE_START */:
          (_a = this.timer) == null ? void 0 : _a.start();
          break;
      }
    }
    onRegister() {
      super.onRegister();
    }
    onRemove() {
      this.timer.destroy();
      this.timer = null;
      super.onRemove();
    }
    onTic(e) {
      var _a, _b;
      (_a = this.facade) == null ? void 0 : _a.sendNotification("timerTic" /* TIMER_TIC */, e.detail, "internal" /* INTERNAL */);
      (_b = this.facade) == null ? void 0 : _b.sendNotification("aviaclock" /* CLOCK */, { count: e.detail.count }, "internal" /* INTERNAL */);
    }
  };
  var TimerMediator = _TimerMediator;
  TimerMediator.INTERVAL = 100;

  // src/model/PerformanceProxy.ts
  var PerformanceProxy = class extends Proxy2 {
    onRegister() {
      const mcp = this.facade.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */);
      const options = mcp.getModel("PlayerOptions" /* PlayerOptions */);
      this.pOverrides = options.overrides;
      this.pMode = options.performanceMode === "auto" /* AUTO */ ? this.calculatePerformanceMode() : options.performanceMode;
    }
    calculatePerformanceMode() {
      switch (true) {
        case System.isTv:
        case System.isEmbedded:
          return "tv" /* TV */;
        case System.isMobile:
          return "mobile" /* MOBILE */;
        default:
          return "desktop" /* DESKTOP */;
      }
    }
    get mode() {
      return this.pMode;
    }
    get forwardBufferLength() {
      switch (this.pMode) {
        case "mobile" /* MOBILE */:
        case "tv" /* TV */:
          return 20;
        case "low" /* LOW */:
          return 10;
        default:
          return void 0;
      }
    }
    get backBufferLength() {
      switch (this.pMode) {
        case "mobile" /* MOBILE */:
        case "tv" /* TV */:
          return 30;
        case "low" /* LOW */:
          return 12;
        default:
          return 60;
      }
    }
    get topQualityForwardBufferLength() {
      switch (this.pMode) {
        case "mobile" /* MOBILE */:
        case "tv" /* TV */:
          return 60;
        case "low" /* LOW */:
          return 30;
        default:
          return void 0;
      }
    }
    get bufferingSampleRate() {
      var _a;
      const override = (_a = this.pOverrides) == null ? void 0 : _a.bufferingSampleRate;
      if (override) {
        return override;
      }
      switch (this.pMode) {
        case "tv" /* TV */:
        case "low" /* LOW */:
          return 300;
        default:
          return TimerMediator.INTERVAL;
      }
    }
  };

  // src/model/PlayerDomProxy.ts
  var PlayerDomProxy = class extends Proxy2 {
    constructor() {
      super(...arguments);
      this.controlVisCssClass = "cvui-ctrlbar-vis";
    }
    setModel(coll) {
      for (const q in coll) {
        this.model[q] = coll[q];
      }
    }
    removeDom() {
      var _a;
      const video = this.getVideo();
      if (video) {
        video.player = null;
        video.avia = null;
      }
      const main = this.getMain();
      const children = main.childNodes;
      let i = children.length;
      while (i--) {
        main.removeChild(children[i]);
      }
      const style = this.getElement("style" /* STYLE */);
      (_a = style == null ? void 0 : style.parentElement) == null ? void 0 : _a.removeChild(style);
    }
    setControlVisibility(controlsVisible) {
      const el = this.getMain();
      if (!el) {
        return;
      }
      const m = controlsVisible ? "add" : "remove";
      el.classList[m](this.controlVisCssClass);
    }
    getElement(n) {
      const el = this.model[n];
      return el || null;
    }
    getSafeZIndex() {
      const el = this.getElement("adContainer" /* AD_CONTAINER */);
      if (!el) {
        return 10;
      }
      return Number(el.style.zIndex) + 10;
    }
    getVideo() {
      return this.getElement("video" /* VIDEO_EL */);
    }
    getTextTrackContainer() {
      return this.getElement("ccContainer" /* CC_CONTAINER */);
    }
    setVideoVolume(v) {
      const el = this.getVideo();
      if (!el || this.getVideoVolume() === v) {
        return;
      }
      el.volume = v;
    }
    getVideoVolume() {
      const el = this.getVideo();
      return el ? el.volume : null;
    }
    getMain() {
      return this.getElement("main" /* MAIN_CONTAINER */);
    }
    showAdClickElement(flag) {
      const el = this.getElement("adClickEl" /* AD_CLICK_EL */);
      if (el) {
        const l10nProxy = this.facade.retrieveProxy("LocalizationProxy" /* LocalizationProxy */);
        const txt = l10nProxy.localize("learn-more" /* LEARN_MORE */);
        if (txt) {
          el.innerHTML = txt;
        }
        el.style.display = flag !== false ? "block" : "none";
      }
    }
    getDimensions() {
      const r = this.getPresentationRect();
      return r ? { width: r.width, height: r.height } : null;
    }
    showContainer(name, flag) {
      const el = this.getElement(name);
      if (el) {
        el.style.display = flag ? "inline-block" : "none";
      }
    }
    showAdContainer(flag) {
      this.showContainer("adContainer" /* AD_CONTAINER */, flag);
    }
    getPresentationRect() {
      const m = this.getMain(), r = m && m.getBoundingClientRect();
      return r || null;
    }
    muteVideo(flag) {
      const v = this.getVideo(), att = "muted";
      if (v) {
        v.muted = flag;
        flag && v.setAttribute(att, att);
        !flag && v.removeAttribute(att);
      }
    }
    primeVideo(src = AppResources.blankDataUrl) {
      return Promise.resolve().then(() => {
        const v = this.getVideo();
        if (v) {
          v.src = src;
          v.load();
          return v.play().catch((e) => {
            if (v.error && v.src !== AppResources.blankDataUrl) {
              return this.primeVideo(AppResources.blankDataUrl);
            }
          });
        }
      });
    }
    setVideoAttribute(name, value) {
      const v = this.getVideo();
      v == null ? void 0 : v.setAttribute(name, value);
    }
    removeVideoAttribute(name) {
      const v = this.getVideo();
      v == null ? void 0 : v.removeAttribute(name);
    }
    // Recreates ad container and ad click element as well
    // (a co-requisite for GAM client-side ads)
    recreateVideo() {
      const video = createVideoElement();
      const parent = this.getElement("videoContainer" /* VIDEO_CONTAINER */);
      const previous = this.getElement("video" /* VIDEO_EL */);
      const mdlC = this.facade.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */);
      const presentationState = mdlC.getModel("PresentationState" /* PresentationState */);
      let vol, muted;
      if (previous) {
        previous.player = null;
        previous.avia = null;
        const exclude = ["src", "data-element-id"];
        vol = previous.volume;
        muted = previous.muted;
        Array.from(previous.attributes).filter((attribute) => !exclude.includes(attribute.name)).forEach((attribute) => video.setAttribute(attribute.name, attribute.value));
        parent.replaceChild(video, previous);
        this.sendNotification("videoelementremoved" /* VIDEO_ELEMENT_REMOVED */, { video: previous });
      } else {
        vol = presentationState.volume;
        muted = presentationState.isMuted;
        parent.appendChild(video);
      }
      presentationState.volume = vol;
      video.muted = muted;
      video.volume = vol;
      this.setModel({ ["video" /* VIDEO_EL */]: video });
      this.recreateAdElements();
      const appMediator = this.facade.retrieveMediator("AppMediator" /* APPLICATION */);
      video.player = appMediator.getAppApi();
      video.avia = System.appNamespace;
      this.sendNotification("videoelementadded" /* VIDEO_ELEMENT_ADDED */, { video });
    }
    // Ad elements are created by default to make their replacement
    // more straightforward; they should *always* be in the DOM
    recreateAdElements() {
      const adContainer = createAdContainer();
      const adClickEl = createAdClickEl();
      const parent = this.getMain();
      const prevAdCtr = this.getElement("adContainer" /* AD_CONTAINER */);
      const prevAdClickEl = this.getElement("adClickEl" /* AD_CLICK_EL */);
      parent.replaceChild(adContainer, prevAdCtr);
      parent.replaceChild(adClickEl, prevAdClickEl);
      this.setModel({
        ["adContainer" /* AD_CONTAINER */]: adContainer,
        ["adClickEl" /* AD_CLICK_EL */]: adClickEl
      });
    }
    get model() {
      return this.data;
    }
  };

  // src/model/TextTrackProxy.ts
  var TextTrackProxy = class extends Proxy2 {
    constructor(name, data = {}) {
      super(name, {
        native: data.native !== false,
        mode: "disabled" /* DISABLED */,
        language: data.language
      });
    }
    set mode(value) {
      this.data.mode = value;
    }
    get mode() {
      return this.data.mode;
    }
    set enabled(value) {
      if (value) {
        this.mode = this.enabledMode;
      } else {
        this.mode = "disabled" /* DISABLED */;
      }
    }
    get enabled() {
      return this.data.mode !== "disabled" /* DISABLED */;
    }
    get enabledMode() {
      return this.data.native ? "showing" /* SHOWING */ : "hidden" /* HIDDEN */;
    }
    get native() {
      return this.data.native;
    }
    set language(value) {
      this.data.language = value;
    }
    get language() {
      return this.data.language;
    }
  };

  // src/model/vo/Validator.ts
  var Validator = class {
    constructor() {
    }
    static checkType(val, type, allowNull) {
      if (typeof type === "string") {
        type = [type];
      }
      return allowNull && val === null ? true : type.some((t) => typeof val === t);
    }
    static notEmpty(obj) {
      return !isEmpty(obj);
    }
    static isArray(obj) {
      return Array.isArray(obj);
    }
    static validNumber(val, defVal) {
      return typeof val !== "number" ? defVal : val;
    }
    static isTypedArray(obj, type) {
      if (this.isArray(obj) && this.notEmpty(obj)) {
        let i = obj.length;
        while (i--) {
          if (typeof obj[i] !== type) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
    static isType(value, type) {
      return value instanceof type;
    }
    static isPositiveNumber(value) {
      return typeof value === "number" && value >= 0;
    }
  };

  // src/model/cfg/content_playback_state_config.ts
  var content_playback_state_config = {
    qualities: {
      type: "object",
      defaultValue: null
    },
    qualityInfo: {
      type: "object",
      defaultValue: null
    },
    audioTracks: {
      type: "object",
      defaultValue: null
    },
    textTracks: {
      type: "object",
      defaultValue: null
    },
    streamType: {
      type: "string",
      defaultValue: "VOD" /* VOD */
    },
    liveStreamInfo: {
      type: "object",
      defaultValue: null
    },
    bufferLength: {
      type: "number",
      defaultValue: 0
    },
    cdn: {
      type: "string",
      defaultValue: null,
      validator: Validator.notEmpty
    },
    drmType: {
      type: "string",
      defaultValue: null,
      validator: Validator.notEmpty
    },
    contentSegment: {
      type: "number",
      defaultValue: NaN
    },
    maxBandwidth: {
      type: "number",
      defaultValue: NaN
    },
    time: {
      type: "number",
      defaultValue: 0
    },
    state: {
      type: "string",
      defaultValue: "idle" /* IDLE */
    },
    duration: {
      type: "number",
      defaultValue: NaN
    },
    bitrate: {
      type: "number",
      defaultValue: NaN
    },
    started: {
      type: "boolean",
      defaultValue: false
    },
    averageDroppedFps: {
      type: "number",
      defaultValue: NaN
    },
    framerate: {
      type: "number",
      defaultValue: NaN
    }
  };

  // src/model/cfg/player_dom_config.ts
  var player_dom_config = {
    main: {
      type: "object",
      defaultValue: null
    },
    video: {
      type: "object",
      defaultValue: null
    },
    videoContainer: {
      type: "object",
      defaultValue: null
    },
    ccContainer: {
      type: "object",
      defaultValue: null
    },
    adContainer: {
      type: "object",
      defaultValue: null
    },
    panelContainer: {
      type: "object",
      defaultValue: null
    },
    adClickEl: {
      type: "object",
      defaultValue: null
    }
  };

  // src/model/cfg/player_options_config.ts
  var player_options_config = {
    container: {
      type: ["object", "string"],
      defaultValue: null
    },
    plugins: {
      type: "object",
      defaultValue: null
    },
    autoplay: {
      type: "string",
      defaultValue: "none" /* NONE */
    },
    id: {
      type: "string",
      defaultValue: null
    },
    networkErrorRecovery: {
      type: "object",
      defaultValue: null
    },
    networkTimeout: {
      type: "number",
      defaultValue: Network.TIMEOUT
    },
    performanceMode: {
      type: "string",
      defaultValue: "auto" /* AUTO */
    },
    renderTextTrackNatively: {
      type: "boolean",
      defaultValue: true
    },
    useNativeFullscreen: {
      type: "boolean",
      defaultValue: true
    },
    playsInline: {
      type: "boolean",
      defaultValue: true
    },
    useNativeControls: {
      type: "boolean",
      defaultValue: false
    },
    overrides: {
      type: "object",
      defaultValue: {}
    },
    logLevel: {
      type: "string",
      defaultValue: "off" /* OFF */
    },
    keyboardScope: {
      type: "string",
      defaultValue: "player" /* PLAYER */
    },
    language: {
      type: "string",
      defaultValue: null
    },
    audioLanguage: {
      type: "string",
      defaultValue: null
    },
    textLanguage: {
      type: "string",
      defaultValue: null
    },
    localizationLanguage: {
      type: "string",
      defaultValue: null
    },
    localization: {
      type: "object",
      defaultValue: null
    },
    idleDelay: {
      type: "number",
      defaultValue: 3e3
    },
    enableOm: {
      type: "boolean",
      defaultValue: false
    },
    enableMoat: {
      type: "boolean",
      defaultValue: false
    },
    reuseVideoElement: {
      type: "boolean",
      defaultValue: false
    },
    ignoreBlankTextTracks: {
      type: "boolean",
      defaultValue: false
    },
    sizeCheckInterval: {
      type: "number",
      defaultValue: 1e3
    }
  };

  // src/model/vo/Transformer.ts
  var Transformer = class {
    constructor() {
    }
    static clampValue(val, min, max) {
      if (typeof val !== "number") {
        return null;
      }
      return Math.max(min, Math.min(val, max));
    }
    static lowerCase(val) {
      return typeof val === "string" ? val.toLowerCase() : val;
    }
    static strToNum(val) {
      if (typeof val === "number") {
        return val;
      }
      if (typeof val === "string") {
        const pf = parseFloat(val);
        return isNaN(pf) ? val : pf;
      }
      return val;
    }
  };

  // src/model/cfg/presentation_state_config.ts
  var presentation_state_config = {
    streamTime: {
      type: "number",
      defaultValue: 0,
      setterTransformer: (value) => {
        return Validator.isPositiveNumber(value) ? value : 0;
      }
    },
    streamDuration: {
      type: "number",
      defaultValue: NaN,
      setterTransformer: (value) => {
        return Validator.isPositiveNumber(value) ? value : NaN;
      }
    },
    isAutoplay: {
      type: "boolean",
      defaultValue: false
    },
    isCurrentVideoAd: {
      type: "boolean",
      defaultValue: false
    },
    isFullscreen: {
      type: "boolean",
      defaultValue: false
    },
    isMuted: {
      type: "boolean",
      defaultValue: false
    },
    isMuteAtPlayStart: {
      type: "boolean",
      defaultValue: false
    },
    started: {
      type: "boolean",
      defaultValue: false
    },
    userHasUnmuted: {
      type: "boolean",
      defaultValue: false
    },
    volume: {
      type: "number",
      defaultValue: 1,
      setterTransformer: (value) => {
        return Transformer.clampValue(value, 0, 1);
      }
    },
    usesSsai: {
      type: "boolean",
      defaultValue: false
    },
    streamId: {
      type: "string",
      defaultValue: null
    },
    suspended: {
      type: "boolean",
      defaultValue: false
    }
  };

  // src/model/cfg/config.ts
  var config = {
    content_playback_state_config,
    player_dom_config,
    player_options_config,
    presentation_state_config
  };

  // src/model/vo/Generator.ts
  var Generator = class {
    constructor() {
    }
    static generateModel(scope, config2, dataContainer, defaultValueContainer) {
      for (const q in config2) {
        this.createProperty(q, config2[q], scope, dataContainer, defaultValueContainer);
      }
    }
    static createProperty(name, config2, scope, dataCtr, defaultValueCtr) {
      const validator = config2.validator, type = config2.type, defValue = config2.defaultValue, enumerable = config2.enumerable !== false, setterTransformer = this.getTransformer(config2, "setter", scope), getterTransformer = this.getTransformer(config2, "getter", scope);
      if (config2.writable === false) {
        Object.defineProperty(scope, name, {
          enumerable,
          value: defValue,
          writable: false
        });
        dataCtr[name] = defValue;
      } else {
        Object.defineProperty(scope, name, {
          enumerable,
          set: function(val) {
            const txVal = setterTransformer(val);
            if (validator && !validator(txVal)) {
              Logger.warn(`Invalid value '${txVal}' for property ${name}`);
              return;
            }
            if (!Validator.checkType(txVal, type, defValue == null)) {
              Logger.warn(`Invalid type supplied for property ${name}`);
              return;
            }
            dataCtr[name] = txVal;
          },
          get: function() {
            return getterTransformer(dataCtr[name]);
          }
        });
        dataCtr[name] = defValue;
      }
      defaultValueCtr[name] = defValue;
    }
    static getTransformer(pCfg, which, scope) {
      const tx = pCfg[which + "Transformer"];
      if (tx && typeof tx === "function") {
        return tx.bind(scope);
      }
      return this.blankTransformer;
    }
    static blankTransformer(val) {
      return val;
    }
  };

  // src/model/vo/ConfigurablePropertyContainer.ts
  var ConfigurablePropertyContainer = class {
    constructor(config2) {
      this.pData = {};
      this.defaultValues = {};
      Generator.generateModel(this, config2, this.pData, this.defaultValues);
    }
    /**
     * Returns a cloned, "read-only" object
     * (i.e, modifying values on this object has no effect on model)
     */
    get data() {
      return Object.assign({}, this.pData);
    }
    reset() {
      for (const q in this.defaultValues) {
        this.pData[q] = this.defaultValues[q];
      }
    }
  };

  // src/model/vo/ContentPlaybackState.ts
  var ContentPlaybackState = class {
    constructor(config2) {
      this.model = new ConfigurablePropertyContainer(config2);
    }
    static get modelName() {
      return "ContentPlaybackState";
    }
    get data() {
      return this.model.data;
    }
    reset() {
      this.model.reset();
    }
    set qualities(value) {
      this.model.qualities = value;
    }
    get qualities() {
      return this.model.qualities;
    }
    set qualityInfo(value) {
      this.model.qualityInfo = value;
    }
    get qualityInfo() {
      return this.model.qualityInfo;
    }
    set audioTracks(value) {
      this.model.audioTracks = value;
    }
    get audioTracks() {
      return this.model.audioTracks;
    }
    set textTracks(value) {
      this.model.textTracks = value;
    }
    get textTracks() {
      return this.model.textTracks;
    }
    set streamType(value) {
      this.model.streamType = value;
    }
    get streamType() {
      return this.model.streamType;
    }
    set liveStreamInfo(value) {
      this.model.liveStreamInfo = value;
    }
    get liveStreamInfo() {
      return this.model.liveStreamInfo;
    }
    set bufferLength(value) {
      this.model.bufferLength = value;
    }
    get bufferLength() {
      return this.model.bufferLength;
    }
    set cdn(value) {
      this.model.cdn = value;
    }
    get cdn() {
      return this.model.cdn;
    }
    set drmType(value) {
      this.model.drmType = value;
    }
    get drmType() {
      return this.model.drmType;
    }
    set contentSegment(value) {
      this.model.contentSegment = value;
    }
    get contentSegment() {
      return this.model.contentSegment;
    }
    set maxBandwidth(value) {
      this.model.maxBandwidth = value;
    }
    get maxBandwidth() {
      return this.model.maxBandwidth;
    }
    set time(value) {
      this.model.time = value;
    }
    get time() {
      return this.model.time;
    }
    set state(value) {
      this.model.state = value;
    }
    get state() {
      return this.model.state;
    }
    set duration(value) {
      this.model.duration = value;
    }
    get duration() {
      return this.model.duration;
    }
    set bitrate(value) {
      this.model.bitrate = value;
    }
    get bitrate() {
      return this.model.bitrate;
    }
    set started(value) {
      this.model.started = value;
    }
    get started() {
      return this.model.started;
    }
    set averageDroppedFps(value) {
      this.model.averageDroppedFps = value;
    }
    get averageDroppedFps() {
      return this.model.averageDroppedFps;
    }
    set framerate(value) {
      this.model.framerate = value;
    }
    get framerate() {
      return this.model.framerate;
    }
  };

  // src/model/vo/PlayerDom.ts
  var PlayerDom2 = class {
    constructor(config2) {
      this.model = new ConfigurablePropertyContainer(config2);
    }
    static get modelName() {
      return "PlayerDom";
    }
    get data() {
      return this.model.data;
    }
    reset() {
      this.model.reset();
    }
    set main(value) {
      this.model.main = value;
    }
    get main() {
      return this.model.main;
    }
    set video(value) {
      this.model.video = value;
    }
    get video() {
      return this.model.video;
    }
    set videoContainer(value) {
      this.model.videoContainer = value;
    }
    get videoContainer() {
      return this.model.videoContainer;
    }
    set ccContainer(value) {
      this.model.ccContainer = value;
    }
    get ccContainer() {
      return this.model.ccContainer;
    }
    set adContainer(value) {
      this.model.adContainer = value;
    }
    get adContainer() {
      return this.model.adContainer;
    }
    set panelContainer(value) {
      this.model.panelContainer = value;
    }
    get panelContainer() {
      return this.model.panelContainer;
    }
    set adClickEl(value) {
      this.model.adClickEl = value;
    }
    get adClickEl() {
      return this.model.adClickEl;
    }
    set style(value) {
      this.model.style = value;
    }
    get style() {
      return this.model.style;
    }
  };

  // src/model/vo/PlayerOptions.ts
  var PlayerOptions2 = class {
    constructor(config2) {
      this.model = new ConfigurablePropertyContainer(config2);
    }
    static get modelName() {
      return "PlayerOptions";
    }
    get data() {
      return this.model.data;
    }
    reset() {
      this.model.reset();
    }
    set container(value) {
      this.model.container = value;
    }
    get container() {
      return this.model.container;
    }
    set plugins(value) {
      this.model.plugins = value;
    }
    get plugins() {
      return this.model.plugins;
    }
    set autoplay(value) {
      this.model.autoplay = value;
    }
    get autoplay() {
      return this.model.autoplay;
    }
    set id(value) {
      this.model.id = value;
    }
    get id() {
      return this.model.id;
    }
    set networkErrorRecovery(value) {
      this.model.networkErrorRecovery = value;
    }
    get networkErrorRecovery() {
      return this.model.networkErrorRecovery;
    }
    set networkTimeout(value) {
      this.model.networkTimeout = value;
    }
    get networkTimeout() {
      return this.model.networkTimeout;
    }
    set performanceMode(value) {
      this.model.performanceMode = value;
    }
    get performanceMode() {
      return this.model.performanceMode;
    }
    set renderTextTrackNatively(value) {
      this.model.renderTextTrackNatively = value;
    }
    get renderTextTrackNatively() {
      return this.model.renderTextTrackNatively;
    }
    set useNativeFullscreen(value) {
      this.model.useNativeFullscreen = value;
    }
    get useNativeFullscreen() {
      return this.model.useNativeFullscreen;
    }
    set keyboardScope(value) {
      this.model.keyboardScope = value;
    }
    get keyboardScope() {
      return this.model.keyboardScope;
    }
    set playsInline(value) {
      this.model.playsInline = value;
    }
    get playsInline() {
      return this.model.playsInline;
    }
    set useNativeControls(value) {
      this.model.useNativeControls = value;
    }
    get useNativeControls() {
      return this.model.useNativeControls;
    }
    set overrides(value) {
      this.model.overrides = value;
    }
    get overrides() {
      return this.model.overrides;
    }
    set logLevel(value) {
      this.model.logLevel = value;
    }
    get logLevel() {
      return this.model.logLevel;
    }
    set language(value) {
      this.model.language = value;
    }
    get language() {
      return this.model.language;
    }
    set audioLanguage(value) {
      this.model.audioLanguage = value;
    }
    get audioLanguage() {
      return this.model.audioLanguage;
    }
    set textLanguage(value) {
      this.model.textLanguage = value;
    }
    get textLanguage() {
      return this.model.textLanguage;
    }
    set localizationLanguage(value) {
      this.model.localizationLanguage = value;
    }
    get localizationLanguage() {
      return this.model.localizationLanguage;
    }
    set localization(value) {
      this.model.localization = value;
    }
    get localization() {
      return this.model.localization;
    }
    set idleDelay(value) {
      this.model.idleDelay = value;
    }
    get idleDelay() {
      return this.model.idleDelay;
    }
    set enableOm(value) {
      this.model.enableOm = value;
    }
    get enableOm() {
      return this.model.enableOm;
    }
    set enableMoat(value) {
      this.model.enableMoat = value;
    }
    get enableMoat() {
      return this.model.enableMoat;
    }
    set reuseVideoElement(value) {
      this.model.reuseVideoElement = value;
    }
    get reuseVideoElement() {
      return this.model.reuseVideoElement;
    }
    set ignoreBlankTextTracks(value) {
      this.model.ignoreBlankTextTracks = value;
    }
    get ignoreBlankTextTracks() {
      return this.model.ignoreBlankTextTracks;
    }
    set sizeCheckInterval(value) {
      this.model.sizeCheckInterval = value;
    }
    get sizeCheckInterval() {
      return this.model.sizeCheckInterval;
    }
  };

  // src/model/vo/PresentationState.ts
  var PresentationState = class {
    constructor(config2) {
      this.model = new ConfigurablePropertyContainer(config2);
    }
    static get modelName() {
      return "PresentationState";
    }
    get data() {
      return this.model.data;
    }
    reset() {
      this.model.reset();
    }
    set streamTime(value) {
      this.model.streamTime = value;
    }
    get streamTime() {
      return this.model.streamTime;
    }
    set streamDuration(value) {
      this.model.streamDuration = value;
    }
    get streamDuration() {
      return this.model.streamDuration;
    }
    set isAutoplay(value) {
      this.model.isAutoplay = value;
    }
    get isAutoplay() {
      return this.model.isAutoplay;
    }
    set isCurrentVideoAd(value) {
      this.model.isCurrentVideoAd = value;
    }
    get isCurrentVideoAd() {
      return this.model.isCurrentVideoAd;
    }
    set isFullscreen(value) {
      this.model.isFullscreen = value;
    }
    get isFullscreen() {
      return this.model.isFullscreen;
    }
    set isMuted(value) {
      this.model.isMuted = value;
    }
    get isMuted() {
      return this.model.isMuted;
    }
    set isMuteAtPlayStart(value) {
      this.model.isMuteAtPlayStart = value;
    }
    get isMuteAtPlayStart() {
      return this.model.isMuteAtPlayStart;
    }
    set started(value) {
      this.model.started = value;
    }
    get started() {
      return this.model.started;
    }
    set userHasUnmuted(value) {
      this.model.userHasUnmuted = value;
    }
    get userHasUnmuted() {
      return this.model.userHasUnmuted;
    }
    set volume(value) {
      this.model.volume = value;
    }
    get volume() {
      return this.model.volume;
    }
    set usesSsai(value) {
      this.model.usesSsai = value;
    }
    get usesSsai() {
      return this.model.usesSsai;
    }
    set streamId(value) {
      this.model.streamId = value;
    }
    get streamId() {
      return this.model.streamId;
    }
    set suspended(value) {
      this.model.suspended = value;
    }
    get suspended() {
      return this.model.suspended;
    }
  };

  // src/model/vo/ModelCollection.ts
  var ModelCollection = class {
    constructor() {
      this.mdlCollection = {};
      this.createModels();
    }
    destroy() {
      for (const q in this.mdlCollection) {
        delete this.mdlCollection[q];
      }
      this.mdlCollection = null;
    }
    getModel(name) {
      return this.mdlCollection[name];
    }
    get ContentPlaybackState() {
      return this.mdlCollection.ContentPlaybackState;
    }
    get PlayerDom() {
      return this.mdlCollection.PlayerDom;
    }
    get PlayerOptions() {
      return this.mdlCollection.PlayerOptions;
    }
    get PresentationState() {
      return this.mdlCollection.PresentationState;
    }
    createModels() {
      const models = [
        ContentPlaybackState,
        PlayerDom2,
        PlayerOptions2,
        PresentationState
      ];
      let i = models.length;
      while (i--) {
        const c = models[i];
        const n = c.modelName;
        const cfg = config[this.classToCfgName(n)];
        this.mdlCollection[n] = new c(cfg);
      }
    }
    classToCfgName(str) {
      return str.replace(/(?:^|\.?)([A-Z])/g, function(x, y) {
        return "_" + y.toLowerCase();
      }).replace(/^_/, "") + "_config";
    }
  };

  // src/controller/boot/PrepModelCommand.ts
  var PrepModelCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const sys = this.system;
      const mdlColl = new ModelCollection();
      const mdlCollProxy = new ModelCollectionProxy("ModelCollectionProxy" /* ModelCollectionProxy */, mdlColl);
      const playerOptions = notification.body.playerOptions;
      this.facade.registerProxy(mdlCollProxy);
      this.setPlayerOptions(mdlCollProxy, playerOptions);
      this.facade.registerProxy(new PerformanceProxy("PerformanceProxy" /* PerformanceProxy */));
      const loc = new LocalizationProxy("LocalizationProxy" /* LocalizationProxy */, playerOptions.localizationLanguage);
      this.facade.registerProxy(loc);
      this.facade.registerProxy(new TextTrackProxy("TextTrackProxy" /* TextTrackProxy */, { native: playerOptions.renderTextTrackNatively, language: playerOptions.textLanguage }));
      sys.isBrowser && this.createDomProxy(mdlCollProxy);
      this.facade.registerProxy(new AdapterProxy());
      this.log("debug" /* DEBUG */, "Model prepared");
    }
    setPlayerOptions(proxy, options) {
      const model = proxy.getModel("PlayerOptions" /* PlayerOptions */);
      for (const q in options) {
        !isUndefined(model[q]) && (model[q] = options[q]);
      }
    }
    createDomProxy(proxy) {
      const mdl = proxy.getModel("PlayerDom" /* PlayerDom */), domCollProxy = new PlayerDomProxy("PlayerDomProxy" /* PlayerDomProxy */, mdl);
      this.facade.registerProxy(domCollProxy);
    }
  };

  // src/app/PluginServices.ts
  var PluginServices = class {
    constructor(options) {
      // TODO  namespace needed?
      this.event = {
        dispatchPluginEvent: (data) => {
          this.options.dispatch(data);
        }
      };
      // TODO  need here?
      this.util = {
        queryStrFromObj(obj, encode) {
          return QueryString.encode(obj);
        }
      };
      this.options = options;
    }
    get player() {
      return this.options.player;
    }
    get logger() {
      return this.options.logger;
    }
    get system() {
      return System;
    }
    get appNamespace() {
      return this.system.appNamespace;
    }
    get avia() {
      return this.system.appNamespace;
    }
    get playerOptions() {
      return this.options.playerOptions;
    }
    get buildInfo() {
      return buildInfo;
    }
    get localization() {
      return this.options.localization;
    }
    get dom() {
      const { domProxy } = this.options;
      return {
        main: domProxy == null ? void 0 : domProxy.getMain(),
        get video() {
          return domProxy == null ? void 0 : domProxy.getVideo();
        },
        videoContainer: domProxy == null ? void 0 : domProxy.getElement("videoContainer" /* VIDEO_CONTAINER */),
        ccContainer: domProxy == null ? void 0 : domProxy.getElement("ccContainer" /* CC_CONTAINER */),
        adContainer: domProxy == null ? void 0 : domProxy.getElement("adContainer" /* AD_CONTAINER */),
        adClickEl: domProxy == null ? void 0 : domProxy.getElement("adClickEl" /* AD_CLICK_EL */),
        style: domProxy == null ? void 0 : domProxy.getElement("style" /* STYLE */)
      };
    }
    get hookManager() {
      return this.options.hookManager;
    }
  };

  // src/view/PluginMediator.ts
  var PluginMediator = class extends LogAwareMediator {
    constructor() {
      super(...arguments);
      this.plugins = {};
      this.pendingLoads = null;
      this.services = null;
    }
    onRemove() {
      Object.keys(this.plugins).forEach((id) => {
        try {
          this.killPlugin(id);
        } catch (error) {
          this.logger.warn(`Error destroying plugin: ${id}`, error);
        }
      });
      this.plugins = null;
      this.pendingLoads = null;
      this.services = null;
      super.onRemove();
    }
    removePlugin(id) {
      this.killPlugin(id);
    }
    getPlugin(id) {
      return this.plugins[id] || null;
    }
    loadPlugin(cfg) {
      return this.createPlugin(cfg);
    }
    listNotificationInterests() {
      return [
        "loadPlugins" /* LOAD_PLUGINS */,
        "adbreakstart" /* AD_BREAK_START */,
        "contentstart" /* CONTENT_START */,
        "removePlugin" /* REMOVE_PLUGIN */
      ];
    }
    handleNotification(notification) {
      switch (notification.name) {
        case "loadPlugins" /* LOAD_PLUGINS */:
          this.loadPlugins(notification.body);
          break;
        case "removePlugin" /* REMOVE_PLUGIN */:
          this.removePlugin(notification.body.name);
          break;
        case "adbreakstart" /* AD_BREAK_START */:
        case "contentstart" /* CONTENT_START */:
          this.loadPendingPlugins();
          break;
      }
    }
    createPluginServices() {
      const am = this.facade.retrieveMediator("AppMediator" /* APPLICATION */);
      return new PluginServices({
        player: am.getAppApi(),
        domProxy: this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */),
        localization: this.facade.retrieveProxy("LocalizationProxy" /* LocalizationProxy */).getApi(),
        playerOptions: this.playerOptions,
        dispatch: (data) => {
          am.dispatchPluginEvent(data);
        },
        hookManager: this.facade.retrieveProxy("HookProxy" /* HookProxy */),
        logger: this.logger
      });
    }
    get playerOptions() {
      return this.getModel("PlayerOptions" /* PlayerOptions */).data;
    }
    initPluginServices() {
      if (this.services) {
        return;
      }
      this.services = this.createPluginServices();
    }
    createPlugins(plugins, callback) {
      return Promise.all(plugins.map((plugin) => this.createPlugin(plugin))).then(() => callback == null ? void 0 : callback());
    }
    createPlugin(config2) {
      return __async(this, null, function* () {
        var _a;
        const { factory, options } = config2;
        if (!isFunction(factory)) {
          throw new Error("Invalid plugin factory");
        }
        const plugin = yield factory(this.services, options);
        if (!plugin) {
          return;
        }
        const id = (_a = plugin.getId) == null ? void 0 : _a.call(plugin);
        if (!id) {
          throw new Error("Invalid plugin ID");
        }
        this.plugins[id] = plugin;
        this.log("info" /* INFO */, `Created plugin '${id}'`);
        return plugin;
      });
    }
    killPlugin(id) {
      const plugin = this.plugins[id];
      if (!plugin) {
        return;
      }
      if (isFunction(plugin.destroy)) {
        plugin.destroy();
      }
      delete this.plugins[id];
    }
    loadPendingPlugins() {
      if (!this.pendingLoads) {
        return;
      }
      this.createPlugins(this.pendingLoads);
      this.pendingLoads = null;
    }
    loadPlugins(obj) {
      const plugins = obj.plugins || this.playerOptions.plugins;
      const ps = this.getModel("PresentationState" /* PresentationState */);
      const notStarted = !ps.started;
      const callback = obj.callback;
      if (!(plugins == null ? void 0 : plugins.length)) {
        callback == null ? void 0 : callback();
        return;
      }
      this.initPluginServices();
      const low = plugins.filter((plugin) => plugin.priority === "low" /* LOW */);
      const high = plugins.filter((plugin) => plugin.priority !== "low" /* LOW */);
      if (notStarted) {
        this.pendingLoads = low;
      }
      const queue2 = notStarted ? high : low.concat(high);
      this.createPlugins(queue2, callback);
    }
  };

  // src/controller/boot/PrepPluginsCommand.ts
  var PrepPluginsCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const f = this.facade;
      f.registerMediator(new PluginMediator("PluginMediator" /* PLUGIN_MEDIATOR */));
      this.log("debug" /* DEBUG */, "Plugins Prepared");
    }
  };

  // src/controller/boot/PrepTimerCommand.ts
  var PrepTimerCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const f = this.facade;
      f.registerMediator(new TimerMediator("TimerMediator" /* TIMER_MEDIATOR */));
      this.log("debug" /* DEBUG */, "Timer mediator registered");
    }
  };

  // src/view/AppMediator.ts
  var AppMediator = class extends LogAwareMediator {
    constructor(name, app) {
      super(name);
      this.app = app;
    }
    get presentationMediator() {
      return this.facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
    }
    getBuffered(asStreamTime = false) {
      return this.presentationMediator.getBuffered(asStreamTime);
    }
    primeVideoElement() {
      var _a;
      const domProxy = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
      const opts = this.getModel("PlayerOptions" /* PlayerOptions */);
      return domProxy.primeVideo((_a = opts.overrides) == null ? void 0 : _a.blankVideoUrl);
    }
    offsetTimedText(pixelOffset) {
      var _a;
      (_a = this.presentationMediator) == null ? void 0 : _a.offsetTimedText(pixelOffset);
    }
    setFullscreenElement(el) {
      const fsm = this.facade.retrieveMediator("FullscreenMediator" /* FULLSCREEN */);
      fsm.fullscreenElement = el;
    }
    getFullscreenElement() {
      const fsm = this.facade.retrieveMediator("FullscreenMediator" /* FULLSCREEN */);
      return fsm.fullscreenElement;
    }
    getSessionTime() {
      var _a;
      return ((_a = this.presentationMediator) == null ? void 0 : _a.getSessionTime()) || null;
    }
    getPlaybackTime() {
      var _a;
      return ((_a = this.presentationMediator) == null ? void 0 : _a.getPlaybackTime()) || null;
    }
    updateDimensions() {
      var _a;
      (_a = this.presentationMediator) == null ? void 0 : _a.checkSize();
    }
    onRemove() {
      this.app = null;
      super.onRemove();
    }
    getAppApi() {
      return this.app.getApi();
    }
    getConfigAsJson(spacing = 2) {
      const model = this.getProxy("ModelCollectionProxy" /* ModelCollectionProxy */);
      const playerOptions = model.getModel("PlayerOptions" /* PlayerOptions */).data;
      return JSON.stringify(
        {
          resource: this.getCurrentResource(),
          playerOptions,
          buildInfo
        },
        (key, value) => value instanceof HTMLElement ? void 0 : value,
        spacing
      );
    }
    validateSeek(position, duration) {
      if (isNaN(position)) {
        this.log("warn" /* WARN */, `Invalid seek() time [${position}] supplied`);
        return null;
      }
      const pm = this.getModel("PresentationState" /* PresentationState */);
      const pbp = this.getProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
      const linear = pbp && pbp.model.streamType === "LIVE" /* LIVE */;
      if (!pm || !pbp || pm.isCurrentVideoAd || linear) {
        this.log("warn" /* WARN */, "seek() may not be called in the current context");
        return null;
      }
      return clampValue(position, 0, duration);
    }
    isPlaybackSuspended() {
      const pm = this.getModel("PresentationState" /* PresentationState */);
      return pm.suspended;
    }
    getContainerRect() {
      const domProxy = this.getProxy("PlayerDomProxy" /* PlayerDomProxy */);
      return domProxy ? domProxy.getPresentationRect() : null;
    }
    getCurrentResource() {
      const p = this.getProxy("ResourceProxy" /* ResourceProxy */);
      return (p == null ? void 0 : p.resource) || null;
    }
    killCurrentResource() {
      const resourceProxy = this.getProxy("ResourceProxy" /* ResourceProxy */);
      if (!resourceProxy) {
        return Promise.resolve();
      }
      const resource = resourceProxy.resource;
      const playbackProxy = this.getProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
      const isLive = playbackProxy.model.streamType === "LIVE" /* LIVE */ || playbackProxy.model.streamType === "DVR" /* DVR */;
      const pm = this.presentationMediator;
      this.log("info" /* INFO */, "Killing current resource");
      if (pm) {
        return pm.close().then(() => {
          isLive && this.sendNotification("livepresentationstopped" /* LIVE_PRESENTATION_STOPPED */, { resource });
        }).catch((e) => {
          Logger.error(e);
        });
      } else {
        return Promise.resolve();
      }
    }
    skipAd() {
      const pm = this.presentationMediator;
      pm.skipAd();
    }
    getPlugin(name) {
      const pim = this.facade.retrieveMediator("PluginMediator" /* PLUGIN_MEDIATOR */);
      return pim ? pim.getPlugin(name) : null;
    }
    dispatchPluginEvent(data) {
      this.app.sendEvent("pluginevent" /* PLUGIN_EVENT */, data);
    }
    getMuteState() {
      const presoModel = this.getModel("PresentationState" /* PresentationState */);
      return presoModel ? presoModel.isMuted : null;
    }
    getVolume() {
      const presoModel = this.getModel("PresentationState" /* PresentationState */);
      return presoModel ? presoModel.volume : NaN;
    }
    getDimensions() {
      const domProxy = this.getProxy("PlayerDomProxy" /* PlayerDomProxy */);
      return domProxy ? domProxy.getDimensions() : null;
    }
    getAdBreakTimes() {
      var _a;
      return ((_a = this.presentationMediator) == null ? void 0 : _a.getAdBreakTimes()) || null;
    }
    grabFrame() {
      const domProxy = this.getProxy("PlayerDomProxy" /* PlayerDomProxy */);
      const vidEl = domProxy == null ? void 0 : domProxy.getVideo();
      if (!vidEl) {
        return null;
      }
      const cvs = document.createElement("canvas");
      const ctx = cvs.getContext("2d");
      const w = cvs.width = vidEl.videoWidth;
      const h = cvs.height = vidEl.videoHeight;
      ctx.drawImage(vidEl, 0, 0, w, h);
      const dUrl = cvs.toDataURL();
      const img = document.createElement("img");
      img.setAttribute("src", dUrl);
      return img;
    }
    getKeyEventTarget() {
      const kcm = this.facade.retrieveMediator("KeyCommandMediator" /* KEY_COMMAND */);
      return kcm.getEventTarget();
    }
    disableKeyCommands(flag = true) {
      var _a;
      const kcm = (_a = this.facade) == null ? void 0 : _a.retrieveMediator("KeyCommandMediator" /* KEY_COMMAND */);
      if (flag) {
        kcm == null ? void 0 : kcm.disable();
      } else {
        kcm == null ? void 0 : kcm.enable();
      }
    }
    listNotificationInterests() {
      return values(PlayerEvent);
    }
    sendErrorEvent(type, error) {
      this.app.sendEvent(type, error);
    }
    handleNotification(notification) {
      this.app.sendEvent(notification.name, notification.body);
    }
    onRegister() {
      super.onRegister();
    }
  };

  // src/view/FullscreenMediator.ts
  var import_screenfull2 = __toESM(require_screenfull(), 1);
  var FullscreenMediator = class extends LogAwareMediator {
    constructor(name, viewControl) {
      super(name, viewControl);
      this.isFullscreen = false;
      this.fsElement = null;
      this.enabled = false;
      this.pIsAndroidFirefox = null;
      this.fsApiSupported = true;
      this.fsMgr = null;
      this.useCustomFullscreen = true;
      this.metadataLoadedDelayHandle = null;
      this.iosPropNames = {
        ENTER_EVENT: "webkitbeginfullscreen",
        EXIT_EVENT: "webkitendfullscreen",
        ENTER_METHOD: "webkitEnterFullscreen",
        EXIT_METHOD: "webkitExitFullscreen",
        SUPPORTED: "webkitSupportsFullscreen"
      };
      this.fsMgr = import_screenfull2.default;
      this.changeHandler = (e) => this.hChange(e);
    }
    set fullscreenElement(el) {
      if (!(el instanceof HTMLElement)) {
        return;
      }
      const sys = this.system;
      if (!sys.isIos && !sys.isAndroid) {
        this.fsElement = el;
      }
    }
    get fullscreenElement() {
      return this.fsElement;
    }
    onRemove() {
      clearTimeout(this.metadataLoadedDelayHandle);
      if (!this.fsApiSupported && this.fsElement) {
        this.fsElement.removeEventListener(this.iosPropNames.ENTER_EVENT, this.changeHandler);
        this.fsElement.removeEventListener(this.iosPropNames.EXIT_EVENT, this.changeHandler);
      }
      if (this.fsMgr && isFunction(this.fsMgr.off)) {
        this.fsMgr.off("change", this.changeHandler);
      }
      this.fsElement = null;
      this.fsMgr = null;
      super.onRemove();
    }
    enter() {
      if (!this.enabled) {
        return;
      }
      if (this.useCustomFullscreen) {
        this.isFullscreen = true;
        this.sendFullscreenNotification();
        return;
      }
      this.fsApiSupported ? this.fsMgr.request(this.fsElement) : this.enterFsIos();
    }
    exit() {
      if (!this.enabled) {
        return;
      }
      if (this.useCustomFullscreen) {
        this.isFullscreen = false;
        this.sendFullscreenNotification();
        return;
      }
      this.fsApiSupported ? this.fsMgr.exit() : this.exitFsIos();
    }
    isFullScreenPermitted() {
      return this.enabled;
    }
    isFullScreen() {
      return this.isFullscreen;
    }
    ///////////////////////////////////
    // PRIVATE / MVC
    get isAndroidFirefox() {
      if (this.pIsAndroidFirefox == null) {
        const sys = this.system;
        this.pIsAndroidFirefox = sys.os === "Android" /* ANDROID */ && sys.browser === "Firefox" /* FIREFOX */;
      }
      return this.pIsAndroidFirefox;
    }
    handleNotification(notification) {
      const n = notification.name;
      if (n === "videoelementadded" /* VIDEO_ELEMENT_ADDED */) {
        this.onRegister();
        return;
      }
      if (n === "streammetadata" /* STREAM_METADATA */) {
        this.metadataLoadedDelayHandle = setTimeout(() => this.handleMetadataLoaded(), 20);
        return;
      }
      if (!this.enabled) {
        return;
      }
      const enter = n === "enterFullscreenRequest" /* ENTER_FULLSCREEN_REQUEST */;
      enter ? this.enter() : this.exit();
    }
    listNotificationInterests() {
      return [
        "videoelementadded" /* VIDEO_ELEMENT_ADDED */,
        "streammetadata" /* STREAM_METADATA */,
        "enterFullscreenRequest" /* ENTER_FULLSCREEN_REQUEST */,
        "exitFullscreenRequest" /* EXIT_FULLSCREEN_REQUEST */
      ];
    }
    handleMetadataLoaded() {
      this.enabled = this.enabled || this.webkitIosEnabled();
      this.enabled && this.sendNotification("fullscreenAvailable" /* FULLSCREEN_AVAILABLE */, null);
    }
    hChange(e) {
      this.isFullscreen = this.fsApiSupported ? import_screenfull2.default.isFullscreen : this.checkWebkitIosState(e);
      if (this.isAndroidFirefox) {
        this.isFullscreen && this.fsElement.setAttribute("controls", "");
        !this.isFullscreen && this.fsElement.removeAttribute("controls");
      }
      this.sendFullscreenNotification();
    }
    sendFullscreenNotification() {
      this.sendNotification(
        "fullscreenChange" /* FULLSCREEN_CHANGE */,
        { isFullscreen: this.isFullscreen },
        "internal" /* INTERNAL */
      );
    }
    enterFsIos() {
      this.fsElement[this.iosPropNames.ENTER_METHOD]();
    }
    exitFsIos() {
      this.fsElement[this.iosPropNames.EXIT_METHOD]();
    }
    webkitIosEnabled() {
      return this.system.isIos && this.fsElement[this.iosPropNames.SUPPORTED];
    }
    checkWebkitIosState(e) {
      return e.type === this.iosPropNames.ENTER_EVENT;
    }
    onRegister() {
      this.useCustomFullscreen = !this.getModel("PlayerOptions" /* PlayerOptions */).useNativeFullscreen;
      if (this.useCustomFullscreen) {
        this.enabled = true;
        return;
      }
      const dp = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
      const supportsFsApi = this.fsMgr.isEnabled;
      if (!supportsFsApi) {
        this.fsApiSupported = false;
        this.fsElement = dp.getVideo();
      } else {
        this.fsElement = dp.getMain();
      }
      if (this.fsApiSupported && this.fsElement && this.fsMgr.isEnabled) {
        this.enabled = true;
        this.fsMgr.on("change", this.changeHandler);
      } else if (this.fsElement && !this.fsApiSupported) {
        this.fsElement.addEventListener(this.iosPropNames.ENTER_EVENT, this.changeHandler);
        this.fsElement.addEventListener(this.iosPropNames.EXIT_EVENT, this.changeHandler);
      }
    }
  };

  // src/view/a11y/KeyCode.ts
  var KeyCode = {
    ALT: 18,
    BACKSPACE: 8,
    CAPS_LOCK: 20,
    CONTROL: 17,
    END: 35,
    ENTER: 13,
    TAB: 9,
    SHIFT: 16,
    ESCAPE: 27,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    INSERT: 45,
    DELETE: 46,
    SPACE: 32,
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    NUM_0: 96,
    NUM_1: 97,
    NUM_2: 98,
    NUM_3: 99,
    NUM_4: 100,
    NUM_5: 101,
    NUM_6: 102,
    NUM_7: 103,
    NUM_8: 104,
    NUM_9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBTRACT: 109,
    DECIMAL: 110,
    DIVIDE: 111,
    SEMICOLON: 186,
    EQUAL: 187,
    COMMA: 188,
    DASH: 189,
    PERIOD: 190,
    FORWARD_SLASH: 191,
    BACKSLASH: 220,
    GRAVE_ACCENT: 192,
    OPEN_BRACKET: 219,
    CLOSE_BRACKET: 221,
    SINGLE_QUOTE: 222,
    MEDIA_TOGGLE_PLAY: 179,
    MEDIA_TOGGLE_MUTE: 173,
    MEDIA_STOP: 178,
    MEDIA_INCREASE_VOLUME: 175,
    MEDIA_INCREASE_VOLUME_ALT: 183,
    MEDIA_DECREASE_VOLUME: 174,
    MEDIA_DECREASE_VOLUME_ALT: 182,
    MEDIA_PLAYLIST_NEXT: 176,
    MEDIA_PLAYLIST_PREV: 177
  };

  // src/view/a11y/a11yKeyCommands.ts
  var a11yKeyCommands = [
    {
      action: "enterFullScreen" /* ENTER_FULLSCREEN */,
      primaryKey: "f",
      keyCode: KeyCode.F
    },
    {
      action: "increaseVolume" /* INCREASE_VOLUME */,
      primaryKey: "ArrowUp" /* ARROW_UP */,
      keyCode: KeyCode.UP_ARROW
    },
    {
      action: "increaseVolume" /* INCREASE_VOLUME */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_INCREASE_VOLUME
    },
    {
      action: "increaseVolume" /* INCREASE_VOLUME */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_INCREASE_VOLUME_ALT
    },
    {
      action: "decreaseVolume" /* DECREASE_VOLUME */,
      primaryKey: "ArrowDown" /* ARROW_DOWN */,
      keyCode: KeyCode.DOWN_ARROW
    },
    {
      action: "decreaseVolume" /* DECREASE_VOLUME */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_DECREASE_VOLUME
    },
    {
      action: "decreaseVolume" /* DECREASE_VOLUME */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_DECREASE_VOLUME_ALT
    },
    {
      action: "seekBack" /* SEEK_BACK */,
      primaryKey: "ArrowLeft" /* ARROW_LEFT */,
      keyCode: KeyCode.LEFT_ARROW
    },
    {
      action: "seekForward" /* SEEK_FORWARD */,
      primaryKey: "ArrowRight" /* ARROW_RIGHT */,
      keyCode: KeyCode.RIGHT_ARROW
    },
    {
      action: "togglePlay" /* TOGGLE_PLAY */,
      primaryKey: " " /* SPACE */,
      keyCode: KeyCode.SPACE
    },
    {
      action: "togglePlay" /* TOGGLE_PLAY */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_TOGGLE_PLAY
    },
    {
      action: "toggleMute" /* TOGGLE_MUTE */,
      primaryKey: "m",
      keyCode: KeyCode.M
    },
    {
      action: "toggleMute" /* TOGGLE_MUTE */,
      primaryKey: "-",
      keyCode: KeyCode.SUBTRACT
    },
    {
      action: "toggleMute" /* TOGGLE_MUTE */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_TOGGLE_MUTE
    },
    {
      action: "toggleTextTrack" /* TOGGLE_TT */,
      primaryKey: "c",
      keyCode: KeyCode.C
    },
    {
      action: "stop" /* STOP */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_STOP
    },
    {
      action: "playListNext" /* PLAYLIST_NEXT */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_PLAYLIST_NEXT
    },
    {
      action: "playListPrev" /* PLAYLIST_PREV */,
      primaryKey: null,
      keyCode: KeyCode.MEDIA_PLAYLIST_PREV
    }
  ];

  // src/view/AbstractKeyCommandMediator.ts
  var AbstractKeyCommandMediator = class extends LogAwareMediator {
    constructor() {
      super(...arguments);
      this.defs = [];
      this.scope = null;
      this.keyDownHandler = null;
      this._disabled = false;
    }
    onRemove() {
      this.scope = null;
      super.onRemove();
    }
    get disabled() {
      return this.scope === "none" /* NONE */ || this._disabled;
    }
    getEventTarget() {
      switch (this.scope) {
        case "player" /* PLAYER */:
          return this.getPlayerContainer();
        case "document" /* DOCUMENT */:
          return window.document;
        default:
          return null;
      }
    }
    // scope is currently immutable once set
    setScope(scp) {
      if (this.scope !== null) {
        return;
      }
      this.scope = scp;
      this.activateScope(true);
    }
    registerCommandDef(cmdDef) {
      if (!this.hasScope) {
        return;
      }
      this.defs.push(cmdDef);
    }
    disable() {
      if (!this.hasScope || this._disabled) {
        return;
      }
      this.scopeActive && this.activateScope(false);
      this._disabled = true;
    }
    enable() {
      if (!this.hasScope) {
        this.logger.warn("Attempted to enable key command mediator that has scope of NONE.");
        return;
      }
      this._disabled = false;
      !this.scopeActive && this.activateScope(true);
    }
    validatePrimaryKey(def, e) {
      const k = e.key, kl = isString(k) && k.toLowerCase(), kc = e.keyCode;
      if (!k && !kc) {
        return false;
      }
      const hasKey = def.primaryKey === k || def.primaryKey === kl || def.keyCode === kc;
      return hasKey;
    }
    getCommand(e, checkModifiers = true) {
      let i = this.defs.length, def = null, mods, d;
      while (i--) {
        d = this.defs[i];
        if (this.validatePrimaryKey(d, e)) {
          mods = !checkModifiers || this.hasRequiredModifiers(d, e);
          if (mods) {
            def = d;
            break;
          }
        }
      }
      return def;
    }
    /**
     * Checks if required modifier keys are pressed.
     *
     * Using bitwise XOR; any mismatch will yield a '1'.
     * e.g. 1 ^ 1 = 0;  1 ^ 0 = 1; 0 ^ 0 = 0
     *
     * Note that JS allows booleans in XOR expressions, but TS doesn't,
     * so bool values are converted to 1 / 0
     */
    hasRequiredModifiers(def, event) {
      const c1 = !!((def.requireCtrl ? 1 : 0) ^ (event.ctrlKey ? 1 : 0)), c2 = !!((def.requireShift ? 1 : 0) ^ (event.shiftKey ? 1 : 0)), c3 = !!((def.requireMeta ? 1 : 0) ^ (event.metaKey ? 1 : 0));
      return !c1 && !c2 && !c3;
    }
    activateScope(flag) {
      if (!this.hasScope || this._disabled) {
        return;
      }
      const el = this.getEventTarget();
      if (el) {
        const m = flag ? "addEventListener" : "removeEventListener";
        el[m]("keydown", this.keyDownHandler);
      }
      this.scopeActive = flag;
    }
    getPlayerContainer() {
      var _a;
      const domProxy = (_a = this.facade) == null ? void 0 : _a.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
      return domProxy == null ? void 0 : domProxy.getMain();
    }
    get hasScope() {
      return this.scope !== "none" /* NONE */;
    }
    handleNotification(notification) {
    }
    onRegister() {
      super.onRegister();
      this.keyDownHandler = (e) => this.hKeyDown(e);
    }
  };

  // src/view/KeyCommandMediator.ts
  var KeyCommandMediator = class extends AbstractKeyCommandMediator {
    constructor() {
      super(...arguments);
      this.vpi = null;
      this.seekEnabled = false;
      this.VOLUME_INCREMENT = 0.05;
      this.SEEK_FACTOR_DISCRETE = 0.05;
    }
    onRemove() {
      clearTimeout(this.timeout);
      this.vpi = null;
      super.onRemove();
    }
    hKeyDown(e) {
      this.processKeyEvent(e);
    }
    get player() {
      if (!this.vpi) {
        const appMed = this.facade.retrieveMediator("AppMediator" /* APPLICATION */);
        this.vpi = appMed.getAppApi();
      }
      return this.vpi;
    }
    stopEvent(e) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
    processKeyEvent(e) {
      if (e.ctrlKey || e.shiftKey || e.metaKey || e.key === "Meta" /* META */ || e.key === "Shift" /* SHIFT */ || e.key === "Control" /* CONTROL */) {
        return null;
      }
      const cmdDef = this.getCommand(e, false);
      if (!cmdDef) {
        return;
      }
      this.doAction(cmdDef);
      this.stopEvent(e);
    }
    doAction(cmdDef) {
      const a = cmdDef.action;
      let cv, v, mul;
      switch (a) {
        case "increaseVolume" /* INCREASE_VOLUME */:
        case "decreaseVolume" /* DECREASE_VOLUME */:
          mul = a === "decreaseVolume" /* DECREASE_VOLUME */ ? -1 : 1;
          cv = this.player.volume;
          v = clampValue(cv + this.VOLUME_INCREMENT * mul, 0, 1);
          if (this.player.muted && v > 0) {
            this.player.muted = false;
          }
          this.player.volume = v;
          this.notify({
            action: a,
            value: this.player.volume
          });
          break;
        case "seekBack" /* SEEK_BACK */:
        case "seekForward" /* SEEK_FORWARD */:
          if (!this.seekEnabled) {
            return;
          }
          const d = this.player.contentDuration;
          mul = a === "seekBack" /* SEEK_BACK */ ? -1 : 1;
          cv = this.player.contentTime;
          if (!d || isNaN(d) || mul === 1 && this.player.streamType === "DVR" /* DVR */ && this.player.isPlayingLive) {
            return;
          }
          v = clampValue(cv + this.SEEK_FACTOR_DISCRETE * mul * d, 0, d);
          this.notify({
            action: a,
            position: v,
            duration: d
          });
          this.player.seek(v);
          break;
        case "enterFullScreen" /* ENTER_FULLSCREEN */:
          this.player.enterFullscreen();
          break;
        case "togglePlay" /* TOGGLE_PLAY */:
          if (this.player.streamType !== "LIVE" /* LIVE */) {
            this.player.togglePlayPause();
          }
          break;
        case "toggleMute" /* TOGGLE_MUTE */:
          this.player.muted = !this.player.muted;
          this.notify({
            action: a,
            muted: this.player.muted
          });
          break;
        case "toggleTextTrack" /* TOGGLE_TT */:
          this.player.textTrackEnabled = !this.player.textTrackEnabled;
          break;
        case "playListNext" /* PLAYLIST_NEXT */:
        case "playListPrev" /* PLAYLIST_PREV */:
          mul = a === "playListPrev" /* PLAYLIST_PREV */ ? -1 : 1;
          this.notify({
            action: a
          });
          break;
        case "stop" /* STOP */:
          if (this.player.streamType === "LIVE" /* LIVE */) {
            this.player.stop();
          } else {
            this.player.pause();
          }
          break;
      }
    }
    notify(data) {
      this.sendNotification("hotkeyaction" /* HOTKEY_ACTION */, data, "internal" /* INTERNAL */);
    }
    handleNotification(notification) {
      switch (notification.name) {
        case "adbreakstart" /* AD_BREAK_START */:
          this.seekEnabled = false;
          break;
        case "contentcomplete" /* CONTENT_COMPLETE */:
          this.seekEnabled = false;
          this.disable();
          break;
        case "contentstart" /* CONTENT_START */:
        case "contentsegmentstart" /* CONTENT_SEGMENT_START */:
          this.seekEnabled = this.player.streamType !== "LIVE" /* LIVE */;
          break;
      }
    }
    listNotificationInterests() {
      const n = PlayerEvent;
      return [
        n.AD_BREAK_START,
        n.CONTENT_START,
        n.CONTENT_SEGMENT_START,
        n.CONTENT_COMPLETE
      ];
    }
    onRegister() {
      super.onRegister();
      this.enable();
      const acd = a11yKeyCommands;
      acd.forEach((c) => this.registerCommandDef(c));
    }
  };

  // src/controller/boot/PrepViewCommand.ts
  var PrepViewCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const facade = this.facade;
      const app = notification.body.app;
      facade.registerMediator(new AppMediator("AppMediator" /* APPLICATION */, app));
      const system = this.system;
      if (!system.isBrowser) {
        this.log("info" /* INFO */, "Skipping view creation");
        return;
      }
      if (!system.isTv) {
        facade.registerMediator(new FullscreenMediator("FullscreenMediator" /* FULLSCREEN */));
      }
      const akm = new KeyCommandMediator("KeyCommandMediator" /* KEY_COMMAND */);
      facade.registerMediator(akm);
      akm.setScope(this.getScope(system, notification.body.playerOptions));
      this.log("debug" /* DEBUG */, "View prepared");
    }
    getScope(system, playerOpts) {
      if (!system.isBrowser || system.isTv) {
        return "none" /* NONE */;
      }
      return playerOpts.keyboardScope || "player" /* PLAYER */;
    }
  };

  // src/controller/boot/BootCommand.ts
  var BootCommand = class extends AbstractMacroCommand {
    initializeMacroCommand() {
      this.addSubCommand(PrepModelCommand);
      this.addSubCommand(CreateDomCommand);
      this.addSubCommand(PrepTimerCommand);
      this.addSubCommand(PrepViewCommand);
      this.addSubCommand(PrepPluginsCommand);
    }
  };

  // src/controller/HandleErrorCommand.ts
  var HandleErrorCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const appMed = this.facade.retrieveMediator("AppMediator" /* APPLICATION */);
      if (!appMed) {
        return;
      }
      const name = notification.name;
      const body = notification.body;
      const details = body.error || body;
      this.setDetails(name, details);
      if (details.fatal) {
        this.logger.error(details.message);
      } else {
        this.logger.warn(details.message);
      }
      this.sendNotification("error" /* ERROR */, { error: details });
    }
    setDetails(name, info) {
      let cat = null;
      let msg = null;
      switch (name) {
        case "resourceerror" /* RESOURCE_ERROR */:
          cat = "Resource" /* RESOURCE */;
          break;
        case "videostarterror" /* VIDEO_START_ERROR */:
          cat = "Video start" /* VIDEO_START */;
          break;
        case "videoplaybackerror" /* VIDEO_PLAYBACK_ERROR */:
          cat = "Playback" /* PLAYBACK */;
          break;
        case "aderror" /* AD_ERROR */:
          cat = "Ad" /* AD */;
          break;
        case "adstalled" /* AD_STALLED */:
          cat = "Ad" /* AD */;
          msg = "Stalled ad detected" /* AD_STALLED */;
          break;
      }
      if (msg) {
        info.message = msg;
      }
      if (cat) {
        info.category = cat;
      }
    }
  };

  // src/controller/KillResourcePresentationCommand.ts
  var KillResourcePresentationCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      this.facade.removeMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
      this.facade.removeProxy("ResourceProxy" /* ResourceProxy */);
      this.facade.removeProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
      const p = this.facade.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */);
      p.reset();
    }
  };

  // src/controller/LocalizationCommand.ts
  var LocalizationCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const { name, body } = notification;
      switch (name) {
        case "changeLanguage" /* CHANGE_LANGUAGE */:
          const localization = this.facade.retrieveProxy("LocalizationProxy" /* LocalizationProxy */);
          const { language } = body;
          localization.changeLanguage(language).then((localeData) => {
            const dom = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
            if (dom) {
              const main = dom.getMain();
              main.setAttribute("aria-label", localization.localize("media-player" /* MEDIA_PLAYER */));
              main.setAttribute("lang", localization.language);
            }
            this.sendNotification("languagechange" /* LANGUAGE_CHANGE */, { language });
            this.sendNotification("localizationChange" /* LOCALIZATION_CHANGE */, { localeData });
          });
          break;
      }
    }
  };

  // src/controller/MetricCommand.ts
  function getKey(value) {
    return `${value.id}:${value.name}`;
  }
  var WARNING = "Performance API error";
  var MetricCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      var _a, _b;
      const { type, value } = notification.body.metric;
      if (!performance) {
        return;
      }
      switch (type) {
        case "mark" /* MARK */:
          try {
            (_a = performance.mark) == null ? void 0 : _a.call(performance, getKey(value), { startTime: value.startTime });
          } catch (error) {
            this.logger.warn(WARNING, error.toString());
          }
          break;
        case "measure" /* MEASURE */:
          try {
            const key = getKey(value);
            (_b = performance == null ? void 0 : performance.measure) == null ? void 0 : _b.call(performance, key, key + ":start", key + ":end");
          } catch (error) {
            this.logger.warn(WARNING, error.toString());
          }
          break;
      }
    }
  };

  // src/controller/PlaybackCommand.ts
  var PlaybackCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      var _a;
      const presoMediator = this.facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
      const resourceProxy = this.facade.retrieveProxy("ResourceProxy" /* ResourceProxy */);
      const resource = resourceProxy == null ? void 0 : resourceProxy.resource;
      const cps = (_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.model;
      if (!cps || !resource) {
        this.log("debug" /* DEBUG */, "play() can not be invoked in this context.");
        return;
      }
      switch (notification.name) {
        case "play" /* PLAY */:
          const hasPreso = !!presoMediator, started = hasPreso && this.getModel("PresentationState" /* PresentationState */).started;
          if (hasPreso && notification.type === "external" /* EXTERNAL */ && !started) {
            this.invokePlayOnUserGesture(presoMediator);
          } else if (started) {
            presoMediator == null ? void 0 : presoMediator.play();
          }
          break;
        case "pause" /* PAUSE */:
          presoMediator == null ? void 0 : presoMediator.pause();
          break;
        case "seek" /* SEEK */:
          presoMediator.seek(notification.body.value);
          break;
        case "switchAudioTrack" /* SWITCH_AUDIO_TRACK */:
          presoMediator.adapter.setAudioTrack(notification.body.value);
          break;
        case "switchTextTrack" /* SWITCH_TEXT_TRACK */:
          const track = notification.body.value;
          if (track) {
            this.facade.retrieveProxy("TextTrackProxy" /* TextTrackProxy */).language = track.language;
            const textTrack = this.contentPlaybackStateProxy.getTextTrackById(track.id);
            presoMediator.adapter.setTextTrack(textTrack);
          }
          break;
        case "switchTextMode" /* SWITCH_TEXT_MODE */:
          const enabled = notification.body.value;
          const textTrackProxy = this.facade.retrieveProxy("TextTrackProxy" /* TextTrackProxy */);
          textTrackProxy.enabled = enabled;
          if (presoMediator == null ? void 0 : presoMediator.adapter) {
            presoMediator.adapter.setTextTrackMode(textTrackProxy.mode);
          }
          break;
        case "mutechange" /* MUTE_CHANGE */:
          presoMediator.mute(notification.body.muted);
          break;
        case "volumechange" /* VOLUME_CHANGE */:
          const value = notification.body.volume;
          !isNaN(value) && presoMediator.setVolume(value);
          break;
      }
    }
    get contentPlaybackStateProxy() {
      return this.facade.retrieveProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
    }
    shouldSkipPriming() {
      const domProxy = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
      const playerOpts = this.getModel("PlayerOptions" /* PlayerOptions */);
      const overrides = playerOpts.overrides;
      const sys = this.system;
      return !domProxy || sys.supportsUnrestrictedAutoplay || (overrides == null ? void 0 : overrides.skipPriming) === true;
    }
    invokePlayOnUserGesture(presoMediator) {
      const domProxy = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
      const playerOpts = this.getModel("PlayerOptions" /* PlayerOptions */);
      const overrides = playerOpts.overrides;
      const sys = this.system;
      presoMediator.beforePlayOnUserGesture();
      if (!this.shouldSkipPriming()) {
        const p = domProxy.primeVideo(overrides == null ? void 0 : overrides.blankVideoUrl);
        p.then(() => {
          if (sys.device === "iPhone" /* IPHONE */) {
            const ev = "timeupdate";
            const v = domProxy.getVideo(), h = (e) => {
              v.removeEventListener(ev, h);
              setTimeout(() => presoMediator.playOnUserGesture(), 200);
            };
            v.addEventListener(ev, h);
          } else {
            presoMediator.playOnUserGesture();
          }
        }).catch((error) => {
          this.log("error" /* ERROR */, `ERROR - PlaybackCommand: Priming FAILED.  ${error.message}`);
          this.facade.sendNotification("autoplayblocked" /* AUTOPLAY_BLOCKED */, error, "internal" /* INTERNAL */);
        });
      } else {
        presoMediator && presoMediator.playOnUserGesture();
      }
    }
  };

  // src/model/ContentPlaybackStateProxy.ts
  var ContentPlaybackStateProxy = class extends Proxy2 {
    constructor() {
      super(...arguments);
      this.isReady = false;
      this.pUserQualityCategory = "AUTO" /* AUTO */;
    }
    onRegister() {
      super.onRegister();
      const mcp = this.facade.retrieveProxy("ModelCollectionProxy" /* ModelCollectionProxy */);
      this.contentPlaybackState = mcp.getModel(ContentPlaybackState.modelName);
      this.contentPlaybackState.qualityInfo = {
        mode: "auto" /* AUTO */,
        quality: null,
        qualities: []
      };
      this.contentPlaybackState.textTracks = {
        track: null,
        tracks: []
      };
      this.contentPlaybackState.audioTracks = {
        track: null,
        tracks: []
      };
      this.isReady = true;
    }
    onRemove() {
      this.contentPlaybackState = null;
      this.thumbnailTrack = null;
      super.onRemove();
    }
    processQualityProfile(qualities) {
      qualities = freeze(qualities.map((quality) => processQuality(quality)));
      this.contentPlaybackState.qualities = qualities;
      this.contentPlaybackState.qualityInfo.qualities = qualities.filter((quality) => quality.enabled);
      if (this.qualitySwitchingMode !== "manual" /* MANUAL */) {
        this.qualitySwitchingMode = qualities.length ? "auto" /* AUTO */ : "unavailable" /* UNAVAILABLE */;
      }
    }
    addTextTracks(tracks) {
      this.contentPlaybackState.textTracks.tracks = tracks;
    }
    getTextTrackById(id) {
      return this.contentPlaybackState.textTracks.tracks.find((track) => track.id === id);
    }
    getThumbnail(time) {
      var _a;
      return (_a = this.thumbnailTrack) == null ? void 0 : _a.getCueAt(time);
    }
    get textTrackInfo() {
      return this.contentPlaybackState.textTracks;
    }
    set textTrack(value) {
      this.contentPlaybackState.textTracks.track = value;
    }
    get textTrack() {
      return this.contentPlaybackState.textTracks.track;
    }
    get isAbrSwitchingAvailable() {
      return this.qualities ? this.qualities.length > 1 : false;
    }
    set userQualityCategory(q) {
      this.pUserQualityCategory = q;
    }
    get userQualityCategory() {
      return this.pUserQualityCategory;
    }
    set qualitySwitchingMode(mode) {
      this.contentPlaybackState.qualityInfo.mode = mode;
    }
    get qualitySwitchingMode() {
      return this.contentPlaybackState.qualityInfo.mode;
    }
    set qualities(value) {
      this.contentPlaybackState.qualities = value;
    }
    get qualities() {
      return this.contentPlaybackState.qualities;
    }
    set maxBandwidth(value) {
      this.contentPlaybackState.maxBandwidth = isNaN(this.contentPlaybackState.maxBandwidth) ? value : Math.max(value, this.contentPlaybackState.maxBandwidth);
    }
    get model() {
      return this.contentPlaybackState;
    }
    get minIndex() {
      return 0;
    }
    get maxIndex() {
      const qualities = this.contentPlaybackState.qualityInfo.qualities;
      return (qualities == null ? void 0 : qualities.length) ? this.contentPlaybackState.qualityInfo.qualities.length - 1 : 0;
    }
    get minBitrate() {
      return this.contentPlaybackState.qualityInfo.qualities[this.minIndex].bitrate;
    }
    get maxBitrate() {
      return this.contentPlaybackState.qualityInfo.qualities[this.maxIndex].bitrate;
    }
    get qualityInfo() {
      return this.contentPlaybackState.qualityInfo;
    }
    set quality(value) {
      this.contentPlaybackState.qualityInfo.quality = value;
    }
    get audioTrackInfo() {
      return this.contentPlaybackState.audioTracks;
    }
  };

  // src/model/ResourceProxy.ts
  var ResourceProxy = class extends Proxy2 {
    //TODO: can we annotate to be removed during compilation? Or use Object.assign?
    mock(r) {
      this.pResource = r;
    }
    onRemove() {
      this.pResource = null;
      super.onRemove();
    }
    onRegister() {
      super.onRegister();
      this.pResource = this.data;
    }
    get resource() {
      return this.pResource;
    }
    get location() {
      return this.pResource.location;
    }
    get playback() {
      return this.pResource.playback;
    }
    get metadata() {
      return this.pResource.metadata;
    }
    get ad() {
      return this.pResource.ad;
    }
    get adTrackingSettings() {
      return this.pResource.ad.viewabilityTracking;
    }
    get hasValidMediaUrl() {
      return !isEmpty(this.location.mediaUrl);
    }
  };

  // src/view/AbstractPresentationMediator.ts
  var AbstractPresentationMediator = class extends LogAwareMediator {
    constructor() {
      super(...arguments);
      this.loaded = false;
      this.startedPlaying = false;
      this.preloadContent = true;
      this.minDvrDuration = 1800;
      this.sizeCheckInterval = 1e3;
      this.lastSizeCheckTime = null;
      this.adapterTask = Promise.resolve();
      this.seeking_ = false;
      this.paused_ = false;
      this.previousPlaybackState = {
        state: null,
        overrides: {},
        buffer: NaN
      };
      this.contentIsBuffering = false;
      this.endFreezeTimeoutHandle = null;
      this.timedTextOffset = 0;
      this.isMonitoringCueEvents = false;
      this.shouldSendTextTrackAvailable = false;
      this.onLoadError = (error) => {
        const { message, cause } = error;
        this.sendErrorNotification(message, cause || error);
      };
      this.qualityChange = (quality) => {
        var _a, _b;
        if (!quality) {
          this.logger.warn("Invalid quality change");
          return;
        }
        const { contentPlaybackStateProxy } = this;
        if (!((_a = contentPlaybackStateProxy.qualities) == null ? void 0 : _a.length)) {
          this.logger.warn("Invalid qualities list. Make sure qualitiesChange is called before qualityChange");
          return;
        }
        if (quality.enabled === false) {
          const qualities = contentPlaybackStateProxy.qualities.map((q) => __spreadProps(__spreadValues({}, q), { enabled: q.enabled || q.index === quality.index }));
          this.qualitiesChange(qualities);
        }
        quality = contentPlaybackStateProxy.qualities.find((q) => q.index === quality.index);
        const qualityInfo = contentPlaybackStateProxy.qualityInfo;
        if (((_b = qualityInfo.quality) == null ? void 0 : _b.bitrate) !== quality.bitrate) {
          contentPlaybackStateProxy.quality = quality;
          contentPlaybackStateProxy.model.bitrate = quality.bitrate;
          this.respondToQualityChange(quality);
        }
      };
      this.qualitiesChange = (qualities) => {
        const { contentPlaybackStateProxy } = this;
        const { model } = contentPlaybackStateProxy;
        const previousQualities = JSON.stringify(model.qualities || []);
        this.contentPlaybackStateProxy.processQualityProfile(qualities);
        if (!contentPlaybackStateProxy.isAbrSwitchingAvailable) {
          this.logger.log("info" /* INFO */, AppResources.messages.ABR_UNAVAILABLE);
        }
        if (model.qualityInfo && JSON.stringify(model.qualities) !== previousQualities) {
          this.log("info" /* INFO */, "Quality Info: ", model.qualityInfo);
          this.notify("qualitieschange" /* QUALITIES_CHANGE */, { qualities: model.qualities });
          this.notify("qualityinfochange" /* QUALITY_INFO_CHANGE */, { qualityInfo: model.qualityInfo });
        }
      };
      this.error = (err) => {
        if (err.fatal) {
          this.adapterTask = Promise.resolve();
        }
        this.respondToError(err);
      };
      this.audioTrackChange = (audioTrack) => {
        audioTrack = clone(audioTrack, true);
        this.contentPlaybackStateProxy.audioTrackInfo.track = audioTrack;
        this.notify("audiotrackchange" /* AUDIO_TRACK_CHANGE */, { audioTrack });
      };
      this.audioTracksChange = (tracks) => {
        tracks = clone(tracks, true);
        this.contentPlaybackStateProxy.audioTrackInfo.tracks = tracks;
        this.notify("audiotrackschange" /* AUDIO_TRACKS_CHANGE */, { audioTracks: this.contentPlaybackStateProxy.audioTrackInfo.tracks });
        this.notify("audiotrackinfochange" /* AUDIO_TRACK_INFO_CHANGE */, { audioTrackInfo: this.contentPlaybackStateProxy.audioTrackInfo });
      };
      this.cdnChange = (cdn) => {
        const { contentPlaybackStateProxy } = this;
        if (cdn !== contentPlaybackStateProxy.model.cdn) {
          contentPlaybackStateProxy.model.cdn = cdn;
          this.notify("cdnchange" /* CDN_CHANGE */, { cdn });
        }
      };
      this.drmKeySystemCreated = (keysystem) => {
        this.contentPlaybackStateProxy.model.drmType = keysystem;
        this.notify("drmkeysystemcreated" /* DRM_KEY_SYSTEM_CREATED */, { keysystem });
      };
      this.timeUpdate = () => {
        clearTimeout(this.endFreezeTimeoutHandle);
        if (!this.pAdapter) {
          return;
        }
        const t = this.pAdapter.getCurrentTime();
        const d = this.presoModel.streamDuration;
        this.updateLiveStreamInfo();
        if (!this.pAdapter.getIsLiveStream() && !isNaN(d) && d - t <= 0.15) {
          this.protectAgainstEndFreeze(250);
        }
        this.respondToVideoTimeUpdate(t);
      };
      this.playing = () => {
        this.paused_ = false;
        this.updateLiveStreamInfo();
        this.respondToVideoPlaying();
      };
      this.paused = () => {
        this.paused_ = true;
        this.respondToVideoPaused();
      };
      this.seeking = () => {
        if (!this.seeking_) {
          this.seeking_ = true;
          this.respondToVideoSeeking();
          this.respondToWaiting("seeking", true);
        }
      };
      this.seeked = () => {
        this.seeking_ = false;
        this.respondToVideoSeeked();
        this.respondToWaiting("seeking", false);
      };
      this.ended = () => {
        clearTimeout(this.endFreezeTimeoutHandle);
        this.respondToVideoEnd();
      };
      this.durationChange = () => {
        const duration = this.pAdapter.getDuration();
        if (duration > 0) {
          this.respondToDurationChange(duration);
        }
        this.updateLiveStreamInfo();
      };
      this.volumeChange = (volume, muted) => {
        if (volume !== this.presoModel.volume) {
          this.notify("volumechange" /* VOLUME_CHANGE */, { volume });
        }
        if (muted != null && muted !== this.presoModel.isMuted) {
          this.notify("mutechange" /* MUTE_CHANGE */, { muted });
        }
      };
      this.metadataCuepoint = (data) => {
        const _a = data, { info } = _a, cuepoint = __objRest(_a, ["info"]);
        Object.defineProperty(cuepoint, "info", {
          get() {
            Deprecated.info();
            return info;
          }
        });
        this.respondToId3Data(cuepoint);
      };
      this.textCuepoints = (activeCues, forced = false) => {
        if (!this.textTrackProxy.enabled && !forced) {
          return;
        }
        if (this.isMonitoringCueEvents) {
          activeCues.forEach((cue) => this.respondToTtCue(cue));
        }
        this.notify("textcuepoint" /* TEXT_CUEPOINT */, { activeCues, forced });
      };
      this.textTrackDisplayModeChange = (mode) => {
        const textTrackEnabled = mode !== "disabled" /* DISABLED */;
        this.textTrackProxy.mode = mode;
        this.notify("texttrackenabledchange" /* TEXT_TRACK_ENABLED_CHANGE */, { textTrackEnabled });
        this.respondToTextTrackModeChange(textTrackEnabled);
      };
      this.textTracksChange = (textTracks) => {
        textTracks = clone(textTracks, true);
        this.contentPlaybackStateProxy.addTextTracks(textTracks);
        this.notify("texttrackschange" /* TEXT_TRACKS_CHANGE */, { textTracks });
        this.shouldSendTextTrackAvailable = true;
        this.respondToTextTrackInfoChange();
      };
      this.textTrackChange = (textTrack) => {
        textTrack = clone(textTrack, true);
        this.contentPlaybackStateProxy.textTrack = textTrack;
        this.notify("texttrackchange" /* TEXT_TRACK_CHANGE */, { textTrack });
        this.respondToTextTrackInfoChange();
      };
      this.waitingChange = (waiting) => {
        this.respondToWaiting("waiting", waiting);
        this.notify("waitingchange" /* WAITING_CHANGE */, { waiting });
      };
    }
    get adapter() {
      return this.pAdapter;
    }
    get timedTextContainer() {
      if (!this.timedTextContainer_) {
        const dp = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
        this.timedTextContainer_ = dp.getElement("ccContainer" /* CC_CONTAINER */);
      }
      return this.timedTextContainer_;
    }
    onRemove() {
      clearTimeout(this.endFreezeTimeoutHandle);
      this.pAdapter = null;
      this.contentPlaybackStateProxy = null;
      this.resourceProxy = null;
      this.textTrackProxy = null;
      this.presoModel = null;
      this.playerOptions = null;
      super.onRemove();
    }
    setVolume(value) {
      this.presoModel.volume = value;
    }
    load() {
      return this.loadVideo().catch((error) => {
        const detail = error.type ? error.data || error.detail : null;
        const cause = detail ? detail.error || detail : error;
        throw new CoreError("videostarterror" /* VIDEO_START_ERROR */, cause);
      });
    }
    play() {
      return this.playVideo();
    }
    pause() {
      this.pauseVideo();
    }
    suspend() {
      this.pAdapter.suspend();
    }
    resume() {
      this.pAdapter.resume();
    }
    offsetTimedText(pixelOffset) {
      const isOffset = pixelOffset > 0;
      this.timedTextOffset = pixelOffset;
      if (this.playerOptions.renderTextTrackNatively && this.system.browser === "Firefox" /* FIREFOX */) {
        this.monitorTtCues(isOffset);
      } else if (this.playerOptions.renderTextTrackNatively === false && this.timedTextContainer) {
        this.timedTextContainer.style.bottom = `${pixelOffset}px`;
      } else {
        const domProxy = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
        const main = domProxy.getMain();
        document == null ? void 0 : document.documentElement.style.setProperty("--avia-timed-text-offset", `${pixelOffset}px`);
        main == null ? void 0 : main.classList[isOffset ? "add" : "remove"]("avia-cc-offset");
      }
    }
    getBuffered(asStreamTime = false) {
      return this.pAdapter.getBuffered(asStreamTime);
    }
    loadVideo() {
      if (this.pendingLoad) {
        return this.pendingLoad;
      }
      if (this.loaded) {
        return Promise.resolve();
      }
      this.respondToWaiting("loading", true);
      this.logger.time("resource-load" /* RESOURCE_LOAD */);
      return this.pendingLoad = this.pAdapter.load().then((streamMetadata) => {
        this.loaded = true;
        this.respondToWaiting("loading", false);
        this.pendingLoad = null;
        const resource = this.resourceProxy.resource;
        this.notify("streammetadata" /* STREAM_METADATA */, { streamMetadata });
        const url = resource.location.thumbnailTrackUrl;
        if (!this.contentPlaybackStateProxy.thumbnailTrack && url) {
          ThumbnailTrackSurface.create(url, this.getProxy("HookProxy" /* HookProxy */)).then((thumbnailTrack) => {
            this.contentPlaybackStateProxy.thumbnailTrack = thumbnailTrack;
            this.notify("thumbnailtrackavailable" /* THUMBNAIL_TRACK_AVAILABLE */, { thumbnailTrack });
          }).catch((e) => this.log("warn" /* WARN */, "Could not load thumbnail track"));
        }
        this.logger.timeEnd("resource-load" /* RESOURCE_LOAD */);
      });
    }
    playVideo() {
      this.logger.time("resource-playback" /* RESOURCE_PLAYBACK */);
      return this.pAdapter.play().then(() => {
        this.startedPlaying = true;
        this.logger.timeEnd("resource-playback" /* RESOURCE_PLAYBACK */);
      }).catch((error) => {
        if (error.code !== 0) {
          this.logger.warn(`Video element play() error: ${error}`);
          return;
        }
        this.sendNotification("autoplayblocked" /* AUTOPLAY_BLOCKED */, error);
      });
    }
    pauseVideo() {
      var _a;
      (_a = this.pAdapter) == null ? void 0 : _a.pause();
    }
    muteVideo(flag) {
      if (!flag && !this.presoModel.userHasUnmuted) {
        this.presoModel.userHasUnmuted = true;
      }
      this.presoModel.isMuted = flag;
    }
    seekVideo(position) {
      return this.pAdapter.seek(position);
    }
    checkVideoBuffering(count) {
      const mod = Math.max(Math.floor(this.bufferingSampleRate / TimerMediator.INTERVAL), 1);
      if (isFinite(mod) && count % mod) {
        return;
      }
      let buffering = false;
      if (!this.paused_) {
        const threshold = this.previousPlaybackState.buffer + 1e-3;
        const currentTime = this.video.currentTime;
        this.previousPlaybackState.buffer = currentTime;
        const stalled = currentTime < threshold;
        buffering = stalled && !this.seeking_;
      }
      if (this.contentIsBuffering !== buffering) {
        this.contentIsBuffering = buffering;
        this.notify("resourcebuffering" /* RESOURCE_BUFFERING */, { buffering });
      }
    }
    get video() {
      return this.viewControl;
    }
    notify(name, data) {
      this.sendNotification(name, data, "internal" /* INTERNAL */);
    }
    respondToIsPlayingLiveChange(isLive) {
      this.notify("contentisplayinglive" /* CONTENT_IS_PLAYING_LIVE */, { isLive });
    }
    respondToStreamTypeChange(streamType) {
      if (this.streamType === streamType) {
        return;
      }
      const cps = this.contentPlaybackStateProxy.model;
      this.streamType = streamType;
      cps.streamType = streamType;
      this.notify("streamtypechange" /* STREAM_TYPE_CHANGE */, { streamType });
    }
    respondToWaiting(key, value) {
      this.previousPlaybackState.overrides[key] = value;
      const waiting = !this.previousPlaybackState.state || values(this.previousPlaybackState.overrides).includes(true);
      this.respondToPlaybackStateChange(waiting ? "waiting" /* WAITING */ : this.previousPlaybackState.state);
    }
    respondToPlaybackStateChange(playbackState) {
      const cps = this.contentPlaybackStateProxy.model;
      const notWaiting = playbackState !== "waiting" /* WAITING */;
      if (cps.state !== playbackState) {
        if (playbackState !== "idle" /* IDLE */ && notWaiting) {
          this.previousPlaybackState.state = playbackState;
        }
        if (this.seeking_ && notWaiting) {
          return;
        }
        cps.state = playbackState;
        this.notify("playbackstatechange" /* PLAYBACK_STATE_CHANGE */, { playbackState });
      }
    }
    // Only for Firefox at present
    monitorTtCues(flag) {
      const ctt = Array.from(this.video.textTracks).find((track) => isTextTrack(track.kind) && track.mode === "showing" /* SHOWING */);
      const cues = ctt == null ? void 0 : ctt.activeCues;
      this.isMonitoringCueEvents = flag;
      if (!cues) {
        return;
      }
      for (let i = 0, n = cues.length || 0; i < n; i++) {
        this.respondToTtCue(cues[i]);
      }
    }
    // invoked for Firefox only
    respondToTtCue(cue) {
      cue.line = this.isMonitoringCueEvents ? this.timedTextOffset * 0.21875 : "auto";
    }
    //////////////////////////
    // private and mvc internal
    handleNotification(notification) {
      switch (notification.name) {
        case "timerTic" /* TIMER_TIC */:
          this.respondToBufferingStatusCheck(notification.body.count);
          if (!this.lastSizeCheckTime || this.shouldCheckSize()) {
            this.lastSizeCheckTime = Date.now();
            this.checkSize();
          }
          break;
        case "fullscreenChange" /* FULLSCREEN_CHANGE */:
          const data = notification.body;
          this.presoModel.isFullscreen = data.isFullscreen;
          this.respondToFullscreenChange(data.isFullscreen);
          break;
        case "autoQualitySwitching" /* AUTO_QUALITY_SWITCHING */:
          const { model } = this.contentPlaybackStateProxy;
          this.notify("qualityinfochange" /* QUALITY_INFO_CHANGE */, { qualityInfo: model.qualityInfo });
          break;
      }
    }
    listNotificationInterests() {
      return [
        "timerTic" /* TIMER_TIC */,
        "fullscreenChange" /* FULLSCREEN_CHANGE */
      ];
    }
    onRegister() {
      super.onRegister();
      this.contentPlaybackStateProxy = this.facade.retrieveProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
      this.resourceProxy = this.facade.retrieveProxy("ResourceProxy" /* ResourceProxy */);
      this.performanceProxy = this.facade.retrieveProxy("PerformanceProxy" /* PerformanceProxy */);
      this.textTrackProxy = this.facade.retrieveProxy("TextTrackProxy" /* TextTrackProxy */);
      this.presoModel = this.getModel("PresentationState" /* PresentationState */);
      this.playerOptions = this.getModel("PlayerOptions" /* PlayerOptions */);
      if (this.playerOptions.sizeCheckInterval !== void 0) {
        this.sizeCheckInterval = this.playerOptions.sizeCheckInterval;
      }
      const overrides = this.resourceProxy.resource.overrides;
      if (isNumber(overrides == null ? void 0 : overrides.minDvrDuration)) {
        this.minDvrDuration = overrides.minDvrDuration;
      }
      if (this.presoModel.isMuteAtPlayStart && !this.presoModel.userHasUnmuted) {
        this.muteVideo(true);
        this.presoModel.isMuted = true;
      }
      this.bufferingSampleRate = this.performanceProxy.bufferingSampleRate;
    }
    prepareForPlayback(forcePlay = false) {
      if (this.initializing) {
        return;
      }
      const config2 = {
        system: this.system,
        playerOptions: this.playerOptions,
        resource: this.resourceProxy.resource,
        performanceSettings: this.performanceProxy,
        textTrackSettings: this.textTrackProxy,
        video: this.viewControl,
        logger: this.logger
      };
      this.adapterTask = this.initializeAdapter(config2, forcePlay).catch(this.onLoadError);
    }
    sendErrorNotification(name, error) {
      this.notify(name, error);
    }
    createAdapter(config2) {
      return __async(this, null, function* () {
        const proxy = this.facade.retrieveProxy("AdapterProxy" /* AdapterProxy */);
        const adapter = yield proxy.createAdapter("playback" /* PLAYBACK */, config2.resource, () => this);
        return adapter;
      });
    }
    initializeAdapter(config2, forcePlay) {
      return __async(this, null, function* () {
        try {
          this.logger.time("playback-adapter-creation" /* PLAYBACK_ADAPTER_CREATION */);
          this.initializing = true;
          if (this.closing) {
            return;
          }
          try {
            this.pAdapter = yield this.createAdapter(config2);
            if (this.closing) {
              return;
            }
          } catch (error) {
            const mimeType = getResourceMimeType(config2.resource);
            if (mimeType) {
              error.message += `. Attempting to play a stream of type ${mimeType}`;
            }
            throw new CoreError("resourceerror" /* RESOURCE_ERROR */, error);
          }
          this.logger.timeEnd("playback-adapter-creation" /* PLAYBACK_ADAPTER_CREATION */);
          if (this.preloadContent) {
            yield this.load();
          }
          try {
            if (this.closing) {
              return;
            }
            if (!(this.presoModel.isAutoplay || forcePlay)) {
              return;
            }
            yield this.play();
          } catch (error) {
            throw new CoreError("videoplaybackerror" /* VIDEO_PLAYBACK_ERROR */, error);
          }
        } finally {
          this.initializing = false;
        }
      });
    }
    respondToTextTrackInfoChange() {
      const { textTrackInfo } = this.contentPlaybackStateProxy;
      this.notify("texttrackinfochange" /* TEXT_TRACK_INFO_CHANGE */, { textTrackInfo: this.contentPlaybackStateProxy.textTrackInfo });
      if (this.shouldSendTextTrackAvailable && textTrackInfo.track && textTrackInfo.tracks.length) {
        this.notify("texttrackavailable" /* TEXT_TRACK_AVAILABLE */);
        this.shouldSendTextTrackAvailable = false;
      }
    }
    // TODO: This should be replaced with a debounced function
    protectAgainstEndFreeze(delay) {
      clearTimeout(this.endFreezeTimeoutHandle);
      this.endFreezeTimeoutHandle = setTimeout(() => {
        this.respondToVideoEnd();
      }, delay);
    }
    calculateStreamType() {
      if (this.pAdapter.getIsLiveStream()) {
        const liveStreamInfo = this.pAdapter.getLiveStreamInfo();
        const dvr = liveStreamInfo.dvrWindowSize;
        const isLiveLinearStream = dvr < this.minDvrDuration || isNaN(dvr);
        return isLiveLinearStream ? "LIVE" /* LIVE */ : "DVR" /* DVR */;
      } else {
        return "VOD" /* VOD */;
      }
    }
    updateLiveStreamInfo() {
      if (!this.pAdapter.getIsLiveStream()) {
        this.respondToStreamTypeChange("VOD" /* VOD */);
        return;
      }
      const cps = this.contentPlaybackStateProxy.model;
      const liveStreamInfo = this.pAdapter.getLiveStreamInfo();
      cps.liveStreamInfo = liveStreamInfo;
      const streamType = this.calculateStreamType();
      this.respondToStreamTypeChange(streamType);
      const isPlayingLive = streamType === "LIVE" /* LIVE */ ? true : liveStreamInfo.isPlayingLive;
      if (this.isPlayingLive !== isPlayingLive) {
        this.isPlayingLive = isPlayingLive;
        this.respondToIsPlayingLiveChange(isPlayingLive);
      }
      if (cps.streamType === "DVR" /* DVR */) {
        this.respondToDurationChange(liveStreamInfo.relativeDuration);
      }
    }
    shouldCheckSize() {
      return this.playerOptions.sizeCheckInterval > 0 && (!this.lastSizeCheckTime || Date.now() - this.lastSizeCheckTime >= this.sizeCheckInterval);
    }
    ////////////////////////
    // Delegate functions //
    ////////////////////////
    hasHook(type) {
      const hp = this.getProxy("HookProxy" /* HookProxy */);
      return hp.hasHook(type);
    }
    applyHook(type, value, metadata) {
      const hp = this.getProxy("HookProxy" /* HookProxy */);
      return hp.applyHook(type, value, metadata).catch((error) => {
        this.error(error);
        throw error;
      });
    }
  };

  // src/view/CommonPresentationMediator.ts
  var CommonPresentationMediator = class extends AbstractPresentationMediator {
    constructor() {
      super(...arguments);
      this.contentDurationReleased = false;
      this.resumeTimeMaxProximityToAdBreak = 5;
      this.isClickToPlay = false;
      this.fullscreenRestrictedDuringAdPlay = false;
      this._hasContent = true;
      this.contentComplete = false;
      this.timeSpent = {
        startTime: null,
        lastTime: 0,
        sessionTime: 0,
        playbackTime: 0,
        elapsedTime: 0
      };
    }
    onRemove() {
      super.onRemove();
    }
    start() {
      const mUrl = this.resourceProxy.location.mediaUrl;
      this._hasContent = isString(mUrl) && !isEmpty(mUrl);
    }
    get hasContent() {
      return this._hasContent;
    }
    startSession() {
      this.updateTimeSpent();
    }
    close() {
      var _a;
      if (this.closing) {
        return this.closing;
      }
      const contentPlaybackState = (_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.model;
      const contentTime = (contentPlaybackState == null ? void 0 : contentPlaybackState.time) || 0;
      const contentDuration = (contentPlaybackState == null ? void 0 : contentPlaybackState.duration) || 0;
      const adPlaying = this.isAdPlaying();
      const resource = this.resourceProxy.resource;
      this.respondToPlaybackStateChange("stopped" /* STOPPED */);
      this.contentPlaybackStateProxy.isReady = false;
      return this.closing = this.adapterTask.then(() => {
        if (this.startedPlaying) {
          this.pause();
        }
        this.log("info" /* INFO */, "Closing Presentation");
        this.closeAds();
      }).then(() => this.adapter ? this.adapter.destroy() : null).then(() => {
        const contentInterrupted = !adPlaying && this.hasContent && !this.isContentComplete();
        const adInterrupted = adPlaying;
        this.notify("resourceend" /* RESOURCE_END */, {
          resource,
          contentTime,
          contentDuration,
          contentInterrupted,
          adInterrupted,
          interrupted: contentInterrupted || adInterrupted
        });
      }).catch((e) => {
        Logger.error(e);
        throw e;
      }).then(() => {
        this.closing = null;
      });
    }
    getPlayerVersionInfo() {
      return `${buildInfo.playerName}_${buildInfo.playerVersion}`;
    }
    startContentSegment() {
    }
    closeAds() {
    }
    beforePlayOnUserGesture() {
    }
    playOnUserGesture() {
      this.notify("videoLoadStart" /* VIDEO_LOAD_START */);
      this.prepareForPlayback(true);
    }
    mute(flag) {
      this.muteVideo(flag);
    }
    play() {
      if (this.contentComplete) {
        this.contentComplete = false;
      }
      return super.play();
    }
    seek(position) {
      if (this.contentComplete) {
        this.contentComplete = false;
      }
      return this.seekVideo(position);
    }
    setVolume(value) {
      this.domProxy && this.domProxy.setVideoVolume(value);
      super.setVolume(value);
    }
    getAdBreakTimes() {
      return [];
    }
    getSessionTime() {
      if (this.timeSpent.startTime == null) {
        return null;
      }
      return this.updateTimeSpent().sessionTime;
    }
    getPlaybackTime() {
      if (this.timeSpent.startTime == null) {
        return null;
      }
      return this.updateTimeSpent().playbackTime;
    }
    checkSize() {
      if (!this.domProxy) {
        return;
      }
      const rect = this.domProxy.getPresentationRect();
      if (rect.width !== this.currentRect.width || rect.height !== this.currentRect.height) {
        this.currentRect = rect;
        this.respondToSizeChange();
        this.notify("presentationsizechange" /* PRESENTATION_SIZE_CHANGE */, {
          width: this.currentRect.width,
          height: this.currentRect.height
        });
      }
    }
    releaseContentDuration(duration) {
      this.contentDurationReleased = true;
      this.notify("contentdurationavailable" /* CONTENT_DURATION_AVAILABLE */, {
        contentDuration: duration
      });
    }
    updateTimeSpent() {
      const now = performance.now();
      if (this.timeSpent.startTime == null) {
        this.timeSpent.startTime = now;
        const name = "first-frame" /* FIRST_FRAME */;
        const mark = { id: this.facade.appId, name, startTime: now };
        this.sendNotification("metric" /* METRIC */, { metric: new Metric(name, mark, "mark" /* MARK */) });
        this.sendNotification("playbackstarted" /* PLAYBACK_STARTED */);
      }
      if (this.timeSpent.lastTime == null) {
        this.timeSpent.lastTime = now;
      }
      const elapsed = now - this.timeSpent.startTime;
      this.timeSpent.elapsedTime = elapsed;
      this.timeSpent.sessionTime = elapsed / 1e3;
      const cps = this.contentPlaybackStateProxy.model;
      if (cps.state !== "paused" /* PAUSED */) {
        this.timeSpent.playbackTime += (now - this.timeSpent.lastTime) / 1e3;
        this.timeSpent.lastTime = now;
      }
      return this.timeSpent;
    }
    adjustStartTimeForAdBreakProximity(requestedStartTime, breaks) {
      for (let i = 0, n = breaks.length; i < n; i++) {
        const bs = breaks[i].startTime, diff = bs - requestedStartTime;
        if (diff >= 0 && diff < this.resumeTimeMaxProximityToAdBreak) {
          return requestedStartTime - this.resumeTimeMaxProximityToAdBreak;
        }
      }
      return requestedStartTime;
    }
    get domProxy() {
      return this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
    }
    muteVideo(flag) {
      super.muteVideo(flag);
      this.domProxy && this.domProxy.muteVideo(flag);
    }
    respondToPlaybackStateChange(playbackState) {
      super.respondToPlaybackStateChange(playbackState);
      this.timeSpent.lastTime = null;
    }
    respondToFullscreenChange(fullscreen) {
      this.checkSize();
      this.notify("fullscreenchange" /* FULLSCREEN_CHANGE */, { fullscreen });
    }
    respondToVideoPaused() {
      this.respondToPlaybackStateChange("paused" /* PAUSED */);
    }
    respondToVideoPlaying() {
      if (!this.presoModel.started) {
        this.presoModel.started = true;
      }
      this.respondToPlaybackStateChange("playing" /* PLAYING */);
    }
    respondToVideoSeeking() {
      this.notify("seekstart" /* SEEK_START */);
    }
    respondToVideoSeeked() {
      this.notify("seekcomplete" /* SEEK_COMPLETE */);
    }
    respondToQualityChange(quality = null) {
      this.notify("qualitychange" /* QUALITY_CHANGE */, { quality });
    }
    respondToError(data) {
      if (!data.message) {
        data.message = AppResources.messages.UNSPECIFIED_ERROR;
      }
      if (!data.code) {
        data.code = "3400" /* UNSPECIFIED_VIDEO_PLAYBACK_ERROR */;
      }
      const name = this.startedPlaying || !data.category ? "videoplaybackerror" /* VIDEO_PLAYBACK_ERROR */ : "playererror" /* PLAYER_ERROR */;
      this.sendErrorNotification(name, data);
    }
    /*
    		Resource end only applies when the resource has completed
    */
    respondToVideoEnd() {
      this.notify("resourceComplete" /* RESOURCE_COMPLETE */);
    }
    respondToBufferingStatusCheck(count) {
      const t = this.presoModel.streamTime;
      !isNaN(t) && t > 0 && this.checkVideoBuffering(count);
    }
    respondToId3Data(d) {
      this.notify("metadatacuepoint" /* METADATA_CUEPOINT */, { cue: d });
    }
    respondToVideoTimeUpdate(streamTime) {
      const contentPlaybackState = this.contentPlaybackStateProxy.model;
      const { duration, liveStreamInfo, streamType, time } = contentPlaybackState;
      this.updateTimeSpent();
      const data = {
        contentTime: time,
        contentDuration: duration,
        streamTime,
        streamDuration: this.presoModel.streamDuration,
        sessionTime: this.timeSpent.sessionTime,
        playbackTime: this.timeSpent.playbackTime
      };
      if (streamType !== "VOD" /* VOD */) {
        const { relativeTime, relativeDuration } = liveStreamInfo;
        data.contentTime = relativeTime;
        data.contentDuration = relativeDuration;
        data.elapsedTimeMs = this.timeSpent.elapsedTime;
        contentPlaybackState.time = relativeTime;
        contentPlaybackState.duration = relativeDuration;
      }
      this.notify("contentprogress" /* CONTENT_PROGRESS */, data);
    }
    respondToSizeChange() {
      if (!this.adapter) {
        return;
      }
      this.adapter.resize();
    }
    respondToDurationChange(dur) {
    }
    respondToTextTrackModeChange(enabled) {
    }
    // helpers
    setForClickToPlay() {
      const po = this.getModel("PlayerOptions" /* PlayerOptions */);
      if (po.useNativeControls) {
        const m = this.domProxy.getMain();
        const lr = () => {
          m.removeEventListener("click", lr);
          this.notify("playOnUSerGesture" /* PLAY_ON_USER_GESTURE */);
        };
        m.addEventListener("click", lr);
      }
    }
    isContentComplete() {
      if (this.contentComplete) {
        return true;
      }
      const cps = this.contentPlaybackStateProxy.model;
      return cps.streamType !== "LIVE" /* LIVE */ && cps.streamType !== "DVR" /* DVR */ && !(isNaN(cps.time) || cps.time < cps.duration);
    }
    // TODO: Move this to an AdPresentationMediator base class
    isAdPlaying() {
      return this.presoModel.isCurrentVideoAd;
    }
    handleNotification(notification) {
      super.handleNotification(notification);
    }
    listNotificationInterests() {
      return super.listNotificationInterests().concat([]);
    }
    onRegister() {
      super.onRegister();
      const o = this.playerOptions.overrides;
      if (o.resumeTimeMaxProximityToAdBreak) {
        this.resumeTimeMaxProximityToAdBreak = o.resumeTimeMaxProximityToAdBreak;
      }
      this.isClickToPlay = !this.presoModel.isAutoplay;
      const sys = this.system;
      this.fullscreenRestrictedDuringAdPlay = sys.isIos || sys.isAndroid;
      if (this.domProxy) {
        this.currentRect = this.domProxy.getPresentationRect();
      }
    }
  };

  // src/view/AdPresentationMediator.ts
  var AdPresentationMediator = class extends CommonPresentationMediator {
    constructor(name, viewControl) {
      super(name, viewControl);
      this.pAdAdapter = null;
      this.adAdapterStarted = false;
      this.contentSegmentStarted = false;
      this.contentStartReleased = false;
      this.contentCompleteReleased = false;
      this.fatalContentErrorReceived = false;
      this.hasMidRolls = false;
      this.pendingSeekTime = null;
      this.currentAd = null;
      this.currentBreak = null;
      this.pointerLocked = false;
      this.isPreloading = false;
      this.cancelPointerLock = () => {
        var _a;
        document.removeEventListener("mousemove", this.cancelPointerLock);
        (_a = document.exitPointerLock) == null ? void 0 : _a.call(document);
        this.pointerLocked = false;
      };
      this.setPointerState = () => __async(this, null, function* () {
        var _a;
        if (this.pointerLocked && !this.isFullScreenAd()) {
          this.cancelPointerLock();
          return;
        } else if (!this.pointerLocked && this.isFullScreenAd()) {
          const element = (_a = this.domProxy) == null ? void 0 : _a.getMain();
          if (!element || !element.requestPointerLock) {
            return;
          }
          try {
            this.pointerLocked = true;
            yield element.requestPointerLock();
            this.cancelTimeout = setTimeout(() => document == null ? void 0 : document.addEventListener("mousemove", this.cancelPointerLock), 100);
          } catch (error) {
            this.pointerLocked = false;
            this.logger.warn(error);
          }
        }
      });
      this.hMovement = (e) => {
        if (this.presoModel.isFullscreen) {
          this.pointerLockDebouncer();
        }
      };
      this.preloadContent = false;
    }
    set adAdapter(adapter) {
      this.pAdAdapter = adapter;
    }
    get adAdapter() {
      return this.pAdAdapter;
    }
    get adInProgress() {
      return this.presoModel.isCurrentVideoAd;
    }
    onRemove() {
      var _a, _b;
      (_b = (_a = this.pAdAdapter) == null ? void 0 : _a.destroy) == null ? void 0 : _b.call(_a);
      this.pAdAdapter = null;
      this.cancelPointerLock();
      this.pointerLockDebouncer.cancel();
      clearTimeout(this.cancelTimeout);
      this.monitorActivity(false);
      super.onRemove();
    }
    closeAds() {
      var _a, _b;
      (_a = this.domProxy) == null ? void 0 : _a.showAdContainer(false);
      (_b = this.adAdapter) == null ? void 0 : _b.destroy();
      this.pAdAdapter = null;
    }
    beforePlayOnUserGesture() {
      var _a;
      (_a = this.adAdapter) == null ? void 0 : _a.playClicked();
    }
    playOnUserGesture() {
      if (this.hasContent) {
        super.playOnUserGesture();
      } else {
        this.play();
      }
    }
    start() {
      var _a, _b, _c;
      const contentStartTime = this.resourceProxy.playback.startTime;
      const showPreRoll = this.resourceProxy.ad.showPrerollOnNonZeroStart;
      const nonZeroStart = !isNaN(contentStartTime) && contentStartTime > 0;
      super.start();
      this.mute(this.presoModel.isMuted);
      if (nonZeroStart && showPreRoll) {
        this.pendingSeekTime = contentStartTime;
      }
      if (this.isClickToPlay) {
        this.setForClickToPlay();
      } else {
        const r = this.resourceProxy.resource;
        if (((_b = (_a = r.ad) == null ? void 0 : _a.csai) == null ? void 0 : _b.adCallUrl) && !((_c = r.location) == null ? void 0 : _c.mediaUrl)) {
          this.play();
        } else {
          this.notify("videoLoadStart" /* VIDEO_LOAD_START */);
          this.prepareForPlayback();
        }
      }
    }
    /** override */
    getAdBreakTimes() {
      var _a;
      const aci = [];
      (_a = this.breakSchedule) == null ? void 0 : _a.forEach((b) => {
        aci.push(__spreadValues({
          start: b.startTime,
          streamTimeStart: b.streamStartTime,
          end: b.endTime,
          streamTimeEnd: b.streamStartTime + b.duration,
          played: b.hasPlayed
        }, b));
      });
      return aci;
    }
    getDelegate() {
      const obj = apiCollection({}, this);
      return obj;
    }
    play() {
      var _a;
      if (!this.presoModel.started) {
        this.presoModel.started = true;
        this.adAdapterStarted = true;
        return Promise.resolve(this.adAdapter.start());
      } else {
        if (this.adInProgress && ((_a = this.adAdapter) == null ? void 0 : _a.resume)) {
          return Promise.resolve(this.adAdapter.resume());
        }
        return this.playVideo();
      }
    }
    pause() {
      var _a;
      if (this.adInProgress && ((_a = this.adAdapter) == null ? void 0 : _a.pause)) {
        this.adAdapter.pause();
        return;
      }
      this.pauseVideo();
    }
    getBuffered(asStreamTime = false) {
      const b = super.getBuffered(asStreamTime);
      if (asStreamTime === true) {
        return b;
      }
      return b.map((r) => {
        var _a, _b, _c, _d;
        return {
          startTime: ((_b = (_a = this.adAdapter).contentTimeForStreamTime) == null ? void 0 : _b.call(_a, r.startTime)) || r.startTime,
          endTime: ((_d = (_c = this.adAdapter).contentTimeForStreamTime) == null ? void 0 : _d.call(_c, r.endTime)) || r.endTime
        };
      });
    }
    // override
    mute(flag) {
      var _a;
      (_a = this.adAdapter) == null ? void 0 : _a.setMuteState(flag);
      super.mute(flag);
    }
    setVolume(value) {
      var _a;
      (_a = this.adAdapter) == null ? void 0 : _a.setVolume(value);
      super.setVolume(value);
    }
    // override
    seek(position) {
      const streamSeekTimeRequested = this.streamTimeForContentTime(position);
      const permittedStreamSeekTime = this.getPermittedSeekTime(position);
      if (this.hasMidRolls && this.adAdapter && permittedStreamSeekTime !== streamSeekTimeRequested) {
        this.pendingSeekTime = streamSeekTimeRequested;
        this.notify("seekredirectstart" /* SEEK_REDIRECT_START */, {
          requestedSeekTime: position,
          actualSeekTime: this.contentTimeForStreamTime(permittedStreamSeekTime)
        });
      }
      if (this.contentComplete && !this.contentSegmentStarted) {
        this.contentSegmentStarted = true;
      }
      return super.seek(permittedStreamSeekTime);
    }
    skipAd() {
      var _a;
      (_a = this.adAdapter) == null ? void 0 : _a.skipAd();
    }
    pauseContent() {
      var _a;
      this.pauseVideo();
      (_a = this.domProxy) == null ? void 0 : _a.showAdContainer(true);
    }
    resumeContent() {
      var _a, _b;
      this.currentAd = null;
      this.currentBreak = null;
      (_a = this.domProxy) == null ? void 0 : _a.showAdClickElement(false);
      (_b = this.domProxy) == null ? void 0 : _b.showAdContainer(false);
      if (this.fatalContentErrorReceived) {
        return;
      }
      if (!this.hasContent || this.contentComplete) {
        super.respondToVideoEnd();
        return;
      }
      if (!this.contentStartReleased) {
        const contentStartTime = this.resourceProxy.playback.startTime, nonZeroStart = !isNaN(contentStartTime) && contentStartTime > 0;
        if (nonZeroStart) {
          const breaks = this.getAdBreakTimes();
          const adjustedStart = this.adjustStartTimeForAdBreakProximity(contentStartTime, breaks);
          this.resourceProxy.playback.startTime = adjustedStart;
        }
        this.load().then(() => {
          this.resumeContentPlayComplete();
        }).catch(this.onLoadError);
        return;
      }
      this.resumeContentPlayComplete();
    }
    streamIdAvailable(id) {
      this.notify("streamidavailable" /* STREAM_ID_AVAILABLE */, { streamId: id });
    }
    applyHook(type, value, metadata) {
      return super.applyHook(type, value, metadata);
    }
    adSkippableStateChanged() {
      this.notify("adskippablestatechange" /* AD_SKIPPABLE_STATE_CHANGE */);
    }
    adSegmentStarted() {
      this.endContentSegment();
      this.presoModel.isCurrentVideoAd = true;
      this.notify("adsegmentstart" /* AD_SEGMENT_START */);
    }
    adSegmentReentered() {
      this.notify("adsegmentreentered" /* AD_SEGMENT_REENTERED */);
    }
    adSegmentEnded() {
      this.contentSegmentStarted = false;
      if (this.presoModel) {
        this.presoModel.isCurrentVideoAd = false;
      }
      this.notify("adsegmentend" /* AD_SEGMENT_END */);
    }
    adBreaksAvailable(adBreaks) {
      this.hasMidRolls = adBreaks.some((b) => b.type === "MID" /* MID */);
      this.breakSchedule = adBreaks;
      const times = adBreaks.map((b) => b.startTime);
      this.notify("adcuepointsavailable" /* AD_CUEPOINTS_AVAILABLE */, {
        cuepoints: times,
        adBreaks
      });
    }
    seekToStreamTime(t) {
      this.seekVideo(t);
    }
    adBreakStart() {
      var _a;
      this.endContentSegment();
      this.updateSize();
      (_a = this.domProxy) == null ? void 0 : _a.showAdContainer(true);
      this.presoModel.isCurrentVideoAd = true;
      if (this.timeSpent.startTime === null) {
        this.startSession();
      }
      this.notify("adbreakstart" /* AD_BREAK_START */);
    }
    adBreakMetadata(breakInfo) {
      this.currentBreak = breakInfo;
      this.notify("adbreakmetadata" /* AD_BREAK_METADATA */, { adBreakInfo: breakInfo });
    }
    adLoaded() {
    }
    adStart(adData) {
      this.currentAd = adData;
      this.respondToPlaybackStateChange("playing" /* PLAYING */);
      this.notify("adstart" /* AD_START */, { adInfo: adData });
    }
    adProgress(currentTime, duration) {
      this.notify("adprogress" /* AD_PROGRESS */, {
        currentTime,
        duration,
        streamTime: this.presoModel.streamTime,
        streamDuration: this.presoModel.streamDuration
      });
      this.checkPreload(currentTime, duration);
    }
    adFirstQuartile() {
      this.notify("adfirstquartile" /* AD_FIRST_QUARTILE */);
    }
    adMidpoint() {
      this.notify("admidpoint" /* AD_MIDPOINT */);
    }
    adThirdQuartile() {
      this.notify("adthirdquartile" /* AD_THIRD_QUARTILE */);
    }
    adComplete() {
      this.currentAd = null;
      this.notify("adcomplete" /* AD_COMPLETE */);
    }
    adBreakComplete() {
      var _a, _b;
      this.currentBreak = null;
      this.currentAd = null;
      this.isPreloading = false;
      (_a = this.domProxy) == null ? void 0 : _a.showAdContainer(false);
      (_b = this.domProxy) == null ? void 0 : _b.showAdClickElement(false);
      this.presoModel.isCurrentVideoAd = false;
      this.notify("adbreakcomplete" /* AD_BREAK_COMPLETE */);
      if (this.pendingSeekTime && this.contentStartReleased) {
        const t = this.pendingSeekTime;
        this.pendingSeekTime = null;
        this.contentPlaybackStateProxy.model.started && this.notify("seekredirectcomplete" /* SEEK_REDIRECT_COMPLETE */);
        this.seekVideo(t);
      }
    }
    adClicked(url = "") {
      var _a, _b;
      const cp = (_b = (_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.model) == null ? void 0 : _b.state;
      if (cp === "playing" /* PLAYING */) {
        this.pause();
      }
      this.notify("adclick" /* AD_CLICK */, { clickThroughUrl: url });
    }
    adError(info) {
      this.currentAd = null;
      if (!info.message) {
        info.message = AppResources.messages.UNSPECIFIED_ERROR;
      }
      this.notify("aderror" /* AD_ERROR */, info);
    }
    adPaused() {
      this.respondToPlaybackStateChange("paused" /* PAUSED */);
      this.notify("adpaused" /* AD_PAUSED */);
    }
    adResumed() {
      this.notify("resourcebuffering" /* RESOURCE_BUFFERING */, { buffering: false });
      this.respondToPlaybackStateChange("playing" /* PLAYING */);
      this.notify("adplaying" /* AD_PLAYING */);
    }
    adStalled(adInfo) {
      this.logger.dir("warn" /* WARN */, adInfo, "Stalled Ad Info");
      this.notify("adstalled" /* AD_STALLED */, new PlayerError(
        "4000" /* AD_STALLED */,
        "Stalled ad detected" /* AD_STALLED */,
        adInfo,
        false,
        "Ad" /* AD */
      ));
    }
    adBreakDiscarded() {
      this.notify("adbreakdiscarded" /* AD_BREAK_DISCARDED */);
    }
    adSkipped() {
      this.notify("adskipped" /* AD_SKIPPED */);
    }
    allAdsComplete() {
    }
    adBuffering(state) {
    }
    displayAdClickElement(flag) {
      var _a;
      (_a = this.domProxy) == null ? void 0 : _a.showAdClickElement(flag);
    }
    ///////////////////////////////////////////////////////////
    // END Delegate interface
    ///////////////////////////////////////////////////////////
    resumeContentPlayComplete() {
      return __async(this, null, function* () {
        if (this.pendingSeekTime && this.contentStartReleased) {
          yield this.seekVideo(this.pendingSeekTime).catch((e) => {
            this.log("warn" /* WARN */, "APM#resumeContentPlayComplete; A seek() call failed.");
            this.logger.dir("debug" /* DEBUG */, e, "Error");
          });
          this.notify("seekredirectcomplete" /* SEEK_REDIRECT_COMPLETE */);
          this.pendingSeekTime = null;
        }
        this.play();
      });
    }
    // Hides cursor during ad play in fullscreen if mouse is idle
    isFullScreenAd() {
      return this.presoModel.isFullscreen && this.adInProgress;
    }
    monitorActivity(flag = false) {
      var _a, _b;
      if (!System.isDesktop) {
        return;
      }
      const verb = flag ? "addEventListener" : "removeEventListener";
      (_b = (_a = this.domProxy) == null ? void 0 : _a.getMain()) == null ? void 0 : _b[verb]("mousemove", this.hMovement);
    }
    ///////////////////////////////////////////////////////////
    // Respond to playback commands and adapter events
    // +  calls to adapter
    handleNotification(notification) {
      var _a, _b, _c;
      const { name, body } = notification;
      let fsEvent = false;
      switch (name) {
        case "fullscreenchange" /* FULLSCREEN_CHANGE */:
          (_a = this.adAdapter) == null ? void 0 : _a.setFullscreenState(body.fullscreen);
          fsEvent = true;
          break;
        case "qualitychange" /* QUALITY_CHANGE */:
          const br = ((_b = body.quality) == null ? void 0 : _b.bitrate) ? Math.round(body.quality.bitrate * 1e-3) : -1;
          (_c = this.adAdapter) == null ? void 0 : _c.setContentBitrate(br);
          break;
      }
      super.handleNotification(notification);
      if (fsEvent) {
        this.monitorActivity(body.fullscreen);
      }
    }
    updateSize() {
      var _a, _b;
      const dimensions = (_a = this.domProxy) == null ? void 0 : _a.getPresentationRect();
      if (dimensions) {
        (_b = this.adAdapter) == null ? void 0 : _b.updateSize(dimensions);
      }
    }
    respondToSizeChange() {
      this.updateSize();
      super.respondToSizeChange();
    }
    respondToId3Data(d) {
      this.adAdapter.handleTimedMetadata(d);
      super.respondToId3Data(d);
    }
    respondToVideoPaused() {
      super.respondToVideoPaused();
      if (this.adInProgress) {
        this.notify("adpaused" /* AD_PAUSED */);
      } else {
        this.respondToPlaybackStateChange("paused" /* PAUSED */);
        this.notify("contentpaused" /* CONTENT_PAUSED */);
      }
    }
    respondToPlaybackStateChange(state) {
      if (this.isPreloading && state === "waiting" /* WAITING */) {
        return;
      }
      super.respondToPlaybackStateChange(state);
    }
    respondToVideoPlaying() {
      super.respondToVideoPlaying();
      if (!this.adAdapterStarted) {
        this.adAdapterStarted = true;
        this.adAdapter.start();
      }
      const t = this.contentPlaybackStateProxy.model.time;
      if (t > 0.5 && !this.adInProgress && this.contentSegmentStarted) {
        this.respondToPlaybackStateChange("playing" /* PLAYING */);
        this.notify("contentplaying" /* CONTENT_PLAYING */);
      } else if (this.adInProgress) {
        this.notify("adplaying" /* AD_PLAYING */);
      }
    }
    // Call plugin.setStreamTime()
    respondToVideoTimeUpdate(streamTime) {
      var _a, _b, _c;
      const cps = this.contentPlaybackStateProxy.model;
      this.presoModel.streamTime = streamTime;
      (_a = this.adAdapter) == null ? void 0 : _a.setStreamTime(streamTime);
      cps.time = this.contentTimeForStreamTime(streamTime);
      if (this.adInProgress) {
        return;
      }
      if (this.fatalContentErrorReceived) {
        return;
      }
      if (streamTime > 0.75 && !this.contentSegmentStarted) {
        cps.started = true;
        (_b = this.domProxy) == null ? void 0 : _b.showAdClickElement(false);
        (_c = this.domProxy) == null ? void 0 : _c.showAdContainer(false);
        !this.contentStartReleased && this.signalContentStart();
        this.contentSegmentStarted = true;
        if (this.hasMidRolls || cps.streamType === "LIVE" /* LIVE */ || cps.streamType === "DVR" /* DVR */) {
          this.notify("contentsegmentstart" /* CONTENT_SEGMENT_START */);
        } else {
          this.notify("contentplaying" /* CONTENT_PLAYING */);
        }
      }
      if (this.contentSegmentStarted) {
        super.respondToVideoTimeUpdate(streamTime);
      }
      if (cps.streamType !== "LIVE" /* LIVE */ && cps.time >= cps.duration && !this.contentCompleteReleased) {
        this.signalContentComplete();
      }
    }
    endContentSegment() {
      if (this.contentSegmentStarted) {
        const cps = this.contentPlaybackStateProxy.model;
        this.contentSegmentStarted = false;
        if (this.hasMidRolls || cps.streamType === "LIVE" /* LIVE */ || cps.streamType === "DVR" /* DVR */) {
          this.notify("contentsegmentend" /* CONTENT_SEGMENT_END */);
        }
      }
    }
    respondToVideoEnd() {
      var _a, _b;
      if (!this.contentCompleteReleased) {
        this.signalContentComplete();
      }
      (_a = this.adAdapter) == null ? void 0 : _a.contentComplete();
      const hasPost = (_b = this.breakSchedule) == null ? void 0 : _b.find((b) => b.type === "POST" /* POST */);
      if (!hasPost) {
        super.respondToVideoEnd();
      }
    }
    respondToDurationChange(duration) {
      if (duration && !isNaN(duration) && duration > 0) {
        this.adAdapter.setStreamDuration(duration);
        this.presoModel.streamDuration = duration;
        const contentDur = this.contentTimeForStreamTime(duration);
        this.contentPlaybackStateProxy.model.duration = contentDur;
        if (!this.contentDurationReleased) {
          this.releaseContentDuration(duration);
        }
      }
    }
    respondToError(data) {
      this.fatalContentErrorReceived = data.fatal;
      super.respondToError(data);
    }
    isContentComplete() {
      return this.contentComplete;
    }
    ///////////
    // PRIVATE
    startContentSegment() {
      var _a;
      this.contentSegmentStarted = true;
      this.contentPlaybackStateProxy.model.started = true;
      (_a = this.domProxy) == null ? void 0 : _a.showAdContainer(false);
      if (!this.contentStartReleased) {
        this.signalContentStart();
      }
      this.notify("contentsegmentstart" /* CONTENT_SEGMENT_START */);
    }
    checkPreload(currentTime, duration) {
      var _a, _b, _c, _d, _e, _f;
      if (this.isPreloading) {
        return;
      }
      const preload = ((_d = (_c = (_b = (_a = this.resourceProxy) == null ? void 0 : _a.resource) == null ? void 0 : _b.ad) == null ? void 0 : _c.csai) == null ? void 0 : _d.preloadContentAtEndOfPreRoll) === true;
      if (!preload) {
        return;
      }
      const lastAd = ((_e = this.currentAd) == null ? void 0 : _e.adPosition) === ((_f = this.currentBreak) == null ? void 0 : _f.adTotal);
      if (lastAd && !this.system.isIos) {
        const threshold = clampValue(Math.ceil(duration / 4), 2, 10);
        const time = Math.round(currentTime);
        if (time >= threshold) {
          this.isPreloading = true;
          this.load().catch(this.onLoadError);
        }
      }
    }
    signalContentStart() {
      this.contentStartReleased = true;
      this.notify("contentstart" /* CONTENT_START */);
    }
    signalContentComplete() {
      this.contentComplete = true;
      if (this.contentSegmentStarted) {
        this.endContentSegment();
      }
      this.contentCompleteReleased = true;
      this.notify("contentcomplete" /* CONTENT_COMPLETE */);
    }
    contentTimeForStreamTime(time) {
      var _a;
      return ((_a = this.adAdapter) == null ? void 0 : _a.contentTimeForStreamTime) ? this.adAdapter.contentTimeForStreamTime(time) : time;
    }
    streamTimeForContentTime(time) {
      var _a;
      return ((_a = this.adAdapter) == null ? void 0 : _a.streamTimeForContentTime) ? this.adAdapter.streamTimeForContentTime(time) : time;
    }
    getPermittedSeekTime(time) {
      var _a;
      return ((_a = this.adAdapter) == null ? void 0 : _a.getPermittedSeekTime) ? this.adAdapter.getPermittedSeekTime(time) : time;
    }
    listNotificationInterests() {
      return super.listNotificationInterests().concat([
        "fullscreenchange" /* FULLSCREEN_CHANGE */,
        "qualitychange" /* QUALITY_CHANGE */
      ]);
    }
    onRegister() {
      var _a, _b;
      super.onRegister();
      const { idleDelay } = this.facade.retrieveProxy("ActivityProxy" /* ActivityProxy */);
      this.pointerLockDebouncer = debounce(this.setPointerState, idleDelay);
      (_a = this.domProxy) == null ? void 0 : _a.showAdContainer(false);
      (_b = this.domProxy) == null ? void 0 : _b.showAdClickElement(false);
    }
  };
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "pauseContent", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "resumeContent", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "streamIdAvailable", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "applyHook", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adSkippableStateChanged", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adSegmentStarted", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adSegmentReentered", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adSegmentEnded", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adBreaksAvailable", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "seekToStreamTime", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adBreakStart", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adBreakMetadata", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adLoaded", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adStart", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adProgress", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adFirstQuartile", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adMidpoint", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adThirdQuartile", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adComplete", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adBreakComplete", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adClicked", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adError", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adPaused", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adResumed", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adStalled", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adBreakDiscarded", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adSkipped", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "allAdsComplete", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "adBuffering", 1);
  __decorateClass([
    apiMethod()
  ], AdPresentationMediator.prototype, "displayAdClickElement", 1);

  // src/view/ContentPresentationMediator.ts
  var ContentPresentationMediator = class extends CommonPresentationMediator {
    // start the presentation
    start() {
      if (this.isClickToPlay) {
        this.setForClickToPlay();
      } else {
        this.notify("videoLoadStart" /* VIDEO_LOAD_START */);
      }
    }
    respondToVideoPlaying() {
      const cps = this.contentPlaybackStateProxy.model;
      let sendStart = false;
      cps.started = true;
      if (!this.presoModel.started) {
        sendStart = true;
      }
      super.respondToVideoPlaying();
      if (sendStart) {
        this.notify("contentstart" /* CONTENT_START */);
      }
      this.notify("contentplaying" /* CONTENT_PLAYING */);
    }
    respondToVideoTimeUpdate(streamTime) {
      if (this.contentComplete) {
        return;
      }
      const cps = this.contentPlaybackStateProxy.model;
      this.presoModel.streamTime = streamTime;
      cps.time = streamTime;
      if (this.presoModel.started) {
        super.respondToVideoTimeUpdate(streamTime);
      }
    }
    respondToVideoPaused() {
      super.respondToVideoPaused();
      this.notify("contentpaused" /* CONTENT_PAUSED */);
    }
    respondToIsPlayingLiveChange(isLive) {
      super.respondToIsPlayingLiveChange(isLive);
    }
    respondToVideoEnd() {
      this.contentComplete = true;
      this.notify("contentcomplete" /* CONTENT_COMPLETE */);
      super.respondToVideoEnd();
    }
    respondToDurationChange(duration) {
      this.presoModel.streamDuration = duration;
      this.contentPlaybackStateProxy.model.duration = duration;
      if (!this.contentDurationReleased) {
        this.releaseContentDuration(duration);
      }
    }
    onRegister() {
      super.onRegister();
      this.domProxy && this.domProxy.showAdContainer(false);
      !this.isClickToPlay && this.prepareForPlayback();
    }
  };

  // src/controller/PrepPlaybackCommand.ts
  var PrepPlaybackCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      var _a;
      const sys = this.system;
      const resource = notification.body;
      if (!((_a = sys.global) == null ? void 0 : _a.document)) {
        this.sendNotification("videostarterror" /* VIDEO_START_ERROR */, { error: AppResources.messages.ENVIRONMENT_NOT_SUPPORTED, fatal: true });
        return;
      }
      const presoState = this.getModel("PresentationState" /* PresentationState */);
      const playerOpts = this.getModel("PlayerOptions" /* PlayerOptions */);
      this.facade.registerProxy(new ContentPlaybackStateProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */));
      this.checkAutoplay(playerOpts).then((result) => {
        this.processAutoplaySupport(result, presoState, playerOpts);
        this.createPresentation(resource, presoState, playerOpts);
      });
    }
    createPresentation(resource, presentationState, playerOpts) {
      return __async(this, null, function* () {
        const presoMed = yield this.getPresentationMediator(resource, presentationState, playerOpts);
        if (!presoMed) {
          return;
        }
        this.facade.registerMediator(presoMed);
        this.sendNotification("startPresentation" /* START_PRESENTATION */);
      });
    }
    getPresentationMediator(resource, presentationState, playerOpts) {
      return __async(this, null, function* () {
        var _a, _b, _c;
        const domProxy = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
        const video = this.getVideo(domProxy, playerOpts);
        let ret = null;
        if (domProxy && !video) {
          this.sendNotification("resourceerror" /* RESOURCE_ERROR */, {
            code: "9999" /* UNEXPECTED_CONDITION */,
            message: AppResources.messages.VIDEO_PLAYBACK_UNAVAILABLE,
            fatal: true
          });
          return ret;
        }
        const name = "PresentationMediator" /* PRESENTATION_MEDIATOR */;
        const adEnabled = ((_a = resource == null ? void 0 : resource.ad) == null ? void 0 : _a.csai) || ((_b = resource == null ? void 0 : resource.ad) == null ? void 0 : _b.ssai);
        if (adEnabled || presentationState.isAutoplay || playerOpts.playsInline) {
          domProxy == null ? void 0 : domProxy.setVideoAttribute("playsinline", "");
        }
        if (adEnabled) {
          try {
            this.logger.time("ad-adapter-creation" /* AD_ADAPTER_CREATION */);
            const mediator = new AdPresentationMediator(name, video);
            const delegate = mediator.getDelegate();
            const adapterProxy = this.facade.retrieveProxy("AdapterProxy" /* AdapterProxy */);
            const adapter = yield adapterProxy.createAdapter(
              "ad" /* AD */,
              resource,
              () => delegate
            );
            mediator.adAdapter = adapter;
            this.logger.timeEnd("ad-adapter-creation" /* AD_ADAPTER_CREATION */);
            this.logger.time("ad-resource-creation" /* AD_RESOURCE_CREATION */);
            const resourceOverride = yield (_c = adapter.getResource) == null ? void 0 : _c.call(adapter);
            this.logger.timeEnd("ad-resource-creation" /* AD_RESOURCE_CREATION */);
            if (resourceOverride) {
              resource = resourceOverride;
            }
            ret = mediator;
          } catch (error) {
            this.sendNotification("aderror" /* AD_ERROR */, {
              code: error.code || "4400" /* AD_ADAPTER_ERROR */,
              message: error.message,
              cause: error,
              fatal: true
            });
          }
        } else {
          ret = new ContentPresentationMediator(name, video);
        }
        this.createResourceProxy(resource);
        return ret;
      });
    }
    createResourceProxy(resource) {
      const resourceProxy = new ResourceProxy("ResourceProxy" /* ResourceProxy */, resource);
      this.facade.registerProxy(resourceProxy);
    }
    getVideo(domProxy, playerOpts) {
      const sys = this.system;
      if (sys.isWebMaf) {
        return sys.webMafPlayer;
      } else if (domProxy) {
        if (playerOpts.reuseVideoElement !== true) {
          domProxy.recreateVideo();
        }
        return domProxy.getVideo();
      }
      return null;
    }
    ////////////
    // autoplay
    processAutoplaySupport(result, presoMdl, playerOpts) {
      if (presoMdl.isAutoplay) {
        return;
      }
      const apOpt = playerOpts.autoplay;
      const mutedOk = result.supportsMutedAutoplay;
      const unmutedOk = result.supportsUnmutedAutoplay;
      const wantsMuted = apOpt === "attemptMuted" /* ATTEMPT_MUTED */ || apOpt === "attemptUnmutedThenMuted" /* ATTEMPT_UNMUTED_THEN_MUTED */;
      const wantsUnmuted = apOpt === "attemptUnmuted" /* ATTEMPT_UNMUTED */;
      const conflict = wantsMuted && !mutedOk || wantsUnmuted && !unmutedOk;
      if (conflict) {
        this.sendNotification("autoplayblocked" /* AUTOPLAY_BLOCKED */, new Error("Autoplay capability conflict."), "internal" /* INTERNAL */);
      }
      presoMdl.isMuteAtPlayStart = apOpt === "attemptMuted" /* ATTEMPT_MUTED */ && mutedOk || apOpt === "attemptUnmutedThenMuted" /* ATTEMPT_UNMUTED_THEN_MUTED */ && !unmutedOk && mutedOk;
      presoMdl.isAutoplay = this.shouldAutoplay(apOpt, result);
    }
    shouldAutoplay(opt, info) {
      if (isEmpty(opt) || opt === "none" /* NONE */) {
        return false;
      }
      const mutedOk = info.supportsMutedAutoplay;
      const unmutedOk = info.supportsUnmutedAutoplay;
      const muteOnly = opt === "attemptMuted" /* ATTEMPT_MUTED */ && mutedOk;
      const soundOnly = opt === "attemptUnmuted" /* ATTEMPT_UNMUTED */ && unmutedOk;
      const fallback = !soundOnly && (opt === "attemptUnmutedThenMuted" /* ATTEMPT_UNMUTED_THEN_MUTED */ && mutedOk);
      return muteOnly || soundOnly || fallback;
    }
    checkAutoplay(playerOpts) {
      var _a;
      const apc = this.getService("AutoplayCapabilities" /* AutoplayCapabilities */);
      return apc.detectCapabilities((_a = playerOpts.overrides) == null ? void 0 : _a.blankVideoUrl);
    }
  };

  // src/controller/PrepResourceCommand.ts
  var PrepResourceCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      if (!notification.body.resource) {
        this.invalidResource(AppResources.messages.RESOURCE_MISSING);
        return;
      }
      const hooks = this.getProxy("HookProxy" /* HookProxy */);
      hooks.applyHook("attachresource" /* ATTACH_RESOURCE */, new ResourceConfiguration(notification.body.resource)).then((resource) => {
        try {
          ResourceConfiguration.validate(resource);
        } catch (error) {
          this.invalidResource(error.message);
        }
        if (!resource.sessionId) {
          resource.sessionId = uuid();
        }
        if (!resource.cmcd.sessionId) {
          resource.cmcd.sessionId = resource.sessionId;
        }
        if (resource.contentId && !resource.cmcd.contentId) {
          resource.cmcd.contentId = resource.contentId;
        }
        this.facade.sendNotification("playResource" /* PLAY_RESOURCE */, resource, "internal" /* INTERNAL */);
      }).catch((error) => {
        this.facade.sendNotification("resourceerror" /* RESOURCE_ERROR */, error.cause || error, "internal" /* INTERNAL */);
      });
    }
    invalidResource(message) {
      this.facade.sendNotification("resourceerror" /* RESOURCE_ERROR */, {
        message: `${AppResources.messages.INVALID_RESOURCE}: ${message}`,
        code: "1000" /* INVALID_RESOURCE_FORMAT */,
        fatal: true
      }, "internal" /* INTERNAL */);
    }
  };

  // src/controller/PresentationStateChangeCommand.ts
  var PresentationStateChangeCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      var _a, _b;
      const { facade } = this;
      switch (notification.name) {
        case "resourceComplete" /* RESOURCE_COMPLETE */:
          const playerOptions = this.getModel("PlayerOptions" /* PlayerOptions */);
          if (((_a = playerOptions.overrides) == null ? void 0 : _a.closeOnEnded) === false) {
            return;
          }
          const presoM = facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
          presoM == null ? void 0 : presoM.close();
          return;
        case "resourceend" /* RESOURCE_END */:
          facade.retrieveMediator("TimerMediator" /* TIMER_MEDIATOR */).killTimer();
          this.sendNotification("killResourcePresentation" /* KILL_RESOURCE_PRESENTATION */, null, "internal" /* INTERNAL */);
          break;
        case "resourcebuffering" /* RESOURCE_BUFFERING */:
          const dom = facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
          const main = dom == null ? void 0 : dom.getMain();
          main == null ? void 0 : main.setAttribute("aria-busy", notification.body.buffering.toString());
          break;
        case "adbreakstart" /* AD_BREAK_START */:
          const pres = facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
          (_b = pres == null ? void 0 : pres.adapter) == null ? void 0 : _b.clearText();
          break;
      }
    }
  };

  // src/controller/ReadyCommand.ts
  var ReadyCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const dom = this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
      if (dom) {
        const main = dom.getMain();
        main.setAttribute("role", "region");
        const tabindex = main.getAttribute("tabindex") || "0";
        main.setAttribute("tabindex", tabindex);
        const video = dom.getVideo();
        if (video && !video.player) {
          video.player = notification.body;
          video.avia = System.appNamespace;
        }
      }
    }
  };

  // src/controller/ResumePlaybackCommand.ts
  var ResumePlaybackCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const presoState = this.getModel("PresentationState" /* PresentationState */);
      const pm = this.facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
      presoState.suspended = false;
      pm.resume();
      const cps = this.getProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
      this.sendNotification("playbackresumed" /* PLAYBACK_RESUMED */, { contentTime: cps.model.time });
    }
  };

  // src/controller/StartPresentationCommand.ts
  var StartPresentationCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const presentationMediator = this.facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
      const resourceProxy = this.facade.retrieveProxy("ResourceProxy" /* ResourceProxy */);
      this.sendNotification("resourcestart" /* RESOURCE_START */, { resource: resourceProxy.resource });
      presentationMediator.start();
    }
  };

  // src/controller/SuspendPlaybackCommand.ts
  var SuspendPlaybackCommand = class extends LogAwareSimpleCommand {
    execute(notification) {
      const presoState = this.getModel("PresentationState" /* PresentationState */);
      const pm = this.facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
      pm.suspend();
      presoState.suspended = true;
      const cps = this.getProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
      this.sendNotification("playbacksuspended" /* PLAYBACK_SUSPENDED */, { contentTime: cps.model.time });
    }
  };

  // src/app/CommandMap.ts
  var CommandMap = {
    ["default" /* DEFAULT */]: null,
    ["bootApp" /* BOOT_APP */]: BootCommand,
    ["ready" /* READY */]: ReadyCommand,
    ["mutechange" /* MUTE_CHANGE */]: PlaybackCommand,
    ["volumechange" /* VOLUME_CHANGE */]: PlaybackCommand,
    ["resourceend" /* RESOURCE_END */]: PresentationStateChangeCommand,
    ["resourcebuffering" /* RESOURCE_BUFFERING */]: PresentationStateChangeCommand,
    ["adbreakstart" /* AD_BREAK_START */]: PresentationStateChangeCommand,
    ["metric" /* METRIC */]: MetricCommand,
    ["resourceComplete" /* RESOURCE_COMPLETE */]: PresentationStateChangeCommand,
    ["playOnUSerGesture" /* PLAY_ON_USER_GESTURE */]: PlaybackCommand,
    ["play" /* PLAY */]: PlaybackCommand,
    ["pause" /* PAUSE */]: PlaybackCommand,
    ["seek" /* SEEK */]: PlaybackCommand,
    ["switchAudioTrack" /* SWITCH_AUDIO_TRACK */]: PlaybackCommand,
    ["switchTextTrack" /* SWITCH_TEXT_TRACK */]: PlaybackCommand,
    ["switchTextMode" /* SWITCH_TEXT_MODE */]: PlaybackCommand,
    ["suspendPlayback" /* SUSPEND_PLAYBACK */]: SuspendPlaybackCommand,
    ["resumePlayback" /* RESUME_PLAYBACK */]: ResumePlaybackCommand,
    ["switchBitrate" /* SWITCH_BITRATE */]: AbrSwitchCommand,
    ["switchQualityCategory" /* SWITCH_QUALITY_CATEGORY */]: AbrSwitchCommand,
    ["autoQualitySwitching" /* AUTO_QUALITY_SWITCHING */]: AbrSwitchCommand,
    ["minBitrate" /* MIN_BITRATE */]: AbrSwitchCommand,
    ["maxBitrate" /* MAX_BITRATE */]: AbrSwitchCommand,
    ["prepResourceCollection" /* PREP_RESOURCE_COLLECTION */]: PrepResourceCommand,
    ["startPresentation" /* START_PRESENTATION */]: StartPresentationCommand,
    ["playResource" /* PLAY_RESOURCE */]: PrepPlaybackCommand,
    ["killResourcePresentation" /* KILL_RESOURCE_PRESENTATION */]: KillResourcePresentationCommand,
    ["changeLanguage" /* CHANGE_LANGUAGE */]: LocalizationCommand,
    ["playererror" /* PLAYER_ERROR */]: HandleErrorCommand,
    ["videostarterror" /* VIDEO_START_ERROR */]: HandleErrorCommand,
    ["videoplaybackerror" /* VIDEO_PLAYBACK_ERROR */]: HandleErrorCommand,
    ["resourceerror" /* RESOURCE_ERROR */]: HandleErrorCommand,
    ["aderror" /* AD_ERROR */]: HandleErrorCommand,
    ["adstalled" /* AD_STALLED */]: HandleErrorCommand
  };

  // src/app/VideoPlayer.ts
  var VideoPlayer = class extends AbstractApplication {
    /**
     * @internal
     */
    constructor(options) {
      super(Object.assign({
        commandMap: CommandMap,
        id: options.playerOptions.id || null
      }, options));
      this.pIsReady = false;
      this.seekTime = NaN;
      this.hSeekRedirect = (e) => {
        if (e.type === "seekredirectstart" /* SEEK_REDIRECT_START */ && !isNaN(e.detail.actualSeekTime)) {
          this.seekTime = e.detail.actualSeekTime;
        } else if (e.type === "seekredirectcomplete" /* SEEK_REDIRECT_COMPLETE */) {
          this.seekTime = NaN;
        }
      };
      this.api = apiCollection({}, this);
      this.target = this.api;
      this.logger = options.logger;
      this.init(options);
    }
    initialize() {
      const options = this.modelCollectionProxy.getModel("PlayerOptions" /* PlayerOptions */);
      const plugins = options.plugins || [];
      const api = this.getApi();
      const note = { name: "changeLanguage" /* CHANGE_LANGUAGE */, body: { language: options.language }, type: "internal" /* INTERNAL */ };
      this.on("seekredirectstart" /* SEEK_REDIRECT_START */, this.hSeekRedirect);
      this.on("seekredirectcomplete" /* SEEK_REDIRECT_COMPLETE */, this.hSeekRedirect);
      return api.registerPlugins(plugins).then(() => {
        this.localization.registerLocalizationData(options.localization);
        return this.sendAsyncNotification(note, ["languagechange" /* LANGUAGE_CHANGE */]);
      }).then(() => {
        this.pIsReady = true;
        this.sendNotification("ready" /* READY */, api);
        return api;
      }).catch((error) => {
        this.logger.error(error);
        throw error;
      });
    }
    /**
     * @internal
     */
    destroy() {
      var _a;
      this.off("seekredirectstart" /* SEEK_REDIRECT_START */, this.hSeekRedirect);
      this.off("seekredirectcomplete" /* SEEK_REDIRECT_COMPLETE */, this.hSeekRedirect);
      (_a = this.appMediator) == null ? void 0 : _a.disableKeyCommands();
      const destroy = super.destroy.bind(this);
      const logger = this.logger;
      return this.killCurrentResource().then(() => {
        this.apiAccessors = null;
        this.apiMethods = null;
        destroy();
      }).catch((e) => {
        logger.error(e);
        throw e;
      });
    }
    /**
     * @internal
     */
    getApi() {
      return this.api;
    }
    /**
    * @internal
    */
    killCurrentResource() {
      return this.appMediator.killCurrentResource();
    }
    hasListenerFor(type) {
      if (!isString(type)) {
        throw this.invalidArgException("hasListenerFor(type)", type);
      }
      return super.hasListenerFor(type);
    }
    on(type, func) {
      if (!isString(type) || typeof func !== "function") {
        throw this.invalidArgException("on(type, func)", type, func);
      }
      Deprecated.checkEventName(type);
      super.on(type, func);
    }
    once(type, func) {
      if (!isString(type) || typeof func !== "function") {
        throw this.invalidArgException("on(type, func)", type, func);
      }
      Deprecated.checkEventName(type);
      super.once(type, func);
    }
    off(type, func) {
      if (!isString(type)) {
        throw this.invalidArgException("on(type, func)", type, func);
      }
      super.off(type, func);
    }
    get isReady() {
      return this.pIsReady;
    }
    get id() {
      return this.appId;
    }
    get dimensions() {
      return this.appMediator.getDimensions() || null;
    }
    get video() {
      var _a;
      return (_a = this.dom) == null ? void 0 : _a.getVideo();
    }
    get isAutoplay() {
      return this.presentationState.isAutoplay;
    }
    get isFullscreen() {
      return this.presentationState.isFullscreen;
    }
    get isAd() {
      return this.presentationState.isCurrentVideoAd;
    }
    get muted() {
      return this.appMediator.getMuteState();
    }
    set muted(value) {
      if (typeof value !== "boolean") {
        throw this.invalidArgException("player.muted = boolean", value);
      }
      if (this.muted !== value) {
        this.transmitExtRequest("mutechange" /* MUTE_CHANGE */, { muted: value });
      }
    }
    get options() {
      var _a;
      const mdl = (_a = this.modelCollectionProxy.getModel("PlayerOptions" /* PlayerOptions */)) == null ? void 0 : _a.model;
      return mdl ? clone(mdl) : null;
    }
    get volume() {
      return this.appMediator.getVolume();
    }
    set volume(value) {
      if (!isNumber(value) || !inRange(value, 0, 1)) {
        throw this.invalidArgException("player.volume = number [0,1]", value);
      }
      if (this.volume !== value) {
        this.transmitExtRequest("volumechange" /* VOLUME_CHANGE */, { volume: value });
      }
    }
    get language() {
      return this.localization.language;
    }
    set language(value) {
      Deprecated.language();
      if (!isString(value)) {
        throw this.invalidArgException("player.language = string", value);
      }
      this.transmitExtRequest("changeLanguage" /* CHANGE_LANGUAGE */, { language: value });
    }
    get contentTime() {
      if (!isNaN(this.seekTime)) {
        return this.seekTime;
      }
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.time : 0;
    }
    get sessionTime() {
      const t = this.appMediator.getSessionTime();
      return t == null ? 0 : t;
    }
    get playbackTime() {
      const t = this.appMediator.getPlaybackTime();
      return t == null ? 0 : t;
    }
    get contentDuration() {
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.duration : NaN;
    }
    get streamTime() {
      return this.presentationState.streamTime;
    }
    get streamDuration() {
      return this.presentationState.streamDuration;
    }
    get playbackState() {
      var _a;
      return ((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.model.state) || "idle" /* IDLE */;
    }
    get autoQualitySwitching() {
      var _a;
      return ((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.qualitySwitchingMode) === "auto" /* AUTO */ || false;
    }
    set autoQualitySwitching(value) {
      if (!isBoolean(value)) {
        throw this.invalidArgException("player.autoQualitySwitching = boolean", value);
      }
      if (this.contentPlaybackStateReady) {
        this.transmitExtRequest("autoQualitySwitching" /* AUTO_QUALITY_SWITCHING */, { value });
      } else {
        this.log(AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
      }
    }
    get quality() {
      var _a, _b;
      return ((_b = (_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.qualityInfo) == null ? void 0 : _b.quality) || null;
    }
    get qualities() {
      var _a;
      return ((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.qualities) || [];
    }
    get qualityInfo() {
      Deprecated.qualityInfo();
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.qualityInfo : null;
    }
    get bitrate() {
      var _a;
      const quality = ((_a = this.qualityInfo) == null ? void 0 : _a.quality) || { bitrate: NaN };
      const bitrate = quality.bitrate != null ? quality.bitrate : NaN;
      return bitrate;
    }
    set bitrate(bitrate) {
      if (!isNumber(bitrate)) {
        throw this.invalidArgException("player.bitrate = number", bitrate);
      }
      if (this.contentPlaybackStateReady) {
        this.transmitExtRequest("switchBitrate" /* SWITCH_BITRATE */, { value: bitrate });
      } else {
        this.log(AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
      }
    }
    get qualityCategory() {
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.userQualityCategory : null;
    }
    set qualityCategory(category) {
      if (!isString(category)) {
        throw this.invalidArgException("player.qualityCategory = string", category);
      }
      if (this.contentPlaybackStateReady) {
        this.transmitExtRequest("switchQualityCategory" /* SWITCH_QUALITY_CATEGORY */, { value: category });
      } else {
        this.log(AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
      }
    }
    get minBitrate() {
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.minBitrate : NaN;
    }
    set minBitrate(value) {
      if (!isNumber(value)) {
        throw this.invalidArgException("player.minBitrate = number", value);
      }
      if (this.contentPlaybackStateReady) {
        this.transmitExtRequest("minBitrate" /* MIN_BITRATE */, { value });
      } else {
        this.log(AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
      }
    }
    get maxBitrate() {
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.maxBitrate : NaN;
    }
    set maxBitrate(value) {
      if (!isNumber(value)) {
        throw this.invalidArgException("player.maxBitrate = number", value);
      }
      if (this.contentPlaybackStateReady) {
        this.transmitExtRequest("maxBitrate" /* MAX_BITRATE */, { value });
      } else {
        this.log(AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
      }
    }
    get audioTracks() {
      var _a;
      return ((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.model.audioTracks.tracks) || [];
    }
    get audioTrackInfo() {
      Deprecated.audioTrackInfo();
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.audioTracks : null;
    }
    get audioTrack() {
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.audioTracks.track : null;
    }
    set audioTrack(track) {
      if (!track) {
        throw this.invalidArgException("player.audioTrack = AudioTrackInterface", track);
      }
      if (this.contentPlaybackStateReady) {
        this.transmitExtRequest("switchAudioTrack" /* SWITCH_AUDIO_TRACK */, { value: track });
      } else {
        this.log(AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
      }
    }
    attachResource(resource) {
      this.logger.time("resource-attachment" /* RESOURCE_ATTACHMENT */);
      return this.stop().then(() => {
        if (!resource || isEmpty(resource)) {
          throw this.invalidArgException("attachResource(resource)", resource);
        }
      }).then(() => {
        return this.sendAsyncNotification({
          name: "prepResourceCollection" /* PREP_RESOURCE_COLLECTION */,
          body: { resource, start: true }
        }, ["resourcestart" /* RESOURCE_START */]);
      }).then(() => {
        this.logger.timeEnd("resource-attachment" /* RESOURCE_ATTACHMENT */);
        return this.resource;
      }).catch((event) => {
        throw PlayerError.eventToError(event, "Resource" /* RESOURCE */);
      });
    }
    get resource() {
      return this.appMediator.getCurrentResource();
    }
    get textTrackEnabled() {
      return this.facade.retrieveProxy("TextTrackProxy" /* TextTrackProxy */).enabled;
    }
    set textTrackEnabled(value) {
      if (!isBoolean(value)) {
        throw this.invalidArgException("player.textTrackEnabled = boolean", value);
      }
      this.transmitExtRequest("switchTextMode" /* SWITCH_TEXT_MODE */, { value });
    }
    get textTrack() {
      var _a;
      return ((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.textTrackInfo.track) || null;
    }
    set textTrack(value) {
      if (!value || !value.kind) {
        throw this.invalidArgException("player.textTrack = TextTrackInterface", value);
      }
      if (this.contentPlaybackStateReady) {
        this.transmitExtRequest("switchTextTrack" /* SWITCH_TEXT_TRACK */, { value });
      } else {
        this.log(AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
      }
    }
    get textTracks() {
      var _a;
      return ((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.textTrackInfo.tracks) || [];
    }
    get textTrackInfo() {
      Deprecated.textTrackInfo();
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.textTrackInfo : null;
    }
    get streamType() {
      return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.streamType : null;
    }
    get isPlayingLive() {
      const lsi = this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.liveStreamInfo : null;
      return (lsi == null ? void 0 : lsi.isPlayingLive) === true;
    }
    get liveStreamUtcStart() {
      const lsi = this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.liveStreamInfo : null;
      return lsi ? lsi.absoluteStart : NaN;
    }
    get liveStreamUtcTime() {
      const lsi = this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.liveStreamInfo : null;
      return lsi ? lsi.absoluteTime : NaN;
    }
    get liveStreamUtcDuration() {
      const lsi = this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.liveStreamInfo : null;
      return lsi ? lsi.absoluteDuration : NaN;
    }
    get isSuspended() {
      return this.appMediator.isPlaybackSuspended();
    }
    get fullscreenElement() {
      return this.appMediator.getFullscreenElement();
    }
    set fullscreenElement(value) {
      var _a, _b;
      if (!value || !/element/.test((_b = (_a = value.constructor) == null ? void 0 : _a.name) == null ? void 0 : _b.toLowerCase())) {
        throw this.invalidArgException("player.fullscreenElement = HTMLElement", value);
      }
      this.appMediator.setFullscreenElement(value);
    }
    get pausable() {
      var _a;
      const pausable = ((_a = this.opts.playerOptions.overrides) == null ? void 0 : _a.liveStreamPausable) !== false;
      return pausable ? pausable : this.streamType !== "LIVE" /* LIVE */;
    }
    updateDimensions() {
      this.appMediator.updateDimensions();
    }
    enterFullscreen() {
      this.transmitExtRequest("enterFullscreenRequest" /* ENTER_FULLSCREEN_REQUEST */);
    }
    exitFullscreen() {
      this.transmitExtRequest("exitFullscreenRequest" /* EXIT_FULLSCREEN_REQUEST */);
    }
    play() {
      this.recordMetric("api" /* API */, "play" /* PLAY */);
      if (this.appMediator.isPlaybackSuspended()) {
        this.transmitExtRequest("resumePlayback" /* RESUME_PLAYBACK */);
      }
      const note = { name: "play" /* PLAY */, type: "external" /* EXTERNAL */ };
      return this.sendAsyncNotification(note, ["contentplaying" /* CONTENT_PLAYING */, "adplaying" /* AD_PLAYING */]);
    }
    pause() {
      this.recordMetric("api" /* API */, "pause" /* PAUSE */);
      if (!this.pausable) {
        this.log(AppResources.messages.PAUSING_LINEAR_LIVE_STREAM_NOT_ALLOWED);
        return this.stop();
      } else {
        if (this.playbackState === "paused" /* PAUSED */) {
          return Promise.resolve();
        }
        const note = { name: "pause" /* PAUSE */, type: "external" /* EXTERNAL */ };
        return this.sendAsyncNotification(note, ["contentpaused" /* CONTENT_PAUSED */, "adpaused" /* AD_PAUSED */]);
      }
    }
    togglePlayPause() {
      return this.playbackState === "playing" /* PLAYING */ ? this.pause() : this.play();
    }
    seek(position) {
      this.recordMetric("api" /* API */, "seek" /* SEEK */, position);
      return this.hooks.applyHook("seek" /* SEEK */, {
        position,
        contentTime: this.contentTime,
        contentDuration: this.contentDuration,
        streamTime: this.streamTime,
        streamDuration: this.streamDuration
      }).then((result) => {
        if (result == null) {
          return void 0;
        }
        const value = this.appMediator.validateSeek(result.position, this.contentDuration);
        if (value == null) {
          return Promise.reject(this.invalidArgException("seek(position)", result));
        }
        return this.seekInternal(value);
      });
    }
    jump(increment) {
      return this.seek(this.contentTime + increment);
    }
    getAdBreakTimes() {
      return this.appMediator.getAdBreakTimes() || [];
    }
    grabFrame() {
      return this.appMediator.grabFrame();
    }
    getThumbnail(time, internal = false) {
      var _a;
      if (!internal) {
        Deprecated.getThumbnail();
      }
      if (!isNumber(time)) {
        throw this.invalidArgException("getThumbnail(time)", time);
      }
      return ((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.getThumbnail(time)) || null;
    }
    getThumbnails(time) {
      var _a;
      if (!isNumber(time)) {
        throw this.invalidArgException("getThumbnails(time)", time);
      }
      return Promise.resolve((_a = this.getAdapter("playback" /* PLAYBACK */)) == null ? void 0 : _a.getThumbnails(time)).then((thumbs) => thumbs || []).then((thumbs) => {
        const thumb = this.getThumbnail(time, true);
        if (thumb) {
          thumbs.push(thumb.data);
        }
        return thumbs;
      });
    }
    getContainerRect() {
      return this.appMediator.getContainerRect();
    }
    registerPlugins(pc, callback) {
      if (!Array.isArray(pc)) {
        return Promise.reject(this.invalidArgException("registerPlugins(cfgArray, callback?)", pc, callback));
      }
      return new Promise((resolve, reject) => {
        this.transmitExtRequest("loadPlugins" /* LOAD_PLUGINS */, {
          plugins: pc,
          callback: () => {
            if (typeof callback === "function") {
              callback();
            }
            resolve();
          }
        });
      });
    }
    removePlugin(name) {
      if (!isString(name)) {
        throw this.invalidArgException("removePlugin(name)", name);
      }
      this.transmitExtRequest("removePlugin" /* REMOVE_PLUGIN */, {
        name
      });
    }
    registerAdapter(adapterConfig) {
      if (isEmpty(adapterConfig)) {
        throw this.invalidArgException("registerAdapter(adapterConfig)", adapterConfig);
      }
      return this.adapters.registerAdapter(adapterConfig);
    }
    retrieveAdapter(id) {
      if (!isString(id)) {
        throw this.invalidArgException("retrieveAdapter(id)", id);
      }
      return this.adapters.retrieveAdapter(id);
    }
    removeAdapter(id) {
      if (!isString(id)) {
        this.invalidArgException("removeAdapter(id)", id);
      }
      return this.adapters.removeAdapter(id);
    }
    registerHook(type, hook) {
      if (!isString(type) || typeof hook !== "function") {
        throw this.invalidArgException("registerHook(type, hook)", type, hook);
      }
      return this.hooks.registerHook(type, hook);
    }
    removeHook(type, hook) {
      if (!isString(type) || typeof hook !== "function") {
        throw this.invalidArgException("removeHook(type, hook)", type, hook);
      }
      return this.hooks.removeHook(type, hook);
    }
    getPlugin(name) {
      if (!isString(name)) {
        throw this.invalidArgException("getPlugin(name)", name);
      }
      return this.appMediator.getPlugin(name);
    }
    getAdapter(role) {
      const presentationMediator = this.presentationMediator;
      if (!isString(role)) {
        throw this.invalidArgException("getAdapter(role)", role);
      }
      if (!presentationMediator) {
        return null;
      }
      switch (role) {
        case "ad" /* AD */:
          return presentationMediator.adAdapter || null;
        case "playback" /* PLAYBACK */:
          return presentationMediator.adapter || null;
        default:
          return null;
      }
    }
    stop() {
      var _a;
      if (!((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.model) || !this.presentationMediator) {
        return Promise.resolve();
      }
      return this.appMediator.killCurrentResource();
    }
    goLive() {
      this.recordMetric("api" /* API */, "go_live" /* GO_LIVE */);
      if (this.streamType && this.streamType !== "VOD" /* VOD */) {
        return this.seekInternal(this.contentDuration);
      }
      return Promise.reject(`goLive() can not be invoked on streams of type ${this.streamType}`);
    }
    skipAd() {
      this.appMediator.skipAd();
    }
    focus(options) {
      var _a;
      const main = (_a = this.dom) == null ? void 0 : _a.getMain();
      if (main) {
        main.focus(options);
      }
    }
    blur() {
      const main = this.dom.getMain();
      if (main) {
        main.blur();
      }
    }
    getKeyEventTarget() {
      return this.appMediator.getKeyEventTarget();
    }
    disableKeyCommands(flag) {
      this.appMediator.disableKeyCommands(flag);
    }
    getConfigAsJson(spacing) {
      return this.appMediator.getConfigAsJson(spacing);
    }
    suspendPlayback() {
      if (!this.appMediator.isPlaybackSuspended()) {
        this.pause().then(() => {
          this.transmitExtRequest("suspendPlayback" /* SUSPEND_PLAYBACK */);
        });
      }
    }
    resumePlayback() {
      this.play();
    }
    recordMetric(type, key, value) {
      if (!isString(type) || !isString(key)) {
        throw this.invalidArgException("recordMetric(type, key, value?)", type, key, value);
      }
      this.sendNotification("metric" /* METRIC */, { metric: new Metric(key, value, type) });
    }
    offsetTimedText(pixelOffset) {
      if (!isNumber(pixelOffset)) {
        throw this.invalidArgException("offsetTimedText(pixelOffset)", pixelOffset);
      }
      this.appMediator.offsetTimedText(pixelOffset);
    }
    primeVideoElement() {
      return this.appMediator.primeVideoElement();
    }
    selectAudioLanguage(language, type) {
      if (!isString(language)) {
        throw this.invalidArgException("player.selectAudioLanguage(language)", language);
      }
      const playerOptions = this.modelCollectionProxy.getModel("PlayerOptions" /* PlayerOptions */);
      playerOptions.audioLanguage = language;
      if (!this.contentPlaybackStateReady) {
        return Promise.resolve(null);
      }
      const matches = findLanguageTracks(this.audioTracks, language).filter((track) => type === void 0 || track.type === type);
      const audioTrack = matches[0] || findDefaultTrack(this.audioTracks, language);
      if (!audioTrack || audioTrack === this.audioTrack) {
        return Promise.resolve(audioTrack);
      }
      const note = { name: "switchAudioTrack" /* SWITCH_AUDIO_TRACK */, body: { value: audioTrack }, type: "external" /* EXTERNAL */ };
      return this.sendAsyncNotification(note, ["audiotrackchange" /* AUDIO_TRACK_CHANGE */]).then((data) => {
        return audioTrack;
      });
    }
    selectTextLanguage(language, type) {
      if (!isString(language)) {
        throw this.invalidArgException("player.selectTextLanguage(language)", language);
      }
      const playerOptions = this.modelCollectionProxy.getModel("PlayerOptions" /* PlayerOptions */);
      playerOptions.textLanguage = language;
      this.facade.retrieveProxy("TextTrackProxy" /* TextTrackProxy */).language = language;
      if (!this.contentPlaybackStateReady) {
        return Promise.resolve(null);
      }
      const textTrack = findDefaultTrack(this.textTracks, language);
      if (!textTrack || textTrack === this.textTrack) {
        return Promise.resolve(textTrack);
      }
      const note = { name: "switchTextTrack" /* SWITCH_TEXT_TRACK */, body: { value: textTrack }, type: "external" /* EXTERNAL */ };
      return this.sendAsyncNotification(note, ["texttrackchange" /* TEXT_TRACK_CHANGE */]).then((data) => {
        return textTrack;
      });
    }
    selectLocalizationLanguage(language) {
      if (!isString(language)) {
        throw this.invalidArgException("player.selectLocalizationLanguage(language)", language);
      }
      const playerOptions = this.modelCollectionProxy.getModel("PlayerOptions" /* PlayerOptions */);
      playerOptions.language = language;
      const note = { name: "changeLanguage" /* CHANGE_LANGUAGE */, body: { language }, type: "external" /* EXTERNAL */ };
      return this.sendAsyncNotification(note, ["languagechange" /* LANGUAGE_CHANGE */]).then((data) => {
        return data.localeData;
      });
    }
    waitForEvent(success, fail, timeout) {
      return waitForEvent(this, success, fail, timeout);
    }
    waitForTime(time, prop) {
      return waitForTime(this, time, prop);
    }
    getBuffered(asStreamTime = false) {
      return this.appMediator.getBuffered(asStreamTime) || [];
    }
    // end methods
    ////////////////////
    // END PUBLIC API //
    ////////////////////
    /**
     * @internal
     */
    sendEvent(name, data = {}) {
      this.emit(name, data);
    }
    get contentPlaybackStateProxy() {
      return this.facade.retrieveProxy("ContentPlaybackStateProxy" /* ContentPlaybackStateProxy */);
    }
    get contentPlaybackStateReady() {
      var _a;
      return ((_a = this.contentPlaybackStateProxy) == null ? void 0 : _a.isReady) || false;
    }
    get localization() {
      return this.facade.retrieveProxy("LocalizationProxy" /* LocalizationProxy */);
    }
    get dom() {
      return this.facade.retrieveProxy("PlayerDomProxy" /* PlayerDomProxy */);
    }
    get adapters() {
      return this.facade.retrieveProxy("AdapterProxy" /* AdapterProxy */);
    }
    get presentationState() {
      return this.modelCollectionProxy.getModel("PresentationState" /* PresentationState */);
    }
    get presentationMediator() {
      return this.facade.retrieveMediator("PresentationMediator" /* PRESENTATION_MEDIATOR */);
    }
    get hooks() {
      return this.facade.retrieveProxy("HookProxy" /* HookProxy */);
    }
    transmitExtRequest(name, data) {
      this.sendNotification(name, data, "external" /* EXTERNAL */);
    }
    log(message, logLevelOverride) {
      const lv = logLevelOverride ? logLevelOverride : "debug" /* DEBUG */;
      this.facade.log(lv, message);
    }
    init(options) {
      const hookProxy = new HookProxy(options.hookManager);
      this.facade.registerProxy(hookProxy);
      const gServices = this.opts.globalServices;
      this.facade.log("info" /* INFO */, `${buildInfo.playerName}@${buildInfo.playerVersion}  ${buildInfo.buildTime}`);
      this.registerGlobalServices(gServices);
      delete this.opts.globalServices;
      this.sendNotification("bootApp" /* BOOT_APP */, {
        playerOptions: this.opts.playerOptions || null,
        app: this
      }, "internal" /* INTERNAL */);
      this.logger.on("logtimeevent" /* TIME_EVENT */, (event) => {
        const { id, label, item } = event.detail;
        const name = `${label}:start`;
        this.recordMetric("mark" /* MARK */, name, { id, name, startTime: item.startTime });
      });
      this.logger.on("logtimeendevent" /* TIME_END_EVENT */, (event) => {
        const { id, label, item } = event.detail;
        const { startTime, duration } = item;
        const name = `${label}:end`;
        this.recordMetric("mark" /* MARK */, name, { id, name, startTime: startTime + duration });
        this.recordMetric("measure" /* MEASURE */, label, { id, name: label, startTime, duration });
      });
    }
    sendAsyncNotification(notification, events) {
      const promise = eventsToPromise(
        [{ target: this, events }],
        [{ target: this, events: ["error" /* ERROR */] }]
      );
      this.sendNotification(notification.name, notification.body, notification.type);
      return promise;
    }
    invalidArgException(name, ...rest) {
      const rm = rest == null ? void 0 : rest.map((i) => i === void 0 ? "undefined" : i);
      const value = (rm == null ? void 0 : rm.toString()) || null;
      const msg = `${name}; ${AppResources.messages.API_INVALID_ARG}; supplied arg(s): ${value}`;
      this.log(msg);
      return new InvalidArgumentError(msg);
    }
    seekInternal(value) {
      this.seekTime = value;
      if (this.seekPending) {
        return this.seekPending.then(() => {
          return this.seekTime === value ? this.seekInternal(this.seekTime) : void 0;
        });
      }
      const note = { name: "seek" /* SEEK */, body: { value }, type: "external" /* EXTERNAL */ };
      this.seekPending = this.sendAsyncNotification(note, ["seekcomplete" /* SEEK_COMPLETE */]);
      return this.seekPending.then(() => {
        const diff = Math.abs(value - this.seekTime);
        if (diff <= 1) {
          this.seekTime = NaN;
        }
        this.seekPending = null;
      }).catch((e) => {
        this.seekPending = null;
        throw new PlayerError(
          "9999" /* UNEXPECTED_CONDITION */,
          (e == null ? void 0 : e.message) || `An error occurred on seek to ${value}`,
          e || null,
          false,
          "API" /* API */
        );
      }).then(() => {
        this.seekPending = null;
      });
    }
  };
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "hasListenerFor", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "on", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "once", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "off", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "isReady", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "id", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "dimensions", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "video", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "isAutoplay", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "isFullscreen", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "isAd", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "muted", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "options", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "volume", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "language", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "contentTime", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "sessionTime", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "playbackTime", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "contentDuration", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "streamTime", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "streamDuration", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "playbackState", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "autoQualitySwitching", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "quality", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "qualities", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "qualityInfo", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "bitrate", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "qualityCategory", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "minBitrate", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "maxBitrate", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "audioTracks", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "audioTrackInfo", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "audioTrack", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "attachResource", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "resource", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "textTrackEnabled", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "textTrack", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "textTracks", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "textTrackInfo", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "streamType", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "isPlayingLive", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "liveStreamUtcStart", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "liveStreamUtcTime", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "liveStreamUtcDuration", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "isSuspended", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "fullscreenElement", 1);
  __decorateClass([
    apiAccessor()
  ], VideoPlayer.prototype, "pausable", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "updateDimensions", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "enterFullscreen", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "exitFullscreen", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "play", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "pause", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "togglePlayPause", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "seek", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "jump", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getAdBreakTimes", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "grabFrame", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getThumbnail", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getThumbnails", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getContainerRect", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "registerPlugins", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "removePlugin", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "registerAdapter", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "retrieveAdapter", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "removeAdapter", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "registerHook", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "removeHook", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getPlugin", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getAdapter", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "stop", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "goLive", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "skipAd", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "focus", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "blur", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getKeyEventTarget", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "disableKeyCommands", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getConfigAsJson", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "suspendPlayback", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "resumePlayback", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "recordMetric", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "offsetTimedText", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "primeVideoElement", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "selectAudioLanguage", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "selectTextLanguage", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "selectLocalizationLanguage", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "waitForEvent", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "waitForTime", 1);
  __decorateClass([
    apiMethod()
  ], VideoPlayer.prototype, "getBuffered", 1);

  // src/app/Shell.ts
  var polyfillsChecked = false;
  var initialized;
  var serviceCollection = null;
  var hookManager = new HookManager(sdk_hook_config);
  var playerCollection = {};
  var pendingPlayerCreates = {};
  var pendingPlayerDestroys = {};
  function checkPolyfills() {
    if (polyfillsChecked) {
      return;
    }
    polyfillsChecked = true;
    const tests = {
      "Array.from": () => Array.from,
      "Array.prototype.find": () => Array.prototype.find,
      "Array.prototype.findIndex": () => Array.prototype.findIndex,
      "Array.prototype.includes": () => Array.prototype.includes,
      "Object.assign": () => Object.assign,
      "Promise": () => typeof Promise !== "undefined",
      "String.prototype.includes": () => String.prototype.includes,
      "String.prototype.repeat": () => String.prototype.repeat
    };
    Object.keys(tests).forEach((key) => {
      let passed = false;
      try {
        passed = !!tests[key]();
      } catch (error) {
        passed = false;
      } finally {
        if (!passed) {
          Logger.warn(`Polyfill warning: ${key} is not defined`);
        }
      }
    });
  }
  function initialize(options) {
    if (initialized) {
      return initialized;
    }
    checkPolyfills();
    const autoplayCapabilities = AutoplayCapabilitiesService.getInstance();
    const overrides = options.overrides;
    const deferAutoplayDetection = (overrides == null ? void 0 : overrides.deferAutoplayDetection) !== false;
    return initialized = Promise.all([
      !deferAutoplayDetection && autoplayCapabilities.detectCapabilities(overrides == null ? void 0 : overrides.blankVideoUrl)
    ]).then(() => {
      serviceCollection = {
        ["AutoplayCapabilities" /* AutoplayCapabilities */]: autoplayCapabilities
      };
    });
  }
  function getVideoPlayerIds() {
    return Object.keys(pendingPlayerCreates).concat(Object.keys(playerCollection)).reduce((acc, id) => {
      if (!acc.includes(id)) {
        acc.push(id);
      }
      return acc;
    }, []);
  }
  function defineHook(type, config2) {
    hookManager.defineHook(type, config2);
  }
  function registerHook(type, hook) {
    hookManager.registerHook(type, hook);
  }
  function removeHook(type, hook) {
    hookManager.removeHook(type, hook);
  }
  function applyHook(type, value, metadata) {
    hookManager.applyHook(type, value, metadata);
  }
  function getDeviceCapabilities() {
    return __async(this, null, function* () {
      return yield hookManager.applyHook("devicecapabilities" /* DEVICE_CAPABILITIES */, {});
    });
  }
  function createVideoPlayer(playerOptions) {
    const playerCreateStart = performance.now();
    const options = new PlayerOptions(playerOptions);
    const { id } = options;
    const logger = new Logger({ logLevel: options.logLevel, id });
    return pendingPlayerCreates[id] = initialize(options).then(() => __async(this, null, function* () {
      try {
        const opts = yield hookManager.applyHook("createplayer" /* CREATE_PLAYER */, options);
        const player = new VideoPlayer({
          globalServices: serviceCollection,
          playerOptions: opts,
          hookManager,
          logger
        });
        logger.time("player-creation" /* PLAYER_CREATION */, playerCreateStart);
        return player.initialize().then((api) => ({ api, player }));
      } catch (error) {
        if (error.key) {
          error.message = `A player with id "${error.key}" a already exists`;
        }
        throw error;
      }
    })).then(({ api, player }) => {
      playerCollection[id] = player;
      delete pendingPlayerCreates[id];
      logger.timeEnd("player-creation" /* PLAYER_CREATION */);
      return api;
    });
  }
  function retrieveVideoPlayer(playerId) {
    const player = playerCollection[playerId];
    if (player) {
      return Promise.resolve(player);
    }
    const destroy = pendingPlayerDestroys[playerId];
    if (destroy) {
      return destroy.then(() => null);
    }
    const pending = pendingPlayerCreates[playerId];
    if (pending) {
      return pending;
    }
    return Promise.resolve(null);
  }
  function removeVideoPlayer(playerId) {
    const pending = pendingPlayerDestroys[playerId];
    if (pending) {
      return pending;
    }
    return Promise.resolve().then(() => {
      if (pendingPlayerCreates[playerId]) {
        return pendingPlayerCreates[playerId];
      }
      return null;
    }).then(() => __async(this, null, function* () {
      const player = playerCollection[playerId];
      if (!player) {
        return Promise.resolve();
      }
      const { logLevel } = player.options;
      delete playerCollection[playerId];
      yield hookManager.applyHook("removeplayer" /* REMOVE_PLAYER */, player);
      return pendingPlayerDestroys[playerId] = player.destroy().then(() => {
        delete pendingPlayerDestroys[playerId];
        if (logLevel === "info" /* INFO */ || logLevel === "debug" /* DEBUG */) {
          Logger.log(`[Avia] Player with id "${playerId}" removed.`);
        }
      });
    }));
  }
  function createResourceConfig(config2) {
    return new ResourceConfiguration(config2);
  }
  function getSystemInfo() {
    return __spreadValues({}, System);
  }
  function getAutoplayCapabilities(url) {
    return AutoplayCapabilitiesService.getInstance().detectCapabilities(url);
  }
  var appNamespace = __spreadProps(__spreadValues({}, sdk_exports), {
    registerHook,
    removeHook,
    applyHook,
    createVideoPlayer,
    retrieveVideoPlayer,
    removeVideoPlayer,
    createResourceConfig,
    getSystemInfo,
    getAutoplayCapabilities,
    getDeviceCapabilities
  });
  System.appNamespace = appNamespace;
  /*! Bundled license information:

  screenfull/dist/screenfull.js:
    (*!
    * screenfull
    * v5.2.0 - 2021-11-03
    * (c) Sindre Sorhus; MIT License
    *)
  */

  exports.AccessibilityAction = AccessibilityAction;
  exports.ActiveState = ActiveState;
  exports.AdBreakType = AdBreakType;
  exports.AdTechnology = AdTechnology;
  exports.AdapterRole = AdapterRole;
  exports.ApiMetric = ApiMetric;
  exports.AudioTrackType = AudioTrackType;
  exports.Autoplay = Autoplay;
  exports.AviaHookType = AviaHookType;
  exports.Browser = Browser;
  exports.CoreEvent = CoreEvent;
  exports.Device = Device;
  exports.DrmKeySystemAvailability = DrmKeySystemAvailability;
  exports.DrmRobustness = DrmRobustness;
  exports.DrmType = DrmType;
  exports.Emitter = Emitter;
  exports.ErrorCategory = ErrorCategory;
  exports.ErrorCode = ErrorCode;
  exports.ErrorMessage = ErrorMessage;
  exports.FileExtensionToMimeType = FileExtensionToMimeType;
  exports.HTML5 = HTML5;
  exports.Header = Header;
  exports.HookError = HookError;
  exports.HookType = HookType;
  exports.InvalidArgumentError = InvalidArgumentError;
  exports.KeyboardScope = KeyboardScope;
  exports.LocalizationId = LocalizationId;
  exports.LocalizedLanguage = LocalizedLanguage;
  exports.LogLevel = LogLevel;
  exports.Logger = Logger;
  exports.LoggerEvent = LoggerEvent;
  exports.Measurement = Measurement;
  exports.Metric = Metric;
  exports.MetricType = MetricType;
  exports.MimeType = MimeType;
  exports.Os = Os;
  exports.PerformanceMode = PerformanceMode;
  exports.Platform = Platform;
  exports.PlaybackAdapterBase = PlaybackAdapterBase;
  exports.PlaybackState = PlaybackState;
  exports.PlayerError = PlayerError;
  exports.PlayerEvent = PlayerEvent;
  exports.PlayerHookType = PlayerHookType;
  exports.PluginPriority = PluginPriority;
  exports.QualityCategory = QualityCategory;
  exports.QualityLabel = QualityLabel;
  exports.QualityMode = QualityMode;
  exports.QueryString = QueryString;
  exports.RequestCredentials = RequestCredentials;
  exports.RequestMethod = RequestMethod;
  exports.RequestObjectType = RequestObjectType;
  exports.ResponseType = ResponseType;
  exports.StreamType = StreamType;
  exports.TextTrackEvent = TextTrackEvent;
  exports.TextTrackKind = TextTrackKind;
  exports.TextTrackMode = TextTrackMode;
  exports.Timer = Timer;
  exports.UiMetric = UiMetric;
  exports.Util = Util;
  exports.VideoFormat = VideoFormat;
  exports.WILDCARD = WILDCARD;
  exports.applyHook = applyHook;
  exports.buildInfo = buildInfo;
  exports.checkPolyfills = checkPolyfills;
  exports.cmcd = cmcd_exports;
  exports.createResourceConfig = createResourceConfig;
  exports.createThumbnailStyles = createThumbnailStyles;
  exports.createVideoPlayer = createVideoPlayer;
  exports.defineHook = defineHook;
  exports.eventsToPromise = eventsToPromise;
  exports.getAutoplayCapabilities = getAutoplayCapabilities;
  exports.getDeviceCapabilities = getDeviceCapabilities;
  exports.getSystemInfo = getSystemInfo;
  exports.getVideoPlayerIds = getVideoPlayerIds;
  exports.id3 = id3_exports;
  exports.queue = queue;
  exports.registerHook = registerHook;
  exports.removeHook = removeHook;
  exports.removeVideoPlayer = removeVideoPlayer;
  exports.renderThumbnail = renderThumbnail;
  exports.request = request;
  exports.retrieveVideoPlayer = retrieveVideoPlayer;
  exports.waitFor = waitFor;
  exports.waitForEvent = waitForEvent;
  exports.waitForTime = waitForTime;
  exports.waitUntil = waitUntil;

}));
//# sourceMappingURL=avia.js.map

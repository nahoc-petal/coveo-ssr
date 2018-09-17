! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react"), require("styled-components")) : "function" == typeof define && define.amd ? define("react-lazy-youtube", ["React", "styledComponents"], t) : "object" == typeof exports ? exports["react-lazy-youtube"] = t(require("react"), require("styled-components")) : e["react-lazy-youtube"] = t(e.React, e.styledComponents)
}(window, function (e, t) {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      })
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var o in e) n.d(r, o, function (t) {
          return e[t]
        }.bind(null, o));
      return r
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/dist/", n(n.s = 117)
  }([function (e, t, n) {
    e.exports = n(114)()
  }, function (e, t, n) {
    var r = n(23),
      o = "object" == typeof self && self && self.Object === Object && self,
      a = r || o || Function("return this")();
    e.exports = a
  }, function (e, t, n) {
    var r = n(97),
      o = n(92);
    e.exports = function (e, t) {
      var n = o(e, t);
      return r(n) ? n : void 0
    }
  }, function (t, n) {
    t.exports = e
  }, function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e
    }
  }, function (e, t, n) {
    var r = n(83);
    e.exports = function (e, t) {
      var n = e.__data__;
      return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
  }, function (e, t, n) {
    var r = n(2)(Object, "create");
    e.exports = r
  }, function (e, t, n) {
    var r = n(12),
      o = n(96),
      a = n(95),
      i = "[object Null]",
      u = "[object Undefined]",
      c = r ? r.toStringTag : void 0;
    e.exports = function (e) {
      return null == e ? void 0 === e ? u : i : c && c in Object(e) ? o(e) : a(e)
    }
  }, function (e, t, n) {
    var r = n(25);
    e.exports = function (e, t) {
      for (var n = e.length; n--;)
        if (r(e[n][0], t)) return n;
      return -1
    }
  }, function (e, t, n) {
    var r = n(107),
      o = n(106),
      a = n(105),
      i = n(104),
      u = n(103);

    function c(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
      }
    }
    c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = a, c.prototype.has = i, c.prototype.set = u, e.exports = c
  }, function (e, n) {
    e.exports = t
  }, function (e, t) {
    var n = Array.isArray;
    e.exports = n
  }, function (e, t, n) {
    var r = n(1).Symbol;
    e.exports = r
  }, function (e, t, n) {
    var r = n(2)(n(1), "Map");
    e.exports = r
  }, function (e, t) {
    var n = 9007199254740991;
    e.exports = function (e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
    }
  }, function (e, t, n) {
    var r = n(56),
      o = n(55),
      a = n(54),
      i = a && a.isTypedArray,
      u = i ? o(i) : r;
    e.exports = u
  }, function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function () {
          return e.i
        }
      }), e.webpackPolyfill = 1), e
    }
  }, function (e, t, n) {
    (function (e) {
      var r = n(1),
        o = n(58),
        a = "object" == typeof t && t && !t.nodeType && t,
        i = a && "object" == typeof e && e && !e.nodeType && e,
        u = i && i.exports === a ? r.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || o;
      e.exports = c
    }).call(this, n(16)(e))
  }, function (e, t, n) {
    var r = n(79),
      o = n(76),
      a = n(75),
      i = 1,
      u = 2;
    e.exports = function (e, t, n, c, s, l) {
      var f = n & i,
        p = e.length,
        d = t.length;
      if (p != d && !(f && d > p)) return !1;
      var y = l.get(e);
      if (y && l.get(t)) return y == t;
      var h = -1,
        v = !0,
        b = n & u ? new r : void 0;
      for (l.set(e, t), l.set(t, e); ++h < p;) {
        var g = e[h],
          m = t[h];
        if (c) var _ = f ? c(m, g, h, t, e, l) : c(g, m, h, e, t, l);
        if (void 0 !== _) {
          if (_) continue;
          v = !1;
          break
        }
        if (b) {
          if (!o(t, function (e, t) {
              if (!a(b, t) && (g === e || s(g, e, n, c, l))) return b.push(t)
            })) {
            v = !1;
            break
          }
        } else if (g !== m && !s(g, m, n, c, l)) {
          v = !1;
          break
        }
      }
      return l.delete(e), l.delete(t), v
    }
  }, function (e, t, n) {
    var r = n(91),
      o = n(84),
      a = n(82),
      i = n(81),
      u = n(80);

    function c(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
      }
    }
    c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = a, c.prototype.has = i, c.prototype.set = u, e.exports = c
  }, function (e, t) {
    var n = Function.prototype.toString;
    e.exports = function (e) {
      if (null != e) {
        try {
          return n.call(e)
        } catch (e) {}
        try {
          return e + ""
        } catch (e) {}
      }
      return ""
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t)
    }
  }, function (e, t) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function (e, t, n) {
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n
    }).call(this, n(22))
  }, function (e, t, n) {
    var r = n(7),
      o = n(21),
      a = "[object AsyncFunction]",
      i = "[object Function]",
      u = "[object GeneratorFunction]",
      c = "[object Proxy]";
    e.exports = function (e) {
      if (!o(e)) return !1;
      var t = r(e);
      return t == i || t == u || t == a || t == c
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      return e === t || e != e && t != t
    }
  }, function (e, t, n) {
    (function (t) {
      var n = 9007199254740991,
        r = "[object Arguments]",
        o = "[object Function]",
        a = "[object GeneratorFunction]",
        i = "object" == typeof t && t && t.Object === Object && t,
        u = "object" == typeof self && self && self.Object === Object && self,
        c = i || u || Function("return this")();

      function s(e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
        return e
      }
      var l = Object.prototype,
        f = l.hasOwnProperty,
        p = l.toString,
        d = c.Symbol,
        y = l.propertyIsEnumerable,
        h = d ? d.isConcatSpreadable : void 0;

      function v(e) {
        return b(e) || function (e) {
          return function (e) {
            return function (e) {
              return !!e && "object" == typeof e
            }(e) && function (e) {
              return null != e && function (e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
              }(e.length) && ! function (e) {
                var t = function (e) {
                  var t = typeof e;
                  return !!e && ("object" == t || "function" == t)
                }(e) ? p.call(e) : "";
                return t == o || t == a
              }(e)
            }(e)
          }(e) && f.call(e, "callee") && (!y.call(e, "callee") || p.call(e) == r)
        }(e) || !!(h && e && e[h])
      }
      var b = Array.isArray;
      e.exports = function (e) {
        return e && e.length ? function e(t, n, r, o, a) {
          var i = -1,
            u = t.length;
          for (r || (r = v), a || (a = []); ++i < u;) {
            var c = t[i];
            n > 0 && r(c) ? n > 1 ? e(c, n - 1, r, o, a) : s(a, c) : o || (a[a.length] = c)
          }
          return a
        }(e, 1) : []
      }
    }).call(this, n(22))
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = u(n(43)),
      a = u(n(42)),
      i = u(n(40));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var c = void 0;
    t.default = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = (0, o.default)();
      if (c || (c = (0, a.default)(u)), t.events) throw new Error("Event handlers cannot be overwritten.");
      if ("string" == typeof e && !document.getElementById(e)) throw new Error('Element "' + e + '" does not exist.');
      t.events = i.default.proxyEvents(u);
      var s = new Promise(function (n) {
          if ("string" == typeof e || e instanceof HTMLElement) c.then(function (r) {
            var o = new r.Player(e, t);
            return u.on("ready", function () {
              n(o)
            }), null
          });
          else {
            if (!("object" === (void 0 === e ? "undefined" : r(e)) && e.playVideo instanceof Function)) throw new TypeError("Unexpected state.");
            n(e)
          }
        }),
        l = i.default.promisifyPlayer(s, n);
      return l.on = u.on, l.off = u.off, l
    }, e.exports = t.default
  }, function (e, t, n) {
    var r = n(110);
    e.exports = function (e, t) {
      return r(e, t)
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r, o, a, i = (r = ["\n  background: #282828;\n  border-radius: 50% / 10%;\n  color: ", ';\n  font-size: 1em;\n  height: 3em;\n  padding: 0;\n  text-align: center;\n  text-indent: 0.1em;\n  transition: all 150ms ease-out;\n  width: 4em;\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: none;\n  opacity: 0.8;\n  cursor: pointer;\n  z-index: 9;\n\n  &:hover {\n    background: #ff0000;\n  }\n\n  &:before {\n    background: inherit;\n    border-radius: 5% / 50%;\n    bottom: 9%;\n    content: "";\n    left: -5%;\n    position: absolute;\n    right: -5%;\n    top: 9%;\n  }\n\n  &:after {\n    border-style: solid;\n    border-width: 1em 0 1em 1.732em;\n    border-color: transparent transparent transparent rgba(255, 255, 255, 0.75);\n    content: " ";\n    font-size: 0.75em;\n    height: 0;\n    margin: -1em 0 0 -0.75em;\n    top: 50%;\n    position: absolute;\n    width: 0;\n  }\n'], o = ["\n  background: #282828;\n  border-radius: 50% / 10%;\n  color: ", ';\n  font-size: 1em;\n  height: 3em;\n  padding: 0;\n  text-align: center;\n  text-indent: 0.1em;\n  transition: all 150ms ease-out;\n  width: 4em;\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: none;\n  opacity: 0.8;\n  cursor: pointer;\n  z-index: 9;\n\n  &:hover {\n    background: #ff0000;\n  }\n\n  &:before {\n    background: inherit;\n    border-radius: 5% / 50%;\n    bottom: 9%;\n    content: "";\n    left: -5%;\n    position: absolute;\n    right: -5%;\n    top: 9%;\n  }\n\n  &:after {\n    border-style: solid;\n    border-width: 1em 0 1em 1.732em;\n    border-color: transparent transparent transparent rgba(255, 255, 255, 0.75);\n    content: " ";\n    font-size: 0.75em;\n    height: 0;\n    margin: -1em 0 0 -0.75em;\n    top: 50%;\n    position: absolute;\n    width: 0;\n  }\n'], Object.freeze(Object.defineProperties(r, {
        raw: {
          value: Object.freeze(o)
        }
      }))),
      u = n(10),
      c = (a = u) && a.__esModule ? a : {
        default: a
      };
    t.default = c.default.button(i, function (e) {
      return e.theme.white
    })
  }, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "withBase", function () {
      return c
    });
    var r = n(26),
      o = n.n(r),
      a = 16,
      i = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return o()(n.map(function (e) {
          return String(e).split(/\s/gim)
        })).map(function (t) {
          return Number(t.replace("px", "")) / e + "rem"
        }).join(" ")
      },
      u = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return i.apply(void 0, [a].concat(t))
      },
      c = i;
    u.withBase = c, t.default = u
  }, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "isNot", function () {
      return i
    }), n.d(t, "isOr", function () {
      return u
    }), n.d(t, "isSomeNot", function () {
      return c
    });
    var r = n(10),
      o = function (e, t) {
        return function () {
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return function () {
            for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
            return function (n) {
              return o[e](function (e) {
                return Boolean(n[e]) === t
              }) && r.css.apply(void 0, a)
            }
          }
        }
      },
      a = o("every", !0),
      i = o("every", !1),
      u = o("some", !0),
      c = o("some", !1);
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5
    }, e.exports = t.default
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r, o = n(32),
      a = (r = o) && r.__esModule ? r : {
        default: r
      };
    t.default = {
      pauseVideo: {
        acceptableStates: [a.default.ENDED, a.default.PAUSED],
        stateChangeRequired: !1
      },
      playVideo: {
        acceptableStates: [a.default.ENDED, a.default.PLAYING],
        stateChangeRequired: !1
      },
      seekTo: {
        acceptableStates: [a.default.ENDED, a.default.PLAYING, a.default.PAUSED],
        stateChangeRequired: !0,
        timeout: 3e3
      }
    }, e.exports = t.default
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = t.default
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = t.default
  }, function (e, t) {
    var n = 1e3,
      r = 60 * n,
      o = 60 * r,
      a = 24 * o,
      i = 365.25 * a;

    function u(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    e.exports = function (e, t) {
      t = t || {};
      var c, s = typeof e;
      if ("string" === s && e.length > 0) return function (e) {
        if ((e = String(e)).length > 100) return;
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (!t) return;
        var u = parseFloat(t[1]);
        switch ((t[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return u * i;
          case "days":
          case "day":
          case "d":
            return u * a;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return u * o;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return u * r;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return u * n;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return u;
          default:
            return
        }
      }(e);
      if ("number" === s && !1 === isNaN(e)) return t.long ? u(c = e, a, "day") || u(c, o, "hour") || u(c, r, "minute") || u(c, n, "second") || c + " ms" : function (e) {
        if (e >= a) return Math.round(e / a) + "d";
        if (e >= o) return Math.round(e / o) + "h";
        if (e >= r) return Math.round(e / r) + "m";
        if (e >= n) return Math.round(e / n) + "s";
        return e + "ms"
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
  }, function (e, t, n) {
    var r;

    function o(e) {
      function n() {
        if (n.enabled) {
          var e = n,
            o = +new Date,
            a = o - (r || o);
          e.diff = a, e.prev = r, e.curr = o, r = o;
          for (var i = new Array(arguments.length), u = 0; u < i.length; u++) i[u] = arguments[u];
          i[0] = t.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
          var c = 0;
          i[0] = i[0].replace(/%([a-zA-Z%])/g, function (n, r) {
            if ("%%" === n) return n;
            c++;
            var o = t.formatters[r];
            if ("function" == typeof o) {
              var a = i[c];
              n = o.call(e, a), i.splice(c, 1), c--
            }
            return n
          }), t.formatArgs.call(e, i), (n.log || t.log || console.log.bind(console)).apply(e, i)
        }
      }
      return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function (e) {
        var n, r = 0;
        for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
        return t.colors[Math.abs(r) % t.colors.length]
      }(e), "function" == typeof t.init && t.init(n), n
    }(t = e.exports = o.debug = o.default = o).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
      t.enable("")
    }, t.enable = function (e) {
      t.save(e), t.names = [], t.skips = [];
      for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && ("-" === (e = n[o].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }, t.enabled = function (e) {
      var n, r;
      for (n = 0, r = t.skips.length; n < r; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, r = t.names.length; n < r; n++)
        if (t.names[n].test(e)) return !0;
      return !1
    }, t.humanize = n(36), t.names = [], t.skips = [], t.formatters = {}
  }, function (e, t) {
    var n, r, o = e.exports = {};

    function a() {
      throw new Error("setTimeout has not been defined")
    }

    function i() {
      throw new Error("clearTimeout has not been defined")
    }

    function u(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }! function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : a
      } catch (e) {
        n = a
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : i
      } catch (e) {
        r = i
      }
    }();
    var c, s = [],
      l = !1,
      f = -1;

    function p() {
      l && c && (l = !1, c.length ? s = c.concat(s) : f = -1, s.length && d())
    }

    function d() {
      if (!l) {
        var e = u(p);
        l = !0;
        for (var t = s.length; t;) {
          for (c = s, s = []; ++f < t;) c && c[f].run();
          f = -1, t = s.length
        }
        c = null, l = !1,
          function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
            try {
              r(e)
            } catch (t) {
              try {
                return r.call(null, e)
              } catch (t) {
                return r.call(this, e)
              }
            }
          }(e)
      }
    }

    function y(e, t) {
      this.fun = e, this.array = t
    }

    function h() {}
    o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      s.push(new y(e, t)), 1 !== s.length || l || u(d)
    }, y.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) {
      return []
    }, o.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, o.cwd = function () {
      return "/"
    }, o.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, o.umask = function () {
      return 0
    }
  }, function (e, t, n) {
    (function (r) {
      function o() {
        var e;
        try {
          e = t.storage.debug
        } catch (e) {}
        return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
      }(t = e.exports = n(37)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
      }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var o = 0,
          a = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && "%c" === e && (a = ++o)
        }), e.splice(a, 0, r)
      }, t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (e) {}
      }, t.load = o, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
      }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage
        } catch (e) {}
      }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message
        }
      }, t.enable(o())
    }).call(this, n(38))
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = u(n(39)),
      o = u(n(35)),
      a = u(n(34)),
      i = u(n(33));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var c = (0, r.default)("youtube-player"),
      s = {
        proxyEvents: function (e) {
          var t = {},
            n = function (n) {
              var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
              t[r] = function (t) {
                c('event "%s"', r, t), e.trigger(n, t)
              }
            },
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (var u, s = a.default[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
              n(u.value)
            }
          } catch (e) {
            o = !0, i = e
          } finally {
            try {
              !r && s.return && s.return()
            } finally {
              if (o) throw i
            }
          }
          return t
        },
        promisifyPlayer: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = {},
            r = function (r) {
              t && i.default[r] ? n[r] = function () {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                return e.then(function (e) {
                  var t = i.default[r],
                    o = e.getPlayerState(),
                    a = e[r].apply(e, n);
                  return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(o) ? new Promise(function (n) {
                    e.addEventListener("onStateChange", function r() {
                      var o = e.getPlayerState(),
                        a = void 0;
                      "number" == typeof t.timeout && (a = setTimeout(function () {
                        e.removeEventListener("onStateChange", r), n()
                      }, t.timeout)), Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(o) && (e.removeEventListener("onStateChange", r), clearTimeout(a), n())
                    })
                  }).then(function () {
                    return a
                  }) : a
                })
              } : n[r] = function () {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                return e.then(function (e) {
                  return e[r].apply(e, n)
                })
              }
            },
            a = !0,
            u = !1,
            c = void 0;
          try {
            for (var s, l = o.default[Symbol.iterator](); !(a = (s = l.next()).done); a = !0) {
              r(s.value)
            }
          } catch (e) {
            u = !0, c = e
          } finally {
            try {
              !a && l.return && l.return()
            } finally {
              if (u) throw c
            }
          }
          return n
        }
      };
    t.default = s, e.exports = t.default
  }, function (e, t) {
    function n(e, t) {
      e.onload = function () {
        this.onerror = this.onload = null, t(null, e)
      }, e.onerror = function () {
        this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
      }
    }

    function r(e, t) {
      e.onreadystatechange = function () {
        "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
      }
    }
    e.exports = function (e, t, o) {
      var a = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("script");
      "function" == typeof t && (o = t, t = {}), t = t || {}, o = o || function () {}, i.type = t.type || "text/javascript", i.charset = t.charset || "utf8", i.async = !("async" in t) || !!t.async, i.src = e, t.attrs && function (e, t) {
        for (var n in t) e.setAttribute(n, t[n])
      }(i, t.attrs), t.text && (i.text = "" + t.text), ("onload" in i ? n : r)(i, o), i.onload || n(i, o), a.appendChild(i)
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r, o = n(41),
      a = (r = o) && r.__esModule ? r : {
        default: r
      };
    t.default = function (e) {
      var t = new Promise(function (e) {
          if (window.YT && window.YT.Player && window.YT.Player instanceof Function) e(window.YT);
          else {
            var t = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function () {
              t && t(), e(window.YT)
            }
          }
        }),
        n = "http:" === window.location.protocol ? "http:" : "https:";
      return (0, a.default)(n + "//www.youtube.com/iframe_api", function (t) {
        t && e.trigger("error", t)
      }), t
    }, e.exports = t.default
  }, function (e, t, n) {
    "use strict";
    var r;
    /**
     * @link https://github.com/gajus/sister for the canonical source repository
     * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
     */
    r = function () {
      var e = {},
        t = {};
      return e.on = function (e, n) {
        var r = {
          name: e,
          handler: n
        };
        return t[e] = t[e] || [], t[e].unshift(r), r
      }, e.off = function (e) {
        var n = t[e.name].indexOf(e); - 1 !== n && t[e.name].splice(n, 1)
      }, e.trigger = function (e, n) {
        var r, o = t[e];
        if (o)
          for (r = o.length; r--;) o[r].handler(n)
      }, e
    }, e.exports = r
  }, function (e, t, n) {
    var r = n(2)(n(1), "WeakMap");
    e.exports = r
  }, function (e, t, n) {
    var r = n(2)(n(1), "Set");
    e.exports = r
  }, function (e, t, n) {
    var r = n(2)(n(1), "Promise");
    e.exports = r
  }, function (e, t, n) {
    var r = n(2)(n(1), "DataView");
    e.exports = r
  }, function (e, t, n) {
    var r = n(47),
      o = n(13),
      a = n(46),
      i = n(45),
      u = n(44),
      c = n(7),
      s = n(20),
      l = s(r),
      f = s(o),
      p = s(a),
      d = s(i),
      y = s(u),
      h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || o && "[object Map]" != h(new o) || a && "[object Promise]" != h(a.resolve()) || i && "[object Set]" != h(new i) || u && "[object WeakMap]" != h(new u)) && (h = function (e) {
      var t = c(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? s(n) : "";
      if (r) switch (r) {
        case l:
          return "[object DataView]";
        case f:
          return "[object Map]";
        case p:
          return "[object Promise]";
        case d:
          return "[object Set]";
        case y:
          return "[object WeakMap]"
      }
      return t
    }), e.exports = h
  }, function (e, t, n) {
    var r = n(24),
      o = n(14);
    e.exports = function (e) {
      return null != e && o(e.length) && !r(e)
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return e(t(n))
      }
    }
  }, function (e, t, n) {
    var r = n(50)(Object.keys, Object);
    e.exports = r
  }, function (e, t) {
    var n = Object.prototype;
    e.exports = function (e) {
      var t = e && e.constructor;
      return e === ("function" == typeof t && t.prototype || n)
    }
  }, function (e, t, n) {
    var r = n(52),
      o = n(51),
      a = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (!r(e)) return o(e);
      var t = [];
      for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
      return t
    }
  }, function (e, t, n) {
    (function (e) {
      var r = n(23),
        o = "object" == typeof t && t && !t.nodeType && t,
        a = o && "object" == typeof e && e && !e.nodeType && e,
        i = a && a.exports === o && r.process,
        u = function () {
          try {
            var e = a && a.require && a.require("util").types;
            return e || i && i.binding && i.binding("util")
          } catch (e) {}
        }();
      e.exports = u
    }).call(this, n(16)(e))
  }, function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e(t)
      }
    }
  }, function (e, t, n) {
    var r = n(7),
      o = n(14),
      a = n(4),
      i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function (e) {
      return a(e) && o(e.length) && !!i[r(e)]
    }
  }, function (e, t) {
    var n = 9007199254740991,
      r = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
      var o = typeof e;
      return !!(t = null == t ? n : t) && ("number" == o || "symbol" != o && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
  }, function (e, t) {
    e.exports = function () {
      return !1
    }
  }, function (e, t, n) {
    var r = n(7),
      o = n(4),
      a = "[object Arguments]";
    e.exports = function (e) {
      return o(e) && r(e) == a
    }
  }, function (e, t, n) {
    var r = n(59),
      o = n(4),
      a = Object.prototype,
      i = a.hasOwnProperty,
      u = a.propertyIsEnumerable,
      c = r(function () {
        return arguments
      }()) ? r : function (e) {
        return o(e) && i.call(e, "callee") && !u.call(e, "callee")
      };
    e.exports = c
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
      return r
    }
  }, function (e, t, n) {
    var r = n(61),
      o = n(60),
      a = n(11),
      i = n(17),
      u = n(57),
      c = n(15),
      s = Object.prototype.hasOwnProperty;
    e.exports = function (e, t) {
      var n = a(e),
        l = !n && o(e),
        f = !n && !l && i(e),
        p = !n && !l && !f && c(e),
        d = n || l || f || p,
        y = d ? r(e.length, String) : [],
        h = y.length;
      for (var v in e) !t && !s.call(e, v) || d && ("length" == v || f && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, h)) || y.push(v);
      return y
    }
  }, function (e, t, n) {
    var r = n(62),
      o = n(53),
      a = n(49);
    e.exports = function (e) {
      return a(e) ? r(e) : o(e)
    }
  }, function (e, t) {
    e.exports = function () {
      return []
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r;) {
        var i = e[n];
        t(i, n, e) && (a[o++] = i)
      }
      return a
    }
  }, function (e, t, n) {
    var r = n(65),
      o = n(64),
      a = Object.prototype.propertyIsEnumerable,
      i = Object.getOwnPropertySymbols,
      u = i ? function (e) {
        return null == e ? [] : (e = Object(e), r(i(e), function (t) {
          return a.call(e, t)
        }))
      } : o;
    e.exports = u
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
      return e
    }
  }, function (e, t, n) {
    var r = n(67),
      o = n(11);
    e.exports = function (e, t, n) {
      var a = t(e);
      return o(e) ? a : r(a, n(e))
    }
  }, function (e, t, n) {
    var r = n(68),
      o = n(66),
      a = n(63);
    e.exports = function (e) {
      return r(e, a, o)
    }
  }, function (e, t, n) {
    var r = n(69),
      o = 1,
      a = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, i, u, c) {
      var s = n & o,
        l = r(e),
        f = l.length;
      if (f != r(t).length && !s) return !1;
      for (var p = f; p--;) {
        var d = l[p];
        if (!(s ? d in t : a.call(t, d))) return !1
      }
      var y = c.get(e);
      if (y && c.get(t)) return y == t;
      var h = !0;
      c.set(e, t), c.set(t, e);
      for (var v = s; ++p < f;) {
        var b = e[d = l[p]],
          g = t[d];
        if (i) var m = s ? i(g, b, d, t, e, c) : i(b, g, d, e, t, c);
        if (!(void 0 === m ? b === g || u(b, g, n, i, c) : m)) {
          h = !1;
          break
        }
        v || (v = "constructor" == d)
      }
      if (h && !v) {
        var _ = e.constructor,
          w = t.constructor;
        _ != w && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w) && (h = !1)
      }
      return c.delete(e), c.delete(t), h
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = -1,
        n = Array(e.size);
      return e.forEach(function (e) {
        n[++t] = e
      }), n
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = -1,
        n = Array(e.size);
      return e.forEach(function (e, r) {
        n[++t] = [r, e]
      }), n
    }
  }, function (e, t, n) {
    var r = n(1).Uint8Array;
    e.exports = r
  }, function (e, t, n) {
    var r = n(12),
      o = n(73),
      a = n(25),
      i = n(18),
      u = n(72),
      c = n(71),
      s = 1,
      l = 2,
      f = "[object Boolean]",
      p = "[object Date]",
      d = "[object Error]",
      y = "[object Map]",
      h = "[object Number]",
      v = "[object RegExp]",
      b = "[object Set]",
      g = "[object String]",
      m = "[object Symbol]",
      _ = "[object ArrayBuffer]",
      w = "[object DataView]",
      x = r ? r.prototype : void 0,
      P = x ? x.valueOf : void 0;
    e.exports = function (e, t, n, r, x, j, O) {
      switch (n) {
        case w:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          e = e.buffer, t = t.buffer;
        case _:
          return !(e.byteLength != t.byteLength || !j(new o(e), new o(t)));
        case f:
        case p:
        case h:
          return a(+e, +t);
        case d:
          return e.name == t.name && e.message == t.message;
        case v:
        case g:
          return e == t + "";
        case y:
          var E = u;
        case b:
          var S = r & s;
          if (E || (E = c), e.size != t.size && !S) return !1;
          var k = O.get(e);
          if (k) return k == t;
          r |= l, O.set(e, t);
          var C = i(E(e), E(t), r, x, j, O);
          return O.delete(e), C;
        case m:
          if (P) return P.call(e) == P.call(t)
      }
      return !1
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      return e.has(t)
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
      return !1
    }
  }, function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e)
    }
  }, function (e, t) {
    var n = "__lodash_hash_undefined__";
    e.exports = function (e) {
      return this.__data__.set(e, n), this
    }
  }, function (e, t, n) {
    var r = n(19),
      o = n(78),
      a = n(77);

    function i(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.__data__ = new r; ++t < n;) this.add(e[t])
    }
    i.prototype.add = i.prototype.push = o, i.prototype.has = a, e.exports = i
  }, function (e, t, n) {
    var r = n(5);
    e.exports = function (e, t) {
      var n = r(this, e),
        o = n.size;
      return n.set(e, t), this.size += n.size == o ? 0 : 1, this
    }
  }, function (e, t, n) {
    var r = n(5);
    e.exports = function (e) {
      return r(this, e).has(e)
    }
  }, function (e, t, n) {
    var r = n(5);
    e.exports = function (e) {
      return r(this, e).get(e)
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
  }, function (e, t, n) {
    var r = n(5);
    e.exports = function (e) {
      var t = r(this, e).delete(e);
      return this.size -= t ? 1 : 0, t
    }
  }, function (e, t, n) {
    var r = n(6),
      o = "__lodash_hash_undefined__";
    e.exports = function (e, t) {
      var n = this.__data__;
      return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? o : t, this
    }
  }, function (e, t, n) {
    var r = n(6),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      return r ? void 0 !== t[e] : o.call(t, e)
    }
  }, function (e, t, n) {
    var r = n(6),
      o = "__lodash_hash_undefined__",
      a = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      if (r) {
        var n = t[e];
        return n === o ? void 0 : n
      }
      return a.call(t, e) ? t[e] : void 0
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t
    }
  }, function (e, t, n) {
    var r = n(6);
    e.exports = function () {
      this.__data__ = r ? r(null) : {}, this.size = 0
    }
  }, function (e, t, n) {
    var r = n(89),
      o = n(88),
      a = n(87),
      i = n(86),
      u = n(85);

    function c(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
      }
    }
    c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = a, c.prototype.has = i, c.prototype.set = u, e.exports = c
  }, function (e, t, n) {
    var r = n(90),
      o = n(9),
      a = n(13);
    e.exports = function () {
      this.size = 0, this.__data__ = {
        hash: new r,
        map: new(a || o),
        string: new r
      }
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      return null == e ? void 0 : e[t]
    }
  }, function (e, t, n) {
    var r = n(1)["__core-js_shared__"];
    e.exports = r
  }, function (e, t, n) {
    var r, o = n(93),
      a = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    e.exports = function (e) {
      return !!a && a in e
    }
  }, function (e, t) {
    var n = Object.prototype.toString;
    e.exports = function (e) {
      return n.call(e)
    }
  }, function (e, t, n) {
    var r = n(12),
      o = Object.prototype,
      a = o.hasOwnProperty,
      i = o.toString,
      u = r ? r.toStringTag : void 0;
    e.exports = function (e) {
      var t = a.call(e, u),
        n = e[u];
      try {
        e[u] = void 0;
        var r = !0
      } catch (e) {}
      var o = i.call(e);
      return r && (t ? e[u] = n : delete e[u]), o
    }
  }, function (e, t, n) {
    var r = n(24),
      o = n(94),
      a = n(21),
      i = n(20),
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      s = Object.prototype,
      l = c.toString,
      f = s.hasOwnProperty,
      p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function (e) {
      return !(!a(e) || o(e)) && (r(e) ? p : u).test(i(e))
    }
  }, function (e, t, n) {
    var r = n(9),
      o = n(13),
      a = n(19),
      i = 200;
    e.exports = function (e, t) {
      var n = this.__data__;
      if (n instanceof r) {
        var u = n.__data__;
        if (!o || u.length < i - 1) return u.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new a(u)
      }
      return n.set(e, t), this.size = n.size, this
    }
  }, function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e)
    }
  }, function (e, t) {
    e.exports = function (e) {
      return this.__data__.get(e)
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = this.__data__,
        n = t.delete(e);
      return this.size = t.size, n
    }
  }, function (e, t, n) {
    var r = n(9);
    e.exports = function () {
      this.__data__ = new r, this.size = 0
    }
  }, function (e, t, n) {
    var r = n(8);
    e.exports = function (e, t) {
      var n = this.__data__,
        o = r(n, e);
      return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
    }
  }, function (e, t, n) {
    var r = n(8);
    e.exports = function (e) {
      return r(this.__data__, e) > -1
    }
  }, function (e, t, n) {
    var r = n(8);
    e.exports = function (e) {
      var t = this.__data__,
        n = r(t, e);
      return n < 0 ? void 0 : t[n][1]
    }
  }, function (e, t, n) {
    var r = n(8),
      o = Array.prototype.splice;
    e.exports = function (e) {
      var t = this.__data__,
        n = r(t, e);
      return !(n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, 0))
    }
  }, function (e, t) {
    e.exports = function () {
      this.__data__ = [], this.size = 0
    }
  }, function (e, t, n) {
    var r = n(9),
      o = n(102),
      a = n(101),
      i = n(100),
      u = n(99),
      c = n(98);

    function s(e) {
      var t = this.__data__ = new r(e);
      this.size = t.size
    }
    s.prototype.clear = o, s.prototype.delete = a, s.prototype.get = i, s.prototype.has = u, s.prototype.set = c, e.exports = s
  }, function (e, t, n) {
    var r = n(108),
      o = n(18),
      a = n(74),
      i = n(70),
      u = n(48),
      c = n(11),
      s = n(17),
      l = n(15),
      f = 1,
      p = "[object Arguments]",
      d = "[object Array]",
      y = "[object Object]",
      h = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, v, b, g) {
      var m = c(e),
        _ = c(t),
        w = m ? d : u(e),
        x = _ ? d : u(t),
        P = (w = w == p ? y : w) == y,
        j = (x = x == p ? y : x) == y,
        O = w == x;
      if (O && s(e)) {
        if (!s(t)) return !1;
        m = !0, P = !1
      }
      if (O && !P) return g || (g = new r), m || l(e) ? o(e, t, n, v, b, g) : a(e, t, w, n, v, b, g);
      if (!(n & f)) {
        var E = P && h.call(e, "__wrapped__"),
          S = j && h.call(t, "__wrapped__");
        if (E || S) {
          var k = E ? e.value() : e,
            C = S ? t.value() : t;
          return g || (g = new r), b(k, C, n, v, g)
        }
      }
      return !!O && (g || (g = new r), i(e, t, n, v, b, g))
    }
  }, function (e, t, n) {
    var r = n(109),
      o = n(4);
    e.exports = function e(t, n, a, i, u) {
      return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, a, i, e, u))
    }
  }, function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  }, function (e, t, n) {
    "use strict";
    var r = function (e) {};
    e.exports = function (e, t, n, o, a, i, u, c) {
      if (r(t), !e) {
        var s;
        if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
          var l = [n, o, a, i, u, c],
            f = 0;
          (s = new Error(t.replace(/%s/g, function () {
            return l[f++]
          }))).name = "Invariant Violation"
        }
        throw s.framesToPop = 1, s
      }
    }
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return function () {
        return e
      }
    }
    var o = function () {};
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function () {
      return this
    }, o.thatReturnsArgument = function (e) {
      return e
    }, e.exports = o
  }, function (e, t, n) {
    "use strict";
    var r = n(113),
      o = n(112),
      a = n(111);
    e.exports = function () {
      function e(e, t, n, r, i, u) {
        u !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
      }

      function t() {
        return e
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t
      };
      return n.checkPropTypes = r, n.PropTypes = n, n
    }
  }, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      a = n(3),
      i = n.n(a),
      u = n(28),
      c = n.n(u),
      s = n(27),
      l = n.n(s),
      f = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      p = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      };

    function d(e) {
      return p({}, e, {
        playerVars: p({}, e.playerVars, {
          autoplay: 0,
          start: 0,
          end: 0
        })
      })
    }
    var y = function (e) {
      function t(e) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.onPlayerReady = function (e) {
          return n.props.onReady(e)
        }, n.onPlayerError = function (e) {
          return n.props.onError(e)
        }, n.onPlayerStateChange = function (e) {
          switch (n.props.onStateChange(e), e.data) {
            case t.PlayerState.ENDED:
              n.props.onEnd(e);
              break;
            case t.PlayerState.PLAYING:
              n.props.onPlay(e);
              break;
            case t.PlayerState.PAUSED:
              n.props.onPause(e);
              break;
            default:
              return
          }
        }, n.onPlayerPlaybackRateChange = function (e) {
          return n.props.onPlaybackRateChange(e)
        }, n.onPlayerPlaybackQualityChange = function (e) {
          return n.props.onPlaybackQualityChange(e)
        }, n.createPlayer = function () {
          if ("undefined" != typeof document) {
            var e = p({}, n.props.opts, {
              videoId: n.props.videoId
            });
            n.internalPlayer = l()(n.container, e), n.internalPlayer.on("ready", n.onPlayerReady), n.internalPlayer.on("error", n.onPlayerError), n.internalPlayer.on("stateChange", n.onPlayerStateChange), n.internalPlayer.on("playbackRateChange", n.onPlayerPlaybackRateChange), n.internalPlayer.on("playbackQualityChange", n.onPlayerPlaybackQualityChange)
          }
        }, n.resetPlayer = function () {
          return n.internalPlayer.destroy().then(n.createPlayer)
        }, n.updatePlayer = function () {
          n.internalPlayer.getIframe().then(function (e) {
            n.props.id ? e.setAttribute("id", n.props.id) : e.removeAttribute("id"), n.props.className ? e.setAttribute("class", n.props.className) : e.removeAttribute("class")
          })
        }, n.updateVideo = function () {
          if (void 0 !== n.props.videoId && null !== n.props.videoId) {
            var e = !1,
              t = {
                videoId: n.props.videoId
              };
            "playerVars" in n.props.opts && (e = 1 === n.props.opts.playerVars.autoplay, "start" in n.props.opts.playerVars && (t.startSeconds = n.props.opts.playerVars.start), "end" in n.props.opts.playerVars && (t.endSeconds = n.props.opts.playerVars.end)), e ? n.internalPlayer.loadVideoById(t) : n.internalPlayer.cueVideoById(t)
          } else n.internalPlayer.stopVideo()
        }, n.refContainer = function (e) {
          n.container = e
        }, n.container = null, n.internalPlayer = null, n
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, i.a.Component), f(t, [{
        key: "componentDidMount",
        value: function () {
          this.createPlayer()
        }
      }, {
        key: "componentDidUpdate",
        value: function (e) {
          (function (e, t) {
            return e.id === t.id || e.className === t.className
          })(e, this.props) && this.updatePlayer(),
            function (e, t) {
              return !c()(d(e.opts), d(t.opts))
            }(e, this.props) && this.resetPlayer(),
            function (e, t) {
              if (e.videoId !== t.videoId) return !0;
              var n = e.opts.playerVars || {},
                r = t.opts.playerVars || {};
              return n.start !== r.start || n.end !== r.end
            }(e, this.props) && this.updateVideo()
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.internalPlayer.destroy()
        }
      }, {
        key: "render",
        value: function () {
          return i.a.createElement("span", {
            className: this.props.containerClassName
          }, i.a.createElement("div", {
            id: this.props.id,
            className: this.props.className,
            ref: this.refContainer
          }))
        }
      }]), t
    }();
    y.propTypes = {
      videoId: o.a.string,
      id: o.a.string,
      className: o.a.string,
      containerClassName: o.a.string,
      opts: o.a.object,
      onReady: o.a.func,
      onError: o.a.func,
      onPlay: o.a.func,
      onPause: o.a.func,
      onEnd: o.a.func,
      onStateChange: o.a.func,
      onPlaybackRateChange: o.a.func,
      onPlaybackQualityChange: o.a.func
    }, y.defaultProps = {
      id: null,
      className: null,
      opts: {},
      containerClassName: "",
      onReady: function () {},
      onError: function () {},
      onPlay: function () {},
      onPause: function () {},
      onEnd: function () {},
      onStateChange: function () {},
      onPlaybackRateChange: function () {},
      onPlaybackQualityChange: function () {}
    }, y.PlayerState = {
      UNSTARTED: -1,
      ENDED: 0,
      PLAYING: 1,
      PAUSED: 2,
      BUFFERING: 3,
      CUED: 5
    }, t.default = y
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      o = P([""], [""]),
      a = P(["\n  position: relative;\n  margin: auto;\n  ", ";\n"], ["\n  position: relative;\n  margin: auto;\n  ", ";\n"]),
      i = P(["\n    ", " {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n  "], ["\n", " {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n  "]),
      u = P(["\n  position: relative;\n  z-index: 3;\n  border: none;\n  transition: all 200ms ease;\n  height: 100%;\n  ", ";\n"], ["\n  position: relative;\n  z-index: 3;\n  border: none;\n  transition: all 200ms ease;\n  height: 100%;\n  ", ";\n"]),
      c = P(["\n    height: ", ";\n    @media (max-width: ", ") {\n      height: auto;\n    }\n  "], ["\n    height: ", ";\n    @media (max-width: ", ") {\n      height: auto;\n    }\n  "]),
      s = P(["\n  display: block;\n  width: 100%;\n  height: 100%;\n"], ["\n  display: block;\n  width: 100%;\n  height: 100%;\n"]),
      l = P(["\n  position: relative;\n  margin: auto;\n  height: 100%;\n  overflow: hidden;\n  box-shadow: ", ";\n  ", ";\n"], ["\n  position: relative;\n  margin: auto;\n  height: 100%;\n  overflow: hidden;\n  box-shadow: ", ";\n  ", ";\n"]),
      f = P(["\n    height: auto;\n  "], ["\n    height: auto;\n  "]),
      p = n(3),
      d = w(p),
      y = w(n(10)),
      h = w(n(115)),
      v = n(31),
      b = w(v),
      g = w(n(30)),
      m = w(n(0)),
      _ = w(n(29));

    function w(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function x(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function P(e, t) {
      return Object.freeze(Object.defineProperties(e, {
        raw: {
          value: Object.freeze(t)
        }
      }))
    }
    var j = y.default.div(o),
      O = y.default.section(a, (0, v.isNot)("cinemaMode")(i, j)),
      E = (0, y.default)(h.default)(u, (0, b.default)("cinemaMode")(c, (0, g.default)(600), (0, g.default)(768))),
      S = y.default.img(s),
      k = y.default.div(l, function (e) {
        return e.theme.shadow
      }, (0, b.default)("cinemaMode")(f)),
      C = function (e) {
        function t() {
          var e, n, o;
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
          return n = o = x(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.state = {
            showVideo: !1
          }, o.showVideo = function () {
            return o.setState(function (e) {
              e.showVideo;
              return {
                showVideo: !0
              }
            })
          }, o.render = function () {
            var e = o.props,
              t = e.id,
              n = e.onPlay,
              a = e.onPause,
              i = e.onEnd,
              u = e.onError,
              c = e.onStateChange,
              s = e.onPlaybackRateChange,
              l = e.onPlaybackQualityChange,
              f = e.imageSize,
              p = e.playerVars,
              y = e.noCookies,
              h = e.styles,
              v = function (e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
              }(e, ["id", "onPlay", "onPause", "onEnd", "onError", "onStateChange", "onPlaybackRateChange", "onPlaybackQualityChange", "imageSize", "playerVars", "noCookies", "styles"]),
              b = o.state.showVideo,
              g = ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"];
            return d.default.createElement(O, r({}, v, {
              style: h
            }), d.default.createElement(j, null, b ? d.default.createElement(E, {
              videoId: t,
              id: "a-" + t + " do-not-delete-this-hack",
              onReady: function (e) {
                return e.target.playVideo()
              },
              onPlay: n,
              onPause: a,
              onEnd: i,
              onError: u,
              onStateChange: c,
              onPlaybackRateChange: s,
              onPlaybackQualityChange: l,
              opts: r({
                width: "100%",
                host: y ? "https://www.youtube-nocookie.com" : "https://www.youtube.com"
              }, p)
            }) : d.default.createElement(S, { onClick: o.showVideo, src: "https://img.youtube.com/vi/" + t + "/" + (g.includes(f) ? f : "default") + ".jpg", alt: "Video" }), d.default.createElement(k, null, d.default.createElement('button', {
              onClick: o.showVideo,
              id: 'youtube-button',
              class: 'ytp-large-play-button ytp-button',
              "aria-label": "Play"
            }))))
          }, x(o, n)
        }
        return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, p.Component), t
      }();
    t.default = C, C.defaultProps = {
      onPlay: function () {},
      onPause: function () {},
      onEnd: function () {},
      onError: function () {},
      onStateChange: function () {},
      onPlaybackRateChange: function () {},
      onPlaybackQualityChange: function () {},
      imageSize: "default",
      playerVars: {},
      noCookies: !1,
      styles: {}
    }, C.propTypes = {
      id: m.default.string.isRequired,
      onPlay: m.default.func,
      onPause: m.default.func,
      onEnd: m.default.func,
      onError: m.default.func,
      onStateChange: m.default.func,
      onPlaybackRateChange: m.default.func,
      onPlaybackQualityChange: m.default.func,
      playerVars: m.default.object,
      styles: m.default.object,
      noCookies: m.default.bool,
      imageSize: m.default.oneOf(["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"])
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r, o = n(116),
      a = (r = o) && r.__esModule ? r : {
        default: r
      };
    t.default = a.default
  }])
});
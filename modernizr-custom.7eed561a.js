// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Pcp3":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-prefixed-setclasses !*/
!function (e, n, t) {
  function r(e) {
    var n = w.className,
        t = Modernizr._config.classPrefix || "";

    if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? w.className.baseVal = n : w.className = n);
  }

  function o(e, n) {
    return _typeof(e) === n;
  }

  function s() {
    var e, n, t, r, s, i, a;

    for (var l in S) {
      if (S.hasOwnProperty(l)) {
        if (e = [], n = S[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }

        for (r = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) {
          i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), C.push((r ? "" : "no-") + a.join("-"));
        }
      }
    }
  }

  function i(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase();
    }).replace(/^-/, "");
  }

  function a(e, n) {
    return !!~("" + e).indexOf(n);
  }

  function l() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function f(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }

  function u(e, n, t) {
    var r;

    for (var s in e) {
      if (e[s] in n) return t === !1 ? e[s] : (r = n[e[s]], o(r, "function") ? f(r, t || n) : r);
    }

    return !1;
  }

  function p(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function c(n, t, r) {
    var o;

    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, n, t);
      var s = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (s) {
        var i = s.error ? "error" : "log";
        s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !t && n.currentStyle && n.currentStyle[r];

    return o;
  }

  function d() {
    var e = n.body;
    return e || (e = l(x ? "svg" : "body"), e.fake = !0), e;
  }

  function m(e, t, r, o) {
    var s,
        i,
        a,
        f,
        u = "modernizr",
        p = l("div"),
        c = d();
    if (parseInt(r, 10)) for (; r--;) {
      a = l("div"), a.id = o ? o[r] : u + (r + 1), p.appendChild(a);
    }
    return s = l("style"), s.type = "text/css", s.id = "s" + u, (c.fake ? c : p).appendChild(s), c.appendChild(p), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), p.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", f = w.style.overflow, w.style.overflow = "hidden", w.appendChild(c)), i = t(p, e), c.fake ? (c.parentNode.removeChild(c), w.style.overflow = f, w.offsetHeight) : p.parentNode.removeChild(p), !!i;
  }

  function v(n, r) {
    var o = n.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(p(n[o]), r)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var s = []; o--;) {
        s.push("(" + p(n[o]) + ":" + r + ")");
      }

      return s = s.join(" or "), m("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == c(e, null, "position");
      });
    }

    return t;
  }

  function y(e, n, r, s) {
    function f() {
      p && (delete T.style, delete T.modElem);
    }

    if (s = o(s, "undefined") ? !1 : s, !o(r, "undefined")) {
      var u = v(e, r);
      if (!o(u, "undefined")) return u;
    }

    for (var p, c, d, m, y, g = ["modernizr", "tspan", "samp"]; !T.style && g.length;) {
      p = !0, T.modElem = l(g.shift()), T.style = T.modElem.style;
    }

    for (d = e.length, c = 0; d > c; c++) {
      if (m = e[c], y = T.style[m], a(m, "-") && (m = i(m)), T.style[m] !== t) {
        if (s || o(r, "undefined")) return f(), "pfx" == n ? m : !0;

        try {
          T.style[m] = r;
        } catch (h) {}

        if (T.style[m] != y) return f(), "pfx" == n ? m : !0;
      }
    }

    return f(), !1;
  }

  function g(e, n, t, r, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + E.join(i + " ") + i).split(" ");
    return o(n, "string") || o(n, "undefined") ? y(a, n, r, s) : (a = (e + " " + z.join(i + " ") + i).split(" "), u(a, n, t));
  }

  function h(e, n, r) {
    return g(e, t, t, n, r);
  }

  var C = [],
      S = [],
      _ = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e]);
      }, 0);
    },
    addTest: function addTest(e, n, t) {
      S.push({
        name: e,
        fn: n,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      S.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = _, Modernizr = new Modernizr();
  var w = n.documentElement,
      x = "svg" === w.nodeName.toLowerCase(),
      b = "Moz O ms Webkit",
      E = _._config.usePrefixes ? b.split(" ") : [];
  _._cssomPrefixes = E;

  var P = function P(n) {
    var r,
        o = prefixes.length,
        s = e.CSSRule;
    if ("undefined" == typeof s) return t;
    if (!n) return !1;
    if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in s) return "@" + n;

    for (var i = 0; o > i; i++) {
      var a = prefixes[i],
          l = a.toUpperCase() + "_" + r;
      if (l in s) return "@-" + a.toLowerCase() + "-" + n;
    }

    return !1;
  };

  _.atRule = P;
  var z = _._config.usePrefixes ? b.toLowerCase().split(" ") : [];
  _._domPrefixes = z;
  var N = {
    elem: l("modernizr")
  };

  Modernizr._q.push(function () {
    delete N.elem;
  });

  var T = {
    style: N.elem.style
  };
  Modernizr._q.unshift(function () {
    delete T.style;
  }), _.testAllProps = g;

  _.prefixed = function (e, n, t) {
    return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = i(e)), n ? g(e, n, t) : g(e, "pfx"));
  };

  _.testAllProps = h, Modernizr.addTest("csstransitions", h("transition", "all", !0)), s(), r(C), delete _.addTest, delete _.addAsyncTest;

  for (var j = 0; j < Modernizr._q.length; j++) {
    Modernizr._q[j]();
  }

  e.Modernizr = Modernizr;
}(window, document);
},{}]},{},["Pcp3"], "window")
//# sourceMappingURL=modernizr-custom.7eed561a.js.map
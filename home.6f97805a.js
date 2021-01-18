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
})({"nqs3":[function(require,module,exports) {
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
;

(function (window) {
  'use strict'; // From https://davidwalsh.name/javascript-debounce-function.

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  ; // from http://www.quirksmode.org/js/events_properties.html#position

  function getMousePos(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy
    };
  }

  var DOM = {}; // The loader.

  DOM.loader = document.querySelector('.overlay--loader'); // The room wrapper. This will be the element to be transformed in order to move around.

  DOM.scroller = document.querySelector('.room-container > .scroller'); // The rooms.

  DOM.rooms = [].slice.call(DOM.scroller.querySelectorAll('.room')); // The content wrapper.

  DOM.content = document.querySelector('.content');

  var currentRoom = 0,
      // Total number of rooms.
  totalRooms = DOM.rooms.length,
      // Initial transform.
  initTransform = {
    translateX: 0,
    translateY: 0,
    translateZ: '500px',
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  },
      // Reset transform.
  resetTransform = {
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  },
      // View from top.
  menuTransform = {
    translateX: 0,
    translateY: '150%',
    translateZ: 0,
    rotateX: '15deg',
    rotateY: 0,
    rotateZ: 0
  },
      menuTransform = {
    translateX: 0,
    translateY: '50%',
    translateZ: 0,
    rotateX: '-10deg',
    rotateY: 0,
    rotateZ: 0
  },
      // Info view transform.
  infoTransform = {
    translateX: 0,
    translateY: 0,
    translateZ: '200px',
    rotateX: '2deg',
    rotateY: 0,
    rotateZ: '4deg'
  },
      // Room moving transition.
  roomTransition = {
    speed: '0.4s',
    easing: 'ease'
  },
      // View from top transition.
  menuTransition = {
    speed: '1.5s',
    easing: 'cubic-bezier(0.2,1,0.3,1)'
  },
      // Info transition.
  infoTransition = {
    speed: '15s',
    easing: 'cubic-bezier(0.3,1,0.3,1)'
  },
      tilt = false,
      // How much to rotate when the mouse moves.
  tiltRotation = {
    rotateX: 1,
    // a relative rotation of -1deg to 1deg on the x-axis
    rotateY: -3 // a relative rotation of -3deg to 3deg on the y-axis

  },
      // Transition end event handler.
  onEndTransition = function onEndTransition(el, callback) {
    var onEndCallbackFn = function onEndCallbackFn(ev) {
      this.removeEventListener('transitionend', onEndCallbackFn);

      if (callback && typeof callback === 'function') {
        callback.call();
      }
    };

    el.addEventListener('transitionend', onEndCallbackFn);
  },
      // Window sizes.
  win = {
    width: window.innerWidth,
    height: window.innerHeight
  },
      // Check if moving inside the room and check if navigating.
  isMoving,
      isNavigating;

  function init() {
    // Move into the current room.
    move({
      transition: roomTransition,
      transform: initTransform
    }).then(function () {
      initTilt();
      applyRoomTransition('none');
    }); // Animate the current slide in.
    // showSlide();
    // Init/Bind events.

    initEvents();
  }

  function initTilt() {
    //applyRoomTransition(tiltTransition);
    tilt = true;
  }

  function removeTilt() {
    tilt = false;
  }

  function move(opts) {
    return new Promise(function (resolve, reject) {
      if (isMoving && !opts.stopTransition) {
        return false;
      }

      isMoving = true;

      if (opts.transition) {
        applyRoomTransition(opts.transition);
      }

      if (opts.transform) {
        applyRoomTransform(opts.transform);

        var onEndFn = function onEndFn() {
          isMoving = false;
          resolve();
        };

        onEndTransition(DOM.scroller, onEndFn);
      } else {
        resolve();
      }
    });
  }

  function initEvents() {
    // Mousemove event / Tilt functionality.
    var onMouseMoveFn = function onMouseMoveFn(ev) {
      requestAnimationFrame(function () {
        if (!tilt) return false;
        var mousepos = getMousePos(ev),
            // transform values
        rotX = tiltRotation.rotateX ? initTransform.rotateX - (3 * tiltRotation.rotateX / win.height * mousepos.y - tiltRotation.rotateX) : 0,
            rotY = tiltRotation.rotateY ? initTransform.rotateY - (3 * tiltRotation.rotateY / win.width * mousepos.x - tiltRotation.rotateY) : 0; // apply transform

        applyRoomTransform({
          'translateX': initTransform.translateX,
          'translateY': initTransform.translateY,
          'translateZ': initTransform.translateZ,
          'rotateX': rotX + 'deg',
          'rotateY': rotY + 'deg',
          'rotateZ': initTransform.rotateZ
        });
      });
    },
        // Window resize.
    debounceResizeFn = debounce(function () {
      win = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }, 10);

    document.addEventListener('mousemove', onMouseMoveFn);
    window.addEventListener('resize', debounceResizeFn);
  }

  function applyRoomTransform(transform) {
    DOM.scroller.style.transform = 'translate3d(' + transform.translateX + ', ' + transform.translateY + ', ' + transform.translateZ + ') ' + 'rotate3d(1,0,0,' + transform.rotateX + ') rotate3d(0,1,0,' + transform.rotateY + ') rotate3d(0,0,1,' + transform.rotateZ + ')';
  }

  function applyRoomTransition(transition) {
    DOM.scroller.style.transition = transition === 'none' ? transition : 'transform ' + transition.speed + ' ' + transition.easing;
  }

  function toggleSlide(dir, _delay) {
    var slide = DOM.slides[currentRoom],
        // Slide's name.
    name = slide.querySelector('.slide__name'),
        // Slide's title and date elements.
    title = slide.querySelector('.slide__title'),
        date = slide.querySelector('.slide__date');
    _delay = _delay !== undefined ? _delay : 0;
    anime.remove([name, title, date]);
    var animeOpts = {
      targets: [name, title, date],
      duration: dir === 'in' ? 400 : 400,
      //delay: 0,//dir === 'in' ? 150 : 0,
      delay: function delay(t, i, c) {
        return _delay + 75 + i * 75;
      },
      easing: [0.25, 0.1, 0.25, 1],
      opacity: {
        value: dir === 'in' ? [0, 1] : [1, 0],
        duration: dir === 'in' ? 550 : 250
      },
      translateY: function translateY(t, i) {
        return dir === 'in' ? [150, 0] : [0, -150];
      }
    };

    if (dir === 'in') {
      animeOpts.begin = function () {
        slide.classList.add('slide--current');
      };
    } else {
      animeOpts.complete = function () {
        slide.classList.remove('slide--current');
      };
    }

    anime(animeOpts);
  }

  init();
})(window);
},{}]},{},["nqs3"], "window")
//# sourceMappingURL=home.6f97805a.js.map
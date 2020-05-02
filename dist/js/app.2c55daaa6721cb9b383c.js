/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/main-game.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/source-map-loader!./js/components/main-game.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "../node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "../node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "../node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _resourses_sound_mp3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/resourses/sound.mp3 */ "./resourses/sound.mp3");
/* harmony import */ var _resourses_game_field_bg_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/resourses/game_field_bg.jpg */ "./resourses/game_field_bg.jpg");
/* harmony import */ var _js_doomguy_ts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/js/doomguy.ts */ "./js/doomguy.ts");
/* harmony import */ var _js_BulletFactory_ts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/js/BulletFactory.ts */ "./js/BulletFactory.ts");
/* harmony import */ var _js_EnemiesFactory_ts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/js/EnemiesFactory.ts */ "./js/EnemiesFactory.ts");






















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "main-game",
  props: {
    player_name: String
  },
  data: function data() {
    return {
      doomGuy: undefined,
      player_mouse_coords: {
        x: this.max_x * 0.5,
        y: this.max_y * 0.7
      },
      game_field_bg: new Image()
    };
  },
  watch: {
    "doomGuy.killed": function doomGuyKilled(val) {
      if (val === true) {
        //end
        this.sound.pause();
        this.sendScores();
      }
    }
  },
  created: function created() {
    this.canv = undefined;
    this.ctx = undefined;
    this.max_x = 0;
    this.max_y = 0;
    this.in_focus = true;
    this.sound = new Audio();
    this.timer = new Date(0);
    this.timer_interval = undefined;
    this.moving_interval = undefined;
    this.pressed_keys = [];
    this.enemies_factory = new _js_EnemiesFactory_ts__WEBPACK_IMPORTED_MODULE_25__["EnemiesFactory"](3);
    this.enemies_bullet_factory = new _js_BulletFactory_ts__WEBPACK_IMPORTED_MODULE_24__["BulletFactory"]();
    this.timer.setHours(0);
    this.timer.setMinutes(0);
    this.timer.setSeconds(0);
  },
  mounted: function mounted() {
    this.sound.src = _resourses_sound_mp3__WEBPACK_IMPORTED_MODULE_21__["default"];
    this.setup_canvas();
    this.sound.volume = 0.0;
    this.sound.loop = true;
    this.game_field_bg.src = _resourses_game_field_bg_jpg__WEBPACK_IMPORTED_MODULE_22__["default"];
    document.addEventListener('keydown', this.keydown_method);
    document.addEventListener('keyup', this.keyup_method);
    window.addEventListener('focus', this.focus_in);
    window.addEventListener('blur', this.focus_out);
    window.addEventListener('resize', this.setup_canvas);
    this.init_game();
    this.play();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.moving_interval);
    clearInterval(this.timer_interval);
    document.removeEventListener('keydown', this.keydown_method);
    document.removeEventListener('keyup', this.keyup_method);
    window.removeEventListener('focus', this.focus_in);
    window.removeEventListener('blur', this.focus_out);
    window.removeEventListener('resize', this.setup_canvas);
  },
  methods: {
    setup_canvas: function setup_canvas() {
      var app = document.body;
      this.canv = this.$refs.gamecanvas;
      this.ctx = this.canv.getContext('2d');
      var bodyCoords = app.getBoundingClientRect();
      this.canv.height = bodyCoords.height * 0.84;
      this.canv.width = bodyCoords.width * 0.8;
      this.max_x = this.canv.width;
      this.max_y = this.canv.height;
    },
    keydown_method: function keydown_method(e) {
      if (this.in_focus) {
        if (this.pressed_keys.indexOf(e.code) === -1) {
          this.pressed_keys.push(e.code);
        }
      }
    },
    keyup_method: function keyup_method(e) {
      if (this.in_focus) {
        var index = this.pressed_keys.indexOf(e.code);

        if (index !== -1) {
          this.pressed_keys.splice(index, 1);
        }
      }
    },
    focus_in: function focus_in() {
      this.in_focus = true;
    },
    focus_out: function focus_out() {
      this.in_focus = false;
      this.pressed_keys.splice(0);
    },
    canvas_mouse_move: function canvas_mouse_move(e) {
      this.player_mouse_coords = {
        x: Math.round(e.clientX - this.canv.getBoundingClientRect().left),
        y: Math.round(e.clientY - this.canv.getBoundingClientRect().top)
      };
    },
    canvas_click: function canvas_click() {
      this.doomGuy.try_to_shoot(this.player_mouse_coords);
    },
    timer_interval_func: function timer_interval_func() {
      if (this.in_focus) {
        var tmp = this.timer.getSeconds() + 1;

        if (tmp >= 60) {
          this.enemies_factory.maxEnemyCount++;
        }

        this.timer.setSeconds(tmp); //place enemy

        this.enemies_factory.generateNewEnemy(this.max_x, this.max_y, this.doomGuy);
      }
    },
    moving_interval_func: function moving_interval_func() {
      if (this.in_focus) {
        this.doomGuy.makeMoves(this.pressed_keys);
        this.doomGuy.bullet_factory.make_bullets_step(this.enemies_factory.CreatedEnemiesList); //enemies

        var _iterator = _createForOfIteratorHelper(this.enemies_factory.CreatedEnemiesList),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var enemy = _step.value;

            if (Object.getPrototypeOf(Object.getPrototypeOf(enemy)).constructor.name === 'NPC_with_bullets') {
              enemy.try_to_shoot(this.enemies_bullet_factory, this.doomGuy);
            } else {
              enemy.moveTo(this.max_x, this.max_y, this.doomGuy);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.enemies_bullet_factory.make_bullets_step([this.doomGuy]);
        this.enemies_factory.removeDeadEnemies();
      }
    },
    init_game: function init_game() {
      this.sound.play();
      this.doomGuy = new _js_doomguy_ts__WEBPACK_IMPORTED_MODULE_23__["DoomGuy"](this.max_x / 2, this.max_y / 2, this.max_x, this.max_y);
      this.timer_interval = setInterval(this.timer_interval_func, 1000);
      this.moving_interval = setInterval(this.moving_interval_func, 1000 / 60);
    },
    sendScores: function sendScores() {
      var _this = this;

      fetch('/server_add_score.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'player_name': this.player_name,
          'demons_killed': this.doomGuy.target_hits,
          'time_alive': this.timer.toTimeString().slice(0, 8)
        })
      }).then(function (response) {
        return response.json();
      }).then(function (player_id) {
        _this.$emit('player-game-id', Number.parseInt(player_id));

        _this.$emit('set-stage', 2);
      });
    },
    play: function play() {
      if (this.in_focus) {
        this.ctx.clearRect(0, 0, this.max_x, this.max_y); //bg

        this.ctx.drawImage(this.game_field_bg, 0, 0, this.max_x, this.max_y);
        this.doomGuy.adjustImage(this.player_mouse_coords);
        this.doomGuy.drawSelf(this.ctx);
        this.doomGuy.bullet_factory.drawBullets(this.ctx); //enemies

        var _iterator2 = _createForOfIteratorHelper(this.enemies_factory.CreatedEnemiesList),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var enemy = _step2.value;
            //draw
            enemy.adjustImage(this.doomGuy);
            enemy.drawSelf(this.ctx);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.enemies_bullet_factory.drawBullets(this.ctx); //lifes

        this.doomGuy.drawLifes(this.ctx); //timer

        this.ctx.fillStyle = 'rgba(255,255,255,255)';
        this.ctx.font = '22px serif';
        this.ctx.fillText("".concat(this.timer.getHours() !== 0 ? "".concat(this.timer.getHours(), ":") : '').concat(this.timer.getMinutes(), ":").concat(this.timer.getSeconds()), this.max_x * 0.9, this.max_y * 0.1); //kills

        this.ctx.font = '24px serif';
        this.ctx.fillText("\u0423\u0431\u0438\u0442\u043E: ".concat(this.doomGuy.target_hits), this.max_x * 0.87, this.max_y * 0.2);
      }

      window.requestAnimationFrame(this.play);
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/main-menu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/source-map-loader!./js/components/main-menu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "../node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_modal_window_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/modal-window.vue */ "./js/components/modal-window.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "main-menu",
  data: function data() {
    return {
      inputedData: '',
      modalShowed: false
    };
  },
  methods: {
    showModal: function showModal() {
      this.modalShowed = true;
    },
    changeState: function changeState() {
      this.$emit('set-stage', 1);
      this.$emit('set-player-name', this.inputedData.trim());
    }
  },
  components: {
    modalWindow: _js_components_modal_window_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/main-score.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/source-map-loader!./js/components/main-score.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "../node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_components_score_elem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/score-elem */ "./js/components/score-elem.vue");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "main-score",
  props: {
    current_player_id: Number
  },
  data: function data() {
    return {
      scores: []
    };
  },
  methods: {
    isCurrent: function isCurrent(elem) {
      return Number.parseInt(elem.id) === this.current_player_id;
    }
  },
  mounted: function mounted() {
    var _this = this;

    fetch('/server_get_rating.php', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player_id: this.current_player_id
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _this.scores = data;
    })["catch"](function () {});
  },
  components: {
    ScoreElem: _js_components_score_elem__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/modal-window.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/source-map-loader!./js/components/modal-window.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "modal-window",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/score-elem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/source-map-loader!./js/components/score-elem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "score-elem",
  props: {
    elem: Object,
    index: Number,
    isCurrent: Boolean
  }
});

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/resolve-url-loader/index.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-game.vue?vue&type=style&index=0&id=e873df96&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-2!../node_modules/resolve-url-loader??ref--6-3!../node_modules/sass-loader/dist/cjs.js??ref--6-4!../node_modules/vue-loader/lib??vue-loader-options!./js/components/main-game.vue?vue&type=style&index=0&id=e873df96&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/resolve-url-loader/index.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-menu.vue?vue&type=style&index=0&id=5d8749bc&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-2!../node_modules/resolve-url-loader??ref--6-3!../node_modules/sass-loader/dist/cjs.js??ref--6-4!../node_modules/vue-loader/lib??vue-loader-options!./js/components/main-menu.vue?vue&type=style&index=0&id=5d8749bc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/resolve-url-loader/index.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-score.vue?vue&type=style&index=0&id=32d552df&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-2!../node_modules/resolve-url-loader??ref--6-3!../node_modules/sass-loader/dist/cjs.js??ref--6-4!../node_modules/vue-loader/lib??vue-loader-options!./js/components/main-score.vue?vue&type=style&index=0&id=32d552df&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/resolve-url-loader/index.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./js/components/modal-window.vue?vue&type=style&index=0&id=c8e23d9e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-2!../node_modules/resolve-url-loader??ref--6-3!../node_modules/sass-loader/dist/cjs.js??ref--6-4!../node_modules/vue-loader/lib??vue-loader-options!./js/components/modal-window.vue?vue&type=style&index=0&id=c8e23d9e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-game.vue?vue&type=template&id=e873df96&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./js/components/main-game.vue?vue&type=template&id=e873df96&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("canvas", {
      ref: "gamecanvas",
      on: { mousemove: _vm.canvas_mouse_move, click: _vm.canvas_click }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-menu.vue?vue&type=template&id=5d8749bc&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./js/components/main-menu.vue?vue&type=template&id=5d8749bc&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "background" },
    [
      _c("div", { staticClass: "start_info" }, [
        _c("div", { staticClass: "input_player_name" }, [
          _c("label", { attrs: { for: "name" } }, [
            _vm._v("Введите ваше имя ")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.inputedData,
                expression: "inputedData"
              }
            ],
            attrs: { id: "name", type: "text" },
            domProps: { value: _vm.inputedData },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.inputedData = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn",
            attrs: { disabled: !_vm.inputedData.trim() },
            on: { click: _vm.changeState }
          },
          [_vm._v("rip & tear\n        ")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.showModal($event)
              }
            }
          },
          [_vm._v("Почитать правила")]
        )
      ]),
      _vm._v(" "),
      _vm.modalShowed
        ? _c("modal-window", {
            on: {
              "hide-modal": function($event) {
                _vm.modalShowed = false
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-score.vue?vue&type=template&id=32d552df&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./js/components/main-score.vue?vue&type=template&id=32d552df&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c(
      "div",
      { staticClass: "scores_body" },
      [
        _vm._l(_vm.scores, function(elem, index) {
          return [
            index === 10
              ? _c(
                  "div",
                  { staticClass: "score-elem" },
                  _vm._l(4, function(n) {
                    return _c("span", [_vm._v("...")])
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c("score-elem", {
              key: index,
              attrs: {
                elem: elem,
                index: index,
                isCurrent: _vm.isCurrent(elem)
              }
            })
          ]
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn try-again",
        on: {
          click: function($event) {
            return _vm.$emit("set-stage", 0)
          }
        }
      },
      [_vm._v("Попробовать ещё раз\n    ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/modal-window.vue?vue&type=template&id=c8e23d9e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./js/components/modal-window.vue?vue&type=template&id=c8e23d9e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal-manual" }, [
    _c("div", {
      staticClass: "modal-bg-manual",
      on: {
        click: function($event) {
          return _vm.$emit("hide-modal")
        }
      }
    }),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body-manual" }, [
      _c("h1", { staticClass: "text-center mt-5" }, [_vm._v("Привет, мир")]),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "text-center" }, [
        _vm._v(
          "Эта игра была создана для того, чтобы в неё играть, любое распростронение контента\n            незаконно:)"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/score-elem.vue?vue&type=template&id=4512e56a&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./js/components/score-elem.vue?vue&type=template&id=4512e56a& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "score-elem", class: { "current-elem": _vm.isCurrent } },
    [
      _c("div", [_vm._v(_vm._s(_vm.elem.number))]),
      _vm._v(" "),
      _c("div", [_vm._v(_vm._s(_vm.elem.player_name))]),
      _vm._v(" "),
      _c("div", [_vm._v(_vm._s(_vm.elem.demons_killed))]),
      _vm._v(" "),
      _c("div", [_vm._v(_vm._s(_vm.elem.time_alive))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./js/BulletFactory.ts":
/*!*****************************!*\
  !*** ./js/BulletFactory.ts ***!
  \*****************************/
/*! exports provided: BulletFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletFactory", function() { return BulletFactory; });
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_bullet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/bullet */ "./js/bullet.ts");
/* harmony import */ var _js_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/js/helpers */ "./js/helpers.ts");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BulletFactory = /*#__PURE__*/function () {
  function BulletFactory() {
    _classCallCheck(this, BulletFactory);

    this._factoried_bullets = [];
  }

  _createClass(BulletFactory, [{
    key: "make_bullets_step",
    value: function make_bullets_step(targets_array) {
      this.CreatedBulletsList.forEach(function (bullet) {
        bullet.make_move(targets_array);
      });
      this.CreatedBulletsList = this.CreatedBulletsList.filter(function (bullet) {
        return !bullet.should_be_destroyed;
      });
    }
  }, {
    key: "drawBullets",
    value: function drawBullets(ctx) {
      this.CreatedBulletsList.forEach(function (bullet) {
        bullet.drawBullet(ctx);
      });
    }
  }, {
    key: "createBullet",
    value: function createBullet(from, to, constraint_x, constraint_y) {
      var margin = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var speed = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.007;
      var coords = [to.x, to.y];

      if (margin !== 0) {
        for (var i = 0; i < 2; i++) {
          if (Math.random() > 0.5) {
            coords[i] -= Math.round(Math.random() * margin);
          } else {
            coords[i] += Math.round(Math.random() * margin);
          }
        }
      }

      var multipliers = Object(_js_helpers__WEBPACK_IMPORTED_MODULE_6__["calcMovingDirection"])(from, Object.assign(Object.assign({}, to), {
        x: coords[0],
        y: coords[1]
      }));
      var inst = new _js_bullet__WEBPACK_IMPORTED_MODULE_5__["Bullet"](from, from.x, from.y, multipliers, constraint_x, constraint_y, speed);
      this.CreatedBulletsList.push(inst);
      return inst;
    }
  }, {
    key: "CreatedBulletsList",
    get: function get() {
      return this._factoried_bullets;
    },
    set: function set(newArray) {
      this._factoried_bullets = newArray;
    }
  }]);

  return BulletFactory;
}();

/***/ }),

/***/ "./js/EnemiesFactory.ts":
/*!******************************!*\
  !*** ./js/EnemiesFactory.ts ***!
  \******************************/
/*! exports provided: EnemiesFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemiesFactory", function() { return EnemiesFactory; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _js_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/js/helpers */ "./js/helpers.ts");
/* harmony import */ var _js_enemies__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/js/enemies */ "./js/enemies.ts");

















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EnemiesFactory = /*#__PURE__*/function () {
  function EnemiesFactory(max_enemy_count) {
    _classCallCheck(this, EnemiesFactory);

    this._factoried_enemies = [];
    this._max_enemy_count = max_enemy_count;
  }

  _createClass(EnemiesFactory, [{
    key: "generateNewEnemy",
    value: function generateNewEnemy(max_x, max_y, doomGuy) {
      if (this.CreatedEnemiesList.length < this._max_enemy_count) {
        var type = Math.round(Math.random() * 2);
        var size_x = max_x * 0.05,
            size_y = max_y * 0.11,
            position = this.generateCoords(max_x, max_y, doomGuy, size_x, size_y);

        if (type === 0) {
          this.CreatedEnemiesList.push(new _js_enemies__WEBPACK_IMPORTED_MODULE_17__["Imp"](position[0], position[1], max_x, max_y, doomGuy));
        } else if (type === 1) {
          this.CreatedEnemiesList.push(new _js_enemies__WEBPACK_IMPORTED_MODULE_17__["LostSoul"](position[0], position[1], max_x, max_y, doomGuy));
        } else {
          this.CreatedEnemiesList.push(new _js_enemies__WEBPACK_IMPORTED_MODULE_17__["FormerHuman"](position[0], position[1], max_x, max_y, doomGuy));
        }
      }
    }
  }, {
    key: "generateCoords",
    value: function generateCoords(max_x, max_y, doomGuy, size_x, size_y) {
      var x,
          y,
          done = false;
      var check_arr = [].concat(_toConsumableArray(this.CreatedEnemiesList), [doomGuy]);

      while (!done) {
        x = Math.floor(Math.random() * (max_x - size_x) + size_x / 2);
        y = Math.floor(Math.random() * (max_y - size_y) + size_y / 2);
        done = true;

        var _iterator = _createForOfIteratorHelper(check_arr),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var obj = _step.value;

            if (Object(_js_helpers__WEBPACK_IMPORTED_MODULE_16__["isObjectsConfront"])({
              x: x,
              y: y,
              size_x: size_x * 4,
              size_y: size_y * 4
            }, obj)) {
              done = false;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (x === undefined || y === undefined) {
        throw "Cannot generate new coords";
      } else {
        return [x, y];
      }
    }
  }, {
    key: "removeDeadEnemies",
    value: function removeDeadEnemies() {
      this.CreatedEnemiesList = this.CreatedEnemiesList.filter(function (enemy) {
        return !enemy.killed;
      });
    }
  }, {
    key: "CreatedEnemiesList",
    get: function get() {
      return this._factoried_enemies;
    },
    set: function set(newArray) {
      this._factoried_enemies = newArray;
    }
  }, {
    key: "maxEnemyCount",
    get: function get() {
      return this._max_enemy_count;
    },
    set: function set(newVal) {
      this._max_enemy_count = newVal;
    }
  }]);

  return EnemiesFactory;
}();

/***/ }),

/***/ "./js/abstract_classes/moving_npc.ts":
/*!*******************************************!*\
  !*** ./js/abstract_classes/moving_npc.ts ***!
  \*******************************************/
/*! exports provided: moving_NPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moving_NPC", function() { return moving_NPC; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/js/helpers */ "./js/helpers.ts");
/* harmony import */ var _js_abstract_classes_npc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/js/abstract_classes/npc */ "./js/abstract_classes/npc.ts");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var moving_NPC = /*#__PURE__*/function (_NPC) {
  _inherits(moving_NPC, _NPC);

  var _super = _createSuper(moving_NPC);

  function moving_NPC(start_x, start_y, constraint_x, constraint_y) {
    _classCallCheck(this, moving_NPC);

    return _super.call(this, start_x, start_y, constraint_x, constraint_y);
  }

  _createClass(moving_NPC, [{
    key: "moveTo",
    value: function moveTo(currentDoomguy) {
      if (this.speed !== undefined) {
        var oses_speed = Object(_js_helpers__WEBPACK_IMPORTED_MODULE_14__["calcMovingDirection"])(this, currentDoomguy);
        var tmp = this.y - this.size_y / 2 - this.speed * oses_speed[1] > 0 && this.x - this.size_x / 2 - this.speed * oses_speed[0] > 0 && this.y + this.size_y / 2 + this.speed * oses_speed[1] < this.constraint_y && this.x + this.size_x / 2 + this.speed * oses_speed[0] < this.constraint_x;

        if (tmp) {
          this.x += this.speed * oses_speed[0];
          this.y += this.speed * oses_speed[1];
        }

        if (Object(_js_helpers__WEBPACK_IMPORTED_MODULE_14__["isObjectsConfront"])(this, currentDoomguy)) {
          currentDoomguy.gotHit();
          this.gotHit();
        }
      }
    }
  }]);

  return moving_NPC;
}(_js_abstract_classes_npc__WEBPACK_IMPORTED_MODULE_15__["NPC"]);

/***/ }),

/***/ "./js/abstract_classes/npc.ts":
/*!************************************!*\
  !*** ./js/abstract_classes/npc.ts ***!
  \************************************/
/*! exports provided: NPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPC", function() { return NPC; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "../node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resourses_doomguy_guy_back_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/resourses/doomguy/guy-back.png */ "./resourses/doomguy/guy-back.png");
/* harmony import */ var _resourses_doomguy_guy_left_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/resourses/doomguy/guy-left.png */ "./resourses/doomguy/guy-left.png");
/* harmony import */ var _resourses_doomguy_guy_right_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/resourses/doomguy/guy-right.png */ "./resourses/doomguy/guy-right.png");
/* harmony import */ var _resourses_doomguy_guy_forward_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/resourses/doomguy/guy-forward.png */ "./resourses/doomguy/guy-forward.png");
/* harmony import */ var _resourses_enemies_imp_imp_back_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/resourses/enemies/imp/imp-back.png */ "./resourses/enemies/imp/imp-back.png");
/* harmony import */ var _resourses_enemies_imp_imp_left_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/resourses/enemies/imp/imp-left.png */ "./resourses/enemies/imp/imp-left.png");
/* harmony import */ var _resourses_enemies_imp_imp_right_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/resourses/enemies/imp/imp-right.png */ "./resourses/enemies/imp/imp-right.png");
/* harmony import */ var _resourses_enemies_imp_imp_forward_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/resourses/enemies/imp/imp-forward.png */ "./resourses/enemies/imp/imp-forward.png");
/* harmony import */ var _resourses_enemies_lost_soul_soul_back_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/resourses/enemies/lost_soul/soul-back.png */ "./resourses/enemies/lost_soul/soul-back.png");
/* harmony import */ var _resourses_enemies_lost_soul_soul_left_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/resourses/enemies/lost_soul/soul-left.png */ "./resourses/enemies/lost_soul/soul-left.png");
/* harmony import */ var _resourses_enemies_lost_soul_soul_right_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/resourses/enemies/lost_soul/soul-right.png */ "./resourses/enemies/lost_soul/soul-right.png");
/* harmony import */ var _resourses_enemies_lost_soul_soul_forward_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/resourses/enemies/lost_soul/soul-forward.png */ "./resourses/enemies/lost_soul/soul-forward.png");
/* harmony import */ var _resourses_enemies_former_human_human_back_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/resourses/enemies/former_human/human-back.png */ "./resourses/enemies/former_human/human-back.png");
/* harmony import */ var _resourses_enemies_former_human_human_left_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/resourses/enemies/former_human/human-left.png */ "./resourses/enemies/former_human/human-left.png");
/* harmony import */ var _resourses_enemies_former_human_human_right_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/resourses/enemies/former_human/human-right.png */ "./resourses/enemies/former_human/human-right.png");
/* harmony import */ var _resourses_enemies_former_human_human_forward_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/resourses/enemies/former_human/human-forward.png */ "./resourses/enemies/former_human/human-forward.png");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


















var createImage = function createImage(src) {
  var tmp = new Image();
  tmp.src = src;
  return tmp;
};

var ALL_IMAGES = Object.freeze({
  'DoomGuy': {
    'top': createImage(_resourses_doomguy_guy_back_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
    'left': createImage(_resourses_doomguy_guy_left_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
    'right': createImage(_resourses_doomguy_guy_right_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
    'bottom': createImage(_resourses_doomguy_guy_forward_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  },
  'Imp': {
    'top': createImage(_resourses_enemies_imp_imp_back_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
    'left': createImage(_resourses_enemies_imp_imp_left_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
    'right': createImage(_resourses_enemies_imp_imp_right_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
    'bottom': createImage(_resourses_enemies_imp_imp_forward_png__WEBPACK_IMPORTED_MODULE_11__["default"])
  },
  'LostSoul': {
    'top': createImage(_resourses_enemies_lost_soul_soul_back_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
    'left': createImage(_resourses_enemies_lost_soul_soul_left_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
    'right': createImage(_resourses_enemies_lost_soul_soul_right_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
    'bottom': createImage(_resourses_enemies_lost_soul_soul_forward_png__WEBPACK_IMPORTED_MODULE_15__["default"])
  },
  'FormerHuman': {
    'top': createImage(_resourses_enemies_former_human_human_back_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
    'left': createImage(_resourses_enemies_former_human_human_left_png__WEBPACK_IMPORTED_MODULE_17__["default"]),
    'right': createImage(_resourses_enemies_former_human_human_right_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
    'bottom': createImage(_resourses_enemies_former_human_human_forward_png__WEBPACK_IMPORTED_MODULE_19__["default"])
  }
});
var NPC = /*#__PURE__*/function () {
  function NPC(start_x, start_y, constraint_x, constraint_y) {
    _classCallCheck(this, NPC);

    this.size_x = NaN;
    this.size_y = NaN;
    this.image = undefined;
    this.x = start_x;
    this.y = start_y;
    this.constraint_x = constraint_x;
    this.constraint_y = constraint_y;
    this.killed = false;
  }

  _createClass(NPC, [{
    key: "setImage",
    value: function setImage(which) {
      this.image = ALL_IMAGES[Object.getPrototypeOf(this).constructor.name][which];
    }
  }, {
    key: "gotHit",
    value: function gotHit() {
      this.killed = true;
    }
  }, {
    key: "drawSelf",
    value: function drawSelf(ctx) {
      if (this.image !== undefined) {
        ctx.drawImage(this.image, this.x - this.size_x / 2, this.y - this.size_y / 2);
      }
    }
  }, {
    key: "adjustImage",
    value: function adjustImage(target_coords) {
      var squares = Object.freeze({
        'left_top': 1,
        'right_top': 2,
        'right_bottom': 3,
        'left_bottom': 4
      });
      var Oses = Object.freeze({
        'X': 1,
        'Y': 2
      });

      function getSquare(current_object) {
        var ret;

        if (current_object.y < target_coords.y) {
          if (current_object.x < target_coords.x) {
            ret = squares['right_bottom'];
          } else {
            ret = squares['left_bottom'];
          }
        } else {
          if (current_object.x < target_coords.x) {
            ret = squares['right_top'];
          } else {
            ret = squares['left_top'];
          }
        }

        return ret;
      }

      function getClosestO(current_object) {
        var catX = Math.abs(current_object.x - target_coords.x);
        var catY = Math.abs(current_object.y - target_coords.y);
        var hypo = Math.sqrt(Math.pow(catX, 2) + Math.pow(catY, 2));
        var for_x = Math.acos(catX / hypo) * 180 / Math.PI;
        var for_y = Math.acos(catY / hypo) * 180 / Math.PI;

        if (for_x <= for_y) {
          return Oses['X'];
        } else {
          return Oses['Y'];
        }
      }

      var square = getSquare(this);
      var os = getClosestO(this);

      if ((square === squares['left_bottom'] || square === squares['left_top']) && os === Oses['X']) {
        this.setImage('left');
      } else if ((square === squares['right_top'] || square === squares['left_top']) && os === Oses['Y']) {
        this.setImage('top');
      } else if ((square === squares['right_top'] || square === squares['right_bottom']) && os === Oses['X']) {
        this.setImage('right');
      } else {
        this.setImage('bottom');
      }
    }
  }]);

  return NPC;
}();

/***/ }),

/***/ "./js/abstract_classes/npc_with_bullets.ts":
/*!*************************************************!*\
  !*** ./js/abstract_classes/npc_with_bullets.ts ***!
  \*************************************************/
/*! exports provided: NPC_with_bullets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPC_with_bullets", function() { return NPC_with_bullets; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_abstract_classes_npc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/js/abstract_classes/npc */ "./js/abstract_classes/npc.ts");

















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var NPC_with_bullets = /*#__PURE__*/function (_NPC) {
  _inherits(NPC_with_bullets, _NPC);

  var _super = _createSuper(NPC_with_bullets);

  function NPC_with_bullets(start_x, start_y, constraint_x, constraint_y) {
    var _this;

    _classCallCheck(this, NPC_with_bullets);

    _this = _super.call(this, start_x, start_y, constraint_x, constraint_y);
    _this._target_hits = 0;
    return _this;
  }

  _createClass(NPC_with_bullets, [{
    key: "target_hits",
    get: function get() {
      return this._target_hits;
    },
    set: function set(value) {
      this._target_hits = value;
    }
  }]);

  return NPC_with_bullets;
}(_js_abstract_classes_npc__WEBPACK_IMPORTED_MODULE_14__["NPC"]);

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _js_components_main_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/main-menu */ "./js/components/main-menu.vue");
/* harmony import */ var _js_components_main_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/main-game */ "./js/components/main-game.vue");
/* harmony import */ var _js_components_main_score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/main-score */ "./js/components/main-score.vue");







new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#app',
  template: "\n        <transition name=\"main\">\n            <main-menu @set-stage=\"current_stage=$event\"\n                       @set-player-name=\"player_name=$event\"\n                       v-if=\"current_stage===0\"></main-menu>\n            <main-game @set-stage=\"current_stage=$event\"\n                       :player_name=\"player_name\"\n                       @player-game-id=\"player_id=$event\"\n                       v-else-if=\"current_stage===1\"></main-game>\n            <main-score @set-stage=\"current_stage=$event\"\n                        :current_player_id=\"player_id\"\n                        v-else></main-score>\n        </transition>\n    ",
  data: {
    current_stage: 0,
    player_name: undefined,
    player_id: undefined
  },
  methods: {
    resetProgress: function resetProgress() {
      this.player_name = undefined;
      this.player_id = undefined;
    }
  },
  watch: {
    current_stage: function current_stage(new_val) {
      if (new_val === 0) {
        this.resetProgress();
      }
    }
  },
  components: {
    MainMenu: _js_components_main_menu__WEBPACK_IMPORTED_MODULE_2__["default"],
    MainGame: _js_components_main_game__WEBPACK_IMPORTED_MODULE_3__["default"],
    MainScore: _js_components_main_score__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./js/bullet.ts":
/*!**********************!*\
  !*** ./js/bullet.ts ***!
  \**********************/
/*! exports provided: Bullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bullet", function() { return Bullet; });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "../node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/helpers */ "./js/helpers.ts");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var COLORS = ['#c9ac42', '#bc4b3a', '#6ce814', '#1f8a9b'];
var Bullet = /*#__PURE__*/function () {
  function Bullet(creator, start_x, start_y, multipliers, constraint_x, constraint_y, speed) {
    _classCallCheck(this, Bullet);

    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.creator = creator;
    this.x = start_x;
    this.y = start_y;
    var minSide = Math.min(constraint_x, constraint_y);
    this.speed_x = multipliers[0] * minSide * speed;
    this.speed_y = multipliers[1] * minSide * speed;
    this.size_x = minSide * 0.012;
    this.size_y = minSide * 0.012;
    this.constraint_x = constraint_x;
    this.constraint_y = constraint_y;
    this._should_be_destroyed = false;
  }

  _createClass(Bullet, [{
    key: "make_move",
    value: function make_move(targets_array) {
      var _this = this;

      this.x += this.speed_x;
      this.y += this.speed_y;
      targets_array.forEach(function (target, index) {
        if (Object(_js_helpers__WEBPACK_IMPORTED_MODULE_4__["isObjectsConfront"])(_this, target)) {
          targets_array[index].gotHit();
          _this.should_be_destroyed = true;
          _this.creator.target_hits++;
        }
      });

      if (this.x < 0 || this.x > this.constraint_x || this.y < 0 || this.y > this.constraint_y) {
        this.should_be_destroyed = true;
      }
    }
  }, {
    key: "drawBullet",
    value: function drawBullet(ctx) {
      if (!this.should_be_destroyed) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size_x, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }, {
    key: "should_be_destroyed",
    get: function get() {
      return this._should_be_destroyed;
    },
    set: function set(value) {
      this._should_be_destroyed = value;
    }
  }]);

  return Bullet;
}();

/***/ }),

/***/ "./js/components/main-game.vue":
/*!*************************************!*\
  !*** ./js/components/main-game.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_game_vue_vue_type_template_id_e873df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-game.vue?vue&type=template&id=e873df96&scoped=true& */ "./js/components/main-game.vue?vue&type=template&id=e873df96&scoped=true&");
/* harmony import */ var _main_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-game.vue?vue&type=script&lang=js& */ "./js/components/main-game.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_game_vue_vue_type_style_index_0_id_e873df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-game.vue?vue&type=style&index=0&id=e873df96&lang=scss&scoped=true& */ "./js/components/main-game.vue?vue&type=style&index=0&id=e873df96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_game_vue_vue_type_template_id_e873df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_game_vue_vue_type_template_id_e873df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e873df96",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/main-game.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/main-game.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./js/components/main-game.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_main_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./main-game.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/main-game.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_main_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/main-game.vue?vue&type=style&index=0&id=e873df96&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./js/components/main-game.vue?vue&type=style&index=0&id=e873df96&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_style_index_0_id_e873df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/resolve-url-loader??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-4!../../../node_modules/vue-loader/lib??vue-loader-options!./main-game.vue?vue&type=style&index=0&id=e873df96&lang=scss&scoped=true& */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/resolve-url-loader/index.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-game.vue?vue&type=style&index=0&id=e873df96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_style_index_0_id_e873df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_style_index_0_id_e873df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_style_index_0_id_e873df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_style_index_0_id_e873df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_style_index_0_id_e873df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./js/components/main-game.vue?vue&type=template&id=e873df96&scoped=true&":
/*!********************************************************************************!*\
  !*** ./js/components/main-game.vue?vue&type=template&id=e873df96&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_template_id_e873df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main-game.vue?vue&type=template&id=e873df96&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-game.vue?vue&type=template&id=e873df96&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_template_id_e873df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_game_vue_vue_type_template_id_e873df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/main-menu.vue":
/*!*************************************!*\
  !*** ./js/components/main-menu.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_menu_vue_vue_type_template_id_5d8749bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-menu.vue?vue&type=template&id=5d8749bc&scoped=true& */ "./js/components/main-menu.vue?vue&type=template&id=5d8749bc&scoped=true&");
/* harmony import */ var _main_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-menu.vue?vue&type=script&lang=js& */ "./js/components/main-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_menu_vue_vue_type_style_index_0_id_5d8749bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-menu.vue?vue&type=style&index=0&id=5d8749bc&lang=scss&scoped=true& */ "./js/components/main-menu.vue?vue&type=style&index=0&id=5d8749bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_menu_vue_vue_type_template_id_5d8749bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_menu_vue_vue_type_template_id_5d8749bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d8749bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/main-menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/main-menu.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./js/components/main-menu.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_main_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./main-menu.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/main-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_main_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/main-menu.vue?vue&type=style&index=0&id=5d8749bc&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./js/components/main-menu.vue?vue&type=style&index=0&id=5d8749bc&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_style_index_0_id_5d8749bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/resolve-url-loader??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-4!../../../node_modules/vue-loader/lib??vue-loader-options!./main-menu.vue?vue&type=style&index=0&id=5d8749bc&lang=scss&scoped=true& */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/resolve-url-loader/index.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-menu.vue?vue&type=style&index=0&id=5d8749bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_style_index_0_id_5d8749bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_style_index_0_id_5d8749bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_style_index_0_id_5d8749bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_style_index_0_id_5d8749bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_style_index_0_id_5d8749bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./js/components/main-menu.vue?vue&type=template&id=5d8749bc&scoped=true&":
/*!********************************************************************************!*\
  !*** ./js/components/main-menu.vue?vue&type=template&id=5d8749bc&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_template_id_5d8749bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main-menu.vue?vue&type=template&id=5d8749bc&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-menu.vue?vue&type=template&id=5d8749bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_template_id_5d8749bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_menu_vue_vue_type_template_id_5d8749bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/main-score.vue":
/*!**************************************!*\
  !*** ./js/components/main-score.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_score_vue_vue_type_template_id_32d552df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-score.vue?vue&type=template&id=32d552df&scoped=true& */ "./js/components/main-score.vue?vue&type=template&id=32d552df&scoped=true&");
/* harmony import */ var _main_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-score.vue?vue&type=script&lang=js& */ "./js/components/main-score.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_score_vue_vue_type_style_index_0_id_32d552df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-score.vue?vue&type=style&index=0&id=32d552df&lang=scss&scoped=true& */ "./js/components/main-score.vue?vue&type=style&index=0&id=32d552df&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_score_vue_vue_type_template_id_32d552df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_score_vue_vue_type_template_id_32d552df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32d552df",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/main-score.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/main-score.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./js/components/main-score.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_main_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./main-score.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/main-score.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_main_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/main-score.vue?vue&type=style&index=0&id=32d552df&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./js/components/main-score.vue?vue&type=style&index=0&id=32d552df&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_style_index_0_id_32d552df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/resolve-url-loader??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-4!../../../node_modules/vue-loader/lib??vue-loader-options!./main-score.vue?vue&type=style&index=0&id=32d552df&lang=scss&scoped=true& */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/resolve-url-loader/index.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-score.vue?vue&type=style&index=0&id=32d552df&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_style_index_0_id_32d552df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_style_index_0_id_32d552df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_style_index_0_id_32d552df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_style_index_0_id_32d552df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_style_index_0_id_32d552df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./js/components/main-score.vue?vue&type=template&id=32d552df&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./js/components/main-score.vue?vue&type=template&id=32d552df&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_template_id_32d552df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main-score.vue?vue&type=template&id=32d552df&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/main-score.vue?vue&type=template&id=32d552df&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_template_id_32d552df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_score_vue_vue_type_template_id_32d552df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/modal-window.vue":
/*!****************************************!*\
  !*** ./js/components/modal-window.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_window_vue_vue_type_template_id_c8e23d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-window.vue?vue&type=template&id=c8e23d9e&scoped=true& */ "./js/components/modal-window.vue?vue&type=template&id=c8e23d9e&scoped=true&");
/* harmony import */ var _modal_window_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-window.vue?vue&type=script&lang=js& */ "./js/components/modal-window.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _modal_window_vue_vue_type_style_index_0_id_c8e23d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-window.vue?vue&type=style&index=0&id=c8e23d9e&lang=scss&scoped=true& */ "./js/components/modal-window.vue?vue&type=style&index=0&id=c8e23d9e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modal_window_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modal_window_vue_vue_type_template_id_c8e23d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modal_window_vue_vue_type_template_id_c8e23d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c8e23d9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/modal-window.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/modal-window.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./js/components/modal-window.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_modal_window_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./modal-window.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/modal-window.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_modal_window_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/modal-window.vue?vue&type=style&index=0&id=c8e23d9e&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./js/components/modal-window.vue?vue&type=style&index=0&id=c8e23d9e&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_c8e23d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/resolve-url-loader??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-4!../../../node_modules/vue-loader/lib??vue-loader-options!./modal-window.vue?vue&type=style&index=0&id=c8e23d9e&lang=scss&scoped=true& */ "../node_modules/mini-css-extract-plugin/dist/loader.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/resolve-url-loader/index.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./js/components/modal-window.vue?vue&type=style&index=0&id=c8e23d9e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_c8e23d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_c8e23d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_c8e23d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_c8e23d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_resolve_url_loader_index_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_6_4_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_c8e23d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./js/components/modal-window.vue?vue&type=template&id=c8e23d9e&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./js/components/modal-window.vue?vue&type=template&id=c8e23d9e&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_template_id_c8e23d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./modal-window.vue?vue&type=template&id=c8e23d9e&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/modal-window.vue?vue&type=template&id=c8e23d9e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_template_id_c8e23d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_template_id_c8e23d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/score-elem.vue":
/*!**************************************!*\
  !*** ./js/components/score-elem.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _score_elem_vue_vue_type_template_id_4512e56a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-elem.vue?vue&type=template&id=4512e56a& */ "./js/components/score-elem.vue?vue&type=template&id=4512e56a&");
/* harmony import */ var _score_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-elem.vue?vue&type=script&lang=js& */ "./js/components/score-elem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _score_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _score_elem_vue_vue_type_template_id_4512e56a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _score_elem_vue_vue_type_template_id_4512e56a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/score-elem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/score-elem.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./js/components/score-elem.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_score_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!../../../node_modules/source-map-loader!./score-elem.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!../node_modules/source-map-loader/index.js!./js/components/score-elem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_score_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/score-elem.vue?vue&type=template&id=4512e56a&":
/*!*********************************************************************!*\
  !*** ./js/components/score-elem.vue?vue&type=template&id=4512e56a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_elem_vue_vue_type_template_id_4512e56a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./score-elem.vue?vue&type=template&id=4512e56a& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/components/score-elem.vue?vue&type=template&id=4512e56a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_elem_vue_vue_type_template_id_4512e56a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_elem_vue_vue_type_template_id_4512e56a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/doomguy.ts":
/*!***********************!*\
  !*** ./js/doomguy.ts ***!
  \***********************/
/*! exports provided: DoomGuy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoomGuy", function() { return DoomGuy; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _resourses_heart_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/resourses/heart.svg */ "./resourses/heart.svg");
/* harmony import */ var _js_abstract_classes_npc_with_bullets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/js/abstract_classes/npc_with_bullets */ "./js/abstract_classes/npc_with_bullets.ts");
/* harmony import */ var _js_BulletFactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/js/BulletFactory */ "./js/BulletFactory.ts");


















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var KEYS;

(function (KEYS) {
  KEYS["W"] = "KeyW";
  KEYS["A"] = "KeyA";
  KEYS["S"] = "KeyS";
  KEYS["D"] = "KeyD";
})(KEYS || (KEYS = {}));

var DoomGuy = /*#__PURE__*/function (_NPC_with_bullets) {
  _inherits(DoomGuy, _NPC_with_bullets);

  var _super = _createSuper(DoomGuy);

  function DoomGuy(start_x, start_y, constraint_x, constraint_y) {
    var _this;

    _classCallCheck(this, DoomGuy);

    _this = _super.call(this, start_x, start_y, constraint_x, constraint_y);
    _this.speed = Math.min(constraint_x, constraint_y) * 0.005;
    _this.size_x = constraint_x * 0.05;
    _this.size_y = constraint_y * 0.10;
    _this.lives = 3;

    _this.setImage('bottom');

    _this.can_shoot = true;
    _this.bullet_factory = new _js_BulletFactory__WEBPACK_IMPORTED_MODULE_19__["BulletFactory"]();
    _this.heartImage = new Image();
    _this.heartImage.src = _resourses_heart_svg__WEBPACK_IMPORTED_MODULE_17__["default"];
    return _this;
  }

  _createClass(DoomGuy, [{
    key: "try_to_shoot",
    value: function try_to_shoot(target) {
      var _this2 = this;

      if (this.can_shoot) {
        this.bullet_factory.createBullet(this, target, this.constraint_x, this.constraint_y);
        this.can_shoot = false;
        setTimeout(function () {
          _this2.can_shoot = true;
        }, 500);
      }
    }
  }, {
    key: "gotHit",
    value: function gotHit() {
      this.lives--;

      if (this.lives <= 0) {
        this.killed = true;
      }
    }
  }, {
    key: "drawLifes",
    value: function drawLifes(ctx) {
      var _this3 = this;

      var drawHeart = function drawHeart(ctx, x, y, constraint_x, constraint_y) {
        ctx.drawImage(_this3.heartImage, x, y + constraint_y * 0.02, constraint_x * 0.03, constraint_y * 0.05);
      };

      var x = this.constraint_x * 0.06;
      var y = this.constraint_y * 0.05;
      var increment_x = this.constraint_x * 0.05;

      for (var i = 0; i < this.lives; i++) {
        drawHeart(ctx, x, y, this.constraint_x, this.constraint_y);
        x += increment_x;
      }
    }
  }, {
    key: "makeMoves",
    value: function makeMoves(pressed_keys) {
      var _this4 = this;

      pressed_keys.forEach(function (elem) {
        switch (elem) {
          case KEYS.W:
            if (_this4.y - _this4.size_y / 2 - _this4.speed > 0) {
              _this4.y -= _this4.speed;
            }

            break;

          case KEYS.A:
            if (_this4.x - _this4.size_x / 2 - _this4.speed > 0) {
              _this4.x -= _this4.speed;
            }

            break;

          case KEYS.S:
            if (_this4.y + _this4.size_y / 2 + _this4.speed < _this4.constraint_y) {
              _this4.y += _this4.speed;
            }

            break;

          case KEYS.D:
            if (_this4.x + _this4.size_x / 2 + _this4.speed < _this4.constraint_x) {
              _this4.x += _this4.speed;
            }

            break;
        }
      });
    }
  }]);

  return DoomGuy;
}(_js_abstract_classes_npc_with_bullets__WEBPACK_IMPORTED_MODULE_18__["NPC_with_bullets"]);

/***/ }),

/***/ "./js/enemies.ts":
/*!***********************!*\
  !*** ./js/enemies.ts ***!
  \***********************/
/*! exports provided: Imp, LostSoul, FormerHuman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imp", function() { return Imp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostSoul", function() { return LostSoul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormerHuman", function() { return FormerHuman; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _js_abstract_classes_moving_npc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/js/abstract_classes/moving_npc */ "./js/abstract_classes/moving_npc.ts");
/* harmony import */ var _js_abstract_classes_npc_with_bullets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/js/abstract_classes/npc_with_bullets */ "./js/abstract_classes/npc_with_bullets.ts");
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Imp = /*#__PURE__*/function (_moving_NPC) {
  _inherits(Imp, _moving_NPC);

  var _super = _createSuper(Imp);

  function Imp(start_x, start_y, constraint_x, constraint_y, current_doomguy) {
    var _this;

    _classCallCheck(this, Imp);

    _this = _super.call(this, start_x, start_y, constraint_x, constraint_y);
    _this.size_x = constraint_x * 0.05;
    _this.size_y = constraint_y * 0.1;
    _this.speed = Math.min(constraint_x, constraint_y) * 0.0021;

    _this.adjustImage(current_doomguy);

    return _this;
  }

  return Imp;
}(_js_abstract_classes_moving_npc__WEBPACK_IMPORTED_MODULE_15__["moving_NPC"]);
var LostSoul = /*#__PURE__*/function (_moving_NPC2) {
  _inherits(LostSoul, _moving_NPC2);

  var _super2 = _createSuper(LostSoul);

  function LostSoul(start_x, start_y, constraint_x, constraint_y, current_doomguy) {
    var _this2;

    _classCallCheck(this, LostSoul);

    _this2 = _super2.call(this, start_x, start_y, constraint_x, constraint_y);
    _this2.size_x = constraint_x * 0.05;
    _this2.size_y = constraint_y * 0.1;
    _this2.speed = Math.min(constraint_x, constraint_y) * 0.003;

    _this2.adjustImage(current_doomguy);

    return _this2;
  }

  return LostSoul;
}(_js_abstract_classes_moving_npc__WEBPACK_IMPORTED_MODULE_15__["moving_NPC"]);
var FormerHuman = /*#__PURE__*/function (_NPC_with_bullets) {
  _inherits(FormerHuman, _NPC_with_bullets);

  var _super3 = _createSuper(FormerHuman);

  function FormerHuman(start_x, start_y, constraint_x, constraint_y, current_doomguy) {
    var _this3;

    _classCallCheck(this, FormerHuman);

    _this3 = _super3.call(this, start_x, start_y, constraint_x, constraint_y);
    _this3.size_x = constraint_x * 0.045;
    _this3.size_y = constraint_y * 0.10;
    _this3.max_bullets = 4;

    _this3.adjustImage(current_doomguy);

    _this3.can_shoot = false;
    setTimeout(function () {
      _this3.can_shoot = true;
    }, 700);
    return _this3;
  }

  _createClass(FormerHuman, [{
    key: "try_to_shoot",
    value: function try_to_shoot(factory, target) {
      var _this4 = this;

      if (this.can_shoot) {
        var margin = Math.floor(Math.min(this.constraint_x, this.constraint_y) * 0.15);
        factory.createBullet(this, target, this.constraint_x, this.constraint_y, margin, 0.004);
        this.can_shoot = false;
        setTimeout(function () {
          _this4.can_shoot = true;
        }, 1300);
      }
    }
  }]);

  return FormerHuman;
}(_js_abstract_classes_npc_with_bullets__WEBPACK_IMPORTED_MODULE_16__["NPC_with_bullets"]);

/***/ }),

/***/ "./js/helpers.ts":
/*!***********************!*\
  !*** ./js/helpers.ts ***!
  \***********************/
/*! exports provided: calcMovingDirection, isObjectsConfront */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMovingDirection", function() { return calcMovingDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectsConfront", function() { return isObjectsConfront; });
function calcMovingDirection(from, to) {
  var catX = to.x - from.x;
  var catY = to.y - from.y;
  var hypo = Math.sqrt(Math.pow(catX, 2) + Math.pow(catY, 2));
  return [catX / hypo, catY / hypo];
}
function isObjectsConfront(obj1, obj2) {
  return !(obj1.x + obj1.size_x / 2 < obj2.x - obj2.size_x / 2 || obj1.x - obj1.size_x / 2 > obj2.x + obj2.size_x / 2 || obj1.y + obj1.size_y / 2 < obj2.y - obj2.size_y / 2 || obj1.y - obj1.size_y / 2 > obj2.y + obj2.size_y / 2);
}

/***/ }),

/***/ "./resourses/doomguy/guy-back.png":
/*!****************************************!*\
  !*** ./resourses/doomguy/guy-back.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/guy-back.11256c54a1a3f86a11c49649a7f51bac.png");

/***/ }),

/***/ "./resourses/doomguy/guy-forward.png":
/*!*******************************************!*\
  !*** ./resourses/doomguy/guy-forward.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/guy-forward.03715c93bf087379fb8bf6c6e3864809.png");

/***/ }),

/***/ "./resourses/doomguy/guy-left.png":
/*!****************************************!*\
  !*** ./resourses/doomguy/guy-left.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/guy-left.40154243440f5022150d95b94af9fc50.png");

/***/ }),

/***/ "./resourses/doomguy/guy-right.png":
/*!*****************************************!*\
  !*** ./resourses/doomguy/guy-right.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/guy-right.fd047c30d2484de27b142abeed0f3e2f.png");

/***/ }),

/***/ "./resourses/enemies/former_human/human-back.png":
/*!*******************************************************!*\
  !*** ./resourses/enemies/former_human/human-back.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/human-back.7a035d62c16e2393a46463ec6877318d.png");

/***/ }),

/***/ "./resourses/enemies/former_human/human-forward.png":
/*!**********************************************************!*\
  !*** ./resourses/enemies/former_human/human-forward.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/human-forward.4c3d7bd64ba43b601f99b048e297f3d4.png");

/***/ }),

/***/ "./resourses/enemies/former_human/human-left.png":
/*!*******************************************************!*\
  !*** ./resourses/enemies/former_human/human-left.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/human-left.7d7d008b95dc6d044599c3f00e9ab8e7.png");

/***/ }),

/***/ "./resourses/enemies/former_human/human-right.png":
/*!********************************************************!*\
  !*** ./resourses/enemies/former_human/human-right.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/human-right.73052b7f6393e483f7778da160fa6fb2.png");

/***/ }),

/***/ "./resourses/enemies/imp/imp-back.png":
/*!********************************************!*\
  !*** ./resourses/enemies/imp/imp-back.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/imp-back.cc9d5ac93bfce41fb2bcca0aa789c241.png");

/***/ }),

/***/ "./resourses/enemies/imp/imp-forward.png":
/*!***********************************************!*\
  !*** ./resourses/enemies/imp/imp-forward.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/imp-forward.b801c38af81953e1ec95e1f34809424a.png");

/***/ }),

/***/ "./resourses/enemies/imp/imp-left.png":
/*!********************************************!*\
  !*** ./resourses/enemies/imp/imp-left.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/imp-left.6a46701157ed6cbdea61d0fc9e89a9f2.png");

/***/ }),

/***/ "./resourses/enemies/imp/imp-right.png":
/*!*********************************************!*\
  !*** ./resourses/enemies/imp/imp-right.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/imp-right.e684b169b56d707c29af49d36ef1b673.png");

/***/ }),

/***/ "./resourses/enemies/lost_soul/soul-back.png":
/*!***************************************************!*\
  !*** ./resourses/enemies/lost_soul/soul-back.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/soul-back.473cbf10732435086e83edc8d2717ab3.png");

/***/ }),

/***/ "./resourses/enemies/lost_soul/soul-forward.png":
/*!******************************************************!*\
  !*** ./resourses/enemies/lost_soul/soul-forward.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/soul-forward.05c5b00532e628640d2abe7e72e38b4b.png");

/***/ }),

/***/ "./resourses/enemies/lost_soul/soul-left.png":
/*!***************************************************!*\
  !*** ./resourses/enemies/lost_soul/soul-left.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/soul-left.e7fb6195be5ac4fa7e4c8d93439bde07.png");

/***/ }),

/***/ "./resourses/enemies/lost_soul/soul-right.png":
/*!****************************************************!*\
  !*** ./resourses/enemies/lost_soul/soul-right.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/soul-right.7da127102fe5e141d72ba5b7a9b85edc.png");

/***/ }),

/***/ "./resourses/game_field_bg.jpg":
/*!*************************************!*\
  !*** ./resourses/game_field_bg.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/game_field_bg.1f2d91e4d341f7225591b5edf083d597.jpg");

/***/ }),

/***/ "./resourses/heart.svg":
/*!*****************************!*\
  !*** ./resourses/heart.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/heart.c759f248fb0a2e7a7691afac2085c1f5.svg");

/***/ }),

/***/ "./resourses/sound.mp3":
/*!*****************************!*\
  !*** ./resourses/sound.mp3 ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/sound.342b38449461537e44d5519be011c5da.mp3");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\OpenServer\OpenServer\domains\game_vue\src\js\app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.2c55daaa6721cb9b383c.js.map
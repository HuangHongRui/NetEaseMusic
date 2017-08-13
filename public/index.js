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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getJSON = function getJSON(url) {
  var promise = new Promise(function (resolve, reject) {
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });
  return promise;
};

getJSON("../src/js/lib/lyric.json").then(function (json) {
  var lyric = json.lyric;

  var array = lyric.split('\n');
  var regex = /^\[(.+)\](.*)/;
  array = array.map(function (string, index) {
    var matches = string.match(regex);
    // console.log(matches)
    if (!matches) return;
    return { time: matches[1], words: matches[2] };
  });
  // console.log(array)
  var lyricNode = document.querySelector('.lines');
  array.map(function (object) {
    // console.log(object)
    if (!object) return;
    var lyricP = document.createElement('p');
    var lyricText = document.createTextNode(object.words);
    lyricP.setAttribute('data-time', object.time);
    lyricP.appendChild(lyricText);
    lyricNode.appendChild(lyricP);
  });
  // console.log(lyricNode)
  var audio = document.createElement('audio');
  var discNode = document.querySelector('.disc');
  audio.src = "http://dl.stream.qqmusic.qq.com/C400002wJJpU0kLcQZ.m4a?fromtag=38&vkey=FFA46BADF3B7E98751F531B2F563EBD8AF08A11069692445CFA4E015B2E6587A3F1CCD8019B9DF1B217C3A64570BC3C3C217B98944E4EB2E&guid=8708071248";
  audio.oncanplay = function () {
    audio.play();
    discNode.className += " playing";
  };

  var play = document.querySelector('.play');
  play.onclick = function (e) {
    audio.play(e);
    discNode.className += " playing";
    e.stopPropagation();
  };
  var pause = document.querySelector('.pause');
  pause.onclick = function (e) {
    audio.pause();
    discNode.classList.remove('playing');
    e.stopPropagation();
  };
}, function (error) {
  console.error('出错了', error);
});

// let xhr = new XMLHttpRequest()
// xhr.open("get","../src/js/lib/lyric.json")
// xhr.onreadystatechange = function() {
// 	if (xhr.readyState == 4) {
// 		if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
// 			// console.log(xhr.responseText)
// 			lyric
// 		}
// 	}
// }

// xhr.send()

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
__webpack_require__(0);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
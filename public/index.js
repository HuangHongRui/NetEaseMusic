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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (window) {
  var svgSprite = "<svg>" + "" + '<symbol id="icon-github" viewBox="0 0 1025 1024">' + "" + '<path d="M0.064 556.416c0 46.4 4.352 88.384 13.024 125.92s20.704 70.176 36.064 97.888c15.36 27.712 34.88 52.064 58.592 73.12s49.408 38.24 77.12 51.584c27.712 13.344 59.328 24.192 94.88 32.544s71.84 14.176 108.896 17.536c37.056 3.328 77.792 4.992 122.176 4.992 44.736 0 85.632-1.664 122.688-4.992s73.44-9.184 109.152-17.536c35.712-8.352 67.52-19.2 95.392-32.544s53.76-30.528 77.6-51.584c23.872-21.024 43.552-45.408 59.072-73.12s27.616-60.352 36.288-97.888c8.672-37.568 13.024-79.552 13.024-125.92 0-82.784-27.712-154.4-83.104-214.816 3.008-8 5.76-17.12 8.256-27.296s4.832-24.704 7.008-43.552c2.176-18.848 1.344-40.64-2.496-65.344s-10.944-49.92-21.28-75.616l-7.52-1.504c-5.344-0.992-14.112-0.736-26.304 0.768s-26.368 4.512-42.56 9.024c-16.192 4.512-37.056 13.184-62.592 26.048s-52.48 28.96-80.864 48.32c-48.736-13.344-115.68-20.032-200.8-20.032-84.8 0-151.552 6.688-200.288 20.032-28.384-19.36-55.488-35.456-81.376-48.32s-46.496-21.536-61.856-26.048c-15.36-4.512-29.696-7.424-43.072-8.768s-21.792-1.76-25.28-1.248c-3.52 0.512-6.272 1.088-8.256 1.76-10.336 25.696-17.44 50.912-21.28 75.616s-4.672 46.496-2.496 65.344c2.176 18.848 4.512 33.376 7.008 43.552s5.248 19.264 8.256 27.296c-55.424 60.416-83.136 132.032-83.136 214.816zM125.76 682.08c0-48.064 21.856-92.128 65.6-132.192 13.024-12.032 28.192-21.12 45.568-27.296s36.96-9.664 58.848-10.528c21.856-0.832 42.816-0.672 62.848 0.512s44.736 2.752 74.112 4.768c29.376 2.016 54.752 3.008 76.128 3.008s46.72-0.992 76.096-3.008c29.376-2.016 54.08-3.584 74.112-4.768s40.96-1.344 62.848-0.512c21.856 0.832 41.472 4.352 58.848 10.528s32.544 15.264 45.568 27.296c43.744 39.392 65.6 83.456 65.6 132.192 0 28.704-3.584 54.176-10.784 76.352s-16.352 40.8-27.552 55.84c-11.168 15.008-26.688 27.776-46.56 38.304s-39.232 18.624-58.08 24.288c-18.848 5.664-43.072 10.112-72.608 13.28s-55.904 5.088-79.104 5.76c-23.2 0.672-52.672 0.992-88.384 0.992s-65.184-0.32-88.384-0.992c-23.2-0.672-49.568-2.592-79.104-5.76s-53.76-7.584-72.608-13.28c-18.848-5.664-38.208-13.76-58.08-24.288s-35.392-23.296-46.56-38.304c-11.168-15.008-20.352-33.632-27.552-55.84s-10.752-47.648-10.752-76.352zM640.064 672c0-53.024 28.64-96 64-96s64 42.976 64 96c0 53.024-28.64 96-64 96s-64-42.976-64-96zM256.064 672c0-53.024 28.64-96 64-96s64 42.976 64 96c0 53.024-28.64 96-64 96s-64-42.976-64-96z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-sq" viewBox="0 0 1024 1024">' + "" + '<path d="M943.813726 173.044148 80.2006 173.044148c-41.668005 0-75.419713 33.56035-75.419713 74.960249l0 526.381545c0 41.422412 33.767058 74.960249 75.419713 74.960249l863.613126 0c41.666982 0 75.419713-33.56035 75.419713-74.960249L1019.23344 248.004397C1019.234463 206.581985 985.467405 173.044148 943.813726 173.044148zM981.661729 774.385942c0 20.603247-16.885576 37.387515-37.848003 37.387515L80.2006 811.773458c-20.963451 0-37.848003-16.778128-37.848003-37.387515L42.352597 248.004397c0-20.603247 16.885576-37.387515 37.848003-37.387515l863.613126 0c20.963451 0 37.848003 16.777105 37.848003 37.387515L981.661729 774.385942z"  ></path>' + "" + '<path d="M868.944552 513.208525c0-55.125505-14.971993-100.211353-44.917002-135.260613-31.306007-36.410258-74.350358-54.614875-129.135102-54.614875-54.784744 0-97.999988 18.374486-129.645732 55.125505-29.945009 34.368762-44.917002 79.284741-44.917002 134.749984 0 55.125505 14.971993 99.871615 44.917002 134.239354 31.645744 36.410258 74.691119 54.614875 129.135102 54.614875 38.451754 0 71.628364-9.358135 99.530854-28.073382 11.228739 14.971993 25.180496 34.367739 41.854247 58.187237l27.562752-23.989367c-16.33299-23.479761-30.284747-42.704614-41.854247-57.677631 0.340761-0.680499 1.191128-1.701758 2.552126-3.062755C853.972559 612.399641 868.944552 567.653531 868.944552 513.208525zM796.46582 618.86489c-18.034748-22.11774-38.791491-45.76737-62.271252-70.947865l-25.010627 23.989367c19.736507 20.756743 40.152489 44.576241 61.249993 71.458495-20.417005 14.291494-45.76737 21.437242-76.052117 21.437242-42.195008 0-75.030857-14.291494-98.510618-42.875506-22.458501-27.562752-33.68724-63.802118-33.68724-108.71912 0-45.25674 11.228739-81.666998 33.68724-109.228727 23.819498-28.92375 56.82624-43.385113 99.021248-43.385113 41.854247 0 74.520227 13.950733 97.999988 41.854247 22.798239 27.90249 34.19787 64.822354 34.19787 110.760616C827.090305 556.423769 816.882825 591.642898 796.46582 618.86489z"  ></path>' + "" + '<path d="M437.131849 522.395768c-15.312754-9.187243-46.958498-20.926612-94.937233-35.219129-35.729759-10.208503-58.017368-17.86488-66.864874-22.969131-20.756743-11.229762-31.135114-26.030863-31.135114-44.406372 0-20.756743 8.676613-36.239366 26.030863-46.447868 14.632255-8.847505 35.728736-13.271258 63.291488-13.271258 29.943986 0 52.913117 6.465249 68.906369 19.395746 15.993253 12.930497 26.201755 32.496112 30.625508 58.697867l41.343617 0c-3.743254-38.451754-17.693987-67.37448-41.854247-86.771249-23.139-18.715247-55.465243-28.073382-96.978728-28.073382-37.771255 0-68.735477 8.167007-92.895737 24.499997-26.882254 17.35425-40.323381 42.024116-40.323381 74.010621 0 30.625508 13.951757 54.104245 41.854247 70.437236 12.930497 6.80601 40.832987 16.673751 83.708494 29.604248 42.195008 12.249999 67.88511 21.097504 77.073376 26.541493 24.160259 12.930497 36.239366 30.795377 36.239366 53.593616 0 19.395746-9.187243 34.7085-27.562752 45.937239s-42.534745 16.84362-72.478731 16.84362c-31.986505 0-56.656371-6.804986-74.010621-20.417005-18.375509-14.971993-29.434379-38.280862-33.177634-69.927629l-41.343617 0c3.062755 44.576241 18.885116 77.923744 47.469128 100.041484 24.499997 18.375509 58.187237 27.562752 101.062743 27.562752s77.243245-9.017374 103.104239-27.052123c25.521257-18.375509 38.280862-43.554982 38.280862-75.541487C482.559481 566.461379 467.416596 540.771277 437.131849 522.395768z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-pause" viewBox="0 0 1024 1024">' + "" + '<path d="M691.2 153.6c61.44 0 92.16 21.844992 92.16 65.536 0 0 0 583.68 0 583.68 0 45.056-30.72 67.584-92.16 67.584-61.44 0-92.16-22.528-92.16-67.584 0 0 0-583.68 0-583.68 0-43.691008 30.72-65.536 92.16-65.536 0 0 0 0 0 0m-358.4 0c61.44 0 92.16 21.844992 92.16 65.536 0 0 0 583.68 0 583.68 0 45.056-30.72 67.584-92.16 67.584-61.44 0-92.16-22.528-92.16-67.584 0 0 0-583.68 0-583.68 0-43.691008 30.72-65.536 92.16-65.536 0 0 0 0 0 0"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-cute" viewBox="0 0 1024 1024">' + "" + '<path d="M512.009 512.007m-493.709036 0a493.709036 493.709036 0 1 0 987.418072 0 493.709036 493.709036 0 1 0-987.418072 0Z" fill="#F7B239" ></path>' + "" + '<path d="M252.613507 771.386493c-177.601653-177.603653-191.595626-456.851108-41.995918-650.480729a498.125027 498.125027 0 0 0-47.715907 41.997918c-192.801623 192.801623-192.801623 505.395013 0 698.196636s505.395013 192.801623 698.196636 0a498.679026 498.679026 0 0 0 41.997918-47.715907c-193.631622 149.597708-472.879076 135.603735-650.482729-41.997918z" fill="#E09B2D" ></path>' + "" + '<path d="M944.700155 530.298964a18.299964 18.299964 0 0 1-18.299964-18.299964c0-99.953805-36.233929-196.559616-102.023801-272.011469-65.161873-74.733854-154.665698-123.745758-252.017508-138.00973-10.00198-1.465997-16.919967-10.759979-15.45397-20.75796s10.785979-16.909967 20.75796-15.451969c105.985793 15.52997 203.399603 68.859866 274.297464 150.169706 71.60586 82.12184 111.037783 187.263634 111.037783 296.063422a18.293964 18.293964 0 0 1-18.297964 18.297964z" fill="#FFFFFF" ></path>' + "" + '<path d="M201.143607 675.89468m-48.237906 0a48.237906 48.237906 0 1 0 96.475812 0 48.237906 48.237906 0 1 0-96.475812 0Z" fill="#F95428" ></path>' + "" + '<path d="M822.848393 675.89468m-48.237906 0a48.237906 48.237906 0 1 0 96.475812 0 48.237906 48.237906 0 1 0-96.475812 0Z" fill="#F95428" ></path>' + "" + '<path d="M512.009 79.295845m-18.299964 0a18.299964 18.299964 0 1 0 36.599928 0 18.299964 18.299964 0 1 0-36.599928 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M511.999 0C229.683551 0 0.002 229.681551 0.002 512.001s229.681551 511.999 511.997 511.999c282.317449 0 512.001-229.681551 512.001-512.001S794.318449 0 511.999 0z m0 987.400071c-262.135488 0-475.399071-213.261583-475.399071-475.399071S249.863512 36.597929 511.999 36.597929c262.137488 0 475.403071 213.263583 475.403071 475.403071S774.136488 987.400071 511.999 987.400071z" fill="#333333" ></path>' + "" + '<path d="M726.710581 414.90519c-59.979883 0-108.773788 48.797905-108.773788 108.773787s48.795905 108.773788 108.773788 108.773788 108.773788-48.797905 108.773787-108.773788-48.793905-108.773788-108.773787-108.773787zM297.293419 414.90519c-59.979883 0-108.777788 48.797905-108.777787 108.773787s48.797905 108.773788 108.777787 108.773788 108.773788-48.797905 108.773788-108.773788-48.797905-108.773788-108.773788-108.773787zM625.820778 637.944754a18.299964 18.299964 0 0 0-18.299965 18.299964c0 21.289958-17.323966 38.613925-38.611924 38.613925s-38.611925-17.323966-38.611925-38.613925a18.299964 18.299964 0 0 0-36.599928 0c0 21.289958-17.323966 38.613925-38.613925 38.613925s-38.613925-17.323966-38.613924-38.613925a18.299964 18.299964 0 0 0-36.599929 0c0 41.473919 33.737934 75.211853 75.211853 75.211853 22.715956 0 43.109916-10.11998 56.911889-26.091949 13.801973 15.971969 34.197933 26.091949 56.909889 26.091949 41.469919 0 75.209853-33.737934 75.209853-75.211853 0.008-10.10798-8.181984-18.299964-18.291964-18.299964z" fill="#333333" ></path>' + "" + '<path d="M364.811287 546.824932m-18.299964 0a18.299964 18.299964 0 1 0 36.599929 0 18.299964 18.299964 0 1 0-36.599929 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M801.548434 546.824932m-18.299964 0a18.299964 18.299964 0 1 0 36.599929 0 18.299964 18.299964 0 1 0-36.599929 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M254.187504 580.982865m-18.299965 0a18.299964 18.299964 0 1 0 36.599929 0 18.299964 18.299964 0 1 0-36.599929 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M690.924651 580.982865m-18.299965 0a18.299964 18.299964 0 1 0 36.599929 0 18.299964 18.299964 0 1 0-36.599929 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M756.826522 488.877045m-38.649925 0a38.649925 38.649925 0 1 0 77.299849 0 38.649925 38.649925 0 1 0-77.299849 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M327.407361 488.877045m-38.649925 0a38.649925 38.649925 0 1 0 77.299849 0 38.649925 38.649925 0 1 0-77.299849 0Z" fill="#FFFFFF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-play-circle" viewBox="0 0 1024 1024">' + "" + '<path d="M512 0C229.376 0 0 229.376 0 512S229.376 1024 512 1024c282.616633 0 512-229.376 512-512S794.616633 0 512 0z m0 984.528115c-247.292317 0-472.528115-225.228432-472.528115-472.528115S264.707683 39.471885 512 39.471885s472.528115 225.228432 472.528115 472.528115-225.235799 472.528115-472.528115 472.528115z"  ></path>' + "" + '<path d="M408.524432 311.185496l302.757755 201.838504-302.757755 201.838504z"  ></path>' + "" + '<path d="M408.524432 725.912863a11.065094 11.065094 0 0 1-11.05036-11.050359V311.185496a11.05036 11.05036 0 0 1 17.179626-9.193899L717.411453 503.822734a11.057727 11.057727 0 0 1 0 18.387798L414.653698 724.056403a11.065094 11.065094 0 0 1-6.129266 1.85646z m11.050359-394.077928v362.37813l271.787281-181.196432-271.787281-181.181698z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-play" viewBox="0 0 1024 1024">' + "" + '<path d="M213.333333 128l597.333334 384-597.333334 384V128z"  ></path>' + "" + "</symbol>" + "" + "</svg>";var script = function () {
    var scripts = document.getElementsByTagName("script");return scripts[scripts.length - 1];
  }();var shouldInjectCss = script.getAttribute("data-injectcss");var ready = function ready(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function loadFn() {
          document.removeEventListener("DOMContentLoaded", loadFn, false);fn();
        };document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }function IEContentLoaded(w, fn) {
      var d = w.document,
          done = false,
          init = function init() {
        if (!done) {
          done = true;fn();
        }
      };var polling = function polling() {
        try {
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);return;
        }init();
      };polling();d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;init();
        }
      };
    }
  };var before = function before(el, target) {
    target.parentNode.insertBefore(el, target);
  };var prepend = function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };function appendSvg() {
    var div, svg;div = document.createElement("div");div.innerHTML = svgSprite;svgSprite = null;svg = div.getElementsByTagName("svg")[0];if (svg) {
      svg.setAttribute("aria-hidden", "true");svg.style.position = "absolute";svg.style.width = 0;svg.style.height = 0;svg.style.overflow = "hidden";prepend(svg, document.body);
    }
  }if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }ready(appendSvg);
})(window);

/***/ }),
/* 1 */
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
  var coverAnimation = document.querySelector('.cover');
  audio.src = "//ounk79p86.bkt.clouddn.com/C400002wJJpU0kLcQZ.m4a";
  audio.oncanplay = function () {
    audio.play();
    discNode.className += " playing";
  };

  var play = document.querySelector('.icon-play');
  play.onclick = function () {
    console.log("点到我了");
    audio.play();
    discNode.className += " playing";
  };
  var pause = document.querySelector('.icon-pause');
  pause.onclick = function () {
    console.log("点到我了");
    audio.pause();
    discNode.classList.remove('playing');
  };
  //*********
  var playbtn = document.querySelector('.play');
  playbtn.onclick = function (e) {
    audio.play();
    discNode.className += " playing";
    e.stopPropagation();
  };
  var pausebtn = document.querySelector('.pause');
  pausebtn.onclick = function (e) {
    audio.pause();
    discNode.classList.remove('playing');
    e.stopPropagation();
  };
  //*********
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
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);
__webpack_require__(2);
__webpack_require__(0);
__webpack_require__(1);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
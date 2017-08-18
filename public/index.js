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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (window) {
  var svgSprite = "<svg>" + "" + '<symbol id="icon-github" viewBox="0 0 1025 1024">' + "" + '<path d="M0.064 556.416c0 46.4 4.352 88.384 13.024 125.92s20.704 70.176 36.064 97.888c15.36 27.712 34.88 52.064 58.592 73.12s49.408 38.24 77.12 51.584c27.712 13.344 59.328 24.192 94.88 32.544s71.84 14.176 108.896 17.536c37.056 3.328 77.792 4.992 122.176 4.992 44.736 0 85.632-1.664 122.688-4.992s73.44-9.184 109.152-17.536c35.712-8.352 67.52-19.2 95.392-32.544s53.76-30.528 77.6-51.584c23.872-21.024 43.552-45.408 59.072-73.12s27.616-60.352 36.288-97.888c8.672-37.568 13.024-79.552 13.024-125.92 0-82.784-27.712-154.4-83.104-214.816 3.008-8 5.76-17.12 8.256-27.296s4.832-24.704 7.008-43.552c2.176-18.848 1.344-40.64-2.496-65.344s-10.944-49.92-21.28-75.616l-7.52-1.504c-5.344-0.992-14.112-0.736-26.304 0.768s-26.368 4.512-42.56 9.024c-16.192 4.512-37.056 13.184-62.592 26.048s-52.48 28.96-80.864 48.32c-48.736-13.344-115.68-20.032-200.8-20.032-84.8 0-151.552 6.688-200.288 20.032-28.384-19.36-55.488-35.456-81.376-48.32s-46.496-21.536-61.856-26.048c-15.36-4.512-29.696-7.424-43.072-8.768s-21.792-1.76-25.28-1.248c-3.52 0.512-6.272 1.088-8.256 1.76-10.336 25.696-17.44 50.912-21.28 75.616s-4.672 46.496-2.496 65.344c2.176 18.848 4.512 33.376 7.008 43.552s5.248 19.264 8.256 27.296c-55.424 60.416-83.136 132.032-83.136 214.816zM125.76 682.08c0-48.064 21.856-92.128 65.6-132.192 13.024-12.032 28.192-21.12 45.568-27.296s36.96-9.664 58.848-10.528c21.856-0.832 42.816-0.672 62.848 0.512s44.736 2.752 74.112 4.768c29.376 2.016 54.752 3.008 76.128 3.008s46.72-0.992 76.096-3.008c29.376-2.016 54.08-3.584 74.112-4.768s40.96-1.344 62.848-0.512c21.856 0.832 41.472 4.352 58.848 10.528s32.544 15.264 45.568 27.296c43.744 39.392 65.6 83.456 65.6 132.192 0 28.704-3.584 54.176-10.784 76.352s-16.352 40.8-27.552 55.84c-11.168 15.008-26.688 27.776-46.56 38.304s-39.232 18.624-58.08 24.288c-18.848 5.664-43.072 10.112-72.608 13.28s-55.904 5.088-79.104 5.76c-23.2 0.672-52.672 0.992-88.384 0.992s-65.184-0.32-88.384-0.992c-23.2-0.672-49.568-2.592-79.104-5.76s-53.76-7.584-72.608-13.28c-18.848-5.664-38.208-13.76-58.08-24.288s-35.392-23.296-46.56-38.304c-11.168-15.008-20.352-33.632-27.552-55.84s-10.752-47.648-10.752-76.352zM640.064 672c0-53.024 28.64-96 64-96s64 42.976 64 96c0 53.024-28.64 96-64 96s-64-42.976-64-96zM256.064 672c0-53.024 28.64-96 64-96s64 42.976 64 96c0 53.024-28.64 96-64 96s-64-42.976-64-96z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-sq" viewBox="0 0 1024 1024">' + "" + '<path d="M943.813726 173.044148 80.2006 173.044148c-41.668005 0-75.419713 33.56035-75.419713 74.960249l0 526.381545c0 41.422412 33.767058 74.960249 75.419713 74.960249l863.613126 0c41.666982 0 75.419713-33.56035 75.419713-74.960249L1019.23344 248.004397C1019.234463 206.581985 985.467405 173.044148 943.813726 173.044148zM981.661729 774.385942c0 20.603247-16.885576 37.387515-37.848003 37.387515L80.2006 811.773458c-20.963451 0-37.848003-16.778128-37.848003-37.387515L42.352597 248.004397c0-20.603247 16.885576-37.387515 37.848003-37.387515l863.613126 0c20.963451 0 37.848003 16.777105 37.848003 37.387515L981.661729 774.385942z"  ></path>' + "" + '<path d="M868.944552 513.208525c0-55.125505-14.971993-100.211353-44.917002-135.260613-31.306007-36.410258-74.350358-54.614875-129.135102-54.614875-54.784744 0-97.999988 18.374486-129.645732 55.125505-29.945009 34.368762-44.917002 79.284741-44.917002 134.749984 0 55.125505 14.971993 99.871615 44.917002 134.239354 31.645744 36.410258 74.691119 54.614875 129.135102 54.614875 38.451754 0 71.628364-9.358135 99.530854-28.073382 11.228739 14.971993 25.180496 34.367739 41.854247 58.187237l27.562752-23.989367c-16.33299-23.479761-30.284747-42.704614-41.854247-57.677631 0.340761-0.680499 1.191128-1.701758 2.552126-3.062755C853.972559 612.399641 868.944552 567.653531 868.944552 513.208525zM796.46582 618.86489c-18.034748-22.11774-38.791491-45.76737-62.271252-70.947865l-25.010627 23.989367c19.736507 20.756743 40.152489 44.576241 61.249993 71.458495-20.417005 14.291494-45.76737 21.437242-76.052117 21.437242-42.195008 0-75.030857-14.291494-98.510618-42.875506-22.458501-27.562752-33.68724-63.802118-33.68724-108.71912 0-45.25674 11.228739-81.666998 33.68724-109.228727 23.819498-28.92375 56.82624-43.385113 99.021248-43.385113 41.854247 0 74.520227 13.950733 97.999988 41.854247 22.798239 27.90249 34.19787 64.822354 34.19787 110.760616C827.090305 556.423769 816.882825 591.642898 796.46582 618.86489z"  ></path>' + "" + '<path d="M437.131849 522.395768c-15.312754-9.187243-46.958498-20.926612-94.937233-35.219129-35.729759-10.208503-58.017368-17.86488-66.864874-22.969131-20.756743-11.229762-31.135114-26.030863-31.135114-44.406372 0-20.756743 8.676613-36.239366 26.030863-46.447868 14.632255-8.847505 35.728736-13.271258 63.291488-13.271258 29.943986 0 52.913117 6.465249 68.906369 19.395746 15.993253 12.930497 26.201755 32.496112 30.625508 58.697867l41.343617 0c-3.743254-38.451754-17.693987-67.37448-41.854247-86.771249-23.139-18.715247-55.465243-28.073382-96.978728-28.073382-37.771255 0-68.735477 8.167007-92.895737 24.499997-26.882254 17.35425-40.323381 42.024116-40.323381 74.010621 0 30.625508 13.951757 54.104245 41.854247 70.437236 12.930497 6.80601 40.832987 16.673751 83.708494 29.604248 42.195008 12.249999 67.88511 21.097504 77.073376 26.541493 24.160259 12.930497 36.239366 30.795377 36.239366 53.593616 0 19.395746-9.187243 34.7085-27.562752 45.937239s-42.534745 16.84362-72.478731 16.84362c-31.986505 0-56.656371-6.804986-74.010621-20.417005-18.375509-14.971993-29.434379-38.280862-33.177634-69.927629l-41.343617 0c3.062755 44.576241 18.885116 77.923744 47.469128 100.041484 24.499997 18.375509 58.187237 27.562752 101.062743 27.562752s77.243245-9.017374 103.104239-27.052123c25.521257-18.375509 38.280862-43.554982 38.280862-75.541487C482.559481 566.461379 467.416596 540.771277 437.131849 522.395768z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-listen" viewBox="0 0 1024 1024">' + "" + '<path d="M65.290005 716.624401c0-28.998451 3.834328-54.216809 11.565407-75.600839 7.731078-21.378913 21.663392-41.522696 41.803082-60.47842l0 272.27108c-20.759813-18.392906-34.865065-38.252209-42.255383-59.636239C68.957535 771.801071 65.290005 746.353492 65.290005 716.624401L65.290005 716.624401 65.290005 716.624401zM899.073756 580.546166c17.771759 13.651928 32.156374 32.497135 43.158962 56.531528 11.001565 24.031323 16.476253 50.54928 16.476253 79.547731 0 29.729092-4.291746 55.120388-12.922311 76.163657-8.630564 21.044292-24.203238 41.126676-46.713928 60.028165L899.072733 580.546166 899.073756 580.546166 899.073756 580.546166zM793.179984 540.433586c11.286044 0 22.511713 4.51585 33.848922 13.429871 11.229762 8.797363 16.928554 21.267373 16.928554 37.347606l0 230.40353c0 7.166213-1.639337 13.881149-4.910846 20.028149-3.326768 6.261611-7.277754 11.906168-12.017708 16.984836-4.738931 4.963035-10.265808 8.797363-16.47216 11.565407-6.207375 2.651386-12.018731 3.946892-17.376763 3.946892l-62.282508 0c-15.405875 0-28.378327-4.738931-38.759769-14.216793-10.438747-9.589402-15.568581-22.283516-15.568581-38.364773L676.569126 591.211063c0-16.080234 5.810333-28.550243 17.375739-37.347606 11.56643-8.91402 23.863501-13.429871 36.95261-13.429871L793.179984 540.433586 793.179984 540.433586 793.179984 540.433586zM284.187481 540.433586c17.207917 0 31.197536 4.175089 41.803082 12.470009 10.721179 8.350179 16.024975 21.378913 16.024975 39.207977l0 224.255507c0 17.717524-4.572132 31.766494-13.764492 41.86448-9.198499 10.041704-21.216207 15.120372-36.053124 15.120372l-64.934918 0c-17.772782 0-31.029714-5.41943-39.602973-16.081257-8.578376-10.605545-12.922311-23.693632-12.922311-39.095413L174.73772 592.111572c0-17.829064 5.303796-30.857798 16.020882-39.207977 10.665921-8.238638 23.471574-12.470009 38.252209-12.470009L284.187481 540.433586 284.187481 540.433586 284.187481 540.433586zM510.247076 149.860123c46.827515 0 91.060949 8.010441 132.580574 24.035416 41.522696 16.020882 77.911464 38.699394 109.056811 68.093864 31.141254 29.394471 55.568596 64.541969 73.452919 105.441471 17.7165 40.959877 26.685779 86.037539 26.685779 135.288243l-58.730613 0c-14.836917 0-28.206412 0.115634-40.056298 0.451278-11.844769 0.283456-17.771759 0.115634-17.771759-0.451278 0-36.779671-6.202259-69.333088-18.671245-97.487312-12.470009-28.206412-28.942169-51.732222-49.421596-70.744227-20.534685-19.012006-44.285622-33.229822-71.309092-42.762943-27.02654-9.538237-55.571666-14.216793-85.814458-14.216793-29.67281 0-57.82294 6.202259-84.566024 18.671245-26.685779 12.470009-50.269917 29.226648-70.749344 50.269917-20.479427 21.044292-36.895305 45.073568-49.361221 72.101131-12.468986 27.021423-18.676361 55.003731-18.676361 84.113723L169.436994 482.663858c0-49.249681 8.912997-94.328365 26.685779-135.288243 17.767666-40.958854 42.142819-76.103282 72.945359-105.441471 30.80561-29.338189 67.025533-52.072983 108.544135-68.093864C419.134962 157.815305 463.36635 149.860123 510.247076 149.860123L510.247076 149.860123 510.247076 149.860123zM510.247076 149.860123"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-pause" viewBox="0 0 1024 1024">' + "" + '<path d="M691.2 153.6c61.44 0 92.16 21.844992 92.16 65.536 0 0 0 583.68 0 583.68 0 45.056-30.72 67.584-92.16 67.584-61.44 0-92.16-22.528-92.16-67.584 0 0 0-583.68 0-583.68 0-43.691008 30.72-65.536 92.16-65.536 0 0 0 0 0 0m-358.4 0c61.44 0 92.16 21.844992 92.16 65.536 0 0 0 583.68 0 583.68 0 45.056-30.72 67.584-92.16 67.584-61.44 0-92.16-22.528-92.16-67.584 0 0 0-583.68 0-583.68 0-43.691008 30.72-65.536 92.16-65.536 0 0 0 0 0 0"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-cute" viewBox="0 0 1024 1024">' + "" + '<path d="M512.009 512.007m-493.709036 0a493.709036 493.709036 0 1 0 987.418072 0 493.709036 493.709036 0 1 0-987.418072 0Z" fill="#F7B239" ></path>' + "" + '<path d="M252.613507 771.386493c-177.601653-177.603653-191.595626-456.851108-41.995918-650.480729a498.125027 498.125027 0 0 0-47.715907 41.997918c-192.801623 192.801623-192.801623 505.395013 0 698.196636s505.395013 192.801623 698.196636 0a498.679026 498.679026 0 0 0 41.997918-47.715907c-193.631622 149.597708-472.879076 135.603735-650.482729-41.997918z" fill="#E09B2D" ></path>' + "" + '<path d="M944.700155 530.298964a18.299964 18.299964 0 0 1-18.299964-18.299964c0-99.953805-36.233929-196.559616-102.023801-272.011469-65.161873-74.733854-154.665698-123.745758-252.017508-138.00973-10.00198-1.465997-16.919967-10.759979-15.45397-20.75796s10.785979-16.909967 20.75796-15.451969c105.985793 15.52997 203.399603 68.859866 274.297464 150.169706 71.60586 82.12184 111.037783 187.263634 111.037783 296.063422a18.293964 18.293964 0 0 1-18.297964 18.297964z" fill="#FFFFFF" ></path>' + "" + '<path d="M201.143607 675.89468m-48.237906 0a48.237906 48.237906 0 1 0 96.475812 0 48.237906 48.237906 0 1 0-96.475812 0Z" fill="#F95428" ></path>' + "" + '<path d="M822.848393 675.89468m-48.237906 0a48.237906 48.237906 0 1 0 96.475812 0 48.237906 48.237906 0 1 0-96.475812 0Z" fill="#F95428" ></path>' + "" + '<path d="M512.009 79.295845m-18.299964 0a18.299964 18.299964 0 1 0 36.599928 0 18.299964 18.299964 0 1 0-36.599928 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M511.999 0C229.683551 0 0.002 229.681551 0.002 512.001s229.681551 511.999 511.997 511.999c282.317449 0 512.001-229.681551 512.001-512.001S794.318449 0 511.999 0z m0 987.400071c-262.135488 0-475.399071-213.261583-475.399071-475.399071S249.863512 36.597929 511.999 36.597929c262.137488 0 475.403071 213.263583 475.403071 475.403071S774.136488 987.400071 511.999 987.400071z" fill="#333333" ></path>' + "" + '<path d="M726.710581 414.90519c-59.979883 0-108.773788 48.797905-108.773788 108.773787s48.795905 108.773788 108.773788 108.773788 108.773788-48.797905 108.773787-108.773788-48.793905-108.773788-108.773787-108.773787zM297.293419 414.90519c-59.979883 0-108.777788 48.797905-108.777787 108.773787s48.797905 108.773788 108.777787 108.773788 108.773788-48.797905 108.773788-108.773788-48.797905-108.773788-108.773788-108.773787zM625.820778 637.944754a18.299964 18.299964 0 0 0-18.299965 18.299964c0 21.289958-17.323966 38.613925-38.611924 38.613925s-38.611925-17.323966-38.611925-38.613925a18.299964 18.299964 0 0 0-36.599928 0c0 21.289958-17.323966 38.613925-38.613925 38.613925s-38.613925-17.323966-38.613924-38.613925a18.299964 18.299964 0 0 0-36.599929 0c0 41.473919 33.737934 75.211853 75.211853 75.211853 22.715956 0 43.109916-10.11998 56.911889-26.091949 13.801973 15.971969 34.197933 26.091949 56.909889 26.091949 41.469919 0 75.209853-33.737934 75.209853-75.211853 0.008-10.10798-8.181984-18.299964-18.291964-18.299964z" fill="#333333" ></path>' + "" + '<path d="M364.811287 546.824932m-18.299964 0a18.299964 18.299964 0 1 0 36.599929 0 18.299964 18.299964 0 1 0-36.599929 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M801.548434 546.824932m-18.299964 0a18.299964 18.299964 0 1 0 36.599929 0 18.299964 18.299964 0 1 0-36.599929 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M254.187504 580.982865m-18.299965 0a18.299964 18.299964 0 1 0 36.599929 0 18.299964 18.299964 0 1 0-36.599929 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M690.924651 580.982865m-18.299965 0a18.299964 18.299964 0 1 0 36.599929 0 18.299964 18.299964 0 1 0-36.599929 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M756.826522 488.877045m-38.649925 0a38.649925 38.649925 0 1 0 77.299849 0 38.649925 38.649925 0 1 0-77.299849 0Z" fill="#FFFFFF" ></path>' + "" + '<path d="M327.407361 488.877045m-38.649925 0a38.649925 38.649925 0 1 0 77.299849 0 38.649925 38.649925 0 1 0-77.299849 0Z" fill="#FFFFFF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-play-circle" viewBox="0 0 1024 1024">' + "" + '<path d="M512 0C229.376 0 0 229.376 0 512S229.376 1024 512 1024c282.616633 0 512-229.376 512-512S794.616633 0 512 0z m0 984.528115c-247.292317 0-472.528115-225.228432-472.528115-472.528115S264.707683 39.471885 512 39.471885s472.528115 225.228432 472.528115 472.528115-225.235799 472.528115-472.528115 472.528115z"  ></path>' + "" + '<path d="M408.524432 311.185496l302.757755 201.838504-302.757755 201.838504z"  ></path>' + "" + '<path d="M408.524432 725.912863a11.065094 11.065094 0 0 1-11.05036-11.050359V311.185496a11.05036 11.05036 0 0 1 17.179626-9.193899L717.411453 503.822734a11.057727 11.057727 0 0 1 0 18.387798L414.653698 724.056403a11.065094 11.065094 0 0 1-6.129266 1.85646z m11.050359-394.077928v362.37813l271.787281-181.196432-271.787281-181.181698z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-play" viewBox="0 0 1024 1024">' + "" + '<path d="M213.333333 128l597.333334 384-597.333334 384V128z"  ></path>' + "" + "</symbol>" + "" + "</svg>";var script = function () {
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
		client.open('GET', url);
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

setTimeout(function () {
	getJSON('../src/js/lib/song.json').then(function (json) {
		var items = json;
		items.forEach(function (ele) {
			var judge = Math.random() > 0.5 ? 'sq' : '';
			var li = "\n\t\t<a href=\"../../../bin/song.html?id=" + ele.id + "\">\n\t\t<h3>" + ele.name + "</h3>\n\t\t<p>\n\t\t<svg class=\"" + judge + " hide\">\n\t\t<use xlink:href=\"#icon-sq\"></use>\n\t\t</svg>\n\t\t" + ele.author + "-" + ele.info + "</p>\n\t\t<svg class=\"playCl\">\n\t\t<use xlink:href=\"#icon-play-circle\"></use>\n\t\t</svg>\n\t\t</a>\n\t\t";
			var liDom = parseToDom(li);
			document.querySelector("#songItems").appendChild(liDom);
			function parseToDom(str) {
				var div = document.createElement("li");
				if (typeof str == "string") div.innerHTML = li;
				return div;
			}
		});
		var loadNode = document.querySelector("#loading");
		document.querySelector(".lastestMusic").removeChild(loadNode);
	}, function () {
		console.log('读取失败');
	});
}, 1000);

document.querySelectorAll('.tabItems >li').forEach(function (li) {
	var lis = document.querySelectorAll('.tabItems >li');
	var tabLis = document.querySelectorAll('.tabContent >li');
	var index = void 0;
	li.onclick = function (e) {
		var target = e.currentTarget;
		index = [].indexOf.call(lis, target);
		lis.forEach(function (li) {
			li.classList.remove('active');
		});
		target.classList.add('active');
		tabLis.forEach(function (li) {
			li.classList.remove('active');
		});
		tabLis[index].classList.add('active');

		var tabLisNow = tabLis[index];
		if (tabLisNow.getAttribute('data-downloaded') === 'yeah') {
			console.log('hahaha');
			return;
		}
		if (index === 1) {
			getJSON('../src/js/lib/page2.json').then(function (response) {
				// tabLisNow.innerText = response.text
				tabLisNow.setAttribute('data-downloaded', 'yeah');
			});
		} else if (index === 2) {
			getJSON('../src/js/lib/page3.json').then(function (response) {
				// tabLisNow.innerText = response.text
				// tabLisNow.setAttribute('data-downloaded', 'yeah')
			});
		}
	};
});

var clockLock = undefined;
document.querySelector('#searchMusic').addEventListener('input', function (e) {
	var inputNode = e.target;
	var value = inputNode.value.trim();
	var output = document.querySelector('#output');
	if (value === '') return;
	if (clockLock) {
		clearTimeout(clockLock);
	}
	clockLock = setTimeout(function () {
		search(value).then(function (result) {
			if (result.length !== 0) {
				output.innerText = result.map(function (arg) {
					return arg.name;
				}).join('\n');
			} else {
				output.innerText = '抱歉, 没有';
			}
		});
	});
	// console.log(value)
});

function search(keyword) {
	return new Promise(function (resolve, reject) {
		// console.log('搜索' + keyword)
		var database = [{ "id": "1", "name": "Strip That Down" }, { "id": "2", "name": "Despacito" }, { "id": "3", "name": "We Will Rock You" }, { "id": "4", "name": "Versace On The Floor" }, { "id": "5", "name": "The Show" }, { "id": "6", "name": "Rap God" }, { "id": "7", "name": "告白气球" }, { "id": "8", "name": "I Just Wanna Run" }, { "id": "9", "name": "Take Me to Your Heart" }, { "id": "10", "name": "Shape of You" }];
		var result = database.filter(function (item) {
			// console.log(item)
			return item.name.indexOf(keyword) >= 0;
		});
		setTimeout(function () {
			// console.log('搜索结果' + keyword)
			// console.log(resolve(result))
			resolve(result);
		}, Math.random() * 1000 + 200);
	});
}

/*
<li>
    <a href="">
			<h3>歌曲名9</h3>
			<p>
      <svg class="sq">
        <use xlink:href="#icon-sq"></use>
      </svg>
    演唱者9-专辑9</p>
      <svg class="playCl">
        <use xlink:href="#icon-play-circle"></use>
    </svg>
    </a>
</li>
*/

/***/ }),
/* 2 */
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

getJSON("../src/js/lib/song.json").then(function (response) {
  var id = parseInt(location.search.match(/\bid=([^&]*)/)[1], 10);
  var songs = response;
  var song = songs.filter(function (s) {
    return s.id == id;
  })[0];
  var url = song.url,
      cover = song.cover,
      filter = song.filter,
      lyric = song.lyric,
      name = song.name,
      author = song.author;

  initText(name, author, lyric, url, cover, filter);
});

function initText(name, author, lyric, url, cover, filter) {
  var musicName = document.querySelector('.musicName');
  musicName.innerHTML = name + " - <span>" + author + "</span>";
  document.querySelector('.cover').setAttribute("src", cover);
  var page = document.querySelector('.page');
  page.style.cssText = "background:url(" + filter + ") no-repeat; background-size: cover; transform-origin:center top; background-position:50%; transition : opacity .3s linear";
  autoPlay(url);
  initLyric(lyric);
}

function autoPlay(url) {
  var audio = document.createElement('audio');
  var discNode = document.querySelector('.disc');
  audio.src = url;
  audio.oncanplay = function () {
    audio.play();
    discNode.className += " playing";
  };

  var play = document.querySelector('.icon-play');
  play.onclick = function () {
    // console.log("点到我了")
    audio.play();
    discNode.className += " playing";
  };
  var pause = document.querySelector('.icon-pause');
  pause.onclick = function () {
    // console.log("点到我了")
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

  setInterval(function () {
    var linesNode = document.querySelector('.lines');
    var seconds = audio.currentTime;
    var munites = ~~(seconds / 60);
    var left = seconds - munites * 60;
    var time = pad(munites) + ":" + pad(left);
    var lines = linesNode.children;
    var whichLine = void 0;

    for (var i = 0; i < lines.length; i++) {
      var currentLineTime = lines[i].getAttribute('data-time');
      var nextLineTime = void 0;
      if (lines[i + 1]) {
        nextLineTime = lines[i + 1].getAttribute('data-time');
      }
      if (lines[i + 1] !== undefined && currentLineTime < time && nextLineTime > time) {
        whichLine = lines[i];
        // console.log(whichLine) 
        break;
      }
    }
    if (whichLine) {

      whichLine.classList.add('active');
      if (whichLine.previousElementSibling) {
        whichLine.previousElementSibling.classList.remove('active');
      }

      var lyricHeight = document.querySelector('.lyric').clientHeight / 3;

      var top = getOffset1(whichLine).top;
      var linesTop = getOffset1(linesNode).top;
      // let delta = top - linesTop - lyricHeight
      // console.log(top, linesTop, lyricHeight, delta)
      // linesNode.setAttribute("style",`transform : translateY(-${delta}px)`)


      // $(whichLine).addClass('active').prev().removeClass('active')

      // let top = $(whichLine).offset().top
      // let linesTop = $('.lines').offset().top

      // console.log(top1,":分111开:",top)
      // console.log(linesTop1,":分222开:",linesTop)

      var delta = top - linesTop - lyricHeight;
      linesNode.setAttribute("style", "transform : translateY(-" + delta + "px)");
    }
  }, 300);
}

var getOffset1 = function getOffset1(elem) {
  var docElem = document.documentElement;
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + docElem.scrollTop,
    left: box.left + docElem.scrollLeft
  };
};

function getOffset(Node, offset) {
  if (!offset) {
    offset = {};
    offset.top = 0;
    offset.left = 0;
  }
  if (Node == document.body) {
    return offset;
  }
  offset.top += Node.offsetTop;offset.left += Node.offsetLeft;
  return getOffset(Node.parentNode, offset);
}

function pad(num) {
  return num > 10 ? num + '' : '0' + num;
}

function initLyric(lyric) {
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
    var allP = lyricNode.children;
    for (var i in allP) {
      if (allP[i].innerText === "") {
        allP[i].remove();
      }
    }
  });
}

/*
for (var i in ac) {
  if (ac[i].innerText === ""){
  ac[i].remove()
}
}

*/

// getJSON("../src/js/lib/lyric.json").then(function(json) {
//   let {lyric} = json
//   let array = lyric.split('\n')
//   let regex = /^\[(.+)\](.*)/
//   array = array.map(function(string, index) {
//   	let matches = string.match(regex)
//   	// console.log(matches)
//   	if (!matches) return
//   	return {time: matches[1], words: matches[2]}
//   })
//   // console.log(array)
//   let lyricNode = document.querySelector('.lines')
//   array.map(function(object){
//   	// console.log(object)
//   	if(!object) return
//   	let lyricP = document.createElement('p')
//   	let lyricText = document.createTextNode(object.words)
//   	lyricP.setAttribute('data-time', object.time)
//   	lyricP.appendChild(lyricText)
//   	lyricNode.appendChild(lyricP)
//   })
//   // console.log(lyricNode)

// }, function(error) {
//   console.error('出错了', error);
// });


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
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(0);
__webpack_require__(2);
__webpack_require__(1);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
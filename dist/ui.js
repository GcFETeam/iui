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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select = function () {
    function Select(element) {
        _classCallCheck(this, Select);

        this.element = element;

        this.keys = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            BACKSPACE: 8
        };
    }

    _createClass(Select, [{
        key: 'getInitDataIds',
        value: function getInitDataIds() {
            var value = $.trim(this.valueInput.val());

            if (value.indexOf(',') > -1) {
                return value.split(',');
            }

            return value;
        }
    }, {
        key: 'moveUp',
        value: function moveUp(index, max) {

            if (index <= 0) {
                index = max - 1;
            } else {
                index -= 1;
            }

            return index;
        }
    }, {
        key: 'moveDown',
        value: function moveDown(index, max) {
            return (index + 1) % max;
        }
    }, {
        key: 'setWrapPosition',
        value: function setWrapPosition(wrap) {
            var _ = this,
                _position = _.getElementPosition();

            wrap.css({
                left: _position.left + 'px',
                top: _position.top + 'px'
            });
        }
    }, {
        key: 'getElementPosition',
        value: function getElementPosition() {
            var _ = this,
                element = _.element,
                _pos = element.offset(),
                left = _pos.left,
                top = _pos.top,
                _height = element.outerHeight();

            return {
                left: left,
                top: top + _height
            };
        }
    }]);

    return Select;
}();

exports.default = Select;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(8);

__webpack_require__(9);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(0);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(3);

"use strict";

(function () {
    var defaultSettings = {
        ajax: '',
        ajaxOnce: true,
        local: false,
        localData: null,
        disableEnterEvent: true,
        className: 'ui-vertical-menu autoSelect',
        showDefault: false,
        focusShow: true,
        force: false
    };

    var Autocomplete = function (_Select) {
        _inherits(Autocomplete, _Select);

        function Autocomplete(element, option) {
            _classCallCheck(this, Autocomplete);

            var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, element));

            var _ = _this;

            _.settings = $.extend({}, defaultSettings, option);

            _.element = element;

            _.valueInput = _.element.next('input');

            _.timer = null;
            _.data = null;
            _.wrap = null;

            _.init();

            return _this;
        }

        _createClass(Autocomplete, [{
            key: 'init',
            value: function init() {
                var _ = this;

                _.createListWrap();

                _.listen();
            }
        }, {
            key: 'createListWrap',
            value: function createListWrap() {
                var _ = this,
                    className = _.settings.className;


                if ($(className).length) {
                    _.wrap = $(className);
                } else {
                    _.wrap = $('<div class="' + className + '"></div>').appendTo(document.body);
                }
            }
        }, {
            key: 'createList',
            value: function createList(pattern) {
                var _ = this,
                    _$settings = _.settings,
                    local = _$settings.local,
                    localData = _$settings.localData,
                    ajax = _$settings.ajax,
                    ajaxOnce = _$settings.ajaxOnce;


                _.setWrapPosition(_.wrap);

                if (local) {
                    if ($.isArray(localData) && localData.length) {

                        _.data = localData;
                        var dom = _.createMenu(localData, pattern);

                        _.changeDom(dom);
                    }
                } else if (ajax) {

                    $.getJSON(ajax, function (data) {

                        var dom = void 0;

                        if ($.isArray(data) && data.length) {

                            if (ajaxOnce) {
                                _.settings.local = true;
                                _.settings.localData = data;

                                dom = _.createMenu(data, pattern);
                            } else {
                                dom = _.createMenu(data);
                            }

                            _.data = data;
                            _.changeDom(dom);
                        }
                    });
                }
            }
        }, {
            key: 'changeDom',
            value: function changeDom(dom) {
                var _ = this;

                _.wrap.html(dom.string);
                _.li = _.wrap.find('li');
                _.maxLength = dom.result.length;
                _.data = dom.result;
                _.currentIndex = -1;
                _.show = true;
            }
        }, {
            key: 'createMenu',
            value: function createMenu(data, pattern) {

                var str = '<ul>',
                    result = [],
                    _ = this,
                    l = data.length,
                    i = 0;

                if (pattern) {

                    for (; i < l; i += 1) {
                        var item = data[i];

                        if (_.matchResult(item, pattern)) {
                            result.push(item);

                            var reg = new RegExp(pattern, 'g'),
                                res = item.label.replace(reg, '<em>' + pattern + '</em>');
                            str += '<li class="menu-item" data-id="' + item.value + '">' + res + '</li>';
                        }
                    }
                } else {

                    for (; i < l; i += 1) {
                        var _item = data[i];
                        str += '<li class="menu-item" data-id="' + _item.value + '">' + _item.label + '</li>';
                    }

                    result = data;
                }

                str += result.length ? '</ul>' : str += '<li class="menu-item ft-gray">没有匹配结果</li></ul>';

                _.hasResult = result.length;

                _.match = pattern && pattern === data[0].label;

                return {
                    string: str,
                    result: result
                };
            }
        }, {
            key: 'matchResult',
            value: function matchResult(data, pattern) {

                var d = data.data;

                if (data.label.indexOf(pattern) > -1) {
                    return true;
                }

                if (d) {
                    if (Array.isArray(d)) {
                        var match = false;

                        for (var i = 0, l = d.length; i < l; i += 1) {
                            if (d[i].indexOf(pattern) > -1) {
                                match = true;
                                break;
                            }
                        }

                        if (match) {
                            return match;
                        }
                    } else if (typeof d === 'string' && d.indexOf(pattern) > -1) {
                        return true;
                    }
                }

                return false;
            }
        }, {
            key: 'listen',
            value: function listen() {

                var _ = this,
                    element = _.element,
                    wrap = _.wrap;

                element.on('focus', function () {

                    var val = $.trim($(this).val());

                    if (!_.li) {

                        if (val) {
                            if (_.settings.focusShow) {
                                _.createList(val);
                            }
                        } else {
                            if (_.settings.showDefault) {
                                _.createList();
                            }
                        }
                    }
                });

                element.on('keydown', function (e) {

                    var code = e.which;

                    if (_.li) {
                        switch (code) {
                            case _.keys.UP:
                                e.preventDefault();
                                _.onMoveUp();
                                break;

                            case _.keys.DOWN:
                                e.preventDefault();
                                _.onMoveDown();
                                break;

                            case _.keys.ENTER:
                                if (_.li) {
                                    if (_.settings.disableEnterEvent) {
                                        e.preventDefault();
                                    }
                                    _.clear();
                                }
                                break;

                            default:
                                return;

                        }
                    }
                });

                element.on('keyup', function (e) {
                    var code = e.which;

                    if (!(e.which > 36 && e.which < 41) && e.which !== _.keys.ENTER) {
                        var value = $.trim($(this).val());
                        if (value) {
                            _.createList(value);
                        } else {
                            if (_.settings.showDefault) {
                                _.createList();
                            } else {
                                _.clear();
                            }
                        }
                    }
                });

                element.on('blur', function () {
                    _.timer && clearTimeout(_.timer);
                    _.timer = setTimeout(function () {
                        _.clear();
                    }, 100);
                });

                wrap.on('click', 'li', function (e) {

                    clearTimeout(_.timer);

                    _.changeSelect();

                    _.clear();
                });

                wrap.on('mouseenter', 'li', function (e) {

                    _.currentIndex = $(this).index();

                    _.li.removeClass('hover');

                    $(this).addClass('hover');
                });

                wrap.on('mouseleave', 'li', function (e) {

                    _.currentIndex = -1;

                    $(this).removeClass('hover');
                });
            }
        }, {
            key: 'onMoveUp',
            value: function onMoveUp() {
                var _ = this,
                    data = _.data;

                if (data && _.hasResult) {

                    _.currentIndex = _.moveUp(_.currentIndex, data.length); // Select.moveUp

                    _.changeSelect();
                }
            }
        }, {
            key: 'onMoveDown',
            value: function onMoveDown() {
                var _ = this,
                    data = _.data;

                if (data && _.hasResult) {
                    _.currentIndex = _.moveDown(_.currentIndex, data.length); // Select.moveDown
                    _.changeSelect();
                }
            }
        }, {
            key: 'changeSelect',
            value: function changeSelect() {
                var _ = this,
                    current = _.currentIndex,
                    li = _.li,
                    element = _.element,
                    valueInput = _.valueInput,
                    data = _.data[current];

                li.removeClass('hover');

                li.eq(current).addClass('hover');

                _.hasResult = 1;

                _.match = true;

                element.val(data.label);

                valueInput.val(data.value);
            }
        }, {
            key: 'clear',
            value: function clear() {
                var _ = this;

                _.wrap.empty();
                _.li = null;
                _.currentIndex = -1;

                if (_.settings.force && _.show && (!_.hasResult || _.hasResult > 1 || !_.match)) {
                    _.element.val('');
                    _.valueInput.val('');
                }

                _.show = false;
            }
        }]);

        return Autocomplete;
    }(_select2.default);

    $.fn.uiAutocomplete = function (opt) {
        return this.each(function () {
            new Autocomplete($(this), opt);
        });
    };
})(window.jQuery || window.$);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./autocomplete.css", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./autocomplete.css");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".autoSelect {\n    position: absolute;\n}\n\n.ui-vertical-menu.autoSelect .item:hover {\n    background: #fff;\n}\n\n.ui-vertical-menu.autoSelect .item.hover {\n    background: #f3f3f3;\n}\n\n.autoSelect em {\n    color: #0f8ee9;\n    font-style: normal;\n}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(0);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function ($) {

    var defaultSetting = {
        ajaxUrl: '',
        initData: ''
    };

    var Linkage = function (_Select) {
        _inherits(Linkage, _Select);

        function Linkage(element, opt) {
            _classCallCheck(this, Linkage);

            var ele = element.find('.linkage-input');

            var _this = _possibleConstructorReturn(this, (Linkage.__proto__ || Object.getPrototypeOf(Linkage)).call(this, ele));

            var _ = _this;

            _.element = ele;

            _.valueInput = element.find('.linkage-value');

            _.settings = $.extend({}, defaultSetting, opt);

            _.levelCount = 0;

            _.hold = false;

            _.init();

            return _this;
        }

        _createClass(Linkage, [{
            key: 'init',
            value: function init() {
                var _ = this;

                _.createWrap();

                _.listen();
            }
        }, {
            key: 'createWrap',
            value: function createWrap() {
                this.wrap = $('<div class="ui-select-dropdown ui-vertical-menu menu-group"></div>').appendTo(document.body);
            }
        }, {
            key: 'showList',
            value: function showList() {

                var _ = this,
                    wrap = _.wrap;

                _.setWrapPosition(wrap);

                _.createList(_.settings.initData);
            }

            /**
             * create dropdown list
             * @param {string} data
             * @param {callback} fn
             * */

        }, {
            key: 'createList',
            value: function createList(data, fn) {

                var _ = this,
                    initIds = _.getInitDataIds(); // Select.getInitDataIds

                var v = '';

                if (data) {
                    v = '/' + data;
                }

                _.ajaxData(v, function (d) {

                    if (d) {

                        fn && fn();
                        var node = $(_.createMenu(d)).appendTo(_.wrap);
                        _.show = true;
                        _.levelCount += 1;

                        if ($.isArray(initIds) && initIds.length >= _.levelCount) {
                            _.triggerSelect(node);
                        }
                    }
                });
            }

            /**
             * <ul> list template
             * @param {array} data
             * */

        }, {
            key: 'createMenu',
            value: function createMenu(data) {
                var i = 0,
                    str = '<ul>';
                var l = data.length;

                for (; i < l; i += 1) {
                    str += this.createItem(data[i]);
                }

                return str + '</ul>';
            }

            /**
             * <li> item template
             * @param {object} data
             * */

        }, {
            key: 'createItem',
            value: function createItem(data) {

                var res = data.label,
                    i = '<i class="fa fa-angle-right ml-20"></i>',
                    last = '';

                if (data.last) {
                    i = '';
                    last = ' last';
                }

                return '<li class="menu-item' + last + '" data-value="' + data.value + '">' + res + ' ' + i + '</li>';
            }

            /**
             * select li item trigger click
             * @param {object} node ul dom
             * */

        }, {
            key: 'triggerSelect',
            value: function triggerSelect(node) {
                var _ = this,
                    initIds = _.getInitDataIds(),
                    // Select.getInitDataIds
                value = initIds[_.levelCount - 1],
                    li = $('[data-value="' + value + '"]', node);

                if (initIds.length > _.levelCount) {
                    li.trigger('click');
                } else {
                    li.addClass('hover');
                    _.hold = true;
                }
            }

            /**
             * @param {string} data
             * @param {function} callback
             * */

        }, {
            key: 'ajaxData',
            value: function ajaxData(data, callback) {
                var ajaxUrl = this.settings.ajaxUrl;


                $.getJSON(ajaxUrl + data, function (data) {
                    callback && callback(data);
                });
            }

            /*
            * change select value
            * */

        }, {
            key: 'selectItem',
            value: function selectItem() {
                var lis = $('.hover', this.wrap),
                    i = 0,
                    l = lis.length,
                    arr = [],
                    labels = [];

                for (; i < l; i += 1) {
                    arr.push(lis.eq(i).data('value'));
                    labels.push($.trim(lis.eq(i).text()));
                }

                this.element.val(labels.join(' / '));
                this.valueInput.val(arr.join(','));

                this.hideDrop();
            }

            /**
             * event
             * */

        }, {
            key: 'onFocus',
            value: function onFocus() {
                if (this.hold) {
                    this.showDrop();
                } else if (!this.show) {
                    this.showList();
                }
            }
        }, {
            key: 'onKeyup',
            value: function onKeyup(e, ele) {
                var _ = this;

                if ($.trim($(ele).val()) !== '') {
                    _.clear();
                } else {
                    if (e.which === _.keys.BACKSPACE) {
                        _.valueInput.val('');
                        _.clear();
                        _.showList();
                    }
                }
            }
        }, {
            key: 'onItemClick',
            value: function onItemClick(e, ele) {
                e.stopPropagation();

                var self = $(ele),
                    _ = this;

                _.changeSelectUi(self);

                if (!self.hasClass('last')) {

                    _.createList(self.data('value'), function () {
                        _.removeLater(self);
                        _.hold = false;
                    });
                } else {
                    _.selectItem($(this));
                }
            }
        }, {
            key: 'listen',
            value: function listen() {

                var _ = this,
                    element = _.element,
                    wrap = _.wrap;

                element.on('focus', function () {
                    _.onFocus();
                });

                element.on('click', function (e) {
                    e.stopPropagation();
                });

                element.on('keyup', function (e) {
                    _.onKeyup(e, this);
                });

                wrap.on('click', '.menu-item', function (e) {
                    _.onItemClick(e, this);
                });

                $(document).on('click', function () {
                    if (_.hold) {
                        _.hideDrop();
                    } else {
                        _.clear();
                    }
                });
            }
        }, {
            key: 'changeSelectUi',
            value: function changeSelectUi(li) {
                li.siblings().removeClass('hover');
                li.addClass('hover');
            }
        }, {
            key: 'removeLater',
            value: function removeLater(li) {
                li.parent().nextAll().remove();
            }
        }, {
            key: 'clear',
            value: function clear() {
                this.wrap.empty();
                this.show = false;
                this.levelCount = 0;
                this.hold = false;
            }
        }, {
            key: 'hideDrop',
            value: function hideDrop() {
                this.wrap.hide();
                this.hold = true;
            }
        }, {
            key: 'showDrop',
            value: function showDrop() {
                this.wrap.show();
            }
        }]);

        return Linkage;
    }(_select2.default);

    $.fn.uiLinkage = function (opt) {
        return this.each(function () {
            new Linkage($(this), opt);
        });
    };
})(jQuery);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
const _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

function throwError(message) {
    // eslint-disable-next-line no-console
    console.error('VanillaModal: ' + message);
}



function find(arr, callback) {
    return function (key) {
        var filteredArray = arr.filter(callback);
        return filteredArray[0] ? filteredArray[0][key] : undefined;
    };
}

function transitionEndVendorSniff() {
    var el = document.createElement('div');
    var transitions = [{key: 'transition', value: 'transitionend'}, {
        key: 'OTransition',
        value: 'otransitionend'
    }, {key: 'MozTransition', value: 'transitionend'}, {key: 'WebkitTransition', value: 'webkitTransitionEnd'}];
    return find(transitions, function (_ref) {
        var key = _ref.key;
        return typeof el.style[key] !== 'undefined';
    })('value');
}

function isPopulatedArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]' && arr.length;
}

function getNode(selector, parent) {
    var targetNode = parent || document;
    var node = targetNode.querySelector(selector);
    if (!node) {
        throwError(selector + ' not found in document.');
    }
    return node;
}

function addClass(el, className) {
    if (!(el instanceof HTMLElement)) {
        throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
        return cn !== className;
    }).concat(className).join(' '));
}

function removeClass(el, className) {
    if (!(el instanceof HTMLElement)) {
        throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
        return cn !== className;
    }).join(' '));
}

function getElementContext(e) {
    if (e && typeof e.hash === 'string') {
        return document.querySelector(e.hash);
    } else if (typeof e === 'string') {
        return document.querySelector(e);
    }
    throwError('No selector supplied to open()');
    return null;
}

function applyUserSettings(settings) {
    return _extends({}, defaults, settings, {
        transitionEnd: transitionEndVendorSniff()
    });
}

function matches(e, selector) {
    var allMatches = (e.target.document || e.target.ownerDocument).querySelectorAll(selector);
    for (var i = 0; i < allMatches.length; i += 1) {
        var node = e.target;
        while (node && node !== document.body) {
            if (node === allMatches[i]) {
                return node;
            }
            node = node.parentNode;
        }
    }
    return null;
}

export default {
    _extends: _extends,
    addClass: addClass,
    removeClass: removeClass,
    matches: matches
}



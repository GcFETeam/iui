export const _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
        let source = arguments[i];

        for (let key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

export function throwError(message) {
    // eslint-disable-next-line no-console
    console.error('VanillaModal: ' + message);
}


export function find(arr, callback) {
    return function (key) {
        let filteredArray = arr.filter(callback);
        return filteredArray[0] ? filteredArray[0][key] : undefined;
    };
}

export function transitionEndVendorSniff() {
    let el = document.createElement('div');
    let transitions = [{key: 'transition', value: 'transitionend'}, {
        key: 'OTransition',
        value: 'otransitionend'
    }, {key: 'MozTransition', value: 'transitionend'}, {key: 'WebkitTransition', value: 'webkitTransitionEnd'}];
    return find(transitions, function (_ref) {
        let key = _ref.key;
        return typeof el.style[key] !== 'undefined';
    })('value');
}

export function isPopulatedArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]' && arr.length;
}

export function getNode(selector, parent) {
    let targetNode = parent || document;
    let node = targetNode.querySelector(selector);
    if (!node) {
        throwError(selector + ' not found in document.');
    }
    return node;
}

export function addClass(el, className) {
    if (!(el instanceof HTMLElement)) {
        throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
        return cn !== className;
    }).concat(className).join(' '));
}

export function removeClass(el, className) {
    if (!(el instanceof HTMLElement)) {
        throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
        return cn !== className;
    }).join(' '));
}

export function getElementContext(e) {
    if (e && typeof e.hash === 'string') {
        return document.querySelector(e.hash);
    } else if (typeof e === 'string') {
        return document.querySelector(e);
    }
    throwError('No selector supplied to open()');
    return null;
}

export function applyUserSettings(settings) {
    return _extends({}, defaults, settings, {
        transitionEnd: transitionEndVendorSniff()
    });
}

export function matches(e, selector) {
    let allMatches = (e.target.document || e.target.ownerDocument).querySelectorAll(selector);
    for (let i = 0; i < allMatches.length; i += 1) {
        let node = e.target;
        while (node && node !== document.body) {
            if (node === allMatches[i]) {
                return node;
            }
            node = node.parentNode;
        }
    }
    return null;
}

export function delegate(element, targetSelector, type, handler) {

    element.addEventListener(type, function(event) {
        let targets = Array.prototype.slice.call(element.querySelectorAll(targetSelector));

        let target = event.target;
        if (targets.indexOf(target) !== -1) {
            return handler.apply(target, arguments);
        }
    }, false);
}



/* ==========
    Array
   ========== */

if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
}

export function isPopulatedArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]' && arr.length;
}


/* ==========
    Object
   ========== */

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

/* ==========
    Dom
   ========== */
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

export function matches(e, selector) {
    let d = e.target.document || e.target.ownerDocument;
    if (d) {
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

export function getOffset (node, offset, noInit) {

    if (!offset) {
        offset = {
            left: 0,
            top: 0
        }
    }

    if (node.nodeType !== 1) {
        return offset;
    }

    let _pos = window.getComputedStyle(node)['position'];

    if (noInit && _pos === 'static') {
        return getOffset(node.parentNode, offset, true);
    }

    offset.left += node.offsetLeft - node.scrollLeft;
    offset.top += node.offsetTop - node.scrollTop;

    if (_pos === 'fixed') {
        return offset;
    }

    return getOffset(node.parentNode, offset, true);

}


export function throwError(message) {
    console.error('error: ' + message);
}





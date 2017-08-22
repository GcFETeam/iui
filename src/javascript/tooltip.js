"use strict";

import * as common from './common';

const doc = document,
    defaultSetting = {
        trigger: '[data-tooltip-trigger]',
        data: 'data-tip',
        duration: 0.2
    };

class Tooltip {

    constructor (option) {
        const _ = this;

        _.settings = common._extends(defaultSetting, option);

        _.trigger = doc.querySelectorAll(_.settings.trigger);

        _.show = _.show.bind(_);
        _.hide = _.hide.bind(_);

        _.listen();
    }

    createTip (node, e) {

        if (!this.isOpening) {

            const div = doc.createElement('div'),
                position = common.getOffset(node, {
                    left: 0,
                    top: -20
                });

            div.className = 'ui-tooltip animated fadeIn';
            div.style.left = position.left + 'px';
            div.style.top = position.top + 'px';
            div.innerHTML = 'hello';

            doc.body.appendChild(div);

            this.toolDom = div;

            this.isOpening = true;
        }
    }

    show (e) {
        console.log('enter', e.target.className)

        this.createTip(e.target, e);

    }

    hide (e) {

        const node = this.toolDom;

        common.removeClass(node, 'fadeIn');
        common.addClass(node, 'fadeOut');

        setTimeout(() => {
            node.remove();


        }, this.settings.duration * 1000);

        this.isOpening = false;


    }

    listen () {

        const _ = this,
            trigger = _.trigger;

        trigger.forEach((item) => {
            item.addEventListener('mouseenter', _.show, false);
            item.addEventListener('mouseleave', _.hide, false);
        });

    }

}

window.Tooltip = Tooltip;

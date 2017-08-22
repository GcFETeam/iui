/*
* 基于 https://github.com/benceg/vanilla-modal
* */

require('../stylesheet/components/modal.css');

'use strict';


import * as common from './common';

const modalHtml =
    `<div class="modal-inner">
            <span class="modal-close" data-modal-close>&times;</span>
            <div class="modal-title"></div>
            <div class="modal-content"></div>
        </div>`;

const defaultSetting = {
    modal: null,

    modalInner: '.modal-inner',
    modalContent: '.modal-content',
    modalTitle: '.modal-title',

    title: null,

    open: '[data-modal-open]',
    close: '[data-modal-close]',

    className: 'modal-visible',

    entryType: 'drop',

    onBeforeOpen: null,
    onBeforeClose: null,
    onOpen: null,
    onClose: null,
};

const doc = document;

class Modal {

    constructor (setting) {

        const _ = this;

        _.isOpen = false;

        _.isListening = false;

        _.settings = common._extends({}, defaultSetting, setting);

        _.dom = _.getDomNodes();

        _.delegateClose = _.delegateClose.bind(_);
        _.delegateOpen = _.delegateOpen.bind(_);

        _.listen();

    }

    getDomNodes () {

        const _ = this;

        const {
            modal,
            modalInner,
            modalContent,
            modalTitle
        } = _.settings;

        let modalNode;

        if (modal) {

            modalNode = document.querySelector(modal);

        } else {

            let _div = _.createModal();

            modalNode = document.body.appendChild(_div);
        }

        return {
            modal: modalNode,
            modalInner: modalNode.querySelector(modalInner),
            modalContent: modalNode.querySelector(modalContent),
            modalTitle: modalNode.querySelector(modalTitle)
        }

    }

    createModal () {

        const _ = this,
            {entryType} = _.settings;

        let _div = doc.createElement('div');

        _div.className = entryType ? 'ui-modal ui-modal-' + entryType : 'ui-modal';
        _div.innerHTML = modalHtml;

        return _div;
    }

    delegateOpen (e) {
        const open = this.settings.open;

        const match = common.matches(e, open);

        if (match) {
            e.preventDefault();
            this.open(match, e);
        }

    }

    open (element, e) {
        const _ = this,
            {modal} = _.dom,
            {onBeforeOpen, onOpen, className} = _.settings;

        _.releaseNode();

        _.current = common.getElementContext(element);

        if (typeof onBeforeOpen === 'function') {
            onBeforeOpen.call(_, e);
        }

        _.captureNode(_.current, element);

        common.addClass(modal, className);

        _.isOpen = true;

        if (typeof onOpen === 'function') {
            onOpen.call(_, e);
        }


    }

    releaseNode () {
        this.dom.modalContent.innerHTML = '';
    }

    captureNode (element, triggerElement) {
        const _ = this,
            {modalContent, modalTitle} = this.dom,
            title = this.settings.title || triggerElement.getAttribute('data-modal-title');

        modalContent.innerHTML = element.innerHTML;

        modalTitle.innerHTML = title ? `<div>${title}</div>` : '';

    }


    delegateClose (e) {
        const close = this.settings.close;



        if (common.matches(e, close)) {
            e.preventDefault();
            this.close(e);
        }
    }

    close (e) {

        const _ = this,
            {onBeforeClose, className} = _.settings;

        if (_.isOpen) {
            _.isOpen = false;

            if (typeof onBeforeClose === 'function') {
                onBeforeClose.call(_, e);
            }

            common.removeClass(_.dom.modal, className);

            _.closeModal(e);
        }

    }

    closeModal (e) {

        const _ = this,
            {onClose } = _.settings;

        if (typeof onClose === 'function') {
            onClose.call(_, e);
        }

    }


    listen () {
        const _ = this,
            {modal} = _.dom,
            {open, close} = _.settings;

        if (!_.isListening) {

            if (open) {
                doc.addEventListener('click', this.delegateOpen, false);
            }

            if (close) {
                doc.addEventListener('click', this.delegateClose, false);
            }

        }

    }

}

window.Modal = Modal;


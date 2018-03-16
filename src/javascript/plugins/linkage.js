"use strict";

import Select from './select.js';

(function ($) {

    const defaultSetting = {
        ajaxUrl: '',
        initData: ''
    };

    class Linkage extends Select {

        constructor (element, opt) {

            const ele = element.find('.linkage-input');

            super(ele);

            const _ = this;


            _.element = ele;

            _.valueInput = element.find('.linkage-value');

            _.settings = $.extend({}, defaultSetting, opt);

            _.levelCount = 0;

            _.hold = false;

            _.init();


        }

        init () {
            const _ = this;

            _.createWrap();

            _.listen();
        }

        createWrap () {
            this.wrap = $(`<div class="ui-select-dropdown ui-vertical-menu menu-group"></div>`).appendTo(document.body);
        }

        showList () {

            const _ = this,
                wrap = _.wrap;

            _.setWrapPosition(wrap);

            _.createList(_.settings.initData);

        }

        /**
         * create dropdown list
         * @param {string} data
         * @param {callback} fn
         * */
        createList (data, fn) {

            const _ = this,
                initIds = _.getInitDataIds(); // Select.getInitDataIds

            let v = '';

            if (data) {
                v = '/' + data;
            }

            _.ajaxData(v, function (d) {

                if (d) {

                    fn && fn();
                    const node = $(_.createMenu(d)).appendTo(_.wrap);
                    _.show = true;
                    _.levelCount += 1;

                    if ($.isArray(initIds) && (initIds.length >= _.levelCount)) {
                        _.triggerSelect(node);
                    }

                }
            });
        }

        /**
         * <ul> list template
         * @param {array} data
         * */
        createMenu (data) {
            let i = 0,
                str = '<ul>';
            const l = data.length;

            for (; i < l; i += 1) {
                str += this.createItem(data[i]);
            }

            return str + '</ul>';
        }

        /**
         * <li> item template
         * @param {object} data
         * */
        createItem (data) {

            let res = data.label,
                i = `<i class="fa fa-angle-right ml-20"></i>`,
                last = '';

            if (data.last) {
                i = ``;
                last = ' last';
            }

            return `<li class="menu-item${last}" data-value="${data.value}">${res} ${i}</li>`;
        }

        /**
         * select li item trigger click
         * @param {object} node ul dom
         * */
        triggerSelect (node) {
            const _ = this,
                initIds = _.getInitDataIds(), // Select.getInitDataIds
                value = initIds[_.levelCount - 1],
                li = $(`[data-value="${value}"]`, node);

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
        ajaxData (data, callback) {
            const {ajaxUrl} = this.settings;

            $.getJSON(ajaxUrl + data, function (data) {
                callback && callback(data);
            });
        }

        /*
        * change select value
        * */
        selectItem () {
            let lis = $('.hover', this.wrap),
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


        onFocus () {
            if (this.hold) {
                this.showDrop();
            } else if (!this.show) {
                this.showList();
            }

        }

        onKeyup (e, ele) {
            const _ = this;

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
        
        onItemClick (e, ele) {
            e.stopPropagation();

            const self = $(ele),
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

        listen () {

            const _ = this,
                element = _.element,
                wrap = _.wrap;

            element.on('focus', () => {
                _.onFocus();
            });

            element.on('click', (e) => {
                e.stopPropagation();
            });

            element.on('keyup', function (e) {
                _.onKeyup(e, this);
            });

            wrap.on('click', '.menu-item', function (e) {
                _.onItemClick(e, this);
            });

            $(document).on('click', () => {
                if (_.hold) {
                    _.hideDrop();
                } else {
                    _.clear();

                }
            });
        }

        changeSelectUi (li) {
            li.siblings().removeClass('hover');
            li.addClass('hover');
        }

        removeLater (li) {
            li.parent().nextAll().remove();
        }

        clear () {
            this.wrap.empty();
            this.show = false;
            this.levelCount = 0;
            this.hold = false;

        }

        hideDrop () {
            this.wrap.hide();
            this.hold = true;
        }

        showDrop () {
            this.wrap.show();
        }
    }


    $.fn.uiLinkage = function (opt) {
        return this.each(function () {
            new Linkage($(this), opt);
        })
    }

})(jQuery);

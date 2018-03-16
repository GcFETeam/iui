require('./autocomplete.css');

import Select from './select.js';
"use strict";

(function () {
    const defaultSettings = {
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

    class Autocomplete extends Select {

        constructor (element, option) {

            super(element);

            const _ = this;

            _.settings = $.extend({}, defaultSettings, option);

            _.element = element;

            _.valueInput = _.element.next('input');

            _.timer = null;
            _.data = null;
            _.wrap = null;

            _.init();

        }

        init () {
            const _ = this;

            _.createListWrap();

            _.listen();

        }

        createListWrap () {
            const _ = this,
                {className} = _.settings;

            if ($(className).length) {
                _.wrap = $(className);
            } else {
                _.wrap = $(`<div class="${className}"></div>`).appendTo(document.body);
            }

        }

        createList (pattern) {

            const _ = this,
                {local, localData, ajax, ajaxOnce} = _.settings;

            _.setWrapPosition(_.wrap);

            if (local) {
                if ($.isArray(localData) && localData.length) {

                    _.data = localData;
                    const dom = _.createMenu(localData, pattern);

                    _.changeDom(dom);

                }

            } else if (ajax) {

                $.getJSON(ajax, function (data) {

                    let dom;

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
                })
            }

        }


        changeDom (dom) {
            const _ = this;

            _.wrap.html(dom.string);
            _.li = _.wrap.find('li');
            _.maxLength = dom.result.length;
            _.data = dom.result;
            _.currentIndex = -1;
            _.show = true;

        }

        createMenu (data, pattern) {

            let str = `<ul>`,
                result = [],
                _ = this,
                l = data.length,
                i = 0;

            if (pattern) {

                for (; i < l; i += 1) {
                    const item = data[i];

                    if (_.matchResult(item, pattern)) {
                        result.push(item);

                        let reg = new RegExp(pattern, 'g'),
                            res = item.label.replace(reg, `<em>${pattern}</em>`);
                        str += `<li class="menu-item" data-id="${item.value}">${res}</li>`;
                    }
                }

            } else {

                for (; i < l; i += 1) {
                    const item = data[i];
                    str += `<li class="menu-item" data-id="${item.value}">${item.label}</li>`;
                }

                result = data;
            }

            str += result.length
                ? '</ul>'
                : str += '<li class="menu-item ft-gray">没有匹配结果</li></ul>';

            _.hasResult = result.length;

            _.match = pattern && (pattern === data[0].label);

            return {
                string: str,
                result: result
            };
        }



        matchResult (data, pattern) {

            const d = data.data;

            if (data.label.indexOf(pattern) > -1) {
                return true;
            }

            if (d) {
                if (Array.isArray(d)) {
                    let match = false;

                    for (let i = 0,l = d.length; i < l; i += 1) {
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



        listen () {

            const _ = this,
                element = _.element,
                wrap = _.wrap;

            element.on('focus', function () {

                const val = $.trim($(this).val());


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

                const code = e.which;

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
                const code = e.which;

                if (!(e.which > 36 && e.which < 41) && (e.which !== _.keys.ENTER)) {
                    let value = $.trim($(this).val());
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

        onMoveUp () {
            const _ = this,
                data = _.data;

            if (data && _.hasResult) {

                _.currentIndex = _.moveUp(_.currentIndex, data.length); // Select.moveUp

                _.changeSelect();
            }
        }

        onMoveDown () {
            const _ = this,
                data = _.data;

            if (data && _.hasResult) {
                _.currentIndex = _.moveDown(_.currentIndex, data.length); // Select.moveDown
                _.changeSelect();
            }
        }

        changeSelect () {
            const _ = this,
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

        clear () {
            const _ = this;

            _.wrap.empty();
            _.li = null;
            _.currentIndex = -1;

            if (_.settings.force && _.show && ((!_.hasResult || _.hasResult > 1) || !_.match)) {
                _.element.val('');
                _.valueInput.val('');
            }

            _.show = false;
        }

    }


    $.fn.uiAutocomplete = function (opt) {
        return this.each(function () {
            new Autocomplete($(this), opt);
        })
    }

})(window.jQuery || window.$);
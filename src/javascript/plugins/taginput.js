require('./taginput.css');

'use strict';

(function ($) {
    const defaultSettings = {
        defaultText: '添加标签',
        width: '300px',
        height: '100px'
    };

    class TagInput {
        constructor(element, opt) {
            const _ = this;

            _.setting = $.extend({}, defaultSettings, opt);
            _.element = $(element);

            _.init();
        }

        init() {
            const _ = this,
                dom = _.createTagsDom();

            _.dom = $(dom);

            _.domAdd = $('.addTags', _.dom);

            _.input = _.dom.find('input');

            _.element.hide().after(_.dom);

            _.listen()
        }

        createTagsDom() {
            const _ = this,
                element = _.element,
                {defaultText, height, width} = _.setting;

            let dataArray = [],
                dataString = '',
                val = $.trim(element.val());

            if (val) {
                dataArray = val.split(',');
                dataString = _.createTag(dataArray)
            }

            _.tagsData = dataArray;

            return `<div class="tagsInput clf" style="height: ${height};width: ${width}">
                        ${dataString}
                        <div class="addTags"><input type="text" placeholder="${defaultText}"></div>
                    </div>`
        }

        createTag(data) {
            let dataString = '';

            if ($.isArray(data)) {
                for (let i = 0, l = data.length; i < l; i += 1) {
                    dataString += `<span class="tag">${data[i]} <a href="javascript:;" class="deleteTag">x</a></span>`
                }
            }

            if (typeof data === 'string') {
                dataString = `<span class="tag">${data} <a href="javascript:;" class="deleteTag">x</a></span>`
            }

            return dataString
        }

        listen() {
            const _ = this,
                input = _.input,
                data = _.tagsData;

            input.on('keydown', function (e) {
                const code = e.keyCode,
                    val = $.trim(this.value);

                if (val !== '') {
                    _.domAdd.removeClass('repeat');

                    if (code === 188 || code === 13) {
                        e.preventDefault();
                        _.addTag(val)
                    }
                }

                if (code === 8 && data.length > 0) {
                    _.removeTag(data.length - 1)
                }
            });

            input.on('blur', function (e) {
                const code = e.keyCode,
                    val = $.trim(this.value);

                if (val !== '') {
                    _.addTag(val)
                }
            });

            _.dom.on('click', '.deleteTag', function () {
                const index = $(this).parent('span').index();

                _.removeTag(index)
            });

            _.dom.on('click', (e) => {
                if (e.target.className === 'tagsInput clf') {
                    input.focus()
                }
            })
        }

        removeTag(index) {
            const _ = this,
                dom = _.dom;

            dom.find('.tag').eq(index).remove();

            _.tagsData.splice(index, 1);

            _.changeValue()
        }

        addTag(tag) {
            const _ = this,
                dom = _.dom,
                input = _.input,
                repeat = _.checkRepeat(tag);

            if (repeat) {
                _.domAdd.addClass('repeat')
            } else {
                _.tagsData.push(tag);

                _.domAdd.before(_.createTag(tag));

                input.val('')
            }

            _.changeValue()
        }

        changeValue() {
            this.element.val(this.tagsData.join(','))
        }

        checkRepeat(tag) {
            const _ = this,
                data = _.tagsData;

            let repeat = false;

            for (let i = 0, l = data.length; i < l; i += 1) {
                if (tag === data[i]) {
                    repeat = true;
                    break
                }
            }

            return repeat
        }
    }

    $.fn.uiTagInput = function (opt) {
        return this.each(function () {
            new TagInput(this, opt)
        })
    }
})(window.jQuery || window.$);

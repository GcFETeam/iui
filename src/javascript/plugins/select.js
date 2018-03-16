class Select {

    constructor (element) {
        this.element = element;

        this.keys = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            BACKSPACE: 8
        }
    }

    getInitDataIds () {
        const value = $.trim(this.valueInput.val());

        if (value.indexOf(',') > -1) {
            return value.split(',');
        }

        return value;
    }

    moveUp (index, max) {

        if (index <= 0) {
            index = max - 1;
        } else {
            index -= 1;
        }

        return index;
    }

    moveDown (index, max) {
        return (index + 1) % max
    }

    setWrapPosition (wrap) {
        const _ = this,
            _position = _.getElementPosition();

        wrap.css({
            left: _position.left + 'px',
            top: _position.top + 'px'
        });
    }

    getElementPosition () {
        const _ = this,
            element = _.element,
            _pos = element.offset(),
            left = _pos.left,
            top = _pos.top,
            _height = element.outerHeight();

        return {
            left,
            top: top + _height
        }
    }

}

export default Select;
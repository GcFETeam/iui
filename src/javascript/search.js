"use strict";

const searchObject = {

    selector: 'ui-search',


    init () {

        const _ = this;

        _.element = document.querySelectorAll('.ui-search');


        console.log(_.element)
    },

    bindEvent () {

    }

};


searchObject.init();

export default searchObject;

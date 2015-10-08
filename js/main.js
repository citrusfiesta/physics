requirejs.config({
    baseUrl: 'js'
});

requirejs([
    'ball'
], function (
    Ball
) {
    'use strict';
    new Ball();
});
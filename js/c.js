define('c', [], function () {
    'use strict';
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    return {
        canvas: canvas,
        ctx: ctx
    };
});
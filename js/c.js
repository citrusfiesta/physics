define('c', [], function () {
    'use strict';
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        canvasWidth = 600,
        canvasHeight = 600;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    return {
        canvas: canvas,
        ctx: ctx,
        canvasWidth: canvasWidth,
        canvasHeight: canvasHeight
    };
});
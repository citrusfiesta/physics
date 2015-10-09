define('ball', [
    'c',
    'vector2'
], function (
    C,
    Vector2
) {
    'use strict';
    return function (pX, pY, pRadius) {
        var canvas = C.canvas,
            ctx = C.ctx,
            radius = pRadius ? pRadius : Math.floor(Math.random() * 11) + 15,
            //turn into vector2 position
            x = pX ? pX : Math.floor(Math.random() * (canvas.width - radius - radius)) + radius,
            y = pY ? pY : Math.floor(Math.random() * (canvas.height - radius - radius)) + radius,
            twoPi = Math.PI + Math.PI,
            color = 'rgba(' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',0.5)',
            ball = {
                update: function () {

                },
                draw: function () {
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, twoPi);
                    ctx.fillStyle = color;
                    ctx.fill();
                }
            };

        return ball;
    };
});
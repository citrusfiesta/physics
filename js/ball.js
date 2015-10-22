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
            pos = new Vector2(
                pX ? pX : Math.floor(Math.random() * (C.canvasWidth - radius - radius)) + radius,
                pY ? pY : Math.floor(Math.random() * (C.canvasHeight - radius - radius)) + radius
            ),
            oldPos = pos.clone(),
            velocity = new Vector2(0, 0),
            gravity = new Vector2(0, 0.5),
            gravityOn = true,
            twoPi = Math.PI + Math.PI,
            color = 'rgba(' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',0.5)',
            velocityBounce = function () {
                var nx,
                    ny;
                if (pos.x <= radius || pos.x >= C.canvasWidth - radius)
                    nx = velocity.mirror(true).x;
                else
                    nx = pos.x - oldPos.x;

                if (pos.y <= radius || pos.y >= C.canvasHeight - radius)
                    ny = velocity.mirror(false).y;
                else
                    ny = pos.y - oldPos.y;

                return new Vector2(nx, ny);
            },
            move = function () {
                velocity = velocityBounce();
                if (gravityOn)
                    velocity = velocity.add(gravity);
                oldPos = pos.clone();
                pos = pos.add(velocity);
                pos = pos.clip(radius, radius, C.canvasWidth - radius - radius,
                    C.canvasHeight - radius - radius);
            },
            ball = {
                init: function () {

                },
                update: function () {
                    move();
                },
                draw: function () {
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, radius, 0, twoPi);
                    ctx.fillStyle = color;
                    ctx.fill();
                }
            };

        return ball;
    };
});
define('ball', [
    'c',
    'vector2'
], function (
    C,
    Vector2
) {
    'use strict';
    return function (pX, pY, pVelocity, pRadius) {
        var canvas = C.canvas,
            ctx = C.ctx,
            radius = pRadius ? pRadius : Math.floor(Math.random() * 11) + 15,
            pos = new Vector2(
                pX ? pX : Math.floor(Math.random() * (C.canvasWidth - radius - radius)) + radius,
                pY ? pY : Math.floor(Math.random() * (C.canvasHeight - radius - radius)) + radius
            ),
            oldPos = pos.clone(),
            velocity = pVelocity || new Vector2(0, 0),
            gravity,
            twoPi = Math.PI + Math.PI,
            color = 'rgba(' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',0.5)',
            getNewVelocity = function () {
                var nx,
                    ny;
                // Reverse ball x-direction if it's heading out of screen
                if (pos.x <= radius || pos.x >= C.canvasWidth - radius)
                    nx = velocity.mirror(true).x;
                else
                    nx = pos.x - oldPos.x;
                // Idem for y-direction
                if (pos.y <= radius || pos.y >= C.canvasHeight - radius)
                    ny = velocity.mirror(false).y;
                else
                    ny = pos.y - oldPos.y;

                return new Vector2(nx, ny);
            },
            move = function () {
                velocity = getNewVelocity();
                if (gravity) //Check if gravity is turned on
                    velocity = velocity.add(gravity);

                oldPos = pos.clone();
                pos = pos.add(velocity);
                //Prevents balls from falling through floor
                pos = pos.clip(radius, radius, C.canvasWidth - radius - radius,
                    C.canvasHeight - radius - radius);
            },
            ball = {
                init: function () {
                    this.setGravity(0.25);
                    pos = pos.add(velocity);
                },
                update: function () {
                    move();
                },
                draw: function () {
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, radius, 0, twoPi);
                    ctx.fillStyle = color;
                    ctx.fill();
                },
                /**
                 * Sets new gravity. If parameter is left empty, gravity is turned off.
                 * @param {Vector2} value - How much gravity should be.
                 */
                setGravity: function (value) {
                    if (value)
                        gravity = new Vector2(0, value);
                    else
                        gravity = null;
                }
            };
        return ball;
    };
});
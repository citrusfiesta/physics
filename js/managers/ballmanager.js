define('managers/ballmanager', [
    'c',
    'ball'
], function (
    C,
    Ball
) {
    'use strict';
    /**
     * Handles all the balls
     * @return {Object} ballMan Instance of BallManager
     */
    return function () {
        var i = 0,
            len = 0,
            ctx = C.ctx,
            canvasWidth = C.canvas.width,
            canvasHeight = C.canvas.height,
            balls = [],
            createBalls = function (amount) {
                if (!amount)
                    amount = 1;
                for (i = 0; i < amount; i++) {
                    console.log(amount - i);
                    balls.push(new Ball());
                }
            },
            ballMan = {
                update: function () {
                    // clear screen before redrawing
                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                    for (i = 0, len = balls.length; i < len; i++) {
                        balls[i].update();
                        balls[i].draw();
                    }
                }
            };

        createBalls(200);
        return ballMan;
    };
});
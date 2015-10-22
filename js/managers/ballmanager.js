define('managers/ballmanager', [
    'c',
    'ball',
    'vector2'
], function (
    C,
    Ball,
    Vector2
) {
    'use strict';
    /**
     * Handles the spawning of the balls
     * @return {Object} ballMan Instance of BallManager
     */
    return function (objectManager) {
        var i = 0,
            len = 0,
            objMan = objectManager,
            mouseX = 0,
            mouseY = 0,
            clicking = false,
            keys = [],
            createBall = function (x, y, velocity, radius) {
                objMan.add(new Ball(x, y, velocity, radius));
            },
            /**
             * Spawns ball at mouse position with a randomized upward velocity
             */
            erupt = function () {
                createBall(mouseX, mouseY, new Vector2(
                    Math.random() * -4 + 2, //add -2 to 2 horizontal velocity
                    Math.random() * -5 - 3 //add 3 to 8 upward velocity
                ));
            },
            /**
             * Spawns a ball at the current mouse position
             */
            drip = function () {
                createBall(mouseX, mouseY);
            },
            ballMan = {
                update: function () {
                    if (clicking)
                        erupt();
                    if (keys[32]) //space bar
                        drip();
                },
                keyDown: function (e) {
                    keys[e.keyCode] = true;
                    if (e.keyCode === 81) //Q
                        objMan.clearBalls();
                },
                keyUp: function (e) {
                    keys[e.keyCode] = false;
                },
                mouseDown: function (e) {
                    clicking = true;
                },
                mouseUp: function (e) {
                    clicking = false;
                },
                mouseMove: function (e) {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                }
            };

        return ballMan;
    };
});
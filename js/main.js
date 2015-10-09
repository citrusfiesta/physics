requirejs.config({
    baseUrl: 'js'
});

requirejs([
    'lib/requestanimationframe',
    'managers/ballmanager'
], function (
    requestAnimationFrame,
    BallManager
) {
    'use strict';

    var isRunning = false,
        ballMan = new BallManager(),
        updateLoop = function () {

            if (!isRunning)
                return;
            console.log('updateLoop running');
            requestAnimationFrame(updateLoop);
        },
        run = function () {
            if (!isRunning) {
                isRunning = true;
                updateLoop();
            }
        };
    ballMan.createBalls();
    run();
});
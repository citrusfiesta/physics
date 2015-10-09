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

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        i = 0,
        len = 0,
        isRunning = false,
        isPaused = false,
        updateArr = [],
        mainLoop = function () {
            if (!isRunning)
                return;
            update();
            requestAnimationFrame(mainLoop);
        },
        run = function () {
            if (!isRunning) {
                isRunning = true;
                mainLoop();
            }
        },
        update = function () {
            for (i = 0, len = updateArr.length; i < len; i++) {
                // preventing errors
                if (!updateArr[i]) {
                    console.log('Index ' + i + ' in updateArr returns null.');
                    continue;
                }

                if (updateArr[i].update && !isPaused)
                    updateArr[i].update();
            }
        };
    updateArr.push(new BallManager());
    run();
});
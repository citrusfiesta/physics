requirejs.config({
    baseUrl: 'js'
});

requirejs([
    'lib/requestanimationframe',
    'c',
    'managers/ballmanager'
], function (
    requestAnimationFrame,
    C,
    BallManager
) {
    'use strict';

    var canvas = C.canvas,
        ctx = C.ctx,
        i = 0,
        len = 0,
        isRunning = false,
        isPaused = false,
        updateArr = [],
        setup = function () {
            canvas.width = 600;
            canvas.height = 600;
        },
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

    setup();
    updateArr.push(new BallManager());
    run();
});
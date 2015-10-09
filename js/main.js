requirejs.config({
    baseUrl: 'js'
});

requirejs([
    'lib/requestanimationframe',
    'ball'
], function (
    requestAnimationFrame,
    Ball
) {
    'use strict';

    var isRunning = false,
        updateLoop = function () {

            if (!isRunning)
                return;
            console.log('udpateLoop running');
            requestAnimationFrame(updateLoop);
        },
        run = function () {
            if (!isRunning) {
                isRunning = true;
                updateLoop();
            }
        };
    run();
});
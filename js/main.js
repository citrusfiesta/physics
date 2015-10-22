requirejs.config({
    baseUrl: 'js'
});

requirejs([
    'lib/requestanimationframe',
    'c',
    'managers/objectmanager',
    'ball'
], function (
    requestAnimationFrame,
    C,
    ObjectManager,
    Ball
) {
    'use strict';

    var canvas = C.canvas,
        ctx = C.ctx,
        i = 0,
        len = 0,
        canvasWidth = 0,
        canvasHeight = 0,
        isRunning = false,
        isPaused = false,
        objMan = new ObjectManager(),
        setup = function () {
            canvasWidth = C.canvasWidth;
            canvasHeight = C.canvasHeight;
        },
        mainLoop = function () {
            if (!isRunning)
                return;

            if (!isPaused)
                objMan.update();
            objMan.draw();

            requestAnimationFrame(mainLoop);
        },
        run = function () {
            if (!isRunning) {
                isRunning = true;
                mainLoop();
            }
        },
        // temp test function, remove later
        addBalls = function (amount) {
            if (!amount || amount < 1)
                amount = 1;
            for (i = 0; i < amount; i++) {
                objMan.add(new Ball(10, 10));
                console.log('ball ' + (i + 1));
            }
        };

    setup();

    run();

    addBalls(1);
});
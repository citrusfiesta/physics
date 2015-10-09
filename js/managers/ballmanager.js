define('managers/ballmanager', [
    'ball'
], function (
    Ball
) {
    'use strict';
    /**
     * Handles all the balls
     * @return {Object} ballMan Instance of BallManager
     */
    return function () {
        var i,
            balls = [],
            ballMan = {
                createBalls: function (amount) {
                    if (!amount)
                        amount = 1;
                    for (i = 0; i < amount; i++)
                        console.log(amount - i);
                }
            };

        return ballMan;
    };
});
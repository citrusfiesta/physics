define('managers/objectmanager', [
    'c'
], function (
    C
) {
    return function () {
        var i = 0,
            len = 0,
            canvas = C.canvas,
            ctx = C.ctx,
            objects = [],
            update = function () {
                for (i = 0, len = objects.length; i < len; i++) {
                    // preventing errors
                    if (!objects[i]) {
                        console.log('Index ' + i + ' in objects returns null.');
                        continue;
                    }

                    if (objects[i].update)
                        objects[i].update();
                }
            },
            draw = function () {
                ctx.clearRect(0, 0, C.canvasWidth, C.canvasHeight);
                for (i = 0, len = objects.length; i < len; i++) {
                    if (objects[i].draw)
                        objects[i].draw();
                }
            },
            add = function (object) {
                objects.push(object);
                if (object.init)
                    object.init();
            },
            module = {
                add: add,
                update: update,
                draw: draw
            };

        return module;
    };
});
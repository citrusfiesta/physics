define('vector2', [], function () {
    'use strict';
    return function (clipX, clipY) {
        var x = clipX || 0,
            y = clipY || 0,
            add = function (vector) {
                return new vec2(x + vector.x, y + vector.y);
            },
            subtract = function (vector) {
                return new vec2(x - vector.x, y - vector.y);
            },
            magnitude = function () {
                return Math.sqrt(x + x, y + y);
            },
            scale = function (factor) {
                return new vec2(x * factor, y * factor);
            },
            clone = function () {
                return new vec2(x, y);
            },
            mirror = function (horizontal) {
                if (horizontal) return new vec2(-x, y);
                else return new vec2(x, -y);
            },
            normalize = function (vector) {
                var length = vector.magnitude();
                return new vec2(vector.x / length, vector.y / length);
            },
            normal = function () {
                return vec2.normalize();
            },
            clip = function (clipX, clipY, width, height) {
                var nx = x,
                    ny = y;
                if (x < clipX)
                    nx = clipX;
                if (y < clipY)
                    ny = clipY;
                if (x > clipX + width)
                    nx = clipX + width;
                if (y > clipY + height)
                    ny = clipY + height;
                return new Vec2(nx, ny);
            },
            vec2 = {
                x: x,
                y: y,
                add: add,
                subtract: subtract,
                magnitude: magnitude,
                scale: scale,
                clone: clone,
                mirror: mirror,
                normalize: normalize,
                normal: normal,
                clip: clip
            };

        return vec2;
    };
});
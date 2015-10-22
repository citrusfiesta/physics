define('vector2', [

], function (

) {
    'use strict';
    var add = function (vector) {
            var v = this.clone();
            v.x += vector.x;
            v.y += vector.y;
            return v;
        },
        subtract = function (vector) {
            var v = this.clone();
            v.x -= vector.x;
            v.y -= vector.y;
            return v;
        },
        magnitude = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        scale = function (factor) {
            return vec2(this.x * factor, this.y * factor);
        },
        clone = function () {
            return vec2(this.x, this.y);
        },
        mirror = function (horizontal) {
            if (horizontal) return vec2(-this.x, this.y);
            else return vec2(this.x, -this.y);
        },
        normalize = function (vector) {
            var length = vector.magnitude();
            return vec2(vector.x / length, vector.y / length);
        },
        normal = function () {
            return this.normalize();
        },
        clip = function (clipX, clipY, width, height) {
            var nx = this.x,
                ny = this.y;
            if (this.x < clipX)
                nx = clipX;
            if (this.y < clipY)
                ny = clipY;
            if (this.x > clipX + width)
                nx = clipX + width;
            if (this.y > clipY + height)
                ny = clipY + height;
            return vec2(nx, ny);
        },
        vec2 = function (x, y) {
            return {
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
        };

    return vec2;
});
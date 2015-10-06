requirejs.config({
    baseUrl: 'js'
});

requirejs([
    'ball'
], function (
    Ball
) {
    new Ball();
});

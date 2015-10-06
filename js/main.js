requirejs.config({
    baseUrl: 'js'
});

requirejs([
    'main'
], function (
    Main
) {
	console.log('hello world');
});

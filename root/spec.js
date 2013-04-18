require([
    '{%= path %}/{%= name %}',
    'dojo/dom-construct',
    'dojo/_base/window'

],

function (
    {%= name %},
    domConstruct,
    win
    ) {
    describe('{%= path %}/{%= name %}', function () {
        var testWidget;
        var destroy = function (widget) {
            widget.destroyRecursive();
            widget = null;
        };
        beforeEach(function () {
            testWidget = new {%= name %}({}, domConstruct.create('div', {}, win.body()));
            testWidget.startup();
        });
        afterEach(function () {
            destroy(testWidget);
        });
        it('create a valid object', function () {
            expect(testWidget).toEqual(jasmine.any({%= name %}));
        });
    });
});
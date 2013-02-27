require([
    '{%= path %}/{%= name %}'
],

function (
    {%= name %}
    ) {
    describe('{%= path %}/{%= name %}', function () {
        var testWidget;
        beforeEach(function () {
            testWidget = new {%= name %}();
            testWidget.startup();
        });
        afterEach(function () {
            testWidget = null;
        });
        it('create a valid object', function () {
            expect(testWidget).toEqual(jasmine.any({%= name %}));
        });
    });
});
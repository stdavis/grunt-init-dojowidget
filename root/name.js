define([
    'dojo/_base/declare',

    'dojo/text!./templates/{%= name %}.html',

    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin'

], function(
    declare,

    template,

    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin
) {
    // summary:
    //      {%= description %}
    return declare('{%= declareName %}', [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: {%= widgetsInTemplate %},
        templateString: template,
        baseClass: '{%= baseclass %}',

        constructor: function() {
            console.log(this.declaredClass + '::constructor', arguments);

            this.inherited(arguments);
        },
        postCreate: function() {
            // summary:
            //      dom is ready
            console.log(this.declaredClass + '::postCreate', arguments);

            this.inherited(arguments);
        }
    });
});
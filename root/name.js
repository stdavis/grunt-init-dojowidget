define([
    'dojo/_base/declare', 
    'dijit/_WidgetBase', 
    'dijit/_TemplatedMixin', 
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./templates/{%= name %}.html'
],

function (
    declare, 
    _WidgetBase, 
    _TemplatedMixin, 
    _WidgetsInTemplateMixin, 
    template
    ) {
    // summary:
    //      {%= description %}
    return declare('{%= declareName %}', 
        [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: {%= widgetsInTemplate %},
        templateString: template,
        baseClass: '{%= baseclass %}',

        constructor: function () {
            console.log(this.declaredClass + "::constructor", arguments);
        },
        postCreate: function () {
            // summary:
            //      dom is ready
            console.log(this.declaredClass + "::postCreate", arguments);

            this.inherited(arguments);
        }
    });
});
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
    'use strict';
    // summary:
    //      {%= description %}
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: {%= widgetsInTemplate %},
        templateString: template,
        baseClass: '{%= baseclass %}',

        constructor: function() {
            console.log('{%= path %}/{%= name %}:constructor', arguments);

            this.inherited(arguments);
        },
        postCreate: function() {
            // summary:
            //      dom is ready
            console.log('{%= path %}/{%= name %}:postCreate', arguments);

            this.inherited(arguments);
        }
    });
});
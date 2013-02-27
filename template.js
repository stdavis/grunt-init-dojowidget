'use strict';

exports.description = "Create all files associated with a new dojo widget (.js, .html, .css, spec.js)";
exports.notes = "";

exports.template = function(grunt, init, done) {
  var fs = require('fs');
  var declareNameDefault = 'app.<WidgetName>';

  init.process({}, [
    {
      name: 'name',
      message: "WidgetName"
    },
    {
      name: 'description',
      message: 'Widget Description'
    },
    {
      name: 'path',
      message: "Path/To/WidgetFolder (relative to current folder)",
      "default": 'app'
    },
    {
      name: 'declareName',
      message: "DojoDeclareName",
      "default": declareNameDefault
    },
    {
      name: 'widgetsInTemplate',
      message: "Will the template contain other widgets?",
      "default": "Y/n"
    },
    { 
      name: 'baseclass',
      message: "base-css-class"
    },
    {
      name: 'maincssfile',
      message: "Main.css that the @import will be added to",
      "default": 'app/resources/app.css'
    },
    {
      name: 'testspath',
      message: 'tests folder',
      "default": 'app/tests'
    }
  ], function (err, props) {
    // warn if overright
    var path = 'src/' + props.path + '/' + props.name + '.js';
    if (fs.existsSync(path)) {
      grunt.warn('There is already a widget located there!');
    }

    props.widgetsInTemplate = /y/i.test(props.widgetsInTemplate);
    console.log(props.widgetsInTemplate);

    // apply declareName default
    if (props.declareName === declareNameDefault) {
      props.declareName = 'app.' + props.name;
    }
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process). files.
    init.copyAndProcess(files, props, {});

    var file = fs.createWriteStream('src/' + props.maincssfile, {
      flags: 'a'
    });

    file.end("\n@import '" + props.name + ".css';");

    file.on('close', function () {
      done();
    });
  });
};

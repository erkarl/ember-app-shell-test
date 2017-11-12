/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    'ember-app-shell': {
      visitPath: '/app-shell',
      outputFile: 'index.html',
      // https://peter.sh/experiments/chromium-command-line-switches/
      chromeFlags: [],
      // https://github.com/addyosmani/critical#options
      criticalCSSOptions: {
        width: 1300,
        height: 900
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};

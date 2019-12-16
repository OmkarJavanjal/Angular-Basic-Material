// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var screenshots = require('protractor-take-screenshots-on-demand');
//var HtmlReporter = require('protractor-html-screenshot-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  allScriptsTimeout: 90000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  useAllAngular2AppRoots: true,
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval:120000,
    print: function() {}
  },
  onPrepare() {
    var path = require('path');
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  //  browser.param.jasmineTimeout = 60000; //To slove Error: Timeout - The asynchronous callback was not called within the time specified by jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp/screenshots'
   }).getJasmine2Reporter());

    //joiner between browser name and file name
    screenshots.browserNameJoiner = ' - '; //this is the default
     //folder of screenshots
     screenshots.screenShotDirectory = 'target/screenshots';
     //creates folder of screenshots
     screenshots.createDirectory();
  }
};

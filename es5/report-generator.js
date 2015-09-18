'use strict';

exports.__esModule = true;
exports.generateSummaryReport = generateSummaryReport;
exports.generateFileReport = generateFileReport;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chalkProvider = require('./chalk-provider');

var _chalkProvider2 = _interopRequireDefault(_chalkProvider);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

// Generates a report that summarises the spelling errors found across multiple
// markdown files.
// results is an array containing the errors (as a nested array) for each file.

function generateSummaryReport(results, options) {
  var chalk = _chalkProvider2['default'](options);
  var errorCount = results.map(function (e) {
    return e && e.length ? e.length : 0;
  }).reduce(function (p, c) {
    return p + c;
  }, 0);

  var filePlural = 'file' + (results.length > 1 ? 's' : '');
  var errorPlural = 'error' + (errorCount > 1 ? 's' : '');
  var areOrIs = results.length > 1 ? 'are' : 'is';

  if (errorCount > 0) {
    return chalk.red('>>') + ' ' + errorCount + ' spelling ' + errorPlural + ' found in ' + results.length + ' ' + filePlural;
  }
  return chalk.green('>>') + ' ' + results.length + ' ' + filePlural + ' ' + areOrIs + ' free from spelling errors';
}

// Generates a report for the errors found in a single markdown file.

function generateFileReport(file, options, spellingInfo) {
  var chalk = _chalkProvider2['default'](options);
  var report = '    ' + chalk.bold(file) + '\n';

  for (var k = 0; k < spellingInfo.errors.length; k++) {
    var error = spellingInfo.errors[k];
    var displayBlock = _context2['default'].getBlock(spellingInfo.src, error.index, error.word.length, options);

    var lineNumber = String(displayBlock.lineNumber);
    var lineNumberPadding = Array(10 - lineNumber.length).join(' ');
    var linePrefix = '' + lineNumberPadding + lineNumber + ' |';
    report += linePrefix + ' ' + displayBlock.info + ' \n';
  }
  return report;
}
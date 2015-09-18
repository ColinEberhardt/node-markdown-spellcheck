'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var monoChalk = {
  red: function red(str) {
    return '#' + str + '#';
  },
  green: function green(str) {
    return '-' + str + '-';
  },
  bold: function bold(str) {
    return '~' + str + '~';
  }
};

exports['default'] = function (options) {
  return options.monochrome ? monoChalk : _chalk2['default'];
};

module.exports = exports['default'];
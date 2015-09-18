import chalk from 'chalk';

const monoChalk = {
  red: function(str) {
    return `#${str}#`;
  },
  green: function(str) {
    return `-${str}-`;
  },
  bold: function(str) {
    return `~${str}~`;
  }
}

export default function(options) {
  return options.monochrome ? monoChalk : chalk;
}

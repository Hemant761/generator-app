const chalk = require('chalk');
const helper = {};

helper.validateName = function (value) {
  
  var pattern = new RegExp('^[a-zA-z]+$');
  var isValid = pattern.test(value);
  var returnValue=isValid;

  if (!isValid) {
    returnValue = chalk.red('Please enter only alphabets.');
  } else {
    returnValue = true;
  }
  return returnValue;
};

module.exports = helper;
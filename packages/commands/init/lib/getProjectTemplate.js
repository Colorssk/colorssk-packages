const request = require('@colorssk-cli/request');

module.exports = function() {
  return request({
    url: '/project/template',
  });
};

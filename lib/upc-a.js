/*
 * barcode generator - UPC-A
 */

var gm = require('gm');

module.exports.createCode = function (options, callback) {

  img.stream(options.type, function (err, stdout, stderr) {
    callback(err, stdout);
  });
}
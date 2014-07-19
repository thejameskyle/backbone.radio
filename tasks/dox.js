var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs-extra'));
var path = require('path');
var dox = require('dox');
var _ = require('underscore');

module.exports = function(grunt) {
  grunt.registerMultiTask('dox', function() {
    var src = path.resolve(this.data.src);
    var dest = path.resolve(this.data.dest);
    var template;

    fs.readFileAsync(path.resolve('tasks/dox-template.html')).then(function(buffer) {
      template = _.template(buffer.toString());
    }).then(function() {
      return fs.ensureDirAsync(path.resolve(dest))
    }).then(function() {
      return fs.readdirAsync(src);
    }).map(function(file) {
      return fs.readFileAsync(path.resolve(src, file)).then(function(buffer) {
        return dox.parseComments(buffer.toString());
      }).then(function(dox) {
        return template({ dox: dox });
      }).then(function(content) {
        return fs.writeFileAsync(path.resolve(dest, file.replace(/\.[^\.]+$/, '.html')), content);
      });
    })
    .then(function() { grunt.log.ok('yup.'); })
    .catch(function(err) { grunt.fail.warn(err); })
    .then(this.async());
  });
};

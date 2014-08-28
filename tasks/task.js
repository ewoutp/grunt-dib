// grunt-dib
// =========

"use strict";

module.exports = function(grunt) {

  grunt.registerTask('dib', 'Run dib in the project folder', function() {
    var done = this.async();
    grunt.util.spawn({
      cmd: 'node_modules/.bin/dib',
      opts: {
        stdio: 'inherit'
      }
    }, done);
  });
};

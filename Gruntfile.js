module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    haml: {
      one: {
        files: {
          // 1:1 compile
          'index.html': 'index.haml',
        }
      }
    },
    less: {
      dev: {
        options: {
          paths: ['assets/stylesheets/dist']
        },
        files: {
          'assets/stylesheets/dist/app.css': 'assets/stylesheets/src/*'
        },
      },
    },
    watch: {
      maintask: {
        files: '**/**.less',
        files: '**/**.haml',
        tasks: ['haml', 'less'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
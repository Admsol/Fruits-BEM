module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    haml: {
      dist: {
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
        files: 'assets/**.less',
        files: '**/**.haml',
        tasks: ['haml', 'less:dev'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-haml2html');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
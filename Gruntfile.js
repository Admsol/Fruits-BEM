module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        haml: {
          dist: {
            files: {
              // 1:1 compile
              'temp/index.html': 'assets/views/src/index.haml',
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
            files: ['**/**.less', '**/**.haml'],
            tasks: ['haml', 'less', 'htmlmin'],
            options: {
              livereload: true,
            },
          },
        },
        htmlmin: {
          dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true
            },
            files: {
              'index.html': 'temp/index.html',
            },
          },
        }
    });

      grunt.loadNpmTasks('grunt-haml2html');
      grunt.loadNpmTasks('grunt-contrib-less');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-htmlmin');

      // Default task(s).
      grunt.registerTask('default', ['watch']);

    };
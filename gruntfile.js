module.exports = function(grunt) {
    grunt.initConfig({

        // Concat Files
        concat: {
            js: {
                src: ['./js/*.js'],
                dest: 'build/js/script.js'
            },
            css: {
                src: ['./css/*.css'],
                dest: 'build/css/style.css'
            }
        },

        // Less
       less: {
           development: {
               options: {
                   paths: ['less/']
               },
               files: {
                   "css/style.css" : "less/*.less"
               }
           }
       },

      //HTML Min
      htmlmin: {                                     
        dist: {                                      
          options: {                                
            removeComments: true,
            collapseWhitespace: false
          },
          files: {                                   
            'build/index.html' : './index.html'
          }
        }
      },

      // Image Min
      imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'img/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'build/img'
            }]
        }
      },

      // Watch
      watch: {
          options: {
            livereload: true
          },
          js: {
              files: 'js/*.js',
              tasks: 'js'
          },
          less: {
            files: 'less/*.less',
            tasks: 'less'
          }
      },

      // Express
      express: {
          all: {
              options: {
                  port: 9000,
                  hostname: 'localhost',
                  bases: ['.'],
                  livereload: true
              }
          }
      },
      
    });

    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');

    //Register Tasks
    grunt.registerTask('all', ['less', 'concat:js', 'concat:css', 'htmlmin', 'imagemin']);
    grunt.registerTask('server', ['express', 'watch']);
};
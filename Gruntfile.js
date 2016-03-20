//Gruntfile.js
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-htmlmin');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({
    shell: {
      mongodb: {
        command: 'mongod --dbpath ./data/db',
        options: {
          async: true,
          stdout: false,
          stderr: true,
          failOnError: true,
          execOptions: {
            cwd: '.'
          }
        }
      }
    },
    copy: {
      main: {
        files: [
          // CSS
          { expand: true, cwd: 'client/ext/bootstrap/dist/css', src: 'bootstrap.css', dest: 'public/css/' },
          { expand: true, cwd: 'client/ext/bootstrap/dist/css', src: 'bootstrap-theme.css', dest: 'public/css/' },
          { expand: true, cwd: 'client/ext/bootstrap/dist/css', src: 'bootstrap.min.css', dest: 'public/css/' },
          { expand: true, cwd: 'client/ext/bootstrap/dist/css', src: 'bootstrap-theme.min.css', dest: 'public/css/' },
          { expand: true, cwd: 'client/ext/angular/', src: 'angular-csp.css', dest: 'public/css/' },
          { expand: true, cwd: 'client/css', src: '**', dest: 'public/css/', filter: 'isFile' },

          // JS
          { expand: true, cwd: 'client/ext/bootstrap/dist/js', src: 'bootstrap.js', dest: 'public/js/' },
          { expand: true, cwd: 'client/ext/bootstrap/dist/js', src: 'bootstrap.min.js', dest: 'public/js/' },
          { expand: true, cwd: 'client/ext/jquery/dist', src: 'jquery.js', dest: 'public/js/' },
          { expand: true, cwd: 'client/ext/jquery/dist', src: 'jquery.slim.js', dest: 'public/js/' },
          { expand: true, cwd: 'client/ext/jquery/dist', src: 'jquery.min.js', dest: 'public/js/' },
          { expand: true, cwd: 'client/ext/jquery/dist', src: 'jquery.slim.min.js', dest: 'public/js/' },
          { expand: true, cwd: 'client/ext/angular/', src: 'angular.js', dest: 'public/js/' },
          { expand: true, cwd: 'client/ext/angular/', src: 'angular.min.js', dest: 'public/js/' },
          //{ expand: true, cwd: 'client/js', src: '**', dest: 'public/js/', filter: 'isFile' },

          // Fonts
          { expand: true, cwd: 'client/ext/bootstrap/dist/fonts', src: '*', dest: 'public/fonts/', filter: 'isFile' },

          // Views - Jade (Might no need for this, if we don't use Jade view engine
          // and build the html file from jade file directly.)
          //{ expand: true, cwd: 'client/views', src: '**', dest: 'public/views/' }
          
          // Imgs
          { expand: true, cwd: 'client/imgs', src: '**', dest: 'public/imgs/', filter: 'isFile'}
        ],
      },
    },
    jade: {
      build: {
        options: {
          pretty: true
        },
        files: {
          "public/index.html": "client/views/index.jade",
          "public/test.html": "client/views/test.jade",
          "public/movieDetails.html": "client/views/movieDetails.jade"
        }
      }
    },
    // take all the js files and minify them into app.min.js
    uglify: {
      build: {
        options: {
          compress: false,
          beautify: true,
          mangle: false
        },
        files: {
          'public/js/app.js': [
            'client/js/app.js'
            ]
        }
      }
    },
  });

  grunt.registerTask('default', ['jade', 'copy', 'uglify']);
}

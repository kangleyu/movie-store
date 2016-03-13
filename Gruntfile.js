//Gruntfile.js
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    // CSS
                    { expand: true, cwd: 'client/ext/bootstrap/dist/css', src: 'bootstrap.css', dest: 'public/css/' },
                    { expand: true, cwd: 'client/ext/bootstrap/dist/css', src: 'bootstrap-theme.css', dest: 'public/css/' },
                    { expand: true, cwd: 'client/ext/bootstrap/dist/css', src: 'bootstrap.min.css', dest: 'public/css/' },
                    { expand: true, cwd: 'client/ext/bootstrap/dist/css', src: 'bootstrap-theme.min.css', dest: 'public/css/' },
                    { expand: true, cwd: 'client/ext/angular/', src: 'angular-csp.css', dest: 'public/css/' },

                    // JS
                    { expand: true, cwd: 'client/ext/bootstrap/dist/js', src: 'bootstrap.js', dest: 'public/js/' },
                    { expand: true, cwd: 'client/ext/bootstrap/dist/js', src: 'bootstrap.min.js', dest: 'public/js/' },
                    { expand: true, cwd: 'client/ext/jquery/dist', src: 'jquery.js', dest: 'public/js/' },
                    { expand: true, cwd: 'client/ext/jquery/dist', src: 'jquery.slim.js', dest: 'public/js/' },
                    { expand: true, cwd: 'client/ext/jquery/dist', src: 'jquery.min.js', dest: 'public/js/' },
                    { expand: true, cwd: 'client/ext/jquery/dist', src: 'jquery.slim.min.js', dest: 'public/js/' },
                    { expand: true, cwd: 'client/ext/angular/', src: 'angular.js', dest: 'public/js/' },
                    { expand: true, cwd: 'client/ext/angular/', src: 'angular.min.js', dest: 'public/js/' },
                    { expand: true, cwd: 'client/js', src: '**', dest: 'public/js/', filter: 'isFile' },

                    // Fonts
                    { expand: true, cwd: 'client/ext/bootstrap/dist/fonts', src: '*', dest: 'public/fonts/', filter: 'isFile' },
                    
                    // Views - Jade (Might no need for this, if we don't use Jade view engine
                    // and build the html file from jade file directly.)
                    //{ expand: true, cwd: 'client/views', src: '**', dest: 'public/views/' }
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
                    "public/test.html": "client/views/test.jade"
                }
            }
        }
    });
    
    grunt.registerTask('default', ['copy', 'jade']);
}

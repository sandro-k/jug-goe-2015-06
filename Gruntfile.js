/**
 * Created by sko on 08.06.15.
 */



module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            files: 'talk/scss/main.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'talk/css/main.css': 'talk/scss/main.scss'
                }
            }
        },
        browserSync: {
            bsFiles: {
                src: ['talk/css/*.css', 'talk/*.html']
            },
            options: {
                server: {
                    watchTask: true,
                    baseDir: "talk",
                    index: "index.html",
                    routes: {
                        "/bower_components": "bower_components"
                    }
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};
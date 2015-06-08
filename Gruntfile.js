/**
 * Created by sko on 08.06.15.
 */



module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            files: 'talk/scss/*.scss',
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
                src: 'talk/css/*.css'
            },
            options: {
                server: {
                    watchTask: true,
                    baseDir: "./talk"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync']);

};
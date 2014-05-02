module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: true
                },
                files: {
                    'dist/css-popover.css': 'src/css-popover.scss'
                }
            }
        },

        autoprefixer: {
            all: {
                src: 'dist/css-popover.css'
            }
        },

        watch: {
            options: {
                livereload: true,
                atBegin: true
            },
            css: {
                files: ['src/*.scss'],
                tasks: ['css'],
            },
            markup: {
                files: ['demo/index.html'],
                tasks: []
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('css', ['sass', 'autoprefixer']);
    grunt.registerTask('default', ['watch']);

};
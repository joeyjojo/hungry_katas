module.exports = function(grunt) {

    var PORT = 8282,
        ROOT_DIR = __dirname,
        HOST = "127.0.0.1";

    var ADDRESS = 'http://' + HOST + ':' + PORT + '/';
    var KATAS = ADDRESS + 'katas/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jasmine: {
            test: {
                src: 'katas/**/script/*.js',
                options: {
                    specs: 'katas/**/test/*.spec.js',
                    keepRunner: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: PORT,
                    base: ROOT_DIR
                }
            }
        },

        watch: {
            files: [
                '**/*.js', '**/*.css', '**/*.html',
                '!**/node_modules/**'
            ],
            options: {
                livereload: true,
                interrupt: true
            }
        },

        open: {
            avoidingconditionals: {
                path: KATAS + "AvoidingConditionals/AvoidingConditionals.html"
            },
            constructorpatterns: {
                path: KATAS + "ConstructorPatterns/ConstructorPatterns.html"
            },
            jasmine: {
                path: KATAS + "Jasmine/JasmineSpec.html"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('dev', 'Runs impress presentation in dev mode allowing for live reload', function(kata){
        grunt.task.run('connect:server', 'open:' + kata, 'watch');
    });
};

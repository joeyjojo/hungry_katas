module.exports = function(grunt) {
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};

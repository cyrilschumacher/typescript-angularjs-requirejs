module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            default: {
                files: [
                    {
                        cwd: 'bower_components/',
                        expand: true,
                        src: [
                            'angular/*.js',
                            'angular-route/*.js',
                            'angular-route-styles/*.js',
                            'requirejs/*.js'
                        ],
                        dest: 'dist/scripts/vendors/'
                    }
                ]
            }
        },
        ts: {
            default: {
                src: ['src/**/*.ts'],
                outDir: 'dist/scripts/',
                options: {
                    target: 'es5'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask('default', ['copy', 'ts']);
};
module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      default: {
        files: [{
          cwd: 'src/',
          expand: true,
          src: 'configuration.json',
          dest: 'dist/javascript/'
        }, {
          cwd: 'bower_components/',
          expand: true,
          src: [
            'angular/*.js',
            'angular-route/*.js',
            'angular-route-styles/*.js',
            'jquery/dist/*.js',
            'requirejs/*.js'
          ],
          dest: 'dist/javascript/vendor/'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.registerTask('default', ['copy'])
}

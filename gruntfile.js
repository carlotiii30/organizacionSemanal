module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        exec: {
            typescript: 'tsc --noEmit lib/*.ts'
        }
    });
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('check', 'exec:typescript');

    // Default task(s).
    grunt.registerTask('default', function () {
        // ...
        console.log('This is the default task.');
    });
};
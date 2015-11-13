module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {
            options: {
                configFile: "node_modules/protractor/example/conf.js", // Default config file
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                webdriverManagerUpdate: true,
                args: {}
            },
            all: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "protractor.conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-protractor-runner');
    
    // Default task(s).
    grunt.registerTask('default', ['protractor']);

};
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/build/js/*.js']
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['_/build/js/*.js'],
				tasks: ['uglify']
			}, //script
			sass: {
				files: ['_/build/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['*.html']
			}
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports
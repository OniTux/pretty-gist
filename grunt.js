/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: 'package.json',
		meta: {
			banner: '/*! Pretty Gist - v0.1.5 *\n' +
				'* https://github.com/JoePettersson/pretty-gist *\n' +
				'* Copyright (c) 2012 Joe Pettersson *\n' +
				'* Licensed under the MIT License */'
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', 'src/jquery.prettygist.js'],
				dest: 'dist/jquery.prettygist.min.js'
			}
		},
		cssmin: {
			dist: {
				src: ['<banner:meta.banner>', 'src/prettygist.css'],
				dest: 'dist/prettygist.min.css'
			}
		},
		// jasmine: {
		// 	all: {
		// 		src:['specs/*.html'],
		// 		errorReporting: true,
		// 		timeout: 20000
		// 	}
		// },
		lint: {
			files: ['src/**/*.js']
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true
			}
		},
		uglify: {
			 mangle: {toplevel: true}
		}
	});

	// Default task.
	grunt.registerTask('default', 'lint min cssmin');
	// grunt.loadNpmTasks('grunt-jasmine-task');
	grunt.loadNpmTasks('grunt-css');
};


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
		cssmin: {
			dist: {
				src: ['<banner:meta.banner>', 'src/prettygist.css'],
				dest: 'dist/prettygist.min.css'
			}
		},
		jasmine: {
			all: {
                src: 'src/**/*.js',
                options: {
                    specs: 'specs/spec/*.js',
                    helpers: 'specs/helpers/*.js'
                }
			}
		},
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
				browser: true,
                globals: {
                    jQuery: true
                }
			},
            files: ['src/**/*.js']
		},
		uglify: {
            options: {
                 mangle: {toplevel: true}
            },
            build: {
                files: {
                    'dist/jquery.prettygist.min.js': ['<banner:meta.banner>', 'src/jquery.prettygist.js']
                }
            }
    	}
	});

	// Default task.
	grunt.registerTask('default', ['jshint', 'min', 'cssmin']);
    grunt.registerTask('min', ['uglify']);
	grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-css');
};


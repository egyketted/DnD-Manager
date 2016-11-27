"use strict";

//  grunt is a module exporting a single function
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-build-number');
    //  shows detailed time information about tasks for optimizing build times
    require('time-grunt')(grunt);

    //  automatically load tasks upon encountering them in the config, so .loadNpmTasks() methods are no longer necessary
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'                                       //  custom tasks must be given explicitly
    });

    //  configuration of all tasks
    grunt.initConfig({
		config: {                                                           //  define variables for later use
            src: 'public-src',
            dest: './'
		},
        buildnumber: {
            options: {
                field: 'buildnum'
            },
            files: ['package.json']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',                                      //  file containing rules to conform to
                reporter: require('jshint-stylish')                         //  optional module for reporting
            },
            all: {                                                          //  sub-task name (in this case there's just one, thence 'all')
                src: [                                                      //  array of source files to check
                    'Gruntfile.js',
                    '<%= config.src %>/js/{,*/}*.js'
                ]
            }
        },
		jscs: {
			options: {
				config: ".jscsrc"                                           //  file containing rules to conform to
			},
			src: "<%= config.src %>/js/{,*/}*.js"
		},
        clean: {                                                            //  deletes a folder to start new build
			options : {
				force: true
			},
            index: {
                src: ['<%= config.dest %>/index.html']
            },
            views:{                                                         //  sub-task name
                src: ['<%= config.dest %>/views/']                          //  source directory to be deleted
            },
            scripts: {
            	src: ['<%= config.dest %>/js/main.min.js']
            },
            styles: {
            	src: ['<%= config.dest %>/css/main.min.css']
            }
        },
		sass: {                                                             //    sass compiler - automatically creates sourcemaps
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: '<%= config.src %>/styles',
					src: ['main.scss'],
					dest: '<%= config.dest %>/styles',
					ext: '.min.css'
				}]
			}
		},
        /*
            prepare files between tags like
            <!-- build:js dist/app.min.js --> or <!-- build:css dist/style/css -->
                and
            <!-- endbuild -->
            for other tasks
            paths provided after build:[taksname] are used as relative paths for creating output files AND for replacing src attributes in the output template
        */
        useminPrepare: {
            html: '<%= config.src %>/index.html',                            //  source template with build comments
            options: {
                dest: '<%= config.dest %>'                                  //  destination folder to output processed assets - the source template must be copied separately (grunt-contribute-copy)
            }
        },
        concat: {                                                           //  concatenate files
            options: {
                separator: ';'
            }
            // concat configuration is provided by usemin-pepare
        },
        uglify: {
            // uglify configuration is provided by usemin-pepare
        },
        copy: {                                                             //  copy files to another location
            index: {
                cwd: '<%= config.src %>',
                src: ['index.html'],
                dest: '<%= config.dest %>',
                expand: true
            },
            views: {
                cwd: '<%= config.src %>/views',
                src: '**',
                dest: '<%= config.dest %>/views',
                expand: true
            },
            controllers: {
                cwd: '<%= config.src %>/js',
                src: '**',
                dest: '<%= config.dest %>/js',
                expand: true
            },
        },
        // change references for files prepared by usemin-pepare
        usemin: {
            html: '<%= config.dest %>/index.html'                           //  path where grunt-contrib-copy has copied template file - references within
        },
        watch: {                                                            //  watch files for changes and run tasks
            index: {
                files: [ '<%= config.src %>/*.html'],
                tasks: ['clean:index', 'copy:index']
            },
			views: {
                files: ['<%= config.src %>/views/{,*/}*.html'],
                tasks:['clean:views', 'copy:views']
			},
            scripts: {                                                      //  sub-task name
                files: ['<%= config.src %>/js/{,*/}*.js'],                         //  files watched
                tasks:['clean:scripts',
                       'clean:styles',
                       'useminPrepare',
                       'concat',
                       'uglify',
                       'usemin']
            },
            styles: {
                files: ['<%= config.src %>/styles/*.scss'],
                tasks:['clean:scripts',
                       'clean:styles',
                       'sass',
                       'useminPrepare',
                       'concat',
                       'uglify',
                       'usemin',
                       'buildnumber']
            }
        }
    });

    /**********************************************/

    //	define a list of tasks to be run
    grunt.registerTask('main', [
        'clean',
		'sass',
        'useminPrepare',
        'concat',
        'uglify',
        'copy',
        'usemin',
        'buildnumber'
    ]);

	grunt.registerTask('ghost', [
		'main',
		'watch'
	]);

    //	define default tasks to be run when calling 'grunt'
    grunt.registerTask('default', [
        'main'
    ]);
};

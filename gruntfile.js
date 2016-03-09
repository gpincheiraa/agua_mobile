module.exports = function(grunt) {

  //Variables que representan aspectos de la estructura de la aplicación
  var ANGULAR_MAIN_MODULE  = 'MedicionAgua',
      
      ANGULAR_TEMPLATES    = ['src/**/*.html'],
      TEMPLATE_CACHE_DEST  = 'src/js/templates.js',
      
      WIREDEP_APP_DEST     = 'index.html',
      WIREDEP_TEST_DEST    = 'karma.conf.js',
      JAVASCRIPT_ARRAY_SRC = ['src/**/*.js'],
      INDEX_URL            = 'http://localhost:9000/#/',

      FILES_FOR_WATCH      = ['index.html',
                              'gruntfile.js',
                              'test/**/*.js',
                              'src/**/*.js',
                              'src/**/*.css',
                              'src/**/*.html',
                              '!src/js/templates.js'],
      
      INJECTOR_ARRAY_SRC   = ['src/**/*.js', 'src/**/*.css'],

      TASKS_WHEN_FILES_CHANGES = ['ngtemplates',
                                  'injector'],
     
      DEFAULT_TASKS        = [  'ngtemplates',
                                'wiredep',
                                'injector',
                                //'shell:test',
                                'connect',
                                'open:dev',
                                'watch'];

  //Cargar paquetes de grunt
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');
  

  //Tareas de grunt
  grunt.registerTask('default', DEFAULT_TASKS);

  //Configuracion de tareas
  grunt.initConfig({
    wiredep: {
      app: {
        src: WIREDEP_APP_DEST ,
        ignorePath: /^\/.*/
      },
      test: {
        devDependencies: true,
        src: WIREDEP_TEST_DEST,
        ignorePath:  /\.\.\//,
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      }
    },
    injector: {
      options: {
        addRootSlash: false
      },
      local_dependencies: {
        files: {
          'index.html' : INJECTOR_ARRAY_SRC
        }
      }
    },
    ngtemplates: {
      app: {
        src: ANGULAR_TEMPLATES,
        dest: TEMPLATE_CACHE_DEST,
        options: {
          module: ANGULAR_MAIN_MODULE,
          htmlmin: {
            collapseBooleanAttributes:      false,
            collapseWhitespace:             false,
            removeAttributeQuotes:          false,
            removeComments:                 true,
            removeEmptyAttributes:          false,
            removeRedundantAttributes:      false,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  false
          }
        }
      }
    },
    shell: {
      test: {
        command: 'karma start'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          open: false
        }
      }
    },
    watch: {
      project: {
        files: FILES_FOR_WATCH,
        options: {
          livereload: true,
        },
        tasks: TASKS_WHEN_FILES_CHANGES
      }
    },
    open: {
      dev: {
        url: INDEX_URL,
        app: function() {
          return process.platform === "linux"? 'Chromium' : 'Google Chrome';
        }
      }
    }
  });

};
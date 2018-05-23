module.exports = function(grunt){
	var serveStatic = require('serve-static');
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		watch: {
			options: { livereload:true },
			files:['src/**'],
			tasks:[]
		},
		express: {
			all: {
				options: {
					port:8080,
					hostname:'localhost',
					bases:['./src'],
					livereload:true
				}
			}
		},
		middleware: function(connect, options) {
      var middlewares;
      middlewares = [];
      middlewares.push( modRewrite( ['^[^\\.]*$ /index.html [L]'] ) );
      options.base.forEach( function( base ) {
        return middlewares.push( serveStatic( base ) );
      });
      return middlewares;
    }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('server',['express','watch']);

};

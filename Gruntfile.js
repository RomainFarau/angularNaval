module.exports = function(grunt){
	
	

	/*grunt.registerTask('hello','Hello Nantes',function(){
		console.log('Hello Grunt, depuis Nantes!')
	});

	grunt.registerTask('etape1','etape 1 Visite Nantes',function(){
		console.log('Etape 1 de la visite de Nantes!')
	});
	
	grunt.registerTask('etape2','etape 2 Visite Nantes',function(){
		console.log('Etape 2 de la visite de Nantes!')
	});

	grunt.registerTask('etape3','etape 3 Visite Nantes',function(){
		console.log('Etape 3 de la visite de Nantes!')
	});

	grunt.registerTask('visite',['etape1','etape2','etape3']);

	grunt.registerTask('default', 'hello');




	grunt.initConfig({
		ville:{
			configNantes : 'Nantes',
			configRennes : 'Rennes'
		}
	});

	grunt.registerTask('nantes','ville:configNantes');
	grunt.registerMultiTask('ville','Ville',function(){
		console.log('Hello Grunt, depuis %s! avec la config %s', this.data, this.target);
	});*/
	grunt.initConfig({
		/*clean:{
		dev: ['tmp']
		},*/
		copy: {
			dev:{
				files:[{
					expand:true,
					src:['public/**/*.*',
						'public/db.json'],
					dest: 'tmp/'
				},
				{
					expand: true,
					flatten: true,
					src:['bower_components/**/angular.min.js',
					'bower_components/**/bootstrap.min.js',
					'bower_components/**/angular-route.min.js',
					],
					dest:'tmp/public/lib/'
				}]
				//files: {'tmp/' : ['public/**/*.js','public/**/*.css','public/**/*.html','public/index.html']},
			}
		},
		connect: {
			dev:{
				options:{
					hostname:'localhost',
					open :true,
					base:'tmp/public',
					port:3000,
					livereload: true
					
				}
			}
		},
		watch: {
			dev:{
				files: ['tmp/public/**/*.*','tmp/public/index.html'],
				tasks : ["copy"],
				options: {
					livereload: true
				}
			}
		},
		karma: {
			dev:{
				configFile: 'firstKarmaConfig.js',
				options: {	
					port: 3000
			    } 
			}
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('server',['copy','connect','watch']);


	//grunt.registerTask('bowerCopy')
}
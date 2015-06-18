"use strict"
angular.module("navalModule",['ngRoute'])
.config(function ($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: 'view/home.html', //Ici, mieux d'envoyer une page html : templateUrl: "truc.html"
		controller: 'ViewController',
		controllerAs: 'viewCtrl'
	})
	.when("/new", {
		templateUrl: 'view/formulaire.html',  //Ici, mieux d'envoyer une page html
		controller: 'FormulaireCtrl',
		controllerAs: 'formCtrl'
	})
	.when("/test/:id", {
		template: 'ici',  //Ici, mieux d'envoyer une page html
		controller: function(){
			
		},
		controllerAs: 'newCtrl'
	})
	.when("/prepare/:id", {
		templateUrl: 'view/prepare.html',
		controller: 'prepareController',
		controllerAs: 'prepareCtrl'
	})
	.otherwise({
		redirectTo: "/"
	});
})
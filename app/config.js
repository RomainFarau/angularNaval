"use strict"
angular.module("naval",['ngRoute'])
.config(function ($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: '../view/listeJeux.html', //Ici, mieux d'envoyer une page html : templateUrl: "truc.html"
		controller: 'ViewCtrl',
		controllerAs: 'viewCtrl'
	})
	.when('/new', {
		templateUrl: '../index.html',  //Ici, mieux d'envoyer une page html
		controller: 'formulaireCtrl',
		controllerAs: 'formCtrl'
	})
})
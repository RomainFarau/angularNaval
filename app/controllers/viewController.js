"use strict";
angular.module("navalModule")
.controller('ViewController', function(GameService){
	var viewCtrl=this;

	function fetchGames(){
		GameService.getAll()
			.then(function (games){
				viewCtrl.games=games;
		})
	}
	fetchGames();

	viewCtrl.join = function (game) {
		GameService.join(game)
			.then(function (games){
				fetchGames();
			})
	}
})
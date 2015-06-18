"use strict";
angular.module("navalModule")
.controller('prepareController', function(GameService, $routeParams){
	var prepareCtrl = this;
	console.log("hop");
	console.log($routeParams);
	GameService.get($routeParams.id).then(function (game){
		console.log(game);
		prepareCtrl.game=game;
		prepareCtrl.rows = new Array(game.battlefieldSize.height);
		prepareCtrl.cols = new Array(game.battlefieldSize.width);
	})
})
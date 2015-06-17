"use strict";



angular.module("navalModule")
.controller('formulaireCtrl', function(GameService){
	var formCtrl=this;

	/*$http({
			method: "GET",
			url: "http://192.168.229.21:3000/games"
		}).then(
			function (result) {
				formCtrl.games=result.data
			},
			function (error) {
				console.log("error",error)
			}
		)*/
	function fetchGames(){
		GameService.getAll()
			.then(function (games){
				formCtrl.games=games;
		})
	}

	/*$scope.$watch("formCtrl", function(){
		console.log("hangement", ov, on);
	})*/
	//console.log($http);

	/*formCtrl.battleShips=[
		{fleetSize:0, label:"1 bateau"},
		{fleetSize:1, label:"2 bateaux"},
		{fleetSize:2, label:"3 bateaux"},
		{fleetSize:3, label:"4 bateaux"},
		{fleetSize:4, label:"5 bateaux"}];*/

	formCtrl.battleShips=GameService.fleetSizeValues

	formCtrl.game={
		battleShips: formCtrl.battleShips[0].value
	}

	this.addGame=function(form){
console.log("hopp", form);
		if(form.$invalid) return;
		var clone=angular.copy(formCtrl.game);
		formCtrl.games.push(clone);

		/*$http({
		method: "POST",
		url: "http://192.168.229.21:3000/games",
		data : clone
		})*/
		GameService.save(clone);
	}
	console.log(formCtrl.games)

	
})
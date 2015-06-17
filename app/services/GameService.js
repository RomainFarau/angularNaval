"use strict"

angular.module("navalModule")
.factory("GameService", function($http){
	return {
		version: "1.0",

		getAll: function () {
					var p = $http.get("http://192.168.229.21:3000/games")
						.then(function (response){
							return response.data;
						})
					return p;
		},

		/*setUser: function () {
			return $http.post("http://192.168.229.21:3000/games")
						.then(function (response){
							return response.data;
						})
		}*/

		save: function (game) {
			return $http.post("http://192.168.229.21:3000/games",game);
		},
		
		fleetSizeValues:[
			{fleetSize:0, label:"1 bateau"},
			{fleetSize:1, label:"2 bateaux"},
			{fleetSize:2, label:"3 bateaux"},
			{fleetSize:3, label:"4 bateaux"},
			{fleetSize:4, label:"5 bateaux"}
		]

	}
})
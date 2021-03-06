"use strict"

angular.module("navalModule")
.factory("GameService", ['$http', function($http){
	return {
		version: "1.0",
		pseudo: "Romain",
		apiUrl: "http://localhost:3000/games",
		getAll: function () {
					
			return $http.get(this.apiUrl)
				.then(function (response){
					return response.data;
				})
				.then(function (games){
					return games.filter(function (game){
						return !game.user2 ||
								(game.user1.pseudo === this.pseudo
								 || game.user2.pseudo === this.pseudo )
					}.bind(this))
				}.bind(this))
		},
		get: function (id){
			return $http.get(this.apiUrl+"/"+id)
				.then(function(result){
					return result.data;
				})
		},
		/*setUser: function () {
			return $http.post("http://192.168.229.21:3000/games")
						.then(function (response){
							return response.data;
						})
		}*/

		save: function (game) {

			game.user1.pseudo=this.pseudo //A faire ici pas ailleurs
			return $http.post(this.apiUrl,game);
		},
		
		join: function (game) {
			game.user2 = {
				pseudo: this.pseudo
			}
			return $http.put(this.apiUrl+"/"+game.id,game)
		},
		fleetSizeValues:[
			{fleetSize:0, label:"1 bateau"},
			{fleetSize:1, label:"2 bateaux"},
			{fleetSize:2, label:"3 bateaux"},
			{fleetSize:3, label:"4 bateaux"},
			{fleetSize:4, label:"5 bateaux"}
		]

	}
}])
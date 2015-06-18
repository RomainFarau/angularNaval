"use strict";
angular.module("navalModule")
.controller('prepareController', function(GameService, $routeParams){
	var prepareCtrl = this;
	console.log("hop");
	console.log($routeParams);

	var currentBoat={
		id: 1,
		positions: []
	};

	prepareCtrl.battlefield=[];
	GameService.get($routeParams.id).then(function (game){
		console.log(game);
		prepareCtrl.game=game;
		prepareCtrl.rows = new Array(game.battlefieldSize.height);
		prepareCtrl.cols = new Array(game.battlefieldSize.width);
		prepareCtrl.boats = new Array(game.fleetSize);

		for(var i=0;i<game.battlefieldSize.height;i++){
			prepareCtrl.battlefield[i]=[];
			for(var j=0;j<game.battlefieldSize.width;j++)
				prepareCtrl.battlefield[i][j]=0;
		}
	})

	prepareCtrl.add = function(j,i){
		if(prepareCtrl.battlefield[i][j]===0 && currentBoat.id<=prepareCtrl.game.fleetSize){
			if(currentBoat.positions.length === 0){
				prepareCtrl.battlefield[i][j]=currentBoat.id;
				currentBoat.positions.push([i,j]);
				return;
			}else if(currentBoat.positions.length===2){
				return;
			}else if(currentBoat.positions.length===1){
				var i0 = currentBoat.positions[0][0];
	            var j0 = currentBoat.positions[0][1];
	            if ((i0 === i && ( j0 === j-1 || j0 === j+1)) ||
	                (j0 === j && ( i0 === i-1 || i0 === i+1))) {
	                prepareCtrl.battlefield[i][j] = currentBoat.id
	                currentBoat.positions.push([i, j])
	                currentBoat.id++;
	                currentBoat.positions = [];
	                return
	            }
			}
		}else{
			return;
		}

		prepareCtrl.checkReady = function(){
			if(!prepareCtrl.game){
				return false;
			}
			return currentBoat.id>=prepareCtrl.game.fleetSize
		}
	}
})
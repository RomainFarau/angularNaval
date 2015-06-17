"use strict";

angular.module("navalModule")
.controller('formulaireCtrl', function(){
	var ctrl=this;
	ctrl.games=[];

	

	ctrl.battleShips=[
		{number:1,label:'1 bateau'},
		{number:2,label:'2 bateaux'},
		{number:3,label:'3 bateaux'},
		{number:4,label:'4 bateaux'},
		{number:5,label:'5 bateaux'},
	];

	ctrl.game={
		battleShips: ctrl.battleShips[0].number
	};

	this.addGame=function(form){
		if(form.$invalid) return;
		var clone=angular.copy(ctrl.game);
		console.log(ctrl.game);
		ctrl.games.push(clone);
	}

	
})
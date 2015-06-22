"use strict"
angular.module("navalModule")
.directive("dtaPhoto", function(){
	return {
		restrict: "E",
		transclude: true,
		//template: "ici bientot une photo <p ng-transclude>{{toto}}</p>",
		template: "ici bientot une photo",
		scope: {
			borderWidthScope: "=",
			//Lien bidirectionnel. Wow. Les majuscules dans les directives deviennent -minuscule en html 
			//str="@" 
			e: "&"
		},
		link: function (scope, element, attrs){//Surtout pas de $!
			/*scope.$apply -> on passe en DOM, on sort d'angular
			element.on('click', function() {
				scope.$apply(function(){
					scope.e()
				})
			})*/
			element.css("borderStyle","solid")
			element.css("display","block")
			element.css("color",attrs.couleur || 'blue')
			scope.$watch('borderWidthScope', function(){
					element.css("borderWidth",scope.borderWidthScope + "px")
				}
			)
		}

	}
})

//require : on s'assure que la directive soit lié à un type de balise (exemple : require : "h1")


.controller("dtaPhotoController", function(){
	console.log("Je suis dans le controller")
})
.factory("DtaPhotoService", function(){

})
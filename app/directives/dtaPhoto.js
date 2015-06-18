"use strict"
angular.module("navalModule")
.directive("dtaPhoto", function(){
	return {
		restrict: "E",
		template: "ici bientot une photo",
		link: function (scope, element, attrs){//Surtout pas de $!
			
			element.css("borderStyle","solid")
			element.css("display","block")
			element.css("color",attrs.couleur || 'blue')
			scope.$watch('borderWidth', function(){
					element.css("borderWidth",scope.borderWidth + "px")
				}
			)
		}

	}
})

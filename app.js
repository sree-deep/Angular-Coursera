(function (){
	'use strict';
	
	angular.module('letterCalculator',[])
	
	.controller('myController', ['$scope','$filter',controller_function]);
					
	
		function controller_function($scope,$filter)
		{
			
			$scope.value=0;
			$scope.name="";
			$scope.image_name="pup.jpeg";
			
			$scope.count=function()
			{
				var tot=$scope.name.length;
				$scope.value=tot;
			};
			
			$scope.upp=function()
			{
				$scope.name=$filter('uppercase')($scope.name);
			};
			
			$scope.flip=function()
			{
				$scope.image_name="rap.jpg";
			};
	
		}
})();
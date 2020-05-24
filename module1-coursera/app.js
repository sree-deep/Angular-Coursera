(function (){
	'use strict';
	
	angular.module('LunchCheck',[])
	
	.controller('LunchCheckController', ['$scope','$filter',controller_function]);
					
		//Controller
		function controller_function($scope,$filter)
		{
			
			$scope.items="";
			$scope.response="";
			$scope.img_name="nibbles.jpg"
			
			//Function to do stuff on button click
			$scope.fun=function()
			{
				if($scope.items.length==0)
				{
					$scope.response="Enter some items please!";
					$scope.img_name="nibbles.jpg";
				}
				else
				{
					//didnt want to use 'split', implemented in naive way
					var count=0;
					for(var i=0;i<$scope.items.length;i++)
					{
						if($scope.items[i]==','){count++;}
					}
					
					if(count+1<=3){$scope.response="Enjoy yourself :D";$scope.img_name="tom.jpg";}
					else{$scope.response="Too much for your health :(";$scope.img_name="tuffy.jpg"}
					
					
				}
			}
	
		}
})();
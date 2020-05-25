(function (){
	'use strict';
	
	angular.module('Mod2',[])
	
	.controller('myController', ['$scope','$filter','$timeout',controller_function])
	
	.filter('loves',LovesFilter);
					
	
		function controller_function($scope,$filter,$timeout)
		{
			$scope.name="";
			$scope.msg="hi how";
			$scope.count=0;
			$scope.l1=['a','b','c'];
			$scope.l2=[
			{name:'a',quantity:4},
			{name:'b',quantity:4},
			{name:'c',quantity:10}
			];
			
	

			/*$scope.say=function()
			{
				$scope.msg=lovesFilter($scope.msg,":)");
			};
			$scope.incr=function ()
			{
				setTimeout(function(){$scope.count++;console.log("incremented!");$scope.$digest();},2000);
				
			};
			$scope.incr=function ()
			{
				$timeout(
				function()
				{
					$scope.count++;
					console.log("hi");
				}
				,2000);
				
			}; 
			
			
			list ng-repeat add
			$scope.add=function()
			{
				$scope.l2.push({name:$scope.newname,quantity:$scope.newquan});
			}
			*/
			
		}
		
		function LovesFilter()
		{
			return function (input,arg1)
			{
				
				input=input || "";
				input=input.replace("how are you?",arg1);
				
				return input;
			};
		}
})();
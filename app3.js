(function(){
	'use strict';
	
	angular.module('Demo',[])
	.controller('MyController',['MyService',MyController])
	.service('MyService',['$q','CakeService',MyService])
	.service('CakeService',['$q','$timeout',CakeService]);
	
	
	function MyController(MyService)
	{
		var list=this;
		
		list.items=MyService.get_items();
		
		list.add=function(name,quantity)
		{
			MyService.add(name,quantity);
		};
	}
	

	function MyService($q,CakeService)
	{
		var service=this;
		var items=["orange"];
		
		service.get_items=function()
		{
			return items;
		};
		
		service.add=function(name,quantity)
		{
			
			var promise=CakeService.checkname(name);
			var quan_promise=CakeService.checkquan(quantity);
			
			$q.all([promise,quan_promise])
		
			.then(
				
				function(result)
				{
					if(name.length!=0)
					{
					items.push(name);
					}
					
					console.log("quantity ok!!");
				},
				
		
			)
	
			.catch(
				
				function(errorResponse)
				{
					console.log(errorResponse.message);
				}
			
			);
			
			
			
		};
		
	}
	
	
	function CakeService($q,$timeout)
	{
		var cake=this;
		
		cake.checkname=function(name)
		{
			
			var deferred=$q.defer();
			var result=
			{
				message:""
			}
			
			$timeout(
				
				function()
				{
					if(name.toLowerCase().indexOf('cake')==-1)
					{
						deferred.resolve(result);
					}
					else
					{
						result.message="No cakes allowed!";
						deferred.reject(result);
					}
				},
				
				3000
			
			);
			
			return deferred.promise;
		};
		
		
		cake.checkquan=function(quantity)
		{
			var deferred=$q.defer();
			var x=quantity;
			var result=
			{
				message:""
			}
			
			$timeout(
				
				function(quantity)
				{
					
					if(x<5)
					{
					
						deferred.resolve(result);
					}
					else
					{
						result.message="Too many!";
						
						deferred.reject(result);
					}
				},
				
				1000
			
			);
			
			return deferred.promise;
		};
	}

})();
(function(){
	'use strict';
	
	angular.module('MyApp')
	.controller('MyController',['MyService',MyController])
	.service('MyService',['$http','apipath',MyService])
	.constant('apipath',"http://davids-restaurant.herokuapp.com");
	
	
	function MyController(MyService)
	{
		var list=this;
		
		var promise=MyService.get_items();
		
		promise
		.then(
			function(response)
			{
				list.items=response.data;
			}
		)
		.catch(
			function(error)
			{
				console.log("something went wrong");
			}
		);
		
		list.get_cat=function(short_name)
		{
			console.log(short_name);
			
			var promise=MyService.get_category(short_name);
		
				promise
				.then(
					function(response)
					{
						console.log(response.data);
					}
				)
				.catch(
					function(error)
					{
						console.log("something went wrong");
					}
				);
			
		};
		
		
	}
	

	function MyService($http,apipath)
	{
		var service=this;
		
		service.get_items=function()
		{
			var response=$http({
				
				method:"GET",
				url:(apipath+"/categories.json")
			});
			
			return response;
		};
		
		service.get_category=function(short_name)
		{
			var response=$http({
				
				method:"GET",
				url: (apipath+"/menu_items.json"),
				params:
				{
					category:short_name
				}
			});
			
			return response;
			
		};
	
	}
	
	
	

})();
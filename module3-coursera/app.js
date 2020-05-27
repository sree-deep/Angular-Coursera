(function()
{
	'use strict';
		angular.module('NarrowItDownApp',[])
		.controller('NarrowItDownController',['MenuSearchService',NarrowItDownController])
		.service('MenuSearchService',['$http','apipath',MenuSearchService])
		.constant('apipath',"http://davids-restaurant.herokuapp.com")
		.directive('foundItems',FoundItems);
	
		function NarrowItDownController(MenuSearchService)
		{
			var list=this;
			list.items=[];
			
			list.get_items=function(searchTerm)
			{
				
				if(searchTerm!==undefined)
				{
					
					list.error_msg="";
					var promise=MenuSearchService.get_items(searchTerm);
				
					promise
					.then(
						function(response)
						{
							if(response.length==0)
							{
								list.error_msg='Nothing found!';
							}
							else
							{
							list.items=response;
							}
						}
					)
					.catch(
						function(error)
						{
							list.error_msg="Nothing found!";
						}
					);
					
				}
				else 
				{
						list.error_msg="Nothing found;"
				}
				
			}
			
			list.remove=function(shortname)
			{
				
				for(var i=0;i<list.items.length;i++)
				{
					if(list.items[i].short_name==shortname)
					{
						list.items.splice(i,1);
					}
				}
			};
			
		
		}
		
		function MenuSearchService($http,apipath)
		{
			var service=this;
			
			service.get_items=function(searchTerm)
			{
				
				return $http({
					
					method:"GET",
					url:(apipath+"/menu_items.json")
				})
				.then(
				
				function(response)
				{
					var x=response.data;
					var founditems=get_desc(x.menu_items,searchTerm);
					
					return founditems;
				});
			
			};
			
			function get_desc(list,searchTerm)
			{
				var newList = [];
				
				  for(var i = 0; i < list.length; i++) {
					if(list[i].description.indexOf(searchTerm) > 0) {
					  newList.push(list[i]);
					}
				  }

				  return newList;
			};
			
		}
		
		
		function FoundItems()
		{
			var ddo={
				restrict:'E',
				templateUrl:'listitem.html',
				scope:{
					list:'=myList',
				}
			
			};
			return ddo;
		}
	
})();
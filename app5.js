(function (){
	'use strict';
	
	angular.module('MyApp',['ui.router'])
	
	angular.module('MyApp')
	.config(RoutesConfig);
	
	RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];

	function RoutesConfig($stateProvider,$urlRouterProvider)
	{
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
		.state('home',
		{
			url:'/',
			templateUrl:'listitem1.html'
		})
		
		.state('main',
		{
		
			url:'/main',
			templateUrl:'listitem2.html',
			resolve:
			{
				items:['MyService',function(MyService)
				{
					return MyService.get_items();
				}]
			}
		});
	}

	
})();
(function(){
	'use strict';
	
	angular.module('MyApp',[])
	.controller('FormController',FormController);
	
	function FormController()
	{
		var reg=this;
		reg.completed=0;
		
		reg.submit_form=function()
		{
			reg.completed=1;
		};
	}
	
})();
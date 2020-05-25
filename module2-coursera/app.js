(function (){
	'use strict';
	
	angular.module('ShoppingListCheckOff',[])
	
	.controller('ToBuyController', ['ShoppingListCheckOffService',ToBuyController])
	.controller('AlreadyBoughtController',['ShoppingListCheckOffService',AlreadyBoughtController])
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
	
	
	function ToBuyController(ShoppingListCheckOffService)
	{
		var to_buy=this;
		
		to_buy.items=ShoppingListCheckOffService.to_buyi();
		
		
		to_buy.add=function(value)
		{
			ShoppingListCheckOffService.add(value);
		}
		
		to_buy.msg=function()
		{
			var t=ShoppingListCheckOffService.em();
			to_buy.m=t;
		};
	}

	
	function AlreadyBoughtController(ShoppingListCheckOffService)
	{
		var bought=this;
		bought.items=ShoppingListCheckOffService.boughti();
		
		bought.msg=function()
		{
			var t=ShoppingListCheckOffService.em2();
			if(t)
			{
				bought.m="Nothing Bought yet!";
			}
			return t;
		
		};
		
	}
	
	
	function ShoppingListCheckOffService()
	{
		var service=this;
		var items=
		[
			{
				name:"Milk",
				quantity:2
			},
			{
				name:"Cookie Box",
				quantity:3
			},
			{
				name:"Orange",
				quantity:5
			},
			{
				name:"Perfume",
				quantity:1
			},
			{
				name:"Tape",
				quantity:1
			}
		
		];
		
		var bitems=[];
		
		service.to_buyi=function()
		{
			return items;
	
		};
		
		service.boughti=function()
		{
			return bitems;
			
		};
		
		service.add=function(n)
		{
		
			var x=items.splice(n,1);
			bitems.push({name:x[0].name,quantity:x[0].quantity});
	
		};
		
		service.em=function()
		{
			var t="";
			if(items.length>0)
			{
				return t;
			}
			else
			{
				return "Everything is bought! see you soon";
			}

		};
		
		service.em2=function()
		{
			if(bitems.length>0)
			{
				return 0;
			}
			else
			{
				return 1;
			}
		};
		
	}
	
	
	
})();
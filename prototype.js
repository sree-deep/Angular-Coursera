/*
var car=
{
	color:"red",
	obj:
	{
		type:"sports"
	},
	drive:function()
	{
		console.log("driving");
	}
	
};

var chile=Object.create(car);
console.log(chile.color);
console.log(chile.obj.type);
console.log(chile.drive());

console.log(car.color);
console.log(car.obj.type);
console.log(car.drive());

console.log(chile);
console.log(car);

chile.color="pink";
chile.obj.type="regular";

console.log(chile.color);
console.log(chile.obj.type);
console.log(chile.drive());

console.log(car.color);
console.log(car.obj.type);
console.log(car.drive());

console.log(chile);
console.log(car);


var grand=Object.create(chile);

console.log(chile.color);
console.log(chile.obj.type);
console.log(chile.drive());

console.log(grand.color);
console.log(grand.obj.type);
console.log(grand.drive());

console.log(chile);
console.log(grand);



function dog(name)
{
	this.name=name;
	console.log(this);
}


dog("tim");
var mydog=new dog("max");

console.log(mydog);
*/
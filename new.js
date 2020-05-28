//create object
obj={
	fueltype:"xxx"
}

//log its fueltype
console.log("before:"+obj.fueltype);

//pass obj as a parameter to function
function greenEnergy(obj)
{
	obj.fueltype="avacado";
}

//call function with object as parameter
greenEnergy(obj)


//log its fueltype
console.log("after:"+obj.fueltype);
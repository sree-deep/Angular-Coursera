var newarray=[1,2,3,4,5,6]
console.log(newarray)

var filterarr=newarray.filter(
function(value)
{
	return value>=5;
}
);

console.log(filterarr);


var l=['milk','cookies','juice','pepper','tea'];

var k='pepper';

var x=l.filter(

	function(value)
	{
		return value.indexOf(k)!=-1;
	}

);

console.log(x);
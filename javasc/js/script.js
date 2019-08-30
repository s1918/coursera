/*var string = "hello";

string = string + " world";
string += " World";

console.log(string+ "!");

console.log((5 + 3) * 12);
console.log(undefined / 5);
function test1 (a) {
	console.log(a / 5);
}

test1(10);

var x = 4, y = 2;
if (x == y) {
	console.log("same")
} else {
	console.log("no")
}



if ( 2 == a || 2 > 3) {
	console.log("tru")
} else {
	console.log("no")
}





function a() {
  return { 
      name: "Yaakov"
  };
}

console.log(a());
console.log(b());


var sum = 0;
for (var i = 0; i <= 10; i++) {
	console.log(i);
	sum = sum + i;
}

console.log(sum);*/

/*
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo = "hi"
company.ceo.firstname = "mark";
company.ceo.favcolor = "blue";




console.log(company);
console.log("Company CEO name is: " + company.ceo.firstname);*/

/*var facebook = {
	ceo: {
		name: "mark",
		favcolor: "blue"
	},
	name: "fb",
	"stock is": 2

};

console.log(facebook);*/

function multiply(x, y) {
	return x * y; 
}
multiply.version = "v.1.0";
console.log(multiply.version);

function makemultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	}
	return myFunc;
}

var multiplyBy3 = makemultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makemultiplier(2);
console.log(doubleAll(100));

function doOperationOn(x, operation) {
	return operation(x);
	}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);
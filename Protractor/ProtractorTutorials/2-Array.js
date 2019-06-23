var a = 4;
var b = ["Hi","Hello",3];
console.log(a);
console.log(b);

console.log(b.length+ " is size of Array");
for(i=0;i<b.length;i++){
	console.log(b[i]);
}

var c = new Array();

c[0] = "C-Hello";
c[1] = "C-Hi";
c[2] = "C-Bye";
c[3] = 4;

console.log(c.length+ " is size of C - Array");
for(i=0;i<c.length;i++){
	console.log(c[i]);
}
console.log("In Reverse")

for(var j=c.length-1;j>=0;j--){
	console.log(c[j]);
}
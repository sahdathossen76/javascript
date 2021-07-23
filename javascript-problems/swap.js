// var a = 7;
// var b = 9;
// console.log("before swap: a =", a, "b =", b);
// var temp = a;
// a = b;
// b = temp;
// console.log("after swap: a =", a, "b =", b);

var x = 9;
var y = 15;
// x=x+y;
// y=x-y;
// x=x-y;
xy=x*y;
x=xy/x;
y=xy/x;
console.log("after swap: x =", x, "y =", y);

var p = 4;
var q = 2;

[p,q] = [q,p];
console.log("after swap: p =", p, "q =", q);


function factorial(n){
    var i = 1;
    var fact = 1;
    while (i <= n){
        fact = fact * i;
        // console.log(i,  factorial);
        i++;
    }
    return fact;
}
// console.log(i, factorial);

var result =factorial(6);
console.log(result);


  
// function factorial(num){
//     var fact = 1;
//     for(var i = 1; i<= num; i++){
//         fact = fact * i;
//         // console.log(i, fact);
//     }
//     return fact;
// }
// var result = factorial(10);
// console.log('result', result);



function factorialRecursive(num){
    if(num == 1){
        // console.log(num);
        return 1;
    }
    else{
        // console.log(num, num-1);
        return num * factorialRecursive(num - 1);
    }
}

var result = factorialRecursive(10);
console.log('result', result);

function fibonacci(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * fibonacci(n-1);
    }
}
var result =fibonacci(0);
console.log(result);
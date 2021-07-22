function fibonacci(n){
    var fact = 1;
    for (var i = 1; i<=n; i++) {
        fact = fact * i;
    }
    return fact;
}

var result = fibonacci(5);
console.log(result);


//  fibo [2] = fibo[2-1] + fibo [2-2];
//  fibo [3] = fibo[3-1] + fibo [3-2];
//  fibo [n] = fibo[n-1] + fibo [n-2];
//  fibo [i] = fibo[i-1] + fibo [i-2];



// var fibo = [0, 1];


// for (var i = 2; i <= 10; i++){
//     fibo[i] = fibo[i - 1] + fibo [i - 2];
//     // console.log(fibo [i] = fibo[i-1] + fibo [i-2]);
// }

// console.log(fibo);


function fibonacci(n){

    var fibo = [0, 1];

    for (var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo [i - 2];
        // console.log(fibo [i] = fibo[i-1] + fibo [i-2]);
    }
    return fibo;  
}
var result = fibonacci(12);
console.log(result);



function fibonacci(n){

    var fibo = [0, 1];
    var i = 2;

    while (i <= n){

        fibo[i] = fibo[i - 1] + fibo [i - 2];

        i++;
    }
    return fibo;
}

var result =fibonacci(12);
console.log(result);

var n = 128;

for(i = 2; i < n; i++){
    // console.log(i, n % i);
    if(n % i== 0){
        console.log('your number is not a prime number');
        break;
    }
    else{
        console.log('your number is a prime number');
        break;
    }
}


function primeNumber(n){
    for (i = 2; i < n; i++){
        if(n % i == 0){
            return 'your number is not a prime number';
        }
    }
    return 'your number is a prime number';
}

var result = primeNumber(1);
console.log(result);


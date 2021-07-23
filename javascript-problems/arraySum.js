// var numbers = [45, 81, 63, 95, 65, 21, 23, 51, 61, 105];

// var sum = 0;

// for ( var i = 0; i < numbers.length; i++){
//     var element = numbers[i];

//     sum = sum + element;
// }

// console.log("total value: ", sum);



function getArraySum(numbers){
    var sum = 0;
    for ( var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 81, 63, 95, 65, 21, 23, 51, 61, 105];
var result = getArraySum(numbers);
console.log("total value: ", result);
var total = getArraySum([101, 107]);
console.log("total value: ", total);
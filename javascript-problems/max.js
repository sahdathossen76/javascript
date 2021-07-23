 var num1 = 1000;
 var num2 = 100000;
 var num3 = 400;

//  if(num1 > num2){
//      if(num1 > num3){
//         console.log('num1 is bigger');
//      }
//      else{
//         console.log('num3 is bigger');
//      }
//  }
//  else{
//      if(num2 > num3){
//         console.log('num2 is bigger');
//      }
//      else{
//         console.log('num3 is bigger')
//      }
//  }

var resultMax = Math.max(num1, num2, num3);

console.log('the bigger number is', resultMax);

// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
var num1 = Math.round(7000.2);
var num2 = Math.round(6000);
var num3 = Math.round(5000);
let bigger;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    bigger = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    bigger = num2;
}
else {
    bigger = num3;
}

// display the result
console.log("The bigger number is " + bigger);
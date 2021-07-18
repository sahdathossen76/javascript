
 function inchToFeet(inch){
    var feet = inch/2;
    return feet;
 }

//  var myFeet = inchToFeet(156);
//  var yourFeet = inchToFeet(176);

// console.log(myFeet);
//  console.log(yourFeet);

var myFeets = [156, 176, 186];

var myFeet = inchToFeet(myFeets[3]);

console.log(myFeet);

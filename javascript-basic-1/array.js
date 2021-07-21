var friendsAge = [20, 21, 34, 55];

var sonaliAge = friendsAge[2];
console.log(sonaliAge);

// value change
friendsAge[3] = 27;

//position
var position = friendsAge.indexOf(34);
console.log(position);

//add array
friendsAge.push(15);
friendsAge.push(85);
friendsAge.push(65);
console.log(friendsAge);

// //removes the last element
friendsAge.pop();
console.log(friendsAge);

//removes the first element
friendsAge.shift();
console.log(friendsAge);

//removes the first element
friendsAge.shift();
console.log(friendsAge);

//add to the first element
friendsAge.unshift('kkalam');
console.log(friendsAge);

console.log(friendsAge.length);


var teaLine = ['kalam', 'rahim', 'karim', 'ualam', 'oahim', 'parim'];

// var part =teaLine.slice(2);
var part =teaLine.slice(2, 6);
 console.log(part);

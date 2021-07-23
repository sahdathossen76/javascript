var marks = [45, 81, 63, 95, 65, 21, 23, 51, 61, 105];

var max = marks[0];

for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}

console.log("height Value is: ", max);

function maxOfArray(array) {
    return Math.max.apply(Math, array);
  }
  
  
  let array = [100,2,3,4,500,6];
  console.log("height Value is: ", maxOfArray(array)); 
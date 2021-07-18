var marks = [89, 97, 79, 69, 94];

// for(var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     console.log(element);
// }

function largestNumber(numbers){
    var larger = numbers[0];
    for(var i = 0; i< numbers.length; i++){
        var element = numbers[i];
        if(element > larger) {
            larger = element;
        }
    }
    return larger;
}

var output = largestNumber([103, 250, 120, 150, 35]);
console.log('output', output);
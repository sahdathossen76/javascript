var names =[2, 3, 4, 5, 7, 10, 11, 3, 4, 5, 7, 11];
var unicName = [];

for(var i = 0; i < names.length; i++){
    var element = names[i];
    var index = unicName.indexOf(element);
    if(index == -1){
        unicName.push(element);
    }
}

console.log(unicName);
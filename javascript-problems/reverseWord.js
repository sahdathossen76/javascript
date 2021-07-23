function reverseString(stat){
    var reverse = "";

    for (var i = 0; i < stat.length; i++){
        var chec = stat[i];
        reverse = chec + reverse;
    }
    return reverse;
}
var statement = "hello world.";
var forAlien = reverseString(statement);
console.log(forAlien);

var java = "learning javascript.";
var forJava = reverseString(java);
console.log(forJava);
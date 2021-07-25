function animaleCalculator(depth){
    var animale = 0;
    //first part area 10mile
    //first part animale 50
    if(depth <= 10){
        animale = depth * 50;
    }
    //first part area 10mile second part 20mile
    //first part animale 50 + second part animale 100
    if(depth <= 20){
        var firstpart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animale = firstpart + secondPart;
    }
    //first part area 10mile second part 20mile
    //first part animale 50 + second part animale 100 + third part animale 300
    else{
        var firstpart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdpart = remaining * 300;
        animale = firstpart + secondPart + thirdpart;
    }
    return animale;
}
var result = animaleCalculator(20);
console.log(result);


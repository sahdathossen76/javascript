// var pizzaPrice = 90;

// if(pizzaPrice < 90){
//     console.log("l will eat pizza");
// }
// else{
//     console.log("l willnot eat pizza");
// }

// var playfootball = 89;

// if(playfootball == 90){
//     console.log("l will play football");
// }
// else{
//     console.log("l willnot play football");
// }
// var playfootball = 89;

// if(playfootball != 90){
//     console.log("l will play football");
// }
// else{
//     console.log("l willnot play football");
// }

// var getJob = true;
// var savingAmmount = 5000;

// if(getJob == true && savingAmmount > 20000){
//     console.log("l will marry soon");
// }
// else{
//     console.log("l willnot marry soon");
// }

// var getJob = false;
// var savingAmmount = 5000;

// if(getJob == false || savingAmmount > 20000){
//     console.log("l will marry soon");
// }
// else{
//     console.log("l willnot marry soon");
// }

// var getJob = false;
// var savingAmmount = 5000;

// if(getJob == true && savingAmmount > 20000){
//     console.log("l will marry soon");
// }
// else if(getJob == true){
//     console.log("l will marry after a few days");
// }
// else{
//     console.log("l willnot marry soon");
// }


var msg = '60';
//printing message for user input
// var a = prompt(msg);
var a = Math.round(msg);
if(a>85)
    {//if percent > 85 --A+
        console.log("your letter grade is A+");}
else if(a<=85 && a>80)
    {//80<percent80=85  --A
        console.log("your letter grade is A");}
else if(a>70 && a<=80)
    {//70<percent<=80 --A-
        console.log("your letter grade is A-");}
else if(a>60 && a<=70)
    {//60<percent<=70  --B
        console.log("your letter grade is B");}
else if(a>40 && a<=60)
    {//40<percent<=60  --C
        console.log("your letter grade is C");
    }
else if(a<=40)
    {//percent<=40  --D
      if(a<=35)
        {//failed condition
            console.log("your letter grade is D Candidate failed");
        }
      else
        {console.log("your letter grade is F");
    }
    }
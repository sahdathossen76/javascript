// const year = 3588; 
// const reminder = year % 4;
// // console.log(year % 4);
// // console.log(reminder % 4);
// // console.log(reminder == 0);

// if (reminder == 0){
//     console.log('your year is a Leep Year');
// }
// else{
//     console.log('your year is not a Leep Year');
// }


function LeepYear(year){
    const reminder = year % 4;
    // if(reminder == 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    if (reminder == 0){
        result = true
      }
      else if(reminder/100){
        result = false
      }
      else if(reminder/4){
        result= true
      }
      else{
        result= false
      }
      return false;
}

const check = LeepYear(1700);
console.log(check);

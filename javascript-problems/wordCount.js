var speech = "i am a good person And i do have a job.";

var count = 0;
for(var i = 0; i < speech.length; i++){
    var emptyPlace = speech[i];

    //for speach count
    // if(emptyPlace == " "){
    //     count++;
    // }

    //for word count
    if(emptyPlace == " " && speech[i-1] != ""){
        count++;
    }
}
count++;
console.log(count);
function repeatString(str, n){
    let times = parseInt(n);
    let result = "";

    for(let cnt = 1; cnt <= times; cnt++){
        result += str;
    }
    console.log(result);
}

/*Uncomment to test:
repeatString("repeat", "5");
repeatString("magic is real", "3");
*/
function printOddNumbersFrom1ToN(number){
    "use strict";
    let n = parseInt(number);

    for(let index = 1; index <= number; index++){
        if(index % 2 == 1){
            console.log(index);
        }
    }
}

/* Uncomment to test:
 printOddNumbersFrom1ToN(5);
 printOddNumbersFrom1ToN(4);
 printOddNumbersFrom1ToN(7);
 */
function printOddNumbersFrom1ToN(number){
    "use strict";
    let n = parseInt(number);

    for(let index = 1; index <= n; index += 2){
        console.log(index);
    }
}

/* Uncomment to test:
 printOddNumbersFrom1ToN(5);
 printOddNumbersFrom1ToN(4);
 printOddNumbersFrom1ToN(7);
 */
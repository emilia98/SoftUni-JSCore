function printTriangleOfDollars(number){
    "use strict";
    let n = Number(number);

    for(let index = 1; index <= n; index++){
        console.log("$".repeat(index));
    }
}

/* Uncomment to test:
 printTriangleOfDollars(3);
 printTriangleOfDollars(2);
 printTriangleOfDollars(4);
 */
function printTriangleOfDollars(number){
    "use strict";
    let n = parseInt(number);

    for(let index1 = 1; index1 <= n; index1++){
        let row = "";
        for(let index2 = 1; index2 <= index1; index2++){
            row += "$";
        }
        console.log(row);
    }
}

/* Uncomment to test:
printTriangleOfDollars(3);
printTriangleOfDollars(2);
printTriangleOfDollars(4);
    */
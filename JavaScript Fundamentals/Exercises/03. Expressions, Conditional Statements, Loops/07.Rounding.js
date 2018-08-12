function roundNumber(array){
    "use strict";
    let number = Number(array[0]);
    let decimalPlaces = parseInt(array[1]);

    //"+" drops extra zeroes
    if(decimalPlaces >= 15){
        return +number.toFixed(15);
    }
    return +number.toFixed(decimalPlaces);
}

/* Uncomment to test:
console.log(roundNumber([3.1415926535897932384626433832795, 2]));
console.log(roundNumber([10.5, 3]));
    */
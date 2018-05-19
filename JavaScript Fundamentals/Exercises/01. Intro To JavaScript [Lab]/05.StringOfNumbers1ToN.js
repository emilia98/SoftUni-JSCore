function concatenateNumbersFrom1ToN(n){
    let number = Number(n);
    let result = "";

    for(let i = 1; i <= number; i++){
        result += i;
    }
    console.log(result);
}

/* Uncomment to test:
concatenateNumbersFrom1ToN('11');
    */
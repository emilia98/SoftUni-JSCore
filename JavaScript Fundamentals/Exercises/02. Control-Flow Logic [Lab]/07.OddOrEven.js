function checkIfOddOrEven(arg1){
    let num = Number(arg1);

    if(num - Math.round(num) != 0){
        console.log("invalid");
    }
    else if(num % 2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

/* Uncomment to test:
checkIfOddOrEven(5);
checkIfOddOrEven(8);
checkIfOddOrEven(1.5);
    */
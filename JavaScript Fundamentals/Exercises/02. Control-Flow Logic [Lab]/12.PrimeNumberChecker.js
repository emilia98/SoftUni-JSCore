function printIfNumberIsPrime(arg1){
    let number = Number(arg1);
    let maxDivider = Math.sqrt(number);
    let isPrime = true;
    let divider = 2;

    if(number <= 1){
        return false;
    }
    else{
        while(divider <= maxDivider){
            if(number % divider == 0){
                isPrime = false;
                break;
            }
            divider++;
        }
        return isPrime;
    }

}

/*Uncomment to test:
console.log(printIfNumberIsPrime(7));
console.log(printIfNumberIsPrime(8));
console.log(printIfNumberIsPrime(81));
console.log(printIfNumberIsPrime(1));
*/


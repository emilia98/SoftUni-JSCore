function calculateSumAndVAT(array){
    let sum = 0;

    for(let number of array){
        sum += number;
    }
    vat = sum * 0.2;
    total = sum + vat;
    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}

/*Uncomment to test:
 calculateSumAndVAT([1.20, 2.60, 3.50]);
 calculateSumAndVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);
 */

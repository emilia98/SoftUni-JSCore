function calculateSumAndVAT(array){
    let len = array.length;
    let sum = 0;
    let vat = 0;

    for(let i = 0; i < len; i++){
        sum += array[i];
    }
    vat = sum * 0.2;
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${sum + vat}`);
}

/*Uncomment to test:
calculateSumAndVAT([1.20, 2.60, 3.50]);
calculateSumAndVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);
    */
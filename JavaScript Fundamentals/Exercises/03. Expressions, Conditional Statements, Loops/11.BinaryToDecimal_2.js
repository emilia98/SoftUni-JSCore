function convertBinaryToDecimal(string){
    "use strict";
    let binary = string;
    let size = binary.length;
    let decimal = 0;

    let reversedBinary = "";

    //The binary number has been reversed
    for(let index = size - 1; index >= 0; index--){
        reversedBinary += binary[index];
    }

    for(let index = 0; index < size; index++){
        let digit = parseInt(reversedBinary[index]);

        if(digit == 1){
            decimal += Math.pow(2, index);
        }
    }

    console.log(decimal);
}

/* Uncomment to test:
 convertBinaryToDecimal("00001001");
 convertBinaryToDecimal("11110000");
 */
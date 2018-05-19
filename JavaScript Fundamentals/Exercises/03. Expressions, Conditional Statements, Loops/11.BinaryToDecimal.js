function convertBinaryToDecimal(string){
    "use strict";
    let binary = string;
    let size = binary.length;

    let decimal = 0;
    for(let index = 0; index < size; index++){
        let digit = parseInt(binary[index]);

        if(digit == 1){
            let power = size - index - 1;
            decimal += Math.pow(2, power);
        }
    }

    console.log(decimal);
}

/* Uncomment to test:
convertBinaryToDecimal("00001001");
convertBinaryToDecimal("11110000");
    */
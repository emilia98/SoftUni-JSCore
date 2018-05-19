function calculateBinaryLogarithm(array){
    let size = array.length;

    for(let element of array){
        let number = Number(element);
        console.log(Math.log2(number));
    }
}

/* Uncomment to test:
 calculateBinaryLogarithm([1024, 1048576, 256, 1, 2]);
 */
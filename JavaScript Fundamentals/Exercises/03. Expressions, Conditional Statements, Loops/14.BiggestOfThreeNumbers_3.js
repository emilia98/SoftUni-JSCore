function findBiggestOfThree(array){
    "use strict";
    let elements = array.length;
    let max = array[0];

    for(let index = 1; index < elements; index++){
        if(array[index] > max){
            max = array[index];
        }
    }

    console.log(max);
}

/* Uncomment to test:
 findBiggestOfThree([5, -2, 7]);
 findBiggestOfThree([130, 5, 99]);
 findBiggestOfThree([43, 43.2, 43.1]);
 findBiggestOfThree([5, 5, 5]);
 findBiggestOfThree([-10, -20, -30]);
 */
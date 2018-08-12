function findBiggestOfThree(array){
    "use strict";
    let num1 = Number(array[0]);
    let num2 = Number(array[1]);
    let num3 = Number(array[2]);

    let max = num1;

    if(num1 < num2){
        max = num2;
    }

    if(max < num3){
        max = num3;
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

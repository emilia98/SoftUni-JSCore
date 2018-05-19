function solveEquation(num1, num2, num3){
    "use strict";
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    let c = parseFloat(num3);

    let disc = b * b - 4 * a * c;

    if(disc < 0){
        console.log("No");
    }
    else if(disc == 0){
        let x = - b / (2 * a);
        console.log(x);
    }
    else{
        let x1 = (- b - Math.sqrt(disc)) / (2 * a);
        let x2 = (- b + Math.sqrt(disc)) / (2 * a);

        if(x1 < x2){
            console.log(x1);
            console.log(x2);
        }
        else{
            console.log(x2);
            console.log(x1);
        }
    }
}

/* Uncomment to test:
solveEquation(6, 11, -35);
solveEquation(1, -12, 36);
solveEquation(5, 2, 1);
    */
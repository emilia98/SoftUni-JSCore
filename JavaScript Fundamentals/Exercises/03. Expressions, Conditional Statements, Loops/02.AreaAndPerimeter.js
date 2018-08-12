function calculateAreaAndPerimeter(arg1, arg2){
    let sideA = parseFloat(arg1);
    let sideB = parseFloat(arg2);

    let area = sideA * sideB;
    let perimeter = 2 * (sideA + sideB);

    console.log(area);
    console.log(perimeter);
}

/* Uncomment to test:
calculateAreaAndPerimeter(2, 2);
calculateAreaAndPerimeter(1, 3);
calculateAreaAndPerimeter(2.5, 3.14);
*/

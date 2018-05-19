function calculateCircleArea(arg1){
    "use strict";
    let radius = parseFloat(arg1);
    let area = radius * radius * Math.PI;

    console.log(area);
    console.log(area.toFixed(2));
}

/* Uncomment to test
calculateCircleArea(5);
    */
function calculateTriangleArea(arg1, arg2, arg3){
    "use strict";
    let a = Number(arg1);
    let b = Number(arg2);
    let c = Number(arg3);
    let p = (a + b + c) / 2;

    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(area);
}

/* Uncomment to test:
calculateTriangleArea(2, 3.5, 4);
    */
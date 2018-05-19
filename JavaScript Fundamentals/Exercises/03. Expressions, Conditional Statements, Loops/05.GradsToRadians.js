function convertFromGradsToRadians(grad){
    "use strict";
    let grads = Number(grad);
    let oneGradToDegrees = 360 / 400;
    let degrees = grads * oneGradToDegrees;

    degrees = degrees % 360;

    if(degrees < 0){
        degrees += 360;
    }
    console.log(degrees);
}

/* Uncomment to test:
convertFromGradsToRadians(100);
convertFromGradsToRadians(400);
convertFromGradsToRadians(800);
convertFromGradsToRadians(850);
convertFromGradsToRadians(-50);
convertFromGradsToRadians(-550);
    */
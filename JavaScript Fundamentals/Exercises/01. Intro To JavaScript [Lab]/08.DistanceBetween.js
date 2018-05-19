function calculateDistanceBetweenPoints(x1,y1,x2,y2){
    let point1 = {x:x1, y:y1};
    let point2 = {x:x2, y:y2};

    let X = Math.abs(point1.x - point2.x);
    let Y = Math.abs(point1.y - point2.y);

    let distance = Math.sqrt(X * X + Y * Y);
    console.log(distance);
}

/* Uncomment to test:
calculateDistanceBetweenPoints(2,4,5,0);
calculateDistanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
    */
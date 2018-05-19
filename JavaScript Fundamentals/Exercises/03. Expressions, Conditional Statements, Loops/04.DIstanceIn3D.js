function calculateDistanceIn3D(array){
    "use strict";
    let pointA = {
        x: parseFloat(array[0]),
        y: parseFloat(array[1]),
        z: parseFloat(array[2])
    };
    let pointB = {
        x: parseFloat(array[3]),
        y: parseFloat(array[4]),
        z: parseFloat(array[5])
    };

    let distX = Math.abs(pointA.x - pointB.x);
    let distY = Math.abs(pointA.y - pointB.y);
    let distZ = Math.abs(pointA.z - pointB.z);
    let distance = Math.sqrt(distX * distX + distY * distY + distZ * distZ);

    console.log(distance);
}

/* Uncomment to test:
calculateDistanceIn3D([1, 1, 0, 5, 4, 0]);
calculateDistanceIn3D([3.5, 0, 1, 0, 2, -1]);
    */
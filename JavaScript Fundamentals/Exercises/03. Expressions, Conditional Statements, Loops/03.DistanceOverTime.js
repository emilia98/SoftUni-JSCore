function calculateDistance(array){
    let obj1 = { vKmPerHour: Number(array[0])};
    let obj2 = { vKmPerHour: Number(array[1])};
    let time = Number(array[2]);

    let distance1 = (obj1.vKmPerHour * 1000 / 3600) * time;
    let distance2 = (obj2.vKmPerHour * 1000 / 3600) * time;
    let overallDistance = Math.abs(distance1 - distance2);

    console.log(overallDistance);
}
/* Uncomment to test:
calculateDistance([0, 60, 3600]);
calculateDistance([11, 10, 120]);
calculateDistance([5, -5, 40]);
*/
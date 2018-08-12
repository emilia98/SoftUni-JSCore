function calculateAreaAndSurfaceOfCone(arg1, arg2){
    let radius = Number(arg1);
    let height = Number(arg2);
    let slantHeight = Math.sqrt(radius * radius + height * height);

    let volume = Math.PI * radius * radius * height / 3;
    let surface = Math.PI * radius * (slantHeight + radius);

    console.log(`volume = ${volume}`);
    console.log(`surface = ${surface}`);
}

/* Uncomment to test:
calculateAreaAndSurfaceOfCone(3, 5);
calculateAreaAndSurfaceOfCone(3.3, 7.8);
    */
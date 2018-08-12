function findNeededBoxes(arg1, arg2){
    let bottles = Number(arg1);
    let boxCapacity = Number(arg2);

    let boxes = 0;
    if(bottles % boxCapacity == 0){
        boxes = bottles / boxCapacity;
    }
    else{
        boxes = Math.floor(bottles / boxCapacity) + 1;
    }

    console.log(boxes);
}

/* Uncomment to test:
findNeededBoxes(20, 5);
findNeededBoxes(15, 7);
findNeededBoxes(5, 10);
    */
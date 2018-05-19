function returnDaysInLastMonth(array){
    "use strict";
    let day = parseInt(array[0]);
    let month = parseInt(array[1]);
    let year = parseInt(array[2]);

    //We don't need to use days -> this is the way of finding
    //what we want
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}

/* Uncomment to test:
returnDaysInLastMonth([17, 3, 2002]);
returnDaysInLastMonth([13, 12, 2004]);
    */
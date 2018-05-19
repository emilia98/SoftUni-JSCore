function printTheNextDay(arg1, arg2, arg3){
    let year = parseInt(arg1);
    let month = parseInt(arg2);
    let day = parseInt(arg3);

    let date = new Date(year, month - 1, day + 1);

   console.log(`${date.getFullYear()}-${(date.getMonth()+1)}-${ date.getDate()}`);

}

/*Uncomment to test:
printTheNextDay(2016, 9, 30);
printTheNextDay(2015, 12, 31);
*/
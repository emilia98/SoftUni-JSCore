function checkForLeapYear(arg1){
    let year = Number(arg1);

    if( (year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return "yes";
    }
    return "no";
}

/* Uncomment to test:
console.log(checkForLeapYear(1999));
console.log(checkForLeapYear(2000));
console.log(checkForLeapYear(1900));
console.log(checkForLeapYear(1904));
    */
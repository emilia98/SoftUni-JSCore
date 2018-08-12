function checkForLeapYear(arg1){
    let year = Number(arg1);

    let result = (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) ? "yes" : "no";
    console.log(result);
}

/* Uncomment to test:
checkForLeapYear(1999);
checkForLeapYear(2000);
checkForLeapYear(1900);
checkForLeapYear(1904);
    */
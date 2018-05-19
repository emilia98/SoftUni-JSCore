function convertImperialUnits(arg1){
    "use strict";
    let inchesToConvert = Number(arg1);
    let inches = inchesToConvert % 12;
    let feet = parseInt(inchesToConvert / 12);
    console.log(`${feet}'-${inches}"`);
}
/*Uncomment to test:
convertImperialUnits(36);
convertImperialUnits(55);
convertImperialUnits(11);
    */
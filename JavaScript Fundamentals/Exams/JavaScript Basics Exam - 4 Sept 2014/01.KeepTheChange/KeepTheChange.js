function printTheTip(arr){
    let bill = Number(arr[0]);
    let mood = arr[1];
    let tips = 0;

    switch(mood){
        case "happy": {
            tips = 0.1 * bill;
            break;
        }
        case "married": {
            tips = 0.0005 * bill;
            break;
        }
        case "drunk": {
            tips = (0.15 * bill);
            tips = Math.pow(tips, parseInt(tips.toString()[0]));
            break;
        }
        default: {
            tips = 0.05 * bill;
            break;
        }
    }

    console.log(tips.toFixed(2));
}

/* Uncomment to test:
printTheTip([ "120.44", "happy"]);
printTheTip([ "1230.83", "drunk"]);
printTheTip([ "716.00", "bored"]);
printTheTip([ "200", "drunk"]);
*/

function clearAndPrintHex(arr){
    let message = arr[0];
    let pattern = /[0-9]+/g;
    let matches = message.match(pattern).map(el => parseInt(el));
    let hexToPrint = [];

    for(let match of matches){
        let toHex = match.toString(16);
        toHex = "0x" + ("0000" + toHex).slice(-4).toUpperCase();
        hexToPrint.push(toHex);
    }
    console.log(hexToPrint.join("-"));
}

/* Uncomment to test:
clearAndPrintHex(["5tffwj(//*7837xzc2---34rlxXP%$”."]);
clearAndPrintHex(["482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312"]);
clearAndPrintHex(["20"]);
*/
function clearAndPrintHex(arr){
    let message = arr[0];
    let pattern = /[0-9]+/g;
    let match = pattern.exec(message);
    let hexToPrint = [];

    while(match){
        let toHex = parseInt(match).toString(16);
        let len = toHex.length;

        if(len < 4){
            toHex = '0'.repeat(4 - len) + toHex;
        }

        toHex = toHex.toUpperCase();
        toHex = `0x${toHex}`;
        hexToPrint.push(toHex);
        match = pattern.exec(message);
    }
    console.log(hexToPrint.join("-"));
}

/* Uncomment to test:
clearAndPrintHex(["5tffwj(//*7837xzc2---34rlxXP%$”."]);
clearAndPrintHex(["482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312"]);
clearAndPrintHex(["20"]);
*/
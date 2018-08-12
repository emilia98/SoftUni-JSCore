function calculateAmounts(arr){
    let jewelryData = {
        silver: 0,
        gold:  0,
        diamonds: 0,
    };

    let minePattern = /^(mine\s+(.+)?\s*-\s*(.+)\s*:\s*(.+)\s*)$/;
    for(let entry of arr){
        let match = minePattern.exec(entry);

        if(match){
            let mineType = match[3].trim();
            let quantity = Number(match[4].trim());

            if(isNaN(quantity)){
                continue;
            }

            if(mineType in jewelryData){
                jewelryData[mineType] += quantity;
            }
        }
    }

    for(let prop in jewelryData){
        console.log(`*${prop.charAt(0).toUpperCase()}${prop.slice(1)}: ${jewelryData[prop]}`)
    }
}

/* Uncomment to test:
calculateAmounts([
    "mine bobovDol - gold: 10",
    "mine medenRudnik - silver: 22",
    "mine chernoMore - shrimps : 24",
    "gold: 50"
]);

calculateAmounts([
    "mine bobovdol- gold: 10",
    "mine - diamonds: 5 ",
    "mine colas - wood: 10",
    "mine   myMine    -  silver:  14",
    "mine silver:14 - silver : 14",
]);

calculateAmounts([
    "mine bobovdol- gold: gold",
]);
*/
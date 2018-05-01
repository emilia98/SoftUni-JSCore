function calculateAmounts(arr){
    let diamonds = 0;
    let gold = 0;
    let silver = 0;

    for(let entry of arr){
        let tokens = entry.split('-').filter(el => el !== "");
       
        if(tokens.length > 1){
            let mineInfo = tokens[0].split(" ").filter(el => el !== "");

            if(mineInfo[0] !== "mine"){
                continue;
            }
    
            let [mineType, quantity] = tokens[1].split(":").map(el => el.trim());
        
            // If the quantity is not a number, don't add it
            if(isNaN(Number(quantity))){
                continue;
            }

            if(mineType === "silver"){
                silver += Number(quantity);
            }else if(mineType === "gold"){
                gold += Number(quantity);
            } else if(mineType === "diamonds"){
                diamonds += Number(quantity);
            }
        }
    }

    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamonds}`);
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
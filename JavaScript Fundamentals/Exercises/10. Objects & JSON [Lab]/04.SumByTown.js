function findSumByTown(arr){
    let incomesData = {};
    
    for (let index = 0; index < arr.length; index += 2) {
        let town = arr[index];
        let income = arr[index + 1];

        if(!incomesData.hasOwnProperty(town)){
            incomesData[town] = 0;
        }
        incomesData[town] += Number(income);
    }

    console.log(JSON.stringify(incomesData));
}

/* Uncomment to test:
findSumByTown(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]);
findSumByTown(["Sofia", "20", "Varna", "3", "sofia", "5", "varna", "4"]);
*/

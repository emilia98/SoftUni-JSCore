function findPopulation(arr){
    let townsData = new Map();

    for(let data of arr){
        let splitData = data.split(" <-> ");
        let town = splitData[0];
        let population = Number(splitData[1]);

        if(!townsData.has(town)){
            townsData.set(town, population);
        }else{
            townsData.set(town, townsData.get(town) + population);
        }
    }

    for (let [town, population] of townsData) {
        console.log(`${town} : ${population}`);
    }
}

/* Uncomment to test:
findPopulation(["Sofia <-> 1200000",
"Montana <-> 20000",
"New York <-> 10000000",
"Washington <-> 2345000",
"Las Vegas <-> 1000000"]);

findPopulation(["Istanbul <-> 100000",
"Honk Kong <-> 2100004",
"Jerusalem <-> 2352344",
"Mexico City <-> 23401925",
"Istanbul <-> 1000"]);
*/
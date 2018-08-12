function findSalesInCities(arr){
    let salesData = new Map();

    for(let data of arr){
        let splitData = data.split(" -> ");
        let town = splitData[0];
        let product = splitData[1];
        let [quantity, price] = splitData[2].split(" : ").map(el => Number(el));

        let totalSales = quantity * price;

        // If town doesn't exits
        if(!salesData.has(town)){
            salesData.set(town, new Map());
        }

        // If product doesn't exist
        if(!salesData.get(town).has(product)){
            salesData.get(town).set(product, 0);
        }

        let oldSales = salesData.get(town).get(product);
        salesData.get(town).set(product, oldSales + totalSales);
    }

    for (let [town, productsData] of salesData) {
        console.log(`Town - ${town}`);

        for (let [product, sales] of productsData) {
            console.log(`$$$${product} : ${sales}`);
        }
    }
}

/* Uncomment to test:
findSalesInCities(["Sofia -> Laptops HP -> 200 : 2000",
"Sofia -> Raspberry -> 200000 : 1500",
"Sofia -> Audi Q7 -> 200 : 100000",
"Montana -> Portokals -> 200000 : 1",
"Montana -> Portokals -> 3000 : 2",
"Montana -> Qgodas -> 20000 : 0.2",
"Montana -> Chereshas -> 1000 : 0.3"]);
*/
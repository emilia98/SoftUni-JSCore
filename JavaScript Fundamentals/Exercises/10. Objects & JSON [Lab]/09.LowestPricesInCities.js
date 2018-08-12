function findLowestPrices(arr){
    let productsData = new Map();

    for (let row of arr) {
        let [townName, product, price] = row.split(' | ');
        price = Number(price);

        if(!productsData.has(product)){
            productsData.set(product, new Map());
        }

        productsData.get(product).set(townName, price);
    }

    for (let [product, pricesData] of productsData) {

        let sortPrices = [...pricesData].sort((a, b) => {
            return a[1] - b[1];
        })[0];

        let town = sortPrices[0];
        let price = sortPrices[1];

        console.log(`${product} -> ${price} (${town})`);
    }
}

/* Uncomment to test:
findLowestPrices(["Sample Town | Sample Product | 1000",
"Sample Town | Orange | 2",
"Sample Town | Peach | 1",
"Sofia | Orange | 3",
"Sofia | Peach | 2",
"New York | Sample Product | 1000.1",
"New York | Burger | 10"]);
*/
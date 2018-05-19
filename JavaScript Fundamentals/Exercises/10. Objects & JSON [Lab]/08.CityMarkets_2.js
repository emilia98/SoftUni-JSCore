// Modified Viktor's solution of the problem
function findSalesInCities(arr){
    let salesData = new Map();

    for(let data of arr){
        let [town, product, sales] = data.split(" -> ");
        sales = sales.split(" : ").reduce((a, b) => a * b);

        // If town doesn't exits
        if(!salesData.has(town)){
            salesData.set(town, new Map());
        }

        // If product doesn't exist
        if(!salesData.get(town).has(product)){
            salesData.get(town).set(product, sales);
        }
        else{
            let oldSales = salesData.get(town).get(product);
            salesData.get(town).set(product, oldSales + sales);
        }
    }

    [...salesData].forEach( ([town, productsData]) => {
        console.log(`Town - ${town}`);
        [...productsData].forEach(([product, sales]) =>  console.log(`$$$${product} : ${sales}`));
    });
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
function printBiggestRow(arr){
    let pattern = /<td>.*<\/td><td>(.*)<\/td><td>(.*)<\/td><td>(.*)<\/td>/;
    let sumRowData = [];

    for(let entry of arr){
        let currentSum = 0;
        let result = pattern.exec(entry);
        if(result){
            let sums = result.slice(1, 4); //console.log(sums);

            sums.forEach(s => {
                s = Number(s);
                if(isNaN(s) === false){
                    currentSum += s;
                }
            });
            sumRowData.push([currentSum, sums]);
        }
    }

    sumRowData.sort((a, b) => {
        return b[0] - a[0];
    });

    console.log(printMaxSum(sumRowData[0]));

    function printMaxSum(sumData){
        sumData[1] = sumData[1].filter(el => !isNaN(el));
        if(sumData[1].length === 0){
            return "no data";
        }
        return `${sumData[0]} = ${sumData[1].join(" + ")}`;
    }
}

/* Uncomment to test:
printBiggestRow([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>",
    "<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>",
    "<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>",
    "<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>",
    "</table>",
]);

printBiggestRow([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>",
    "</table>",
]);

printBiggestRow([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>",
    "<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>",
    "<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>",
    "</table>",
]);
*/
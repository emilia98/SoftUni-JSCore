function printBiggestRow(arr){
    arr = arr.slice(2, arr.length - 1);
    let maxSum = Number.NEGATIVE_INFINITY;
    let expression = [];

    for(let entry of arr){
        let tokens = entry.split(/<tr>|<td>|<\/tr>|<\/td>/g).filter(el => el !== "");
        tokens = tokens.slice(1, 4);

        let currentSum = 0;
        let elementsAdded = 0;

        for(let num of tokens){
            num = Number(num);
            if(!isNaN(num)){
                currentSum += num;
                elementsAdded++;
            }
        }

        if(currentSum > maxSum && elementsAdded > 0){
            maxSum = currentSum;
            expression = tokens.slice(0).filter(el => !isNaN(el));
            expression.unshift(currentSum);
        }
    }

    if(expression.length <= 1){
        return "no data";
    }else{
        return `${expression.shift()} = ${expression.join(" + ")}`;
    }
}

/* Uncomment to test:
console.log(printBiggestRow([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>",
    "<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>",
    "<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>",
    "<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>",
    "</table>",
]));

console.log(printBiggestRow([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>",
    "</table>",
]));

console.log(printBiggestRow([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>",
    "<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>",
    "<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>",
    "</table>",
]));

console.log(printBiggestRow([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "</table>",
]));

console.log(printBiggestRow([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "<tr><td>Pleven</td><td>-</td><td>-</td><td>-</td></tr>",
    "<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>",
    "</table>"
]));
*/
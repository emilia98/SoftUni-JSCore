/*
  Zero Test #1 won't work, because of the incorrect tag!
 */
function printTrends(arr){
    arr = arr.filter(el => el !== "").map(el => Math.round(Number(el) * 100) / 100);
    let result = "<table>\n";
    result += "<tr><th>Price</th><th>Trend</th></tr>\n";
    let previous = arr[0];

    for(let num of arr){
        let current = num;
        let trend = "";

        current > previous ? trend = "up" : trend = "down";
        current === previous ? trend = "fixed" : trend;

        result += `<tr><td>${current.toFixed(2)}</td><td><img src="${trend}.png"/></td></td>\n`;
        previous = current;
    }
    result += "</table>";
    console.log(result);
}

/* Uncomment to test:
printTrends(["50", "60"]);
printTrends([
    "36.333",
    "36.5",
    "37.019",
    "35.4",
    "35",
    "35.001",
    "36.225"
]);
*/
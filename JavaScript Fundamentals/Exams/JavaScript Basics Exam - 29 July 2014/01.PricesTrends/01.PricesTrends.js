/*
  Zero Test #1 won't work, because of the incorrect tag!
 */
function printTrends(arr){
    arr = arr.filter(el => el !== "");
    arr = arr.map(el => Math.round(Number(el) * 100) / 100);

    let result = [];
    result.push("<table>");
    result.push("<tr><th>Price</th><th>Trend</th></tr>");

    let previous = arr[0];
    for(let num of arr){
        let current = num;
        let trend = "fixed";

        if(current > previous){
            trend = "up";
        }else if(current < previous){
            trend = "down";
        }

        result.push(`<tr><td>${current.toFixed(2)}</td><td><img src="${trend}.png"/></td></td>`);
        previous = current;
    }
    result.push("</table>");

    console.log(result.join("\n"));
}

/* Uncomment to test:
printTrends(["50", "60", ""]);
printTrends([
    "36.333",
    "36.5",
    "37.019",
    "35.4",
    "35",
    "35.001",
    "36.225",
    ""
]);
*/
// There're wrong tests in Judge System
function printColorfulNumbers(arg1){
    let n = Number(arg1);

    let result = "<ul>\n";
    for(let i = 1; i <= n; i++){
        let color = "green";

        if(i % 2 == 0){
           color = "blue";
        }

        result += `  <li><span style='color:${color}'>${i}</span></li>\n`;
    }
    result += "</ul>";

    return result;
}

/*Uncomment to test:
console.log(printColorfulNumbers(5));
console.log(printColorfulNumbers(10));
*/
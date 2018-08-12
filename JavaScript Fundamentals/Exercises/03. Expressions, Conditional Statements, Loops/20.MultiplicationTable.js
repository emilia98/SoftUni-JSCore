function printMultiplicationTable(number){
    "use strict";
    let n = parseInt(number);

    let result = "<table border=\"1\">\n";

    for(let index1 = 0; index1 <= n; index1++){
        //let result = "";

        if(index1 == 0){
            result+=" <tr><th>x</th>";

            for(let index2 = 1; index2 <= n; index2++){
                result+="<th>" + index2 + "</th>";
            }
            result += "</tr>\n";
            //console.log(result);
        }
        else
        {
            result+=" <tr><th>" + index1 + "</th>";

            for(let index2 = 1; index2 <= n; index2++){
                result+="<td>" + (index2 * index1) + "</td>";
            }
            result += "</tr>\n";
            //console.log(result);
        }
    }
    result += "</table>\n";
    return result;
}

/*Uncomment to test:
console.log(printMultiplicationTable(5));
*/

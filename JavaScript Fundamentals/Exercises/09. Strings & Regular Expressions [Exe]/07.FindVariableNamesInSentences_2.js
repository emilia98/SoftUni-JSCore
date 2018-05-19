function findVariableNames(str){
    let pattern = /\b[_]{1}([A-Za-z0-9]+)\b/g;
    let variables = [];

    let matches = str.match(pattern);

    if(matches){
        for (let match of matches) {
            variables.push(match.substring(1));
        }
    }

    console.log(variables.join(","));
}

/* Uncomment to test:
findVariableNames("The _id and _age variables are both integers.");
findVariableNames("Calculate the _area of the _perfectRectangle object.");
findVariableNames("__invalidVariable _evenMoreInvalidVariable_ _validVariable");
*/
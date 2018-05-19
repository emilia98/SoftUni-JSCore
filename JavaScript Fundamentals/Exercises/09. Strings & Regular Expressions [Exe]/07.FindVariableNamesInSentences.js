function findVariableNames(str){
    let pattern = /\b[_]{1}([A-Za-z0-9]+)\b/g;
    let variables = [];
    let match = pattern.exec(str);

    while(match != null){
        variables.push(match[1]);
        match = pattern.exec(str);
    }

    console.log(variables.join(","));
}

/* Uncomment to test:
findVariableNames("The _id and _age variables are both integers.");
findVariableNames("Calculate the _area of the _perfectRectangle object.");
findVariableNames("__invalidVariable _evenMoreInvalidVariable_ _validVariable");
*/
function printFigureOfFourSquares(number){
    "use strict";
    let n = parseInt(number);

    let rows = n % 2 == 0 ? (n - 1) : n;

    //console.log(rows);
    for(let row = 1; row <= rows; row++){
        let currentRow = "";

        if(row == 1 || row == rows || row == parseInt((rows / 2)) + 1){
            /*currentRow += "+";
            currentRow += "-".repeat(n - 2);
            currentRow += "+";
            currentRow += "-".repeat(n - 2);
            currentRow += "+";*/
            currentRow = printARow("+", "-", n);
        }
        else{
            currentRow = printARow("|", " ", n);
        }
        console.log(currentRow);
    }

    function printARow(char1, char2, n){
        let currentRow = "";
        currentRow += char1;
        currentRow += char2.repeat(n - 2);
        currentRow += char1;
        currentRow += char2.repeat(n - 2);
        currentRow += char1;
        return currentRow;
    }
}

/* Uncomment to test:
printFigureOfFourSquares(4);
printFigureOfFourSquares(5);
printFigureOfFourSquares(6);
printFigureOfFourSquares(7);
*/

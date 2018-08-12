function printChessboard(arg1){
    let n = Number(arg1);
    let result = '<div class="chessboard">\n';

    for(let row = 1; row <= n; row++){
        result += "  <div>\n";

        for(let col = 1; col <= n; col++){
            let color = "black";

            if( (col + row) % 2 != 0 ){
                color = "white";
            }
            result += `    <span class="${color}"></span>\n`;
        }
        result += "  </div>\n";
    }
    result += "</div>";

    return result;
}

/* Uncomment to test:
console.log(printChessboard(3));
console.log(printChessboard(9));
    */
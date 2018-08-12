function decryptMessage(arr){
    let encryptedMsg = arr.shift();
    let magicNumber = Number(arr.shift());
    let matrix = [];

    arr.forEach(row => matrix.push(row.split(' ').map(el => Number(el))));

    let keyValue = 0;
    let toEnd = 0;
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            let result = checkNumbers(row,col);
            if(result.length > 0){
                result.forEach(el => keyValue += el);
                toEnd = true;
                break;
            }
        }
        if(toEnd){
            break;
        }
    }

    console.log(convertSymbols(encryptedMsg));

    function checkNumbers(currentRow, currentCol){
        let startCol = currentCol + 1;
    
        for(let row = currentRow; row < matrix.length; row++){
            for(let col = startCol; col < matrix[row].length; col++){
                if(matrix[currentRow][currentCol] + matrix[row][col] === magicNumber){            
                    return [currentRow, currentCol,row, col];
                }
            }
            startCol = 0;
        }
        return [];
    }

    function convertSymbols(message){
        let decrypted = [];

        for(let index = 0; index < message.length; index++){
            let charCode = message.charCodeAt(index);

            if(index % 2 === 0){
                decrypted.push(String.fromCharCode(charCode + keyValue));
            }else{
                decrypted.push(String.fromCharCode(charCode - keyValue));
            }
        }
        return decrypted.join("");
    }
}

/* Uncomment to test:
decryptMessage([
    "QqdvSpg",
    "400",
    "100 200 120",
    "120 300 310",
    "150 290 370"
]);
*/
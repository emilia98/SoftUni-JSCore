function findFigures(arr) {
    let grid = arr.map(el => el.split(''));
    let rows = grid.length;
    let cols = grid[0].length; // rectangular matrix
    let figures = {
        I: 0, L: 0, J: 0, O: 0, Z: 0, S: 0, T: 0
    };

    for(let row = 0; row < rows; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(checkFor_I(row,col)){
                figures.I++;
            }

            if(checkFor_L(row, col)){
                figures.L++;
            }

            if(checkFor_J(row, col)){
                figures.J++;
            }

            if(checkFor_O(row, col)){
                figures.O++;
            }

            if(checkFor_Z(row, col)){
                figures.Z++;
            }

            if(checkFor_S(row, col)){
                figures.S++;
            }

            if(checkFor_T(row, col)){
                figures.T++;
            }
        }
    }

    console.log(JSON.stringify(figures));

    function checkFor_I(row, col){
        if(row + 3 >= rows){
            return false;
        }

        if( grid[row][col] === 'o' && grid[row + 1][col] === 'o' &&
            grid[row + 2][col] === 'o' && grid[row + 3][col] === 'o'){
            return true;
        }
        return false;
    }

    function checkFor_L(row, col){

        if(row + 2 >= rows || col + 1 >= cols){
           return false;
        }

        if( grid[row][col] === 'o' && grid[row + 1][col] === 'o' &&
            grid[row + 2][col] === 'o' && grid[row + 2][col + 1] === 'o'){
            return true;
        }
        return false;
    }

    function checkFor_J(row, col){
        if(row + 2 >= rows || col - 1 < 0){
            return false;
        }

        if( grid[row][col] === 'o' && grid[row + 1][col] === 'o' &&
            grid[row + 2][col] === 'o' && grid[row + 2][col - 1] === 'o'){
            return true;
        }
        return false;
    }

    function checkFor_O(row, col){
        if(row + 1 >= rows || col + 1 >= cols){
            return false;
        }

        if( grid[row][col] === 'o' && grid[row][col + 1] === 'o' &&
            grid[row + 1][col] === 'o' && grid[row + 1][col + 1] === 'o'){
            return true;
        }
        return false;
    }

    function checkFor_Z(row, col){
        if(row + 1 >= rows || col + 1 >= cols || col - 1 < 0){
            return false;
        }

        if( grid[row][col] === 'o' && grid[row + 1][col] === 'o' &&
            grid[row][col - 1] === 'o' && grid[row + 1][col + 1] === 'o'){
            return true;
        }
        return false;
    }

    function checkFor_S(row, col){
        if(row + 1 >= rows || col + 1 >= cols || col - 1 < 0){
            return false;
        }

        if( grid[row][col] === 'o' && grid[row + 1][col - 1] === 'o' &&
            grid[row][col + 1] === 'o' && grid[row + 1][col] === 'o'){
            return true;
        }
        return false;
    }

    function checkFor_T(row, col){
        if(row + 1 >= rows || col + 1 >= cols || col - 1 < 0){
            return false;
        }

        if( grid[row][col] === 'o' && grid[row][col - 1] === 'o' &&
            grid[row][col + 1] === 'o' && grid[row + 1][col] === 'o'){
            return true;
        }
        return false;
    }
}

/* Uncomment to test:
findFigures([
    "--o--o-",
    "--oo-oo",
    "ooo-oo-",
    "-ooooo-",
    "---oo--",
]);

findFigures([
    "-oo",
    "ooo",
    "ooo",
]);
*/
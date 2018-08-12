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

            let [has_L, has_J] = checkFor_L_J(row, col);
            if(has_L){
                figures.L++;
            }
            if(has_J){
                figures.J++;
            }

            if(checkFor_O(row, col)){
                figures.O++;
            }
            let [has_Z, has_S, has_T] = checkFor_Z_S_T(row, col);

            if(has_Z){
                figures.Z++;
            }
            if(has_S){
                figures.S++;
            }
            if(has_T){
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

    function checkFor_L_J(row, col){
        let [has_L, has_J] = [true, true];

        if(row + 2 >= rows){
            has_L = false;
            has_J = false;
            return [has_L, has_J];
        }

        if(col + 1 >= cols){
            has_L = false;
        }

        if(col - 1 < 0){
            has_J = false;
        }

        if( grid[row][col] === 'o' && grid[row + 1][col] === 'o' &&
            grid[row + 2][col] === 'o'){

            grid[row + 2][col + 1] === 'o' ? has_L = true : has_L = false;
            grid[row + 2][col - 1] === 'o' ? has_J = true : has_J = false;
        }else{
            [has_L, has_J] = [false, false];
        }

        return [has_L, has_J];
    }

    function checkFor_O(row, col){
        if(row + 1 >= rows || col + 1 >= cols){
            return false;
        }

        if(grid[row][col] === 'o' && grid[row][col + 1] === 'o' &&
            grid[row + 1][col] === 'o' && grid[row + 1][col + 1] === 'o'){
            return true;
        }
        return false;
    }
    function checkFor_Z_S_T(row, col){
        let [has_Z, has_S, has_T] = [true, true, true];

        if(row + 1 >= rows || col + 1 >= cols || col - 1 < 0){
            [has_Z, has_S, has_T] = [false, false, false];
            return [has_Z, has_S, has_T];
        }

        if( grid[row][col] === 'o' && grid[row + 1][col] === 'o'){
            if((has_Z || has_T) && grid[row][col - 1] !== 'o'){
                [has_Z, has_T] = [false, false];
            }

            if((has_S || has_T) && grid[row][col + 1] !== 'o'){
                [has_S, has_T] = [false, false]
            }

            if(grid[row + 1][col + 1] !== 'o'){
                has_Z = false;
            }

            if(grid[row + 1][col - 1] !== 'o'){
                has_S = false;
            }
        }else{
            [has_Z, has_S, has_T] = [false, false, false];
        }
        return [has_Z, has_S, has_T];
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
function printSquareOfStars(n = 5) {
    let num = parseInt(n);

    for(let i = 1; i <= num; i++){
        printStars(num);
    }

    function printStars(counter){
        let result = "";
        for(let cnt = 1; cnt < counter; cnt++){
            result += "* ";
        }
        result += "*";

        console.log(result);
    }
}

/* Uncomment to test:
printSquareOfStars(1);
printSquareOfStars(2);
printSquareOfStars(5);
printSquareOfStars();
*/

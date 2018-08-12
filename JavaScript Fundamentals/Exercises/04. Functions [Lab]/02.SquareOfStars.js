function printSquareOfStars(n = 5) {
    let num = parseInt(n);

    for(let i = 1; i <= num; i++){
        printStars(num);
    }

    // Because Judge Trims the extra whitespaces
    function printStars(counter){
        console.log("* ".repeat(counter));
    }
}

/* Uncomment to test:
printSquareOfStars(1);
printSquareOfStars(2);
printSquareOfStars(5);
printSquareOfStars();
*/
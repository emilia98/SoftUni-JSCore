function printTriangleOfStars(n){
    let num = parseInt(n);

    for(let i = 1; i <= num; i++){
       printStars(i);
    }

    for(let i = num - 1; i >= 1; i--){
        printStars(i);
    }

    function printStars(counter){
        console.log("*".repeat(counter));
    }
}

/* Uncomment to test:
printTriangleOfStars(1);
printTriangleOfStars(2);
printTriangleOfStars(5);
*/
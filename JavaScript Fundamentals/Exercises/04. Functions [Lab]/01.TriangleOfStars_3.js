function printTriangleOfStars(n){
    let num = parseInt(n);

   printFirstPart(num);
   printSecondPart(num);

    function printFirstPart(n){
        for(let i = 1; i <= n; i++){
            printStars(i);
        }
    }

    function printSecondPart(n){
        for(let i = n - 1; i >= 1; i--){
            printStars(i);
        }
    }

    function printStars(counter){
        console.log("*".repeat(counter));
    }
}

/*Uncomment to test:
printTriangleOfStars(1);
printTriangleOfStars(2);
printTriangleOfStars(5);
*/

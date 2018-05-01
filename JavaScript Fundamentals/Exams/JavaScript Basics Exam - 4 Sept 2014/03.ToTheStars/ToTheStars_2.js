function printMessages(arr){
    let starsInfo = arr.slice(0, 3);
    let [initX, initY] = arr[3].split(/\s+/g).map(el => Number(el));
    let moves = parseInt(arr[4]);
    let stars = [];

    for(let star of starsInfo){
        let [star_name, x, y] = star.split(/\s+/g);
        stars.push({
            name: star_name,
            x: Number(x),
            y: Number(y)
        });
    }

    while(moves >= 0){
        let isInSpace = true;
        for(let star of stars){

            if(isPassingThroughStar(star,initX, initY)){
                isInSpace = false;
                console.log(star.name.toLowerCase());
                break;
            }
        }

        if(isInSpace){
            console.log("space");
        }

        initY++;
        moves--;
    }

    function isPassingThroughStar(star, x, y){
        return (x >= star.x - 1 && x <= star.x + 1) &&
            (y >= star.y - 1 && y <=  star.y + 1);
    }
}

/* Uncomment to test:
printMessages([
    "Sirius 3 7",
    "Alpha-Centauri 7 5",
    "Gamma-Cygni 10 10",
    "8 1",
    "6"
]);

printMessages([
    "Terra-Nova 16 2",
    "Perseus 2.6 4.8",
    "Virgo 1.6 7",
    "2 5",
    "4"
]);
*/
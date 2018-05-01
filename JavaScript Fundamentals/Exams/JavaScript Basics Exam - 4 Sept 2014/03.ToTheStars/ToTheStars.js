function printMessages(arr){
    let [star1_name, x1, y1] = arr[0].split(" ").filter(el => el !== "");
    let [star2_name, x2, y2] = arr[1].split(" ").filter(el => el !== "");
    let [star3_name, x3, y3] = arr[2].split(" ").filter(el => el !== "");
    [x1, x2, x3, y1, y2, y3] = [x1, x2, x3, y1, y2, y3].map(el => Number(el));

    let [initX, initY] = arr[3].split(" ").filter(el => el !== "").map(el => Number(el));
    let moves = parseInt(arr[4]);

    for(let move = 1; move <= moves; move++){
        reportLocation();
        initY++; // moving up
    }

    reportLocation();

    function reportLocation(){
        if(isPassingThroughStar(x1, y1, initX, initY)){
            console.log(star1_name.toLowerCase());
            return;
        }

        if(isPassingThroughStar(x2, y2, initX, initY)){
            console.log(star2_name.toLowerCase());
            return;
        }

        if(isPassingThroughStar(x3, y3, initX, initY)){
            console.log(star3_name.toLowerCase());
            return;
        }

        console.log("space");
    }

    function isPassingThroughStar(star_X, star_Y, x, y){
        if( (x >= star_X - 1 && x <= star_X + 1) &&
            (y >= star_Y - 1 && y <= star_Y + 1)){
            return true;
        }
        return false;
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
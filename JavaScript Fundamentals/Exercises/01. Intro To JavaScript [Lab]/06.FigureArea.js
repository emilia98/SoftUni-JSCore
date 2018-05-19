function calculateFigureArea(arg1, arg2, arg3, arg4){
    let w = parseFloat(arg1);
    let h = parseFloat(arg2);
    let W = parseFloat(arg3);
    let H = parseFloat(arg4);

    let area1 = W * H;
    let area2 = w * h;
    let areaBetween = Math.min(W,w) * Math.min(H,h);
    let totalArea = area1 + area2 - areaBetween;

    console.log(totalArea);
}

/* Uncomment to test:
calculateFigureArea(2, 4, 5, 3);
calculateFigureArea(13, 2, 5, 8);
    */
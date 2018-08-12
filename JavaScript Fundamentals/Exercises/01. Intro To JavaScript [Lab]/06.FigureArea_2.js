function calculateFigureArea(w,h,W,H){
   let [area1, area2, areaBetween] = [w*h, W*H, Math.min(w,W) * Math.min(h,H)];
   console.log(area1 + area2 - areaBetween);
}

/* Uncomment to test:
 calculateFigureArea(2, 4, 5, 3);
 calculateFigureArea(13, 2, 5, 8);
 */
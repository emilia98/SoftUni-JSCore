function printNowPlaying(array){
    "use strict";
    let trackName = array[0];
    let artist = array[1];
    let duration = array[2];
    console.log(`Now Playing: ${artist} - ${trackName} [${duration}]`);
}

/* Uncomment to test:
printNowPlaying(['Number One', 'Nelly', '4:09']);
    */
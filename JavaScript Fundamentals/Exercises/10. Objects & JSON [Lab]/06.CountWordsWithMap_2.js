function countWords(arr){
    let text = arr[0];
    let words = text.split(/\W+/)
                    .filter(el => el !== "")
                    .map(w => w.toLowerCase());
    let wordsData = new Map();

    for (let word of words) {
        if(!wordsData.has(word)){
            wordsData.set(word, 0);
        }
        wordsData.set(word, wordsData.get(word) + 1);
    }

    [...wordsData].sort().forEach( ([word, times]) => {
        console.log(`'${word}' -> ${times} times`);
    });
}

/* Uncomment to test:
countWords(["Far too slow, you're far too slow."]);
countWords(["JS devs use Node.js for server-side JS. -- JS for devs"]);
*/
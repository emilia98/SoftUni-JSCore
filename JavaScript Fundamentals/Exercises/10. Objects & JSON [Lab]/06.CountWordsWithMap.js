function countWords(arr){
    let text = arr[0];
    let words = text.split(/\W+/)
                    .filter(el => el !== "")
                    .map(w => w.toLowerCase());
    let wordsData = new Map();

    for (let word of words) {
        if(!wordsData.has(word)){
            wordsData.set(word, 1);
        }else{
            let olderValue = wordsData.get(word);
            wordsData.set(word, olderValue + 1);
        }
    }

    let sortedWords = Array.from(wordsData.keys()).sort();

    for (let word of sortedWords) {
        console.log(`'${word}' -> ${wordsData.get(word)} times`);
    }
}

/* Uncomment to test:
countWords(["Far too slow, you're far too slow."]);
countWords(["JS devs use Node.js for server-side JS. -- JS for devs"]);
*/
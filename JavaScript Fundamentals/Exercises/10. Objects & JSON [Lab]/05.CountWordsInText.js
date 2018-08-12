function countWords(arr){
    let text = arr.join("\n");
    let words = text.split(/\W+/).filter(el => el !== "");
    let wordsData = {};

    for (let word of words) {
        if(!wordsData.hasOwnProperty(word)){
            wordsData[word] = 0;
        }
        wordsData[word]++;
    }

    console.log(JSON.stringify(wordsData));
}

/* Uncomment to test:
countWords(["Far too slow, you're far too slow."]);
countWords(["JS devs use Node.js for server-side JS.", "-- JS for devs"]);
*/
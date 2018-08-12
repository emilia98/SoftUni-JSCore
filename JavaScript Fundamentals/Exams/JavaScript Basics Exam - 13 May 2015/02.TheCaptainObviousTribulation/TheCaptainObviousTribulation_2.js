function extractRepeatedWords(arr){
    let text1 = arr[0];
    let text2 = arr[1];
    let words = text1.match(/\b[a-zA-Z\-]+\b/g).map(w => w.toLowerCase());
    let sentences = text2.match(/([^\.\?\!]+)(\.|\?|\!)/g).map(el => el.trim());
               
    let repeatedWords = getRepeatedWords(words);
    let matchedSentences = matchSentences();

    if(repeatedWords.size === 0){
        console.log("No words");
        return;
    }

    if(matchedSentences.length === 0){
        console.log("No sentences");
        return;
    }

    matchedSentences.forEach(s => console.log(s));

    function getRepeatedWords(words){
        let repeatedWords = new Set();

        for(let index = 0; index < words.length; index++){
            let word = words[index];
            let counts = 1;

            for(let innerIndex = index + 1; innerIndex < words.length; innerIndex++){
                if(word === words[innerIndex]){
                    counts++;
                }

                if(counts === 3){
                    repeatedWords.add(word);
                    break;
                }
            }        
        }
        return repeatedWords;
    }

    function matchSentences(){
        let matchedSentences = [];

        for(let sentence of sentences){
            let repeatedWordsContained = 0;
            let modifiedSentence = sentence.toLowerCase();

            
            for(let word of repeatedWords){
                let pattern = new RegExp("\\b" + `${word}` + "\\b", "g");


                if(pattern.test(modifiedSentence)){
                    repeatedWordsContained++;
                }
            }

            if(repeatedWordsContained === repeatedWords.size ||
               repeatedWordsContained >= 2){
                   matchedSentences.push(sentence);
               }
        }

        return matchedSentences;
    }
}

/* Uncomment to test:
extractRepeatedWords(["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
"The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."]
);

extractRepeatedWords(["Why, why is he so crazy, so so crazy? Why?",
"There are no words that you should be matching. You should be careful."]
);

extractRepeatedWords(["Why, why? why?",
"Why, why is he so crazy, so so crazy? "]
);
*/
function extractRepeatedWords(arr){
    let text1 = arr[0];
    let text2 = arr[1];
    let words = text1.split(/\W+/g)
                     .filter(el => el !== "")
                     .map(el => el.toLowerCase());
    let sentences = text2.match(/([^\.\?\!]+)(\.|\?|\!)/g).map(el => el.trim());               
    let repeatedWords = getRepeatedWords(words);
    let matchedSentences = matchSentences();

    if(repeatedWords.length === 0){
        console.log("No words");
        return;
    }
    if(matchedSentences.length === 0){
        console.log("No sentences");
        return;
    }

    console.log(matchedSentences.join("\n"));

    function getRepeatedWords(words){
        let repeatedWords = [];
        // words = words.filter(el => (/[a-zA-Z]*[0-9\-]+[a-zA-Z]*/).test(el) === false)
        for(let index = 0; index < words.length; index++){
            let word = words[index];
            let counts = 1;

            if(repeatedWords.indexOf(word) === -1){
                // This word occurs once by now. If we find it two more times, we'll add it to the list 
                for(let innerIndex = index + 1; innerIndex < words.length; innerIndex++){
                    if(word === words[innerIndex]){
                        counts++;
                    }
    
                    if(counts === 3){
                        repeatedWords.push(word);
                        break;
                    }
                }
            }          
        }
        return repeatedWords;
    }

    function matchSentences(){
        let matchedSentences = [];
        for(let sentence of sentences){
            let repeatedWordsContained = 0;
            let modifiedSentence = sentence.substr(0, sentence.length - 1).toLowerCase();
            modifiedSentence = modifiedSentence.split(" ");
        
            for(let word of repeatedWords){
                if(modifiedSentence.indexOf(word) > -1){
                    repeatedWordsContained++;
                }
            }

            if(repeatedWordsContained === repeatedWords.length ||
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
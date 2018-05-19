function checkIfStringEndsWithSubstring(text, subtext){
    let textLength = text.length;
    let subtextLength = subtext.length;

    if(subtextLength > textLength){
        return false;
    }

    let iterations = 0;
    while(iterations < subtextLength){
        if(text[textLength - 1 - iterations] !== subtext[subtextLength - 1 - iterations]){
            return false;
        }

        iterations++;
    }
    return true;
}

/* Uncomment to test:
console.log(checkIfStringEndsWithSubstring("This sentence ends with fun?", "fun?"));
console.log(checkIfStringEndsWithSubstring("This is Houston, we have…", "We have…"));
console.log(checkIfStringEndsWithSubstring("The new iPhone has no headphones jack.", "o headphones jack."));
console.log(checkIfStringEndsWithSubstring("o headphones jack.", "The new iPhone has no headphones jack."));
*/


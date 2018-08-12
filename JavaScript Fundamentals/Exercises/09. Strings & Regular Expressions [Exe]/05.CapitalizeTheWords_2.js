function capitalizeTheWords(str){
    let pattern = new RegExp("[^\\s]+", "g");
    let words = str.match(pattern);

    if(words){
        for (let i in words) {
            words[i] = modifyLetters(words[i]);
        }
    }

    console.log(words.join(" "));

    function modifyLetters(word){
        let newWord = word[0];

        let character = word.charCodeAt(0);
        if(character >= 97 && character <= 122){
            newWord = String.fromCharCode(character - 32);
        }

        for(let index = 1; index < word.length; index++) {
            character = word.charCodeAt(index);
            if (character >= 65 && character <= 90) {
                newWord += String.fromCharCode(character + 32);
                continue;
            }
            newWord += word[index];
        }

        return newWord;
    }
}

/* Uncomment to test:
capitalizeTheWords("Capitalize these words");
capitalizeTheWords("Was that Easy? tRY thIs onE for SiZe!");
*/

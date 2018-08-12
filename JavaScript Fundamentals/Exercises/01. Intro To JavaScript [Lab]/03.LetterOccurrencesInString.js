function countLetterInString(str, letter){
    let strToChar = str.split('').join(',');
    let occurrences = 0;

    for(let i = 0; i < str.length; i++) {
        let currentLetter = str[i];

        if (letter == currentLetter) {
            occurrences++;
        }
    }
    console.log(occurrences);
}

/* Uncomment to test:
countLetterInString('hello', 'l');
countLetterInString('panther', 'n');
    */
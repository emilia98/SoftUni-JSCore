function getWordsToUppercase(str){
    let splitStr = str.split(/\W+/);
    let words = splitStr.filter(element => element != "");
    let uppercasedWords = words.map(word => word.toUpperCase());

    console.log(uppercasedWords.join(", "));
}

/* Uncomment to test:
getWordsToUppercase('Hi, how are you?');
getWordsToUppercase('hello');
*/
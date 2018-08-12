function getWordsToUppercase(str){
    let stringToUppercase = str.toUpperCase();
    let words = extractWords();
    words = words.filter(element => element != "");
    console.log(words.join(", "));

    function extractWords(){
        return stringToUppercase.split(/\W+/);
    }
}

/* Uncomment to test:
getWordsToUppercase('Hi, how are you?');
getWordsToUppercase('hello');
*/

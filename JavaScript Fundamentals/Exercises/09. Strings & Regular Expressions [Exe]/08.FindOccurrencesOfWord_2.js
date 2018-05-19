function findOccurrences(text, word){
    text = text.toLowerCase();
    word = word.toLowerCase();

    let pattern = new RegExp("\\b" + word + "\\b", "g");
    let match = pattern.exec(text);
    let counter = 0;

    while(match != null){
        counter++;
        match = pattern.exec(text);
    }

    console.log(counter);
}


/* Uncomment to test:
findOccurrences("The waterfall was so high, that the child couldn’t see its peak.", "the");
findOccurrences("How do you plan on achieving that? How? How can you even think of that?", "how");
findOccurrences("There was one. Therefore I bought it. I wouldn’t buy it otherwise.", "there");
*/




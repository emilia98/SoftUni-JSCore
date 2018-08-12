function findOccurrences(text, word){
    let buildPattern = "\\b" + word + "\\b";
    let pattern = new RegExp(buildPattern, "gi");

    let matches = text.match(pattern);

    if(matches){
        console.log(matches.length);
    }
    else{
        console.log(0);
    }
}


/* Uncomment to test:
findOccurrences("The waterfall was so high, that the child couldn’t see its peak.", "the");
findOccurrences("How do you plan on achieving that? How? How can you even think of that?", "how");
findOccurrences("There was one. Therefore I bought it. I wouldn’t buy it otherwise.", "there");
*/



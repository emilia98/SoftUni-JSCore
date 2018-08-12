function capitalizeTheWords(str){
    let words = str.split(" ");

    for (let index = 0; index < words.length; index++) {
        let newWord = "";
        newWord = words[index].charAt(0).toUpperCase();
        newWord += words[index].substr(1).toLowerCase();
        words[index] = newWord;
    }
    console.log(words.join(" "));
}

/* Uncomment to test:
capitalizeTheWords("Capitalize these words");
capitalizeTheWords("Was that Easy? tRY thIs onE for SiZe!");
*/
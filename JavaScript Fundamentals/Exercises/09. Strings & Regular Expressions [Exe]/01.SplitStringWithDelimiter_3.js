function splitString(str, delimiter){
    let pattern = new RegExp("[^"+ delimiter + "]+", "g");
    let matches = str.match(pattern);

    if(matches){
        for (let match of matches) {
            console.log(match);
        }
    }
}

/*Uncomment to test:
splitString("One-Two-Three-Four-Five", "-");
splitString("http://platform.softuni.bg", ".");
splitString("", "^");
*/

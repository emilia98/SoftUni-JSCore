function splitString(str, delimiter){
    let delimitedString = str.split(delimiter);
    delimitedString.forEach(el => console.log(el));
}

/*Uncomment to test:
splitString("One-Two-Three-Four-Five", "-");
splitString("http://platform.softuni.bg", ".");
*/
function splitString(str, delimiter){
    return str.split(delimiter).join("\n");
}

/* Uncomment to test:
console.log(splitString("One-Two-Three-Four-Five", "-"));
console.log(splitString("http://platform.softuni.bg", "."));
*/
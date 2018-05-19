function checkIfStringEndsWithSubstring(str, substr){
    let endPart = str.substr(substr.length * -1);
    return endPart.localeCompare(substr) === 0;
}

/* Uncomment to test:
console.log(checkIfStringEndsWithSubstring("This sentence ends with fun?", "fun?"));
console.log(checkIfStringEndsWithSubstring("This is Houston, we have…", "We have…"));
console.log(checkIfStringEndsWithSubstring("The new iPhone has no headphones jack.", "o headphones jack."));
*/

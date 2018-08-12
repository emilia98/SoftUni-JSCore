function checkIfStringStartsWithSubstring(str, substr){
    let startOfString = str.substring(0, substr.length);

    if(startOfString.localeCompare(substr) === 0){
        return true;
    }
    return false;
}

/* Uncomment to test:
console.log(checkIfStringStartsWithSubstring("How have you been?", "how"));
console.log(checkIfStringStartsWithSubstring("The quick brown fox…",
    "The quick brown fox…"));
console.log(checkIfStringStartsWithSubstring("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta"));
console.log(checkIfStringStartsWithSubstring("Marketing Fundamentals, sta", "Marketing Fundamentals, starting 19/10/2016"));
*/


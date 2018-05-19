function checkIfStringStartsWithSubstring(str, substr){
    
    for (let index = 0; index < substr.length; index++) {
       if(str[index] !== substr[index]){
           return false;
       }
    }
    return true;
}

/* Uncomment to test:
console.log(checkIfStringStartsWithSubstring("How have you been?", "how"));
console.log(checkIfStringStartsWithSubstring("The quick brown fox…",
    "The quick brown fox…"));
console.log(checkIfStringStartsWithSubstring("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta"));
console.log(checkIfStringStartsWithSubstring("Marketing Fundamentals, sta", "Marketing Fundamentals, starting 19/10/2016"));
*/

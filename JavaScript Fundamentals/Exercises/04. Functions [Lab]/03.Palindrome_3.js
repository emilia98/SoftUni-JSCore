function findIfPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return reversed === str;
}

/* Uncomment to test:
console.log(findIfPalindrome("haha"));
console.log(findIfPalindrome("racecar"));
console.log(findIfPalindrome("unitinu"));
console.log(findIfPalindrome("a"));
*/

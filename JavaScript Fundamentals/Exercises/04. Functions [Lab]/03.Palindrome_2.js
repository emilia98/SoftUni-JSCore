function findIfPalindrome(str){
    let isPalindrome = checkIfIsPalindrome(str);
    console.log(isPalindrome);

    function checkIfIsPalindrome(str){
        let len  = str.length;

        for(let i = 0; i < (len / 2); i++){
            if(str[i] !== str[len - i - 1]){
                return false;
            }
        }
        return true;
    }
}

/* Uncomment to test:
findIfPalindrome("haha");
findIfPalindrome("racecar");
findIfPalindrome("unitinu");
findIfPalindrome("a");
*/
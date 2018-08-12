function findIfPalindrome(str){
    let len = str.length;

    for(let index = 0; index < len / 2; index++){
        if(!checkIfEquals(str, index, len)){
            console.log(false);
            return;
        }
    }
    console.log(true);

    function checkIfEquals(str, i, len){
        if(str[i] == str[len - i - 1]){
            return true;
        }
        return false;
    }
}

/* Uncomment to test:
findIfPalindrome("haha");
findIfPalindrome("racecar");
findIfPalindrome("unitinu");
findIfPalindrome("a");
*/
function captureNumbers(arr){
    let allMatches = [];

    arr.forEach(str => {
        let matches = str.match(/\d+/g);

        if(matches){
            matches.forEach(match => allMatches.push(match));
        }
    });
    console.log(allMatches.join(" "));
}

/* Uncomment to test
captureNumbers(["The300", "What is that?",
"I think it’s the 3rd movie.", "Lets watch it at 22:45"]);
captureNumbers(["123a456", "789b987", "654c321", "0"]);
captureNumbers(["Let’s go11!!!11!", "Okey!1!"]);
*/
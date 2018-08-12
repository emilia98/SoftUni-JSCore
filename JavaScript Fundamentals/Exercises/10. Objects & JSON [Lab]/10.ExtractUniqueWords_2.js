function extractUniqueWords(arr){
    let uniqueWords = new Set();
    let words = arr.join('\n')
                   .split(/\W+/)
                   .filter(el => el !== "")
                   .map(el => el.toLowerCase())
                   .forEach(el => uniqueWords.add(el));
    console.log([...uniqueWords].join(", "));
}

/*Uncomment to test:
extractUniqueWords(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
"Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
"Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
"Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. ",
"Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
"Integer ac turpis commodo, varius nulla sed, elementum lectus.",
"Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."]);
*/
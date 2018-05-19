function extractLink(arr){
    let pattern = /www(\.[a-zA-Z\-0-9]+)+(\.[a-z]+)+/g;
    let links = [];

    for (let sentence of arr) {
        let match = pattern.exec(sentence);

        while(match != null){
            links.push(match[0]);
            match = pattern.exec(sentence);
        }
    }
    links.forEach(link => console.log(link));
}

/* Uncomment to test:
extractLink(["Join WebStars now for free, at www.web-stars.com",
    "You can also support our partners:",
    "Internet - www.internet.com",
    "WebSpiders - www.webspiders101.com",
    "Sentinel - www.sentinel.-ko"]);
extractLink(["Need information about cheap hotels in London?",
    "You can check us at www.london-hotels.co.uk!",
    "We provide the best services in London.",
    "Here are some reviews in some blogs:",
    "\"London Hotels are awesome!\" - www.indigo.bloggers.com",
    "\"I am very satisfied with their services\" - ww.ivan.bg\n",
    "\"Best Hotel Services!\" - www.rebel21.sedecrem.moc"]);
*/
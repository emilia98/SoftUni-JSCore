function matchSomeText(arr){
    let namesPattern = /(\*[A-Z][A-Za-z]*)(?= \t| |$)/g;
    let phoneNumbersPattern = /(\+[0-9-]{10})(?= \t| |$)/g;
    let idsPattern = /(![0-9A-Za-z]+)(?= \t| |$)/g;
    let secretBasePattern = /(_[0-9A-Za-z]+)(?= \t| |$)/g;

    for (let sentence of arr) {
        sentence = sentence
            .replace(namesPattern, m => "|".repeat(m.length))                   .replace(phoneNumbersPattern, m => "|".repeat(m.length))
            .replace(idsPattern, m => "|".repeat(m.length))
            .replace(secretBasePattern, m => "|".repeat(m.length));

        console.log(sentence);
    }
}

/* Uncomment to test:
matchSomeText(["Agent *Ivankov- Petkov was in the room with*Petkov when it all happened.",
    "The person in the room was heavily armed.",
    "Agent *Ivankov had to act quick in order.",
    "He picked up his phone and called some unknown number.",
    "I think it was +555-49-796",
    "I can't really remember...",
    "He said something about \"finishing work\" with subject   !2491a23BVB34Q _!2491a23BVB34Q and returning to Base _Aurora21",
    "Then after that he disappeared from my sight.",
    "As if he vanished in the shadows.",
    "A moment, shorter than a second, later, I saw the person flying off the top floor.",
    "I really don't know what happened there.",
    "This is all I saw, that night.",
    "I cannot explain it myself..."]);
matchSomeText(['_secretbases are very !cool and !collected',
    'and can also be made of_01230 _whyGlued_butShouldntBeGlued together', '(_SecretBase) or (_SecretBase   ) or (_SikretBase ) or (_SacredBase', '23258_base1 and _ and ___ or ~_~ or @@%#_OPbase',
    '_ALLYOURBASEAREBELONGTOUS   _DOESIT',
*/
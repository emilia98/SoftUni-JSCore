function composeImageTag(array) {
    let location = array[0];
    let alt = array[1];

    console.log(`<img src="${location}" alt="${alt}">`);
}

/* Uncomment to test:
composeImageTag(['smiley.gif', 'Smiley Face']);
    */
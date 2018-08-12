function convertTownsToJSON(arr){
    let cols = arr.shift().split("|")
                          .filter(el => el !== "")
                          .map(el => el.trim());
    let townsData = [];

    for (let data of arr) {
        data = data.split("|")
                 .filter(el => el !== "")
                 .map(el => el.trim());

        let obj = {};
        for(let col = 0; col < cols.length; col++){
            if(cols[col] !== "Town"){
                obj[cols[col]] = Number(data[col]);
                continue;
            }
            obj[cols[col]] = data[col];
        }

        townsData.push(obj);
    }

    console.log(JSON.stringify(townsData));
}

/* Uncomment to test:
convertTownsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
convertTownsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);
*/
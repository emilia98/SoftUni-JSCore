function convertDataToHTML(jsonObj){
    let objArray = JSON.parse(jsonObj);
    let htmlCode = "<table>\n";

    htmlCode += "  <tr><th>name</th><th>score</th></tr>\n";

    for (let obj of objArray) {
        htmlCode += "  <tr>";

        for (let key of Object.keys(obj)) {
            if(key === "name"){
                htmlCode += `<td>${escapeHTML(obj[key])}</td>`;
            }
            else if(key === "score"){
                htmlCode += `<td>${Number(obj[key])}</td>`;
            }
        }
        htmlCode += "</tr>\n";

    }

    htmlCode += "</table>";
    console.log(htmlCode);

    function escapeHTML(text){
        return text.replace(/&/g, "&amp;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;")
                   .replace(/"/g, "&quot;")
                   .replace(/'/g, "&#39;");
    }
}

/* Uncomment to test:
convertDataToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
convertDataToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');
*/
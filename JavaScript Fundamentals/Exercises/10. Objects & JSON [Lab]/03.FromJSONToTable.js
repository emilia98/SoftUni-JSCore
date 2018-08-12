function convertFromHSOnToTable(JSONObjects){
    let arrayOfObjects = JSON.parse(JSONObjects);
    let cols = Object.keys(arrayOfObjects[0]);
    let htmlCode = "<table>\n";

    htmlCode += `  <tr>`;
    for (let col of cols) {
        htmlCode += `<th>${escapeHTML(col)}</th>`;
    }
    htmlCode += `</tr>\n`;

    for (let obj of arrayOfObjects) {
        let values = Object.values(obj);

        htmlCode += `  <tr>`;
        for (let val of values) {
            if(isNaN(val)){
                htmlCode += `<td>${escapeHTML(val)}</td>`;
            }
            else{
                htmlCode += `<td>${val}</td>`;
            }
        }
        htmlCode += `</tr>\n`;
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
convertFromHSOnToTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');

convertFromHSOnToTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
);
*/
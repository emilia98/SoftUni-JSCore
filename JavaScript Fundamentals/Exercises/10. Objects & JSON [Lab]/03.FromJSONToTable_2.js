function convertFromHSOnToTable(JSONObjects){
    let arrayOfObjects = JSON.parse(JSONObjects);
    let cols = Object.keys(arrayOfObjects[0]);
    let htmlCode = "<table>\n";

    htmlCode += convertToHTML(cols, "th");

    for (let obj of arrayOfObjects) {
        let values = Object.values(obj);

        htmlCode += convertToHTML(values, "td");
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

    function convertToHTML(elements, tag){
        let html = "";
        html = `  <tr>`;
        for (let el of elements) {
            if(isNaN(el)){
                html += `<${tag}>${escapeHTML(el)}</${tag}>`;
            }
            else{
                html += `<${tag}>${el}</${tag}>`;
            }
        }
        html += `</tr>\n`;

        return html;
    }
}

/* Uncomment to test:
convertFromHSOnToTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');

convertFromHSOnToTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
);
*/
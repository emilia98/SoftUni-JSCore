function printRandomNumbers(){
    let number = Math.round(Math.random() * 100);

    document.body.innerHTML += `<div>${number}</div>`;
}


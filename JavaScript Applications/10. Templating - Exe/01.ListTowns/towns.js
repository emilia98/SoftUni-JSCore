function attachEvents(){
    const input = $('#towns');
    const loadBtn = $('#btnLoadTowns');
    const source = $('#towns-template').html();
    const container = $('#root');

    loadBtn.click(renderTowns);

    function renderTowns(){
        let tokens = input.val().split(/\s*,\s*/g).filter(el => el !== "");
        //let tokens = input.val().split(", ").filter(el => el !== "");
        let towns = tokens.map(el => {
            return {"town": el}
        });

        let template = Handlebars.compile(source);
        let context = {
            towns
        };
        container.html(template(context))
    }
}
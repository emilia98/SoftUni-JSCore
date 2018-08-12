$(() => {
    const container = $('#allCats');
    let cats = window.cats;
    renderCatTemplate();

    function renderCatTemplate() {
        let source = $('#cat-template').html();
        let template = Handlebars.compile(source);

        let context = {
            cats
        };

        container.html(template(context));

        attachHandlers()
    }

    function attachHandlers(){
        let buttons = $("button.btn").click((e) => {
            //console.log();
            let card = e.target.closest('.card');
            let statusInfo = $(card).find('.card-block div');

            //console.log(statusInfo);
            if(statusInfo.css("display") === "none"){
                statusInfo.css("display", "block");
                $(e.target).text("Hide status code")
            }else{
                statusInfo.hide();
                $(e.target).text("Show status code");
            }
            //console.log($(card).css('display') === 'none')


        })
    }
});

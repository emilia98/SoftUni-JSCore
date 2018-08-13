const loader = function (context, page, partialData, funcLoad) {
    let partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        page: page
    };

    if(partialData) {
        partials[partialData.name] = partialData.path;
    }

    return context.loadPartials(partials).then(function() {
        context.partials = this.partials;

        context.partial('./templates/common/main.hbs').then(() => {
           if(funcLoad) {
               here();
           }
        });

        async function here() {
            return await funcLoad(context);
        }
    })
};

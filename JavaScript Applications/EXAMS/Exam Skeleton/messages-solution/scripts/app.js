$(() => {
    let source = '<h1>Hello, {{name}}</h1>';
    let template = Handlebars.compile(source);

    let context = {
        name: "Pesho"
    };

    $("#main").html(template(context));
})
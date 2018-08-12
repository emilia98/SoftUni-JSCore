const myControllers = {};

$(() => {
    let loadingBox = $('#loadingBox');

    $(document).on({
        ajaxStart: () => loadingBox.show(),
        ajaxStop: () => loadingBox.hide(),
    });

    $('input[type="submit"]').click((e) => e.preventDefault());

    let app = new Sammy("#container .content", function(){
        this.use("Handlebars", "hbs");

        this.get("#/home", (context) => myControllers.displayHome(context));

        this.get("index.html", (context) => myControllers.displayHome(context));

        this.get("#/logout", (context) => myControllers.logout(context));

        this.get("#/catalog", (context) => myControllers.displayPosts(context));

        this.get("#/create", (context) => myControllers.createGet(context));

        this.get("#/edit/:id", (context) => myControllers.editGet(context));

        this.get("#/delete/:id", (context) => myControllers.deletePost(context));

        this.get("#/deleteComment/:id", (context) => myControllers.deleteComment(context));

        this.get("#/myPosts", (context) => myControllers.displayPosts(context, "custom"));

        this.get("#/details/:id", (context) => myControllers.showDetails(context));

        this.post('#/register', (context) => myControllers.registerPost(context));

        this.post('#/login', (context) => myControllers.loginPost(context));

        this.post("#/create", (context) => myControllers.createPost(context));

        this.post("#/edit/:id", (context) => myControllers.editPost(context));

        this.post("#/createComment", (context) => myControllers.createComment(context));
    });

    app.run();
});
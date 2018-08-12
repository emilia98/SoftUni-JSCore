const myControllers = {};

$(() => {
    const app = Sammy('#main', function () {
        this.use("Handlebars", "hbs");

        this.get("index.html", (context) => myControllers.displayHome(context));
        this.get("#/home", (context) => myControllers.displayHome(context));

        // DISPLAY THE ABOUT PAGE
        this.get('#/about', (context) => myControllers.about(context));

        // DISPLAY THE CATALOG PAGE
        this.get('#/catalog', (context) => myControllers.displayCatalog(context));

        // CREATE TEAM PAGE
        this.get('#/create', (context) => myControllers.createGet(context));

        // LOAD TEAM DETAILS
        this.get('#/catalog/:id', (context) => myControllers.getCatalog(context));

        // JOIN TO TEAM
        // sessionStorage can store one value per key, so
        // we can be in only one team at a time
        this.get('#/join/:id', (context) => myControllers.joinTeam(context));

        // LEAVE THE TEAM
        this.get('#/leave', (context) => myControllers.leaveTeam(context));

        // LOAD EDIT FORM
        this.get("#/edit/:id", (context) => myControllers.editGet(context));

        // LOAD THE REGISTER FORM
        this.get('#/register', (context) => myControllers.getRegister(context));

        // LOAD LOGIN FORM
        this.get('#/login', (context) => myControllers.getLogin(context));

        // LOGOUT
        this.get('#/logout', myControllers.logout);

        // REGISTER
        this.post('#/register', (context) => myControllers.postRegister(context));

        // LOGIN
        this.post('#/login', myControllers.postLogin);

        // SEND THE CREATED TEAM TO DB
        this.post('#/create', (context) => myControllers.createPost(context));

        // SEND THE EDITED TEAM
        this.post('#/edit/:id', (context) => myControllers.editPost(context));

        // DELETE THE TEAM
        this.get('#/delete/:id', (context) => myControllers.deleteTeam(context));
    });

    app.run();
});
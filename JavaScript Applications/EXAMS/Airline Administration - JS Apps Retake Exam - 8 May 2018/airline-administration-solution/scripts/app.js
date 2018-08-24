const handlers = {};
const helpers = {};

let isAuth;
$(() => {
    isAuth = utils.hasUser();

    const app = Sammy('#container', function() {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.home);

        this.get('#/login', handlers.login);
        this.post('#/login', handlers.loginPost);

        this.get('#/register', handlers.register);
        this.post('#/register', handlers.registerPost);

        this.get('#/logout', handlers.logout);

        this.get('#/flight/create', handlers.createForm);
        this.post('#/flight/create', handlers.createFlight);

        this.get('#/flight/details/:id', handlers.getDetails);

        this.get('#/flight/edit/:id', handlers.getEditForm);
        this.post('#/flight/edit/:id', handlers.editFlight);

        this.get('#/flights/my', handlers.showMyFlights);
        this.get('#/flight/remove/:id', handlers.deleteFlight);

        this.get('#/redirect', handlers.redirect);

        this.get('#/redirect_follow/:username', handlers.redirectFollow)
    });

    app.run();
});
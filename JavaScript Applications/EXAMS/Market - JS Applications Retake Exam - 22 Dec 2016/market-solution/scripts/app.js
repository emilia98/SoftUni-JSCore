const handlers = {};
let isAuth;
$(() => {
    isAuth = utils.hasUser();

    const app = Sammy('#main', function() {
        console.log(isAuth);
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.home);

        this.get('#/login', handlers.login);
        this.post('#/login', handlers.loginPost);

        this.get('#/register', handlers.register);
        this.post('#/register', handlers.registerPost);

        this.get('#/shop', handlers.getProducts);
        this.get('#/cart', handlers.getCart);

        this.get('#/logout', handlers.logout);
    });

    app.run();
});
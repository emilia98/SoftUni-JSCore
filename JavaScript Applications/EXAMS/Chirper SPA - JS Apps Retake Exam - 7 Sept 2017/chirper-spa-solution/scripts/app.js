const handlers = {};
let isAuth;
$(() => {
    isAuth = utils.hasUser();

    const app = Sammy('#main', function() {
        console.log(isAuth);
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.home);
        this.get('#/feed', handlers.redirectHome);

        this.get('#/login', handlers.login);
        this.post('#/login', handlers.loginPost);

        this.get('#/register', handlers.register);
        this.post('#/register', handlers.registerPost);

        this.get('#/logout', handlers.logout);

        this.post('#/chirp/create', handlers.createChirp);

        this.get('#/me', handlers.showMyFeed);
        this.get('#/redirect', handlers.redirect);

        this.get('#/chirp/delete/:id', handlers.deleteChirp);

        this.get('#/discover', handlers.discoverUsers);
        this.get('#/profile/:username', handlers.getUserProfile);

        this.get('#/follow/:username', handlers.followUser);
        this.get('#/redirect_follow/:username', handlers.redirectFollow)
    });

    app.run();
});
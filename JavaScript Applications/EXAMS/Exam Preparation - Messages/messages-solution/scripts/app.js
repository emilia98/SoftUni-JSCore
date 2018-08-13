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

        this.get('#/messages/my', handlers.myMessages);

        this.get('#/messages/archive', handlers.showArchive);

        this.get('#/message/send', handlers.getMessageForm);
        this.post('#/message/send', handlers.sendMessage);

        this.get('#/logout', handlers.logout);
    });

    app.run();
});
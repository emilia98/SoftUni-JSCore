const handlers = {};

$(() => {
    const app = Sammy('#main', function() {
        this.use('Handlebars', 'hbs');

        this.get('index.html', function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                notifications: './templates/common/notifications.hbs',
                page: './templates/home/anonymous.hbs'
            }).then(function() {
                this.partial('./templates/common/main.hbs')
            })
        });

        this.get('#/login', handlers.login);
        this.post('#/login', handlers.loginPost);

        this.get('#/register', function() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                notifications: './templates/common/notifications.hbs',
                page: './templates/auth/register.hbs'
            }).then(function() {
                this.partial('./templates/common/main.hbs')
            })
        });

        this.get('#/messages/my', function() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                notifications: './templates/common/notifications.hbs',
                page: './templates/messages/my-messages.hbs'
            }).then(function() {
                this.partial('./templates/common/main.hbs')
            })
        });
        this.get('#/messages/archive', function() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                notifications: './templates/common/notifications.hbs',
                page: './templates/messages/archive.hbs'
            }).then(function() {
                this.partial('./templates/common/main.hbs')
            })
        });

        this.get('#/message/send', function() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                notifications: './templates/common/notifications.hbs',
                page: './templates/messages/send-message.hbs'
            }).then(function() {
                this.partial('./templates/common/main.hbs')
            })
        });

        this.get('#/logout', function() {
            alert('Logged out!');
        });

    });

    app.run();
});
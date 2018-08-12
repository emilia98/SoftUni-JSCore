handlers.login = function() {
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        notifications: './templates/common/notifications.hbs',
        page: './templates/auth/login.hbs'
    }).then(function() {
        this.partial('./templates/common/main.hbs')
    })
};

handlers.loginPost = function() {
    let username = this.params.username;
    let password = this.params.password;


    console.log(this.params);
};

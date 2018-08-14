handlers.login = function(context) {
    context.isAuth = isAuth;

    loader(this, './templates/auth/login.hbs');
};

handlers.loginPost = function(context) {
    let username = this.params.username;
    let password = this.params.password;

    async function login() {
        let userData;

        try {
            userData = await auth.login(username, password);

            auth.saveSession(userData);
            isAuth = true;
            notifications.showInfo('Login successful!');
            context.redirect('#');

        } catch (err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred when logging in!');
            }
        }
    }

    login();
};

handlers.register =  function(context) {
    context.isAuth = isAuth;

    loader(this, './templates/auth/register.hbs');
};

handlers.registerPost = function(context) {
    let {username, password, name} = this.params;

    async function register() {
        let userData;

        try {
            userData = await auth.register(username, password, name);
            isAuth = true;
            auth.saveSession(userData);
            notifications.showInfo('User registration successful!');
            context.redirect('#');
        } catch (err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while signing up!');
            }
        }
    }

    register();
};

handlers.logout = function(context) {
    async function logout() {
        let result;

        try {
            result = await auth.logout();
            localStorage.clear();
            isAuth = false;
            notifications.showInfo('Logout successful!');
            context.redirect('#');

        } catch (err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while logging out!');
            }
        }
    }

    logout();
};

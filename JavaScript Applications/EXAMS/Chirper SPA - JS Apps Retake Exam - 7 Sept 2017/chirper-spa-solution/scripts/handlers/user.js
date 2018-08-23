handlers.login = function(context) {
    context.isAuth = isAuth;

    loader(this, './templates/auth/login.hbs');
};

handlers.loginPost = function(context) {
    let username = this.params.username;
    let password = this.params.password;

    if(!username || username.length < 5) {
        notifications.showError('The username should be at least 5 chars long!');
        return ;
    }

    if(!password || password.length === 0) {
        notifications.showError('The password should not be empty!');
        return ;
    }

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
            return context.redirect("#/login");
        }
    }

    login();
};

handlers.register =  function(context) {
    context.isAuth = isAuth;

    loader(this, './templates/auth/register.hbs');
};

handlers.registerPost = function(context) {
    let {username, password, repeatPass} = this.params;

    if(!username || username.length < 5) {
        notifications.showError('The username should be at least 5 chars long!');
        return ;
    }

    if(!password || password.length === 0) {
        notifications.showError('The password should not be empty!');
        return ;
    }

    if(!repeatPass || repeatPass !== password) {
        notifications.showError('Both passwords should pass!');
        return ;
    }

    async function register() {
        let userData;

        try {
            userData = await auth.register(username, password);
            isAuth = true;
            auth.saveSession(userData);
            notifications.showInfo('User registration successful!');
            context.redirect('#/feed');
        } catch (err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while signing up!');
            }
            return context.redirect("#");
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
            context.redirect('#/login');

        } catch (err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while logging out!');
            }
            return context.redirect("#/login");
        }
    }

    logout();
};

myControllers.loginPost = function(context){
    let username = context.params.username;
    let password = context.params.password;

    if(/\b[A-Za-z]{3,}\b/.test(username) === false){
        auth.showError("The username should be at least 3 chars long and can contain only English Letters!");
        return;
    }

    if(/\b[A-Za-z0-9]{6,}\b/.test(password) === false){
        auth.showError("The password should be at least 6 chars long and can contain only English Letters and digits!");
        return;
    }

    auth.login(username, password)
        .then((userData) => {
            auth.saveSession(userData);
            auth.showInfo("Login successful.");
            context.params.username = "";
            context.params.password = "";
            myControllers.displayHome(context);
        })
        .catch((reason) => auth.handleError(reason));
};
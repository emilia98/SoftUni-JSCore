myControllers.registerPost = function(context){
    let username = context.params.username;
    let password = context.params.password;
    let repeatPassword = context.params.repeatPass;


    if(/\b[A-Za-z]{3,}\b/.test(username) === false){
        auth.showError("The username should be at least 3 chars long and can contain only English Letters!");
        return;
    }

    if(/\b[A-Za-z0-9]{6,}\b/.test(password) === false){
        auth.showError("The password should be at least 6 chars long and can contain only English Letters and digits!");
        return;
    }

    if(password !== repeatPassword){
        auth.showError("Passwords don't match!");
        return;
    }

    auth.register(username, password)
        .then((userData) => {
            auth.saveSession(userData);
            auth.showInfo("User registration successful.");
            myControllers.displayHome(context);
        })
        .catch((reason) => auth.handleError(reason));
}
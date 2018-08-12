myControllers.getRegister = function(context){
    context.loadPartials({
        header: "templates/common/header.hbs",
        footer: "templates/common/footer.hbs",
        registerForm: "templates/register/registerForm.hbs"
    }).then(function(){
        this.partial("templates/register/registerPage.hbs")
    })
};

myControllers.postRegister = function(context){
    let username = context.params.username;
    let password = context.params.password;
    let repeatPassword = context.params.repeatPassword;

    if(username.length === 0){
        auth.showError("The username cannot be empty!");
        return;
    }

    if(password.length === 0){
        auth.showError("The password cannot be empty!");
        return;
    }

    if(repeatPassword !== password){
        auth.showError("The passwords don't match!");
        return;
    }

    auth.register(username, password)
        .then(function (data) {
            auth.saveSession(data);
            auth.showInfo("Registered successfully!");
            myControllers.displayCatalog(context);
        }).catch(auth.handleError);
};
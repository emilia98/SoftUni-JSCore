myControllers.getLogin = function(context) {
    context.loadPartials({
        header: "templates/common/header.hbs",
        footer: "templates/common/footer.hbs",
        loginForm: "templates/login/loginForm.hbs"
    }).then(function(){
        this.partial("templates/login/loginPage.hbs")
    })
};


myControllers.postLogin = function(context){
    let username = context.params.username;
    let password = context.params.password;

    auth.login(username, password)
        .then(function (data) {
            auth.saveSession(data);
            auth.showInfo("The login was successful!");
            myControllers.displayCatalog(context);
        }).catch(auth.handleError);
}
myControllers.about = function(context){
    context.loggedIn = sessionStorage.getItem("authtoken") !== null;
    context.username = sessionStorage.getItem("username");
    context.loadPartials({
        header: "templates/common/header.hbs",
        footer: "templates/common/footer.hbs"
    }).then(function(){
        this.partial("templates/about/about.hbs")
    })
};
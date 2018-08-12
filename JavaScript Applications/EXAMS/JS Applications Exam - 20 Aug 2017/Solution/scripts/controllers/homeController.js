myControllers.displayHome = function(context){
    context.loggedIn = sessionStorage.getItem("authtoken") !== null;

    if(context.loggedIn === false){
        context.loadPartials({
            header: "templates/common/header.hbs",
            footer: "templates/common/footer.hbs",
        }).then(function(){
            this.partial("templates/home/anonymousHome.hbs")
        })
    }else{
        myControllers.displayPosts(context);
    }
};
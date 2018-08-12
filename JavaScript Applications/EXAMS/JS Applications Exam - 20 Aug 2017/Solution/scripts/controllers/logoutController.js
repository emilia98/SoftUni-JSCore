myControllers.logout = function(context){
    auth.logout()
        .then(function(){
            auth.showInfo("Logout successful.");
            sessionStorage.clear();
            context.redirect("#/home");
        })
        .catch(reason => auth.handleError(reason));
};
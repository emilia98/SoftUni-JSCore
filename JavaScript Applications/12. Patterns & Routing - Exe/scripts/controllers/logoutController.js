myControllers.logout =  function(){
    auth.logout()
        .then(() => {
            sessionStorage.clear();
            auth.showInfo("Successful logout!");
            this.redirect('#');
        })
};
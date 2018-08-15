handlers.home = function() {
    let page = './templates/home/anonymous.hbs';

    if(auth.isAuthenticated()) {
        this.username = localStorage.getItem('username');
        page = './templates/home/user-home.hbs';
    }

    this.isAuth = isAuth;
    loader(this, page);
};

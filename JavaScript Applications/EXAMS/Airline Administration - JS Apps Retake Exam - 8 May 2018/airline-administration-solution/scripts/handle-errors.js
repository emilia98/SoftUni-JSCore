const handleErrors = (err, msg, auth) => {
    if (err.responseJSON) {
        if(auth.change) {
            isAuth = auth.isAuth
        }
        notifications.showError(err.responseJSON.description);
    } else {
        notifications.showError(msg);
    }
};
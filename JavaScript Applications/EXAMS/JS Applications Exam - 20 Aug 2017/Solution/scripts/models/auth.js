let auth = (() => {
    function saveSession(userInfo){
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem("authtoken", userAuth);
        let username = userInfo.username;
        sessionStorage.setItem("user", username);
        let userId = userInfo._id;
        sessionStorage.setItem("userId", userId);
    }

    // Register
    function register(username, password){
        let registerData = {
            username,
            password,
        };

        // module -> user
        //  endpoint -> collection
        return requester.post('user', "", "basic", registerData);
    }

    // Login
    function login(username, password){
        let loginData = {
            username,
            password
        };
        return requester.post("user", "login", "basic", loginData);
    }

    // Logout
    function logout(){
        let logoutData = {
            authtoken: sessionStorage.getItem("authtoken")
        };

        return requester.post('user', '_logout', "kinvey", logoutData);
    }

    function handleError(reason){
        showError(reason.responseJSON.description);
    }

    function showInfo(message){
        let infoBox = $('#infoBox');
        infoBox.empty();
        let innerSpan = $('<span>').text(message);
        infoBox.append(innerSpan);

        infoBox.click(function(){
            $(this).hide();
        });

        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);

    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.empty();
        let innerSpan = $('<span>').text(message);

        errorBox.append(innerSpan)
        errorBox.text();
        errorBox.show();

        errorBox.click(function(){
            $(this).hide();
        })
    }

    return {
        login,
        register,
        logout,
        saveSession,
        showInfo,
        showError,
        handleError
    }
})();

let auth = (() => {
    function isAuthenticated(){
        return localStorage.getItem('authtoken') !== null;
    }

    function saveSession(data){
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
    }

    function login(username, password) {
        let data = {
            username, password
        };
        return remote.post('user', 'login', data, 'Basic');
    }

    async function register(username, password) {
        let data = {
            username, password, subscriptions: []
        };
        return remote.post('user', '', data, 'Basic');
    }

    async function logout() {
        let authtoken = localStorage.getItem('authtoken');
        return remote.post('user', '_logout', { authtoken : authtoken});
    }

    return {
        isAuthenticated, saveSession, login, register, logout
    }
})();
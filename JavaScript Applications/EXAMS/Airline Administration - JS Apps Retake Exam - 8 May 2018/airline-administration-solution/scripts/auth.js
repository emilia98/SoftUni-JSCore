let auth = (() => {
    function isAuthenticated(){
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(data){
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('id', data._id);
        sessionStorage.setItem('authtoken', data._kmd.authtoken);
    }

    function login(username, password) {
        let data = {
            username, password
        };
        return remote.post('user', 'login', data, 'Basic');
    }

    async function register(username, password) {
        let data = {
            username, password
        };
        return remote.post('user', '', data, 'Basic');
    }

    async function logout() {
        let authtoken = sessionStorage.getItem('authtoken');
        return remote.post('user', '_logout', { authtoken : authtoken});
    }

    return {
        isAuthenticated, saveSession, login, register, logout
    }
})();
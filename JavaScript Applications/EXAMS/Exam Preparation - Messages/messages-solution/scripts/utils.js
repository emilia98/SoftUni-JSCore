const utils = {};

utils.hasUser = function() {
    if(auth.isAuthenticated()) {
        return true;
    }
    return false;
};

utils.getUsername = function() {
    return localStorage.getItem('username');
};

utils.formatDate = function(givenDate) {
    let date = new Date(givenDate);
    if (Number.isNaN(date.getDate()))
        return '';
    return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
        "." + date.getFullYear() + ' ' + date.getHours() + ':' +
        padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

    function padZeros(num) {
        return ('0' + num).slice(-2);
    }
};
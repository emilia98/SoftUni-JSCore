let remote = (() => {
    const baseUrl = 'https://baas.kinvey.com';
    const appKey = 'kid_H1wA0o6BQ';
    const appSecret = '0ef6192b37fe433784a91f539f3b392e';

    function generateHeaders(type) {
        if(type === 'Basic') {
            return `Basic ${btoa(appKey + ':' + appSecret)}`;
        }
        return `Kinvey ${localStorage.getItem('authtoken')}`
    }

    // -------------------------------------
    // method -> GET | POST | PUT | DELETE
    // module -> user | appdata
    // authType -> Basic | Kinvey

    function generateRequest(method, module, endpoint, authType) {
        return {
            url: baseUrl + '/' + module + '/' + appKey + '/' + endpoint,
            method,
            headers: {
                'Authorization': generateHeaders(authType)
            }
        };
    }

    function get(module, endpoint, authType) {
        return $.ajax(generateRequest('GET', module, endpoint, authType));
    }

    function post(module, endpoint, data, authType) {
        let request = generateRequest('POST', module, endpoint, authType);
        request.data = JSON.stringify(data);
        request.headers['Content-Type'] = 'application/json';
        return $.ajax(request);
    }

    function update(module, endpoint, data, authType) {
        let request = generateRequest('PUT', module, endpoint, authType);
        request.data = JSON.stringify(data);
        request.headers['Content-Type'] = 'application/json';
        return $.ajax(request);
    }

    function remove(module, endpoint, authType) {
        return $.ajax(generateRequest('DELETE', module, endpoint, authType));
    }

    return {
        get, post, update, remove
    }
})();
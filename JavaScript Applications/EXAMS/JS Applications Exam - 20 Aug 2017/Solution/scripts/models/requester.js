let requester = (() => {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_H1I_b4f2G";
    const appSecret = "8c6420ec38694f11b09d834daffeb2bd";

    // Creates the authentication header
    function authorize(type){
        if(type === "basic"){
            return "Basic " + btoa(appKey + ":" + appSecret);
        }
        return "Kinvey " + sessionStorage.getItem("authtoken");

    }

    // Creates request object to kinvey
    // module => user/appdata
    // endpoint -> collectionName/login/logout
    // auth -> "basic"/ "kinvey"
    function makeRequest(method, module, endpoint, auth){
        return {
            method,
            url: baseUrl + module + "/" + appKey + "/" + endpoint,
            headers: {
                'Authorization': authorize(auth),
                'Content-Type': "application/json",
            }
        }
    }

    // GET promise
    function get(module, endpoint, auth){
        return $.ajax(makeRequest("GET", module, endpoint, auth));
    }

    // POST promise
    function post(module, endpoint, auth, data){
        let req = makeRequest("POST", module, endpoint, auth);
        req.data = JSON.stringify(data);
        return $.ajax(req);
    }

    // PUT promise
    function update(module, endpoint, auth, data){
        let req = makeRequest("PUT", module, endpoint, auth);
        req.data = JSON.stringify(data);
        return $.ajax(req);
    }

    // DELETE promise
    function remove(module, endpoint, auth){
        return $.ajax(makeRequest("DELETE", module, endpoint, auth));
    }

    return {
        get, post, update, remove
    };
})();
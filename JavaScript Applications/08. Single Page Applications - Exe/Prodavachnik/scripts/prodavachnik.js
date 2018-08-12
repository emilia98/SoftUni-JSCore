function startApp() {

    // Application constants
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_HJwvZH7jM";
    const appSecret = "644f88995af2414c812ee44458a704d9";

    // References to all the buttons
    let homeLink = $('#linkHome');
    let loginLink = $('#linkLogin');
    let registerLink = $('#linkRegister');
    let listAdsLink = $('#linkListAds');
    let createAdLink = $('#linkCreateAd');
    let logoutLink = $('#linkLogout');

    // References to all the forms
    let formLogin = $('#formLogin');
    let formRegister = $('#formRegister');
    let formCreate = $('#formCreateAd');
    let formEdit = $('#formEditAd');

    let loadingBox = $('#loadingBox');
    let infoBox = $('#infoBox');
    let errorBox = $('#errorBox');

    let loggedIn = $('#loggedInUser');
    let adsTable = $('#ads table');
    let goBack = $('#goBack');
    goBack.click(() => showView("list"));

    homeLink.show();
    loginLink.show();
    registerLink.show();
    listAdsLink.show();
    createAdLink.show();
    logoutLink.show();

    /*
     Initial state of the application - the home view and if we are
     loggged in - a greeting.
     */
    showView();
    setGreeting();

    $(document).on({
        ajaxStart: () => loadingBox.show(),
        ajaxStop: () => loadingBox.hide(),
    });

    function showInfo(message){
        errorBox.hide(); // overlapping happens
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message){
        errorBox.text(message);
        errorBox.show();
    }

    // Click on the notification to hide it
    infoBox.click((event) => $(event.target).hide()); // arrow  functions don't have context, so use alternative syntax to achieve the same effect
    errorBox.click(function(){
        $(this).hide();
    });

    homeLink.click(showView);
    loginLink.click(() => showView("login"));
    registerLink.click(() => showView("register"));
    listAdsLink.click(() => showView("list"));
    createAdLink.click(() => showView("create"));
    logoutLink.click(logout);

    $('#buttonLoginUser').click(login);
    $('#buttonRegisterUser').click(register);
    $('#buttonCreateAd').click(createAd);

    function showView(view){
        $('section').hide();

        switch(view){
            case "login": {
                $('#viewLogin').show();
                break;
            }
            case "register": {
                $('#viewRegister').show();
                break;
            }
            case "list": {
                listAdverts();
                $('#viewAds').show();
                break;
            }
            case "create": {
                $('#viewCreateAd').show();
                break;
            }
            case "edit": {
                $('#viewEditAd').show();
                break;
            }
            case "readMore":{
                $('#viewMore').show();
                break;
            }
            default: {
                $('#viewHome').show();
                break;
            }
        }
    }

    function generateHeader(type){
        let header = {
             "Authorization": null,
            "Content-Type": "application/json",
        };

        if(type === "basic"){
            header.Authorization = "Basic " + btoa(`${appKey}:${appSecret}`)

        }else{
            header.Authorization = "Kinvey " + localStorage.getItem("authtoken");
        }

        return header;
    }

    // Shows greeting after the user logs in or registers
    /* We need to show greeting to the user not only after logging in, but when the application starts
     */
    function setGreeting(){
        let username = localStorage.getItem("username");

        if(username !== null){
            loggedIn.show();
            loggedIn.text(`Welcome, ${username}`);
            loginLink.hide();
            registerLink.hide();
            listAdsLink.show();
            createAdLink.show();
            logoutLink.show();

        }else{
            loggedIn.hide();
            loginLink.show();
            registerLink.show();
            listAdsLink.hide();
            createAdLink.hide();
            logoutLink.hide();
        }
    }

    function setStorage(userData){
        localStorage.setItem("username", userData.username);
        localStorage.setItem("authtoken", userData._kmd.authtoken);
        localStorage.setItem("userId", userData._id);
        setGreeting();
        showView("list");
    }

    function login(e){
        e.preventDefault();

        let username = $(formLogin).find('input[name="username"]').val();
        let password = $(formLogin).find('input[name="passwd"]').val();

        let req = {
            url: `${baseUrl}user/${appKey}/login`,
            method: "POST",
            headers: generateHeader("basic"),
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) => {
                setStorage(data);
                showInfo("Login successfully!");
            } ,
            error: handleError
        };

        $.ajax(req);
    }

    function register(e){
        e.preventDefault();

        let username = $(formRegister).find('input[name="username"]').val();
        let password = $(formRegister).find('input[name="passwd"]').val();
        let confirmedPassword = $(formRegister).find('input[name="repeat_passwd"]').val();

        if(username.length === 0){
            showError("Username cannot be empty!");
            return;
        }

        if(password.length === 0){
            showError("Password cannot be empty!");
            return;
        }

        if(password !== confirmedPassword){
            showError("Passwords don't match!");
            return;
        }

        let req = {
            url: `${baseUrl}user/${appKey}`,
            method: "POST",
            headers: generateHeader("basic"),
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) => {
                setStorage(data);
                showInfo("Register successfully!");
            },
            error: handleError
        };

        $.ajax(req);
    }

    function logout(){
        let req = {
            url: `${baseUrl}user/${appKey}/_logout`,
            method: "POST",
            headers: generateHeader("kinvey"),
            success: () => {
                logoutSuccessfully();
                showInfo("Logout successfully!");
            },
            error: handleError
        };

        $.ajax(req);

        function logoutSuccessfully(data){
            localStorage.clear();
            setGreeting();
            showView();
        }

    }

    function listAdverts(){
        let req = {
            url: `${baseUrl}appdata/${appKey}/adverts?query={}&sort={"views": -1}`,
            method: "GET",
            headers: generateHeader("kinvey"),
            success: displayAdverts,
            error: handleError
        };

        $.ajax(req);

        function displayAdverts(data){
            $(adsTable).find("tr").not(":first-child").remove();

            for(let advert of data){
                let readMoreBtn = $(`<button>&#10154;</button>`).click(() => readMore(advert));

                let actions_td = $(`<td>`).append(readMoreBtn);
                let row = $('<tr>');
                row.append(`<td>${advert.title}</td>`)
                    .append(`<td>${advert.publisher}</td>`)
                    .append(`<td>${advert.description}</td>`)
                    .append(`<td>${advert.price}</td>`)
                    .append(`<td>${advert.publishDate}</td>`)
                    .append(`<td>${advert.views}</td>`);

                // If the current user is the publisher of the advert -> additional options
                if(advert._acl.creator === localStorage.getItem("userId")){
                    let editBtn = $(`<button>&#9998;</button>`).click(() => editAdvert(advert));
                    let deleteBtn = $(`<button>&#10006;</button>`).click(() => deleteAdvert(advert._id));
                    actions_td
                        .append(editBtn)
                        .append(deleteBtn)
                }

                row.append(actions_td);
                row.appendTo(adsTable);
            };
        }
    }

    function createAd(){
        let title = formCreate.find('input[name="title"]').val();
        let description = formCreate.find('textarea[name="description"]').val();
        let publishDate = formCreate.find('input[name="datePublished"]').val();
        let price = Number(formCreate.find('input[name="price"]').val());
        let imgLink = formCreate.find('input[name="img"]').val();
        let views = 0;
        let publisher = localStorage.getItem("username");

        let advert = {
            title,
            description,
            publishDate,
            publisher,
            price,
            imgLink,
            views
        };

        if(advert.title.length === 0){
            showError("Title cannot be empty!");
            return;
        }

        if(advert.description.length === 0){
            showError("Description cannot be empty");
            return;
        }

        if(advert.publishDate.length === 0){
            showError("Publish date cannot be empty!");
            return;
        }

        if(advert.price.length === 0){
            showError("Price cannot be empty!");
            return;
        }

        let req = {
            url: `${baseUrl}appdata/${appKey}/adverts`,
            method: "POST",
            headers: generateHeader("kinvey"),
            data: JSON.stringify(advert),
            success: createSuccess,
            error: handleError,
        };

        $.ajax(req);

        function createSuccess(data){
            formCreate.trigger("reset");
            showView("list");
        }
    }

    function editAdvert(advert){
        showView("edit");

        // Fill the form first with the values of the given advert
        let editTitle = formEdit.find('input[name="title"]');
        let editDescription = formEdit.find('textarea[name="description"]');
        let editPublishDate = formEdit.find('input[name="datePublished"]');
        let editPrice = formEdit.find('input[name="price"]');
        let editImgLink = formEdit.find('input[name="img"]');
        let views = advert.views;
        let publisher = advert.publisher;

        editTitle.val(advert.title);
        editDescription.val(advert.description);
        editPublishDate.val(advert.publishDate);
        editPrice.val(Number(advert.price));
        editImgLink.val(advert.imgLink);

        // When click on the Edit button
        $('#buttonEditAd').click(edit);

        function edit(e){
            e.preventDefault();

            let editedAdvert = {
                title: $(editTitle).val(),
                description: $(editDescription).val(),
                publishDate: $(editPublishDate).val(),
                price: $(editPrice).val(),
                imgLink: $(editImgLink).val(),
                publisher,
                views
            };

            if(editedAdvert.title.length === 0){
                showError("Title cannot be empty!");
                return;
            }

            if(editedAdvert.description.length === 0){
                showError("Description cannot be empty");
                return;
            }

            if(editedAdvert.publishDate.length === 0){
                showError("Publish date cannot be empty!");
                return;
            }

            if(editedAdvert.price.length === 0){
                showError("Price cannot be empty!");
                return;
            }

            let req = {
                url: `${baseUrl}appdata/${appKey}/adverts/${advert._id}`,
                method: "PUT",
                headers: generateHeader("kinvey"),
                data: JSON.stringify(editedAdvert),
                success: () => {
                    showView("list");
                    showInfo("Successful edit!");
                },
                error: handleError
            };

            $.ajax(req);
        }
    }

    function deleteAdvert(advertId){
        let req = {
            url: `${baseUrl}appdata/${appKey}/adverts/${advertId}`,
            method: "DELETE",
            headers: generateHeader("kinvey"),
            success: deleteSuccess,
            error: handleError
        };

        $.ajax(req);

        function deleteSuccess(data){
            showView("list");
            showInfo("Book deleted!");
        }
    }
    
    function readMore(advert) {
        alert("There is a bug here: See the console...");
        console.log("If you're not the publisher of this ad, you won't be able to read it ... Try login with (username, password) = (pesho, p)");

        let req = {
            url: `${baseUrl}appdata/${appKey}/adverts/${advert._id}`,
            method: "PUT",
            headers: generateHeader("kinvey"),
            data: JSON.stringify({
                title: advert.title,
                description: advert.description,
                publishDate: advert.publishDate,
                publisher: advert.publisher,
                price: advert.price,
                imgLink: advert.imgLink,
                views: advert.views + 1
            }),
            success: readMoreSuccess,
            error: handleError
        };

        $.ajax(req);

        function readMoreSuccess(advert) {
            showView("readMore");
            let img = $('#advertImg');
            let description = $('#read_description p');
            let publisher = $('#read_publisher p');
            let date = $('#read_date p');
            let title = $('#container h1');
            let view = $('#read_views span.bold');
            title.text(advert.title);
            description.text(advert.description);
            publisher.text(advert.publisher);
            date.text(advert.publishDate);
            view.text(advert.views);

            if(advert.imgLink.length === 0){
                img.attr("src", "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg");
            }else{
                img.attr("src", advert.imgLink);
            }
        }
    }

    function handleError(reason){
        showError(reason.responseJSON.description);
    }
}
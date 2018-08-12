$(() => {

    //Application constants
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_HkBVlcxjz";
    const appSecret = "0250717710334b10b858189bb60bcb1b";

    // References to elements, used more than once
    let homeBtn = $('#toHome');
    let loginBtn = $('#toLogin');
    let registerBtn = $('#toRegister');
    let listBooksBtn = $('#toListBooks');
    let createBookBtn =  $('#toCreateBook');
    let logoutBtn = $('#toLogout');

    let infoBox = $('#infoBox');
    let errorBox = $('#errorBox');
    let booksTable = $('#viewBooks').find('table').find('tbody');
    let loginForm = $('#viewLogin').find('form');
    let registerForm = $('#viewRegister').find('form');
    let createForm = $('#viewCreate').find('form');
    let editForm = $('#viewEdit').find('form');

    showView("home");
    setGreeting();

    // Event Listeners on the element in the menu
    homeBtn.click(() => showView("home"));
    loginBtn.click(() => showView("login"));
    registerBtn.click(() => showView("register"));
    listBooksBtn.click(() => showView("list"));
    createBookBtn.click(() => showView("create"));
    logoutBtn.click(logout);

    /*
     If we use this code localStorage.clear(); showView(home);
     It will work, but on the server the authotoken won't be deleted, so it's not a good idea, since we want the authtoken to be deleted or to become invalid, so we won't use it for next login
    $('#toLogout').click(() => {
        localStorage.clear();
        showView("home")
    });
    */

    // Adds an event listener to the submit button of the filled form
    loginForm.submit(login);
    registerForm.submit(register);
    createForm.submit(createBook);
    
    /*
     Prevent the default behaviour of the <input type="submit"> to send data and to refresh the page, since we do not want that
      */

    //$('form > input[type=submit]').click();

    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').hide(),
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
    infoBox.click((event) => $(event.target).hide()); // arrow functions don't have context, so use alternative syntax to achieve the same effect
    errorBox.click(function(){
        $(this).hide();
    });


    function showView(name) {
        $("section").hide();

        switch (name) {
            case "home": {
                $('#viewHome').show();
                break;
            }
            case "login": {
                $('#viewLogin').show();
                break;
            }
            case "register": {
                $('#viewRegister').show();
                break;
            }
            case "list": {
                getBooks();
                $('#viewBooks').show();
                break;
            }
            case "create": {
                $('#viewCreate').show();
                break;
            }
            case "edit": {
                $('#viewEdit').show();
                break;
            }
            case "logout": {
                $('#viewLogout').show();
                break;
            }
        }
    }

    function generateHeader(type){
        if(type === "basic"){
            return {
                "Authorization": "Basic " + btoa(`${appKey}:${appSecret}`),
                "Content-Type": "application/json"
            }
        }else{
            return {
                "Authorization": "Kinvey " + localStorage.getItem("authtoken"),
                "Content-Type": "application/json"
            }
        }
    }

    /* We need to show greeting to the user not only after logging in, but when the application starts
     */
    function setGreeting(){
        let username = localStorage.getItem("username");

        if(username !== null){
            $('#loggedInUser').text(`Welcome, ${username}!`);
            loginBtn.hide();
            registerBtn.hide();
            listBooksBtn.show();
            createBookBtn.show();
            logoutBtn.show();
        }else{
            $('#loggedInUser').text("");
            loginBtn.show();
            registerBtn.show();
            listBooksBtn.hide();
            createBookBtn.hide();
            logoutBtn.hide();
        }
    }

    // Shows greeting after the user logs in or registers
    function setStorage(data){
            localStorage.setItem("authtoken", data._kmd.authtoken);
            localStorage.setItem("username", data.username);
            localStorage.setItem("userId", data._id);
            setGreeting();
            /* acts as a redirection to the books list */
            showView("list");
    }

    function login(e) {
        e.preventDefault();
        let username = $('#loginUsername');
        let password = $('#loginPassword');

        let req = {
            url: `${baseUrl}user/${appKey}/login`,
            method: "POST",
            headers: generateHeader("basic"),
            data: JSON.stringify({
                username: username.val(),
                password: password.val()
            }),
            success: (data) => {
                showInfo("Login successfully!");
                setStorage(data)
            } ,
            error: handleError
        };

        $.ajax(req);
    }

    function register(e) {
        e.preventDefault();

        let username = $('#registerUsername').val();
        let password = $('#registerPassword').val();
        let confirmedPassword = $('#confirmPassword').val();

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
                showInfo("Register successfully!");
                setStorage(data)
            },
            error: handleError
        };

        $.ajax(req);
    }

    function logout() {
        let req = {
            url: `${baseUrl}user/${appKey}/_logout`,
            method: "POST",
            headers: generateHeader("kinvey"),
            success: () => {
                showInfo("Logout successfully!");
                logoutSuccessfully()
            },
            error: handleError
        };

        $.ajax(req);

        function logoutSuccessfully(data){
            localStorage.clear();
            setGreeting();
            showView('home');
        }
    }

    function getBooks(){
        let req = {
            url: `${baseUrl}appdata/${appKey}/books`,
            method: "GET",
            headers: generateHeader("kinvey"),
            success: displayBooks,
            error: handleError,
        };

        $.ajax(req);

        function displayBooks(data){
            booksTable.empty();

            for(let book of data){
                let actions = [];

                // Checks if the currently logged in user is the creator of this book
                if(book._acl.creator === localStorage.getItem('userId')){
                    /* Here we can attach an event click and pass the book id as an argument to the function, that will be called as a result of clicking on the button. This ensures that if we want to click on a button, attached to this book, the right action will be done.

                     */
                    actions.push($('<button>&#9998;</button>').click(() => editBook(book)));
                    actions.push($('<button>&#10006;</button>').click(() => deleteBook(book._id)));
                }
                let row = $('<tr>');
                row.append(`<td>${book.title}</td>`)
                    .append(`<td>${book.author}</td>`)
                    .append(`<td>${book.description}</td>`)
                    .append($(`<td>`).append(actions));
                row.appendTo(booksTable);
            }
        }
    }

    function createBook() {
        let title = $('#createTitle').val();
        let author = $('#createAuthor').val();
        let description = $('#createDescription').val();

        // Validate title and author
        if(title.length === 0){
            showError("Title cannot be empty!");
            return;
        }

        if(author.length === 0){
            showError("Author cannot be empty!");
            return;
        }

        let req = {
            url: `${baseUrl}appdata/${appKey}/books`,
            method: "POST",
            headers: generateHeader("kinvey"),
            data: JSON.stringify({
                title,
                author,
                description
            }),
            success: createSuccess,
            error: handleError
        };

        $.ajax(req);

        function createSuccess(data){
            createForm.trigger("reset");
            showView("list");
        }
    }

    function deleteBook(bookId){
        let req = {
            url: `${baseUrl}appdata/${appKey}/books/${bookId}`,
            method: "DELETE",
            headers: generateHeader("kinvey"),
            success: deleteSuccess,
            error: handleError,
        };

        $.ajax(req);

        function deleteSuccess(data){
            showInfo("Book deleted!");
            showView("list");
        }

    }

    /* If we want to use the id of the book, we should
       send another request for the other information from the book.
       (BECAUSE WE WANT TO POPULATE THE EDIT FORM WITH THE OLD DATA OF THIS BOOK)
       If we don't want to send one redundant request, we could
       send as an argument not the bookId, but the book itself.
     */
    function editBook(book){
        showView("edit");

        let editTitle = $('#editTitle');
        let editAuthor = $('#editAuthor');
        let editDescription = $('#editDescription');

        editTitle.val(book.title);
        editAuthor.val(book.author);
        editDescription.val(book.description);

        editForm.submit(edit);

        function edit(e){
            e.preventDefault();

            let editedBook = {
                title: $(editTitle).val(),
                author: $(editAuthor).val(),
                description: $(editDescription).val()
            };

            if(editedBook.title.length === 0){
                showError("Title cannot be empty!");
                return;
            }

            if(editedBook.author.length === 0){
                showError("Author cannot be empty!");
                return;
            }

            let req = {
                url: `${baseUrl}appdata/${appKey}/books/${book._id}`,
                method: 'PUT',
                headers: generateHeader("kinvey"),
                data: JSON.stringify(editedBook),
                success: editSuccess,
                error: handleError
            };

            $.ajax(req);

            function editSuccess(data){
                showInfo("Book edited successfully!");
                showView("list");
            }
        }
    }

    function handleError(reason){
        showError(reason.responseJSON.description)
    }
});
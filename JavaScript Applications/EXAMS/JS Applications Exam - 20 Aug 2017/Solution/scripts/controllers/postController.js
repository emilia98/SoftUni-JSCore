myControllers.displayPosts = function (context, type) {
    context.user = sessionStorage.getItem("user");
    context.loggedIn = sessionStorage.getItem("authtoken") !== null;
    let endPoint = "posts?query={}&sort={\"_kmd.ect\": -1}";

    if(type === "custom"){
        endPoint = `posts?query={\"author\":\"${sessionStorage.getItem("user")}\"}&sort={\"_kmd.ect\": -1}`;
        context.userPosts = true;
    }

    requester.get("appdata", endPoint, "kinvey")
        .then((posts) => {
            let allPosts = [];
            let counter = 1;

            for (let post of posts) {

                allPosts.push({
                    title: post.title,
                    url: post.url,
                    imageUrl: post.imageUrl,
                    description: post.description,
                    rank: counter,
                    creationInfo: service.generateInfo(post),
                    isAuthor: post._acl.creator === sessionStorage.getItem("userId"),
                    id: post._id
                });

                counter++;
            }
            context.posts = allPosts;

            context.loadPartials({
                header: "templates/common/header.hbs",
                footer: "templates/common/footer.hbs",
                navigation: "templates/common/navigation.hbs",
                postInfo: "templates/catalog/postInfo.hbs",
                post: "templates/catalog/post.hbs",
                loadPosts: "templates/catalog/listPosts.hbs",
            }).then(function () {
                this.partial("templates/home/userHome.hbs")
            });

        })
        .catch(reason => auth.handleError(reason));
};


myControllers.createGet = function (context) {
    context.loggedIn = sessionStorage.getItem("authtoken") !== null;
    context.user = sessionStorage.getItem("user");

    context.loadPartials({
        header: "templates/common/header.hbs",
        footer: "templates/common/footer.hbs",
        navigation: "templates/common/navigation.hbs",
    }).then(function () {
        this.partial("templates/posts/create.hbs")
    })
};

myControllers.createPost = function (context) {
    let dataToSend = service.getFormData(context);

    // Validations
    if(service.validatePost(dataToSend.url, dataToSend.title) === false){
        return;
    }

    requester.post("appdata", "posts", "kinvey", dataToSend)
        .then((postData) => {
            auth.showInfo("Post created.");
            context.redirect("#/catalog");
        })
        .catch(reason => auth.handleError(reason));
};

myControllers.editGet = function(context){
    let postId = context.params.id.substr(1);

    requester.get("appdata", "posts/" + postId, "kinvey")
        .then((postData) => {
            context.loggedIn = sessionStorage.getItem("authtoken") !== null;
            context.user = sessionStorage.getItem("user");


            context.url = postData.url;
            context.title = postData.title;
            context.image = postData.imageUrl;
            context.description = postData.description;
            context.id = postData._id;

            context.loadPartials({
                header: "templates/common/header.hbs",
                footer: "templates/common/footer.hbs",
                navigation: "templates/common/navigation.hbs",
            }).then(function () {
                this.partial("templates/posts/edit.hbs")
            })
        })
        .catch(reason => auth.handleError(reason));
};

myControllers.editPost = function(context){
    let postId = context.params.id.substr(1);

    let dataToSend = service.getFormData(context);
    dataToSend._id = postId;

    // Validations
    if(service.validatePost(dataToSend.url, dataToSend.title) === false){
        return;
    }

    requester.update("appdata", "posts/" + postId, "kinvey", dataToSend)
        .then((postData) => {
            auth.showInfo(`Post ${dataToSend.title} updated.`);
            context.redirect("#/catalog");
        })
        .catch(reason => {
            auth.handleError(reason)
        });
};

myControllers.deletePost = function(context){
    let postId = context.params.id.substr(1);

    requester.remove("appdata", "posts/" + postId, "kinvey")
        .then((postDeleted) => {
            auth.showInfo("Post deleted.");
            context.redirect("#/catalog");
        })
        .catch(reason => auth.handleError(reason));
};
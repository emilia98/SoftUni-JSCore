myControllers.showDetails = function(context){
    let postId = context.params.id.substr(1);

    context.user = sessionStorage.getItem("user");
    context.loggedIn = sessionStorage.getItem("authtoken") !== null;

    requester.get("appdata", "posts/" + postId, "kinvey")
        .then((postData) => {
            context.isAuthor = postData._acl.creator === sessionStorage.getItem("userId");
            context.detailsView = true;
            context.url = postData.url;
            context.title = postData.title;
            context.imageUrl = postData.imageUrl;
            context.description = postData.description;
            context.creationInfo = service.generateInfo(postData);
            context.author = postData.author;
            context.id = postData._id;

            if(postData.description.length === 0){
                context.description = "No description";
            }

            requester.get("appdata", `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`, "kinvey").then((commentsData) => {
                let postComments = [];

                for(let comment of commentsData){
                    postComments.push({
                        text: comment.content,
                        creationInfo: service.generateInfo(comment),
                        isAuthor: sessionStorage.getItem("userId") === comment._acl.creator,
                        id: comment._id
                    })
                }

                context.comments = postComments;

                context.loadPartials({
                    header: "templates/common/header.hbs",
                    footer: "templates/common/footer.hbs",
                    navigation: "templates/common/navigation.hbs",
                    postInfo: "templates/catalog/postInfo.hbs",
                    comment: "templates/comments/comment.hbs"
                }).then(function(){
                    this.partial("templates/comments/postDetails.hbs");
                    sessionStorage.setItem("currentPostId", postId);
                })
            });
        });
};


myControllers.createComment = function(context){
    let dataToSend = {
        content: context.params.content,
        author: sessionStorage.getItem("user"),
        postId: sessionStorage.getItem("currentPostId")
    };

    if(dataToSend.content.length === 0){
        auth.showError("The content cannot be empty!");
        return;
    }

    requester.post("appdata", "comments", "kinvey", dataToSend)
        .then((commentInfo) => {
            auth.showInfo("Comment created.");
            context.redirect(`#/details/:${dataToSend.postId}`);
        })
        .catch(reason => auth.handleError(reason))
};

myControllers.deleteComment = function(context){
    let commentId = context.params.id.substr(1);

    requester.remove("appdata", "comments/" + commentId, "kinvey")
        .then(() => {
            auth.showInfo("Comment deleted.");
            context.redirect(`#/details/:${sessionStorage.getItem("currentPostId")}`);
        })
        .catch(reason => auth.handleError(reason));
};


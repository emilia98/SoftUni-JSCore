handlers.getUserProfile = function(context) {
    context.isAuth = isAuth;
    let username = this.params.username;

    let currentUserId = localStorage.getItem('id');
    let currentUser;
    let userChirps = null;
    let followings = null;
    let followers = null;
    let endpoints = {
        user: `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`,
        followings: `?query={"username":"${username}"}`,
        followers: `?query={"subscriptions":"${username}"}`
    };

    async function getUser() {
        try {
            userChirps = await remote.get('appdata', endpoints.user);
            followings = await remote.get('user', endpoints.followings);
            followers = await remote.get('user', endpoints.followers);
            currentUser = await remote.get('user', currentUserId);
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting user information!');
            }
            return context.redirect("#");
        }

        let chirps = [];
        let isFollowed = currentUser.subscriptions.indexOf(username) > -1;

        for(let chirp of userChirps) {
            let isAuthor = chirp['_acl'].creator === localStorage.getItem('id');
            let time = utils.calcTime(chirp['_kmd'].lmt);

            chirps.push({
                isAuthor,
                text: chirp.text,
                author: chirp.author,
                time,
                id: chirp._id,

            });
        }

        context.isFollowed = isFollowed;
        context.username = username;
        context.chirps = chirps;
        context.chirpsCount = chirps.length;
        context.followings = followings.length > 0 ? followings[0].subscriptions.length : 0;
        context.followers = followers.length;
        loader(context, './templates/view/profile.hbs');
    }

    getUser();
};

handlers.followUser = function(context) {
    let username = this.params.username;
    let currentUser;
    let currentUserId = localStorage.getItem('id');
    let hasFollowed = false;

    async function changeFollowStatus() {
        try {
            currentUser = await remote.get('user', currentUserId);
        } catch(err) {
            console.log(err);
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting user information!');
            }
            return context.redirect("#");
        }

        let subscriptions = currentUser.subscriptions;
        let indexOfUser = subscriptions.indexOf(username);

        if(indexOfUser === -1) {
            currentUser.subscriptions.push(username);
            hasFollowed = true;
        } else {
            currentUser.subscriptions.splice(indexOfUser, 1);
        }

        let data = {
            "subscriptions": currentUser.subscriptions
        };

        try {
            await remote.update('user', currentUserId, data);
        } catch(err) {
            console.log(err);
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('An error occurred while following/unfollowing a user!');
            }
            return context.redirect("#");
        }


        if(hasFollowed) {
            notifications.showInfo(`Subscribed to ${username}!`);
        } else {
            notifications.showInfo(`Unsubscribed to ${username}!`);
        }
        context.redirect('#/redirect_follow/' + username);
    }

    changeFollowStatus();
};

handlers.redirectFollow = function(context) {
  context.redirect(`#/profile/` + this.params.username);
};


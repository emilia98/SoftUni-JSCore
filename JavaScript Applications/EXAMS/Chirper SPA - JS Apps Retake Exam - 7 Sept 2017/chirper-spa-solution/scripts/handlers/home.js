handlers.home = function(context) {
    let username = localStorage.getItem('username');
    let page = './templates/view/feed.hbs';

    context.isAuth = isAuth;
    context.username = localStorage.getItem('username');

    if(!auth.isAuthenticated()) {
        page = './templates/auth/register.hbs';
        return loader(this, page);
    }

    let endpoints = {
        myChirps: `chirps?query={"author":"${username}"}&sort={"_kmd.ect": -1}`,
        following: `?query={"username":"${username}"}`,
        followers: `?query={"subscriptions":"${username}"}`,

    };
    let currentUserId = localStorage.getItem('id');
    let followingChirps = [];

    async function getMyChirps() {
        let myChirps;
        let followers, followings;
        let user;
        try {
            myChirps = await remote.get('appdata', endpoints.myChirps);
            followers = await remote.get('user', endpoints.followers);
            followings = await remote.get('user', endpoints.following);
            user = await remote.get('user', currentUserId);
            followingChirps = await remote.get('appdata', `chirps?query={"author":{"$in": ${JSON.stringify(user.subscriptions)}}}&sort={"_kmd.ect": 1}`);
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting my chirps!');
            }
            return context.redirect("#");
        }

        let chirps = [];

        for(let chirp of followingChirps) {
            let isAuthor = chirp['_acl'].creator === localStorage.getItem('id');
            let time = utils.calcTime(chirp['_kmd'].lmt);

            chirps.push({
                isAuthor,
                text: chirp.text,
                author: chirp.author,
                time,
                id: chirp._id
            });
        }

        context.chirpsToShow = chirps;
        context.myChirpsCount = myChirps.length;
        context.followersCount = followers.length;
        context.followingsCount = followings[0].subscriptions.length;
        loader(context, './templates/view/feed.hbs');
    }

    getMyChirps();
};

handlers.redirectHome = function(context){
    context.redirect('#');
};

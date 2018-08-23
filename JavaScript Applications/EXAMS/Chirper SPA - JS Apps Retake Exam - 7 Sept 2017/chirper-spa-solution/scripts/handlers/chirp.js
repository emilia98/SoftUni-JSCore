handlers.createChirp = function(context) {
    let chirpText = this.params.text;

    if(!chirpText) {
        notifications.showError('The text of the chirp is required!');
        return;
    }

    if(chirpText.length === 0) {
        notifications.showError('The text of the chirp should not be empty!');
        return;
    }

    if(chirpText.length > 150) {
        notifications.showError('The text of the chirp should not be more than 150 chars long!');
        return;
    }

    let data = {
        text: chirpText,
        author: localStorage.getItem('username')
    };


    try {
        remote.post('appdata', 'chirps', data);
        notifications.showInfo('Chirp published!');
        context.redirect('#/redirect');
    } catch(err) {
        if(err.responseJSON) {
            notifications.showError(err.responseJSON.description);
        } else {
            notifications.showError('Error occurred while creating new chirp!');
        }
    }
};

handlers.redirect = function(context) {
    context.redirect('#/me');
};

handlers.showMyFeed = function(context) {
    context.isAuth = isAuth;
    context.username = localStorage.getItem('username');

    let username = localStorage.getItem('username');
    let endpoints = {
        myChirps: `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`,
        following: `?query={"username":"${username}"}`,
        followers: `?query={"subscriptions":"${username}"}`
    };

    async function getMyChirps() {
        let myChirps;
        let followers, followings;

        try {
            myChirps = await remote.get('appdata', endpoints.myChirps);
            followers = await remote.get('user', endpoints.followers);
            followings = await remote.get('user', endpoints.following);
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting my chirps!');
            }
            return context.redirect("#");
        }

        let chirps = [];

        for(let chirp of myChirps) {
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

        context.myChirps = chirps;
        context.myChirpsCount = chirps.length;
        context.followersCount = followers.length;
        context.followingsCount = followings[0].subscriptions.length;
        loader(context, './templates/view/me.hbs');
    }

    getMyChirps();
};

handlers.deleteChirp = function(context) {
    let id = this.params.id;

    async function deleteChirp() {
        let endpoint = `chirps/${id}`;

        try {
            await remote.remove('appdata', endpoint);
            notifications.showInfo('Chirp deleted!');
            context.redirect('#/me');
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting my chirps!');
            }
            return context.redirect("#");
        }
    }

    deleteChirp();
};


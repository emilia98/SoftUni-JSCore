handlers.discoverUsers = function(context) {
    context.isAuth = isAuth;
    let allUsers = [];

    async function getUsers() {
        try {
            allUsers = await remote.get('user', '')
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting all the users!');
            }
            return context.redirect("#");
        }

        let currentUserId = localStorage.getItem('id');
        let endpoint;
        let users = [];

        for(let user of allUsers) {
            if(user._id !== currentUserId) {
                endpoint = `?query={"subscriptions":"${user.username}"}`;
                let userFollowers;

                try {
                    userFollowers = await remote.get('user', endpoint);
                } catch(err) {
                    console.log(err);
                    if(err.responseJSON) {
                        notifications.showError(err.responseJSON.description);
                    } else {
                        notifications.showError('Error occurred while getting my chirps!');
                    }
                    return context.redirect("#");
                }

                users.push({
                    username: user.username,
                    id: user._id,
                    followers: userFollowers.length
                });
            }
        }

        context.users = users;
        loader(context, './templates/view/discover.hbs');
    }

    getUsers();
};
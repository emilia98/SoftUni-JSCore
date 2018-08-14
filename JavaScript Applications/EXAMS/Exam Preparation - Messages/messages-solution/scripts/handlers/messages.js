handlers.myMessages = function(context) {
    context.isAuth = isAuth;
    context.username = utils.getUsername();

    let additionalPartial = {
        name: 'message',
        path: './templates/messages/message.hbs'
    };
    loader(context, './templates/messages/my-messages.hbs', additionalPartial, loadMessages);

    async function loadMessages() {
        let myMessages;

        try {
            let username = localStorage.getItem('username');
            myMessages = await remote.get('appdata', `messages?query={"recipient_username":"${username}"}`);

            myMessages.forEach(m => {
                m.dateSended = utils.formatDate(m._kmd.lmt);
            });
            context.messages = myMessages;
        } catch (err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting messages!');
            }
        }

        let toRender = './templates/messages/messageList.hbs';
        context.render(toRender).then(function() {
            this.replace('#myMessages')
        });
    }
};

handlers.getMessageForm = function(context) {
    context.isAuth = isAuth;
    context.username = utils.getUsername();

    async function loadUsers() {
        let users;

        try {
            users = await remote.get('user', '');

            context.users = users;
            loader(context, './templates/messages/send-message.hbs');
        } catch (err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting users!');
            }
        }
    }

    loadUsers();
};

handlers.sendMessage = function(context) {
    let message = {
        sender_username: localStorage.getItem('username'),
        sender_name: localStorage.getItem('name'),
        recipient_username: this.params.recipient,
        text: this.params.text
    };

    async function send() {
        let data;

        try {
            data = await remote.post('appdata', 'messages', message);
            notifications.showInfo('Message sent.');
            context.redirect('#/messages/archive');
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting users!');
            }
        }
    }

    send();
};

handlers.showArchive = function(context) {
    context.isAuth = isAuth;
    context.username = utils.getUsername();

    let additionalPartial = {
        name: 'message',
        path: './templates/messages/message.hbs'
    };
    loader(context, './templates/messages/archive.hbs', additionalPartial, loadMessages);

    async function loadMessages() {
        let myMessages;

        try {
            let username = localStorage.getItem('username');
            myMessages = await remote.get('appdata', `messages?query={"sender_username":"${username}"}`);

            myMessages.forEach(m => {
                m.dateSended = utils.formatDate(m._kmd.lmt);
            });
            context.messages = myMessages;
            console.log(myMessages);
        } catch (err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('Error occurred while getting messages!');
            }
        }

        let toRender = './templates/messages/messages-send.hbs';
        context.render(toRender).then(function() {
            this.replace('#sentMessages').then(() => {
                $('.delete-btn').click((event) => deleteEntry(event, context))
            })
        });
    }

};

async function deleteEntry(event, context) {
    let entryId = $(event.target).attr('data-id');
    let endpoint = 'messages/' + entryId;

    let result;

    try {
        result = await remote.remove('appdata', endpoint);
        notifications.showInfo('Message deleted.');
        context.redirect('#messages/archive');
        $(event.target).parent().parent().remove();
    } catch(err) {
        console.log(err);
        if(err.responseJSON) {
            notifications.showError(err.responseJSON.description);
        } else {
            notifications.showError('Error occurred while deleting a message!');
        }
    }

}
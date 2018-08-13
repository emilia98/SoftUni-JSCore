const notifications = {};

$(document).on({
    ajaxStart: () => $('#loadingBox').show(),
    ajaxStop: () => $('#loadingBox').fadeOut()
});

$(() => {
    let infoBox = $('#infoBox');
    let errorBox = $('#errorBox');

    infoBox.click((event) => {
        $(event.target).hide()
    });
    errorBox.click((event) => {
        $(event.target).hide()
    });

    notifications.showInfo = (message) => {
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => {
            infoBox.fadeOut()
        }, 3000);
    }

    notifications.showError = (message) => {
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => {
            errorBox.fadeOut()
        }, 3000);
    }
});
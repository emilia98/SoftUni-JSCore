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
        infoBox.html(`<span>${message}</span>`);
        infoBox.show();
        setTimeout(() => {
            infoBox.fadeOut()
        }, 3000);
    };

    notifications.showError = (message) => {
        errorBox.html(`<span>${message}</span>`);
        errorBox.show();
        setTimeout(() => {
            errorBox.fadeOut()
        }, 3000);
    }
});
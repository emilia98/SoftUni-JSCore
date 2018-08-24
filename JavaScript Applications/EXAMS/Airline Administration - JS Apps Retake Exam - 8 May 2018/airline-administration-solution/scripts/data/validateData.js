helpers.validateFlight = function (that) {
    let destination = that.params.destination;
    let origin = that.params.origin;
    let isPublic = that.params.public;
    let seats = that.params.seats;
    let cost = that.params.cost;
    let imageUrl = that.params.img;
    let date = that.params.departureDate;
    let time = that.params.departureTime;

    let intNumberPattern = /^([0-9]+)$/;
    let numberPattern = /^([0-9]+)|([0-9]*?(\.)[0-9]+)$/;

    console.log('*********')
    if(!destination || destination.length === 0) {
        notifications.showError('Destination cannot be empty!');
        return null;
    }

    if(!origin || origin.length === 0) {
        notifications.showError('Origin cannot be empty!');
        return null;
    }

    if(!intNumberPattern.test(seats)) {
        notifications.showError('Seats should be a positive integer number!');
        return null;
    }

    if(!numberPattern.test(cost)) {
         notifications.showError('Costs should be a positive number!');
        return null;
    }

    if(!date || date.length === 0) {
        notifications.showError('Date cannot be empty!');
        return null;
    }

    if(!time || time.length === 0) {
       notifications.showError('Time cannot be empty!');
        return null;
    }

    let departureDate = new Date(date + ' ' + time);

    if(!imageUrl || imageUrl.length === 0) {
        imageUrl = null;
    }

    if(!isPublic) {
        isPublic = false
    } else {
        isPublic = true
    }

    let data = {
        destination,
        origin,
        seats,
        cost,
        departureTime: departureDate,
        image: imageUrl,
        isPublic
    };

    return data;
}
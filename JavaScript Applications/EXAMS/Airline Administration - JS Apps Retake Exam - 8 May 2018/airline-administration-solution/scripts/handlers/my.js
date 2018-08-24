handlers.showMyFlights = function(context) {
    let myFlights;
    let userId = sessionStorage.getItem('id');
    context.isAuth = isAuth;
    context.username = utils.getUsername();

    async function getMyFlights() {
        try {
            myFlights = await remote.get('appdata', `flights?query={"_acl.creator":"${userId}"}`);
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('An error occurred while getting my flights!');
            }
            return;
        }

        let flights = [];

        for(let flight of myFlights) {
            let departure = new Date(flight.departureTime);
            flight.departureDate = departure.getFullYear() + '-' + ("0" + (departure.getMonth() + 1)).slice(-2) + '-' + ("0" + departure.getDate()).slice(-2);
            flight.departureTime = ("0" + departure.getHours()).slice(-2) + ':' + ("0" + departure.getMinutes()).slice(-2);

            flights.push(flight);
        }

        context.flights = flights;
        loader(context, './templates/flight/my.hbs');
    }

    getMyFlights();
};

handlers.deleteFlight = function(context) {
    let flightId = this.params.id;

    async function remove() {
        try {
            await remote.remove('appdata', `flights/${flightId}`);
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('An error occurred while getting my flights!');
            }
            return;
        }

        notifications.showInfo('Flight deleted!');
        context.redirect('#/flights/my');
    }

    remove();
};
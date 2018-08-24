handlers.createForm = function(context) {
    context.isAuth = isAuth;
    context.username = utils.getUsername();
    loader(this, './templates/flight/create.hbs');
};

handlers.createFlight = function(context) {
    let result = helpers.validateFlight(this);
    if(result === null) {
        return;
    }
    async function createFlight() {
        try {
            await remote.post('appdata', 'flights', result);
            notifications.showInfo('Created flight!');
            context.redirect('#');
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('An error occurred while creating a flight!');
            }
            return;
        }
    }

    createFlight();
};

handlers.getDetails = function(context) {
    let flightId = this.params.id;
    context.isAuth = isAuth;
    context.username = utils.getUsername();

    async function findFlight() {
        let flight;

        try {
            flight = await remote.get('appdata', `flights/${flightId}`);
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('An error occurred while getting a flight!');
            }
            return;
        }

        let date = new Date(flight.departureTime);
        let month = months[date.getMonth()];
        let day = date.getDate();
        let hour = ("0" + date.getHours()).slice(-2);
        let minutes = ("0" + date.getMinutes()).slice(-2);
        let isCreator = flight['_acl'].creator === sessionStorage.getItem('id');

        let data = {
            id: flight._id,
            destination: flight.destination,
            origin: flight.origin,
            seats: flight.seats,
            cost: flight.cost,
            date: day + ' ' + month,
            time: hour + ':' + minutes,
            isCreator,
            image: flight.image
        };

        context.flight = data;
        loader(context, './templates/flight/details.hbs');
    }

    findFlight();
};

handlers.getEditForm = function(context) {
    let flightId = this.params.id;
    context.isAuth = isAuth;
    context.username = utils.getUsername();

    async function getFlightToEdit() {
        let flight;

        try {
            flight = await remote.get('appdata', `flights/${flightId}`);
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('An error occurred while getting a flight!');
            }
            return;
        }

        if(flight['_acl'].creator !== sessionStorage.getItem('id')) {
            notifications.showError('You cannot edit this entry!');
            return context.redirect('#');
        }

        let departure = new Date(flight.departureTime);
        flight.departureDate = departure.getFullYear() + '-' + ("0" + (departure.getMonth() + 1)).slice(-2) + '-' + ("0" + departure.getDate()).slice(-2);
        flight.departureTime = ("0" + departure.getHours()).slice(-2) + ':' + ("0" + departure.getMinutes()).slice(-2);

        if(!flight.image || flight.image.length === 0) {
            flight.image = ''
        }

        context.flight = flight;
        loader(context, './templates/flight/edit.hbs');
    }

    getFlightToEdit();
};

handlers.editFlight = function(context) {
   let result = helpers.validateFlight(this);

   let flightId = this.params.id;

   if(result === null) {
       return;
   }

    let data = result;

    async function edit() {
        try {
            await remote.get('appdata', `flights/${flightId}`);
            await remote.update('appdata', `flights/${flightId}`, data);
        } catch(err) {
            console.log(err);
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('An error occurred while getting a flight!');
            }
            return;
        }

        notifications.showInfo('Successfully edited flight!');
        context.redirect(`#/flight/details/${flightId}`);
    }

    edit();
};

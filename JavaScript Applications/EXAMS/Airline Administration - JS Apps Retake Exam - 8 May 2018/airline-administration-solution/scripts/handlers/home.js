const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

handlers.home = function(context) {
    let username = sessionStorage.getItem('username');
    let page = './templates/flight/list-all.hbs';

    context.isAuth = isAuth;
    context.username = username;

    async function getAllFlights() {
        let allFlights = [];

        try {
            allFlights = await remote.get('appdata', 'flights?query={"isPublic":true}');
        } catch(err) {
            if(err.responseJSON) {
                notifications.showError(err.responseJSON.description);
            } else {
                notifications.showError('An error occurred while getting all flights!');
            }

            return;
        }

        let flights = [];

        for(let flight of allFlights) {
            let date = new Date(flight.departureTime);
            let month = months[date.getMonth()];
            let day = date.getDate();

            flights.push({
                id: flight._id,
                month,
                day,
                destination: flight.destination,
                origin: flight.origin,
                imageUrl: flight.image
            });
        }
        context.flights = flights;
        return loader(context, page);
    }



    getAllFlights();
};

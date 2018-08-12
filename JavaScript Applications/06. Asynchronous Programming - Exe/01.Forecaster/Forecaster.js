function attachEvents(){
    const submitBtn = $('#submit');
    const url = "https://judgetests.firebaseio.com/";
    const forecast = $('#forecast');
    const current = $('#current');
    const upcoming = $('#upcoming');
    const error = $('<p class="label"></p>');
    //let labels = $('.label');

    submitBtn.click(requestLocation);

    function request(customUrl){
        let req = {
            url: `${url}${customUrl}`,
            method: "GET",
        };
        //console.log(req.url);
        return $.ajax(req);
    }

    function requestLocation(){
        let location = $('#location').val();

        current.find('*').not('.label').remove();
        upcoming.find('*').not('.label').remove();
        //upcoming.not($(".label")).empty();

        //forecast.empty();
        //current.empty();
        //upcoming.empty();
        error.text();
        forecast.css("display", "none");
        error.css("display", "none");
        request(`locations.json`)
            .then(returnLocationId)
            .then(requestCurrentConditions)
            .then(requestThreeDayForecast)
            .catch(handleError);

        function returnLocationId(data){
            for(let entry of data){
                if(entry.name === location){
                    return entry.code;
                }
            }

            throw new Error("Cannot find this location!");
        }

        function requestCurrentConditions(locationId) {
            //console.log(locationId);
            let  myUrl = `forecast/today/${locationId}.json`;

            request(myUrl)
                .then(showConditions)
                .catch(handleError);

            return locationId;

            function showConditions(data){
                let locationName = data.name;
                let condition = data.forecast.condition;
                let lowest = data.forecast.low;
                let highest = data.forecast.high;

                let symbol = $(weatherSymbol(condition)).addClass("condition");
                let span_condition = $('<span class="condition"></span>');
                span_condition
                    .append(generateData(locationName))
                    .append(generateData(`${lowest}&#176;/${highest}&#176;`))
                    .append(generateData(condition));
                //symbol.append((weatherSymbol(condition)));

                //let
                //span_condition.append()

                symbol.appendTo(current);
                span_condition.appendTo(current);
                forecast.css("display", "block");
                //console.log(locationName);
                //console.log(condition);
                //console.log(data);
            }
        }

        function requestThreeDayForecast(locationId){
            let  myUrl = `forecast/upcoming/${locationId}.json `;

            request(myUrl)
                .then(showUpcomingForecast)
                .catch(handleError);
            //let symbol = $(weatherSymbol(condition));

            function showUpcomingForecast(data){
                let entries = data.forecast;

                for(let entry of entries){
                    let span_upcoming = $('<span class="upcoming"></span>');
                    let condition = entry.condition;
                    let lowest = entry.low;
                    let highest = entry.high;

                    let symbol = $(weatherSymbol(condition));

                    span_upcoming
                        .append(symbol)
                        .append(generateData(`${lowest}&#176;/${highest}&#176;`))
                        .append(generateData(condition));

                    upcoming.append(span_upcoming);
                }



            }
        }
        /*
        function requestCurrentConditions(locationId) {
            let req = {
                url: `${url}/forecast/today/${locationId}.json`,
                method: "GET",
                success: printHere,
            };

            $.ajax(req);

            function printHere(data){
                console.log(data);
            }
        }*/

        function handleError(reason){
            error.css("display", "block");
            error.css("text-align", "center");
            forecast.css("display", "inline");

            current.detach();
            upcoming.detach();
            forecast.append(error);

            if(reason instanceof Error){
                error.text(reason.message)
            }else{
                error.text(reason.responseJSON.error);
            }
        }
    }


    function weatherSymbol(weatherType){
        if(weatherType === "Sunny"){
            return `<span class="symbol">&#x2600;</span>`;
            //return String.fromCharCode('x2600;');
        }

        if(weatherType === "Partly sunny"){
            return `<span class="symbol">&#x26C5;</span>`;
            //return "";
        }

        if(weatherType === "Overcast"){
            return `<span class="symbol">&#x2601;</span>`;
            //return "";
        }

        if(weatherType === "Rain"){
            return `<span class="symbol">&#x2614;</span>`;
        }
    }

    function generateData(data) {
        return $(`<span class="forecast-data">${data}</span>`)
    }
}

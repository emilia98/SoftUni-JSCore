function calculateMoviePrices(array){
    let movieTitle = array[0];
    let day = array[1];
    let result = "";

    movieTitle = movieTitle.toLowerCase();
    day = day.toLowerCase();

    if(movieTitle == "the godfather"){
        switch(day){
            case "monday":{
                result = "12";
                break;
            }
            case "tuesday":{
                result = "10";
                break;
            }
            case "wednesday":
            case "friday":{
                result = "15";
                break;
            }
            case "thursday":{
                result = "12.50";
                break;
            }
            case "saturday":{
                result = "25";
                break;
            }
            case "sunday":{
                result = "30";
                break;
            }
            default:{
                result = "error";
            }
        }
    }
    else if(movieTitle == "schindler's list"){
        let workWeekPrice = "8.50";
        let weekendPrice = "15";
        result = getPricesOfMovies(day, weekendPrice, workWeekPrice);
    }
    else if(movieTitle == "casablanca"){
        let workWeekPrice = "8";
        let weekendPrice = "10";
        result = getPricesOfMovies(day, weekendPrice, workWeekPrice);
    }
    else if(movieTitle == "the wizard of oz"){
        let workWeekPrice = "10";
        let weekendPrice = "15";
        result = getPricesOfMovies(day, weekendPrice, workWeekPrice);
    }
    else{
        result = "error";
    }

    function getPricesOfMovies(day, weekendPrice, workWeekPrice){
        let result = 0;
        switch(day){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":{
                result = workWeekPrice;
                break;
            }
            case "saturday":
            case "sunday":{
                result = weekendPrice;
                break;
            }
            default:{
                result = "error";
            }
        }
        return result;
    }

    console.log(result);
}

/*Uncomment to test:
 calculateMoviePrices(["The Godfather", "Friday"]);
 calculateMoviePrices(["The Godfather", "Wednesda"]);
 calculateMoviePrices(["casablanca", "sunday"]);
 calculateMoviePrices(["Schindler's LIST", "monday"]);
 calculateMoviePrices(["SoftUni", "Nineday"]);
 */

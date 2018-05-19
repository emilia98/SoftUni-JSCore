function printCalendar(array){
    "use strict";
    let day = parseInt(array[0]);
    let month = parseInt(array[1]);
    let year = parseInt(array[2]);

    let date = new Date(year, month - 1, day + 1);
    let daysInCurrentMonth = new Date(year, month, 0).getDate();
    let daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
    //let daysInNextMonth = new Date(year, month + 1, 0).getDate();

    let firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    let lastDayOfMonth = new Date(year, month - 1, daysInCurrentMonth).getDay();

    let previousMonthDays = firstDayOfMonth;
    let nextMonthDays = 6 - lastDayOfMonth;

    let startDayPreviousMonth = daysInPreviousMonth - previousMonthDays + 1;
    let endDayNextMonth = nextMonthDays;

    let result = "";
    let res = "";
    res += "<table>\n";
    res += "  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";

    res += "  <tr>";
    let previousMonthDaysInFirstWeek = 0;
    for(let currentDay = startDayPreviousMonth; currentDay  <= daysInPreviousMonth; currentDay++){
        res += `<td class="prev-month">${currentDay}</td>`;
        previousMonthDaysInFirstWeek++;
    }

    let daysAddedFirstWeek = previousMonthDaysInFirstWeek;
    let endDayFirstWeek = 7 - daysAddedFirstWeek;
    for(let currentDay = 1; currentDay  <= endDayFirstWeek; currentDay ++){
        if(currentDay == day){
            res += `<td class="today">${currentDay}</td>`;
        }
        else{
            res += `<td>${currentDay}</td>`;
        }

    }

    res += "</tr>\n";

    let lastSundayDate = 4 * 7 + (endDayFirstWeek + 1);

    if(lastSundayDate > daysInCurrentMonth){
        lastSundayDate -= 7;
    }

    let fullWeeks =  parseInt((lastSundayDate - endDayFirstWeek - 1) / 7);
    let startDayFullWeek = endDayFirstWeek + 1;
    for(let week = 0; week < fullWeeks; week++){
        res += "  <tr>";
        let timesLooped = 1;
        while(timesLooped <= 7){
            if(startDayFullWeek == day){

                res += `<td class="today">${startDayFullWeek}</td>`;
            }
            else{
                res += `<td>${startDayFullWeek}</td>`;
            }
            startDayFullWeek ++;
            timesLooped++;
        }
        res += "</tr>\n";
    }

    let startDayFinalWeek = startDayFullWeek;
    res += "  <tr>";
    for(let dayCounter = startDayFinalWeek; dayCounter <= daysInCurrentMonth; dayCounter++){
        if(dayCounter == day){
            res += `<td class="today">${dayCounter}</td>`;
        }
        else{
            res += `<td>${dayCounter}</td>`;
        }
    }

    for(let dayCounter = 1; dayCounter <= nextMonthDays; dayCounter++){
        res += `<td class="next-month">${dayCounter}</td>`;
    }
    res += "</tr>\n";
    res += "</table>";
    console.log(res);
}
/*Uncomment to test:
printCalendar([24, 12, 2012]);
printCalendar([4,9,2016]);
printCalendar([3,10,2017]);
printCalendar([3,7,2015]);*/


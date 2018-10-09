import { nextMonth, prevMonth } from './calendar.service.js';

(function() {

    /* CHANGE MONTH */

    let monthEl = document.getElementById('month');
    let days = document.getElementsByClassName('day');
    
    // Changes the month and adds holidays to it
    function changeMonth() {
        let newMonth = nextMonth(); // Get new month from service.
        let holidays = newMonth.holidays;
        let month = newMonth.currentMonth;

        writeMonth(month);
        writeHolidays(holidays)
    }

    // Update calendar month name.
    function writeMonth(month) {
        monthEl.innerHTML = month;
    }

    // Write holiday names to the calendar days.
    function writeHolidays(holidays) {
        // 1. Loop thru holidays.
        holidays.map(holiday => {
            // 2. Loop thru days.
            // We need to find a day that matches our holiday.
            for (let day of days) {
                // 3. Some holidays last more than 1 day.
                // These holidays are stored in an array.
                if (Array.isArray(holiday.day)) {
                    // 4. Loop thru multi-day array
                    holiday.day.map(val => {
                        // 5. Write when you have a match.
                        if (day.innerHTML == val) {
                            day.innerHTML += `
                                <p>${holiday.name}</p>
                            `;
                        }
                    });
                }
                // 6. Holiday is a single day.
                else {
                    // 7. Write holiday if it matches the day.
                    if (day.innerHTML == holiday.day) {
                        day.innerHTML += `
                            <p>${holiday.name}</p>
                        `;
                    }
                }

                
            };
        });
    }

    // temp call to change the month. Serves as an update for now.
    changeMonth();
} ());
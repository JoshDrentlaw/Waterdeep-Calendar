import { nextMonth, prevMonth } from './calendar.service.js';

(function() {

    /* CHANGE MONTH */

    let monthEl = document.getElementById('month');
    let days = document.getElementsByClassName('day-container');
    let dates = document.getElementsByClassName('date');

    // Write days. Only needs to happen once. Every month is the same.
    let i = 1;
    for (let el of dates) {
        el.innerHTML += i;
        i++;
    }
    
    // Changes the month and adds holidays to it
    function changeMonth() {
        // Get new month from service.
        let { holidays: holidays, currentMonth: month } = nextMonth();
        
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
            for (let date of dates) {
                // 3. Some holidays last more than 1 day.
                // These holidays are stored in an array.
                if (Array.isArray(holiday.day)) {
                    // 4. Loop thru multi-day array
                    holiday.day.map(val => {
                        // 5. Write when you have a match.
                        if (date.innerHTML == val) {
                            date.parentElement.innerHTML += `
                                <p>${holiday.name}</p>
                            `;
                        }
                    });
                }
                // 6. Holiday is a single day.
                else {
                    // 7. Write holiday if it matches the day.
                    if (day.innerHTML == holiday.day) {
                        day.parentElement.innerHTML += `
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
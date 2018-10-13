import { month, nextMonth, prevMonth } from './calendar.service.js';

(function() {

    (function writeDays() {
        let days = document.getElementsByClassName('day');
        for (let day of days) {
            day.innerHTML = `<div class="day-container">
                                <button class="fab">+</button>
                                <span class="date"></span>
                                <div class="holiday"></div>
                            </div>`;
        };
    } ());

    /* CHANGE MONTH */

    let monthEl = document.getElementById('month');
    let commonEl = document.getElementById('common-name');
    let dates = document.getElementsByClassName('date');

    let nextButton = document.getElementById('next-month')
        .addEventListener('click', renderMonth);
    let prevButton = document.getElementById('prev-month')
        .addEventListener('click', renderMonth);

    // Write days. Only needs to happen once. Every month is the same.
    let i = 1;
    for (let el of dates) {
        el.innerHTML += i;
        i++;
    }
    
    // Changes the month and adds holidays to it
    function renderMonth(e) {
        // Get new month from service.
        let {
            name: name,
            commonName: common,
            celebrations: holidays
        } = ((e === undefined) ? month : (e.target.id == "next-month") ? nextMonth() : prevMonth());

        writeMonth(name, common);
        writeHolidays(holidays)
    }

    // Call it once to initilize the calendar.
    // Will be called subsiquently from the next and prev buttons.
    renderMonth();

    // Update calendar month name.
    function writeMonth(name, common) {
        monthEl.innerHTML = name;
        commonEl.innerHTML = common;
    }

    // Write holiday names to the calendar days.
    function writeHolidays(holidays) {
        // 1. Loop thru holidays.
        holidays.map(holiday => {
            // 2. Loop thru days.
            // We need to find a day that matches our holiday.
            for (let date of dates) {
                // 4. Reset day of holidays
                date.nextElementSibling.innerHTML = '';
                // 4. Some holidays last more than 1 day.
                // These holidays are stored in an array.
                if (Array.isArray(holiday.day)) {
                    // 5. Loop thru multi-day array
                    holiday.day.map(val => {
                        // 6. Write when you have a match.
                        if (date.innerHTML == val) {
                            date.nextElementSibling.innerHTML = `<p>${holiday.name}</p>`;
                        }
                    });
                }
                // 7. Holiday is a single day.
                else {
                    // 8. Write holiday if it matches the day.
                    if (date.innerHTML == holiday.day) {
                        date.nextElementSibling.innerHTML = `<p>${holiday.name}</p>`;
                    }
                }

                
            };
        });
    }
} ());
import { month, nextMonth, prevMonth, currentYear } from './calendar.service.js';

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

    let yearEl = document.getElementById('current-year');
    let yearNameEl = document.getElementById('year-common-name');
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
        let newMonth;
        // Get new month from service.
        // renderMonth is called once when the script loads outside of an event handler,
        //   so the first time it loads, e will be undefined. After that it'll come from
        //   an event handler.
        if (e === undefined) {
            newMonth = month;
        }
        else {
            // Shieldmeet only happens on a leap year, so we utilize the modulo to check this.
            if (e.target.id == "next-month") {
                newMonth = nextMonth();
                if (newMonth.name == "Shieldmeet") {
                    if (currentYear % 4 != 0) {
                        newMonth = nextMonth();
                    }
                }
            }
            else {
                newMonth = prevMonth();
                if (newMonth.name == "Shieldmeet") {
                    if (currentYear % 4 != 0) {
                        newMonth = prevMonth();
                    }
                }
            }
        }
        let {
            name: name,
            commonName: common,
            celebrations: holidays,
            desc: desc
        } = newMonth;

        writeMonth(name, common);
        writeHolidays(holidays);
        checkForMajorHoliday(name, desc);
    }

    // Call it once to initilize the calendar.
    // Will be called subsiquently from the next and prev buttons.
    renderMonth();

    // Update calendar month name.
    function writeMonth(name, common) {
        console.log(currentYear);
        yearEl.innerHTML = currentYear.year;
        yearNameEl.innerHTML = currentYear.name;
        monthEl.innerHTML = name;
        if (name == "The Feast of the Moon") {
            monthEl.style = "font-size: 4.3em;";
        }
        else {
            monthEl.style = "font-size: 6em;";
        }
        commonEl.innerHTML = (common === undefined) ? "" : common;
    }

    // Write holiday names to the calendar days.
    function writeHolidays(holidays) {
        // Holidays may be undefined if it's a major holiday.
        if (holidays != undefined) {
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
    }

    function checkForMajorHoliday(name, desc) {
        let majorHolidays = ["Midwinter", "Greengrass", "Midsummer", "Shieldmeet", "Highharvestide", "The Feast of the Moon"];
        let match = majorHolidays.filter(holiday => {
            if (name == holiday) {
                return name;
            }
        });
        if (match.length == 1) {
            writeMajorHoliday(desc);
        }
        else {
            document.getElementById('major-holiday-overlay').className = 'hide';
        }
    }

    function writeMajorHoliday(desc) {
        let overlay = document.getElementById('major-holiday-overlay');
        let descContainer = document.getElementById('major-holiday-desc');
        overlay.className = 'show';
        descContainer.innerHTML = desc;
    }
} ());
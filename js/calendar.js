import { nextMonth, prevMonth, currentMonth } from './calendar.service.js';

(function() {

    /* CHANGE MONTH */

    // days are gathered at the top for the animations.
    let monthEl = document.getElementById('month');
    
    function changeMonth() {
        let newMonth = nextMonth();
        let holidays = newMonth.holidays;
        let month = newMonth.currentMonth;

        writeMonth(month);
        writeHolidays(holidays)
    }

    function writeMonth(month) {
        monthEl.innerHTML = month;
    }

    function writeHolidays(holidays) {

    }

    changeMonth();
} ());
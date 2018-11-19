let years = [
    {
        "year": 1488,
        "name": "Year of Dwarvenkind Reborn"
    },
    {
        "year": 1489,
        "name": "Year of the Warrior Princess"
    },
    {
        "year": 1490,
        "name": "Year of the Star Walker's Return"
    },
    {
        "year": 1491,
        "name": "Year of the Scarlet Witch"
    },
    {
        "year": 1492,
        "name": "Year of Three Ships Sailing"
    },
    {
        "year": 1493,
        "name": "Year of the Purple Dragons"
    }
];

let currentMonth;
let currentMonthName;
export let currentYear;
let y = 3; // Index for the year array.

// Check if localStorage is enabled.
if (typeof(Storage) !== "undefined") {
    // Is the current month already saved?
    if (localStorage.month) {
        // Load from storage.
        currentMonth = Number(localStorage.month);
        currentMonthName = localStorage.monthName;
    }
    else {
        // Set storage.
        localStorage.setItem('month', '0');
        localStorage.setItem('monthName', 'Hammer');
        // Load default.
        currentMonth = 0;
        currentMonthName = 'Hammer';
    }
    // Is the current year already saved?
    if (localStorage.year) {
        // Load from stoarge.
        let storeYear = Number(localStorage.year);
        currentYear = years.filter(year => {
            if (storeYear == year.year) {
                return year;
            }
        });
        currentYear = currentYear[0];  // Filter returns an array, so we need to correct that here.
    }
    else {
        // Set storage.
        localStorage.setItem('year', '1491');
        // Load default.
        currentYear = years[y];
    }
}
else {
    // LocalStorage is disabled. Load these defaults.
    currentMonth = 0;
    currentMonthName = 'Hammer';
    currentYear = years[y];
}

function newMonth(direction) {
    switch (direction) {
        case "next":
            currentMonth = (currentMonth == 17) ? 0 : ++currentMonth;
            y = (currentMonth == 0) ? ++y : y;
            break;
        case "prev":
            currentMonth = (currentMonth == 0) ? 17 : --currentMonth;
            y = (currentMonth == 17) ? --y : y;
            break;
    }
    currentYear = years[y];
    localStorage.setItem('month', currentMonth);
    localStorage.setItem('year', years[y].year);
    return getMonth(currentMonth);
}

let converter = AWS.DynamoDB.Converter;
let endpoint = 'https://s8g7la72ha.execute-api.us-east-1.amazonaws.com/beta/calendar?MonthId=';
function getMonth(monthId) {
    return new Promise((res) => {
        res(fetch(endpoint + monthId)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let unmarshalled = converter.unmarshall(data.Items[0]);
                let month = {
                    name: unmarshalled.MonthName,
                    commonName: unmarshalled.commonName,
                    celebrations: unmarshalled.celebrations,
                    desc: unmarshalled.desc
                }
                console.log('month sent to calendar.js:',month);
                return month;
            })
            .catch(reason => { console.log(reason); })
        );
    });
    
}

export let month = getMonth(currentMonth);

export function nextMonth() {
    month = newMonth("next");
    console.log('returned from newMonth("next"):', month);
    return month;
}

export function prevMonth() {
    month = newMonth("prev");
    console.log('returned from newMonth("prev"):', month);
    return month;
}

// Selune's Hallowing occurs on the full moon.
// It takes place in the month of Uktar, which
//   lines up with November.
// The calendar will use the full moon of the
//   November of the year that corrisponds
//   to the current Dale Reckoning year
//   of the calendar.
// i.e. If DR = 1491, GET full moon for Nov. 1491
function getFullMoon() {

}
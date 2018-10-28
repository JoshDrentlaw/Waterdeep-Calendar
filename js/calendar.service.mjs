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

let AWS = require('aws-sdk');

AWS.config.update({endpoint: "https://dynamodb.us-east-1.amazonaws.com"});

let docClient = new AWS.DynamoDB.DocumentClient();
let table = "Waterdeep-Calendar";

let currentMonth;
let currentYear;
let y = 3; // Index for the year array.

// Check if localStorage is enabled.
if (typeof(Storage) !== "undefined") {
    // Is the current month already saved?
    if (localStorage.month) {
        // Load from storage.
        currentMonth = Number(localStorage.month);
    }
    else {
        // Set storage.
        localStorage.setItem('month', '0');
        // Load default.
        currentMonth = 0;
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
    currentMonth = 0;
    currentYear = years[y];
}

let params = {
    TableName: table,
    Key: {
        "MonthId": currentMonth
    }
};

let month = docClient.get(params, (err, data) => {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        return data;
    }
});

console.log(month);

function getMonth(direction) {
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
    return calendar[currentMonth];
}

function nextMonth() {
    month = getMonth("next");
    return month;
}

function prevMonth() {
    month = getMonth("prev");
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

module.exports = { currentYear, month, nextMonth, prevMonth };
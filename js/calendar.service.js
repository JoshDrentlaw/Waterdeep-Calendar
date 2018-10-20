let calendar = [
    {
        "name": "Hammer",
        "commonName": "Deepwinter",
        "celebrations": [
            {
                "day": 1,
                "name": "Wintershield",
                "desc": ""
            }
        ]
    },
    {
        "name": "Midwinter",
        "desc": "<p>The High Festival of winter!</p><p>Today we commemorate and renew our bonds of trust and friendship.</p><p>Also celebrated as Deadwinter by those in extremely cold weather climates to mark the midpoint of the season.</p><p>There's hard times still ahead of us, but most of the worst are behind us.</p>"
    },
    {
        "name": "Alturiak",
        "commonName": "The Claw of Winter",
        "celebrations": [
            {
                "day": 14,
                "name": "The Grand Revel",
                "desc": ""
            }
        ]
    },
    {
        "name": "Ches",
        "commonName": "The Claw of Sunsets",
        "celebrations": [
            {
                "day": 1,
                "name": "Rhyestertide",
                "desc": ""
            },
            {
                "day": 19,
                "name": "Fey Day",
                "desc": ""
            },
            {
                "day": [21,22,23,24,25,26,27,28,29,30],
                "name": "Fleetswake",
                "desc": ""
            }
        ]
    },
    {
        "name": "Tarsahk",
        "commonName": "The Claw of Storms",
        "celebrations": [
            {
                "day": [1,2,3,4,5,6,7,8,9,10],
                "name": "Waukeentide",
                "desc": ""
            }
        ]
    },
    {
        "name": "Greengrass",
        "desc": "<p>Spring is here!</p><p>The smell of freshly cut flowers are in the air, and the hills and fields are alive and green.</p><p>The Gods are ready to receive our gifts and bestow a bountiful and speedy growing season upon us.</p>"
    },
    {
        "name": "Mirtul",
        "commonName": "The Melting",
        "celebrations": [
            {
                "day": [6,7,8,9],
                "name": "The Plowing and Running",
                "desc": ""
            }
        ]
    },
    {
        "name": "Kythorn",
        "commonName": "The Time of Flowers",
        "celebrations": [
            {
                "day": 1,
                "name": "Trolltide",
                "desc": ""
            },
            {
                "day": 14,
                "name": "Guildhall Day",
                "desc": ""
            },
            {
                "day": 20,
                "name": "Dragondown",
                "desc": ""
            }
        ]
    },
    {
        "name": "Flamerule",
        "commonName": "Summertide",
        "celebrations": [
            {
                "day": 1,
                "name": "Founder's Day",
                "desc": ""
            },
            {
                "day": [3,4,5],
                "name": "Sornyn",
                "desc": ""
            },
            {
                "day": 7,
                "name": "Lilira's Night",
                "desc": ""
            }
        ]
    },
    {
        "name": "Midsummer",
        "desc": "<p>Summer's midpoint is upon us.</p><p>Find a cool place and enjoy the feasting and carousing with your fellow citizens!</p><p>It's the perfect time to tell that special someone just how much you really care about them!</p><p>Pray for clear skies on Midsummer night, for the Gods look upon us this day.</p>"
    },
    {
        "name": "Shieldmeet",
        "desc": "<p>It is once again time for the day of Shieldmeet!</p><p>Speak your mind today and hear the open council of all.</p><p>Test your mettle and your skill against the best in the land.</p><p>Observe the Gods and their lessons for us.</p><p>4 years time is not as long as it seems.</p>"
    },
    {
        "name": "Eleasis",
        "commonName": "Highsun",
        "celebrations": [
            {
                "day": 1,
                "name": "Ahghairon's Day",
                "desc": ""
            }
        ]
    },
    {
        "name": "Elient",
        "commonName": "The Fading",
        "celebrations": [
            {
                "day": 21,
                "name": "Brightswords",
                "desc": ""
            }
        ]
    },
    {
        "name": "Highharvestide",
        "desc": "<p>The fall harvest is here!</p><p>Give praise to Chauntea and all the Gods that bring us our bountiful harvest, and the nourishment we need for the long winter ahead.</p><p>We wish the caravans and sailors luck on their pre-winter trek, for the winter winds are sure to come on in full force soon!</p>"
    },
    {
        "name": "Marpenoth",
        "commonName": "Leaffall",
        "celebrations": [
            {
                "day": 3,
                "name": "Day of Wonders",
                "desc": ""
            },
            {
                "day": 7,
                "name": "Stoneshar",
                "desc": ""
            },
            {
                "day": 10,
                "name": "Reign of Misrule",
                "desc": ""
            },
            {
                "day": 15,
                "name": "Gods' Day",
                "desc": ""
            },
            {
                "day": 30,
                "name": "Liar's Night",
                "desc": ""
            }
        ]
    },
    {
        "name": "Uktar",
        "commonName": "The Rotting",
        "celebrations": [
            {
                "day": getFullMoon(),
                "name": "Selune's Hallowing",
                "desc": ""
            },
            {
                "day": 20,
                "name": "Last Sheaf",
                "desc": ""
            }
        ]
    },
    {
        "name": "The Feast of the Moon",
        "desc": "<p>The long nights and winter winds are upon us.</p><p>Today we honor our dead; our loving ancestors, and our brave protectors.</p><p>Share your stories and legends, and offer a prayer for those who have fallen.</p><p>Do not forget that winter is here and that you must be prepared.</p>"
    },
    {
        "name": "Nightal",
        "commonName": "The Drawing Down",
        "celebrations": [
            {
                "day": 11,
                "name": "Howldown",
                "desc": ""
            },
            {
                "day": 20,
                "name": "Simril",
                "desc": ""
            }
        ]
    }
];

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

let currentMonth;
export let currentYear;

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
        currentYear = Number(localStorage.year);
    }
    else {
        // Set storage.
        localStorage.setItem('year', '1491');
        // Load default.
        currentYear = 1491;
    }
}
else {
    currentMonth = 0;
    currentYear = 1491;
}

export let month = calendar[currentMonth];

function getMonth(direction) {
    switch (direction) {
        case "next":
            currentMonth = (currentMonth == 17) ? 0 : ++currentMonth;
            currentYear = (currentMonth == 0) ? ++currentYear : currentYear;
            break;
        case "prev":
            currentMonth = (currentMonth == 0) ? 17 : --currentMonth;
            currentYear = (currentMonth == 17) ? --currentYear : currentYear;
            break;
    }
    localStorage.setItem('month', currentMonth);
    localStorage.setItem('year', currentYear);
    return calendar[currentMonth];
}

export function nextMonth() {
    month = getMonth("next");
    return month;
}

export function prevMonth() {
    month = getMonth("prev");
    return month;
}
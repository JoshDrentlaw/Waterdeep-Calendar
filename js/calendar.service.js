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
        "desc": ""
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
        "desc": ""
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
        "desc": ""
    },
    {
        "name": "Shieldmeet",
        "desc": ""
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
        "desc": ""
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
        "desc": ""
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

// This will be a call to the localStorage service eventually.
let currentMonth = 0;

export let month = calendar[currentMonth];

function getMonth(direction) {
    switch (direction) {
        case "next":
            currentMonth = (currentMonth == 11) ? 0 : ++currentMonth;
            break;
        case "prev":
            currentMonth = (currentMonth == 0) ? 11 : --currentMonth;
            break;
    }
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
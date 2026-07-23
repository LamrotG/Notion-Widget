/*
    Week 0 starts:
    Sunday, July 19, 2026

    Every Sunday:
    Week increases by 1.

    After Week 52:
    Reset to Week 0.
*/


const START_DATE = new Date(2026, 6, 19);

const WEEK_LENGTH = 1000 * 60 * 60 * 24 * 7;


const today = new Date();



const weeksPassed = Math.floor(
    (today - START_DATE) / WEEK_LENGTH
);



const weekNumber = ((weeksPassed % 53) + 53) % 53;



document.getElementById("week-number").textContent = weekNumber;



// Calculate current week's Sunday

const currentWeekStart = new Date(START_DATE);

currentWeekStart.setDate(
    START_DATE.getDate() + (weekNumber * 7)
);



const currentWeekEnd = new Date(currentWeekStart);

currentWeekEnd.setDate(
    currentWeekStart.getDate() + 6
);



// Format dates

const formatter = new Intl.DateTimeFormat(
    "en-US",
    {
        month:"long",
        day:"numeric"
    }
);



document.getElementById("start-date").textContent =
    formatter.format(currentWeekStart);



document.getElementById("end-date").textContent =
    formatter.format(currentWeekEnd);



// Current year

document.getElementById("year").textContent =
    currentWeekStart.getFullYear();
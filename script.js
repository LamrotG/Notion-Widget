/*
    Week 0 starts on:
    July 19, 2026 (Sunday)

    Every Sunday:
    Week increases by 1.

    After Week 52:
    Returns to Week 0.
*/

const START_DATE = new Date(2026, 6, 19); // July = 6

const WEEK_LENGTH = 1000 * 60 * 60 * 24 * 7;

const today = new Date();

const weeksPassed = Math.floor(
    (today - START_DATE) / WEEK_LENGTH
);

const weekNumber = ((weeksPassed % 53) + 53) % 53;

document.getElementById("week-number").textContent = weekNumber;
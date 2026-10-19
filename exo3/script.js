"use strict";

// getting the button from DOM
const btn = document.getElementById("btn");

const Students = [ // a list of all students, each element is a list, see slide 5
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

function A() {
    for (let i = 0; i < Students.length; i++) { // loop through each list of student info in the Students list
        if (B(Students[i][3])) { // if the student failed
            console.log(`${Students[i][0]}: ADMIS`);
        } else { // if the student passed
            console.log(`${Students[i][0]}: AJOURNÉ`);
        }
    }
}

function B(num) {
    if (num < 10) { // if the student's note is under the average (10)
        return false; // fail
    } else { // if the student's note is not under the average, meaning it's equal or above
        return true; // pass
    }
}

btn.onclick = A; // if the deliberation button is clicked, execute A
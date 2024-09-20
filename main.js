window.main = main;

function main() {
    //setTimeout(() => {console.log("Timeout!")}, 3000);
    setInterval(updateTime, 1000);
}

function updateTime() {
    const curTime = new Date();
    const curMin = curTime.getMinutes();
    const curHr = roundHrs(curTime.getHours()); // Pass this into updateHrs function
    updateMin(curMin);
    updateHrs(curHr); // HW: Write update hour function
}

function roundHrs(hour) {
    return hour % 12;
}

function addActiveClass(id) {
    const el = document.getElementById(id);
    el.classList.add("active");
}

function removeActiveClassFromMinute() {
    const els = document.getElementById("minute-frame").children;
    for(let i = 0; i < els.length; i++) {
        els[i].classList.remove("active");
    }
}

function updateMin(curMin) {
    let n = curMin;
    if (n >= 3 && n <= 7 || n <= 53 && n >= 57) {
        removeActiveClassFromMinute();
        addActiveClass("minute-five");
    }
// HW: Write conditions for every minute label (should be past and till)

    console.log(`${curMin}`)
}

function updateHrs(curHr) {
// HINT use switch statement instead of if
}
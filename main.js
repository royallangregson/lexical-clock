window.main = main;

function main() {
    setInterval(updateTime, 1000);
}

function updateTime() {
    const curTime = new Date();
    const curMin = curTime.getMinutes();
    const curHr = curTime.getHours(); // Pass this into updateHrs function
    updateMin(curMin);
    updatePastTill(curMin);
    updateHrs(curHr, curMin); // HW: Write update hour function
    updateAMPM(curHr);
}

function roundHrs(hour) {
    return hour % 12;
}

function toggleActiveClass(id, containerId) {
    removeActiveClassFromContainer(containerId);
    document.getElementById(id).classList.add("active");
}

function removeActiveClassFromContainer(containerId) {
    const els = document.getElementById(containerId).children;
    for(let i = 0; i < els.length; i++) {
        els[i].classList.remove("active");
    }
}

function updateMin(curMin) {
    let n = curMin;
    if (n >= 3 && n <= 7 || n >= 53 && n <= 57) toggleActiveClass('minute-five', 'minute-frame');
    if (n >= 8 && n <= 12 || n >= 48 && n <= 52) toggleActiveClass('minute-ten', 'minute-frame');
    if (n >= 13 && n <= 17 || n >= 43 && n <= 47) toggleActiveClass('minute-quarter', 'minute-frame');
    if (n >= 18 && n <= 25 || n >= 35 && n <= 42) toggleActiveClass('minute-twenty', 'minute-frame');
    if (n >= 26 && n <= 34) toggleActiveClass('minute-half', 'minute-frame');
    if (n <= 2 || n >= 58) removeActiveClassFromContainer('minute-frame');

    console.log(`${curMin}`)
}

function updateHrs(curHr, curMin) {
    curHr = curMin < 43 ? roundHrs(curHr) : roundHrs(curHr) + 1;
// HINT use switch statement instead of if
    switch (curHr) {
        case 0:
            toggleActiveClass('hour-twelve', 'hour-frame');
            break;
        case 1:
            toggleActiveClass('hour-one', 'hour-frame');
            break;
        case 2:
            toggleActiveClass('hour-two', 'hour-frame');
            break;
        case 3:
            toggleActiveClass('hour-three', 'hour-frame');
            break;
        case 4:
            toggleActiveClass('hour-four', 'hour-frame');
            break;
        case 5:
            toggleActiveClass('hour-five', 'hour-frame');
            break;
        case 6:
            toggleActiveClass('hour-six', 'hour-frame');
            break;
        case 7:
            toggleActiveClass('hour-seven', 'hour-frame');
            break;
        case 8:
            toggleActiveClass('hour-eight', 'hour-frame');
            break;
        case 9:
            toggleActiveClass('hour-nine', 'hour-frame');
            break;
        case 10:
            toggleActiveClass('hour-ten', 'hour-frame');
            break;
        case 11:
            toggleActiveClass('hour-eleven', 'hour-frame');
            break;
        default:
            toggleActiveClass('hour-twelve', 'hour-frame');
    }
}

function updatePastTill(curMin) {
    removeActiveClassFromContainer('past-till-frame');
    if (curMin >= 3 && curMin < 35) toggleActiveClass('past', 'past-till-frame');
    if (curMin >= 35 && curMin <= 57) toggleActiveClass('till', 'past-till-frame');
}

function updateAMPM(curHr24) {
    toggleActiveClass(curHr24 < 12 ? 'am' : 'pm', 'am-pm-frame');
}
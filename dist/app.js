
setInterval(function () {
    let time = new Date; //date object
    let div = document.querySelector("#time");
    let wordTime;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let timeDisplay = document.createElement("h1"); //selecting and assigning values to DOM elements
    div.innerHTML = "";
    if (minutes > 50) {
        wordTime = `${60 - minutes} MINUTES TO ${hours + 1}`;
    } else if (minutes === 15) {
        wordTime = `IT'S QUARTER PAST ${hours}`
    } else if (minutes === 45) {
        wordTime = `IT'S QUARTER TO ${hours + 1}`
    } else if (minutes > 0 && minutes < 30) {
        wordTime = `AFTER ${hours}`;
    } else if (minutes > 30) {
        wordTime = `${minutes} MINUTES PAST ${hours}`
    } else if (minutes === 30) {
        wordTime = `IT'S HALF PAST ${hours}`
    } else if (minutes === 0) {
        wordTime = `${hours}'o CLOCK`
    }
    timeDisplay.textContent = wordTime;
    div.appendChild(timeDisplay);
}, 1000); //calling the function each seconds

<<<<<<< HEAD
=======

>>>>>>> ca23f40b1fd1dbb5db42aea812ec033f31a3342d
setInterval(function () {
    let time = moment(); //date object using the moment library so i can get time in 12-hour format
    let div = document.querySelector("#time");
    let wordTime;
    let hours = Number(time.format("h"));
    let minutes = time.minute();
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

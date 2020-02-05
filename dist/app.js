let time = new Date; //date object
let div = document.querySelector("#time");
let wordTime;

//function to convert time into word;
const timeConvertToWord = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();

    if (minutes > 50) {
        wordTime = `${60 - minutes} MINUTES TO ${hours + 1}`;
    } else if (minutes > 0 && minutes < 30) {
        wordTime = `AFTER ${hours}`;
    } else if (minutes > 30) {
        wordTime = `${minutes} MINUTES PAST ${hours}`
    } else if (minutes === 0) {
        wordTime = `${hours}'o CLOCK`
    }
    let timeDisplay = document.createElement("h1"); //selecting and assigning values to DOM elements
    timeDisplay.textContent = wordTime;
    div.appendChild(timeDisplay);
}
setTimeout(timeConvertToWord(), 1000); //calling the function each seconds
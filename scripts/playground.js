const countdown = document.getElementById('countdown');
const randomTitle = document.getElementById('random');
let time = 60;

// const timeCountdown = setInterval(() => {
//     if (time > 0) {
//         countdown.innerText = time + 's';
//         time--;
//     } else {
//         clearInterval(timeCountdown);
//         countdown.innerText = 'One minute has passed';
//     }
// }, 1000);

const countdownTime = setTimeout(function run() {  
    if (time > 0) {
        countdown.innerText = time + 's';
        // console.log(time);
        time--;
        setTimeout(run, 1000);
    } else {
        clearTimeout(countdownTime);
        countdown.innerText = 'One minute has passed';
    }

}, 1000);

let randomNum = Math.floor(Math.random() * 11);

const randomCallout = setTimeout(function callFunc() {
    if (randomNum >= 0) {
        randomTitle.innerText = `I will change after ${randomNum} seconds`;
        randomNum--;
        setTimeout(callFunc, 1000);
    } else {
        randomNum = Math.floor(Math.random() * 11);
        setTimeout(callFunc, 1000);
    }
}, randomNum * 500);
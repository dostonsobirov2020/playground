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


function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('.clock').textContent = time;
}

displayTime();

const createClock = setInterval(displayTime, 1000);

let offset = 0;

const rectangleContainer = document.getElementById('rectangle--container');
const rectangleInner = document.getElementById('rectangle--inner');

const rectangleMove = setTimeout(function move() {
    
    if (offset < 320) {
        rectangleInner.style.left = offset + 'px';
        offset++;
        setTimeout(move, 5);
    } else {
        clearTimeout(rectangleMove);
        offset = 0;
        const rectangleMoveAgain = setInterval(function moveBottom() {
            if (offset < 320) {
                rectangleInner.style.top = offset + 'px';
                offset++;
            } else {
                clearInterval(rectangleMoveAgain);
                const rectangleMoveOnceAgain = setTimeout(function moveAgain() {
                    if (offset > 0) {
                        rectangleInner.style.left = offset + 'px';
                        offset--;
                        setTimeout(moveAgain, 5);
                    } else {
                        clearTimeout(rectangleMoveOnceAgain);
                        offset = 320;
                        const rectangleFinalMove = setInterval(() => {
                            if (offset > 0) {
                                rectangleInner.style.top = offset + 'px';
                                offset--;
                            } else {
                                clearInterval(rectangleFinalMove);
                                setTimeout(move, 5);
                            }
                        })
                    }
                }, 5)
            }
        })
    }
    
}, 5);
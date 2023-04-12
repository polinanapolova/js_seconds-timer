const inputEl = document.getElementById("time");
const buttonEl = document.getElementById("button")
const timerEl = document.getElementById("timer");

buttonEl.addEventListener('click', function() {
    timeSeconds = parseInt(inputEl.value)
})

timer = setInterval(function () {
    seconds = timeSeconds%60
    minutes = timeSeconds/60%60
    hour = timeSeconds/60/60%60
    if (timeSeconds <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerEl.innerHTML = strTimer;
    }
    --timeSeconds;
}, 1000)

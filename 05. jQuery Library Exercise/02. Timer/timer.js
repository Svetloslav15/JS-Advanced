function timer() {
    $('#start-timer').on("click", startTimer);
    $('#stop-timer').on("click", stopTimer);

    let interval;
    let secs = 1;

    function startTimer() {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(update, 1000);
    }

    function update() {
        let currentSec = Math.floor(secs % 60);
        let currentMin = Math.floor(secs / 60 % 60);
        let currentHours = Math.floor(secs / 3600);
        if (currentHours < 10){
            currentHours = "0" + currentHours;
        }
        if (currentMin < 10){
            currentMin = "0" + currentMin;
        }
        if (currentSec < 10){
            currentSec = "0" + currentSec;
        }
        $('#hours').text(currentHours);
        $('#minutes').text(currentMin);
        $('#seconds').text(currentSec);
        secs++;
    }

    function stopTimer() {
        clearInterval(interval);
    }
}
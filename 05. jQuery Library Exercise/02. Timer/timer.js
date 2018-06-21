function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let interval;

    $('#start-timer').on("click", start);
    $('#stop-timer').on("click", stop);

    function start() {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(updateTime, 1000);
    }

    function stop() {
        clearInterval(interval);
    }

    function updateTime() {
        let currSec = Math.floor(seconds % 60);
        let currMinutes = Math.floor(seconds / 60);
        let currHours = Math.floor(seconds / 3600);
        if (currSec < 10) {
            currSec = "0" + currSec;
        }
        if (currMinutes < 10) {
            currMinutes = "0" + currMinutes;
        }
        if (currHours < 10) {
            currHours = "0" + currHours;
        }
        $("#hours").text(currHours);
        $("#minutes").text(currMinutes);
        $("#seconds").text(currSec);
        seconds++;
    }
}
const timer = document.getElementById("timer");

let seconds = 2;

const countdown = setInterval(() => {
    seconds--;

    if (seconds >= 0) {
        timer.textContent = seconds;
    }

    if (seconds <= 0) {
        clearInterval(countdown);

        window.location.href = "https://t.me/ins1demedia";
    }

}, 1000);

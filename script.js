const timer = document.getElementById("timer");
const skipBtn = document.getElementById("skipBtn");

let timeLeft = 10 * 60;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

    if (timeLeft <= 60) {
        timer.classList.add("warning");
    }

    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("Hết thời gian!");
        return;
    }

    timeLeft--;
}

updateTimer();

const countdown = setInterval(updateTimer, 1000);

skipBtn.addEventListener("click", () => {
    timeLeft = 60;
    timer.classList.add("warning");
});

window.addEventListener("beforeunload", () => {
    clearInterval(countdown);
});

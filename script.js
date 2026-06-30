const timer = document.getElementById("timer");
const skipBtn = document.getElementById("skipBtn");

let timeLeft = 10 * 60; // 10 phút

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
        timer.textContent = "00:00";
        alert("Hết thời gian!");
        return;
    }

    timeLeft--;
}

updateTimer();

const countdown = setInterval(updateTimer, 1000);

skipBtn.addEventListener("click", () => {
    if (timeLeft > 60) {
        timeLeft = 60;
        updateTimer();
    }
});

window.addEventListener("beforeunload", () => {
    clearInterval(countdown);
});

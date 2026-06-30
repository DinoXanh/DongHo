const timer = document.getElementById("timer");
const skipBtn = document.getElementById("skipBtn");

let timeLeft = 10 * 60;
let countdown;

function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

    if (timeLeft <= 60) {
        timer.classList.add("warning");
    } else {
        timer.classList.remove("warning");
    }
}

function startTimer() {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timer.textContent = "00:00";
            alert("Hết thời gian!");
            return;
        }

        timeLeft--;
        displayTime();
    }, 1000);
}

displayTime();
startTimer();

skipBtn.addEventListener("click", () => {
    if (timeLeft > 60) {
        timeLeft = 60;
        displayTime(); // cập nhật ngay lên 01:00
    }
});

window.addEventListener("beforeunload", () => {
    clearInterval(countdown);
});

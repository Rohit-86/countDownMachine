function selectTimerType() {
  const timerType = document.getElementById("timerType").value;
  const dateInput = document.getElementById("dateInput");
  const timeInput = document.getElementById("timeInput");

  if (timerType === "date") {
    dateInput.style.display = "block";
    timeInput.style.display = "none";
  } else {
    dateInput.style.display = "none";
    timeInput.style.display = "block";
  }
}

function startSpecificTimer() {
  const specificDate = document.getElementById("specificDate").value;
  const userMessageDate = document.getElementById("userMessageDate").value;

  const specifiedDateTime = new Date(`${specificDate}T00:00:00`);
  const now = new Date();

  const totalSeconds = Math.floor((specifiedDateTime - now) / 1000);

  if (totalSeconds > 0) {
    startCountdown(totalSeconds, userMessageDate);
  } else {
    alert("Please select a future date.");
  }
}

function startTimer() {
  const daysInput = parseInt(document.getElementById("daysInput").value || 0);
  const hoursInput = parseInt(document.getElementById("hoursInput").value || 0);
  const minutesInput = parseInt(
    document.getElementById("minutesInput").value || 0
  );
  const userMessageDuration = document.getElementById(
    "userMessageDuration"
  ).value;

  const totalSeconds =
    daysInput * 24 * 60 * 60 + hoursInput * 60 * 60 + minutesInput * 60;

  if (totalSeconds > 0) {
    startCountdown(totalSeconds, userMessageDuration);
  } else {
    alert("Please enter a valid duration for the timer.");
  }
}

function startCountdown(totalSeconds, message) {
  document.getElementById("dateInput").style.display = "none";
  document.getElementById("timeInput").style.display = "none";
  document.querySelector(".timer").style.display = "block";

  const countdown = setInterval(function () {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("day").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hrs").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("min").innerText =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("sec").innerText =
      seconds < 10 ? "0" + seconds : seconds;

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      document.getElementById("messageSection").style.display = "block";
      document.getElementById("userMessageDisplay").innerText = message;
    } else {
      totalSeconds--;
    }
  }, 1000);
}

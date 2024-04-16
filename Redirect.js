const countdownElement = document.getElementById("countdown");
let timeLeft = 5; // Adjust the initial time (in seconds)

const redirect = () => {
  // Redirect to your desired URL after the timer finishes
  window.location.href = "https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"; 
};

const countdownTimer = setInterval(() => {
  countdownElement.textContent = timeLeft;
  timeLeft--;

  if (timeLeft === 0) {
    clearInterval(countdownTimer);
    redirect();
  }
}, 1000); // Update countdown every second
//Genreted by Google  AI 

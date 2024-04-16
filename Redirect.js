const countdownElement = document.getElementById("countdown");
let timeLeft = 0.13; // Adjust the initial time (in seconds)

const redirect = () => {
  // Redirect to your desired URL after the timer finishes
  window.location.href = "https://www.google.com/search?q=IsMaiL+LaBiaDe"; 
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

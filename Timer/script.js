
let timerInterval;
let totalSeconds = 0;
let remainingSeconds = 0;
let isRunning = false;

  function start() {
      if (!isRunning) {
          isRunning = true;
          totalSeconds = calculateTotalSeconds();
          remainingSeconds = totalSeconds;
          timerInterval = setInterval(updateTimer, 1000);
      }
  }

  function pause() {
      isRunning = false;
      clearInterval(timerInterval);
  }

  function reset() {
      isRunning = false;
      clearInterval(timerInterval);
      totalSeconds = 0;
      remainingSeconds = 0;
      updateDisplay();
  }

  function updateTimer() {
      if (remainingSeconds > 0) {
          remainingSeconds--;
          updateDisplay();
      } else {
          isRunning = false;
          clearInterval(timerInterval);
      }
  }
  function updateDisplay() {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;
      const formattedTime = formatTime(hours, minutes, seconds);
      document.getElementById('timer').textContent = formattedTime;
  }
  function formatTime(hours, minutes, seconds) {
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
function calculateTotalSeconds() {
  const hours = parseInt(document.getElementById('hours').value, 10);
  const minutes = parseInt(document.getElementById('minutes').value, 10);
  const seconds = parseInt(document.getElementById('seconds').value, 10);
  return (hours * 3600) + (minutes * 60) + seconds;
}
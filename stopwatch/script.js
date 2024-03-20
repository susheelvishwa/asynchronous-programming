let timerInterval;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let isRunning = false;

        function start() {
            if (!isRunning) {
                isRunning = true;
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
            seconds = 0;
            minutes = 0;
            hours = 0;
            updateDisplay();
        }

        function updateTimer() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }

        function updateDisplay() {
            const formattedTime = formatTime(hours, minutes, seconds);
            document.getElementById('timer').textContent = formattedTime;
        }

        function formatTime(hours, minutes, seconds) {
            let formattedHours = hours.toString().padStart(2, '0');
            let formattedMinutes = minutes.toString().padStart(2, '0');
            let formattedSeconds = seconds.toString().padStart(2, '0');

            if (hours === 0) {
                formattedHours = '';
            }

            if (hours === 0 && minutes === 0) {
                formattedMinutes = '';
            }

            return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }
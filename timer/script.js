let timer;
        let remainingSeconds;

        function startTimer(minutes) {
            clearInterval(timer); // Clear any existing timer
            remainingSeconds = minutes * 60;
            displayTime(remainingSeconds);

            timer = setInterval(() => {
                remainingSeconds--;
                displayTime(remainingSeconds);
                if (remainingSeconds <= 0) {
                    clearInterval(timer);
                    alert('Time is up!');
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(timer); // Clear any existing timer
            displayTime(0); // Reset display to 00:00
        }

        function displayTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
            document.getElementById('timerDisplay').innerText = timeDisplay;
        }
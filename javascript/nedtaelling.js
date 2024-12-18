// Dato og tid til events
const halloween = new Date('Oct 31, 2024 00:00:00').getTime();
const juleferie = new Date('Dec 20, 2024 14:20:00').getTime();
const birthday = new Date('Dec 22, 2024 02:00:00').getTime();
const christmas = new Date('Dec 24, 2024 18:00:00').getTime();
const newYear = new Date('Jan 1, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();

    // Tid tilbage til events
    updateEvent(halloween, 'days1', 'hours1', 'minutes1', 'seconds1');
    updateEvent(juleferie, 'days2', 'hours2', 'minutes2', 'seconds2');
    updateEvent(birthday, 'days3', 'hours3', 'minutes3', 'seconds3');
    updateEvent(christmas, 'days4', 'hours4', 'minutes4', 'seconds4');
    updateEvent(newYear, 'days5', 'hours5', 'minutes5', 'seconds5');
}

function updateEvent(eventTime, daysId, hoursId, minutesId, secondsId) {
    const now = new Date().getTime();
    const distance = eventTime - now;

    if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(daysId).textContent = days;
        document.getElementById(hoursId).textContent = hours;
        document.getElementById(minutesId).textContent = minutes;
        document.getElementById(secondsId).textContent = seconds;
    } else {
        // Når eventet er slut resetter det til 00
        document.getElementById(daysId).textContent = "00";
        document.getElementById(hoursId).textContent = "00";
        document.getElementById(minutesId).textContent = "00";
        document.getElementById(secondsId).textContent = "00";
    }
}

// Update siden
setInterval(updateCountdown, 1);

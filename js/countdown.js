
document.addEventListener('DOMContentLoaded', function() {
    const daysDisplay = document.getElementById('days');
    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
  
    // Define la fecha límite (año, mes (0-11), día, hora, minutos, segundos)
    const endDate = new Date(2023, 9, 29, 12, 0, 0);
  
    updateCounter(endDate,daysDisplay,hoursDisplay,minutesDisplay,secondsDisplay);
    setInterval(() => updateCounter(endDate,daysDisplay,hoursDisplay,minutesDisplay,secondsDisplay), 1000);
  });
  
  function updateCounter(endDate,daysDisplay,hoursDisplay,minutesDisplay,secondsDisplay) {
    const now = new Date().getTime();
    const timeLeft = endDate - now;
  
    if (timeLeft <= 0) {
      daysDisplay.textContent = '00';
      hoursDisplay.textContent = '00';
      minutesDisplay.textContent = '00';
      secondsDisplay.textContent = '00';
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      daysDisplay.textContent = padZero(days);
      hoursDisplay.textContent = padZero(hours);
      minutesDisplay.textContent = padZero(minutes);
      secondsDisplay.textContent = padZero(seconds);
    }
  }
  
  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
  

  
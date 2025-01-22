let timeLeft = 25 * 60; // 25 minutos en segundos
let timerId = null;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Añadir estilos iniciales a los botones
startButton.style.backgroundColor = '#ff4444';  // Rojo
startButton.style.color = 'white';
pauseButton.style.backgroundColor = '#4CAF50';  // Verde
pauseButton.style.color = 'white';
resetButton.style.display = 'none';  // Ocultar botón de reset

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (timerId === null) {
        resetButton.style.display = 'inline-block';  // Mostrar botón de reset
        startButton.textContent = 'Continuar';  // Cambiar texto del botón
        timerId = setInterval(() => {
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(timerId);
                timeLeft = 25 * 60;
                timerId = null;
                resetButton.style.display = 'none';  // Ocultar botón al terminar
                startButton.textContent = 'Iniciar';  // Restaurar texto original
                alert('¡Tiempo terminado!');
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 25 * 60;
    resetButton.style.display = 'none';  // Ocultar botón al resetear
    startButton.textContent = 'Iniciar';  // Restaurar texto original
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Inicializar la pantalla
updateDisplay(); 
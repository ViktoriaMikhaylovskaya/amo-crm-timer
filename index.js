const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
    return (seconds) => {
        let sec = seconds;

        let timer = setInterval(function() {
            sec = sec - 1;
            
            if (sec === 0) {
                clearInterval(timer);
                timerEl.innerHTML = 'hh:mm:ss';
            } else {
                timerEl.innerHTML = new Date(sec*1000).toUTCString().split(/ /)[4];
            }
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
    inputEl.value = e.target.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    timerEl.innerHTML = new Date(seconds*1000).toUTCString().split(/ /)[4];
    animateTimer(seconds);

    inputEl.value = '';
});
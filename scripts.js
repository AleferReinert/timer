"use strict";

let hh = 0,
    mm = 0,
    ss = 0,
    ms = 0,
    time = 10,
    cron,
    btnStart = document.getElementById('btn-start'),
    btnPause = document.getElementById('btn-pause'),
    btnStop = document.getElementById('btn-stop'),
    counter = document.getElementById('counter');

function timer() {
    ms++;

    if (ms == 100) {
        ms = 0;
        ss++;

        if (ss == 60) {
            ss = 0;
            mm++;

            if (mm == 60) {
                mm = 0;
                hh++;
            }
        }
    }

    let hhFormat = hh > 0 ? hh + ':' : '',
        mmFormat = mm.toString().padStart(2, '0'),
        ssFormat = ss.toString().padStart(2, '0'),
        msFormat = ms.toString().padStart(2, '0'),
        timeFormat = `${hhFormat}${mmFormat}:${ssFormat}<span> ${msFormat}</span>`;

    counter.innerHTML = timeFormat;
    return timeFormat;
}

btnStart.addEventListener('click', function () {
    cron = setInterval(() => { timer(); }, time);
    btnStart.classList.add('hidden');
    btnPause.classList.remove('hidden');
    btnStop.classList.add('hidden');
    btnStart.title = 'Continuar';
});

btnPause.addEventListener('click', function () {
    clearInterval(cron);
    btnStart.classList.remove('hidden');
    btnPause.classList.add('hidden');
    btnStop.classList.remove('hidden');
});

btnStop.addEventListener('click', function () {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;
    counter.innerText = '00:00:00';

    btnStart.classList.remove('hidden');
    btnPause.classList.add('hidden');
    btnStop.classList.add('hidden');
    btnStart.title = 'Iniciar';
});
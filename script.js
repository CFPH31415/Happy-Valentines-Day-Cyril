const yy = document.getElementById('yy');
const dd = document.getElementById('dd');
const hr = document.getElementById('hr');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');

const func = () => {
    const today = new Date();
    const newDate = new Date("October 29, 2022 00:00:00");

    const diff = today - newDate;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    const year = day * 365; // Asumiendo 365 días por año

    const yearDiff = Math.floor(diff / year);
    const dayDiff = Math.floor((diff % year) / day);
    const hrsDiff = Math.floor((diff % day) / hour);
    const minDiff = Math.floor((diff % hour) / min);
    const secDiff = Math.floor((diff % min) / sec);

    yy.innerHTML = yearDiff;
    dd.innerHTML = dayDiff;
    hr.innerHTML = hrsDiff;
    mins.innerHTML = minDiff;
    secs.innerHTML = secDiff;
};

var g = setInterval(() => func(), 1000);

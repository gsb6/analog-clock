const pSecond = document.querySelector('.pointer-second');
const pMinute = document.querySelector('.pointer-minute');
const pHour = document.querySelector('.pointer-hour');

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    pSecond.style.transform = `rotate(${(360 * second / 60) + 90}deg)`;
    pMinute.style.transform = `rotate(${(360 * minute / 60) + 90}deg)`;
    pHour.style.transform = `rotate(${(360 * hour / 12) + 90}deg)`;
    console.log(hour, minute, second);
}

setInterval(setDate, 1000);
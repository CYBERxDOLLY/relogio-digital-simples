const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const clock = setInterval(() => {
    let dateToday = new Date();

    let clockHours = dateToday.getHours();
    let clockMinutes = dateToday.getMinutes();
    let clockSeconds = dateToday.getSeconds();

    if (clockHours < 10) clockHours = '0' + clockHours;
    if (clockMinutes < 10) clockMinutes = '0' + clockMinutes;
    if (clockSeconds < 10) clockSeconds = '0' + clockSeconds;

    hours.textContent = clockHours;
    minutes.textContent = clockMinutes;
    seconds.textContent = clockSeconds;

});
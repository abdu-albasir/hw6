const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const congratulation = document.getElementById('congratulation');

const formatNum = num => num < 10 ? `0${num}` : num;

const countdownInterval = setInterval(() =>{
    let currentDate = new Date();
    let targetDate = new Date(2024, 8, 26);
    let difference = targetDate.getTime() - currentDate.getTime();
    
    let daysValue = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hoursValue = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutesValue = Math.floor((difference / (1000 * 60)) % 60);
    let secondsValue = Math.floor((difference / 1000) % 60);

    days.textContent = formatNum(daysValue);
    hours.textContent = formatNum(hoursValue);
    minutes.textContent = formatNum(minutesValue);
    seconds.textContent = formatNum(secondsValue);

    // Проверяем, все ли значения равны нулю
    if (daysValue === 0 && hoursValue === 0 && minutesValue === 0 && secondsValue === 0) {
        clearInterval(countdownInterval); // Останавливаем интервал
        congratulation.style.display = 'block'; // Отображаем поздравление
    }
}, 1000);

// console.log(date.getTimezoneOffset());
// console.log(date.getTime());
// console.log(date.getMilliseconds());
// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

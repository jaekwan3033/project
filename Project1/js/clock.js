const MONTH_NAME = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// Selecting tag from the HTML
const time_date = document.getElementById('date');
const time_time = document.getElementById('time');

// This function set time and change HTML info with time
const getClock = () => {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = MONTH_NAME[date.getMonth()];
    const day = String(date.getDay()).padStart(2,'0');
    
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');

    time_date.innerText = `${month}.${day}.${year} `;
    time_time.innerText = `${hours}:${minutes}:${seconds}`;
}

// Shows initial time
getClock();
// Time will be updated every 1sec.
setInterval(getClock,1000);


// Selecting tag from the HTML
const clock = document.querySelector("h2#clock");

// This function set time and change HTML info with time
const getClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// Shows initial time
getClock();
// Time will be updated every 1sec.
setInterval(getClock,1000);


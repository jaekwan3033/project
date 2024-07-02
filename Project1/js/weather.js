const API_KEY = '70cfd81a04f53c9c9b03be60135bb09c';

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`;
    fetch(url).
    then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });

}

const onGeoError = () => {
    alert("can't find you. No wather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
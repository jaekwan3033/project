const API_KEY = '70cfd81a04f53c9c9b03be60135bb09c';
const image = [
    "img/clear.png",
    "img/drizzle.png",
    "img/mist.png",
    "img/rain.png",
    "img/snow.png",
    "img/thurderstorm.png"
]; 


const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`;
    fetch(url).
    then(response => response.json())
    .then(data => {
        const city = document.querySelector('#weather span:first-child');
        const weather = document.querySelector('#weather span:last-child');
        const icon = document.querySelector('#weather img');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} °F`;
        switch (data.weather[0].main){
            case 'Clear':
                icon.src="img/clear.png";
                break;
            case 'Thurderstorm':
                icon.src="img/thurderstorm.png";
                break;
            case 'Drizzle':
                icon.src="img/drizzle.png";
                break;
            case 'Rain':
                icon.src="img/rain.png";
                break;
            case 'Snow':
                icon.src="img/snow.png";
                break;
            case 'Mist':
                icon.src="img/mist.png";
                break;
            default:
                icon.src="";
                break;
        }
        });

}

const onGeoError = () => {
    alert("can't find you. No wather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
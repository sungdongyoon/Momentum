const myApi = "c6ebeed2959698d487f0473b370ca219";


function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myApi}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const city = document.querySelector("#city");
      const temp = document.querySelector("#temp");
      const state = document.querySelector("#state");
      const wind = document.querySelector("#wind");
      const humidity = document.querySelector("#humidity");
      const cloud = document.querySelector("#cloud");
      const tempMin = document.querySelector("#temp_min");
      const tempMax = document.querySelector("#temp_max");
      const weatherIcon = document.querySelector(".weather_icon");

      city.innerText = data.name;
      temp.innerText = `${(data.main.temp -273.15).toFixed(1)}℃`;
      state.innerText = data.weather[0].description;
      wind.innerText = `풍속: ${data.wind.speed} ㎧`;
      humidity.innerText = `습도: ${data.main.humidity} %`;
      cloud.innerText = `구름: ${data.clouds.all}%`;
      tempMin.innerText = `최저온도: ${(data.main.temp_min - 273.15).toFixed(1)} ℃`;
      tempMax.innerText = `최고온도: ${(data.main.temp_max- 273.15).toFixed(1)} ℃`;

      const weatherIconImg = data.weather[0].icon;
      const weatherIconAdress = `https://openweathermap.org/img/wn/${weatherIconImg}@2x.png`;

      weatherIcon.setAttribute('src', weatherIconAdress);
    });
}

function error() {
  alert("날씨 정보를 확인할 수 없습니다");
}

navigator.geolocation.getCurrentPosition(success, error);
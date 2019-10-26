// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Url API Forecast
const API_URL_FORE = "http://api.openweathermap.org/data/2.5/forecast/daily"
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER{
  constructor(){
    var city;
    var city_element = document.getElementById('city-input'); 
    console.log(city_element.value);
    if(city_element.value != "")
    {
      city = city_element.value;
    }
    // Si la ville n'est pas définit alors la ville par défault est Paris
    else {
      city = "lyon";
    }
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  /*fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }*/
  fetchForecast(){
    return axios
    .get(`${API_URL_FORE}?q=${this.city}&units=metric&appid=${API_KEY}&cnt=7`, {
      crossdomain: true
    })
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}
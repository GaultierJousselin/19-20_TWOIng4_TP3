
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    /*.fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      /*document.getElementById('tomorrow-forecast-main').innerHTML = main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;

    })*/

    .fetchForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal pour aujourd'hui
      const main = data.list[0].weather[0].main;
      console.log(main);
      const description = data.list[0].weather[0].description;
      console.log(description);
      const temp = data.list[0].temp.day;
      console.log(temp);
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      // On récupère l'information principal pour demain
      const tmain = data.list[1].weather[0].main;
      console.log(tmain);
      const tdescription = data.list[1].weather[0].description;
      console.log(tdescription);
      const ttemp = data.list[1].temp.day;
      console.log(ttemp);
      const ticon = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('tomorrow-forecast-main').innerHTML = tmain;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = tdescription;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = ticon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${ttemp}°C`;


      // On récupère l'information principal pour après-demain
      const ttmain = data.list[2].weather[0].main;
      console.log(ttmain);
      const ttdescription = data.list[2].weather[0].description;
      console.log(ttdescription);
      const tttemp = data.list[2].temp.day;
      console.log(tttemp);
      const tticon = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('j2-forecast-main').innerHTML = ttmain;
      document.getElementById('j2-forecast-more-info').innerHTML = ttdescription;
      document.getElementById('j2-icon-weather-container').innerHTML = tticon;
      document.getElementById('j2-forecast-temp').innerHTML = `${tttemp}°C`;

      // On récupère l'information principal pour encore après-demain
      const tttmain = data.list[3].weather[0].main;
      console.log(tttmain);
      const tttdescription = data.list[3].weather[0].description;
      console.log(tttdescription);
      const ttttemp = data.list[3].temp.day;
      console.log(ttttemp);
      const ttticon = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('j3-forecast-main').innerHTML = tttmain;
      document.getElementById('j3-forecast-more-info').innerHTML = tttdescription;
      document.getElementById('j3-icon-weather-container').innerHTML = ttticon;
      document.getElementById('j3-forecast-temp').innerHTML = `${ttttemp}°C`;

    })


    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

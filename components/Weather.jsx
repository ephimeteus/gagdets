// WeatherWidget.js
import React, { useState, useEffect } from 'react';

// Usar una API externa para obtener los datos del clima
const API_KEY = '8e4cfeb02d7a690f919e6f836cd7523c';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Montevideo&appid=${API_KEY}&units=metric`;

// Crear un componente funcional que muestre el widget de clima
function WeatherWidget() {
  // Usar el hook useState para manejar el estado del clima
  const [weather, setWeather] = useState(null);

  // Usar el hook useEffect para hacer la petición a la API cuando se monte el componente
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // Guardar los datos del clima en el estado
        setWeather(data);
      })
      .catch((error) => {
        // Manejar los posibles errores
        console.error(error);
      });
  }, []);

  // Renderizar el componente según el estado del clima
  if (weather) {
    // Si hay datos del clima, mostrarlos en el widget
    return (
      <div className="weather-widget">
        <div className="weather-upper-section">
          <h1>{weather.name}</h1>
          <p>{weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
        </div>
        <div className="weather-lower-section">
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Feels like: {weather.main.feels_like} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      </div>
    );
  } else {
    // Si no hay datos del clima, mostrar un mensaje de carga
    return <p>Loading the climate...</p>;
  }
}

// Exportar el componente para usarlo en otros archivos
export default WeatherWidget;

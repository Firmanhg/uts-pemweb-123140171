import React from "react";

const DetailCard = ({ weather, unit, city }) => {
  if (!weather || !weather.weather) return null;
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit ===- "metric" ? "m/s" : "mph";

  const getFontAwesomeClass = (code) => {
    const baseClass = "fa-solid";
    switch (code) {
      case '01d': return `${baseClass} fa-sun`;
      case '01n': return `${baseClass} fa-moon`;
      case '02d': return `${baseClass} fa-cloud-sun`;
      case '02n': return `${baseClass} fa-cloud-moon`;
      case '03d':
      case '03n': return `${baseClass} fa-cloud`;
      case '04d':
      case '04n': return `${baseClass} fa-cloud-meatball`; // Awan lebih tebal
      case '09d':
      case '09n': return `${baseClass} fa-cloud-showers-heavy`;
      case '10d': return `${baseClass} fa-cloud-sun-rain`;
      case '10n': return `${baseClass} fa-cloud-moon-rain`;
      case '11d':
      case '11n': return `${baseClass} fa-cloud-bolt`;
      case '13d':
      case '13n': return `${baseClass} fa-snowflake`;
      case '50d':
      case '50n': return `${baseClass} fa-smog`;
      default: return `${baseClass} fa-temperature-half`;
    }
  };
  
  const iconClass = getFontAwesomeClass(weather.weather[0].icon);

  return (
    <div className="detail-card">
      <h2>{weather.dt_txt.split(" ")[0]}</h2>
      <h4 className="detail-city-name">{city}</h4>

      <i className={`weather-icon-fa ${iconClass}`}></i>
      
      <h3>{weather.weather[0].description}</h3>
      <p>🌡️ Suhu: {weather.main.temp.toFixed(1)} {tempUnit}</p>
      <p>💧 Kelembapan: {weather.main.humidity}%</p>
      <p>💨 Angin: {weather.wind.speed} {windUnit}</p>
    </div>
  );
};

export default DetailCard;
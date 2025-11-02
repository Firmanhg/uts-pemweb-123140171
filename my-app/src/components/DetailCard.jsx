import React from "react";

const DetailCard = ({ weather, unit, city }) => {
  if (!weather || !weather.weather) return null;
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";

  // BARU: Pemetaan Ikon ke Emoji
  const getEmoji = (code) => {
    const MAPPING = {
      '01d': '☀️', // Cerah (Siang)
      '01n': '🌙', // Cerah (Malam)
      '02d': '⛅', // Sedikit Berawan (Siang)
      '02n': '☁️', // Sedikit Berawan (Malam)
      '03d': '☁️', // Berawan
      '03n': '☁️', // Berawan
      '04d': '☁️', // Sangat Berawan
      '04n': '☁️', // Sangat Berawan
      '09d': '🌧️', // Hujan Deras
      '09n': '🌧️', // Hujan Deras
      '10d': '🌦️', // Hujan (Siang)
      '10n': '🌧️', // Hujan (Malam)
      '11d': '⛈️', // Badai
      '11n': '⛈️', // Badai
      '13d': '❄️', // Salju
      '13n': '❄️', // Salju
      '50d': '🌫️', // Kabut
      '50n': '🌫️', // Kabut
    };
    return MAPPING[code] || '❔'; // Fallback
  };
  
  const weatherIconEmoji = getEmoji(weather.weather[0].icon);

  return (
    <div className="detail-card">
      <h2>{weather.dt_txt.split(" ")[0]}</h2>
      <h4 className="detail-city-name">{city}</h4>

      {/* GANTI <img> dengan <span> emoji */}
      <span className="weather-icon-emoji" role="img">
        {weatherIconEmoji}
      </span>
      
      <h3>{weather.weather[0].description}</h3>
      <p>🌡️ Suhu: {weather.main.temp.toFixed(1)} {tempUnit}</p>
      <p>💧 Kelembapan: {weather.main.humidity}%</p>
      <p>💨 Angin: {weather.wind.speed} {windUnit}</p>
    </div>
  );
};

export default DetailCard;
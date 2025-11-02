import React from "react";

// 1. Terima 'city' sebagai prop
const DetailCard = ({ weather, unit, city }) => {
  if (!weather || !weather.weather) return null;
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="detail-card">
      <h2>{weather.dt_txt.split(" ")[0]}</h2>
      
      {/* 2. BARU: Tampilkan nama kota di bawah tanggal */}
      <h4 className="detail-city-name">{city}</h4>

      <img src={iconUrl} alt="icon" className="weather-icon" />
      <h3>{weather.weather[0].description}</h3>
      <p>🌡️ Suhu: {weather.main.temp.toFixed(1)} {tempUnit}</p>
      <p>💧 Kelembapan: {weather.main.humidity}%</p>
      <p>💨 Angin: {weather.wind.speed} {windUnit}</p>
    </div>
  );
};

export default DetailCard;
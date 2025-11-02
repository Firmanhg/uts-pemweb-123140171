import React from "react";

const DetailCard = ({ weather, unit }) => {
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="detail-card">
      <h2>{weather.dt_txt.split(" ")[0]}</h2>
      <img src={iconUrl} alt="icon" />
      <h3>{weather.weather[0].description}</h3>
      <p>🌡️ Suhu: {weather.main.temp.toFixed(1)} {tempUnit}</p>
      <p>💧 Kelembapan: {weather.main.humidity}%</p>
      <p>💨 Angin: {weather.wind.speed} {windUnit}</p>
    </div>
  );
};

export default DetailCard;

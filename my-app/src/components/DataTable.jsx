import React from "react";

const DataTable = ({ forecast, unit }) => {
  const tempUnit = unit === "metric" ? "°C" : "°F";

  // BARU: Pemetaan Ikon ke Emoji
  const getEmoji = (code) => {
    const MAPPING = {
      '01d': '☀️', '01n': '🌙',
      '02d': '⛅', '02n': '☁️',
      '03d': '☁️', '03n': '☁️',
      '04d': '☁️', '04n': '☁️',
      '09d': '🌧️', '09n': '🌧️',
      '10d': '🌦️', '10n': '🌧️',
      '11d': '⛈️', '11n': '⛈️',
      '13d': '❄️', '13n': '❄️',
      '50d': '🌫️', '50n': '🌫️',
    };
    return MAPPING[code] || '❔';
  };

  return (
    <div className="forecast-table">
      <h3>📅 Prakiraan 5 Hari Kedepan</h3>
      <table>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Cuaca</th>
            <th>Suhu</th>
            <th>Kelembapan</th>
            <th>Angin</th>
          </tr>
        </thead>
        <tbody>
          {forecast.map((item, i) => (
            <tr key={i}>
              <td>{item.dt_txt.split(" ")[0]}</td>
              <td>
                {/* GANTI <img> dengan <span> emoji */}
                <span className="table-weather-icon-emoji" role="img">
                  {getEmoji(item.weather[0].icon)}
                </span>
                {' '}
                {item.weather[0].main}
              </td>
              <td>{item.main.temp.toFixed(1)} {tempUnit}</td>
              <td>{item.main.humidity}%</td>
              <td>{item.wind.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
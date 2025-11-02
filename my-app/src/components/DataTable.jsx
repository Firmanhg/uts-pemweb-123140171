import React from "react";

const DataTable = ({ forecast, unit }) => {
  const tempUnit = unit === "metric" ? "°C" : "°F";

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
      case '04n': return `${baseClass} fa-cloud-meatball`;
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
                {/* GANTI <i> Climacon dengan <i> Font Awesome */}
                <i className={`table-weather-icon-fa ${getFontAwesomeClass(item.weather[0].icon)}`}></i>
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
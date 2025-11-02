import React from "react";

const DataTable = ({ forecast, unit }) => {
  const tempUnit = unit === "metric" ? "°C" : "°F";
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
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={item.weather[0].main}
                />{" "}
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

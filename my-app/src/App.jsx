import React, { useEffect, useState } from "react";
import Header from "./header";
import SearchForm from "./SearchForm";
import DetailCard from "./DetailCard";
import DataTable from "./DataTable";
import "./App.css";

const App = () => {
  const apiKey = "YOUR_API_KEY_HERE"; // 🔑 Ganti dengan API key kamu
  const [city, setCity] = useState("Cilegon");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState("metric"); // metric = °C, imperial = °F
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}&lang=id`
      );
      const data = await res.json();
      if (data.cod === "200") {
        setWeather(data.list[0]); // cuaca saat ini
        // ambil 1 data tiap 8 jam (karena forecast 3 jam sekali, total 8 per hari)
        const dailyData = data.list.filter((_, i) => i % 8 === 0);
        setForecast(dailyData);

        // simpan ke history
        const newHistory = [cityName, ...history.filter((c) => c !== cityName)].slice(0, 5);
        setHistory(newHistory);
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      } else {
        alert("Kota tidak ditemukan!");
      }
    } catch (err) {
      console.error(err);
      alert("Gagal memuat data cuaca");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [unit]);

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="app-container">
      <Header unit={unit} toggleUnit={toggleUnit} />
      <SearchForm onSearch={fetchWeather} history={history} />
      {weather && <DetailCard weather={weather} unit={unit} />}
      {forecast.length > 0 && <DataTable forecast={forecast} unit={unit} />}
    </div>
  );
};

export default App;

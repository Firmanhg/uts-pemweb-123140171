import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DetailCard from "./components/DetailCard";
import DataTable from "./components/DataTable";
import "./App.css";

const App = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState("Cilegon");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setCity(cityName); // <-- PERBAIKAN BUG
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}&lang=id`
      );
      const data = await res.json();
      if (data.cod === "200") {
        setWeather(data.list[0]);
        const dailyData = data.list.filter((_, i) => i % 8 === 0);
        setForecast(dailyData);

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

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className="app-container">
      <Header
        unit={unit}
        toggleUnit={toggleUnit}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <SearchForm onSearch={fetchWeather} history={history} />
      
      <div className="dashboard-grid">
        {/* PERBAIKAN NAMA KOTA: prop city={city} ditambahkan */}
        {weather && <DetailCard weather={weather} unit={unit} city={city} />}
        {forecast.length > 0 && <DataTable forecast={forecast} unit={unit} />}
      </div>
    </div>
  );
};

export default App;
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

  // Di dalam App.jsx
const fetchWeather = async (cityName) => {
  if (!cityName) return;
  setCity(cityName); // <-- TAMBAHKAN BARIS INI
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}&lang=id`
    );
    // ... sisa kode ...

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

  // Di dalam file App.jsx

  return (
    <div className="app-container">
      <Header
        unit={unit}
        toggleUnit={toggleUnit}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <SearchForm onSearch={fetchWeather} history={history} />

      {/* 👇 TAMBAHKAN DIV PEMBUNGKUS INI 👇
        Ini akan mengaktifkan layout 2 kolom di desktop 
      */}
      <div className="dashboard-grid">
        {weather && <DetailCard weather={weather} unit={unit} />}
        {forecast.length > 0 && <DataTable forecast={forecast} unit={unit} />}
      </div>
      
    </div>
  );
};

export default App;

import React from "react";

const Header = ({ unit, toggleUnit, darkMode, toggleDarkMode }) => {
  return (
    <header className="app-header">
      <h1>🌤️ Weather Dashboard</h1>
      <div className="header-buttons">
        <button onClick={toggleUnit}>
          {unit === "metric" ? "°C → °F" : "°F → °C"}
        </button>
        <button onClick={toggleDarkMode}>
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;

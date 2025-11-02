import React from "react";

const Header = ({ unit, toggleUnit }) => {
  return (
    <header className="app-header">
      <h1>🌤️ Weather Dashboard</h1>
      <button onClick={toggleUnit} className="toggle-unit">
        Ubah ke {unit === "metric" ? "°F" : "°C"}
      </button>
    </header>
  );
};

export default Header;

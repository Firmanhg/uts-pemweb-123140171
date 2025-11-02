import React, { useState } from "react";

const SearchForm = ({ onSearch, history }) => {
  const apiKey = "YOUR_API_KEY_HERE";
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`
      );
      const data = await res.json();
      setSuggestions(data.map((city) => `${city.name}, ${city.country}`));
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Cari nama kota..."
          list="city-suggestions"
        />
        <button type="submit">Cari</button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, i) => (
            <li key={i} onClick={() => { setQuery(item); onSearch(item); setSuggestions([]); }}>
              {item}
            </li>
          ))}
        </ul>
      )}

      {history.length > 0 && (
        <div className="history">
          <h4>Riwayat:</h4>
          {history.map((item, i) => (
            <button key={i} onClick={() => onSearch(item)}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchForm;

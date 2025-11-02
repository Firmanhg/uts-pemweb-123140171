import React, { useState } from "react";

const SearchForm = ({ onSearch, history, onDeleteHistoryItem }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // HAPUS: State isFocused

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          setSuggestions(data.map((city) => `${city.name}, ${city.country}`));
        } else {
          setSuggestions([]);
        }
      } catch (err) {
        console.error("Gagal mengambil suggestions:", err);
        setSuggestions([]);
      }
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
  
  const handleSuggestionClick = (item) => {
    setQuery(item); 
    onSearch(item); 
    setSuggestions([]);
  };

  return (
    <div className="search-container-wrapper">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Cari nama kota..."
            autoComplete="off"
            // HAPUS: onFocus dan onBlur
          />
          <button type="submit">Cari</button>
        </form>

        {/* --- RIWAYAT DIPINDAHKAN KEMBALI KE SINI --- */}
        {history.length > 0 && (
          <div className="history">
            <h4>Riwayat:</h4>
            <div className="history-list">
              {history.map((item, i) => (
                <div key={i} className="history-item">
                  <span 
                    className="history-name" 
                    // GANTI KEMBALI ke onClick
                    onClick={() => onSearch(item)}
                  >
                    {item}
                  </span>
                  <button 
                    className="history-delete" 
                    // GANTI KEMBALI ke onClick
                    onClick={() => onDeleteHistoryItem(item)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> {/* Akhir .search-container */}

      {/* --- Daftar Saran (Tetap di luar sebagai overlay) --- */}
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, i) => (
            <li 
              key={i} 
              onMouseDown={() => handleSuggestionClick(item)} 
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
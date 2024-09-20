import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import Navbar from "./Navbar"; // Import the new Navbar component
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=5406ec4e";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('Popular'); // State for selected category

  useEffect(() => {
    searchMovies(category === 'Popular' ? 'Batman' : category);
  }, [category]); 

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    searchMovies(selectedCategory);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="navbar-container">
        <Navbar onSelect={handleCategorySelect} /> {/* Include Navbar */}
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

const MovieList = () => {
  const movies = [
    { title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`Movie Title: ${title}`);
  };

  const uniqueGenres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === 'All Genres' 
    ? movies 
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="container">
      <h1>Movie List</h1>
      <select className="dropdown" onChange={handleGenreChange} value={selectedGenre}>
        {uniqueGenres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>

      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <div 
            key={index} 
            className="movie-card" 
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

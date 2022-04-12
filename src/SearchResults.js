import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchResults = ({ searchMovies }) => {
  const { searchRes } = useParams();

  const IMG_API = "https://image.tmdb.org/t/p/w500/";

  const moviesList = searchMovies.filter((movie) =>
    movie.title.include(searchRes)
  );
  return (
    <div id="searchedMovies">
      <div className="list">
        {moviesList.map((movie) => (
          <div className="movie" key={movie.id}>
            {/* <Link to={`/${movie.id}`}> */}
            <div className="movie-desc">
              <img
                src={IMG_API + movie.poster_path}
                className="image"
                alt="movie poster"
              />
              <div className="description">
                <p>{movie.overview}</p>
              </div>
            </div>
            <h1> {movie.name}</h1>
            <h1> {movie.title}</h1>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

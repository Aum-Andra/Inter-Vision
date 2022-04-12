import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Homepage = ({ movies, page, setPage }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w500/";

  return (
    <div id="homepage">
      <div className="container">
        <div className="movies">
          {movies.map((movie) => (
            <div key={movie.id} className="movie">
              <Link to={`/${movie.id}`}>
                <div className="movie-desc">
                  <div className="img-container">
                    <img
                      src={IMG_API + movie.poster_path}
                      className="image"
                      alt="movie poster"
                    />
                  </div>
                  <div className="description">
                    <p>{movie.overview}</p>
                  </div>
                </div>
                <h1> {movie.name}</h1>
                <h1> {movie.title}</h1>
              </Link>
            </div>
          ))}
          <div className="load">
            <FontAwesomeIcon
              onClick={() => setPage(page + 1)}
              className="icon"
              icon={faAnglesRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

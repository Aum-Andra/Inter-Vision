import React from "react";
import { useParams } from "react-router-dom";

const Movie = ({ movies }) => {
  const { id } = useParams();
  const thisMovie = movies.find((movie) => id == movie.id);
  const IMG_API = "https://image.tmdb.org/t/p/w500/";
  return (
    <section id="movie-details">
      <div className="container-xxl ">
        <div className="movie-details">
          <div className="img">
            <img src={IMG_API + thisMovie.poster_path} alt="" />
          </div>
          <div className="details">
            <div className="title">
              <h1>{thisMovie.name}</h1>
              <h1>{thisMovie.title}</h1>
            </div>
            <div className="rating">
              <h3>
                {thisMovie.vote_average} ({thisMovie.vote_count} reviews)
              </h3>
            </div>
            <div className="summary">
              <p>{thisMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;

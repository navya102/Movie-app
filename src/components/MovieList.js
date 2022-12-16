import React from "react";

const MovieList = (props) => {
  var imageurl, url;
  var movies = props.movies;

  return (
    <div>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img
            src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`}
            alt="movie"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

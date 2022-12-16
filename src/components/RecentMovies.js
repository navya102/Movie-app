import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MovieList from "./MovieList";
import SearchMovies from "./SearchMovies";

const RecentMovies = () => {
  const [movies, setMovies] = useState([]);
  const getMovieRequest = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c0644178ab79ffcf915db43da533c67a&language=en-US&page=1";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson.results);
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };
  console.log(movies);
  useEffect(() => {
    getMovieRequest();
  }, []);
  console.log(movies);
  return (
    <div>
      <div className="container-fluid movie-app">
        <h5>Most Recent Movies</h5>
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default RecentMovies;

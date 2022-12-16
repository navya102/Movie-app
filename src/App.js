import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import MovieList from "./components/MovieList";
import RecentMovies from "./components/RecentMovies";
import SearchMovies from "./components/SearchMovies";

import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RecentMovies />}></Route>
          <Route path="/relatedMovies" element={<SearchMovies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

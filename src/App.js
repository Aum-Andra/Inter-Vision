import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Movie from "./Movie";
import Navbar from "./Navbar";

function App() {
  // api key:  b0c2cf3c238d0820e968bab999dc9963 from TMDB API
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const SearchAPI =
    "https://api.themoviedb.org/3/search/multi?api_key=b0c2cf3c238d0820e968bab999dc9963&page=1&query=";

  const fetchMovies = async (e) => {
    if (search == "") {
      const res = await fetch(
        ` https://api.themoviedb.org/3/trending/all/day?api_key=b0c2cf3c238d0820e968bab999dc9963&page=${page}`
      );
      const data = await res.json();
      setMovies(data.results);
    } else if (search !== "") {
      fetch(SearchAPI + search)
        .then((res) => res.json())
        .then((foundData) => setMovies(foundData.results));
    }
    // console.log(data);
  };

  useEffect(() => {
    fetchMovies();
    console.log("useeffect ran");
  }, [search, page]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} setPage={setPage} />
        <Routes>
          <Route
            path="/"
            element={<Homepage movies={movies} page={page} setPage={setPage} />}
          />
          <Route path="/:id" element={<Movie movies={movies} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

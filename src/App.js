import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import { useEffect } from "react";
import { fetchMovies } from "./features/movies/moviesSlice";

function App() {
  const { background, movie } = useSelector((store) => store.movies);
  const dispatch = useDispatch()

  useEffect(function(){
    dispatch(fetchMovies('mortal kombat'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <BrowserRouter>
      <div className={`${background ? "App-dark" : ""}`}>
        <Routes>
          <Route 
            path="/"
            element= {<Homepage />}
          />
          <Route 
            path="/movie-detail"
            element= {<MovieDetail />}
          />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;

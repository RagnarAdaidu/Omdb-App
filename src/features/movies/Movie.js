import { useDispatch, useSelector } from "react-redux";
import { backgroundStatus, fetchId, removeId } from "./moviesSlice";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const { movieId, movie : moviess, background } = useSelector((store) => store.movies);
  const dispatch = useDispatch();



  function handleSelectId(id) {
    if (id === movieId) {
      console.log('Hello world')
      dispatch(backgroundStatus(false));
    }
    dispatch(fetchId(id));
  }

  return (
    <li>
      <div className="movie-div">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <button
          className="view-btn btn"
          onClick={() => {
            dispatch(backgroundStatus(true));
            handleSelectId(movie.imdbID);
          }}
        >
          View
        </button>
      </div>
    </li>
  );
}

import { useSelector } from "react-redux";
import {
  HiOutlineClock,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlineHeart,
} from "react-icons/hi2";
import MovieList from "../features/movies/MovieList";
import Sidebar2 from "./Sidebar2";
import SidebarSlide from "../components/SidebarSlide";
import { useTimeHook } from "../hooks/useTimeHook";

export default function MovieDetail() {
  const { movies, movieId, movie, background } = useSelector(
    (store) => store.movies
  );

  const filteredMovies = movies.Search.filter((movie) => {
    return movie.imdbID !== movieId;
  });

  // console.log(filteredMovies)

  const {
    Title: title,
    Poster: poster,
    Plot: plot,
    Released: released,
    Ratings,
    Runtime: runtime,
  } = movie;
  const rating = Ratings[0]?.Value?.split("/")[0];
  const newRuntime = useTimeHook(Number(runtime?.split(' ')[0]))
  // console.log(newRuntime)
  return (
    <div className="grid custom">
      <Sidebar2 />
      <div className="grid grid--4-cols scroll movie-detail-padding">
        <div className="movie-detail">
          <img
            src={poster}
            alt={`${title} poster`}
            className="movie-detail-image"
          />
          <div className="movie-description">
            <h2 className="heading-tertiary2">{title}</h2>
            <p className="subheading3">{plot}</p>

            <ul className="movie-detail-ul">
              <li>
                <HiOutlineClock className="movie-detail-icon-dark" />
                <span>{released}</span>
              </li>
              <li>
                <HiOutlineStar className="movie-detail-icon-dark" />
                <span>{rating}</span>
              </li>
              <li>
                <HiOutlinePlay className="movie-detail-icon-dark" />
                {newRuntime}
              </li>
            </ul>
            <div className="movie-detail-footer">
              <button className="btn search-btn">Watch Now</button>
              <span className="heart-div">
                <HiOutlineHeart className="movie-detail-heart" />
              </span>
            </div>
          </div>
        </div>
        <h2 className="movie-detail-h2 heading-tertiary2">Similar Movies</h2>
        <MovieList movies={filteredMovies} />
        {background && <SidebarSlide />}
      </div>
    </div>
  );
}

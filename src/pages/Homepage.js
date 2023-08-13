import { useSelector } from "react-redux";
import SearchDisplayMovie from "../features/movies/SearchDisplayMovie";
import Sidebar from "./Sidebar";
import MovieList from "../features/movies/MovieList";
import SidebarSlide from "../components/SidebarSlide";

export default function Homepage() {
  const { movieId, movies, background } = useSelector((store) => store.movies);
  
  const filteredMovies = movies.Search
  return (
    <div className="grid custom">
      <Sidebar />
      <div className="grid grid--4-cols scroll">
        <SearchDisplayMovie />
        {/* {isLoading ? <Loader /> : <MovieList />} */}
        <MovieList movies={filteredMovies} />
        {background && <SidebarSlide />}
      </div>
    </div>
  );
}

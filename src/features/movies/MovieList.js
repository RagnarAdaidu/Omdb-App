// import { useSelector } from 'react-redux';
import Movie from './Movie';

export default function MovieList({movies}) {
  // const { movies } = useSelector(store => store.movies)

  // const moviesArray = movies.Search
  // console.log(moviesArray)

  return (
    <ul className='take-all-row grid grid--4-cols'>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
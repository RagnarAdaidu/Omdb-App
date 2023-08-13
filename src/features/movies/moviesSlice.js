const initialState = {
  movies: [],
  movie: {},
  movieId: "",
  isLoading: false,
  background: false,
};

const KEY = "1fbb7d99";

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "omdb/fetchMovies":
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      };
    case "omdb/fetchMovie":
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
      };
    case "omdb/fetchingMovies":
      return {
        ...state,
        isLoading: true,
      };
    case "omdb/fetchId":
      return {
        ...state,
        movieId: action.payload,
      };
    case "omdb/error":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "omdb/background":
      return {
        ...state,
        background: action.payload,
      };
    default:
      return state;
  }
}

export function fetchMovies(query) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "omdb/fetchingMovies" });
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();

      dispatch({ type: "omdb/fetchMovies", payload: data });
    } catch (error) {
      if (error) {
        console.log(error.message);
        dispatch({ type: "omdb/error", payload: error.message });
        dispatch({ type: "omdb/fetchMovies", payload: [] });
      }
    }
  };
}

export function fetchMovie(movieId) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "omdb/fetchingMovies" });
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${movieId}`
      );
      const data = await res.json();

      dispatch({ type: "omdb/fetchMovie", payload: data });
    } catch (error) {
      if (error) {
        console.log(error.message);
        dispatch({ type: "omdb/error", payload: error.message });
        dispatch({ type: "omdb/fetchMovie", payload: {} });
      }
    }
  };
}

export function fetchId(id) {
  return {
    type: "omdb/fetchId",
    payload: id,
  };
}

export function removeId(id) {
  return {
    type: "omdb/fetchId",
    payload: null,
  };
}
export function backgroundStatus(status) {
  return {
    type: "omdb/background",
    payload: status,
  };
}
// export function removeBackground(id){
//   return {
//     type: 'omdb/background', payload: false
//   }
// }

import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { backgroundStatus, fetchMovie, removeId } from '../features/movies/moviesSlice';
import { useNavigate } from 'react-router-dom';
import { useOutsideClick } from '../hooks/useOutsideClick';

export default function SidebarSlide() {

  const navigate = useNavigate()
  const ref = useOutsideClick()

  const { movieId, movie } = useSelector((store) => store.movies);
  const dispatch = useDispatch()

  // console.log(movieId)

  const {
    Title: title,
    Poster: poster,
    Plot: plot,
  } = movie;

  useEffect(() =>{
    dispatch(fetchMovie(movieId))
  }, [dispatch, movieId])

  useEffect(function(){
    if (!title) return
    document.title = `Movie | ${title}`

    return function(){
      document.title = `OMDB - Movies`
    }
  }, [title])
  
  return (
    <div className='sidebarSlide' ref={ref}>
      <button className='btn-back' 
        onClick={() => {
          dispatch(backgroundStatus(false))
        }}
      >
        &larr;
      </button>
      <div className="movie">
        <img src={poster} alt={title} className='movie-img' 
          onClick={() => {
            navigate('/movie-detail')
            dispatch(backgroundStatus(false))
          }}
        />
        <h2 className='heading-tertiary'>{title}</h2>
        <p className='subheading2'>{plot}</p>
        {/* <button className='btn search-btn'
          onClick={() => navigate('/movie-detail')}
        >Watch</button> */}
      </div>
    </div>
  )
}

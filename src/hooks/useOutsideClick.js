import { useEffect, useRef } from "react";
import { backgroundStatus, removeId } from "../features/movies/moviesSlice";
import { useDispatch } from "react-redux";

export function useOutsideClick(listenCapturing = true){
  const ref = useRef()
  const dispatch = useDispatch()

  useEffect(function() {
    function handleClick(e){
      if (ref.current && !ref.current.contains(e.target)){
        dispatch(removeId())
        dispatch(backgroundStatus(false))
      } 
    }

    document.addEventListener('click', handleClick, listenCapturing)

    return () => document.removeEventListener('click', handleClick, listenCapturing)
  }, [dispatch, listenCapturing])

  return ref
}













// import { useEffect, useRef } from "react";
// import { backgroundStatus, removeId } from "../features/movies/moviesSlice";
// import { useDispatch } from "react-redux";

// export function useOutsideClick(){
//   const ref = useRef()
//   const dispatch = useDispatch()

//   useEffect(function() {
//     function handleClick(e){
//       if (ref.current && !ref.current.contains(e.target)){
//         dispatch(removeId())
//         dispatch(backgroundStatus(false))
//       } 
//     }

//     document.addEventListener('click', handleClick, true)

//     return () => document.removeEventListener('click', handleClick, true)
//   }, [dispatch])
// }
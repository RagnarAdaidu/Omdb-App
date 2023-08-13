import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeId } from "../features/movies/moviesSlice"

export default function Sidebar2() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className="section-sidebar">
      <header className={`header ${toggleMenu ? 'nav-open' : ''}`} 
        onClick={() => {
          navigate('/')
          dispatch(removeId())
        }}
      >
        <h1 className="heading-primary">Show<span className="heading-primary-blue">Flix</span> </h1>
        <nav className="main-nav">
          <ul className="main-nav-list">
          <li className="main-nav-link" 
            onClick={() => {
              setToggleMenu(false)
              navigate('/')
            }
            }
          >
            <ion-icon class='special-ion' name="search-outline"></ion-icon>
            <span>Search</span>
          </li>
          <li className="main-nav-link special" onClick={() => setToggleMenu(false)}>
          <ion-icon class='special-ion-2' name="heart-outline"></ion-icon>
            <span className="special">Watchlist</span>
          </li>
          </ul>
        </nav>
        <button class="btn-mobile-nav" onClick={() => setToggleMenu(prev => !prev)}>
          {!toggleMenu && <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>}
          {toggleMenu && <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>}
      </button>
      </header>
    </div>
  )
}

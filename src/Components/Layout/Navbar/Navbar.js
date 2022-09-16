import React from "react"
import { Outlet, Link } from "react-router-dom"

import { HiHome } from "react-icons/hi"
import { FaUserCircle } from "react-icons/fa"
import { RiMovieFill } from "react-icons/ri"
import { MdLocalMovies } from "react-icons/md"
import { SiShowpad } from "react-icons/si"


import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navr">
      <div className="navv">
        <div className="pageLogo">
          <h4 className="plogo">
            <Link className="logoer" to="/">
              <SiShowpad className="icon" /> .bingewatch
            </Link>
          </h4>
        </div>
        <div className="list">
          <ul className="uler">
            <li>
              <Link className="lier" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="lier" to="/movies">
                Movies
              </Link>
            </li>
            <li>
              <Link className="lier" to="/tvshows">
                TV Shows
              </Link>
            </li>
            <li>
              <Link className="lier" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* for medium Devices  */}
      <div className="meduim">
        <ul className="ulermd">
          <li>
            <Link className="lier" to="/">
              <HiHome size={27}  className="icns" />
            </Link>
          </li>
          <li>
            <Link className="lier" to="/movies">
              <MdLocalMovies size={27}  className="icns" />
            </Link>
          </li>
          <li>
            <Link className="lier" to="/tvshows">
              <RiMovieFill size={27} className="icns"  />
            </Link>
          </li>
          <li>
            <Link className="lier" to="/login">
              <FaUserCircle size={27} className="icns"  />
            </Link>
          </li>
        </ul>
      </div>
      {/* for medium Devices  */}

      <Outlet className="Outlet" />
    </div>
  )
}

export default Navbar

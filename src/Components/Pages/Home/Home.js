import React from "react"
import "./home.css"
import Movies from "../../assets/movie.svg"
import TVShow from "../../assets/tvshow.svg"
import News from "../../assets/news.svg"
import Icon from "../../assets/Icon.png"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="defaultHeader">
      <div className="heroBanner container">
        <div className="image">
          <img src={Icon} alt="HeroBanner" className="Himg" />
        </div>
        <div className="contents">
          <p className="hContent">
            Watch your favorite movies and tv shows on one site without any ad
            interruption and get access to world premiers shows and movies
            within a single click
          </p>

          <div className="hBtn">
            <Link to="/login">
              <button className="homebtn">Sign in</button>
            </Link>
          </div>
        </div>
      </div>

      <hr />

      {/* Next Items  */}

      <div className="nextContent container">
        <div className="moviesdesc">
          <div className="moviepic">
            <img src={Movies} alt="" className="hImg" />
          </div>
          <div className="moviedes">
            <h2 className="hText">Best of All Time Movies. </h2>
            <p>
              Over 100+ of Movies streaming online do watch in single click and
              premium contents.
            </p>
            <Link to="/movies">
              <button className="homebtn">Movies</button>
            </Link>
          </div>
        </div>

        <div className="tvdesc">
          <div className="moviepic">
            <img src={TVShow} alt="" className="hIimg" />
          </div>
          <div className="tvdes">
            <h2 className="hText">Watch your Favorite TVShows. </h2>
            <p>
              The TV shows you like and the shows you are looking for just in a
              single click with a premium contents{" "}
            </p>
            <Link to="/tvshows">
              <button className="homebtn">Tv Shows</button>
            </Link>
          </div>
        </div>
      </div>

      {/* subscribe page  */}

      <div className="subscribe moviesdesc container">
        <div className="subimage">
          <img src={News} alt="" className="hIimg" />
        </div>
        <div className="subtext">
          <h2 className="hText">Subscribe to NewsLetter.</h2>
          <input
            type="email"
            placeholder="Subscribe to newsLetter "
            className="hletter"
          />
          <button className="homebtn">Subscribe</button>
        </div>
      </div>

      {/* subscribe page  */}
    </div>
  )
}

export default Home

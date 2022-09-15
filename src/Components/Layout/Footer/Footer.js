import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer ">
      <div className="divver">
        <div className="div">
          <h4 className="fheading">.bingewatch</h4>
          <p className="fpara">
            Watch your favorite movies and tv shows in one site without any ad
            interuption and get access to world premiers shows and movies within
            a single click
          </p>
        </div>
        <div className="div">
          <h5 className="fnames">Quick Links</h5>

          {/* Cpoied  */}
          <div className="list">
            <ul className="fler">
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
          {/* Cpoied  */}
        </div>
        <div className="div">
          <h5 className="fnames">Contact Us</h5>

          <div className="list">
            <p>Ph - 0123456789</p>
            <p>email - bingewatch@abc.com</p>
            <p>website - www.bingewatch.in</p>
          </div>
        </div>
        <div className="div">
          <h5 className="fnames"> Follow Us on</h5>
          <div className="icons">
            <FaTwitter size={25} className="icon" />
            <FaFacebook size={25} className="icon" />
            <FaInstagram size={25} className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

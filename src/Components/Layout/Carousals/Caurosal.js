import React, { useEffect, useState } from "react"

import { BiCrown } from "react-icons/bi"
import "./caurosal.css"
import axios from "axios"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Caurosal = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerPadding: "50px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerPadding: "50px",
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
    ],
  }

  const [bg, setBg] = useState([])
  const [bg1, setBg1] = useState([])
  const [bg2, setBg2] = useState([])
  const [bg3, setBg3] = useState([])

  useEffect(() => {
    const requestBGPoster = async () => {
      const requestPoster = await axios.get("/movie/now_playing")
      setBg(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  // Duplicates for 3
  useEffect(() => {
    const requestBGPoster = async () => {
      const requestPoster = await axios.get("/movie/popular")
      setBg1(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  useEffect(() => {
    const requestBGPoster = async () => {
      const requestPoster = await axios.get("/movie/top_rated")
      setBg2(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  useEffect(() => {
    const requestBGPoster = async () => {
      const requestPoster = await axios.get("/movie/upcoming")
      setBg3(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  // Duplicates for 3

  const posters = bg.map((ebg) => {
    return (
      <Link to={`/details/${ebg.id}`}>
        <div className="postImg" key={ebg.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${ebg.poster_path}`}
            alt="Movies Banner"
            className="banner"
          />
        </div>
      </Link>
    )
  })

  // Duplicates Map Function

  const posters1 = bg1.map((ebg) => {
    return (
      <Link to={`/details/${ebg.id}`}>
        <div className="postImg" key={ebg.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${ebg.poster_path}`}
            alt="Movies Banner"
            className="banner"
          />
        </div>
      </Link>
    )
  })

  const posters2 = bg2.map((ebg) => {
    return (
      <Link to={`/details/${ebg.id}`}>
        <div className="postImg" key={ebg.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${ebg.poster_path}`}
            alt="Movies Banner"
            className="banner"
          />
        </div>
      </Link>
    )
  })

  const posters3 = bg3.map((ebg) => {
    return (
      <Link to={`/details/${ebg.id}`}>
        <div className="postImg" key={ebg.id}>
          <div className="premium">
            {" "}
            <BiCrown size={20} />
          </div>

          <img
            src={`https://image.tmdb.org/t/p/original${ebg.poster_path}`}
            alt="Movies Banner"
            className="banner"
          />
        </div>
      </Link>
    )
  })

  // Duplicates Map Function

  return (
    <div className="caurosals">
      <div className="toprated">
        <h6 className="cHeadings">Latest Movies</h6>
        <Slider {...settings}>{posters}</Slider>
      </div>

      {/* duplicates  */}
      <div className="toprated">
        <h6 className="cHeadings">Popular Movies</h6>
        <Slider {...settings}>{posters1}</Slider>
      </div>

      <div className="toprated">
        <h6 className="cHeadings">Top rated Movies</h6>
        <Slider {...settings}>{posters2}</Slider>
      </div>

      <div className="toprated">
        <h6 className="cHeadings">Upcoming Movies</h6>
        <Slider {...settings}>{posters3}</Slider>
      </div>
      {/* duplicates  */}
    </div>
  )
}

export default Caurosal

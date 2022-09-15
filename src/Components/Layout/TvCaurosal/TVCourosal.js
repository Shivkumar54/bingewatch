import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BiCrown } from "react-icons/bi"
import axios from "axios"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const TVCaurosal = () => {
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
      const requestPoster = await axios.get("/tv/on_the_air")
      setBg(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  // Duplicates for 3
  useEffect(() => {
    const requestBGPoster = async () => {
      const requestPoster = await axios.get("/tv/top_rated")
      setBg1(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  useEffect(() => {
    const requestBGPoster = async () => {
      const requestPoster = await axios.get("/tv/popular")
      setBg2(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  useEffect(() => {
    const requestBGPoster = async () => {
      const requestPoster = await axios.get("/tv/airing_today")
      setBg3(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  // Duplicates for 3

  const posters = bg.map((ebg) => {
    return (
      <Link to={`/tvdetails/${ebg.id}`}>
        <div className="postImg" key={ebg.id}>
          <div className="premium">
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

  const posters1 = bg1.map((ebg) => {
    return (
      <Link to={`/tvdetails/${ebg.id}`}>
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
      <Link to={`/tvdetails/${ebg.id}`}>
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
      <Link to={`/tvdetails/${ebg.id}`}>
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

  return (
    <div className="caurosals">
      <div className="toprated">
        <h6 className="cHeadings">Latest TV shows</h6>
        <Slider {...settings}>{posters}</Slider>
      </div>

      {/* duplicates  */}
      <div className="toprated">
        <h6 className="cHeadings">Top Rated TV shows</h6>
        <Slider {...settings}>{posters1}</Slider>
      </div>

      <div className="toprated">
        <h6 className="cHeadings">Popular TV shows</h6>
        <Slider {...settings}>{posters2}</Slider>
      </div>

      <div className="toprated">
        <h6 className="cHeadings">Only for you</h6>
        <Slider {...settings}>{posters3}</Slider>
      </div>
      {/* duplicates  */}
    </div>
  )
}

export default TVCaurosal

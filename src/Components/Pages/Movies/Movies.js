import React, { useState } from "react"
import "./movies.css"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Caurosal from "../../Layout/Carousals/Caurosal"
import { useEffect } from "react"
import axios from "axios"

import { Link } from "react-router-dom"

const Movies = () => {
  const settings = {
    arrows: true,
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "150px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  }

  const [bg, setBg] = useState([])

  useEffect(() => {
    const requestBGPoster = async () => {
      const requestPoster = await axios.get("/movie/top_rated")
      setBg(requestPoster.data.results)
    }
    requestBGPoster()
  }, [])

  const banners = bg.map((ebg) => {
    return (
      <Link to={`/details/${ebg.id}`}>
        <div className="imagr" key={ebg.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${ebg.backdrop_path}`}
            alt="Movies Banner"
            className="banner"
          />
        </div>
      </Link>
    )
  })

  return (
    <div className="defaultHeader">
      <Slider {...settings}>{banners}</Slider>
      <Caurosal />
    </div>
  )
}

export default Movies

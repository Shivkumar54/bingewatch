import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { HiPlay, HiPlus } from "react-icons/hi"
import "./detail.css"
const Details = () => {
  const { id } = useParams()

  const [movieData, setMovieData] = useState([])

  //  for Movies
  useEffect(() => {
    const requestMovieDataFromTMDB = async () => {
      const requestData = await axios.get(`/movie/${id}`)
      setMovieData(requestData.data)
    }
    requestMovieDataFromTMDB()
  })

  //  for Movies


  return (
    <div className="defaultHeader ">
      <div className="contentHolder ">
        <div className="imagerLoader">
          <div className="posterImage">
            <img
              src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
              alt="Movie Poster"
              className="rootPoster"
            />
          </div>
          <div className="contentLoader container ">
            <h1 className="titleCard">{movieData.title}</h1>

            <h5 className="secondary">
              ORIGINAL TITLE - {movieData.original_title}
            </h5>

            <h6 className="secondary release">
              LANGUAGE - {movieData.original_language}
            </h6>

            <h6 className="secondary release">
              RELEASE DATE - {movieData.release_date}
            </h6>
            <p className="secondary">{movieData.overview}</p>

            <div className="btngrp">
              <button className=" btn">
                {" "}
                <HiPlay size={30} /> Watch Now
              </button>
              <button className="second-btn btn">
                {" "}
                <HiPlus size={30} /> PlayList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details

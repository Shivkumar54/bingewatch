import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { HiPlay, HiPlus } from "react-icons/hi"
const TVDetail = () => {
  const { id } = useParams()

  const [TVData, setTVData] = useState([])

  // For TV
  useEffect(() => {
    const requestMovieDataFromTMDB = async () => {
      const requestData = await axios.get(`/tv/${id}`)
      setTVData(requestData.data)
    }
    requestMovieDataFromTMDB()
  })

  // For TV

  return (
    <div className="defaultHeader ">
      <div className="contentHolder ">
        <div className="imagerLoader">
          <div className="posterImage">
            <img
              src={`https://image.tmdb.org/t/p/original${TVData.poster_path}`}
              alt="Movie Poster"
              className="rootPoster"
            />
          </div>
          <div className="contentLoader container ">
            <h1 className="titleCard">{TVData.name}</h1>

            <h5 className="secondary">
              ORIGINAL TITLE - {TVData.original_title}
            </h5>

            <h6 className="secondary release">
              LANGUAGE - {TVData.original_language}
            </h6>

            <h6 className="secondary release">
              RELEASE DATE - {TVData.release_date}
            </h6>
            <p className="secondary">{TVData.overview}</p>

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

export default TVDetail
